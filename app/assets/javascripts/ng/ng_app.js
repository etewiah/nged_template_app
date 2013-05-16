
'use strict';
//19 apr - just injected 'ui' - not sure if I need ui.directives as well
// could set defaults with:
// baseApp.value('ui.config', {
//    select2: {
//       allowClear: true
//    }
// });

var baseApp = angular.module('baseApp', ['DataServices', 'HelperServices', 'ngSanitize', 'ui'])
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider
                    .when('/',{
                        templateUrl: '<%= asset_path("controllers/happenings/index.html") %>',
                        controller: 'HappeningsIndexCtrl',
                        activeMainTab: 'Home',
                        showTwitterFeed: false,
                        showDisqus: false
                    })
                    .when('/map', {
                        templateUrl: '<%= asset_path("map.html") %>',
                        controller: 'MapCtrl',
                        showTwitterFeed: false,
                        showDisqus: false
                    })
                    .when('/happenings/:happening_id', {
                        templateUrl: '<%= asset_path("controllers/happenings/show.html") %>',
                        controller: 'HappeningsShowCtrl',
                        showTwitterFeed: true,
                        showDisqus: true
                    })
                // .when('/happenings/:happening_id/:edit_id', {
                //   templateUrl: '<%= asset_path("controllers/happenings/edit_show.html") %>',
                //   controller: 'EditHappeningCtrl'
                // })
                    .when('/all/happenings',{
                        templateUrl: '<%= asset_path("controllers/happenings/index.html") %>',
                        controller: 'HappeningsIndexCtrl',
                        activeMainTab: 'Home',
                        showTwitterFeed: false,
                        showDisqus: false
                    })
                    .when('/all/happenings/:tag',{
                        templateUrl: '<%= asset_path("controllers/happenings/index.html") %>',
                        controller: 'HappeningsIndexCtrl'
                    })
                    .when('/all/places', {
                        templateUrl: '<%= asset_path("controllers/places/index.html") %>',
                        controller: 'PlacesIndexCtrl'
                    })
                    .when('/places/:place_id', {
                        templateUrl: '<%= asset_path("controllers/places/show.html") %>',
                        controller: 'PlacesShowCtrl',
                        showTwitterFeed: true,
                        showDisqus: true
                    })
                // .when('/all/picks', {
                //   templateUrl: '<%= asset_path("controllers/spaces/index.html") %>',
                //   controller: 'PicksIndexCtrl'
                // })
                // .when('/spaces/:picks_id', {
                //   templateUrl: '<%= asset_path("controllers/spaces/show.html") %>',
                //   controller: PicksShowCtrl,
                //   showTwitterFeed: true,
                //   showDisqus: true
                // })
                    .when('/all/spaces', {
                        templateUrl: '/ng_templates/spaces/index',
                        controller: 'SpacesIndexCtrl'
                    })
                    .when('/new/space', {
                        templateUrl: '/ng_templates/spaces/new',
                        controller: 'SpacesIndexCtrl'
                    })
                    .when('/spaces/:space_id', {
                        templateUrl: '/ng_templates/spaces/show.html',
                        controller: SpacesShowCtrl,
                        showTwitterFeed: false,
                        showDisqus: true
                    })
                    .when('/new/quick_plan', {
                        templateUrl: '/ng_templates/quick_plans/landing'
                    })
                    .when('/quick_plans/:quick_plan_id', {
                        templateUrl: '/ng_templates/quick_plans/show'
                    })      
                    .otherwise({
                        redirectTo: '/'
                    });

            //return $locationProvider.html5Mode(true);

            return $locationProvider.hashPrefix('!');
        }]);

baseApp.config(['$httpProvider',function($httpProvider) {
    var interceptor = ['$rootScope','$q', function(scope, $q) {

        function success(response) {
            return response;
        }

        function error(response) {
            var status = response.status;

            // if (status == 401) {
            //   var deferred = $q.defer();
            //   var req = {
            //     config: response.config,
            //     deferred: deferred
            //   }
            //   scope.requests401.push(req);
            //   scope.$broadcast('event:loginRequired');
            //   return deferred.promise;
            // }
            // otherwise
            return $q.reject(response);
            // return $q.when("dd");

            //TODO - figure out how to return a message...
            // var defer = $q.defer();
            // // defer.resolve("ss");
            // debugger;
            // return defer.promise;
        }

        return function(promise) {
            return promise.then(success, error);
        }

    }];
    $httpProvider.responseInterceptors.push(interceptor);
}]);

baseApp.run(['$rootScope','$http', function($rootScope, $http){

    // $rootScope.selectedCityName = "..";
    // $rootScope.root = {};
    // $rootScope.root.twitterSearchTerm = "klavado";
    // $rootScope.gon = {};
    // $rootScope.gon.locale = "ddd";

// below causes testacular / karma to complain:
    // $http.get('/api/v1/ad_hoc/calls/get_filter', {params: {key: "happenings_index_filter_menu"}}).success(function(result){
    //  //  debugger;
    //   // pretty ugly - will rethink whole filter concept
    //   $rootScope.happenings_index_filter_menu = JSON.parse(result.value);

    // });


    $rootScope.$on('handleNavEmit', function(event, args) {
        $rootScope.$broadcast('handleNavBroadcast', args);
    });


}]);



