// function to send new messages

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