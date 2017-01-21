(function() {
    function Room($firebaseArray) {
        var Room = {};

        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.all = rooms;
        Room.add = function (room) {
            rooms.$add(room);
        };



        var addRoom = function(roomName) {
            rooms.$add({name: roomName});
        };
      
        var deleteRoom = function(room) {
            rooms.$remove(room);
        };  

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();



// (function() {
//   function Room($firebaseArray) {
//     var ref = firebase.database().ref().child("rooms");
    
// /**
// @desc rooms Variable stores an array of rooms
// @type {object}
// */
//     var rooms = $firebaseArray(ref);

      
// /**
// @desc private function addRoom, return them in an object
// @desc add a room to the database
// @param {object} room
// */
//     var addRoom = function(roomName) {
//         rooms.$add({name: roomName});
//     };
      
//     var deleteRoom = function(room) {
//         rooms.$remove(room);
//     };  
         

//     return {
//         all: rooms,
//         addRoom: addRoom,
//         deleteRoom: deleteRoom
//     }; 
//   }

//   angular
//     .module('blocChat')
//     .factory('Room', ['$firebaseArray', Room]);
// })();