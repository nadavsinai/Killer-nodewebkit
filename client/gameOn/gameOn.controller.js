/**
 * GameOnController
 */
class GameOnController {
  /**
   *
   * @param $state
   * @param KillerService
   * @param $modal
   */
    // @ngInject
    constructor( $state, KillerService, $modal ) {
    this.$state = $state;
    this.$modal = $modal;
    this.KillerService = KillerService;

  }

  /**
   *
   * @param player
   */
    showModal( player ) {
    if(player.killed) return;

    let modal = this.$modal.open({

      controller : 'KilledModalController as km',
      templateUrl: 'client/gameOn/views/killedModal.tpl.html',
      size       : 'lg',
      resolve    : {
        player: function() {
          return player;
        }
      }

    });

    modal.result.then(() => {

      let livePlayers = this.KillerService.getPlayers().filter(( player ) => {
        return player.killed === false;
      });

      if( livePlayers.length === 1 ) {
        this.KillerService.setWinner(livePlayers[0]);
        this.$state.go('winner');
      }
    });
  }

}

export default GameOnController;
