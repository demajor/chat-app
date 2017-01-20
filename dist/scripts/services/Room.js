(function() {
    function Room($firebaseArray) {
        var Room = {};

        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.all = rooms;
        Room.add = function (room) {
            rooms.$add(room);
        };

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();


// code from second checkpoint
// (function() {
//     function Room($firebaseArray) {
//         var Room = {};

//         var ref = firebase.database().ref().child("rooms");
//         var rooms = $firebaseArray(ref);

//         Room.all = rooms;
//         Room.add = function(roomName) {
//             rooms.$add(roomName);
//             $('#newChatroomModal').modal('hide');
//         };

//         return Room;
//     }

//     angular
//         .module('blocChat')
//         .factory('Room', ['$firebaseArray', Room]);
// })();