$(document).ready(function(){
  const API_KEY='32912447447300ee595e9b667ec0b80d';
  $( "#input" ).keydown(function(event) {
    var searchkey= (event.which);
    if (searchkey==13){
      event.preventDefault()
      $('#tracklistcontainer').empty();
      Trackster.searchTracksByTitle($("#input").val());
      $("#input").val("");
    };
  });
  $("#button").click(function(){
    $('#tracklistcontainer').empty();
    Trackster.searchTracksByTitle($("#input").val());
    $("#input").val("");
  });

  var Trackster = {};

  /*
    Given an array of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks.
  */
  Trackster.renderTracks = function(tracks) {
    var i=0;
    var length= tracks.length;
    for (var i=0; i<tracks.length; i++){
       var mediumAlbumArt=tracks[i].image[1]['#text'];
       var information=
        '<div class="row">'+
          '<div class="col-md-6">'+
           '<a href='+tracks[i].url+">"+
             '<i class="far fa-play-circle" style="color:purple;">'+
             '</i></a>'+
           tracks[i].name+
         '</div>'+
         '<div class="col-md-2">'+
           tracks[i].artist+
         '</div>'+
         '<div class="col-md-2">'+
          "<img src="+mediumAlbumArt+">"+
         '</div>'+
         '<div class="col-md-2">'+
           tracks[i].listeners+
         '</div>'+
        '</div>'
        $('#tracklistcontainer').append(information);
    }
};





  /*
    Given a search term as a string, query the LastFM API.
    Render the tracks given in the API query response.
  */
  Trackster.searchTracksByTitle = function(title) {
    $.ajax({
      url: "https://ws.audioscrobbler.com/2.0/?method=track.search&track="+title+"&api_key="+API_KEY+"&format=json",
      success: function(response){
        Trackster.renderTracks(response.results.trackmatches.track)
      }
    });
  };
});
