$.githubUser = function(usernames, callback) {
  $.each(usernames, function(index, username) {
    $.getJSON("http://github.com/api/v1/json/" + username + "?callback=?", callback);
  });
}
