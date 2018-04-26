'use strict';

/**
 * @ngdoc service
 * @name newsAngularApp.newsFactory
 * @description
 * # newsFactory
 * Factory in the newsAngularApp.
 */
angular.module('newsAngularApp')
  .factory('newsFactory',['$rootScope','$http',function (rs,hp) {
    var obj={};
    obj.fetch=function(keyword,priority,cb){
      hp({
        url:'https://newsapi.org/v2/everything?q='+keyword+'&from=2018-04-1&sortBy='+priority+'&pagesize=100&apiKey=0882f2dc698e444893543fcc30f9e995',
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
