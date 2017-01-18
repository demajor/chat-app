(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.cancel = function () {
            $uibModalInstance.dismiss();
        };

        this.submit = function () {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();


// (function() {
//     function ModalInstCtrl($uibModalInstance, Room) {
        
//         this.newRoom = "";
        
//     /**
//     @method
//     @desc saves a new instance of Room and close the modal window
//     param (room)
//     */
//         this.createRoom = function() {
//             var newRoom = Room.addRoom(this.newRoom);
//             $uibModalInstance.close();
//         };

//     /**
//     @method
//     @desc close the modal window without save
//     */
//         this.cancel = function() {
//             $uibModalInstance.dismiss('cancel');
//         };
            
//     };
    
        
    
//     angular
//         .module('blocChat')
//         .controller('ModalInstCtrl', ['$uibModalInstance', 'Room', ModalInstCtrl]);
// })();