'use strict';

/**
 * @ngdoc function
 * @name freshAngularApp.controller:VerifyCtrl
 * @description
 * # VerifyCtrl
 * Controller of the freshAngularApp
 */
angular.module('freshAngularApp')
  .controller('VerifyCtrl',['$rootScope','$scope','$cookies','$location',function (rs,s,cok,loc) {
  	s.show=function(){
      if(rs.details.user==undefined)
      {
        window.alert('Unauthorized Access');
        loc.path('/');
      }
      for(var keya in rs.roles)
      {
        rs.roles[keya]=0;
      }
      if(rs.push==0)
      {
      	cok.remove('authenticated_user');
      	cok.remove('lead_councellor');
      	cok.remove('councellor');
      	cok.remove('staff');
      	cok.remove('teacher');
      	cok.remove('district_admin');
      	cok.remove('school_admin');
  	  }
  	  rs.push=0;
  
     // alert(rs.details.users.roles);
     // if(rs.details.users.roles!=undefined)
     // {
  		  var users=rs.details.user.roles;
        for(var key in users)
        {
          if(key==2)
          {
            rs.roles.authenticated_user=1; 
            cok.putObject('authenticated_user','1');
          }
          else if(key==19)
          {
            rs.roles.lead_councellor=1;
            cok.putObject('lead_councellor','1');
          }
          else if(key==4)
          {
            rs.roles.teacher=1;
            cok.putObject('teacher','1');
          }
          else if(key==14)
          {
            rs.roles.staff=1;
            cok.putObject('staff','1');
          }
          else if(key==7)
          {
            rs.roles.school_admin=1;
            cok.putObject('school_admin','1');
          }
          else if(key==10)
          {
            rs.roles.district_admin=1;
            cok.putObject('district_admin','1');
          }
          else if(key==9)
          {
          	rs.roles.councellor=1;
          	cok.putObject('councellor','1');
          }
          
        }

        for(var keyi in rs.roles)
        {
          console.log(keyi+'='+rs.roles[keyi]);
        }
     // }
  	};
  	s.logout=function(){
  		cok.remove('authenticated_user');
      	cok.remove('lead_councellor');
      	cok.remove('councellor');
      	cok.remove('staff');
      	cok.remove('teacher');
      	cok.remove('district_admin');
      	cok.remove('school_admin');
      	rs.details='';
      	rs.username='';
      	rs.password='';
        console.log('logging out');
      	loc.path('/');
  	};
  	var username=cok.getObject('username');
  	var password=cok.getObject('password');
  	if(username==undefined || password==undefined)
  	{
  		window.alert('Unauthorized Access');
  		loc.path('/');
  	}
  	else if(username!=rs.username || password!=rs.password  || rs.details.user==undefined)
  	{
  		console.log(username);
  		console.log(rs.username);
  		window.alert('Unauthorized Access');
  		loc.path('/');
  	}
    else
    {
    	s.show();
    	console.log('show ended');	
    }
  	//s.show();
  	
  	


    
  }]);
