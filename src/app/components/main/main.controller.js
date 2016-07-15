angular.module('profile-carpadium')
    .controller('MainController', ['$window', function($window) {
        console.log('Main Ctrl online');


        $window.onload = function() {
            var carpadiumWord = document.getElementById('carpadium-word');
            var southEastTour = document.getElementById('south-east-tour');
            var albumCover = document.getElementById('album-cover');

            TweenLite.to(carpadiumWord, 1.5, {autoAlpha:1});
            TweenLite.to(carpadiumWord, 1.5, {autoAlpha:0, delay: 1.5});

            TweenLite.to(southEastTour, 1.5, {autoAlpha:1, delay: 3});
            TweenLite.to(southEastTour, 1.5, {autoAlpha:0, delay: 4.5});

            TweenLite.to(albumCover, 3, {autoAlpha:1, delay: 6});

        }

    }]);
