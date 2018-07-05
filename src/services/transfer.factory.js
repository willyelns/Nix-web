angular.module("App").factory("TransferApi", function($q, $http){
	return {
		list: function() {
			var data = $q.defer();

			$http.get("https://nix-bank-qa.cloudint.nexxera.com/v1/transactions").then( result=>data.resolve(result.data) );

			return data.promise;
		},
		moneyFormat(value) {
			const separateValue = value.split('.');
			separateValue[0] = separateValue[0].split(/(?=(?:...)*$)/).join('.');
			return separateValue.join(',');
		}
	};
});