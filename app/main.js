const $ = require("../vendor/jquery/dist/jquery.js");
window.jQuery = $;
require("../vendor/wait-me/dist/waitMe.min.js");
const angular = require('angular');
if (process.env.NODE_ENV === 'test') {
    require('angular-mocks');
}
require("../vendor/lodash/lodash.js");
require("../vendor/angular-ui-router/release/angular-ui-router.js");
require("../vendor/angular-messages/angular-messages.js");
require("../vendor/angular-foundation/mm-foundation-tpls.js");
require("../vendor/angular-storage/dist/angular-storage.js");

import modules from './modules.js';

import runPhase from './config/runPhase.js';

angular.module('killer', modules).run(runPhase);

import services from './services/services.index.js';

import directives from './directives/directives.index.js';

import home from './home/home.index.js';

import registerPlayers from './registerPlayers/registerPlayers.index.js';

import namesTasks from './NamesTasks/namesTasks.index.js';

import GameOn from './gameOn/gameOn.index.js';

import Winner from './winner/winner.index.js';



