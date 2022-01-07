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
		$scope.showMessageNotFound = false
		$scope.heroes = []

		var vm = this
		vm.loading = false

		// setTimeout(() => {
		// 	if ($stateParams) {
		// 		$scope.hero = $stateParams.hero[0]
		// 		$scope.comics = $stateParams.comics[0]
		// 	}
		// }, 500);

		$scope.$watch("search",function(newValue){
			getHeroes(newValue)
		});

		$scope.goTo = function(heroId) {
			$state.go("hero", { heroeId: heroId })
		}
		function getHeroes(terms = null) {
			vm.loading = true
			marvelService.characters(terms)
				.then(response => {
					$scope.heroes = [...response.data.data.results]
				})
				.finally(() => vm.loading = false)
		}
		
		function fetchHero() {
			marvelService
			.character($stateParams.heroeId)
			.then(response => {
				$scope.hero = response.data.data.results[0]
				marvelService.commicCollect($stateParams.heroeId)
				.then(resp => {
					$scope.comics = resp.data.data.results
				})
			})
		}
		$scope.mounted = function() {
			getHeroes()
			fetchHero()
		}
	}
})()