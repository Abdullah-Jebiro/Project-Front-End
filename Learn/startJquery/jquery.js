$(function () {
  $("ul li").animate({ opacity: 0.5 });
  $("ul li").hover(
    function () {
      $(this).stop().animate({ opacity: 1 });
    },
    function () {
      $(this).stop().css({ opacity: 0.5 });
    }
  );
  $(selector).css(propertyName, value);
  
  $("#hide").click(() =>
    $("img").fadeOut(1000, () =>
      $("img").fadeIn(() =>
        $("img").slideUp(() =>
          $("img").slideDown(() =>
            $("input").animate({ width: "50%" }, { height: "100px" })
          )
        )
      )
    )
  );

  $("div").hover(
    function () {
      $(this).addClass("text-red");
    },
    function () {
      $(this).removeClass("text-red");
    }
  );

  $("input:hover").fadeOut(1000);

  //   $("ul li:last-child").addClass("text-red");

  $("ul li").hover(
    function () {
      $(this).parents().children("li:last-child").addClass("b-red");
    },
    function () {
      $(this).parents().children("li:last-child").removeClass("b-red");
    }
  );
});

function add() {
  let i = Number($("ul li:last-child").text());
  //   $("ul li:last-child").addClass("text-red");
  $(`<li>${i + 1}</li>`).appendTo("ul");
  $("ul li").removeClass("text-red");
  $("ul li:last-child").addClass("text-red");
}
