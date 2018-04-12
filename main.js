Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.includes(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr; 
}
var app=angular.module("app",["ngRoute"]).run(["$rootScope",function($rs){
	$rs.service="innoraft";
	$rs.name="Type your name";
}]);
app.controller("ctrl",["$scope","$rootScope",function(s,rs){
	//s.name="sumalya";
	rs.service="Angular2";

}]);

app.controller("ctrl2",["$scope","$rootScope","sumfactory","pro","$http","$filter",function(s,rs,sf,pr,hp,fl){
	s.num1="";
	s.num2="";
	s.num3="";
	s.details="none";
	s.selected="";
	s.local="";
	s.menu="";
	s.menu_details="";
	s.search="";
	s.names=[];
	//s.items=[];
	s.selected1="";
	//s.money:"50 USD";
	rs.service=fl("lowercase")(rs.service);
	hp({
		url:'data.json',
	}).then(function(resp){
		//var d=s.restuarent;
        s.details=resp.data.body.Recommendations;
        s.names=[];
        s.items=[];
        for(vari in s.details)
        {
        	s.names.push(s.details[vari].RestaurantName);
            for(y in s.details[vari].menu)
	        {
				if(s.details[vari].menu[y].type=="sectionheader")
			 {
				for(ch in s.details[vari].menu[y].children)
				{
					if(s.details[vari].menu[y].children[ch].type=="item" && s.details[vari].menu[y].children[ch].selected==1)
					{
					//var linebreak=document.createElement("</br>");
					//s.menu_details+=s.menu[y].children[ch].name+"\n";
					 s.items.push(s.details[vari].menu[y].children[ch].name);
					 //alert("ok");
					//s.recursive(s.menu[y].children,1);
					}
				}
		 	 }
			}       	

        }
        s.items=s.items.unique();

        
	},function(resp){
		alert("error occured");
	})
	s.api=function(){
		hp({
        url:'sum.php'+'?a='+s.num1+'&b='+s.num2,
        method:'GET',
			}).then(function(resp){
				s.num3=resp.data.sum;
			},function(resp){
				alert("error");
			})
	}
	
	s.SUM=function(){
    pr.getsum(s.num1,s.num2,function(res){
    	s.num3=res;
    });

    //s.num3=s.num1-s.num2;
}
s.location=function(){
	for (x in s.details)
	{
		if(s.details[x].RestaurantName.trim()==s.selected.trim())
		{
			s.local=s.details[x].location;
			break;
		}
		
	}
}
s.menus=function(){
	s.menu_details="";
	for (x in s.details)
	{
		if(s.details[x].RestaurantName.trim()==s.selected.trim())
		{
			s.menu=s.details[x].menu;
			//alert(s.details[x].menu.name);
			break;
		}
		
	}
	//s.items=[];
	for(y in s.menu)
	{
		if(s.menu[y].type=="sectionheader")
		{
			for(ch in s.menu[y].children)
			{
				if(s.menu[y].children[ch].type=="item" && s.menu[y].children[ch].selected==1)
				{
					//var linebreak=document.createElement("</br>");
					//s.menu_details+=s.menu[y].children[ch].name+"\n";
					//s.items.push(s.menu[y].children[ch].name);
					s.recursive(s.menu[y].children,1);
				}
			}
		}
	}
	s.menu_details=s.menu_details.split("\n");


}
s.recursive=function(child,count){
	for (ch in child)
	{
		//alert(child[ch].selected);
		if(child[ch].selected==1)
		{
			//alert("dhuk6ee");
			for(i=0;i<count;i++)
			{
				s.menu_details+="-";
			}
		    //var linebreak=document.createElement("br");
			s.menu_details+=">";
			s.menu_details+=child[ch].name+"\n";
			s.recursive(child[ch].children,count+2);
		}
	}
}
s.restru=function(){
	hp({
		url:'data.json',
	}).then(function(resp){
		//var d=s.restuarent;
        s.details=resp.data.body;
	},function(resp){
		alert("error occured");
	})
}

}]);
app.factory("sumfactory",function()
{
	var obj={};
	obj.getsum=function(a,b,cb){
        var res=parseInt(a)+parseInt(b);
        cb(res);
	}
	return obj;
});

app.provider("pro",function(){
	var d="";
	this.config=function(ch){
		d=ch;
	}
	this.$get=function(){
	var obj={};
	obj.getsum=function(a,b,cb){
        var res=parseInt(a)+parseInt(b)+parseInt(d);
        cb(res);
	}
	return obj;

	};
});

app.config(["proProvider",function(pro){
 pro.config("5");

}]);

app.directive("custDir",function(){
	return{
	templateUrl:"view.html"

};
});
app.filter("myFilter",function(){
 	return function(x,y){
 		//var names=x.RestaurantName;
 		//alert("hello");
 		if(x.search(y)!=-1)
 			return x;
 		else
 			return null;
 	};
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/details", {
        templateUrl : "direct.html"
    })
    .when("/red", {
        templateUrl : "view.html"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});