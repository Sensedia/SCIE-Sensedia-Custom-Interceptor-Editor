angular.module('SENSEIDEJS').controller('DebuggerController', function($scope, $location, $websocket, $cookieStore) {

	$scope.debuggerId = "";
	$scope.url = {};

	$scope.load = function(){
		$scope.debuggerId = $cookieStore.get("id");
		$scope.url = "http://" + $location.host() + ":" + $location.port() + "/editor/interceptors/debugger";
	}
});
