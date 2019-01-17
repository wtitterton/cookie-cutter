(function($) {
  $.fn.CookieCutterModal = function(options) {
    //default settings
    var defaults = {
      openBtn:".modal-open",
      closeBtn:".modal-close",
      animation:"slide-down",
      timeout:500,
      onload:false,
      onClose:function(){},
      onOpen:function(){}
    };
    var modal = this;
    modal.settings = {}
    var init = function() {
      modal.settings = $.extend({}, defaults, options);
      $(modal).addClass(modal.settings.animation);

      $(modal).on('click',function(e){
        //if event target is modal content then don't close modal
        if (e.target !== this) return;
        modal.close();
        $('body').removeClsss('no-scroll');
      })

      $(modal.settings.closeBtn).on('click',function(){
          modal.close();
      })

      $(modal.settings.openBtn).on('click',function(){
        modal.open();
      })
      /* activates modal on page load */
      if(modal.settings.onload)
      {
        setTimeout(function(){
          modal.open();
        },modal.settings.timeout)
      }
    }

    // public methods
    modal.open = function()
    {
      modal.settings.onOpen();
      $(modal).find('.modal-content').addClass('slide-down');
      $(modal).addClass('modal-show');
      $(modal).addClass('no-scroll');
    }
    modal.close = function()
    {
      modal.settings.onClose();
      $(modal).removeClass('modal-show');
      $(modal).removeClass('no-scroll');
    }

    init();
  }

})(jQuery);
