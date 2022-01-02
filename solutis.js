(function () {
	'use strict';
	var env = {}; if(window){ Object.assign(env, window.__env); }

	let hero = []
	let comics = []

	angular
		.module('solutis',[
			'ui.router',
			'ui.bootstrap',
		])
		.constant('API_SERVICE', {
			__env: env,
			base_path: env.apiUrl,
			ts: env.ts,
			apiKey: env.apiKey,
			hash: env.hash
		})
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
						name: 'heroes',
						url: '/heroes',
						templateUrl: 'app/components/heroes/heroes.view.html',
						controller: 'Heroes.HeroesController',
						controllerAs: 'vm',
						resolve: {
							beforeEnter,
						}
					}
				)
				.state(
					{
						name: 'hero',
						url: '/hero/{heroeId}',
						templateUrl: 'app/components/heroes/heroe.view.html',
						controller: 'Heroes.HeroesController',
						controllerAs: 'vm',
						resolve: {
							beforeEnter,
							function($state,$stateParams,marvelService, $http) {
								if ('params' in $state) {
									if ('heroeId' in $stateParams) {
										marvelService
											.character($stateParams.heroeId)
											.then(response => {
												hero.push(response.data.data.results[0])
												marvelService.commicCollect($stateParams.heroeId)
												.then(resp => {
													comics.push(resp.data.data.results)
												})
											})
									}
								}
							}
						},
						params: {
							hero,
							comics,
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