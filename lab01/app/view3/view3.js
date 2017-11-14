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
	$scope.playLists = [];
  $scope.playinfos = '';
  $scope.ultArtAdd = false ;

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

    $scope.criaPlaylist = function(playList){

      if(!$scope.temPlayList){
        for (var i = 0; i < $scope.playLists.length; i++) {
          if ($scope.playLists[i].nome === playList.nome) {
          alert("Ops! Esta playlist ja existe!")
          

          }
        }}

      else{
        $scope.playLists.push(playList);
        alert("PlayList criada com sucesso!");
      }
    
  }

  $scope.removePlayList = function(playList){

      var naoRemovido = true;

      for(var i = $scope.playList.length-1; i >= 0; i--){
        if ($scope.playLists[i].nome === playList.nome && naoRemovido){
          $scope.playLists.splice(i,1);
          naoRemovido = false;
        }
      }
    };

  $scope.addMusicaAPLay = function(playList, musicaAdd){

      playList.musicas.push(musicaAdd);
      delete $scope.musicaAdd;
    }

    $scope.mostrarPlay = function(playList){
      $scope.playinfos = playList;
    }

    $scope.temPlayList = function(){
    if($scope.playLists.length > 0){
      return true;
    }
    return false;
  }

    $scope.removeMusicaPlaylist = function(musicaPlayList){

      var naoExcluido = true;

      for (var i = $scope.playLists.musicas.length -1; i >= 0; i--) {
        if($scope.playLists.musicas[i].nome === musicaPlayList.nome && naoExcluido){
          $scope.playLists.musicas.splice(i,1);
          naoExcluido = false;
        }
      }
    }
}]);