
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var cityInput = $("input#city").val();
    var vacInput = $("input#vac").val();
    var occInput = $("input#occ").val();
    var colorInput = $("input#color").val();
    var animalInput = $("input#animal").val();
    var carInput = $("input#car").val();

    $(".city").text(cityInput);
    $(".vac").text(vacInput);
    $(".occ").text(occInput);
    $(".color").text(colorInput);
    $(".animal").text(animalInput);
    $(".car").text(carInput);

    $("#story").show();

    event.preventDefault();
  });
});
