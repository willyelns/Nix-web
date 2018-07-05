app.controller('AppController', function($scope, $rootScope	){

	$scope.login = true;
	$scope.transferencias = false;
	$scope.home = false;

	$scope.userMenu = ()=>{
		const options = angular.element( document.querySelector( '.userlogged-options' ) );

		if(options.hasClass('slide-in')) {
			options.removeClass('slide-in');
			options.addClass('slide-out');
		} else {
			options.addClass('slide-in');
			options.removeClass('slide-out');
		}		
	}

	$scope.$on('$routeChangeSuccess')
	$rootScope.$on('$locationChangeSuccess', function (event, newUrl, oldUrl) {
     console.log(' to ', newUrl.split('/').pop())
     $scope.login = newUrl.split('/').pop() === '' ? true : false;
     $scope.transferencias = newUrl.split('/').pop() === 'transferencias' ? true : false;
	 $scope.home = newUrl.split('/').pop() === 'home' ? true : false;

	 const navbar = angular.element( document.querySelector( '.navbar-brand' ) );
	 if( $scope.login ) {
		navbar.addClass('navbar-login');
	 } else {
	 	navbar.removeClass('navbar-login');
	 }
 	 if ( $scope.transferencias ) {

 	 }

  });
});


app.controller('UserController', function($scope, PersonApi){
	$scope.user = {}

	PersonApi.list().then((result)=>{
		$scope.user = result;

		console.log('user', $scope.user);
	})
});