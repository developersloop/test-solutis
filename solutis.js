(function () {
	'use strict';

	angular
		.module('solutis',[
			'ui.router'
		])
		.config(config)
		
		function config(
			$stateProvider
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
					}
				)
		}
})();