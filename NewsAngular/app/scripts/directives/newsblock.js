'use strict';

/**
 * @ngdoc directive
 * @name newsAngularApp.directive:newsBlock
 * @description
 * # newsBlock
 */
angular.module('newsAngularApp')
  .directive('newsBlock', function () {
    return {
      compile: function(tElement,tAttributes){
      	console.log("compiled");
      
      return{
      	pre:function(scope,iElement,iAttributes){
      		console.log("pre-link");
      		iElement.css("width","30%");
      		iElement.css("height","auto");
      		iElement.css("background-color","#efefef");
      		iElement.css("border","1px solid #gray");
      		
      	},
      	link:function(scope,iELement,iAttributes){
      		console.log("post-link");
      	}
      }
     },
     controller:function($scope,$element,$attrs){
     	console.log("controller activated");

     }
     

    };
  });
