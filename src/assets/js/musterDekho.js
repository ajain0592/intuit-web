$(document).ready(function () {
  var lastScrollTop = 0;

  $('.header-menu ul li a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 60,
          },
          1000
        );
    }
    $(".bar").removeClass("open");
    $("header").removeClass("mobileView");
  });

  var lastId,
    topMenu = $(".header-menu ul li"),
    topMenuHeight = topMenu.outerHeight() + 1,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
      var hrefValue = $(this).attr("href");
      if (hrefValue && hrefValue.length > 1 && hrefValue.startsWith("#")) {
        var item = $(hrefValue);
        if (item.length) {
          return item;
        }
      }
    });

  $("#return-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(".bar").click(function () {
    $(this).toggleClass("open");
    $("header").toggleClass("mobileView");
    // $('body').toggleClass('overflow');
  });
  $(".login-btn").click(function () {
    $("header ul li").removeClass("active");
    // $('body').toggleClass('overflow');
  });

  $(".theme-click").click(function () {
    $(".controls").toggleClass("active");
    // $('body').toggleClass('overflow');
  });

  activeTab();

  function activeTab() {
    if ($("#home").length) {
      var fromTop = $(this).scrollTop() + topMenuHeight;
      var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) return this;
      });

      var windowLastPoint = $(window).scrollTop() + $(window).outerHeight(true);
      var bodyHeight = $(document).outerHeight(true);

      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";
      if (lastId !== id) {
        lastId = id;
        menuItems
          .parent()
          .removeClass("active")
          .end()
          .filter("[href='#" + id + "']")
          .parent()
          .addClass("active");
      }

      if (windowLastPoint + 1 > bodyHeight) {
        $(".lastPoint").addClass("active").siblings().removeClass("active");
      } else {
        $(".lastPoint").removeClass("active");
        lastId = id;
        menuItems
          .parent()
          .removeClass("active")
          .end()
          .filter("[href='#" + id + "']")
          .parent()
          .addClass("active");
      }
    }
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("#return-to-top").fadeIn(200);
      $("#return-to-top").addClass("bottom");
    } else {
      $("#return-to-top").fadeOut(200);
      $("#return-to-top").removeClass("bottom");
    }

    activeTab();
  });

  var $input;

  function onInputFocus(event) {
    var $target = $(event.target);
    var $parent = $target.parent();
    $parent.addClass("input--filled");
  }

  function onInputBlur(event) {
    var $target = $(event.target);
    var $parent = $target.parent();

    if (event.target.value.trim() === "") {
      $parent.removeClass("input--filled");
    }
  }

  $(document).ready(function () {
    $input = $(".input__field");

    // in case there is any value already
    $input.each(function () {
      if ($input.val().trim() !== "") {
        var $parent = $input.parent();
        $parent.addClass("input--filled");
      }
    });

    $input.on("focus", onInputFocus);
    $input.on("blur", onInputBlur);
  });

  (function (exports) {
    var themeChanger = {
      settings: {
        wrapper: $(".colorTheme"),
        buttons: $(".controls button"),
      },

      init: function () {
        var _self = this;
        this.settings.buttons.on("click", function () {
          var $node = $(this),
            theme = $node.data("theme");
          _self.settings.wrapper.removeClass().addClass(".colorTheme " + theme);
          _self.settings.buttons.removeAttr("disabled");
          $node.attr("disabled", true);
        });
      },
    };

    themeChanger.init();
  })(window);
});
