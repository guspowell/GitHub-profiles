describe("Main page", function() {

  var host = "http://localhost:3000";

  before(function() {
    casper.start(host);
  });

  it('displays my id', function() {
    casper.thenOpen(host, function() {
      expect('.profile-container').to.include.text("guspowell");
    });
  });

});
