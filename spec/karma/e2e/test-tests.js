//based on https://github.com/angular/angular-phonecat/blob/master/test/e2e/scenarios.js
'use strict';

    describe('Testing', function () {
        it('should be true', function() {
            expect(true).toBe(true);
        })
    });

    
/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('HappenSesame App', function() {

  // it('should redirect index.html to index.html#/phones', function() {
  //   browser().navigateTo('http://localhost:3000/app#!/all/spaces');
  //   debugger;
  //   expect(browser().location().url()).toBe('/phones');
  // });

  describe('quick_plans view', function() {
 
    beforeEach(function() {
      browser().navigateTo('/app#!/quick_plans');
    });
 
    it('should have h5 header',
        function() {
      expect(element('h5').text()).toBeDefined()
      // toMatch(/spaces \s*$/);
      //        expect(element.html()).toContain("lidless, wreathed in flame");

     
      // input('query').enter('nexus');
     
      // expect(element('#status').text()).toMatch(/Current filter: nexus\s*$/);
     
      // //alternative version of the last assertion that tests just the value of the binding
      // using('#status').expect(binding('query')).toBe('nexus');
    });


    // it('should filter the phone list as user types into the search box', function() {
    //   expect(repeater('.phones li').count()).toBe(3);
 
    //   input('query').enter('nexus');
    //   expect(repeater('.phones li').count()).toBe(1);
 
    //   input('query').enter('motorola');
    //   expect(repeater('.phones li').count()).toBe(2);
    // });
  });

  // describe('Phone list view', function() {

  //   beforeEach(function() {
  //     browser().navigateTo('../../app/index.html#/phones');
  //   });


  //   it('should filter the phone list as user types into the search box', function() {
  //     expect(repeater('.phones li').count()).toBe(20);

  //     input('query').enter('nexus');
  //     expect(repeater('.phones li').count()).toBe(1);

  //     input('query').enter('motorola');
  //     expect(repeater('.phones li').count()).toBe(8);
  //   });


  //   it('should be possible to control phone order via the drop down select box', function() {
  //     input('query').enter('tablet'); //let's narrow the dataset to make the test assertions shorter

  //     expect(repeater('.phones li', 'Phone List').column('phone.name')).
  //         toEqual(["Motorola XOOM\u2122 with Wi-Fi",
  //                  "MOTOROLA XOOM\u2122"]);

  //     select('orderProp').option('Alphabetical');

  //     expect(repeater('.phones li', 'Phone List').column('phone.name')).
  //         toEqual(["MOTOROLA XOOM\u2122",
  //                  "Motorola XOOM\u2122 with Wi-Fi"]);
  //   });


  //   it('should render phone specific links', function() {
  //     input('query').enter('nexus');
  //     element('.phones li a').click();
  //     expect(browser().location().url()).toBe('/phones/nexus-s');
  //   });
  // });


  // describe('Phone detail view', function() {

  //   beforeEach(function() {
  //     browser().navigateTo('../../app/index.html#/phones/nexus-s');
  //   });


  //   it('should display nexus-s page', function() {
  //     expect(binding('phone.name')).toBe('Nexus S');
  //   });


  //   it('should display the first phone image as the main phone image', function() {
  //     expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
  //   });


  //   it('should swap main image if a thumbnail image is clicked on', function() {
  //     element('.phone-thumbs li:nth-child(3) img').click();
  //     expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.2.jpg');

  //     element('.phone-thumbs li:nth-child(1) img').click();
  //     expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
  //   });
  // });
});
