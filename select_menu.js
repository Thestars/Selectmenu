(function($){
  $.fn.xSelect = function(obj){
    var select_DOM = $(this);
    var select_DOM_option = $(this).find("option");
    var select_option_length = select_DOM_option.length;
    select_DOM.hide();
        for (var i = 0; i < select_DOM.length; i++) {
          $(select_DOM[i]).after(function(event){
            var select_html = document.createElement("div");
                select_html.className = "x-select-menu";
                select_html.index = i;
                $(select_html).append("<span>"+$(this).find("option:eq(0)").text()+"</span>");
                $(select_html).append("<ul></ul>");
                $(select_html).append("<input type=\"hidden\" class=\"\" value=\"\">");
                 for (var j = 0; j < $(this).find("option").length; j++) {
                   $(select_html).find("ul").append("<li>"+ $(this).find("option:eq("+j+")").text() +"</li>");
                 }
                $(select_html).on("click",function(e){
                  $(this).find("ul").slideDown("fast");
                  e.stopPropagation();
                })
                $(select_html).find("li").on("click",function(e){
                  $(this).parent().slideUp("fast").prev().text($(this).text());
                  $(this).parent().next().val($(select_DOM_option[$(this).index()]).val());
                  e.stopPropagation();
                })
            return select_html;
          });
        }
        $(document).on("click",function(e){
            $(".x-select-menu").children("ul").slideUp("fast");
        })
  }
})(jQuery);
