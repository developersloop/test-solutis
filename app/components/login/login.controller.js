(function () {
	'use strict';

	angular
			.module('solutis')
			.controller('Login.LoginController', Controller);

	function Controller(
		$scope,
		$state
	) 
	{
		var vm = this
		var scope = $scope

		$scope.login  = function() {
			localStorage.setItem('ts', 1)
			localStorage.setItem('apiKey',"cbb3521ea18336db7aebe6f7bec7a535")
			localStorage.setItem('hash', "4812d3ea5046d9edf56861dc776f8c93")
			$state.transitionTo("home")
		}
	}

})();