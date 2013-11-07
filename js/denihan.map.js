; (function ($) {
    $.fn.denihanImageMap = function (options) {
        // Create some defaults, extending them with any options that were provided
        var settings = $.extend({
            lorem: "things"
        }, options);

        function initialize($el) {
            $el.denihanToggle({ target: $el.find("span.inside") });

            var leftValue = "0";
            var topValue = "0";

            if($el.attr("data-denihan-point-x")) { leftValue = $el.attr("data-denihan-point-x"); }
            if($el.attr("data-denihan-point-y")) { topValue = $el.attr("data-denihan-point-y"); }

            $el.css("left", $el.attr("data-denihan-point-x") + "px");
            $el.css("top", $el.attr("data-denihan-point-y") + "px");
        }

        return this.each(function () {
            var $this = $(this);
            initialize($this);
        });
    };
})(jQuery);