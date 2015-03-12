/**
 * NamesTasksController
 */
class NamesTasksController {
  /**
   *
   * @param $state
   * @param KillerService
   * @param $scope
   */
    // @ngInject
    constructor( $state, KillerService ) {
    this.$state = $state;
    this.KillerService = KillerService
    this.player = KillerService.getPlayers()[0];
    this.playerId = 0;
    this.callPlayer = true;

  }

  /**
   * Show player task
   */
    showTask() {
    this.callPlayer = false;
  }

  /**
   * Show next player task or start the game
   */
    nextPlayer() {
    if( this.playerId === this.KillerService.getPlayers().length - 1 ) {
      this.$state.go('gameOn');
    } else {
      this.callPlayer = true;
      this.player = this.KillerService.getPlayers()[++this.playerId];
    }
  }

}

export default NamesTasksController;
