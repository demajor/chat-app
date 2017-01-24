(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        this.rooms = Room.all;

        this.currentRoom = "";
        this.messages = "";
        this.activeRoom = false;
        this.content = "";


        this.addRoom = function() {
           var modalInst = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                controllerAs: 'modal',
                size: 'sm'
            });
        };

    
        // this.open = function() {
        //     var modalInst = $uibModal.open({
        //         templateUrl: '/templates/modal.html',
        //         controller: 'ModalCtrl', 
        //         controllerAs: 'modal'
        //         });
        // };
                
        this.setRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(room.$id);
            this.activeRoom = true;
        };
        
        
        this.sendMessage = function() {
            Message.send(this.content, this.currentRoom.$id);
            this.content = "";
        };

    };
 
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();


// CODE FROM CHECKPOINT 3
// (function() {
//     function HomeCtrl(Room, $uibModal) {
//         this.rooms = Room.all;

//         this.currentRoom = "";
//         this.message = "";
//         this.activeRoom = false;
//         this.content = "";

        // this.addRoom = function() {
        //     $uibModal.open({
        //         templateUrl: '/templates/modal.html',
        //         controller: 'ModalCtrl as modal',
        //         size: 'sm'
        //     });
        // };

//         // this.setRoom = function(room) {
//         //     this.currentRoom = room;
//         //     this.message = Message.getByRoomId(room.$id);
//         //     this.activeRoom = true;
//         // };
        
        
//         // this.sendMessage = function() {
//         //     Message.send(this.content, this.currentRoom.$id);
//         //     this.content = "";
//         // };

//     };

//     angular
//         .module('blocChat')
//         .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
// })();