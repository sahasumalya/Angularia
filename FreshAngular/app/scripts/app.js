'use strict';

/**
 * @ngdoc overview
 * @name freshAngularApp
 * @description
 * # freshAngularApp
 *
 * Main module of the application.
 */
angular
  .module('freshAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(['$rootScope',function(rs){
    /*rs.$on("$routeChangeStart",function(event,current){
      console.log("routeChangedSuccess");
      var temp=current.$$route.templateUrl.split('/');
      var file=temp[1].split('.');
      console.log(file[0]);
      if(file[0]!="main" && file[0]!="verify" && file[0]!="permission_denied")
      {
        console.log("checking starts");
        console.log(cok.getObject(file[0]));
        if(cok.getObject(file[0])==undefined)
        {
          console.log("redirection starts");
          loc.path("/permission_denied");
        }
      }


    });*/
    rs.roles={
      authenticated_user:0,
      lead_councellor:0,
      teacher:0,
      councellor:0,
      staff:0,
      school_admin:0,
      district_admin:0
    };
    rs.push=0;
  }])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',

      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/profiles', {
        templateUrl: 'views/profiles.html',
        controller: 'ProfilesCtrl',
        controllerAs: 'profiles'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/verify', {
        templateUrl: 'views/verify.html',
        controller: 'VerifyCtrl',
        controllerAs: 'verify'
        /*resolve:{
          data:function(check){
            check.fetch("/councellor");
          }
        }*/

      })
      .when('/teacher', {
        templateUrl: 'views/teacher.html',
        controller: 'TeacherCtrl',
        controllerAs: 'teacher',
        resolve:{
          data:function(check){
            check.fetch('/teacher');
          }
        }

      })
      .when('/councellor', {
        templateUrl: 'views/councellor.html',
        controller: 'CouncellorCtrl',
        controllerAs: 'councellor',
        resolve:{
          data:function(check){
            check.fetch('/councellor');
          }
        }
       /* redirectTo: function(params,path,search){
          //console.log(path.trim("/"));
          //return '/councellor';
          /*check.fetch(path,function(data){
            console.log("start");
            if(data==1)
              return path;
            else
              return "/permission_denied";
          });
          var num=path.substring(1);
          var url="";
          console.log("Hello");
          console.log(rs.roles["councellor"]);
         // console.log($cookies.getObject(num));
          console.log("end");
          if(num==1)
          {
              console.log("path");
              url=num;
          }
          else
          {
              console.log("denied");
              url="permission_denied"
          }
          return "/"+url;

        }*/
      })
      .when('/district_admin', {
        templateUrl: 'views/district_admin.html',
        controller: 'DistrictAdminCtrl',
        controllerAs: 'districtAdmin',
        resolve:{
          data:function(check){
            check.fetch('/district_admin');
          }
        }
      })
      .when('/lead_councellor', {
        templateUrl: 'views/lead_councellor.html',
        controller: 'LeadCouncellorCtrl',
        controllerAs: 'leadCouncellor',
        resolve:{
          data:function(check){
            check.fetch('/lead_councellor');
          }
        }
      })
      .when('/school_admin', {
        templateUrl: 'views/school_admin.html',
        controller: 'SchoolAdminCtrl',
        controllerAs: 'schoolAdmin',
        resolve:{
          data:function(check){
            check.fetch('/school_admin');
          }
        }
      })
      .when('/staff', {
        templateUrl: 'views/staff.html',
        controller: 'StaffCtrl',
        controllerAs: 'staff',
        resolve:{
          data:function(check){
            check.fetch('/staff');
          }
        }
      })
      .when('/permission_denied', {
        templateUrl: 'views/permission_denied.html',
        controller: 'PermissionDeniedCtrl',
        controllerAs: 'permissionDenied'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.hashPrefix('');
  });
