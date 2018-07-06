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
        // $scope.transferList = $scope.transfers;
        console.group();
        console.log('saiu');
        console.log('Pages', $scope.pages);
        console.log('CurrentPage', $scope.currentPage);
        console.log('NextText', $scope.nextText);
        console.log('Transfers', $scope.transfers);
        console.log('TransferList', $scope.transferList);
        console.groupEnd();
    }

    $scope.toDetails = (transfer) =>{
    	console.log("details", transfer);
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