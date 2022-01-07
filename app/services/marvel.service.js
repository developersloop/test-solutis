(function () {
	'use strict';

	angular
		.module('solutis')
		.factory('marvelService', function ($http, API_SERVICE) {
			const apiService = {}

			apiService.characters = function (name) {
				let querySearch = name
					? `&name=${name}`
					: null
					
				return $http.get(`${API_SERVICE.base_path}/characters?limit=100${querySearch}&ts=${API_SERVICE.ts}&apikey=${API_SERVICE.apiKey}&hash=${API_SERVICE.hash}`)
			}

			apiService.character = function (characterId) {
				return $http.get(`${API_SERVICE.base_path}/characters/${characterId}?limit=10&ts=${API_SERVICE.ts}&apikey=${API_SERVICE.apiKey}&hash=${API_SERVICE.hash}`)
			}

			apiService.commicCollect = function (characterId) {
				return $http.get(`${API_SERVICE.base_path}/characters/${characterId}/comics?ts=${API_SERVICE.ts}&apikey=${API_SERVICE.apiKey}&hash=${API_SERVICE.hash}`)
			}			
			return apiService
    });
})();