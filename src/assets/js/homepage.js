$(document).ready(function () {
  $(function () {
    if ($(".existingFeatures").length) {
      $(".existingFeatures section").each(function () {
        var off = $(this).offset().top;
        $(this).data("orig-offset", off);

        function setHeight() {
          windowHeight = $(window).innerHeight();
          var total = 0;
          $(".existingFeatures section").each(function () {
            total += $(this).outerHeight();
          });
          // $("body").css("height", total);
        }
        setHeight();

        var doc = document.documentElement,
          top1 = 0;

        $(window).scroll(function () {
          var offset = $(".active_class").outerHeight(true);
          var scrollTop = $(window).scrollTop();
        });

        $(window).scroll(function () {
          if ($("#home").length) {
            var wondowTop = $(window).scrollTop(),
              sectionTop = $(".active_class").offset().top,
              sectionBottom =
                $(".active_class").offset().top +
                $(".active_class").outerHeight(true),
              b = $(document).height(),
              c = $(".active_class").height();
            scrollPercent = (wondowTop / (b - c)) * 400;

            var pos = scrollPercent;
            var centerClass = $(".active_class");

            if (wondowTop + 250 > sectionBottom) {
              centerClass
                .next()
                .addClass("active_class")
                .siblings()
                .removeClass("active_class");
              centerClass.addClass("previous");
              centerClass.next().removeClass("backScroll");
            } else if (wondowTop < sectionTop) {
              centerClass
                .addClass("backScroll")
                .siblings()
                .removeClass("backScroll");
              centerClass
                .prev()
                .addClass("active_class")
                .siblings()
                .removeClass("active_class");
              centerClass.removeClass("previous");
            }
          }
        });
      });
    }
  });

  $(function () {
    if ($(".comingSoonFeatures").length) {
      $(".comingSoonFeatures section").each(function () {
        var off = $(this).offset().top;
        $(this).data("orig-offset", off);

        function setHeight() {
          windowHeight = $(window).innerHeight();
          var total = 0;
          $(".comingSoonFeatures section").each(function () {
            total += $(this).outerHeight();
          });
          // $("body").css("height", total);
        }
        setHeight();

        var doc = document.documentElement,
          top1 = 0;

        $(window).scroll(function () {
          var offset = $(".center_class").outerHeight(true);
          var scrollTop = $(window).scrollTop();
        });

        $(window).scroll(function () {
          if ($("#home").length) {
            var wondowTop = $(window).scrollTop(),
              sectionTop = $(".center_class").offset().top,
              sectionBottom =
                $(".center_class").offset().top +
                $(".center_class").outerHeight(true),
              b = $(document).height(),
              c = $(".center_class").height();
            scrollPercent = (wondowTop / (b - c)) * 400;

            var pos = scrollPercent;
            var centerClass = $(".center_class");

            if (wondowTop + 250 > sectionBottom) {
              centerClass
                .next()
                .addClass("center_class")
                .siblings()
                .removeClass("center_class");
              centerClass.addClass("previous");
              centerClass.next().removeClass("backScroll");
            } else if (wondowTop < sectionTop) {
              centerClass
                .addClass("backScroll")
                .siblings()
                .removeClass("backScroll");
              centerClass
                .prev()
                .addClass("center_class")
                .siblings()
                .removeClass("center_class");
              centerClass.removeClass("previous");
            }
          }
        });
      });
    }
  });
});
