/**
 * RegisterPlayers
 */
class RegisterPlayersController {

  // @ngInject
  constructor( $state, KillerService, $scope, $interval ) {
    this.$state = $state;
    this.$scope = $scope;
    this.KillerService = KillerService;
    this.$interval = $interval;
    this.progressWidth = 20;
    this.addPlayers = true;

  }

  addPlayer() {
    this.KillerService.addNewPlayer();
  }

  removePlayer( player ) {
    this.KillerService.removePlayer(player);
  }

  nextPhase() {
    this.submitted = true;

    let emptyNames = this.KillerService.getPlayers().filter(( player ) => {
      return player.name === '';
    });

    let uniqeNames = _.uniq(this.KillerService.getPlayers(), ( player ) => {
      return player.name;
    })

    if( emptyNames.length ) {
      this.emptyFields = true;
      return;
    }

    if( uniqeNames.length < this.KillerService.getPlayers().length ) {
      this.emptyFields = false;
      this.sameName = true;
      return;
    }

    this.addPlayers = false;
    this.KillerService.configPlayersTasks();
    let interval = this.$interval(() => {
      if( this.progressWidth >= 100 ) {
        this.$interval.cancel(interval);
        this.$state.go('namesTasks.readyMessage');
      } else {
        this.progressWidth += 20;
      }

    }, 500)

  }

}

export default RegisterPlayersController;
