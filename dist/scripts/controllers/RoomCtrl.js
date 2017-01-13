(function() {
    function RoomCtrl(Room) {
        this.roomData = Room.all;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();