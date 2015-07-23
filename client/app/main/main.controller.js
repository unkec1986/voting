'use strict';

angular.module('votingApp')
    .controller('MainCtrl', function ($scope, $http, $location, Auth) {
        $scope.awesomeThings = [];
        $scope.isLoggedIn = Auth.isLoggedIn;

        $http.get('/api/things').success(function (awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        $scope.addThing = function () {
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/things', {
                name: $scope.newThing
            });
            $scope.newThing = '';
        };

        $scope.deleteThing = function (thing) {
            $http.delete('/api/things/' + thing._id);
        };

        $scope.signup = function () {
            $location.path('/signup');
        }
    });
