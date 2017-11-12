'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', function($scope) {
	
	$scope.artistas = [
	   ["Luan Santana", [["1977", "2016", [["Eu, Voce, o Mar e Ela", "3:48"]]]], "img/luan.png"],
	   ["Anitta", [["Bang", "2015", [["Cravo e Canela","3:21"]]]], "img/anitta.jpg"]
	];

	$scope.informacoesIncompletas = function(){
		if($scope.artista != '' && $scope.album != '' && $scope.musica != '' && $scope.lancamento != '' && $scope.duracao != ''){
			return false;
		}else{
			return true;
		}
	}

	$scope.addMusica = function(){
		for(var i = 0; i < $scope.artistas.length; i++){
			if($scope.artistas[i][0] == $scope.artista){
				console.log($scope.artistas[i][0]);
				for(var j = 0; j < $scope.artistas[i][1].length; j++){
					if($scope.artistas[i][1][j][0] == $scope.album){
						for(var k = 0; k < $scope.artistas[i][1][j][2].length; k++){
							if($scope.artistas[i][1][j][2][k][0] == $scope.musica){
								alert("Música existente.")
								return;
							}
							else{
								$scope.artistas[i][1][j][2].push([$scope.musica, $scope.duracao]);
								return;
						}	}
					
					}
					else{
						$scope.artistas[i][1].push([$scope.album, $scope.lancamento,[$scope.musica, $scope.duracao]]);
						return;
					}
				}
			}
			else{
				$scope.artistas.push([
					$scope.artista,[[
					$scope.album,$scope.lancamento,[[
					$scope.musica,$scope.duracao]]]],
					$scope.img
					]);
				return;
			}
		}
	}

}]);