$(document).ready(function(){
  const API_KEY='32912447447300ee595e9b667ec0b80d'
  $("#button").click(function(){
    Trackster.searchTracksByTitle($("#input").val());

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
       var information=
        '<div class="row">'+
          '<div class="col-md-6">'+
           '<a href="https://youtu.be/eI_O5_tJ1hA">'+
             '<i class="far fa-play-circle" style="color:purple;">'+
             '</i></a>'+
           tracks[i].name+
         '</div>'+
         '<div class="col-md-2">'+
           'THE RAINCOATS'+
         '</div>'+
         '<div class="col-md-2'+
           'PREMIERE'+
         '</div>'+
         '<div class="col-md-2">'+
           '1 BILLION+'+
         '</div>+'+
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
        console.log(response)
      }
    });
  };
});
