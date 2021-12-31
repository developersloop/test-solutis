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

		function getHeroes() {
			marvelService.characters()
				.then(response => {
					vm.heroes = [...response.data.data.results]
				})
		}
		
		getHeroes()
	}
})()