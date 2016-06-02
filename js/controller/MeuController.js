myApp.controller('MeuController', function($scope){
	$scope.pessoa = {};
	$scope.dados = [{
		nome : 'Rodrigog',
		telefone : '(46)991059091',
		email : 'rodrigo.gott123@gmail.coms'
	},{
		nome : 'teste145',
		telefone : '(46)99105999',
		email: 'teste@gmail.com'
	},{
		nome : 'teste2',
		telefone : '(46)99105900',
		email : 'teste2@gmail.com'
		},{
		nome : 'teste3',
		telefone : '(46)99105900',
		email : 'teste2@gmail.com'
	}];


	
	$scope.enviaDados = function(pessoa){
		

		if(pessoa.nome.length > 2 &&  pessoa.telefone.length > 7 && pessoa.email.length > 4){

		var minhaPessoa = angular.copy(pessoa);
		$scope.dados.push(minhaPessoa);

	
	}
		
		 
	}	
})	