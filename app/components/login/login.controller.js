(function () {
	'use strict';

	angular
			.module('solutis')
			.controller('Login.LoginController', Controller);

	function Controller(
		$scope, 
	) 
		{
			var vm = this;
			vm.name = 'vitor'
			$scope.itens = [
        {produto: 'Leite', quantidade: 2, comprado: false},
        {produto: 'Cerveja', quantidade: 12, comprado: false}
			];
	}

})();