var app = angular.module("myApp", []);



app.controller("SongsController", function ($scope, $http) {

    $http.get('http://localhost:8080/songs').then(function(response) {
        $scope.songs = response.data;
    });

    $scope.deleteSong = function (song) {
        var idx = $scope.songs.indexOf(song);
        $http.delete('http://localhost:8080/delete/' + song.id).then($scope.songs.splice(idx, 1));

    };

    $scope.songDetails = function (song) {
        
        $http.get('http://localhost:8080/song/' + song.id).then(function (response) {
           $scope.songsR = response.data;

        });
    };

});



app.controller("AddSongController", function($scope, $http) {

    $scope.songs = ({
        name: $scope.inputName = '',
        author: $scope.inputAuthor = '',
        duration: $scope.inputDuration = '',
        date: $scope.inputDate = ''
    });

    $scope.addSong = function () {

    var songObj = {
        name: $scope.inputName,
        author: $scope.inputAuthor,
        duration: $scope.inputDuration,
        date: $scope.inputDate
    };
        $http.post('http://localhost:8080/song/add', songObj);

    };

});



// app.controller("ReadSongsController", function ($scope, $http) {
//
//     $scope.songDetails = function (song) {
//
//         $http.get('http://localhost:8080/song/' + song.id).success(function (data) {
//             $scope.songs = data;
//
//         });
//     };
// });


