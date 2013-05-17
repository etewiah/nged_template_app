
describe('My New App', function() {

  // it('should redirect index.html to index.html#/phones', function() {
  //   browser().navigateTo('http://localhost:3000/app#!/all/spaces');
  //   debugger;
  //   expect(browser().location().url()).toBe('/phones');
  // });

  describe('poll view', function() {
 
    beforeEach(function() {
      browser().navigateTo('/app#!/');
    });
 
    it('should have a button',
        function() {
      expect(element('#rehapp-title-button')).toBeDefined()
      // toMatch(/spaces \s*$/);
      //        expect(element.html()).toContain("lidless, wreathed in flame");

     
      // input('query').enter('nexus');
     
      // expect(element('#status').text()).toMatch(/Current filter: nexus\s*$/);
     
      // //alternative version of the last assertion that tests just the value of the binding
      // using('#status').expect(binding('query')).toBe('nexus');
    });


    it('should have a poll on the landing page', function() {
      // browser().navigateTo('#!/');
      expect(browser().location().path()).toBe("/");
    });

    it('should have a prompt for a title', function() {
      // pause();
      expect(element('#poll-test').html()).toContain('What are you trying to remember?');
    });

  });

  
});


// based on 
// http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-testacular.html

// describe("E2E: Testing Requests", function() {

//   beforeEach(function() {
//     browser().navigateTo('../../app/index.html');
//   });

//   it('should have a working /videos page', function() {
//     browser().navigateTo('#!/');
//     expect(browser().location().path()).toBe("/videos");
//     expect(element('#ng-view').html()).toContain('data-app-youtube-listings');
//   });

//   it('should have a working /other page', function() {
//     browser().navigateTo('#!/other');
//     expect(browser().location().path()).toBe("/other");

//     //try removing the controller and this will fail
//     expect(element('#ng-view').html()).toContain('success');
//   });

// });


//based on https://github.com/angular/angular-phonecat/blob/master/test/e2e/scenarios.js


// describe('PhoneCat App', function() {

//   it('should redirect index.html to index.html#/phones', function() {
//     browser().navigateTo('../../app/index.html');
//     expect(browser().location().url()).toBe('/phones');
//   });


//   describe('Phone list view', function() {

//     beforeEach(function() {
//       browser().navigateTo('../../app/index.html#/phones');
//     });


//     it('should filter the phone list as user types into the search box', function() {
//       expect(repeater('.phones li').count()).toBe(20);

//       input('query').enter('nexus');
//       expect(repeater('.phones li').count()).toBe(1);

//       input('query').enter('motorola');
//       expect(repeater('.phones li').count()).toBe(8);
//     });


//     it('should be possible to control phone order via the drop down select box', function() {
//       input('query').enter('tablet'); //let's narrow the dataset to make the test assertions shorter

//       expect(repeater('.phones li', 'Phone List').column('phone.name')).
//           toEqual(["Motorola XOOM\u2122 with Wi-Fi",
//                    "MOTOROLA XOOM\u2122"]);

//       select('orderProp').option('Alphabetical');

//       expect(repeater('.phones li', 'Phone List').column('phone.name')).
//           toEqual(["MOTOROLA XOOM\u2122",
//                    "Motorola XOOM\u2122 with Wi-Fi"]);
//     });


//     it('should render phone specific links', function() {
//       input('query').enter('nexus');
//       element('.phones li a').click();
//       expect(browser().location().url()).toBe('/phones/nexus-s');
//     });
//   });


//   describe('Phone detail view', function() {

//     beforeEach(function() {
//       browser().navigateTo('../../app/index.html#/phones/nexus-s');
//     });


//     it('should display nexus-s page', function() {
//       expect(binding('phone.name')).toBe('Nexus S');
//     });


//     it('should display the first phone image as the main phone image', function() {
//       expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
//     });


//     it('should swap main image if a thumbnail image is clicked on', function() {
//       element('.phone-thumbs li:nth-child(3) img').click();
//       expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.2.jpg');

//       element('.phone-thumbs li:nth-child(1) img').click();
//       expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
//     });
//   });
// });



