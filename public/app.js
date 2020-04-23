function displayResults(scrapedData) {
  $("#tbody").empty();
  scrapedData.forEach(function(articles) {
    var tr = $("<tr>").append(
      $("<td>").text(articles.title),
      $("<td>").text(articles.link),
      $("<td>").text(articles.image),
      $("<td>").text(articles.summary)
    );

    $("#tbody").append(tr);
  });
}

$.getJSON("/all", function(data){
    console.log(data);
    for (var i = 0; i < data.length; i++){
      $("#results").append( "<tr><td>" + data[i].title + "</td>" +
                              "<td><a href='" + data[i].link + "'>" + data[i].link + "</a></td>" +
                              "<td><img src='" + data[i].image +  " '/></td>" + 
                              "<td>" + data[i].summary + "</td></tr>");
    }
  
  });
  
  
  function setActive(selector) {
    $("th").removeClass("active");
    $(selector).addClass("active");
  }
  
  
  $.getJSON("/all", function(data) {
    console.log("im para for displayresults", data)
    displayResults(data);
  });
  
  
  $("#headline-sort").on("click", function() {
    setActive("#title");
  
    $.getJSON("/title", function(data) {
      displayResults(data);
    });
  });
  
  
  
  
  $("#headline-sort").on("click", function(){
    $("#tbody").empty();
    setActive("#title");
  
    $.getJSON("/title", function(data){
      console.log(data);
      for (var i = 0; i < data.length; i ++) {
        $("#tbody").append("<tr><td>" + data[i].title + "</td>" +
        "<td><a href='" + data[i].link + "'>" + data[i].link + "</a></td>" +
        "<td><img src='" + data[i].image +  " '/></td>" +
        "<td>" + data[i].summary + "</td></tr>");
      }
    })
  
  });
  
  $("#more-articles").on('click', function(){
   console.log("ive been clicked")
   $("#tbody").empty();
    $.get('/scrape')
    .then(function(response){
      location.reload()
    })
  })
  