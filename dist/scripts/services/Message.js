(function() {
  function Message($firebaseArray, $cookies, Room) {
    var ref = firebase.database().ref().child('messages');
      
/**
@desc messages Variable stores an array of messages
@type {object}
*/
    var messages = {};

      
/**
Search for all messages with a given room ID and store in messages variable
*/
    var getByRoomId = function(roomId) {
        var messagesRef = ref.orderByChild('roomId').equalTo(roomId);
        messages = $firebaseArray(messagesRef);
        return messages;
    }; 
      
/**
@desc private function send
@desc adds a message to the database
@param {object} message
*/
    var send = function(newMessage, roomId) {
        var messageDateTime = new Date;
        messages.$add({
                username: $cookies.blocChatCurrentUser,
                content: newMessage,
                sentAt: messageDateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                roomId: roomId
            });
    };
      
    return {
        // Message,
        getByRoomId: getByRoomId,
        send: send   
    }; 
  }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', 'Room', Message]);
})();