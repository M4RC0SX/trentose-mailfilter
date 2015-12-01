/* your code should go here */


// You can modify this object, add functions that you need
var MailModel = {
    /**
     * Initialises the model with the "database" of filter rules
     * and messages. This function is already implemented.
     */
    init: function () {
        this.rules = rules;
        this.messages = msgs;
    },

    /**
     * Filters out messages in the "database" that match the spam rules.
     * @return an array of messages, excluding those that match the filter rules.
     */
    filter: function () {
       var filteredMessages=[];
        this.messages.forEach(function(message){
            var spam = false;
            this.rules.forEach(function(rule){
                if(message.indexOf(rule)>=0){
                    spam=true;
                }
            });
            if(!spam)filteredMessages.push(message);
        });
        return filteredMessages;
    }


};

var MailController = {
    init: function(){
        MailModel.init();
        MailView.init();
        $(".btn-filter").on("click",function() {
            MailView.clearMail();
            MailView.addMail(MailModel.filter());
        });
        MailView.addMail(MailModel.messages);
    }

}

var MailView = {
    listTemplate: "<li>ELEMENT</li>",
    resultUl: {},

    init : function(){
        this.resultUl=$(".result");
        MailView.clearMail();
    },

    addMail : function(mails){
        mails.forEach(function(mail){
            $(MailView.resultUl).append(MailView.listTemplate.replace("ELEMENT", mail));
        });
    },

    clearMail: function(){
        $(this.resultUl).html("");
    }
}

// Example of usage:
// MailModel.init()
// MailModel.filter() 
//  -> ["carlo@gmail.com", "trentose2@googlegroups.com"]


// We suggest to use js patters. 
// you can add here your views and controllers if you decide to do so.


$(document).ready(function () {
    MailController.init();
});