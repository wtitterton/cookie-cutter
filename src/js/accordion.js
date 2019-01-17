(function($) {
  $.fn.CookieCutterAccordion = function(options) {
    //default settings
    var defaults = {
      onPanelClose:function(){},
      onPanelOpen:function(){}
    };
    var accordion = this;
    accordion.settings = {}
    var init = function() {
      accordion.settings = $.extend({}, defaults, options);
      accordion.panels = accordion.find('.accordion-panel');
      accordion.find(".accordion-content.active").slideDown();
      $(accordion.panels).on('click',function(e){
        // stop default behaviour of links
        e.preventDefault();
        $(this).addClass('active');
        $(this).siblings('.accordion-panel').removeClass('active');

        var current = $(this).next(".accordion-content");
        if(current.hasClass('active'))
        {
          $(this).removeClass('active');
          current.removeClass('active');
          current.slideUp();
        }
        else
        {
          current.addClass('active').slideDown();
          accordion.settings.onPanelOpen();
          current.siblings(".accordion-content").removeClass('active').slideUp();
          accordion.settings.onPanelClose();
        }

      })
    }

    // public methods
    accordion.openPanel = function()
    {
      accordion.settings.onPanelOpen();

    }
    accordion.closePanel = function()
    {
      accordion.settings.onPanelClose();
    }

    accordion.closeAllPanels = function()
    {

    }


    init();
  }
    // $.Accordion = function(el, options) {
    //
    //     var defaults = {
    //     onPanelClose:function(){},
    //     onPanelOpen:function(){}
    //     }
    //
    //     var accordion = this;
    //     accordion.settings = {}
    //     var init = function()
    //     {
    //       accordion.settings = $.extend({}, defaults, options);
    //       accordion.el = el;
    //       accordion.panels = el.find('.accordion-panel');
    //       $(accordion.panels).on('click',function(e){
    //         // stop default behaviour of links
    //         e.preventDefault();
    //         $(this).addClass('active');
    //         $(this).siblings('.accordion-panel').removeClass('active');
    //
    //         var current = $(this).next(".accordion-section");
    //         if(current.hasClass('active'))
    //         {
    //           return;
    //         }
    //         current.addClass('.active').slideDown();
    //         accordion.settings.onPanelOpen();
    //         current.siblings(".accordion-section").removeClass('active').slideUp();
    //         accordion.settings.onPanelClose();
    //       })
    //     }
    //     // public methods
    //     accordion.openPanel = function()
    //     {
    //       accordion.settings.onPanelOpen();
    //
    //     }
    //     accordion.closePanel = function()
    //     {
    //       accordion.settings.onPanelClose();
    //     }
    //
    //     accordion.closeAllPanels = function()
    //     {
    //
    //     }
    //
    //     init();
    //   }

})(jQuery);
