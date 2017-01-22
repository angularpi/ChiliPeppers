'use strict';

angular.module('chiliPeppersApp')
  .controller('MainCtrl', ['$scope', 'chiliService', function ($scope, chiliService) {
      $scope.showDescription = false;
      $scope.chilis = chiliService.query(); //brings an array with all the chilis
    }])

  .controller('chiliDesctiptionCtrl', ['$scope', function ($scope) {
      $scope.showDescription = false;
      $scope.toggleDescription = function(){
        $scope.showDescription = !$scope.showDescription;
      };
    }])

  .controller('commentCtrl', ['$scope', 'commentService', 'commentModService', 'chiliService', '$stateParams', '$state', function ($scope, commentService, commentModService, chiliService, $stateParams, $state) {
      $scope.chiliObject = $scope.chili;
      $scope.showComments = false;
      $scope.showForm = $scope.showComments;
      //$scope.chiliComments = commentService.query();

      $scope.toggleComments = function () {
        $scope.showComments = !$scope.showComments;
        $scope.showForm = $scope.showComments;
        $scope.chiliComments = commentService.query({id:$scope.chili.id})
      };

      $scope.submitComment = function () {
        var comment = {};
        comment = {chilliId:$scope.chiliObject.id, comment:$scope.newComment}
        commentModService.save(comment)
        console.log(comment);
        $state.go($state.current, {}, {reload: true});
      };

      $scope.deleteComment = function (commentid) {
        var comment = {};
        comment = {id:commentid}
        commentModService.delete(comment);
        console.log("deleting comment " + commentid);

        $state.go($state.current, {}, {reload: true});
      }
  }])
