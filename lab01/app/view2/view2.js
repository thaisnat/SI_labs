'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {

	$scope.artistas = [];
	$scope.favoritos = [];
	$scope.artista = "";
	$scope.artistaBuscado = ";"

	$scope.addArtista = function(){
		if($scope.artista != ''){
			for(var i=0; i<$scope.artistas.length; i++){
				if($scope.artistas[i] == $scope.artista){
					alert("Artista já existente!");
					return;
				}
			}
			$scope.artistas.push($scope.artista);
			console.log($scope.artistas);
			alert("Artista adicionado com sucesso!");
		}else{
			alert("Artista inválido!");
		}
	}

	$scope.buscarArtista = function(){
		if($scope.artista != ""){
			for (var i = 0; i < $scope.artistas.length; i++) {
			if($scope.artistaBuscado == $scope.artistas[i]){
				return $scope.artistaBuscado;
			}
		}
		}
	}

	$scope.addFavoritos = function(){
		$scope.addFavoritos.push(buscarArtista());
	}

	$cope.temFavoritos = function(){
		if($scope.favoritos.length > 0){
			return true;
		}else{
			return false;
		}
	}

	$scope.removeFavoritos = function(arts){
		for (var i = 0; i < $scope.favoritos.length; i++) {
			if($scope.favoritos[i] == arts){
				delete $scope.favoritos[i];
			}
		}
	}


}]);