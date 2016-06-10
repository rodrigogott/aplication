myApp.controller('MeuController', function($scope){
	$scope.pessoa = {};
	$scope.isEdit = false;
	$scope.dados = []


	//salvar dados
	$scope.enviaDados = function(pessoa){

		if($scope.isEdit){
			$scope.atualizaDados(pessoa);
		} else {

		//if(pessoa.nome.length > 2 &&  pessoa.telefone.length > 7 && pessoa.email.length > 4){

		var minhaPessoa = angular.copy(pessoa);
		$scope.dados.push(minhaPessoa);

		delete $scope.pessoa;
	}
	
	}
	//excluir dados
	$scope.excluirDados = function(item){
		$scope.dados.splice(item, 1);
	}
		$scope.cancelaDados = function(pesoa){
		delete $scope.pessoa;
	}	
	//editar dados
	$scope.editarDados = function(item, idx){
		$scope.pessoa = angular.copy(item);
		$scope.idx = idx;
		$scope.isEdit = true;

	}
	$scope.atualizaDados = function(data){
	 	$scope.isEdit = false;
		$scope.dados[$scope.idx] = angular.copy(data);
		delete $scope.pessoa;
	}

	
	
})	









