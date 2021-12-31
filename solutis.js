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

			const ts = localStorage.getItem('ts')
			const apiKey = localStorage.getItem('apiKey')
			const hash = localStorage.getItem('hash')
			
			if(ts && apiKey && hash) {
					deferred.resolve();
			} else {
					deferred.reject();
					$state.transitionTo("login");
			}
		}
})();