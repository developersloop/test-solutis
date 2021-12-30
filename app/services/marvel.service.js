(function () {
	'use strict';

	angular
		.module('solutis')
		.factory('marvelService', function ($http) {
			function  getAll($scope) {
				alert('adad')
			}
			return {
				getAll,
			}
    });
})();