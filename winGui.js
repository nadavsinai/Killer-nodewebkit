var winGui = function (document, gui) {
    var gui = gui || window.require("nw.gui");
    var win = gui.Window.get();

    win.resizeTo(1200, 860);
    win.focus();

    var mb = new gui.Menu({type: "menubar"});
    var helpMenu = new gui.Menu();
    helpMenu.append(new gui.MenuItem({
        label: 'New Game',
        click: function () {
            alert('New Game');
        }
    }));
    mb.append(new gui.MenuItem({
        label: 'WordKiller',
        submenu: helpMenu
    }));

    if (process.platform == 'darwin') {
        mb.createMacBuiltin("Word Killer");
    }
    gui.Window.get().menu = mb;


    var closeWin = document.getElementById('close');
    closeWin.addEventListener('click', function () {
        win.close();
    });

    var minimizeWin = document.getElementById('minimize');
    minimizeWin.addEventListener('click', function () {
        win.minimize();
    });

    var maximizeWin = document.getElementById('maximize');
    maximizeWin.addEventListener('click', function () {
        win.maximize();
    });


    document.body.addEventListener('contextmenu', function (ev) {
        ev.preventDefault();
        mb.popup(ev.x, ev.y);
        return false;
    });
};

module.exports = winGui;

