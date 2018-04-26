'use strict';

/**
 * @ngdoc service
 * @name newsAngularApp.topFactory
 * @description
 * # topFactory
 * Factory in the newsAngularApp.
 */
angular.module('newsAngularApp')
  .factory('topFactory',['$rootScope','$http', function (rs,hp) {
    var obj={};
    obj.fetch=function(cb){
      hp({
        url:'https://newsapi.org/v2/top-headlines?country=in&apiKey=0882f2dc698e444893543fcc30f9e995',
        method:'GET'
      })
      .then(function(resp){
        console.log("Connected");
        cb(resp.data);
      },function(resp){
        console.log("error");
      });

    };
    return obj;
    
  }]);
