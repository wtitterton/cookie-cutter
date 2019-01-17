(function($) {

  $.fn.CookieCutterTabs = function(options) {
    //default settings
    var defaults = {
      animation:"scale",
      activeTab:0
    };
    var tabs = this;
    tabs.settings = {}
    var init = function() {
      tabs.settings = $.extend({}, defaults, options);
      tabs.buttons = $(tabs).find('.tabs li');
      tabs.buttons.on('click',tabs.handleTab);
    }
    tabs.handleTab = function() {
      // already active so nothing todo
      if($(this).hasClass('active'))
      {
        return;
      }
      var panelId = $(this).find('a').attr('href');
      //make clicked tab active and remove active class from siblings
      $(this).addClass('active').siblings().removeClass('active');
      $(panelId).addClass('active').siblings().removeClass('active');
      $(panelId).addClass(tabs.settings.animation).siblings().removeClass(tabs.settings.animation);
    }

    init();
  }


    // $.Tabs = function(el, options) {
    //
    //     var defaults = {
    //       animation:"scale",
    //       activeTab:0
    //     }
    //     var tabs = this;
    //     tabs.settings = {}
    //     var init = function()
    //     {
    //         tabs.settings = $.extend({}, defaults, options);
    //         tabs.el = el;
    //         tabs.buttons = $(tabs.el).find('.tabs li');
    //         tabs.buttons.on('click',tabs.handleTab);
    //
    //     }
    //     tabs.updateAppearance = function(index,tab,content)
    //     {
    //       //var color = tabs.settings.colors[index];
    //       // check for array of colors
    //     },
    //     tabs.handleTab = function() {
    //       // already active so nothing todo
    //       if($(this).hasClass('active'))
    //       {
    //         return;
    //       }
    //       var panelId = $(this).find('a').attr('href');
    //       //make clicked tab active and remove active class from siblings
    //       $(this).addClass('active').siblings().removeClass('active');
    //       $(panelId).addClass('active').siblings().removeClass('active');
    //       $(panelId).addClass(tabs.settings.animation).siblings().removeClass(tabs.settings.animation);
    //     }
    //
    //
    //     // private methods
    //
    //     init();
    //   }

})(jQuery);
