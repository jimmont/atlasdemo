'use strict';


// DecLare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
	Panels.$routeProvider = $routeProvider;

    $routeProvider.when('/task', {templateUrl: 'partials/other.html', controller: Panels.LorumIpsumCtrl});
    $routeProvider.when('/improvement', {templateUrl: 'partials/other.html', controller: Panels.LorumIpsumCtrl});
    $routeProvider.when('/other', {templateUrl: 'partials/other.html', controller: Panels.LorumIpsumCtrl});
  }]);

