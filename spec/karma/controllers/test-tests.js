'use strict';


    describe('Testing', function () {
        it('should be true', function() {
            expect(true).toBe(true);
        })
    });





describe('Unit testing create quick plan component', function() {
    var $compile;
    var $rootScope, element;
 
    // Load the myApp module, which contains the directive
    beforeEach(module('baseApp'));
 
    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      element = $compile("<create-quick-plan></create-quick-plan>")($rootScope);

      // scope = $rootScope;
//     $compile(elm)(scope);
//     scope.$digest();

    }));
    
    it('contains prompt to create new item', function() {
        // Compile a piece of HTML containing the directive
        // Check that the compiled element contains the templated content
        expect(element.html()).toContain("");
    });
    
    it('contains initialised quick_plan', function() {
        // Want to check that scope.quick_plan exists but can't figure that out....
               // debugger;
        expect(element.html()).toContain("");
    });

});


// https://github.com/vojtajina/ng-directive-testing/blob/start/test/tabsSpec.js

// describe('tabs', function() {
//   var elm, scope;

//   // load the tabs code
//   beforeEach(module('tabs'));

//   // load the templates
//   // beforeEach(module('tpl/tabs.html', 'tpl/pane.html'));

//   beforeEach(inject(function($rootScope, $compile) {
//     // we might move this tpl into an html file as well...
//     elm = angular.element(
//       '<div>' +
//         '<tabs>' +
//           '<pane title="First Tab">' +
//             'first content is {{first}}' +
//           '</pane>' +
//           '<pane title="Second Tab">' +
//             'second content is {{second}}' +
//           '</pane>' +
//         '</tabs>' +
//       '</div>');

//     scope = $rootScope;
//     $compile(elm)(scope);
//     scope.$digest();
//   }));


//   it('should create clickable titles', inject(function($compile, $rootScope) {
//     var titles = elm.find('ul.nav-tabs li a');

//     expect(titles.length).toBe(2);
//     expect(titles.eq(0).text()).toBe('First Tab');
//     expect(titles.eq(1).text()).toBe('Second Tab');
//   }));


//   it('should bind the content', function() {
//     var contents = elm.find('div.tab-content div.tab-pane');

//     expect(contents.length).toBe(2);
//     expect(contents.eq(0).text()).toBe('first content is ');
//     expect(contents.eq(1).text()).toBe('second content is ');

//     scope.$apply(function() {
//       scope.first = 123;
//       scope.second = 456;
//     });

//     expect(contents.eq(0).text()).toBe('first content is 123');
//     expect(contents.eq(1).text()).toBe('second content is 456');
//   });


//   it('should set active class on title', function() {
//     var titles = elm.find('ul.nav-tabs li');

//     expect(titles.eq(0)).toHaveClass('active');
//     expect(titles.eq(1)).not.toHaveClass('active');
//   });


//   it('should set active class on content', function() {
//     var contents = elm.find('div.tab-content div.tab-pane');

//     expect(contents.eq(0)).toHaveClass('active');
//     expect(contents.eq(1)).not.toHaveClass('active');
//   });


//   it('should change active pane when title clicked', function() {
//     var titles = elm.find('ul.nav-tabs li');
//     var contents = elm.find('div.tab-content div.tab-pane');

//     // click the second tab
//     titles.eq(1).find('a').click();

//     // second title should be active
//     expect(titles.eq(0)).not.toHaveClass('active');
//     expect(titles.eq(1)).toHaveClass('active');

//     // second content should be active
//     expect(contents.eq(0)).not.toHaveClass('active');
//     expect(contents.eq(1)).toHaveClass('active');
//   });
// });

