'use strict';

/**
 * @ngdoc function
 * @name newsAngularApp.controller:NewssearchCtrl
 * @description
 * # NewssearchCtrl
 * Controller of the newsAngularApp
 */
angular.module('newsAngularApp')
  .controller('NewssearchCtrl',['$rootScope','$scope','newsFactory','topFactory',function (rs,s,nf,tf) {
  	s.key="";
  	s.priority="relevance";
  	s.search=function(){
  		nf.fetch(s.key,s.priority,function(data){
  			rs.news=data;
  			rs.status=1;
  			rs.num=data.totalResults;
  			rs.articles=data.articles;
  			rs.click=0;
  		});
  	};
  	s.TopHeadlines=function(){
  		tf.fetch(function(data){
  			rs.news=data;
  			rs.status=1;
  			rs.num=data.totalResults;
  			rs.articles=data.articles;
  			rs.click=0;
  		});
  	};
  	s.one=function(){
  		rs.click=0;
  	};
  	s.two=function(){
  		rs.click=10;
  	};
  	s.three=function(){
  		rs.click=20;
  	};
  	s.four=function(){
  		rs.click=30;
  	};
  	s.five=function(){
  		rs.click=40;
  	};
  	s.six=function(){
  		rs.click=50;
  	};
  	s.seven=function(){
  		rs.click=60;
  	};
  	s.eight=function(){
  		rs.click=70;
  	};
  	s.nine=function(){
  		rs.click=80;
  	};
  	s.ten=function(){
  		rs.click=90;
  	};

    
  	
    
  }]);
