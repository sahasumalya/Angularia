'use strict';

/**
 * @ngdoc function
 * @name freshAngularApp.controller:DistrictAdminCtrl
 * @description
 * # DistrictAdminCtrl
 * Controller of the freshAngularApp
 */
angular.module('freshAngularApp')
  .controller('DistrictAdminCtrl',['$rootScope','$scope','$cookies','$location', function (rs,s,cok,loc) {
    if(rs.roles.district_admin!=1 || cok.getObject('district_admin')!=1)
  	{
  	    console.log('permission_denied');
  		window.alert('redirecting to permission_denied page');
  		loc.url('/permission_denied');
  	}
  }]);
