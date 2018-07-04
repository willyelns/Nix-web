angular.module('App').controller('TransferListController', function($scope, TransferApi){

	$scope.transferList = [];

    TransferApi.list().then((result) =>{
    	result.data.forEach(item => $scope.transferList.push(item))
    });

    $scope.toDetails = (transfer) =>{
    	console.log("details", transfer);
    }

    $scope.ToFilter = () => {
    	console.log('navigate to filter');
    }
});