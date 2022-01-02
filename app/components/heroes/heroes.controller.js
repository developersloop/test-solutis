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
		$scope.hero = null
		$scope.comics = null

		var vm = this
		vm.heroes = []
		vm.loading = false

		setTimeout(() => {
			$scope.hero = $stateParams.hero[0]
			$scope.comics = $stateParams.comics[0]
			console.log($scope.comics)
			cleanHeroes()
		}, 500);

		$scope.customFilter = function(value) {
			if ($scope.search) return value.name.toLowerCase().includes($scope.search.toLowerCase());
			return value
		}
		$scope.goTo = function(heroId) {
			$state.go("hero", { heroeId: heroId})
		}
		function getHeroes() {
			vm.loading = true
			marvelService.characters()
				.then(response => {
					vm.heroes = [...response.data.data.results]
				})
				.finally(() => vm.loading = false)
		}
		function cleanHeroes() {
			$scope.hero = null
			$scope.comics = null 
		}
		
		getHeroes()
	}
})()