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
		var vm = this
		vm.heroes = []
		vm.loading = false

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