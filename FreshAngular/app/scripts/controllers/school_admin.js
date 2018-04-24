'use strict';

/**
 * @ngdoc function
 * @name freshAngularApp.controller:SchoolAdminCtrl
 * @description
 * # SchoolAdminCtrl
 * Controller of the freshAngularApp
 */
angular.module('freshAngularApp')
  .controller('SchoolAdminCtrl',['$rootScope','$scope','$cookies','$location' ,function (rs,s,cok,loc) {
    if(rs.roles.school_admin!=1 || cok.getObject('school_admin')!=1)
  	{
  		console.log('permission_denied');
  		window.alert('redirecting to permission_denied page');
  		loc.url('/permission_denied');
  	}
  }]);
