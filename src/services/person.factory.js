angular.module("App").factory("PersonApi", function($q, $http){
	return {
		list: function() {
			var data = $q.defer();
			let result;

			if ( result ) {
				return data.promise;
			}

			$http.get("https://randomuser.me/api/?results=1&inc=name,picture&nat=br&noinfo").then( response=>{
				const res = response.data.results[0];
				result = {
					'name': res.name.first + ' ' + res.name.last,
					'img': res.picture.large,
					'thumbnail': res.picture.thumbnail
				}
				data.resolve(result) 
			});

			return data.promise;
		}
	};
});