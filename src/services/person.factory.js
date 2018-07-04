angular.module("App").factory("PersonApi", function($q, $http){
	return {
		list: function() {
			var data = $q.defer();

			$http.get("https://nix-bank-qa.cloudint.nexxera.com/v1/transactions").then( result=>data.resolve(result.data) );

			return data.promise;
		}
	};
});