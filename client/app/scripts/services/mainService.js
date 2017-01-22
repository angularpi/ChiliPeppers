'use strict';

angular.module('chiliPeppersApp')
.constant("baseURL", "http://0.0.0.0:3000/")
.factory('chiliService', ['$resource', 'baseURL', function ($resource, baseURL) {
    return $resource(baseURL + 'api/chillis/:id')
  }])

.factory('commentService', ['$resource', 'baseURL', function ($resource, baseURL) {
  return $resource(baseURL + "api/Chillis/:id/comments/:commentId", {id:"@Id", commentId:"@CommentId"})
}])

.factory('commentModService', ['$resource', 'baseURL', function ($resource, baseURL) {
  return $resource(baseURL + 'api/Comments/:id', {id:"@id"})
}])

//
// .factory('commentService', ['$resource', 'baseURL', function ($resource, baseURL) {
//     return $resource(baseURL + 'api/comments/:id');
// }])
