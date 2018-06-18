$(document).ready(function(){
  $.ajax('.searchbutton').click(function(){
    $.ajax({
      url: 'http://ws.audioscrobbler.com/2.0/',
      datatype: 'jsonp',
      success: function(data) {
        $('.band').html('<class="col-md-4">'+data.current_observation.band);
        $('.album').html('<class="col-dmd-2">'+data.current_observation.album);
        $('.song').html('<class="col-md-3">'+data.current_observation.song);
    })
  })
  });
