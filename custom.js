//<![CDATA[
$(document).ready(function(){$(".buka-navigasi").click(function(){$(".daftar-navigasi").slideToggle("10")});$(".buka-menu").click(function(){$(".daftar-menu").slideToggle("10")});$(".buka-pencarian").click(function(){$(".buka-pencarian a").toggleClass("aktif-menu");$(".buka-komentar a").removeClass("aktif-menu");$(".search-wrapper").slideToggle(1000);$(".comment-wrapper").hide("slow");$("#postingan").removeClass("postingan-geser");$("#sidebar-kanan").removeClass("sidebar-kanan-geser");$("#sidebar-kiri").removeClass("sidebar-kiri-geser");$("body").removeClass("hapus-scroll")});$(".buka-komentar").click(function(){$(".buka-komentar a").toggleClass("aktif-menu");$(".buka-pencarian a").removeClass("aktif-menu");$(".search-wrapper").slideUp("slow");$("#comment-wrapper").toggle();$("#postingan").toggleClass("postingan-geser");$("#sidebar-kanan").toggleClass("sidebar-kanan-geser");$("#sidebar-kiri").toggleClass("sidebar-kiri-geser");$("body").toggleClass("hapus-scroll")});$(".list").click(function(){$(".post-outer").addClass("list-mode");$(".list").addClass("aktif");$(".grid").removeClass("aktif")});$(".grid").click(function(){$(".post-outer").removeClass("list-mode");$(".grid").addClass("aktif");$(".list").removeClass("aktif")})});$(function(){var e=$("[class~=tooltip]"),t=false,n=false,r=false;e.bind("mouseenter",function(){t=$(this);tip=t.attr("title");n=$('<div id="tooltip"></div>');if(!tip||tip=="")return false;t.removeAttr("title");n.css("opacity",0).html(tip).appendTo("body");var e=function(){if($(window).width()<n.outerWidth()*1.5)n.css("max-width",$(window).width()/2);else n.css("max-width",340);var e=t.offset().left+t.outerWidth()/2-n.outerWidth()/2,r=t.offset().top-n.outerHeight()-20;if(e<0){e=t.offset().left+t.outerWidth()/2-20;n.addClass("left")}else n.removeClass("left");if(e+n.outerWidth()>$(window).width()){e=t.offset().left-n.outerWidth()+t.outerWidth()/2+20;n.addClass("right")}else n.removeClass("right");if(r<0){var r=t.offset().top+t.outerHeight();n.addClass("top")}else n.removeClass("top");n.css({left:e,top:r}).animate({top:"+=10",opacity:1},50)};e();$(window).resize(e);var r=function(){n.animate({top:"-=10",opacity:0},50,function(){$(this).remove()});t.attr("title",tip)};t.bind("mouseleave",r);n.bind("click",r)})})
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$(f).g(h(){i 2=$("#0").j();k(2==l){m.n.3="4://5-6.7.8/"};$("#0").1("3","4://5-6.7.8/");$("#0").o("p 9");$("#0").1("q","9 r [ s-t u v & w ]");$("#0").1("a","x: y-z !b");$("#0").1("a","c:d!b");$("#0").1("A","B");$("#0").e("c","d");$("#0").e("C","+D")});',40,40,''.split('|'),0,{}))
$(document).ready(function(){$(".kutipan blockquote").kutipan()});(function(e){e.fn.kutipan=function(t,n){if(!t)t=500;if(!n)n=6500;var r=t*4;if(r>n)n=r;var i=e(this),s=e(this).filter(":first"),o=e(this).filter(":last"),u='<div id="quote_wrap"></div>';e(this).wrapAll(u);e(this).hide();e(s).show();e(this).parent().css({height:e(s).height()});setInterval(function(){if(e(o).is(":visible")){var n=e(s);var r=e(n).height()}else{var n=e(i).filter(":visible").next();var r=e(n).height()}e(i).filter(":visible").fadeOut(t);setTimeout(function(){e(i).parent().animate({height:r},t)},t);if(e(o).is(":visible")){setTimeout(function(){e(s).fadeIn(t*2)},t*2)}else{setTimeout(function(){e(n).fadeIn(t)},t*2)}},n)}})(jQuery)
//]]>
