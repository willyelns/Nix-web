app.controller('TransferListController', function($scope, TransferApi){

    $scope.transferList = [];
    $scope.transfers = [];
    $scope.transferDetail = {
        'pagador': {
            'agencia': '',
            'conta': '',
            'banco': '',
            'nome': '',
        },
        'beneficiario': {
            'agencia': '',
            'conta': '',
            'banco': '',
            'nome': ''
        },
        status:'',
        tipo: '',
        valor:''

    };
    $scope.currentPage = 0;
    $scope.pages = 0;
    $scope.nextText = '';
    $scope.previousText = '';
    const elementsPage = 4;

    const loadTransferList = () =>{
        TransferApi.list().then((result) =>{
            result.data.forEach(item => $scope.transferList.push(item));
        });
        console.log('test' , $scope.transfers);
    }
    
    const setPaginationText = ()=> {
        $scope.nextText = $scope.currentPage == $scope.pages ? '' : 'Próximo';
        $scope.previousText = $scope.currentPage > 1 ? 'Anterior' : '';
      }
    
    const paginateTransferList = (page_size, page_number) =>{
        page_number--;
        return $scope.transfers.slice(page_number * page_size, (page_number + 1) * page_size);
    }

    const setTransferList = () => {
        console.log('entrou', $scope.transfers.length);
        currentPage = 1;
        $scope.pages = $scope.transfers.length / elementsPage > 1 ? (this.$scope.transfers.length / elementsPage).toFixed(0) : 1;
        $scope.nextText = $scope.pages === 1 ? '' : 'Próximo'; 
        $scope.transfers.forEach(item => {
            item.valor = typeof item.valor === 'string' ? item.valor : TransferApi.moneyFormat(item.valor.toFixed(2));
        });
        $scope.transferList = paginateTransferList(elementsPage, $scope.currentPage);
    }

    $scope.toDetails = (transfer) =>{
        console.log("details", transfer);
        $scope.transferDetail.pagador.agencia = transfer.pagador.agencia;
        $scope.transferDetail.pagador.conta = transfer.pagador.conta;
        $scope.transferDetail.pagador.banco = transfer.pagador.banco;
        $scope.transferDetail.pagador.nome = transfer.pagador.nome;

        $scope.transferDetail.beneficiario.agencia = transfer.beneficiario.agencia;
        $scope.transferDetail.beneficiario.conta = transfer.beneficiario.conta;
        $scope.transferDetail.beneficiario.banco = transfer.beneficiario.banco;
        $scope.transferDetail.beneficiario.nome = transfer.beneficiario.nome;

        $scope.transferDetail.status = transfer.status;
        $scope.transferDetail.tipo = transfer.tipo;
        $scope.transferDetail.valor = transfer.valor;

        const options = angular.element( document.querySelector( '.transfer-details' ) );

		if(options.hasClass('slide-center-in')) {
			options.removeClass('slide-center-in');
			options.addClass('slide-center-out');
		} else {
			options.addClass('slide-center-in');
			options.removeClass('slide-center-out');
		}		
    }

    $scope.ToFilter = () => {
    	console.log('navigate to filter');
    }


    var init = function () {
        loadTransferList();
        setTransferList();
     };
     init();
});