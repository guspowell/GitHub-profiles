function addProfileFromUsername(username){
  $.get('https://api.github.com/users/'+ username, function(user) {
    var newProfile = Mustache.render($('#profile-template').html(), user);
    $(newProfile).appendTo('.profile-container').fadeIn();
  })
};


$(document).ready(function() {
  $('#add_profile').on('submit', function(event) {
    event.preventDefault();
    addProfileFromUsername($('#username').val());
  });
});
