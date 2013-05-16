// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//   
// would like to try to avoid using jquery (http://blog.artlogic.com/2013/05/08/angularjs-best-practices-ive-been-doing-it-wrong-part-3-of-3/):
// but its needed for foundation (could use zepto instead though...)
//= require jquery
// require jquery_ujs
//= require foundation
// require jmasonry.2.1.05.js
//= require angular.1.0.6.js
//= require angular-resource.1.0.6.js
//= require angular-sanitize.1.0.6.js
//using angular ui from vendors dir
//= require angular-ui.0.4.0
// require nged/angular-ui.0.4.0
// require jquery-token-input.1.6.0
// need to require ng_app before tree to ensure baseApp is defined first
//= require ng/ng_app.js
//= require_tree .

// if I call foundation in header, top-bar is not yet ready..
// debugger;
// $(document).foundation();
