var host = "http://localhost:3000";

before(function() {
  casper.start(host);
});

describe("homepage", function() {

  it('hello worlds', function() {
    casper.then(function() {
      expect('body').to.contain.text("hello world");
    });
  });

});

describe("greeting page", function() {

  it("greets the user", function() {
    casper.thenOpen(host + '/greeting', function() {
      expect('body').to.contain.text("hi gus");
    });
  });

});
