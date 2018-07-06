app.controller('HomeController', function($scope,$location, TransferApi){

	$scope.transfer = {
		'value': '40.000,00',
		'total': '15'
	};

	TransferApi.list().then((result)=>{
		console.log('ex', result.data);

		const data = result.data;
		$scope.transfer.total = data.length; 
		let money = 0;
		data.forEach((item) => {
			money += item.valor;
			console.log(money);
		});
		$scope.transfer.value = TransferApi.moneyFormat(money.toFixed(2));
	});

	$scope.goToTransferList = ()=>{
		$location.path( '/transferencias' );
	}
});