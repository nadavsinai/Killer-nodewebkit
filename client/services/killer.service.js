class KillerService {
  /**
   *
   * @param store
   */
    // @ngInject
    constructor( store ) {
    this.store = store;
    this.words = ['orange', 'nervous', 'snail', 'trust', 'TV', 'monkey', 'calculator', 'game', 'impulse', 'rabbits', 'boxes', 'chunky', 'excited', 'nose', 'yoke', 'wine', 'humdrum', 'woebegone', 'thankful', 'addicted', 'proud', 'crazy', 'dolls', 'stupid', 'advice', 'shaky', 'bikes', 'army', 'guide', 'ruthless', 'slow', 'dress', 'idiotic', 'amusing', 'abstracted', 'language', 'offer', 'jail', 'swing', 'psychotic', 'brass', 'sneeze', 'industry', 'glorious'];
    this.gameConfig = {
      numPlayers: '',
      players   : []
    };
    this.winner = {};
  }

  /**
   * Get number of players
   * @returns {*|KillerService.gameConfig.numPlayers}
   */
    getNumPlayers() {
    return this.gameConfig.numPlayers;
  }

  /**
   * Get the current players
   * @returns {*|KillerService.gameConfig.players}
   */
    getPlayers() {
    return this.gameConfig.players;
  }

  /**
   * Add new player
   * @returns {{name: string, killed: boolean, nameToKill: string, word: string}}
   */
    addNewPlayer() {

    this.gameConfig.players.push({
      name      : '',
      killed    : false,
      imgPath   : 'img/ninja-odd.png',
      nameToKill: '',
      word      : '',
      newPlayer : true
    });

    this.saveGameConfig();

  }

  /**
   * Prepare the players for ng repeat and save the game config to local storage
   */
    initPlayers() {

    for( var i = 0; i < this.gameConfig.numPlayers; i++ ) {
      this.gameConfig.players.push({
        name      : '',
        imgPath   : 'img/ninja-odd.png',
        killed    : false,
        nameToKill: '',
        word      : ''
      })
    }

    this.saveGameConfig();
  }

  /**
   * Set every player task and name to kill and save to local storage
   */
    configPlayersTasks() {

    let numPlayers = this.gameConfig.numPlayers - 1;

    this.gameConfig.players = _.shuffle(this.gameConfig.players);

    for( let i = 0; i <= numPlayers; i++ ) {
      let word = this.words.pop(),
      nameToKillIndex = 0;

      if( i < numPlayers ) {
        nameToKillIndex = i + 1;
      }
      this.gameConfig.players[i].word = word;
      this.gameConfig.players[i].nameToKill = this.gameConfig.players[nameToKillIndex].name;
    }
    this.saveGameConfig();
  }

  /**
   * Remove player
   * @param player
   */
    removePlayer( player ) {
    this.gameConfig.players.splice(this.gameConfig.players.indexOf(player), 1);
    this.saveGameConfig();
  }

  /**
   * Set the number of players and save to local storage
   * @param numPlayers
   */
    setNumPlayers( numPlayers ) {
    this.gameConfig.numPlayers = numPlayers;
    this.saveGameConfig();

  }

  /**
   * Kill player by set killed to true
   * @param player
   */
    killPlayer( player ) {

    let playerToKill = this.gameConfig.players.filter(( p ) => {
      return player.nameToKill === p.name;
    });

    playerToKill[0].killed = true;
    player.word = playerToKill[0].word;
    player.nameToKill = playerToKill[0].nameToKill;
    this.saveGameConfig();

  }

  /**
   * Get the game config from local storage
   * @returns {*}
   */
    getGameConfig() {
    return this.store.get('gameConfig');
  }

  /**
   * Save the game config from local storage
   */
    saveGameConfig() {
    this.store.set('gameConfig', this.gameConfig);
  }

  /**
   * Reset the game
   */
    newGame() {
    this.gameConfig = {
      numPlayers: '',
      players   : []
    };
    this.store.remove('gameConfig');
  }

  /**
   * Set the winner
   * @param player
   */
    setWinner( player ) {
    this.winner = player;
  }

}

export default KillerService
