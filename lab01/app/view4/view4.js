'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', [function() {

    $scope.playlists = [];
    $scope.artistaProcurado = "";
    $scope.artistaModal = "";
    $scope.playlistModal = "";
    $scope.menuArtista = false;
    $scope.menuMusica = false;
    $scope.menuListaDeArtistas = false;
    $scope.menuHome = false;
    $scope.menuFavoritos = false;
    $scope.menuNovaPlaylist = false;
    $scope.menuPlaylists = false;

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

