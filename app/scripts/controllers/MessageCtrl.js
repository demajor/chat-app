(function() {
    function MessageCtrl(Message) {
                
        this.sendMessage = function(newMessage) {
            Message.send(newMessage);
        };
        
    };
    
    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Message', MessageCtrl]);
})();