var app = angular.module("myApp", []);

app.controller("SongsController", function ($scope, $http) {

    $http.get('http://localhost:8080/songs').then(function(response) {
        $scope.songs = response.data;
    });

    $scope.deleteSong = function (song) {
        var idx = $scope.songs.indexOf(song);
        var st = $scope.songs[idx];
        $http.delete('http://localhost:8080/delete/' + st.id).then($scope.songs.splice(idx, 1));

    }
});

