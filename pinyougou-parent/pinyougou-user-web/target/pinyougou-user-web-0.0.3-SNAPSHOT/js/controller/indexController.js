//首页控制器
app.controller('indexController',function($scope,loginService){
	$scope.showName=function(){
			loginService.showName().success(
					function(response){alert(response.loginName+"===")
						$scope.loginName=response.loginName;
					}
			);
	}
});