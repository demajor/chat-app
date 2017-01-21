(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        
        this.newRoom = "";
        
/**
@method
@desc saves a new instance of Room and close the modal window
param (room)
*/
        // this.createRoom = function() {
        //     var newRoom = Room.addRoom(this.newRoom);
        //     $uibModalInstance.close();
        // };


        this.submit = function () {
            var newRoom = Room.add(this.newRoom);
            $uibModalInstance.close();
        };

/**
@method
@desc close the modal window without save
*/
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
            
    };
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();