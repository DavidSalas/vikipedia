
var searchUtil = require("../../src/js/app/searchUtils")

describe("Wiki SearchBar", function() {

  it("should return hello world.", function() {
    expect(searchUtils.helloWorld()).toEqual('Hello World');
  });

  it("should make an AJAX request to the wiki api for a list of articles.", function(){
    spyOn($, "ajax");
    searchUtils.initializeWikiSearchBar();
    expect($.ajax.mostRecentCall.args[0]["url"]).toEqual("/products/123");
  });
});

