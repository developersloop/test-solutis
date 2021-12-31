(function () {
	'use strict';

	angular
		.module('solutis')
		.factory('marvelService', function ($http, API_SERVICE) {
			const apiService = {}

			apiService.characters = function () {
				return $http.get(`${API_SERVICE.base_path}/characters?limit=10&ts=${API_SERVICE.ts}&apikey=${API_SERVICE.apiKey}&hash=${API_SERVICE.hash}`)
			}
			return apiService
    });
})();