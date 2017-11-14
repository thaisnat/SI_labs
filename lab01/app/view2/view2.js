'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ["$scope", function($scope) {

	$scope.artistas = [];
	$scope.artista = "";
	$scope.favoritos= [];
	$scope.albuns = [];
	$scope.menuFavoritos = false;
	$scope.buscados = [];
	$scope.artistaSelecionado = "";
	$scope.mostraArtista = false;
	$scope.mostraBusca = false;

	$scope.addArtista = function(artista) {
		
		var key = false;

		for(var i=0; i<$scope.artistas.length; i++){
			if($scope.artistas[i].nome == artista.nome && key === false){
				alert("Ops! Este Artista ja existe!");
				 key = true;
			}
		}

		if(key === false){

        artista.albuns = [];
        artista.ultimaMusica = "Nenhuma música ouvida!"

        for (var i = 0; i < $scope.albuns.length; i++) {
          if ($scope.albuns[i].artista === artista.nome){
            artista.albuns.push($scope.albuns[i]);
          }
        }
        $scope.artistas.push(artista);
        alert("Artista adicionado com sucesso!");
      }

      delete $scope.artista;
		
	}
	/*
	$scope.adicionarArtista = function(artista){

      var key = false;

      for (var i = 0; i < $scope.artistas.length; i++) {
        if($scope.artistas[i].nome === artista.nome && key === false){
          alert("Artista já existente no sistema!");
          key = true;
        }
      }

      if(key === false){

        artista.albuns = [];
        artista.ultimaMusica = "Nenhuma música ouvida!"

        for (var i = 0; i < $scope.albuns.length; i++) {
          if ($scope.albuns[i].artista === artista.nome){
            artista.albuns.push($scope.albuns[i]);
          }
        }
        $scope.artistas.push(artista);
      }

      delete $scope.artista;

    };
    */


	$scope.mostraArtista1 = function(artista){

		$scope.mostraArtista = true;
		$scope.mostraBusca = false;
		$scope.artistaSelecionado = artista;

	}

	$scope.mostraBusca1 = function(){
		$scope.mostraBusca = true;
		$scope.mostraArtista = false;
	}

	$scope.buscarArtista = function(artistaBuscado) {

		$scope.buscados = [];

		for(var i = 0; i < $scope.artistas.length; i++){
			if($scope.artistas[i].nome.indexOf(artistaBuscado) !== -1){
				$scope.buscados.push($scope.artistas[i]);
			}
		}

		$scope.mostraBusca1();

		delete $scope.pesquisa;
			
	}

	$scope.addNota = function(nota1){
      $scope.artistaSelecionado.nota = nota1;
      delete $scope.nota1;
    }


     $scope.ultimaMusica = function(ultimaMusicaa){
      $scope.artistaSelecionado.ultimaMusica = ultimaMusicaa;
      delete $scope.ultimaMusicaa;
    }

      $scope.addFavoritos = function (artista1){

	      var jaAdicionado = true;

	      for (var i = 0; i < $scope.favoritos.length; i++) {
	        if ($scope.favoritos[i].nome === artista1.nome && jaAdicionado) {
	          alert("Artista já foi adicionado a lista de favoritos!");
	          jaAdicionado = false;

	        }
	      }

	      if(jaAdicionado){
	        $scope.favoritos.push(angular.copy(artista1));
	        alert("Artista adicionado com sucesso!");
	      }
	    }

    $scope.removeFavoritos = function(artista){

      var naoExcluido = true;

      for (var i = $scope.favoritos.length -1; i >= 0; i--) {
        if($scope.favoritos[i].nome === artista.nome && naoExcluido){
          $scope.favoritos.splice(i,1);
          naoExcluido = false;
        }
      }
    }

    $scope.criaAlbum = function(musica){

      var album = new Object();
      album.nome = musica.album;
      album.artista = musica.artista;
      album.musicas = [];
      $scope.adicionaAlbumAoArtista(album);
      album.musicas.push(musica);

      return album;

    };

    $scope.verificaAlbumIgual = function(album, musica){

      if(album.nome === musica.album){
        return true;
      }

      return false;

    };

    $scope.verificaMusicaIgual = function(album, musica){

      for (var i = 0; i < album.musicas.length; i++) {
        if(album.musicas[i].nome === musica.nome){
          return true;
        }
      }

      return false;
    };

}]);