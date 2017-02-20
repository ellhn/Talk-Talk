(function () {
   'use strict';

  function TalkTalkController(TalkTalkFactory) {
        
    var self = this;

    self.resetContacts=function(){
        self.currentContact={};
        self.addButtonEnabled=true;
    };
    self.chooseContact=function(index) {
        self.addButtonEnabled=false;
        self.currentContact=self.contacts[index];
    };

    self.active=function(item){
        return item===self.currentContact;
    };

    self.addContact=function(contact){
        self.contacts.push(contact);
    };

    
    self.getData= function( ) {
        TalkTalkFactory.getData().then(
            function(result) {
                self.contacts = result;
            },
            function(error) {
                console.log('Error retrieving data: ', error);
            }
        );
    };

    self.resetContacts();
    self.addButtonEnabled=true;
    //necessary for making spy works in unit testing
    self.$onInit = function() {
        self.getData();
    };
            
  } 

  angular.module('talkTalk').component('talkTalkComponent', { 
    templateUrl: '../components/talkTalk.html',
    controller: TalkTalkController
  });
})();


