'use strict';

/**
 * @ngdoc service
 * @name freshAngularApp.check
 * @description
 * # check
 * Factory in the freshAngularApp.
 */
angular.module('freshAngularApp')
  .factory('check',['$rootScope','$cookies','$location',function (rs,cok,loc) {

    var obj={};
    obj.fetch=function(path){
      var num=path.substring(1);
      console.log('num'+num);
      var status=0;
      if(cok.getObject(num)==1)
      {
        status=1;
      }
      else
      {
        console.log(num);
        console.log(cok.getObject(num));
        console.log('permission_denied');
        loc.path('/permission_denied');
      }
  

    };
    return obj;
    


    
  }]);
