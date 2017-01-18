(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/home.html'
            });


        // .state('modal', {
        //     url:'/add-room',
        //         controller: 'ModalCtrl as modal',
        //         templateUrl: '/templates/modal.html'
        //     });

    }

    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config);
})();