$(document).ready(function ()
{
  /*
   * Check for enter pressed on search bar.
   * This will probably be changed so that we
   * can submit the form by clicking on links
   * as well as pressing enter. Might wanna
   * look at how to do jquery binds for this kinda thing.
   */
  document.getElementById("searchInput").addEventListener
  (
    "keydown",
    function(e)
    {
      // Enter is pressed
      if (e.keyCode == 13)
      {
        var submitQuery = require('../main.js');
//        console.log(x(3))
        submitQuery($("#searchInput").val());
      }
    }, false
  );

  /*
   *Search the wiki api for a list of suggested articles
   *based on the contents of the search box.
   */
  $("#searchInput").autocomplete
  ({
    source: function(request, response)
    {
      $.ajax
      ({
        url: "http://en.wikipedia.org/w/api.php",
        dataType: "jsonp",
        data:
        {
          'action': "opensearch",
          'format': "json",
          'search': request.term
        },
        success: function(data)
        {
          response(data[1]);
        }
      });
    }
  });
});

