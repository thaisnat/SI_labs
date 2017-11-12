'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ["$scope", function($scope) {

	$scope.artistas = [];
	$scope.artista = "";
	$scope.albuns = [];
	$scope.ano = "";
	$scope.duracao = "";
	$scope.img = "";


	$scope.criaAlbum = function(musica){

		var album = new Objetc();
		album.nome = musica.album;
		album.ano = musica.ano;
		album.musicas = [];
		album.musica.push(musica);

		return album;
	}

	$scope.addMusica = function(musica){

		console.log("rola");

		var naoExiste = true;

		for(var i = 0; i < $scope.albuns.length; i++){
			if ($scope.albuns[i].nome === musica.album){
				for(var j = 0; j < $scope.albuns[i].musicas.length; j++){
					if($scope.albuns[i].musicas[j].nome === musica.nome){
						alert("Musica existente!");
						naoExiste = false;
					}
				}
			}
		}

		if(naoExiste){
			albumIgual.musicas.push(musica);
		}

		$scope.albuns.push($scope.criaAlbum(musica));

		delete $scope.musica;


	}
}]);