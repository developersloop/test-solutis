(function () {
	'use strict';

	angular
		.module('solutis',[
			'ui.router',
			'ui.bootstrap',
		])
		.config(config)
		
		function config(
			$stateProvider,
			$urlRouterProvider,
		) 
		{
			// App routes   
			$stateProvider
				.state(
					{
						name: 'login',
						url: '/login',
						templateUrl: 'app/components/login/login.view.html',
						controller: 'Login.LoginController',
						controllerAs: 'vm',
					},
				)
				.state(
					{
						name: 'home',
						url: '/home',
						template: '<div>home</div>',
						resolve: {
							beforeEnter,
						}
					}
				)
				$urlRouterProvider.otherwise("/login");
		}

		function beforeEnter($state,$q) {
			var deferred = $q.defer();
			if(localStorage.getItem('token') !== null) {
					deferred.resolve();
			} else {
					deferred.reject();
					$state.transitionTo("login");
			}
		}
})();