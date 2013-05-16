angular.module('DataServices', ['ngResource']) 
//as per: http://onehungrymind.com/angularjs-sticky-notes-pt-1-architecture/
.service('sharedDataService', function () {
    var data = {
      // This is private
      placeToShow: {},
      newPlace: {},
      disqus: {},
      placeOptions: []
    };


    return {
        //below is used when creating a new location for a happening in a space
        //- allows me to get selected location in maps modal back to item that called it
        setNewPlace:function(place){
          data.newPlace = place;
        },
        getNewPlace:function(){
          return data.newPlace;
        },


        setPlaceToShow:function(place){
          data.placeToShow = place;
        },
        getPlaceToShow:function(){
          return data.placeToShow;
        },
        // setPlaceOptions:function(places){
        //   data.placeOptions = places;
        // },
        // getPlaceOptions:function(){
        //   return data.placeOptions;
        // },

        setDisqusWidget:function(visibility, twitterSearchTerm){
          data.disqus.visibility = visibility;
          data.disqus.twitterSearchTerm = twitterSearchTerm;
        },
        disqus:function(){
          return data.disqus;
        },
        notes:function () {
            // This exposed private data
            return data;
        },
        addNote:function (noteTitle) {
            // This is a public function that modifies private data
        },
        deleteNote:function (id) {
            // This is a public function that modifies private data
        }
    };
})
  .factory('Item', ['$resource', function($resource){
  var resource = $resource('/api/v1/items/:item_id', { }, 
 {
      query: {method:'GET', params:{}, isArray:true},
      'create'  : { method: 'POST' },
      'index'   : { method: 'GET', isArray: true },     
      'update'  : { method: 'PUT' },
      'show'    :  { method: 'GET',
        action: 'show',
        isArray: false
      },
      'destroy' : {method: 'DELETE' }
  });
  return resource;
}])
  .factory('Space', ['$resource', function($resource){
  var resource = $resource('/api/v1/spaces/:space_id', { }, 
 {
      query: {method:'GET', params:{}, isArray:true},
      'create'  : { method: 'POST' },
      'index'   : { method: 'GET', isArray: true },     
      'update'  : { method: 'PUT' },
      'show'    :  { method: 'GET',
        action: 'show',
        isArray: false
      },
      'destroy' : {method: 'DELETE' }
  });
  return resource;
}])
  .factory('Picks', ['$resource', function($resource){
  var resource = $resource('/api/v1/picks/:picks_id', { }, 
 {
      query: {method:'GET', params:{}, isArray:true},
      'create'  : { method: 'POST' },
      'index'   : { method: 'GET', isArray: true },     
      'update'  : { method: 'PUT' },
      'show'    :  { method: 'GET',
        action: 'show',
        isArray: false
      },
      'destroy' : {method: 'DELETE' }
  });
  return resource;
}])
//   .factory('Status', ['$resource', function($resource){
//   var resource = $resource('/api/v1/statuses', { }, 
//  {
//       query: {method:'GET', params:{}, isArray:true},
//       'create'  : { method: 'POST' },
//       index: { method: 'GET', isArray:true }
//   });
//   return resource;
// }])
  .factory('Happening', ['$resource', function($resource){
  return $resource('/api/v1/happenings/:happening_id', { }, 
 {
      query: {method:'GET', params:{}, isArray:false},
      'create'  : { method: 'POST' },
      'index'   : { method: 'GET', isArray: true },     
      'update'  : { method: 'PUT' },
      'show'    :  { method: 'GET',
        action: 'show',
        isArray: false
      },
      'destroy' : {method: 'DELETE' }
  });
}])
  .factory('Place', ['$resource', function($resource){
  return $resource('/api/v1/places/:place_id', { }, 
 {
      query: {method:'GET', params:{}, isArray:false},
      'create'  : { method: 'POST' },
      'index'   : { method: 'GET', isArray: true },     
      'update'  : { method: 'PUT' },
      'show'    :  { method: 'GET',
        action: 'show',
        isArray: false
      },
      'destroy' : {method: 'DELETE' }
  });
}]);
