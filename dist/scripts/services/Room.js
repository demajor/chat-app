(function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase("https://bloc-chat-44aa4.firebaseio.com/").ref.child("rooms");
        var rooms = $firebaseArray(firebaseRef.child('rooms'));

        return {
            "all": rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();