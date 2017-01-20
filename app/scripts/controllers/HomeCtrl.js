(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                size: 'sm'
            });
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();


// code from second checkpoint
// (function() {
//     function ModalCtrl(Room, $uibModalInstance) {
//         this.cancel = function () {
//             $uibModalInstance.dismiss();
//         };

//         this.submit = function () {
//             Room.add(this.newRoom);
//             $uibModalInstance.close();
//         };
//     }

//     angular
//         .module('blocChat')
//         .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
// })();