var app=angular.module("app",["ngRoute"]).run(["$rootScope",function(rs){
	rs.page="index";
	rs.selected="";
}]);

app.controller("ctrl",["$scope","$rootScope","$http",function(s,rs,hp){
	hp({
		url:'data.json',
		method:'GET'
	}).then(function(resp){
		s.details=resp.data.body.Recommendations;
	},function(resp){
		alert("error occured");
	});
	s.test=100;
	s.SortOrder='RestaurantName';
	//s.selected="";

   s.menus=function(){
	s.menu_details="";
	for (x in s.details)
	{
		//alert(rs.selected);
		if(s.details[x].RestaurantName.trim()==rs.selected.trim())
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

}]);

app.directive("show",function($interpolate){
	return{
		compile:function(tElement,tAttribute){
			tElement.css("height","30%");
			tElement.css("width","20%");
			tElement.css("background-color", "green");
			tElement.css("color","blue");
			tElement.css("display","inline-block");
			tElement.css("margin","2px");
            console.log(tAttribute.text);
            return{
            	pre:function(scope,ielement,iattributes){
            		console.log("in pre");
            	},
            	post:function(scope,ielement,iattributes){
                    console.log(iattributes.text);
                    if(scope.vari.num_ratings>50)
                    {
                    	ielement.css("background-color","red");
                    	ielement.css("color","yellow");
                    }
                    
                    ielement.on("click",scope.nclick);

            	}
            };

		},

		controller:function($rootScope,$scope,$element,$attrs){
			//console.log("{{$attrs.text}}");
			var v=$interpolate($attrs.text)($scope);
			//console.log(v);
			$scope.nclick=function(){
				//alert(v);
				$rootScope.selected=v;
				//alert($scope.selected);
				//alert("uu="+$scope.test);
				$scope.menus();
				alert($scope.menu_details);
			}
		}
	};
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/details", {
        templateUrl : "direct.html"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});