app.controller('LoginController', function($scope, $location){

	const toHome = ()=>{
		$location.path( '/home' );
	}

	$scope.login = ()=>{
		const loginContainer = angular.element(document.querySelector('.login-container')).addClass('login-actived');
		setTimeout(toHome(),500);
	}
});