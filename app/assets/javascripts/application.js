// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


//Hit the ideas endpoint
// $.ajax('/ideas', {})

$.getJSON('/ideas').then(
  // take this function I am giving you and do the thing
  function(ajaxReturnedPayload){
    console.log('I made an ajax call!');
    debugger;
})


//take the ideas from the endpoint and iterate thru them
//spit out the ideas on the DOM
