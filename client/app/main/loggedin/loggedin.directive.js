'use strict';

angular.module('votingApp')
  .directive('loggedin', function () {
    return {
      templateUrl: 'app/main/loggedin/loggedin.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });