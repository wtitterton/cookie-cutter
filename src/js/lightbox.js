(function($) {

    $.Lightbox = function(el, options) {

        var defaults = {
          imgClass:"lightbox-img"
        }

        var lightbox = this;
        lightbox.settings = {}
        var init = function()
        {
          lightbox.settings = $.extend({}, defaults, options);
          lightbox.el = el;
        }
        // public methods
        lightbox.next = function()
        {

        }

        lightbox.prev = function()
        {

        }

        lightbox.open = function()
        {
          // get index of img clicked on
        }

        lightbox.close = function()
        {
          //hide overlay
        }

        init();
      }

})(jQuery);
