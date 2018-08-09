$(document).ready(function() {
  $("#receipt").hide();
  $("#infos").submit(function(event)  {

  var nameInput = $("input#name").val();
  var addressInput = $("input#address").val();
  var shoesInput = $("input#shoes").val();
  var sizeInput = $("input#size").val();



    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".shoes").text(shoesInput);
    $(".size").text(sizeInput);
    $(".shoedetails").toggle();
    $("#receipt").toggle();


    event.preventDefault();

  });
});
