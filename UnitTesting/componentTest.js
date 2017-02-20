describe('component', () => {
  let $componentController,contactsList,ctrl,$q,$rootScope,
  contacts=[
    {
      name: "leanne graham",
      email: "leanne@gmail.com",
      job: "web developer",
      location: "london",
      tag: "friends",
      avatar: "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },
    {
      name: "dennis schulist",
      email: "dennis@gmail.com",
      job: "pen tester",
      location: "manchester",
      tag: "acquaintance",
      avatar: "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    }
  ];

  beforeEach(angular.mock.module('talkTalk'));

  beforeEach(inject(function(_TalkTalkFactory_) {
    contactsList = _TalkTalkFactory_;
  }));

  
  beforeEach(inject((_$componentController_,_TalkTalkFactory_, _$q_, _$rootScope_) => {
    $componentController = _$componentController_;
    // The first parameter is the name of the component, the second is an object with the dependency injections of the Controller
    // and the third one is an object with the bindings 
    ctrl = $componentController('talkTalkComponent',null);
    $q = _$q_;
    contactsList = _TalkTalkFactory_; 
    $rootScope = _$rootScope_;    
  }));

  it('service used: should exist', () => {
    expect(contactsList).toBeDefined();
  });


  it('resetContacts() method: should enable add button when reset button is pressed', () => {
    ctrl.addButtonEnabled=false;
    ctrl.resetContacts();
    expect(ctrl.addButtonEnabled).toBe(true);    
  });


  it('addContact() method: should add a new contact to the existing list', () => {
    ctrl.contacts=contacts;
    let newContact={
      name: "Ilias Katsoulis",
      email: "iliaskatsoulis@gmail.com",
      job: "Front End Developer",
      location: "London",
      tag: "family",
      avatar: "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    };
    ctrl.addContact(newContact);
    expect(ctrl.contacts.length).toEqual(3);
    expect(ctrl.contacts[0].email).toEqual("leanne@gmail.com");
    expect(ctrl.contacts[1].tag).toEqual("acquaintance");
    expect(ctrl.contacts[2].name).toEqual("Ilias Katsoulis");   
  });


  it('chooseContact() method: should choose the right contact', () => {
    ctrl.contacts=contacts;
    ctrl.chooseContact(0);
    expect(ctrl.currentContact.name).toEqual("leanne graham");
    expect(ctrl.addButtonEnabled).toBe(false); 
    ctrl.chooseContact(ctrl.contacts.length);
    expect(ctrl.currentContact).not.toBeDefined();
  });
  
  it('should transfer data correctly from factory to controller', function() {
 
    spyOn(contactsList, "getData").and.returnValue(
      $q.when({
        message: 'awesome message'
      }));

    ctrl.getData();

    // at this time, the then() callback hasn't been called yet: 
    // it's called at the next digest loop, that we will trigger
    $rootScope.$apply();

    // now the then() callback should have been called and initialized 
    // the message in the controller with the message of the promise
    // returned by the factory
    expect(ctrl.contacts.message).toBe('awesome message');
  });
  
});


