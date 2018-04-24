'use strict';

/**
 * @ngdoc function
 * @name freshAngularApp.controller:StaffCtrl
 * @description
 * # StaffCtrl
 * Controller of the freshAngularApp
 */
angular.module('freshAngularApp')
  .controller('StaffCtrl',['$rootScope','$scope','$cookies','$location',function (rs,s,cok,loc) {
    if(rs.roles.staff!=1 || cok.getObject('staff')!=1)
  	{
  		console.log('permission_denied');
  		window.alert('redirecting to permission_denied page');
  		loc.url('/permission_denied');
  	}
  }]);
