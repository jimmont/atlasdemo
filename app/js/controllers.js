'use strict';

/* Controllers */
var Panels = {
	Ctrl: function($scope, $http, $route, $rootScope,$location){
		$rootScope.$on('$routeChangeStart',function(scope, next, current){
			var a, l = {className: ''};
			a = $('.panels .active')[0] || l;
			a.className = a.className.replace(/\s*active\s*/g, ' ');
			a = $('.panels a[href*="'+$location.url()+'"]')[0] || l;
			a.className += ' active';
			$scope.url = $location.url();
			$scope.title = $scope.url;
		});
		$http.get('panels/panels.json').success(function(data){
			var $routeProvider = Panels.$routeProvider;
			angular.forEach(data, function(item,i){
				$routeProvider.when(
					item.path,
					{templateUrl: 'partials/'+item.partial, controller: Panels.LorumIpsumCtrl, event: Panels.ping}
				);
			});
			$routeProvider.otherwise({redirectTo: '/index.html'});
			$scope.panels = data;

			$(document).on('click',function(){
				$('.expando').removeClass('expando');
			}).on('click', '.other', function(e){
				e.stopPropagation();
				$(this).toggleClass('expando');
			});
		});
	},
	LorumIpsumCtrl: function(){ }
};
Panels.Ctrl.$inject = '$scope,$http,$route,$rootScope,$location'.split(',');

