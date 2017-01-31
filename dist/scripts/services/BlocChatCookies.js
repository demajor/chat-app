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


// (function(){
//     function BlocChatCookies($cookies, $uibModal) {
//         var currentUser = $cookies.get('blocChatCurrentUser');

//         if (!currentUser || currentUser === '') {
//             console.log('Cookies are gone!');
//             $('#usernameModal').modal({
//                 show: true,
//                 backdrop: 'static',
//                 keyboard: false
//             });
//         }

//         function setUsername(username) {
//             if (username) {
//                 $cookies.put('blocChatCurrentUser', username);
//                 $('#usernameModal').modal('hide');
//                 console.log($cookies.get('blocChatCurrentUser'));
//             } else {
//                 console.log('You did not enter a valid username');
//             }
//         }

//         function resetCookies(key) {
//             $cookies.remove(key);
//         }

//         return {
//             setUsername: setUsername,
//             currentUser: currentUser,
//             resetCookies: resetCookies
//         };
//     }

//     angular
//         .module('blocChat')
//         .factory('BlocChatCookies',['$cookies', '$uibModal', BlocChatCookies]);
// })();



