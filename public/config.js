angular.module('SENSEIDEJS', ['ngRoute', 'ngCookies', 'ngWebSocket', 'MassAutoComplete', 'ngSanitize'])
.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider, $websocket) {

	$routeProvider.when('/sourcecode', {
        templateUrl : 'sourcecode.html',
        controller  : 'SourcecodeController'
  });
	$routeProvider.when('/documentation', {
        templateUrl : 'documentation.html'
  });
	$routeProvider.when('/errors', {
        templateUrl : 'erros.html'
  });
  $routeProvider.otherwise({redirectTo : '/sourcecode'});

}]).run(function($rootScope, $location) {

});;
