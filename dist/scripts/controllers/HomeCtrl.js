(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;

        this.currentRoom = "";
        this.message = "";
        this.activeRoom = false;
        this.content = "";

        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                size: 'sm'
            });
        };

        // this.setRoom = function(room) {
        //     this.currentRoom = room;
        //     this.message = Message.getByRoomId(room.$id);
        //     this.activeRoom = true;
        // };
        
        
        // this.sendMessage = function() {
        //     Message.send(this.content, this.currentRoom.$id);
        //     this.content = "";
        // };

    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();