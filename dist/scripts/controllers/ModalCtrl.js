(function() {
    function ModalCtrl($uibModalInstance, Room) {
        
        this.newRoom = "";
        
/**
@method
@desc saves a new instance of Room and closes the modal window
param (room)
*/
        this.createRoom = function () {
            var newRoom = Room.addRoom(this.newRoom);
            $uibModalInstance.close();
        };

/**
@method
@desc close the modal window without saving
*/
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
            
    };
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();