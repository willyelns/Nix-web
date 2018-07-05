angular.module("App").factory("PersonApi", function($q, $http){
	return {
		list: function() {
			var data = $q.defer();

			$http.get("https://randomuser.me/api/?results=1&inc=name,picture&nat=br&noinfo").then( result=>data.resolve(result.data) );

			return data.promise;
		}
	};
});