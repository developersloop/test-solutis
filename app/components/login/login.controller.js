(function () {
	'use strict';

	angular
			.module('solutis')
			.controller('Login.LoginController', Controller);

	function Controller(
		$scope,
		$state,
		utils,
	) 
	{
		$scope.email = null
		$scope.password = null

		var vm = this
		$scope.regexEmail = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i
		
		$scope.invalidEmail = false
		$scope.isDebounce = false

		$scope.loguin  = function() {
			localStorage.setItem('ts', 1)
			localStorage.setItem('apiKey',"cbb3521ea18336db7aebe6f7bec7a535")
			localStorage.setItem('hash', "4812d3ea5046d9edf56861dc776f8c93")
			$state.transitionTo("heroes")
		}
	}

})();