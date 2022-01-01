(function() {
	'use strict'

	angular
		.module('solutis')
		.controller('Heroes.HeroesController',Controller)

	function Controller(
		$scope,
		marvelService
	) 
	{
		$scope.search = null

		var vm = this
		vm.heroes = []
		vm.loading = false

		$scope.customFilter = function(value) {
			if ($scope.search) return value.name.toLowerCase().includes($scope.search.toLowerCase());
			return value
		}
		function getHeroes() {
			vm.loading = true
			marvelService.characters()
				.then(response => {
					vm.heroes = [...response.data.data.results]
				})
				.finally(() => vm.loading = false)
		}
		
		getHeroes()
	}
})()