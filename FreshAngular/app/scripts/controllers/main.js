'use strict';

/**
 * @ngdoc function
 * @name freshAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the freshAngularApp
 */
angular.module('freshAngularApp')
  .controller('MainCtrl',['$rootScope','$scope','professions','$location',function (rs,s,pro,loc) {
  	s.username='';
  	s.password='';
    s.initialize=function(){
      //for(var key in rs.roles)
        //rs.roles[key]=0;
    };
  	s.submit=function(){
  		pro.fetch(s.username,s.password,function(data){
  			rs.details=data;
        
        loc.path('/verify');

  		});
      

      //while(rs.details==undefined);
      


  	};
  	s.show=function(){
      for(var keya in rs.roles)
      {
        rs.roles[keya]=0;
      }
     // alert(rs.details.users.roles);
     // if(rs.details.users.roles!=undefined)
     // {
  		  var users=rs.details.user.roles;
        for(var key in users)
        {
          if(key==2)
          {
            rs.roles.authenticated_user=1;
          }
          else if(key==19)
          {
            rs.roles.lead_counsellor=1;
          }
          else if(key==4)
          {
            rs.roles.teacher=1;
          }
          else if(key==14)
          {
            rs.roles.staff=1;
          }
          else if(key==7)
          {
            rs.roles.school_admin=1;
          }
          else if(key==10)
          {
            rs.roles.district_admin=1;
          }
        }

        for(var keyi in rs.roles)
        {
          console.log(keyi+'='+rs.roles[keyi]);
        }
     // }
  	};
   
  }]);