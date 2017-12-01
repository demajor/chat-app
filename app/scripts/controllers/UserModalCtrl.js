(function() {
    function UserModalCtrl($uibModalInstance, $cookies) {

/**
@method
@desc saves a new user and closes the modal window
param (name)
*/
        this.setUsername = function() {
            if (this.newUsername && this.newUsername !== '') {
                    
                $cookies.blocChatCurrentUser = this.newUsername;

                $uibModalInstance.close();
            } else {
                alert("Please Enter A Username")
                }
            };
        }   
          
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$uibModalInstance', '$cookies', UserModalCtrl]);
})();