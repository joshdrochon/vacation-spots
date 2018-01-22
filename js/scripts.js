//business logic

function Location(destination, time, duration) {
  this.destination = destination;
  this.time = time;
  this.duration = duration;
}

//ui logiuc

$(document).ready(function(){
  $("#form1").submit(function(event) {
    event.preventDefault();

    var inputLocation = $("input#where").val();
    var inputTime = $("input#when").val();
    var inputLength = $("input#how-long").val();

    console.log(inputLocation);

    var newLocation = new Location(inputLocation, inputTime, inputLength);

    $("ul#location").append("<li><span class='location'>" + newLocation.duration + "</span></li>");

    //upon form submission, text fields are cleared
    $("#where").val("");
    $("#when").val("");
    $("#how-long").val("");

    $("#location").show();

    $(".location").last().click(function(){
      $("#location-details").show();
      $(".locationSpec").text(newLocation.destination);
      $(".time-of-year").text(newLocation.time);
      $(".duration").text(newLocation.duration);
    });

  });
});
