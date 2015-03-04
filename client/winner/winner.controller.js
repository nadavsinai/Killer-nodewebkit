/**
 * WinnerController
 */
class WinnerController {
  /**
   *
   * @param $state
   * @param KillerService
   */
// @ngInject
    constructor( $state, KillerService ) {
    this.$state = $state;
    this.KillerService = KillerService

  }

  /**
   * New game
   */
    newGame() {
    this.KillerService.newGame();
    this.$state.go('home');
  }

}

export default WinnerController;
