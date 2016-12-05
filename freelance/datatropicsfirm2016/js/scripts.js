$(function() {
        // Load the classic theme
        Galleria.loadTheme('../galleria/themes/classic/galleria.classic.min.js');

        // Initialize Galleria
        Galleria.run('.galleria');
    
        var sidebar = $('.sidebar');
        var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));

        $(window).scroll(function (event) {
          var y = $(this).scrollTop();
          if (y >= top) {
            sidebar.css='z-index: 2;'
            sidebar.addClass('fixed');
          } else {
            sidebar.css='z-index: 2;'
            sidebar.removeClass('fixed');
          }
        });
    });
