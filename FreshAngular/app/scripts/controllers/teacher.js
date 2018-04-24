'use strict';

/**
 * @ngdoc function
 * @name freshAngularApp.controller:TeacherCtrl
 * @description
 * # TeacherCtrl
 * Controller of the freshAngularApp
 */
angular.module('freshAngularApp')
  .controller('TeacherCtrl', ['$rootScope','$scope','$location','$cookies',function (rs,s,loc,cok) {
    if(rs.roles.teacher!=1 || cok.getObject('teacher')!=1)
  	{
  		console.log('permission_denied');
  		window.alert('redirecting to permission_denied page');
  		loc.url('/permission_denied');
  	}
  }]);
