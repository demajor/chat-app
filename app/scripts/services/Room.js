(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        // var addRoom = function(name) {
        //         rooms.$add({ "name": name});
        var addRoom = function(roomName) {
            rooms.$add(roomName);
            $('newChatRoomModal').modal('hide');
        };

        return {
            all: rooms
            addRoom: addRoom
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();