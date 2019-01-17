(function($){

  $.fn.plugin = function(options) {
    //default settings
    var defaults = {
      
    };
    var plugin = this;
    plugin.settings = {}
    var init = function() {
      plugin.settings = $.extend({}, defaults, options);
      alert(plugin.settings.whatever);
    }

    init();
  }

}(jQuery))
