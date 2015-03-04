// @ngInject
function imageUpload() {
  return {
    restrict: 'A',
    link    : link
  }
  function link( $scope, elem ) {
    elem.bind('change', function() {
      $scope.player.imgPath = this.value;
      $scope.player.imgSet = true
      $scope.$digest();
    });
  }
}

module.exports = imageUpload;