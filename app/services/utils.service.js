(function () {
	'use strict';

	angular
		.module('solutis')
		.factory('utils', Factory)

		function Factory()
		{
			const utils = {}
	
			utils.debounce = function(func, wait) {
				let timer = null;
				return function() {
					clearTimeout(timer);
					timer = setTimeout(func, wait);
				}
			}
			return utils
		}
})();