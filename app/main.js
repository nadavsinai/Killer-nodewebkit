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



