$(document).ready(function () {
  $(".list-button").click(function () {
    $(".head").slideDown("slow", function () {
      $(".xbutton").show(function () {
        $(".end-Button").click(function () {
          $(".head").slideUp(1000);
        });
      });
    });
  });
});
