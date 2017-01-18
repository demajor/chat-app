(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();

// (function() {
//     function MainCtrl(Room, Message, $uibModal) {
        
//         this.rooms = Room.all;
//         this.currentRoom = "";
//         this.messages = "";
//         this.activeRoom = false;
    
    
//         this.open = function() {
//             var modalInst = $uibModal.open({
//                 templateUrl: '/templates/modal.html',
//                 controller: 'ModalInstCtrl', 
//                 controllerAs: 'modal'
//                 });
//         };
                
//         this.setRoom = function(roomId, room) {
//             this.currentRoom = room;
//             this.messages = Message.getByRoomId(room);
//             this.activeRoom = true;
//         };

//     };
 
    
//     angular
//         .module('blocChat')
//         .controller('MainCtrl', ['Room', 'Message', '$uibModal', MainCtrl]);
// })();