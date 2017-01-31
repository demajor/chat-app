(function() {
    function BlocChatCookies($cookies, $uibModal) {
        
        var currentUser = $cookies.get('blocChatCurrentUser');
        
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/usernamemodal.html',
                controller: 'UserModalCtrl',
                controllerAs: 'user',
                backdrop: 'static',
                keyboard: false,
                size: 'sm',
            });
        }
        
        function resetCookies(key) {
            $cookies.remove(key);
        }

        return {
            currentUser: currentUser,
            resetCookies: resetCookies
        };
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();