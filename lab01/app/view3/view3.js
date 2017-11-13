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
	$scope.playlists = [];
	$scope.playlistModal = "";


	$scope.criaAlbum = function(musica){

		var album = new Object();
		album.nome = musica.album;
		album.ano = musica.ano;
		album.musicas = [];
		album.musicas.push(musica);

		return album;
	}

	 $scope.addMusica = function(musica){

      var naoAdicionado = true;

      if($scope.albuns.length < 1){

        $scope.albuns.push($scope.criaAlbum(musica));
        alert("Música adicionada com sucesso");

      }else{
        for (var i = 0; i < $scope.albuns.length; i++) {
          if($scope.verificaAlbumIgual($scope.albuns[i], musica)){
            if($scope.verificaMusicaIgual($scope.albuns[i], musica) && naoAdicionado){
              alert("Não pode existir duas músicas com o mesmo nome no mesmo álbum");
              naoAdicionado = false;
            }else{
              if(naoAdicionado){
                $scope.albuns[i].musicas.push(musica);
                alert("Música adicionada com sucesso");
                naoAdicionado = false;
              }
            }

          }else{
            if(naoAdicionado){
              $scope.albuns.push($scope.criaAlbum(musica));
              alert("Música adicionada com sucesso");
              naoAdicionado = false;
            }
          }
        }
      }

      delete $scope.musica;
    };

    $scope.adicionaMusicaPlaylist = function(musicaAdd){
      $scope.playlistModal.musicas.push(musicaAdd);

      delete $scope.musicaAdd;
    }


    $scope.removeMusicaPlaylist = function(musicaPlaylist){

      var naoExcluido = true;

      for (var i = $scope.playlistModal.musicas.length -1; i >= 0; i--) {
        if($scope.playlistModal.musicas[i].nome === musicaPlaylist.nome && naoExcluido){
          $scope.playlistModal.musicas.splice(i,1);
          naoExcluido = false;
        }
      }
    }

    $scope.criaPlaylist = function(playlist){

      var naoIguais = true;

      for (var i = 0; i < $scope.playlists.length; i++) {
        if($scope.playlists[i].nome === playlist.nome && naoIguais){
          naoIguais = false;
          alert("Você não pode criar duas playlists com o mesmo nome!")
        }
      }

      if(naoIguais){
        playlist.musicas = [];
        $scope.playlists.push(playlist);
      }

      delete $scope.playlist;
    };

    $scope.removePlaylist = function(playlist){

      var naoRemovido = true;

      for(var i = $scope.playlists.length-1; i >= 0; i--){
        if ($scope.playlists[i].nome === playlist.nome && naoRemovido){
          $scope.playlists.splice(i,1);
          naoRemovido = false;
        }
      }
    };
}]);