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

};





  /*
    Given a search term as a string, query the LastFM API.
    Render the tracks given in the API query response.
  */
  Trackster.searchTracksByTitle = function(title) {
    $.ajax({
      url: "https://ws.audioscrobbler.com/2.0/?method=track.search&track="+title+"&api_key="+API_KEY+"&format=json",
      success: function(data){
        console.log(data)
      }
    });
  };
});
