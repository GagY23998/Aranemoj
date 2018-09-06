// img slider
$(function() {
  $.fn.isInView = function() {
    var viewport = {
      top: $(window).scrollTop(),
      left: $(window).scrollLeft()
    };
    viewport.right = viewport.left + $(window).width();
    viewport.bottom = viewport.top + $(window).height();
    var bound = this.offset();
    bound.bottom = bound.top + this.height();
    bound.right = bound.left + this.width();
    return !(
      viewport.top > bound.bottom ||
      viewport.right < bound.left ||
      viewport.bottom < bound.top ||
      bound.right < viewport.left
    );
  };
  if (window.matchMedia("(max-width:600px)").matches) {
    $("#navBar").click(() => {
      let situation = $("#navBar>ul");
      if (situation.css("display") === "none") {
        situation.css("display", "block");
      } else {
        situation.css("display", "none");
      }
    });
    $("#navBar li a").click(e => {
      setTimeout(() => $("#navBar>ul").css("display", "none"), 100);
      /*      let goal = $("div[id='" + e.target.textContent + "']").offset();
      window.scrollTo({
        top: goal["top"],
        left: goal["left"],
        behavior: "smooth"
      });*/
    });
  } else {
    $("div[id='About Me']").mouseleave(function() {
      $(this)
        .find("p")
        .animate({ opacity: 0 }, 2000);
    });
  }
  $.validator.addMethod(
    "regex",
    function(value, element, regexp) {
      var check = false;
      return this.optional(element) || regexp.test(value);
    },
    "Please check your input."
  );
  $("#g1>ul>li").click(event => {
    if (window.matchMedia("(max-width:320px)").matches) {
      console.log(true);

      $(event.target)
        .siblings()
        .each((i, item) => $("p[id='" + item.textContent + "']").fadeOut());
      $("p[id='" + event.target.textContent + "']").fadeIn();
    } else {
      $(event.target)
        .siblings()
        .each((i, item) =>
          $("p[id='" + item.textContent + "']").animate({ opacity: 0 }, 1000)
        );
      $("p[id='" + event.target.textContent + "']").animate(
        { opacity: 1 },
        1000
      );
    }
  });

  $(window).scroll(function() {
    if ($("#Portofolio").isInView()) {
      $(".progressBar>div").each((i, item) => {
        $(item).animate(
          {
            width:
              skillz[i] *
              $(item)
                .parent()
                .css("width")
                .match(regexNumbers)
          },
          1000
        );
      });
    }
  });

  var imgSlider = $("#imgSlider>img");
  console.log(imgSlider);

  imgSlider.each(function() {
    $(this).css({ opacity: "0" });
  });
  let skillz = [0.55, 0.7, 0.2, 0.6, 0.3];
  $("#navBar>ul>li>a").click(e => {
    let goal = $("div[id='" + e.target.textContent + "']").offset();
    window.scrollTo({
      top: goal["top"],
      left: goal["left"],
      behavior: "smooth"
    });
  });
  //buttons
  $("#imgSlider")
    .children()
    .first()
    .css({ opacity: "1" });
  for (let i = 0; i < imgSlider.length; i++) {
    $("#picmenu").append("<div class='buttons'></div>");
  }
  $("#imgSlider").before(
    "<img src='arrow.png' class='arrowsBruh' id='arrowPrvi'>"
  );
  $("#imgSlider").after(
    "<img src='arrow.png' class='arrowsBruh' id='arrowDrugi'>"
  );
  var nextOne = 0;
  var buttoni = $(".buttons");
  $(buttoni[0]).css("background-color", "Black");
  function slidajaj() {
    setInterval(function() {
      if (nextOne + 1 == imgSlider.length) {
        $(imgSlider[0]).animate({ opacity: 1 });
        $(imgSlider[nextOne]).animate({ opacity: 0 });
        $(buttoni[0]).css({ "background-color": "Black" });
        $(buttoni[nextOne]).css({ "background-color": "White" });
        nextOne = 0;
      } else {
        $(imgSlider[nextOne + 1]).animate({ opacity: 1 }, 1000);
        $(imgSlider[nextOne]).animate({ opacity: 0 });
        $(buttoni[nextOne + 1]).css({ "background-color": "Black" });
        $(buttoni[nextOne]).css({ "background-color": "white" });
        ++nextOne;
      }
    }, 3000);
  }
  $("#Header").on(
    "load",
    (function() {
      slidajaj();
    })()
  );
  $("#arrowPrvi").click(function(event) {
    event.stopImmediatePropagation();
    if (nextOne <= 0) {
      $(imgSlider[imgSlider.length - 1]).animate({ opacity: 1 });
      $(buttoni[imgSlider.length - 1]).css("background-color", "Black");
      $(buttoni[0]).css({ "background-color": "White" });
      $(imgSlider[0]).animate({ opacity: 0 }, 100);
      nextOne = imgSlider.length - 1;
    } else {
      --nextOne;
      $(imgSlider[nextOne + 1]).animate({ opacity: 0 });
      $(buttoni[nextOne + 1]).css({ "background-color": "White" });
      $(imgSlider[nextOne]).animate({ opacity: 1 });
      $(buttoni[nextOne]).css("background-color", "Black");
    }
  });
  $("#arrowDrugi").click(function(e) {
    e.stopImmediatePropagation();
    if (nextOne + 1 == imgSlider.length) {
      $(imgSlider[0]).animate({ opacity: 1 });
      $(imgSlider[nextOne]).animate({ opacity: 0 });
      $(buttoni[0]).css({ "background-color": "Black" });
      $(buttoni[nextOne]).css({ "background-color": "White" });
      nextOne = 0;
    } else {
      $(imgSlider[nextOne + 1]).animate({ opacity: 1 }, 1000);
      $(imgSlider[nextOne]).animate({ opacity: 0 });
      $(buttoni[nextOne + 1]).css({ "background-color": "Black" });
      $(buttoni[nextOne]).css({ "background-color": "white" });
      ++nextOne;
    }
  });
  const regexNumbers = /\d+/;
});

$("#validation").validate({
  onSubmit: true,
  ignore: true,
  rules: {
    imeprezime: {
      required: true,
      regex: /[A-Za-z\s]{10,}/
    },
    godine: {
      required: true,
      regex: /\d{2}/
    },
    feedback: {
      required: true,
      minlength: 20
    }
  },
  messages: {
    imeprezime: {
      required: "Ovo polje ne smije biti prazno",
      regex: "Unijeti ime i prezime"
    },
    godine: {
      required: "Ovo polje ne smije biti prazno",
      regex: "Unijeti godine (2 broja)"
    },
    feedback: {
      required: "Ovo polje ne smije biti prazno",
      minlength: "Morate unije minimalno 20 karaktera"
    }
  }
});
