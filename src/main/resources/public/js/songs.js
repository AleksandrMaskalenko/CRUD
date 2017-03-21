var app = angular.module('myApp', ['ngRoute']);

app.run(function($rootScope) {

});

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {templateUrl: 'views/welcome-file.html' });
    $routeProvider.when('/read', {templateUrl: 'views/song-details.html'});
    $routeProvider.when('/main', {templateUrl: 'views/song-main-lib.html'});
    $routeProvider.when('/new_song', {templateUrl: 'views/song-add.html'});
    $routeProvider.when('/edit', {templateUrl: 'views/song-edit.html'});

}]);


app.controller("SongsController", function ($scope, $http, $rootScope) {

    $scope.loadData = function () {
        $http.get('http://localhost:8080/songs').then(function (response) {
            $rootScope.songs = response.data;
        });

    };

    $scope.loadData();

    $scope.deleteSong = function (song) {
        var idx = $scope.songs.indexOf(song);
        $http.delete('http://localhost:8080/delete/' + song.id).then($scope.songs.splice(idx, 1));

    };

    $scope.songDetails = function (song) {
        // $http.get('http://localhost:8080/song/' + song.id).then(function (data) {
        //     $scope.songs = data;
            $scope.songId = song.id;
            $scope.songName = song.name;
            $scope.songAuthor = song.author;
            $scope.songDuration = song.duration;
            $scope.songDate = song.date;

    };

    $rootScope.addSong = function () {

        var songObj = {
            name: $scope.nameR,
            author: $scope.authorR,
            duration: $scope.durationR,
            date: $scope.dateR
        };

        $http.post('http://localhost:8080/song/add', songObj);

    };

    $scope.editSong = function (song) {

        $rootScope.idScope = song.id;
        $rootScope.nameScope = song.name;
        $rootScope.authorScope = song.author;
        $rootScope.durationScope = song.duration;
        $rootScope.dateScope = song.date;
    };



});

app.controller("editSongController", function ($scope, $http, $rootScope) {

        $scope.name = $rootScope.nameScope;
        $scope.author = $rootScope.authorScope;
        $scope.duration = $rootScope.durationScope;
        $scope.date = $rootScope.dateScope;


    $scope.updateSong = function () {

        var songObjUpd = {
            id: $scope.id = $rootScope.idScope,
            name: $scope.name,
            author: $scope.author,
            duration: $scope.duration,
            date: $scope.date
        };

        $http.post('http://localhost:8080/song/add', songObjUpd);

    };

});
