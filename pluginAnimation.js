(function($) {
  $.fn.animationToggle = function() {
    const toggle = "toggle";
    
    this.animate({
      height: toggle,
      opacity: toggle
    }, 1000);

    return this;
  };  
})(jQuery);
