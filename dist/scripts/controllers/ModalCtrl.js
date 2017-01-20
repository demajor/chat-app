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


// code from 2nd checkpoint
// (function () {
//     function ModalCtrl($scope, Room, $uibModalInstance) {
        
//         $scope.rooms = Room;    
//         $scope.newRoom = {name: ''};    
        
        
//         $scope.cancelCreate = function () {
//             $uibModalInstance.dismiss('cancel');
//         };
        
//         $scope.createNewRoom = function(newRoom) {
//             Room.all.$add({ 
//                 name: $scope.newRoom.name
//             });
            
//             $uibModalInstance.close();
//         };
        
//     }   
    
    
//     angular
//         .module('blocChat')
//         .controller('ModalCtrl', ['$scope', 'Room', '$uibModalInstance', ModalCtrl]);
// })();