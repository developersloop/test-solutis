(function () {
	'use strict';

	angular
		.module('solutis')
		.factory('marvelService', function ($http) {
			const API_SERVICE = {
				apiUrl: 'https://gateway.marvel.com/v1/public',
				ts: 1,
				apiKey: 'cbb3521ea18336db7aebe6f7bec7a535',
				hash: '4812d3ea5046d9edf56861dc776f8c93',
				baseUrl: '/',
				enableDebug: true,
			}
			const apiService = {}
			apiService.characters = function (name) {
				let querySearch = name
					? `&nameStartsWith=${name}`
					: null

				return $http.get(`${API_SERVICE.apiUrl}/characters?limit=100${querySearch}&ts=${API_SERVICE.ts}&apikey=${API_SERVICE.apiKey}&hash=${API_SERVICE.hash}`)
			}

			// apiService.character = function (characterId) {
			// 	return $http.get(`${API_SERVICE.apiUrl}/characters/${characterId}?limit=10&ts=${API_SERVICE.ts}&apikey=${API_SERVICE.apiKey}&hash=${API_SERVICE.hash}`)
			// }

			// apiService.commicCollect = function (characterId) {
			// 	return $http.get(`${API_SERVICE.apiUrl}/characters/${characterId}/comics?ts=${API_SERVICE.ts}&apikey=${API_SERVICE.apiKey}&hash=${API_SERVICE.hash}`)
			// }			
			return apiService
    });
})();