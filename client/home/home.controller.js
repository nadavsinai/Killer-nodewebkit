/**
 * HomeController
 */
class HomeController {

  // @ngInject
  constructor( $scope, $state, KillerService ) {
    this.$scope = $scope;
    this.$state = $state;
    this.KillerService = KillerService;
  }

  nextPhase() {
    this.submitted = true;
    if( this.$scope.numPlayersForm.$valid ) {
      this.KillerService.setNumPlayers(Number(this.numPlayers));
      this.KillerService.initPlayers();
      setTimeout(() => {
        this.$state.go('registerPlayers');
      }, 500)

    }
  }

}

export default HomeController;
