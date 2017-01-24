(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    
/**
@desc rooms Variable stores an array of rooms
@type {object}
*/
    var rooms = $firebaseArray(ref);

      
/**
@desc private function addRoom, returns them in an object
@desc add a room to the database
@param {object} room
*/
    var addRoom = function(roomName) {
        rooms.$add({name: roomName});
    };
      
    var deleteRoom = function(room) {
        rooms.$remove(room);
    };  
         

    return {
        all: rooms,
        addRoom: addRoom,
        deleteRoom: deleteRoom
    }; 
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();