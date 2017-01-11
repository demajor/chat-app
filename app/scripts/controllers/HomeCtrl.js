(function() {
    function HomeCtrl(Room, $scope) {
        this.chatRooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();