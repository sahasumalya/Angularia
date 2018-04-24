'use strict';

/**
 * @ngdoc function
 * @name freshAngularApp.controller:PermissionDeniedCtrl
 * @description
 * # PermissionDeniedCtrl
 * Controller of the freshAngularApp
 */
angular.module('freshAngularApp')
  .controller('PermissionDeniedCtrl',['$rootScope','$scope','$location',function (rs,s,loc) {
  	s.Go_Back=function(){
  	  rs.push=1;
      loc.path('/verify');
  	};
    
  }]);
