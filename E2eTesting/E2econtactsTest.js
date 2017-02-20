describe('Protractor Testing', function() {
    browser.get('/');

    it("should do basic test about add and reset buttons' functionality", function(){
       
       var addButton = element(by.id('add-button')),
           resetButton = element(by.id('reset-button')),
           contactName = element(by.model('$ctrl.currentContact.name')),
           contactEmail = element(by.model('$ctrl.currentContact.email')),
           contactJob = element(by.model('$ctrl.currentContact.job')),
           contactLocation = element(by.model('$ctrl.currentContact.location')),
           contactTag = element(by.model('$ctrl.currentContact.tag')),
           contactAvatar = element(by.model('$ctrl.currentContact.avatar'));

       expect(addButton.isPresent()).toBe(true);
  
       firstContact=element.all(by.repeater('contact in $ctrl.contacts')).first();
       firstContact.click();
       expect(contactEmail.getAttribute('value')).not.toBe('');
       expect(addButton.isPresent()).toBe(false);

       resetButton.click();
       expect(addButton.isPresent()).toBe(true);
       expect(addButton.getAttribute('disabled')).toBe('true');
       expect(contactName.getAttribute('value')).toBe('');
       expect(contactEmail.getAttribute('value')).toBe('');
       expect(contactJob.getAttribute('value')).toBe('');
       expect(contactLocation.getAttribute('value')).toBe('');
       expect(contactTag.getAttribute('value')).toBe('');
       expect(contactAvatar.getAttribute('value')).toBe('');
    });


    it('should add a new contact and check it', function(){
      
      var addButton = element(by.id('add-button')),
          resetButton = element(by.id('reset-button')),
          numberOfContactsBefore,
          numberOfContactsAfter,
          lastContact,
          lastContactName;

      element(by.model('$ctrl.currentContact.name')).sendKeys('Ilias Katsoulis');
      element(by.model('$ctrl.currentContact.email')).sendKeys('iliaskatsoulis@gmail.com');
      element(by.model('$ctrl.currentContact.job')).sendKeys('Front End Developer');
      element(by.model('$ctrl.currentContact.location')).sendKeys('London');
      element(by.model('$ctrl.currentContact.tag')).sendKeys('family');
      element(by.model('$ctrl.currentContact.avatar')).sendKeys('http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png');         

      expect(addButton.getAttribute('disabled')).not.toBe('true');
      element.all(by.repeater('contact in $ctrl.contacts')).count().then(
        function(numberOfContactsBefore){
          addButton.click();
          element.all(by.repeater('contact in $ctrl.contacts')).count().then(
            function(numberOfContactsAfter){
              expect(numberOfContactsAfter).toBe(numberOfContactsBefore+1);
            }
          )
        }
      );
      
      resetButton.click();
      lastContact=element.all(by.repeater('contact in $ctrl.contacts')).last();
      lastContact.click();
      lastContactName=element(by.model('$ctrl.currentContact.name'));
      expect(lastContactName.getAttribute('value')).toBe('Ilias Katsoulis');
   
    });


    it("should check email validity", function(){
      
      var resetButton = element(by.id('reset-button'));

      resetButton.click();    
      element(by.model('$ctrl.currentContact.email')).sendKeys('ilias');
      element.all(by.css('.form-control-error')).each(function (elem, index) {
        if (index===1) {
           expect(elem.isPresent()).toBe(true);
           element(by.model('$ctrl.currentContact.email')).sendKeys('katsoulis@gmail.com');
           var EC = protractor.ExpectedConditions;
           // Waits for the element elem to be no longer present on the dom
           browser.wait(EC.stalenessOf(elem), 500);
           expect(elem.isPresent()).toBe(false);
        }
      });   
    }); 

  });

