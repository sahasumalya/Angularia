'use strict';

/**
 * @ngdoc function
 * @name freshAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the freshAngularApp
 */
angular.module('freshAngularApp')
  .controller('LoginCtrl',['$rootScope','$scope','professions',function (rs,s,pro) {
  	s.username='';
  	s.password='';

  	s.submit=function(){
  		pro.fetch(s.username,s.password,function(data){
  			rs.details=data;
  		});


  	};
  	s.show=function(){
  		//console.log(rs.details.user.name);
  		console.log(rs.details);
  		//alert(rs.details.user.uid);
  	};
   
  }]);
