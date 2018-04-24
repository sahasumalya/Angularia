'use strict';

/**
 * @ngdoc function
 * @name freshAngularApp.controller:ProfilesCtrl
 * @description
 * # ProfilesCtrl
 * Controller of the freshAngularApp
 */
angular.module('freshAngularApp')
  .controller('ProfilesCtrl',['$rootScope','$location' ,function (rs,lc) {
  		if(rs.roles.authenticated_user==0)
  		{
  			window.alert('Unauthorized action..redirecting');
  			lc.path('/');

  		}

    
  }]);
