$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var biggestFear = $("input#biggestFear").val();
    var favoriteThingAboutSelf = $("input#favoriteThingAboutSelf").val();
    var hate = $("input#hate").val();
    var love = $("input#love").val();
    var money = $("input#money").val();

    $(".biggestFear").text(biggestFear);
    $(".favoriteThingAboutSelf").text(favoriteThingAboutSelf);
    $(".hate").text(hate);
    $(".love").text(love);
    $(".money").text(money);


    event.preventDefault();
  });
});
