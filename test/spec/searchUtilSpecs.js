
var searchUtil = require("../../src/js/app/searchUtil")

describe("Wiki SearchBar", function() {

  it("should return hello world.", function() {
    expect(searchUtil.helloWorld()).toEqual('Hello World');
  });

  it("should make an AJAX request to the wiki api for a list of articles.", function(){
    spyOn($, "ajax");
    searchUtil.initializeWikiSearchBar();
    expect($.ajax.mostRecentCall.args[0]["url"]).toEqual("/products/123");
  });
});

