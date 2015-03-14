var baseFile = __dirname + '/index.html';
var nwBinary;

switch (process.platform) {
    case 'darwin':
        nwBinary = './node_modules/nw/nwjs/nwjs.app/Contents/MacOS/nwjs';
        break;
    case 'linux':
        nwBinary = './node_modules/nw/bin/nw';
        break;
    case 'win32':
        nwBinary  = './node_modules/nw/nwjs/nw.exe';
        break;

}
exports.config = {
    directConnect: true,
    chromeDriver: '/usr/local/bin/chromedriver',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            // Path to NW.js binary goes here!
            binary: nwBinary
        }
    },
    // Spec patterns are relative to the location of this config.
    onPrepare: function () {
       // browser.ignoreSynchronization = true;
        browser.resetUrl = 'file://' + baseFile;
        browser.driver.get('file://' + baseFile);
        browser.waitForUrlToChangeTo = function (urlRegex) {
            var currentUrl, resolved;

            return browser.getCurrentUrl().then(function storeCurrentUrl(url) {
                    currentUrl = url;
                    resolved = urlRegex.test(url);
                }
            ).then(function () {
                    return (resolved) ? true : browser.wait(function waitForUrlToChangeTo() {
                        return browser.getCurrentUrl().then(function compareCurrentUrl(url) {
                            return urlRegex.test(url);
                        });
                    });
                }
            );
        };
    },
    onComplete: function () {
    },
    baseUrl: __dirname + '/index.html',
    specs: [
        'app/**/*.e2eSpec.js'
    ]
};