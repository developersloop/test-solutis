(function() {
	'use strict'

	angular
		.module('solutis')
		.controller('Heroes.HeroesController',Controller)

	function Controller(
		$scope,
		$state,
		$stateParams,
		marvelService
	) 
	{
		$scope.search = null
		$scope.character = null

		var vm = this
		vm.heroes = []
		vm.loading = false

		setTimeout(() => {
			$scope.character = $stateParams.character[0]
			console.log($scope.character)
		}, 500);

		$scope.customFilter = function(value) {
			if ($scope.search) return value.name.toLowerCase().includes($scope.search.toLowerCase());
			return value
		}
		$scope.goTo = function(heroId) {
			$state.go("heroes", { heroeId: heroId})
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