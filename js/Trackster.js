$(document).ready(function(){
  const API_KEY='32912447447300ee595e9b667ec0b80d';
  $('#button').click(function(){
    var track=$("#input").val();
    Trackster.searchTracksByTitle($("#input").val());
    $.ajax({
      url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track='+track+'&api_key='+API_KEY+'&format=json',
      datatype: 'jsonp',
      success: function(data) {
        
    })
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

};
});
