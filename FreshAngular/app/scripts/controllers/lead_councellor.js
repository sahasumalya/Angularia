'use strict';

/**
 * @ngdoc function
 * @name freshAngularApp.controller:LeadCouncellorCtrl
 * @description
 * # LeadCouncellorCtrl
 * Controller of the freshAngularApp
 */
angular.module('freshAngularApp')
  .controller('LeadCouncellorCtrl',['$rootScope','$scope','$cookies','$location', function (rs,s,cok,loc) {
   if(rs.roles.lead_councellor!=1 || cok.getObject('lead_councellor')!=1)
  	{
  		console.log('permission_denied');
  		window.alert('redirecting to permission_denied page');
  		loc.url('/permission_denied');
  	}
  }]);
