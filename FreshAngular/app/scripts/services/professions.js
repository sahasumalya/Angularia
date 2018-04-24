'use strict';

/**
 * @ngdoc service
 * @name freshAngularApp.professions
 * @description
 * # professions
 * Factory in the freshAngularApp.
 */
angular.module('freshAngularApp')
  .factory('professions',['$rootScope','$http','$cookies','$location',function (rs,hp,cok,loc) {

    var obj={};
    obj.fetch=function(username,password,cb){

      console.log(username);
      console.log(password);
      hp({
        url:'https://app-staging.californiacolleges.edu/ajs-services/user/login',
        method:'POST',
        data:{
          username:username,
          password:password
        }
      }).then(function(resp){
        window.alert('Connected');
        cb(resp.data);

        cok.putObject('username',username);
        cok.putObject('password',password);
        rs.username=username;
        rs.password=password;
      },function(resp){
        cb(resp.data);
        window.alert('Error');
        loc.path('/');

      });

    };
    return obj;
    
    
  }]);
