angular.module('profile-carpadium', [
    'ui.router',
    'profile-carpadium.components'
])

.config(['$stateProvider', function($stateProvider) {

    $stateProvider
        .state('application', {
            abstract: 'true',
            controller: 'ApplicationController',
            controllerAs: 'appCtrl'
        })
        .state('main', {
            url: '/',
            templateUrl: 'components/main/main.tpl.html',
            controller: 'MainController',
            controllerAs: 'mainCtrl'
        });
}])

.run([function() {
    console.log('app online');
}]);
