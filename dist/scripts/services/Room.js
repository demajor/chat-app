(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

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


// (function() {
//     function Room($firebaseArray) {
//         var firebaseRef = firebase.database().ref();
//         var roomRef = $firebaseArray(firebaseRef.child('rooms'));
        
//         var rooms = {
//             getRooms: getRooms,
//             addRoom: addRoom
//         };
        
//         return rooms;
        
//         function getRooms() {
//             return {
//                 all: roomRef
//             }
//         };
        
//         function addRoom(name) {
//             roomRef.$add(name);
//         };
//     }
    
//     angular
//         .module('blocChat')
//         .factory('Room', ['$firebaseArray', Room]);
// })();