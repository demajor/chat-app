(function() {
    function RoomCtrl(Room) {
        this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();