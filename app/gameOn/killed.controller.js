/**
 * KilledController
 */
class KilledController {
  // @ngInject
  constructor( $modalInstance, player, KillerService ) {
    this.player = player;
    this.KillerService = KillerService;
    this.$modalInstance = $modalInstance;
  }

  close( killed ) {
    if( killed ) {
      this.KillerService.killPlayer(this.player);
    }
    this.$modalInstance.close();
  }

}

export default KilledController