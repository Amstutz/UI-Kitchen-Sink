/*  Live LESS Theme Customizer - v1.1.2
 *  http://demo.virtuosoft.eu/live-less-theme-customizer/ */
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

+function(a){function e(d){a(b).remove(),a(c).each(function(){var b=f(a(this)),c={relatedTarget:this};if(!b.hasClass("open"))return;b.trigger(d=a.Event("hide.bs.dropdown",c));if(d.isDefaultPrevented())return;b.removeClass("open").trigger("hidden.bs.dropdown",c)})}function f(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}"use strict";var b=".dropdown-backdrop",c="[data-toggle=dropdown]",d=function(b){a(b).on("click.bs.dropdown",this.toggle)};d.prototype.toggle=function(b){var c=a(this);if(c.is(".disabled, :disabled"))return;var d=f(c),g=d.hasClass("open");e();if(!g){"ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",e);var h={relatedTarget:this};d.trigger(b=a.Event("show.bs.dropdown",h));if(b.isDefaultPrevented())return;d.toggleClass("open").trigger("shown.bs.dropdown",h),c.focus()}return!1},d.prototype.keydown=function(b){if(!/(38|40|27)/.test(b.keyCode))return;var d=a(this);b.preventDefault(),b.stopPropagation();if(d.is(".disabled, :disabled"))return;var e=f(d),g=e.hasClass("open");if(!g||g&&b.keyCode==27)return b.which==27&&e.find(c).focus(),d.click();var h=" li:not(.divider):visible a",i=e.find("[role=menu]"+h+", [role=listbox]"+h);if(!i.length)return;var j=i.index(i.filter(":focus"));b.keyCode==38&&j>0&&j--,b.keyCode==40&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),e=c.data("bs.dropdown");e||c.data("bs.dropdown",e=new d(this)),typeof b=="string"&&e[b].call(c)})},a.fn.dropdown.Constructor=d,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",c,d.prototype.toggle).on("keydown.bs.dropdown.data-api",c+", [role=menu], [role=listbox]",d.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d);if(this.isShown||d.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)})},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]!==a.target&&!this.$element.has(a.target).length&&this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){a.which==27&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){if(a.target!==a.currentTarget)return;this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),typeof c=="object"&&c);f||e.data("bs.modal",f=new b(this,g)),typeof c=="string"?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);var e=this.options.trigger.split(" ");for(var f=e.length;f--;){var g=e[f];if(g=="click")this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if(g!="manual"){var h=g=="hover"?"mouseenter":"focusin",i=g=="hover"?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="in";if(!c.options.delay||!c.options.delay.show)return c.show();c.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="out";if(!c.options.delay||!c.options.delay.hide)return c.hide();c.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e=typeof this.options.placement=="function"?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n=this.options.container=="body"?window.innerWidth:k.outerWidth(),o=this.options.container=="body"?window.innerHeight:k.outerHeight(),p=this.options.container=="body"?0:k.offset().left;e=e=="bottom"&&h.top+h.height+j-m>o?"top":e=="top"&&h.top-m-j<0?"bottom":e=="right"&&h.right+i>n?"left":e=="left"&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;c=="top"&&k!=g&&(d=!0,b.top=b.top+g-k);if(/bottom|top/.test(c)){var l=0;b.left<0&&(l=b.left*-2,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function e(){b.hoverState!="in"&&c.detach(),b.$element.trigger("hidden.bs."+b.type)}var b=this,c=this.tip(),d=a.Event("hide.bs."+this.type);this.$element.trigger(d);if(d.isDefaultPrevented())return;return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?c.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),this.hoverState=null,this},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},typeof b.getBoundingClientRect=="function"?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return a=="bottom"?{top:b.top+b.height,left:b.left+b.width/2-c/2}:a=="top"?{top:b.top-d,left:b.left+b.width/2-c/2}:a=="left"?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f=typeof c=="object"&&c;if(!e&&c=="destroy")return;e||d.data("bs.tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?typeof c=="string"?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||(typeof b.content=="function"?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f=typeof c=="object"&&c;if(!e&&c=="destroy")return;e||d.data("bs.popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});b.trigger(f);if(f.isDefaultPrevented())return;var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})},b.prototype.activate=function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g).emulateTransitionEnd(150):g(),e.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;this.affixed=="top"&&(e.top+=d),typeof f!="object"&&(h=g=f),typeof g=="function"&&(g=f.top(this.$element)),typeof h=="function"&&(h=f.bottom(this.$element));var i=this.unpin!=null&&d+this.unpin<=e.top?!1:h!=null&&e.top+this.$element.height()>=c-h?"bottom":g!=null&&d<=g?"top":!1;if(this.affixed===i)return;this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k);if(k.isDefaultPrevented())return;this.affixed=i,this.unpin=i=="bottom"?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),i=="bottom"&&this.$element.offset({top:c-h-this.$element.height()})};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f=typeof c=="object"&&c;e||d.data("bs.affix",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var b=a.Event("show.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])},b.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var b=a.Event("hide.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!a.support.transition)return d.call(this);this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350)},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),typeof c=="object"&&c);!e&&f.toggle&&c=="show"&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":c.data(),i=c.attr("data-parent"),j=i&&a(i);if(!g||!g.transitioning)j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(c).addClass("collapsed"),c[f.hasClass("in")?"addClass":"removeClass"]("collapsed");f.collapse(h)})}(jQuery),+function(a){function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(a.style[c]!==undefined)return{end:b[c]};return!1}"use strict",a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery)
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3]
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(this.smartypants(cap[0]));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/--/g, '\u2014')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
  return html.replace(/&([#\w]+);/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (typeof module !== 'undefined' && typeof exports === 'object') {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

// TinyColor v1.1.0
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License
// 2014-10-27

(function() {

var trimLeft = /^[\s,#]+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    math = Math,
    mathRound = math.round,
    mathMin = math.min,
    mathMax = math.max,
    mathRandom = math.random;

var tinycolor = function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
};

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function() {
        return rgbaToHex(this._r, this._g, this._b, this._a);
    },
    toHex8String: function() {
        return '#' + this.toHex8();
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = s.toHex8String();
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
            color.s = convertToPercentage(color.s);
            color.v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, color.s, color.v);
            ok = true;
            format = "hsv";
        }
        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
            color.s = convertToPercentage(color.s);
            color.l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, color.s, color.l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}
    // `rgbaToHex`
    // Converts an RGBA color plus alpha transparency to hex
    // Assumes r, g, b and a are contained in the set [0, 255]
    // Returns an 8 character hex
    function rgbaToHex(r, g, b, a) {

        var hex = [
            pad2(convertDecimalToHex(a)),
            pad2(mathRound(r).toString(16)),
            pad2(mathRound(g).toString(16)),
            pad2(mathRound(b).toString(16))
        ];

        return hex.join("");
    }

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (mathRound(hsl.h) + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;
    var w = p * 2 - 1;
    var a = rgb2.a - rgb1.a;

    var w1;

    if (w * a == -1) {
        w1 = w;
    } else {
        w1 = (w + a) / (1 + w * a);
    }

    w1 = (w1 + 1) / 2;

    var w2 = 1 - w1;

    var rgba = {
        r: rgb2.r * w1 + rgb1.r * w2,
        g: rgb2.g * w1 + rgb1.g * w2,
        b: rgb2.b * w1 + rgb1.b * w2,
        a: rgb2.a * p  + rgb1.a * (1 - p)
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/AERT#color-contrast>

// `readability`
// Analyze the 2 colors and returns an object with the following properties:
//    `brightness`: difference in brightness between the two colors
//    `color`: difference in color/hue between the two colors
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    var rgb1 = c1.toRgb();
    var rgb2 = c2.toRgb();
    var brightnessA = c1.getBrightness();
    var brightnessB = c2.getBrightness();
    var colorDiff = (
        Math.max(rgb1.r, rgb2.r) - Math.min(rgb1.r, rgb2.r) +
        Math.max(rgb1.g, rgb2.g) - Math.min(rgb1.g, rgb2.g) +
        Math.max(rgb1.b, rgb2.b) - Math.min(rgb1.b, rgb2.b)
    );

    return {
        brightness: Math.abs(brightnessA - brightnessB),
        color: colorDiff
    };
};

// `readable`
// http://www.w3.org/TR/AERT#color-contrast
// Ensure that foreground and background color combinations provide sufficient contrast.
// *Example*
//    tinycolor.isReadable("#000", "#111") => false
tinycolor.isReadable = function(color1, color2) {
    var readability = tinycolor.readability(color1, color2);
    return readability.brightness > 125 && readability.color > 500;
};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// *Example*
//    tinycolor.mostReadable("#123", ["#fff", "#000"]) => "#000"
tinycolor.mostReadable = function(baseColor, colorList) {
    var bestColor = null;
    var bestScore = 0;
    var bestIsReadable = false;
    for (var i=0; i < colorList.length; i++) {

        // We normalize both around the "acceptable" breaking point,
        // but rank brightness constrast higher than hue.

        var readability = tinycolor.readability(baseColor, colorList[i]);
        var readable = readability.brightness > 125 && readability.color > 500;
        var score = 3 * (readability.brightness / 125) + (readability.color / 500);

        if ((readable && ! bestIsReadable) ||
            (readable && bestIsReadable && score > bestScore) ||
            ((! readable) && (! bestIsReadable) && score > bestScore)) {
            bestIsReadable = readable;
            bestScore = score;
            bestColor = tinycolor(colorList[i]);
        }
    }
    return bestColor;
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            a: convertHexToDecimal(match[1]),
            r: parseIntFromHex(match[2]),
            g: parseIntFromHex(match[3]),
            b: parseIntFromHex(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

// Node: Export function
if (typeof module !== "undefined" && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (typeof define === 'function' && define.amd) {
    define(function () {return tinycolor;});
}
// Browser: Expose to window
else {
    window.tinycolor = tinycolor;
}

})();

/*
 *  Bootstrap Color Picker Sliders - v3.0.1
 *
 *  Bootstrap 3 optimized responsive color selector with HSV, HSL, RGB and CIE-Lch (which supports human perceived lightness) selectors and color swatches.
 *  http://www.virtuosoft.eu/code/bootstrap-colorpickersliders/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 *
 *  Requirements:  *
 *      TinyColor: https://github.com/bgrins/TinyColor/
 *
 *  Using color math algorithms from EasyRGB Web site:/
 *      http://www.easyrgb.com/index.php?X=MATH */

(function($) {
  'use strict';

  $.fn.ColorPickerSliders = function(options) {

    return this.each(function() {

      var alreadyinitialized = false,
          settings,
          triggerelement = $(this),
          triggerelementisinput = triggerelement.is('input'),
          container,
          popover_container,
          elements,
          connectedinput = false,
          swatches,
          groupingname = '',
          rendermode = false,
          visible = false,
          MAXLIGHT = 101, // 101 needed for bright colors (maybe due to rounding errors)
          dragTarget = false,
          lastUpdateTime = 0,
          _moveThrottleTimer = null,
          _throttleDelay = 70,
          _inMoveHandler = false,
          _lastMoveHandlerRun = 0,
          color = {
            tiny: null,
            hsla: null,
            rgba: null,
            hsv: null,
            cielch: null
          },
      MAXVALIDCHROMA = 144;   // maximum valid chroma value found convertible to rgb (blue)

      init();

      function _initSettings() {
        if (typeof options === 'undefined') {
          options = {};
        }

        settings = $.extend({
          color: 'hsl(342, 52%, 70%)',
          size: 'default', // sm | default | lg
          placement: 'auto',
          trigger: 'focus', // focus | manual
          preventtouchkeyboardonshow: true, // makes the input readonly and needs a second click to be editable
          title: '',
          hsvpanel: false,
          sliders: true,
          grouping: true,
          swatches: ['FFFFFF', 'C0C0C0', '808080', '000000', 'FF0000', '800000', 'FFFF00', '808000', '00FF00', '008000', '00FFFF', '008080', '0000FF', '000080', 'FF00FF', '800080'], // array or false to disable swatches
          customswatches: 'colorpickkersliders', // false or a grop name
          connectedinput: false, // can be a jquery object or a selector
          flat: false,
          updateinterval: 30, // update interval of the sliders while in drag (ms)
          previewontriggerelement: true,
          previewcontrasttreshold: 15,
          previewformat: 'rgb', // rgb | hsl | hex
          erroneousciecolormarkers: true,
          invalidcolorsopacity: 1, // everything below 1 causes slightly slower responses
          finercierangeedges: true, // can be disabled for faster responses
          titleswatchesadd: 'Add color to swatches',
          titleswatchesremove: 'Remove color from swatches',
          titleswatchesreset: 'Reset to default swatches',
          order: {},
          labels: {},
          onchange: function() {
          }
        }, options);

        if (options.hasOwnProperty('order')) {
          settings.order = $.extend({
            opacity: false,
            hsl: false,
            rgb: false,
            cie: false,
            preview: false
          }, options.order);
        }
        else {
          settings.order = {
            opacity: 0,
            hsl: 1,
            rgb: 2,
            cie: 3, // cie sliders can increase response time of all sliders!
            preview: 4
          };
        }

        if (!options.hasOwnProperty('labels')) {
          options.labels = {};
        }

        settings.labels = $.extend({
          hslhue: 'HSL-Hue',
          hslsaturation: 'HSL-Saturation',
          hsllightness: 'HSL-Lightness',
          rgbred: 'RGB-Red',
          rgbgreen: 'RGB-Green',
          rgbblue: 'RGB-Blue',
          cielightness: 'CIE-Lightness',
          ciechroma: 'CIE-Chroma',
          ciehue: 'CIE-hue',
          opacity: 'Opacity',
          preview: 'Preview'
        }, options.labels);
      }

      function init() {
        if (alreadyinitialized) {
          return;
        }

        alreadyinitialized = true;

        rendermode = $.fn.ColorPickerSliders.detectWhichGradientIsSupported();

        if (rendermode === 'filter') {
          rendermode = false;
        }

        if (!rendermode && $.fn.ColorPickerSliders.svgSupported()) {
          rendermode = 'svg';
        }

        _initSettings();

        // force preview when browser doesn't support css gradients
        if ((!settings.order.hasOwnProperty('preview') || settings.order.preview === false) && !rendermode) {
          settings.order.preview = 10;
        }

        _initConnectedElements();
        _initColor();
        _initConnectedinput();
        _updateTriggerelementColor();
        _updateConnectedInput();

        if (settings.flat) {
          showFlat();
        }

        _bindEvents();
      }

      function _buildComponent() {
        _initElements();
        _renderSwatches();
        _updateAllElements();
        _bindControllerEvents();
      }

      function _initColor() {
        if (triggerelementisinput) {
          color.tiny = tinycolor(triggerelement.val());

          if (!color.tiny.isValid()) {
            color.tiny = tinycolor(settings.color);
          }
        }
        else {
          color.tiny = tinycolor(settings.color);
        }

        color.hsla = color.tiny.toHsl();
        color.rgba = color.tiny.toRgb();
        color.hsv = color.tiny.toHsv();
        color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);
      }

      function _initConnectedinput() {
        if (settings.connectedinput) {
          if (settings.connectedinput instanceof jQuery) {
            connectedinput = settings.connectedinput;
          }
          else {
            connectedinput = $(settings.connectedinput);
          }
        }
      }

      function updateColor(newcolor, disableinputupdate) {
        var updatedcolor = tinycolor(newcolor);

        if (updatedcolor.isValid()) {
          color.tiny = updatedcolor;
          color.hsla = updatedcolor.toHsl();
          color.rgba = updatedcolor.toRgb();
          color.hsv = updatedcolor.toHsv();
          color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

          if (settings.flat || visible) {
            container.removeClass('cp-unconvertible-cie-color');
            _updateAllElements(disableinputupdate);
          }
          else {
            if (!disableinputupdate) {
              _updateConnectedInput();
            }
            _updateTriggerelementColor();
          }

          return true;
        }
        else {
          return false;
        }
      }

      function show(disableLastlyUsedGroupUpdate) {
        if (settings.flat) {
          return;
        }

        if (visible) {
          // repositions the popover
          triggerelement.popover('hide');
          triggerelement.popover('show');
          _bindControllerEvents();
          return;
        }

        showPopover(disableLastlyUsedGroupUpdate);

        visible = true;
      }

      function hide() {
        visible = false;
        hidePopover();
      }

      function showPopover(disableLastlyUsedGroupUpdate) {
        if (popover_container instanceof jQuery) {
          return;
        }

        if (typeof disableLastlyUsedGroupUpdate === 'undefined') {
          disableLastlyUsedGroupUpdate = false;
        }

        popover_container = $('<div class="cp-popover-container"></div>').appendTo('body');

        container = $('<div class="cp-container"></div>').appendTo(popover_container);
        container.html(_getControllerHtml());

        switch (settings.size) {
          case 'sm':
            container.addClass('cp-container-sm');
            break;
          case 'lg':
            container.addClass('cp-container-lg');
            break;
        }

        _buildComponent();

        if (!disableLastlyUsedGroupUpdate) {
          activateLastlyUsedGroup();
        }

        triggerelement.popover({
          html: true,
          animation: false,
          trigger: 'manual',
          title: settings.title,
          placement: settings.placement,
          container: popover_container,
          content: function() {
            return container;
          }
        });

        triggerelement.popover('show');
      }

      function hidePopover() {
        popover_container.remove();
        popover_container = null;

        triggerelement.popover('destroy');
      }

      function _getControllerHtml() {
        var sliders = [],
            color_picker_html = '';

        if (settings.sliders) {

          if (settings.order.opacity !== false) {
            sliders[settings.order.opacity] = '<div class="cp-slider cp-opacity cp-transparency"><span>' + settings.labels.opacity + '</span><div class="cp-marker"></div></div>';
          }

          if (settings.order.hsl !== false) {
            sliders[settings.order.hsl] = '<div class="cp-slider cp-hslhue cp-transparency"><span>' + settings.labels.hslhue + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-hslsaturation cp-transparency"><span>' + settings.labels.hslsaturation + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-hsllightness cp-transparency"><span>' + settings.labels.hsllightness + '</span><div class="cp-marker"></div></div>';
          }

          if (settings.order.rgb !== false) {
            sliders[settings.order.rgb] = '<div class="cp-slider cp-rgbred cp-transparency"><span>' + settings.labels.rgbred + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-rgbgreen cp-transparency"><span>' + settings.labels.rgbgreen + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-rgbblue cp-transparency"><span>' + settings.labels.rgbblue + '</span><div class="cp-marker"></div></div>';
          }

          if (settings.order.cie !== false) {
            sliders[settings.order.cie] = '<div class="cp-slider cp-cielightness cp-transparency"><span>' + settings.labels.cielightness + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-ciechroma cp-transparency"><span>' + settings.labels.ciechroma + '</span><div class="cp-marker"></div></div><div class="cp-slider cp-ciehue cp-transparency"><span>' + settings.labels.ciehue + '</span><div class="cp-marker"></div></div>';
          }

          if (settings.order.preview !== false) {
            sliders[settings.order.preview] = '<div class="cp-preview cp-transparency"><input type="text" readonly="readonly"></div>';
          }

        }

        if (settings.grouping) {
          if (!!settings.hsvpanel + !!(settings.sliders && sliders.length > 0) + !!settings.swatches > 1) {
            color_picker_html += '<ul class="cp-pills">';
          }
          else {
            color_picker_html += '<ul class="cp-pills hidden">';
          }

          if (settings.hsvpanel) {
            color_picker_html += '<li><a href="#" class="cp-pill-hsvpanel">HSV panel</a></li>';
          }
          if (settings.sliders && sliders.length > 0) {
            color_picker_html += '<li><a href="#" class="cp-pill-sliders">Sliders</a></li>';
          }
          if (settings.swatches) {
            color_picker_html += '<li><a href="#" class="cp-pill-swatches">Swatches</a></li>';
          }

          color_picker_html += '</ul>';
        }

        if (settings.hsvpanel) {
          color_picker_html += '<div class="cp-hsvpanel">' +
              '<div class="cp-hsvpanel-sv"><span></span><div class="cp-marker-point"></div></div>' +
              '<div class="cp-hsvpanel-h"><span></span><div class="cp-hsvmarker-vertical"></div></div>' +
              '<div class="cp-hsvpanel-a cp-transparency"><span></span><div class="cp-hsvmarker-vertical"></div></div>' +
              '</div>';
        }

        if (settings.sliders) {
          color_picker_html += '<div class="cp-sliders">';

          for (var i = 0; i < sliders.length; i++) {
            if (typeof sliders[i] === 'undefined') {
              continue;
            }

            color_picker_html += sliders[i];
          }

          color_picker_html += '</div>';

        }

        if (settings.swatches) {
          color_picker_html += '<div class="cp-swatches clearfix"><button type="button" class="add btn btn-default" title="' + settings.titleswatchesadd + '"><span class="glyphicon glyphicon-floppy-save"></span></button><button type="button" class="remove btn btn-default" title="' + settings.titleswatchesremove + '"><span class="glyphicon glyphicon-trash"></span></button><button type="button" class="reset btn btn-default" title="' + settings.titleswatchesreset + '"><span class="glyphicon glyphicon-repeat"></span></button><ul></ul></div>';
        }

        return color_picker_html;
      }

      function _initElements() {
        elements = {
          actualswatch: false,
          swatchescontainer: $('.cp-swatches', container),
          swatches: $('.cp-swatches ul', container),
          swatches_add: $('.cp-swatches button.add', container),
          swatches_remove: $('.cp-swatches button.remove', container),
          swatches_reset: $('.cp-swatches button.reset', container),
          all_sliders: $('.cp-sliders, .cp-preview input', container),
          hsvpanel: {
            sv: $('.cp-hsvpanel-sv', container),
            sv_marker: $('.cp-hsvpanel-sv .cp-marker-point', container),
            h: $('.cp-hsvpanel-h', container),
            h_marker: $('.cp-hsvpanel-h .cp-hsvmarker-vertical', container),
            a: $('.cp-hsvpanel-a span', container),
            a_marker: $('.cp-hsvpanel-a .cp-hsvmarker-vertical', container)
          },
          sliders: {
            hue: $('.cp-hslhue span', container),
            hue_marker: $('.cp-hslhue .cp-marker', container),
            saturation: $('.cp-hslsaturation span', container),
            saturation_marker: $('.cp-hslsaturation .cp-marker', container),
            lightness: $('.cp-hsllightness span', container),
            lightness_marker: $('.cp-hsllightness .cp-marker', container),
            opacity: $('.cp-opacity span', container),
            opacity_marker: $('.cp-opacity .cp-marker', container),
            red: $('.cp-rgbred span', container),
            red_marker: $('.cp-rgbred .cp-marker', container),
            green: $('.cp-rgbgreen span', container),
            green_marker: $('.cp-rgbgreen .cp-marker', container),
            blue: $('.cp-rgbblue span', container),
            blue_marker: $('.cp-rgbblue .cp-marker', container),
            cielightness: $('.cp-cielightness span', container),
            cielightness_marker: $('.cp-cielightness .cp-marker', container),
            ciechroma: $('.cp-ciechroma span', container),
            ciechroma_marker: $('.cp-ciechroma .cp-marker', container),
            ciehue: $('.cp-ciehue span', container),
            ciehue_marker: $('.cp-ciehue .cp-marker', container),
            preview: $('.cp-preview input', container)
          },
          all_pills: $('.cp-pills', container),
          pills: {
            hsvpanel: $('.cp-pill-hsvpanel', container),
            sliders: $('.cp-pill-sliders', container),
            swatches: $('.cp-pill-swatches', container)
          }
        };

        if (!settings.customswatches) {
          elements.swatches_add.hide();
          elements.swatches_remove.hide();
          elements.swatches_reset.hide();
        }
      }

      function showFlat() {
        if (settings.flat) {
          if (triggerelementisinput) {
            container = $('<div class="cp-container"></div>').insertAfter(triggerelement);
          }
          else {
            container = $('<div class="cp-container"></div>');
            triggerelement.append(container);
          }

          container.append(_getControllerHtml());

          _buildComponent();

          activateLastlyUsedGroup();
        }
      }

      function _initConnectedElements() {
        if (settings.connectedinput instanceof jQuery) {
          settings.connectedinput.add(triggerelement);
        }
        else if (settings.connectedinput === false) {
          settings.connectedinput = triggerelement;
        }
        else {
          settings.connectedinput = $(settings.connectedinput).add(triggerelement);
        }
      }

      function _bindEvents() {
        triggerelement.on('colorpickersliders.updateColor', function(e, newcolor) {
          updateColor(newcolor);
        });

        triggerelement.on('colorpickersliders.show', function() {
          show();
        });

        triggerelement.on('colorpickersliders.hide', function() {
          hide();
        });

        if (!settings.flat && settings.trigger === 'focus') {
          // we need tabindex defined to be focusable
          if (typeof triggerelement.attr('tabindex') === 'undefined') {
            triggerelement.attr('tabindex', -1);
          }

          if (settings.preventtouchkeyboardonshow) {
            $(triggerelement).prop('readonly', true).addClass('cp-preventtouchkeyboardonshow');

            $(triggerelement).on('click', function(ev) {
              if (visible) {
                $(triggerelement).prop('readonly', false);
                ev.stopPropagation();
              }
            });
          }

          // buttons doesn't get focus in webkit browsers
          // https://bugs.webkit.org/show_bug.cgi?id=22261
          // and only input and button are focusable on iPad
          // so it is safer to register click on any other than inputs
          if (!triggerelementisinput) {
            $(triggerelement).on('click', function(ev) {
              show();

              ev.stopPropagation();
            });
          }

          $(triggerelement).on('focus', function(ev) {
            show();

            ev.stopPropagation();
          });

          $(triggerelement).on('blur', function(ev) {
            hide();

            if (settings.preventtouchkeyboardonshow) {
              $(triggerelement).prop('readonly', true);
            }

            ev.stopPropagation();
          });
        }

        if (connectedinput) {
          connectedinput.on('keyup change', function() {
            var $input = $(this);

            updateColor($input.val(), true);
          });
        }

      }

      function _bindControllerEvents() {
        container.on('contextmenu', function(ev) {
          ev.preventDefault();
          return false;
        });

        $(document).on('colorpickersliders.changeswatches', function() {
          _renderSwatches();
        });

        elements.swatches.on('touchstart mousedown click', 'li span', function(ev) {
          var color = $(this).css('background-color');
          updateColor(color);
          //_updateAllElements();
          ev.preventDefault();
        });

        elements.swatches_add.on('touchstart mousedown click', function(ev) {
          _addCurrentColorToSwatches();
          ev.preventDefault();
          ev.stopPropagation();
        });

        elements.swatches_remove.on('touchstart mousedown click', function(ev) {
          _removeActualColorFromSwatches();
          ev.preventDefault();
          ev.stopPropagation();
        });

        elements.swatches_reset.on('touchstart touchend mousedown click', function(ev) {
          // prevent multiple fire on android...
          if (ev.type === 'click' || ev.type === 'touchend') {
            _resetSwatches();
          }
          ev.preventDefault();
          ev.stopImmediatePropagation();
        });

        elements.sliders.hue.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'hue';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('hsla', 'h', 3.6 * percent);

          _updateAllElements();
        });

        elements.sliders.saturation.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'saturation';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('hsla', 's', percent / 100);

          _updateAllElements();
        });

        elements.sliders.lightness.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'lightness';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('hsla', 'l', percent / 100);

          _updateAllElements();
        });

        elements.sliders.opacity.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'opacity';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('hsla', 'a', percent / 100);

          _updateAllElements();
        });

        elements.sliders.red.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'red';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('rgba', 'r', 2.55 * percent);

          _updateAllElements();
        });

        elements.sliders.green.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'green';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('rgba', 'g', 2.55 * percent);

          _updateAllElements();
        });

        elements.sliders.blue.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'blue';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('rgba', 'b', 2.55 * percent);

          _updateAllElements();
        });

        elements.hsvpanel.sv.on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'hsvsv';

          var percent = _updateHsvpanelMarkerPosition('sv', ev);

          _updateColorsProperty('hsv', 's', percent.horizontal / 100);
          _updateColorsProperty('hsv', 'v', (100 - percent.vertical) / 100);

          _updateAllElements();
        });

        elements.hsvpanel.h.on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'hsvh';

          var percent = _updateHsvpanelMarkerPosition('h', ev);

          _updateColorsProperty('hsv', 'h', 3.6 * percent.vertical);

          _updateAllElements();
        });

        elements.hsvpanel.a.on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'hsva';

          var percent = _updateHsvpanelMarkerPosition('a', ev);

          _updateColorsProperty('hsv', 'a', (100 - percent.vertical) / 100);

          _updateAllElements();
        });

        elements.sliders.cielightness.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'cielightness';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('cielch', 'l', (MAXLIGHT / 100) * percent);

          _updateAllElements();
        });

        elements.sliders.ciechroma.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'ciechroma';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('cielch', 'c', (MAXVALIDCHROMA / 100) * percent);

          _updateAllElements();
        });

        elements.sliders.ciehue.parent().on('touchstart mousedown', function(ev) {
          ev.preventDefault();

          if (ev.which > 1) {
            return;
          }

          dragTarget = 'ciehue';

          var percent = _updateMarkerPosition(dragTarget, ev);

          _updateColorsProperty('cielch', 'h', 3.6 * percent);

          _updateAllElements();
        });

        elements.sliders.preview.on('click', function() {
          this.select();
        });

        $(document).on('touchmove mousemove', function(ev) {
          if (!dragTarget) {
            return;
          }

          if (new Date().getTime() - _lastMoveHandlerRun > _throttleDelay && !_inMoveHandler) {
            moveHandler(dragTarget, ev);
          }
          else {
            setMoveHandlerTimer(dragTarget, ev);
          }
        });

        $(document).on('touchend mouseup', function(ev) {
          if (ev.which > 1) {
            return;
          }

          if (dragTarget) {
            dragTarget = false;
            ev.preventDefault();
          }
        });

        elements.pills.hsvpanel.on('click', function(ev) {
          ev.preventDefault();

          activateGroupHsvpanel();
        });

        elements.pills.sliders.on('click', function(ev) {
          ev.preventDefault();

          activateGroupSliders();
        });

        elements.pills.swatches.on('click', function(ev) {
          ev.preventDefault();

          activateGroupSwatches();
        });

        if (!settings.flat) {
          popover_container.on('touchstart mousedown', '.popover', function(ev) {
            ev.preventDefault();
            ev.stopPropagation();

            return false;
          });
        }
      }

      function setConfig(name, value) {
        try {
          localStorage.setItem('cp-userdata-' + name, JSON.stringify(value));
        }
        catch (err) {
        }
      }

      function getConfig(name) {
        try {
          var r = JSON.parse(localStorage.getItem('cp-userdata-' + name));

          return r;
        }
        catch (err) {
          return null;
        }
      }

      function getUsedGroupName() {
        if (groupingname !== '') {
          return groupingname;
        }

        if (elements.pills.hsvpanel.length === 0) {
          groupingname += '_hsvpanel_';
        }
        if (elements.pills.sliders.length === 0) {
          groupingname += '_sliders_';
        }
        if (elements.pills.swatches.length === 0) {
          groupingname += '_swatches_';
        }

        return groupingname;
      }

      function getLastlyUsedGroup() {
        return getConfig('config_activepill' + getUsedGroupName());
      }

      function setLastlyUsedGroup(value) {
        return setConfig('config_activepill' + getUsedGroupName(), value);
      }

      function activateLastlyUsedGroup() {
        switch (getLastlyUsedGroup()) {
          case 'hsvpanel':
            activateGroupHsvpanel();
            break;
          case 'sliders':
            activateGroupSliders();
            break;
          case 'swatches':
            activateGroupSwatches();
            break;
          default:
            if (elements.pills.hsvpanel.length) {
              activateGroupHsvpanel();
              break;
            }
            else if (elements.pills.sliders.length) {
              activateGroupSliders();
              break;
            }
            else if (elements.pills.swatches.length) {
              activateGroupSwatches();
              break;
            }
        }
      }

      function activateGroupHsvpanel() {
        if (elements.pills.hsvpanel.length === 0) {
          return false;
        }

        $('a', elements.all_pills).removeClass('active');
        elements.pills.hsvpanel.addClass('active');

        container.removeClass('sliders-active swatches-active').addClass('hsvpanel-active');

        setLastlyUsedGroup('hsvpanel');

        _updateAllElements(true);

        show(true);

        return true;
      }

      function activateGroupSliders() {
        if (elements.pills.sliders.length === 0) {
          return false;
        }

        $('a', elements.all_pills).removeClass('active');
        elements.pills.sliders.addClass('active');

        container.removeClass('hsvpanel-active swatches-active').addClass('sliders-active');

        setLastlyUsedGroup('sliders');

        _updateAllElements(true);

        show(true);

        return true;
      }

      function activateGroupSwatches() {
        if (elements.pills.swatches.length === 0) {
          return false;
        }

        $('a', elements.all_pills).removeClass('active');
        elements.pills.swatches.addClass('active');

        container.removeClass('hsvpanel-active sliders-active').addClass('swatches-active');

        setLastlyUsedGroup('swatches');

        _updateAllElements(true);

        show(true);

        return true;
      }

      function setMoveHandlerTimer(dragTarget, ev) {
        clearTimeout(_moveThrottleTimer);
        _moveThrottleTimer = setTimeout(function() {
          moveHandler(dragTarget, ev);
        }, _throttleDelay);
      }

      function moveHandler(dragTarget, ev) {
        var percent;

        if (_inMoveHandler) {
          setMoveHandlerTimer(dragTarget, ev);
          return;
        }

        _inMoveHandler = true;
        _lastMoveHandlerRun = new Date().getTime();

        if (dragTarget === 'hsvsv') {
          percent = _updateHsvpanelMarkerPosition('sv', ev);
        }
        else if (dragTarget === 'hsvh') {
          percent = _updateHsvpanelMarkerPosition('h', ev);
        }
        else if (dragTarget === 'hsva') {
          percent = _updateHsvpanelMarkerPosition('a', ev);
        }
        else {
          percent = _updateMarkerPosition(dragTarget, ev);
        }

        switch (dragTarget) {
          case 'hsvsv':
            _updateColorsProperty('hsv', 's', percent.horizontal / 100);
            _updateColorsProperty('hsv', 'v', (100 - percent.vertical) / 100);
            break;
          case 'hsvh':
            _updateColorsProperty('hsv', 'h', 3.6 * percent.vertical);
            break;
          case 'hsva':
            _updateColorsProperty('hsv', 'a', (100 - percent.vertical) / 100);
            break;
          case 'hue':
            _updateColorsProperty('hsla', 'h', 3.6 * percent);
            break;
          case 'saturation':
            _updateColorsProperty('hsla', 's', percent / 100);
            break;
          case 'lightness':
            _updateColorsProperty('hsla', 'l', percent / 100);
            break;
          case 'opacity':
            _updateColorsProperty('hsla', 'a', percent / 100);
            break;
          case 'red':
            _updateColorsProperty('rgba', 'r', 2.55 * percent);
            break;
          case 'green':
            _updateColorsProperty('rgba', 'g', 2.55 * percent);
            break;
          case 'blue':
            _updateColorsProperty('rgba', 'b', 2.55 * percent);
            break;
          case 'cielightness':
            _updateColorsProperty('cielch', 'l', (MAXLIGHT / 100) * percent);
            break;
          case 'ciechroma':
            _updateColorsProperty('cielch', 'c', (MAXVALIDCHROMA / 100) * percent);
            break;
          case 'ciehue':
            _updateColorsProperty('cielch', 'h', 3.6 * percent);
            break;
        }

        _updateAllElements();

        ev.preventDefault();
        _inMoveHandler = false;
      }

      function _parseCustomSwatches() {
        swatches = [];

        for (var i = 0; i < settings.swatches.length; i++) {
          var color = tinycolor(settings.swatches[i]);

          if (color.isValid()) {
            swatches.push(color.toRgbString());
          }
        }
      }

      function _renderSwatches() {
        if (!settings.swatches) {
          return;
        }

        if (settings.customswatches) {
          var customswatches = false;

          try {
            customswatches = JSON.parse(localStorage.getItem('swatches-' + settings.customswatches));
          }
          catch (err) {
          }

          if (customswatches) {
            swatches = customswatches;
          }
          else {
            _parseCustomSwatches();
          }
        }
        else {
          _parseCustomSwatches();
        }

        if (swatches instanceof Array) {
          elements.swatches.html('');
          for (var i = 0; i < swatches.length; i++) {
            var color = tinycolor(swatches[i]);

            if (color.isValid()) {
              var span = $('<span></span>').css('background-color', color.toRgbString());
              var button = $('<div class="btn btn-default cp-swatch"></div>');

              button.append(span);

              elements.swatches.append($('<li></li>').append(button));
            }
          }
        }

        _findActualColorsSwatch();
      }

      function _findActualColorsSwatch() {
        var found = false;

        $('span', elements.swatches).filter(function() {
          var swatchcolor = $(this).css('background-color');

          swatchcolor = tinycolor(swatchcolor);
          swatchcolor.alpha = Math.round(swatchcolor.alpha * 100) / 100;

          if (swatchcolor.toRgbString() === color.tiny.toRgbString()) {
            found = true;

            var currentswatch = $(this).parent();

            if (!currentswatch.is(elements.actualswatch)) {
              if (elements.actualswatch) {
                elements.actualswatch.removeClass('actual');
              }
              elements.actualswatch = currentswatch;
              currentswatch.addClass('actual');
            }
          }
        });

        if (!found) {
          if (elements.actualswatch) {
            elements.actualswatch.removeClass('actual');
            elements.actualswatch = false;
          }
        }

        if (elements.actualswatch) {
          elements.swatches_add.prop('disabled', true);
          elements.swatches_remove.prop('disabled', false);
        }
        else {
          elements.swatches_add.prop('disabled', false);
          elements.swatches_remove.prop('disabled', true);
        }
      }

      function _storeSwatches() {
        localStorage.setItem('swatches-' + settings.customswatches, JSON.stringify(swatches));
      }

      function _addCurrentColorToSwatches() {
        swatches.unshift(color.tiny.toRgbString());
        _storeSwatches();

        $(document).trigger('colorpickersliders.changeswatches');
      }

      function _removeActualColorFromSwatches() {
        var index = swatches.indexOf(color.tiny.toRgbString());

        if (index !== -1) {
          swatches.splice(index, 1);

          _storeSwatches();
          $(document).trigger('colorpickersliders.changeswatches');
        }
      }

      function _resetSwatches() {
        if (confirm('Do you really want to reset the swatches? All customizations will be lost!')) {
          _parseCustomSwatches();

          _storeSwatches();

          $(document).trigger('colorpickersliders.changeswatches');
        }
      }

      function _updateColorsProperty(format, property, value) {
        switch (format) {
          case 'hsv':

            color.hsv[property] = value;
            color.tiny = tinycolor({h: color.hsv.h, s: color.hsv.s, v: color.hsv.v, a: color.hsv.a});
            color.rgba = color.tiny.toRgb();
            color.hsla = color.tiny.toHsl();
            color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

            break;

          case 'hsla':

            color.hsla[property] = value;
            color.tiny = tinycolor({h: color.hsla.h, s: color.hsla.s, l: color.hsla.l, a: color.hsla.a});
            color.rgba = color.tiny.toRgb();
            color.hsv = color.tiny.toHsv();
            color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

            container.removeClass('cp-unconvertible-cie-color');

            break;

          case 'rgba':

            color.rgba[property] = value;
            color.tiny = tinycolor({r: color.rgba.r, g: color.rgba.g, b: color.rgba.b, a: color.hsla.a});
            color.hsla = color.tiny.toHsl();
            color.hsv = color.tiny.toHsv();
            color.cielch = $.fn.ColorPickerSliders.rgb2lch(color.rgba);

            container.removeClass('cp-unconvertible-cie-color');

            break;

          case 'cielch':

            color.cielch[property] = value;
            color.rgba = $.fn.ColorPickerSliders.lch2rgb(color.cielch);
            color.tiny = tinycolor(color.rgba);
            color.hsla = color.tiny.toHsl();
            color.hsv = color.tiny.toHsv();

            if (settings.erroneousciecolormarkers) {
              if (color.rgba.isok) {
                container.removeClass('cp-unconvertible-cie-color');
              }
              else {
                container.addClass('cp-unconvertible-cie-color');
              }
            }

            break;
        }
      }

      function _updateMarkerPosition(slidername, ev) {
        var percent = $.fn.ColorPickerSliders.calculateEventPositionPercentage(ev, elements.sliders[slidername]);

        elements.sliders[slidername + '_marker'].data('position', percent);

        return percent;
      }

      function _updateHsvpanelMarkerPosition(marker, ev) {
        var percents = $.fn.ColorPickerSliders.calculateEventPositionPercentage(ev, elements.hsvpanel.sv, true);

        elements.hsvpanel[marker + '_marker'].data('position', percents);

        return percents;
      }

      var updateAllElementsTimeout;

      function _updateAllElementsTimer(disableinputupdate) {
        updateAllElementsTimeout = setTimeout(function() {
          _updateAllElements(disableinputupdate);
        }, settings.updateinterval);
      }

      function _updateAllElements(disableinputupdate) {
        clearTimeout(updateAllElementsTimeout);

        Date.now = Date.now || function() {
          return +new Date();
        };

        if (Date.now() - lastUpdateTime < settings.updateinterval) {
          _updateAllElementsTimer(disableinputupdate);
          return;
        }

        if (typeof disableinputupdate === 'undefined') {
          disableinputupdate = false;
        }

        lastUpdateTime = Date.now();

        if (settings.hsvpanel !== false && (!settings.grouping || getLastlyUsedGroup() === 'hsvpanel')) {
          _renderHsvsv();
          _renderHsvh();
          _renderHsva();
        }

        if (settings.sliders && (!settings.grouping || getLastlyUsedGroup() === 'sliders')) {
          if (settings.order.opacity !== false) {
            _renderOpacity();
          }

          if (settings.order.hsl !== false) {
            _renderHue();
            _renderSaturation();
            _renderLightness();
          }

          if (settings.order.rgb !== false) {
            _renderRed();
            _renderGreen();
            _renderBlue();
          }

          if (settings.order.cie !== false) {
            _renderCieLightness();
            _renderCieChroma();
            _renderCieHue();
          }

          if (settings.order.preview !== false) {
            _renderPreview();
          }
        }

        if (!disableinputupdate) {
          _updateConnectedInput();
        }

        if ((100 - color.cielch.l) * color.cielch.a < settings.previewcontrasttreshold) {
          elements.all_sliders.css('color', '#000');
          if (triggerelementisinput && settings.previewontriggerelement) {
            triggerelement.css('background', color.tiny.toRgbString()).css('color', '#000');
          }
        }
        else {
          elements.all_sliders.css('color', '#fff');
          if (triggerelementisinput && settings.previewontriggerelement) {
            triggerelement.css('background', color.tiny.toRgbString()).css('color', '#fff');
          }
        }

        if (settings.swatches && (!settings.grouping || getLastlyUsedGroup() === 'swatches')) {
          _findActualColorsSwatch();
        }

        settings.onchange(container, color);

        triggerelement.data('color', color);
      }

      function _updateTriggerelementColor() {
        if (triggerelementisinput && settings.previewontriggerelement) {
          if ((100 - color.cielch.l) * color.cielch.a < settings.previewcontrasttreshold) {
            triggerelement.css('background', color.tiny.toRgbString()).css('color', '#000');
          }
          else {
            triggerelement.css('background', color.tiny.toRgbString()).css('color', '#fff');
          }
        }
      }

      function _updateConnectedInput() {
        if (connectedinput) {
          connectedinput.each(function(index, element) {
            var $element = $(element),
                format = $element.data('color-format') || settings.previewformat;

            switch (format) {
              case 'hex':
                if (color.hsla.a < 1) {
                  $element.val(color.tiny.toRgbString());
                }
                else {
                  $element.val(color.tiny.toHexString());
                }
                break;
              case 'hsl':
                $element.val(color.tiny.toHslString());
                break;
              case 'rgb':
                /* falls through */
              default:
                $element.val(color.tiny.toRgbString());
                break;
            }
          });
        }
      }

      function _renderHsvsv() {
        elements.hsvpanel.sv.css('background', tinycolor('hsv(' + color.hsv.h + ',100%,100%)').toRgbString());

        elements.hsvpanel.sv_marker.css('left', color.hsv.s * 100 + '%').css('top', 100 - color.hsv.v * 100 + '%');
      }

      function _renderHsvh() {
        elements.hsvpanel.h_marker.css('top', color.hsv.h / 360 * 100 + '%');
      }

      function _renderHsva() {
        setGradient(elements.hsvpanel.a, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, 'a', 1, 0, 2), true);

        elements.hsvpanel.a_marker.css('top', 100 - color.hsv.a * 100 + '%');
      }

      function _renderHue() {
        setGradient(elements.sliders.hue, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, 'h', 0, 360, 7));

        elements.sliders.hue_marker.css('left', color.hsla.h / 360 * 100 + '%');
      }

      function _renderSaturation() {
        setGradient(elements.sliders.saturation, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, 's', 0, 1, 2));

        elements.sliders.saturation_marker.css('left', color.hsla.s * 100 + '%');
      }

      function _renderLightness() {
        setGradient(elements.sliders.lightness, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, 'l', 0, 1, 3));

        elements.sliders.lightness_marker.css('left', color.hsla.l * 100 + '%');
      }

      function _renderOpacity() {
        setGradient(elements.sliders.opacity, $.fn.ColorPickerSliders.getScaledGradientStops(color.hsla, 'a', 0, 1, 2));

        elements.sliders.opacity_marker.css('left', color.hsla.a * 100 + '%');
      }

      function _renderRed() {
        setGradient(elements.sliders.red, $.fn.ColorPickerSliders.getScaledGradientStops(color.rgba, 'r', 0, 255, 2));

        elements.sliders.red_marker.css('left', color.rgba.r / 255 * 100 + '%');
      }

      function _renderGreen() {
        setGradient(elements.sliders.green, $.fn.ColorPickerSliders.getScaledGradientStops(color.rgba, 'g', 0, 255, 2));

        elements.sliders.green_marker.css('left', color.rgba.g / 255 * 100 + '%');
      }

      function _renderBlue() {
        setGradient(elements.sliders.blue, $.fn.ColorPickerSliders.getScaledGradientStops(color.rgba, 'b', 0, 255, 2));

        elements.sliders.blue_marker.css('left', color.rgba.b / 255 * 100 + '%');
      }

      function _extendCieGradientStops(gradientstops, property) {
        if (settings.invalidcolorsopacity === 1 || !settings.finercierangeedges) {
          return gradientstops;
        }

        gradientstops.sort(function(a, b) {
          return a.position - b.position;
        });

        var tmparray = [];

        for (var i = 1; i < gradientstops.length; i++) {
          if (gradientstops[i].isok !== gradientstops[i - 1].isok) {
            var steps = Math.round(gradientstops[i].position) - Math.round(gradientstops[i - 1].position),
                extendedgradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(gradientstops[i].rawcolor, property, gradientstops[i - 1].rawcolor[property], gradientstops[i].rawcolor[property], steps, settings.invalidcolorsopacity, gradientstops[i - 1].position, gradientstops[i].position);

            for (var j = 0; j < extendedgradientstops.length; j++) {
              if (extendedgradientstops[j].isok !== gradientstops[i - 1].isok) {
                tmparray.push(extendedgradientstops[j]);

                if (j > 0) {
                  tmparray.push(extendedgradientstops[j - 1]);
                }

                break;
              }
            }
          }
        }

        return $.merge(tmparray, gradientstops);
      }

      function _renderCieLightness() {
        var gradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(color.cielch, 'l', 0, 100, 10, settings.invalidcolorsopacity);

        gradientstops = _extendCieGradientStops(gradientstops, 'l');

        setGradient(elements.sliders.cielightness, gradientstops);

        elements.sliders.cielightness_marker.css('left', color.cielch.l / MAXLIGHT * 100 + '%');
      }

      function _renderCieChroma() {
        var gradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(color.cielch, 'c', 0, MAXVALIDCHROMA, 5, settings.invalidcolorsopacity);

        gradientstops = _extendCieGradientStops(gradientstops, 'c');

        setGradient(elements.sliders.ciechroma, gradientstops);

        elements.sliders.ciechroma_marker.css('left', color.cielch.c / MAXVALIDCHROMA * 100 + '%');
      }

      function _renderCieHue() {
        var gradientstops = $.fn.ColorPickerSliders.getScaledGradientStops(color.cielch, 'h', 0, 360, 28, settings.invalidcolorsopacity);

        gradientstops = _extendCieGradientStops(gradientstops, 'h');

        setGradient(elements.sliders.ciehue, gradientstops);

        elements.sliders.ciehue_marker.css('left', color.cielch.h / 360 * 100 + '%');
      }

      function _renderPreview() {
        elements.sliders.preview.css('background', $.fn.ColorPickerSliders.csscolor(color.rgba));

        var colorstring;

        switch (settings.previewformat) {
          case 'hex':
            if (color.hsla.a < 1) {
              colorstring = color.tiny.toRgbString();
            }
            else {
              colorstring = color.tiny.toHexString();
            }
            break;
          case 'hsl':
            colorstring = color.tiny.toHslString();
            break;
          case 'rgb':
            /* falls through */
          default:
            colorstring = color.tiny.toRgbString();
            break;
        }

        elements.sliders.preview.val(colorstring);
      }

      function setGradient(element, gradientstops, vertical) {
        if (typeof vertical === 'undefined') {
          vertical = false;
        }

        gradientstops.sort(function(a, b) {
          return a.position - b.position;
        });

        switch (rendermode) {
          case 'noprefix':
            $.fn.ColorPickerSliders.renderNoprefix(element, gradientstops, vertical);
            break;
          case 'webkit':
            $.fn.ColorPickerSliders.renderWebkit(element, gradientstops, vertical);
            break;
          case 'ms':
            $.fn.ColorPickerSliders.renderMs(element, gradientstops, vertical);
            break;
          case 'svg': // can not repeat, radial can be only a covering ellipse (maybe there is a workaround, need more investigation)
            $.fn.ColorPickerSliders.renderSVG(element, gradientstops, vertical);
            break;
          case 'oldwebkit':   // can not repeat, no percent size with radial gradient (and no ellipse)
            $.fn.ColorPickerSliders.renderOldwebkit(element, gradientstops, vertical);
            break;
        }
      }

    });

  };

  $.fn.ColorPickerSliders.getEventCoordinates = function(ev) {
    if (typeof ev.pageX !== 'undefined') {
      return {
        pageX: ev.originalEvent.pageX,
        pageY: ev.originalEvent.pageY
      };
    }
    else if (typeof ev.originalEvent.touches !== 'undefined') {
      return {
        pageX: ev.originalEvent.touches[0].pageX,
        pageY: ev.originalEvent.touches[0].pageY
      };
    }
  };

  $.fn.ColorPickerSliders.calculateEventPositionPercentage = function(ev, containerElement, both) {
    if (typeof (both) === 'undefined') {
      both = false;
    }

    var c = $.fn.ColorPickerSliders.getEventCoordinates(ev);

    var xsize = containerElement.width(),
        offsetX = c.pageX - containerElement.offset().left;

    var horizontal = offsetX / xsize * 100;

    if (horizontal < 0) {
      horizontal = 0;
    }

    if (horizontal > 100) {
      horizontal = 100;
    }

    if (both) {
      var ysize = containerElement.height(),
          offsetY = c.pageY - containerElement.offset().top;

      var vertical = offsetY / ysize * 100;

      if (vertical < 0) {
        vertical = 0;
      }

      if (vertical > 100) {
        vertical = 100;
      }

      return {
        horizontal: horizontal,
        vertical: vertical
      };
    }

    return horizontal;
  };

  $.fn.ColorPickerSliders.getScaledGradientStops = function(color, scalableproperty, minvalue, maxvalue, steps, invalidcolorsopacity, minposition, maxposition) {
    if (typeof invalidcolorsopacity === 'undefined') {
      invalidcolorsopacity = 1;
    }

    if (typeof minposition === 'undefined') {
      minposition = 0;
    }

    if (typeof maxposition === 'undefined') {
      maxposition = 100;
    }

    var gradientStops = [],
        diff = maxvalue - minvalue,
        isok = true;

    for (var i = 0; i < steps; ++i) {
      var currentstage = i / (steps - 1),
          modifiedcolor = $.fn.ColorPickerSliders.modifyColor(color, scalableproperty, currentstage * diff + minvalue),
          csscolor;

      if (invalidcolorsopacity < 1) {
        var stagergb = $.fn.ColorPickerSliders.lch2rgb(modifiedcolor, invalidcolorsopacity);

        isok = stagergb.isok;
        csscolor = $.fn.ColorPickerSliders.csscolor(stagergb, invalidcolorsopacity);
      }
      else {
        csscolor = $.fn.ColorPickerSliders.csscolor(modifiedcolor, invalidcolorsopacity);
      }

      gradientStops[i] = {
        color: csscolor,
        position: currentstage * (maxposition - minposition) + minposition,
        isok: isok,
        rawcolor: modifiedcolor
      };
    }

    return gradientStops;
  };

  $.fn.ColorPickerSliders.getGradientStopsCSSString = function(gradientstops) {
    var gradientstring = '',
        oldwebkit = '',
        svgstoppoints = '';

    for (var i = 0; i < gradientstops.length; i++) {
      var el = gradientstops[i];

      gradientstring += ',' + el.color + ' ' + el.position + '%';
      oldwebkit += ',color-stop(' + el.position + '%,' + el.color + ')';

      var svgcolor = tinycolor(el.color);

      svgstoppoints += '<stop ' + 'stop-color="' + svgcolor.toHexString() + '" stop-opacity="' + svgcolor.toRgb().a + '"' + ' offset="' + el.position / 100 + '"/>';
    }

    return {
      noprefix: gradientstring,
      oldwebkit: oldwebkit,
      svg: svgstoppoints
    };
  };

  $.fn.ColorPickerSliders.renderNoprefix = function(element, gradientstops, vertical) {
    if (typeof vertical === 'undefined') {
      vertical = false;
    }

    var css,
        stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).noprefix;

    if (!vertical) {
      css = 'linear-gradient(to right';
    }
    else {
      css = 'linear-gradient(to bottom';
    }

    css += stoppoints + ')';

    element.css('background-image', css);
  };

  $.fn.ColorPickerSliders.renderWebkit = function(element, gradientstops, vertical) {
    if (typeof vertical === 'undefined') {
      vertical = false;
    }

    var css,
        stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).noprefix;

    if (!vertical) {
      css = '-webkit-linear-gradient(left';
    }
    else {
      css = '-webkit-linear-gradient(top';
    }

    css += stoppoints + ')';

    element.css('background-image', css);
  };

  $.fn.ColorPickerSliders.renderOldwebkit = function(element, gradientstops, vertical) {
    if (typeof vertical === 'undefined') {
      vertical = false;
    }

    var css,
        stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).oldwebkit;

    if (!vertical) {
      css = '-webkit-gradient(linear, 0% 0%, 100% 0%';
    }
    else {
      css = '-webkit-gradient(linear, 0% 0%, 0 100%';
    }
    css += stoppoints + ')';

    element.css('background-image', css);
  };

  $.fn.ColorPickerSliders.renderMs = function(element, gradientstops, vertical) {
    if (typeof vertical === 'undefined') {
      vertical = false;
    }

    var css,
        stoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).noprefix;

    if (!vertical) {
      css = '-ms-linear-gradient(to right';
    }
    else {
      css = '-ms-linear-gradient(to bottom';
    }

    css += stoppoints + ')';

    element.css('background-image', css);
  };

  $.fn.ColorPickerSliders.renderSVG = function(element, gradientstops, vertical) {
    if (typeof vertical === 'undefined') {
      vertical = false;
    }

    var svg = '',
        svgstoppoints = $.fn.ColorPickerSliders.getGradientStopsCSSString(gradientstops).svg;

    if (!vertical) {
      svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><linearGradient id="vsgg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0">';
    }
    else {
      svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><linearGradient id="vsgg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="100%">';
    }

    svg += svgstoppoints;
    svg += '</linearGradient><rect x="0" y="0" width="1" height="1" fill="url(#vsgg)" /></svg>';
    svg = 'url(data:image/svg+xml;base64,' + $.fn.ColorPickerSliders.base64encode(svg) + ')';

    element.css('background-image', svg);
  };

  /* source: http://phpjs.org/functions/base64_encode/ */
  $.fn.ColorPickerSliders.base64encode = function(data) {
    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        enc = '',
        tmp_arr = [];

    if (!data) {
      return data;
    }

    do {
      o1 = data.charCodeAt(i++);
      o2 = data.charCodeAt(i++);
      o3 = data.charCodeAt(i++);

      bits = o1 << 16 | o2 << 8 | o3;

      h1 = bits >> 18 & 0x3f;
      h2 = bits >> 12 & 0x3f;
      h3 = bits >> 6 & 0x3f;
      h4 = bits & 0x3f;

      tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    var r = data.length % 3;

    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
  };

  $.fn.ColorPickerSliders.isGoodRgb = function(rgb) {
    // the default acceptable values are out of 0..255 due to
    // rounding errors with yellow and blue colors (258, -1)
    var maxacceptable = 258;
    var minacceptable = -1;

    if (rgb.r > maxacceptable || rgb.g > maxacceptable || rgb.b > maxacceptable || rgb.r < minacceptable || rgb.g < minacceptable || rgb.b < minacceptable) {
      return false;
    }
    else {
      rgb.r = Math.min(255, rgb.r);
      rgb.g = Math.min(255, rgb.g);
      rgb.b = Math.min(255, rgb.b);
      rgb.r = Math.max(0, rgb.r);
      rgb.g = Math.max(0, rgb.g);
      rgb.b = Math.max(0, rgb.b);

      return true;
    }
  };

  $.fn.ColorPickerSliders.rgb2lch = function(rgb) {
    var lch = $.fn.ColorPickerSliders.CIELab2CIELCH($.fn.ColorPickerSliders.XYZ2CIELab($.fn.ColorPickerSliders.rgb2XYZ(rgb)));

    if (rgb.hasOwnProperty('a')) {
      lch.a = rgb.a;
    }

    return lch;
  };

  $.fn.ColorPickerSliders.lch2rgb = function(lch, invalidcolorsopacity) {
    if (typeof invalidcolorsopacity === 'undefined') {
      invalidcolorsopacity = 1;
    }

    var rgb = $.fn.ColorPickerSliders.XYZ2rgb($.fn.ColorPickerSliders.CIELab2XYZ($.fn.ColorPickerSliders.CIELCH2CIELab(lch)));

    if ($.fn.ColorPickerSliders.isGoodRgb(rgb)) {
      if (lch.hasOwnProperty('a')) {
        rgb.a = lch.a;
      }

      rgb.isok = true;

      return rgb;
    }

    var tmp = $.extend({}, lch),
        lastbadchroma = tmp.c,
        lastgoodchroma = -1,
        loops = 0;

    do {
      ++loops;

      tmp.c = lastgoodchroma + ((lastbadchroma - lastgoodchroma) / 2);

      rgb = $.fn.ColorPickerSliders.XYZ2rgb($.fn.ColorPickerSliders.CIELab2XYZ($.fn.ColorPickerSliders.CIELCH2CIELab(tmp)));

      if ($.fn.ColorPickerSliders.isGoodRgb(rgb)) {
        lastgoodchroma = tmp.c;
      }
      else {
        lastbadchroma = tmp.c;
      }
    } while (Math.abs(lastbadchroma - lastgoodchroma) > 0.9 && loops < 100);

    if (lch.hasOwnProperty('a')) {
      rgb.a = lch.a;
    }

    rgb.r = Math.max(0, rgb.r);
    rgb.g = Math.max(0, rgb.g);
    rgb.b = Math.max(0, rgb.b);

    rgb.r = Math.min(255, rgb.r);
    rgb.g = Math.min(255, rgb.g);
    rgb.b = Math.min(255, rgb.b);

    if (invalidcolorsopacity < 1) {
      if (rgb.hasOwnProperty('a')) {
        rgb.a = rgb.a * invalidcolorsopacity;
      }
      else {
        rgb.a = invalidcolorsopacity;
      }
    }

    rgb.isok = false;

    return rgb;
  };

  $.fn.ColorPickerSliders.modifyColor = function(color, property, value) {
    var modifiedcolor = $.extend({}, color);

    if (!color.hasOwnProperty(property)) {
      throw('Missing color property: ' + property);
    }

    modifiedcolor[property] = value;

    return modifiedcolor;
  };

  $.fn.ColorPickerSliders.csscolor = function(color, invalidcolorsopacity) {
    if (typeof invalidcolorsopacity === 'undefined') {
      invalidcolorsopacity = 1;
    }

    var $return = false,
        tmpcolor = $.extend({}, color);

    if (tmpcolor.hasOwnProperty('c')) {
      // CIE-LCh
      tmpcolor = $.fn.ColorPickerSliders.lch2rgb(tmpcolor, invalidcolorsopacity);
    }

    if (tmpcolor.hasOwnProperty('h')) {
      // HSL
      $return = 'hsla(' + tmpcolor.h + ',' + tmpcolor.s * 100 + '%,' + tmpcolor.l * 100 + '%,' + tmpcolor.a + ')';
    }

    if (tmpcolor.hasOwnProperty('r')) {
      // RGB
      if (tmpcolor.a < 1) {
        $return = 'rgba(' + Math.round(tmpcolor.r) + ',' + Math.round(tmpcolor.g) + ',' + Math.round(tmpcolor.b) + ',' + tmpcolor.a + ')';
      }
      else {
        $return = 'rgb(' + Math.round(tmpcolor.r) + ',' + Math.round(tmpcolor.g) + ',' + Math.round(tmpcolor.b) + ')';
      }
    }

    return $return;
  };

  $.fn.ColorPickerSliders.rgb2XYZ = function(rgb) {
    var XYZ = {};

    var r = (rgb.r / 255);
    var g = (rgb.g / 255);
    var b = (rgb.b / 255);

    if (r > 0.04045) {
      r = Math.pow(((r + 0.055) / 1.055), 2.4);
    }
    else {
      r = r / 12.92;
    }

    if (g > 0.04045) {
      g = Math.pow(((g + 0.055) / 1.055), 2.4);
    }
    else {
      g = g / 12.92;
    }

    if (b > 0.04045) {
      b = Math.pow(((b + 0.055) / 1.055), 2.4);
    }
    else {
      b = b / 12.92;
    }

    r = r * 100;
    g = g * 100;
    b = b * 100;

    // Observer = 2°, Illuminant = D65
    XYZ.x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    XYZ.y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    XYZ.z = r * 0.0193 + g * 0.1192 + b * 0.9505;

    return XYZ;
  };

  $.fn.ColorPickerSliders.XYZ2CIELab = function(XYZ) {
    var CIELab = {};

    // Observer = 2°, Illuminant = D65
    var X = XYZ.x / 95.047;
    var Y = XYZ.y / 100.000;
    var Z = XYZ.z / 108.883;

    if (X > 0.008856) {
      X = Math.pow(X, 0.333333333);
    }
    else {
      X = 7.787 * X + 0.137931034;
    }

    if (Y > 0.008856) {
      Y = Math.pow(Y, 0.333333333);
    }
    else {
      Y = 7.787 * Y + 0.137931034;
    }

    if (Z > 0.008856) {
      Z = Math.pow(Z, 0.333333333);
    }
    else {
      Z = 7.787 * Z + 0.137931034;
    }

    CIELab.l = (116 * Y) - 16;
    CIELab.a = 500 * (X - Y);
    CIELab.b = 200 * (Y - Z);

    return CIELab;
  };

  $.fn.ColorPickerSliders.CIELab2CIELCH = function(CIELab) {
    var CIELCH = {};

    CIELCH.l = CIELab.l;
    CIELCH.c = Math.sqrt(Math.pow(CIELab.a, 2) + Math.pow(CIELab.b, 2));

    CIELCH.h = Math.atan2(CIELab.b, CIELab.a);  //Quadrant by signs

    if (CIELCH.h > 0) {
      CIELCH.h = (CIELCH.h / Math.PI) * 180;
    }
    else {
      CIELCH.h = 360 - (Math.abs(CIELCH.h) / Math.PI) * 180;
    }

    return CIELCH;
  };

  $.fn.ColorPickerSliders.CIELCH2CIELab = function(CIELCH) {
    var CIELab = {};

    CIELab.l = CIELCH.l;
    CIELab.a = Math.cos(CIELCH.h * 0.01745329251) * CIELCH.c;
    CIELab.b = Math.sin(CIELCH.h * 0.01745329251) * CIELCH.c;

    return CIELab;
  };

  $.fn.ColorPickerSliders.CIELab2XYZ = function(CIELab) {
    var XYZ = {};

    XYZ.y = (CIELab.l + 16) / 116;
    XYZ.x = CIELab.a / 500 + XYZ.y;
    XYZ.z = XYZ.y - CIELab.b / 200;

    if (Math.pow(XYZ.y, 3) > 0.008856) {
      XYZ.y = Math.pow(XYZ.y, 3);
    }
    else {
      XYZ.y = (XYZ.y - 0.137931034) / 7.787;
    }

    if (Math.pow(XYZ.x, 3) > 0.008856) {
      XYZ.x = Math.pow(XYZ.x, 3);
    }
    else {
      XYZ.x = (XYZ.x - 0.137931034) / 7.787;
    }

    if (Math.pow(XYZ.z, 3) > 0.008856) {
      XYZ.z = Math.pow(XYZ.z, 3);
    }
    else {
      XYZ.z = (XYZ.z - 0.137931034) / 7.787;
    }

    // Observer = 2°, Illuminant = D65
    XYZ.x = 95.047 * XYZ.x;
    XYZ.y = 100.000 * XYZ.y;
    XYZ.z = 108.883 * XYZ.z;

    return XYZ;
  };

  $.fn.ColorPickerSliders.XYZ2rgb = function(XYZ) {
    var rgb = {};

    // Observer = 2°, Illuminant = D65
    XYZ.x = XYZ.x / 100;        // X from 0 to 95.047
    XYZ.y = XYZ.y / 100;        // Y from 0 to 100.000
    XYZ.z = XYZ.z / 100;        // Z from 0 to 108.883

    rgb.r = XYZ.x * 3.2406 + XYZ.y * -1.5372 + XYZ.z * -0.4986;
    rgb.g = XYZ.x * -0.9689 + XYZ.y * 1.8758 + XYZ.z * 0.0415;
    rgb.b = XYZ.x * 0.0557 + XYZ.y * -0.2040 + XYZ.z * 1.0570;

    if (rgb.r > 0.0031308) {
      rgb.r = 1.055 * (Math.pow(rgb.r, 0.41666667)) - 0.055;
    }
    else {
      rgb.r = 12.92 * rgb.r;
    }

    if (rgb.g > 0.0031308) {
      rgb.g = 1.055 * (Math.pow(rgb.g, 0.41666667)) - 0.055;
    }
    else {
      rgb.g = 12.92 * rgb.g;
    }

    if (rgb.b > 0.0031308) {
      rgb.b = 1.055 * (Math.pow(rgb.b, 0.41666667)) - 0.055;
    }
    else {
      rgb.b = 12.92 * rgb.b;
    }

    rgb.r = Math.round(rgb.r * 255);
    rgb.g = Math.round(rgb.g * 255);
    rgb.b = Math.round(rgb.b * 255);

    return rgb;
  };

  $.fn.ColorPickerSliders.detectWhichGradientIsSupported = function() {
    var testelement = document.createElement('detectGradientSupport').style;

    try {
      testelement.backgroundImage = 'linear-gradient(to top left, #9f9, white)';
      if (testelement.backgroundImage.indexOf('gradient') !== -1) {
        return 'noprefix';
      }

      testelement.backgroundImage = '-webkit-linear-gradient(left top, #9f9, white)';
      if (testelement.backgroundImage.indexOf('gradient') !== -1) {
        return 'webkit';
      }

      testelement.backgroundImage = '-ms-linear-gradient(left top, #9f9, white)';
      if (testelement.backgroundImage.indexOf('gradient') !== -1) {
        return 'ms';
      }

      testelement.backgroundImage = '-webkit-gradient(linear, left top, right bottom, from(#9f9), to(white))';
      if (testelement.backgroundImage.indexOf('gradient') !== -1) {
        return 'oldwebkit';
      }
    }
    catch (err) {
      try {
        testelement.filter = 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#000000",GradientType=0)';
        if (testelement.filter.indexOf('DXImageTransform') !== -1) {
          return 'filter';
        }
      }
      catch (err) {
      }
    }

    return false;
  };

  $.fn.ColorPickerSliders.svgSupported = function() {
    return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
  };

})(jQuery);

/* https://github.com/GoalSmashers/clean-css/pull/262
 * https://github.com/kangax/html-minifier/blob/gh-pages/assets/cleancss-browser.js */
!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.CleanCSS=e()}}(function(){var e;return function t(e,r,n){function i(a,s){if(!r[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=r[a]={exports:{}};e[a][0].call(l.exports,function(t){var r=e[a][1][t];return i(r?r:t)},l,l.exports,t,e,r,n)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(e,t){t.exports=e("./lib/clean")},{"./lib/clean":2}],2:[function(e,t){(function(r,n){var i=e("./colors/shortener"),o=e("./colors/hsl-to-hex"),a=e("./colors/rgb-to-hex"),s=e("./colors/long-to-short-hex"),u=e("./imports/inliner"),l=e("./images/url-rebase"),f=e("./selectors/empty-removal"),c=e("./text/comments"),h=e("./text/expressions"),d=e("./text/free"),p=e("./text/urls"),g=e("./text/name-quotes"),m=e("./selectors/optimizer"),v=t.exports=function y(e){return e=e||{},this instanceof y?(e.keepBreaks=e.keepBreaks||!1,void 0===e.processImport&&(e.processImport=!0),this.options=e,this.stats={},this.context={errors:[],warnings:[],debug:e.debug},this.errors=this.context.errors,this.warnings=this.context.warnings,void(this.lineBreak="win32"==r.platform?"\r\n":"\n")):new y(e)};v.prototype.minify=function(e,t){var i=this.options;if(n.isBuffer(e)&&(e=e.toString()),i.processImport){var o=this,a=t?r.nextTick:function(e){return e()};return a(function(){return new u(o.context,i.inliner).process(e,{localOnly:!t,root:i.root||r.cwd(),relativeTo:i.relativeTo,whenDone:function(e){return b.call(o,e,t)}})})}return b.call(this,e,t)};var b=function(e,t){var n,u=this.stats,v=this.options,b=this.context,y=this.lineBreak,w=new c("keepSpecialComments"in v?v.keepSpecialComments:"*",v.keepBreaks,y),x=new h,k=new d,_=new p,O=new g;v.debug&&(this.startedAt=r.hrtime(),this.stats.originalSize=e.length);var E=function(){"function"==typeof arguments[0]?arguments[0]():e=e.replace.apply(e,arguments)};if(v.benchmark){var S=E;E=function(e,t){var n="function"==typeof e?/function (\w+)\(/.exec(e.toString())[1]:e,i=r.hrtime();S(e,t);var o=r.hrtime(i);console.log("%d ms: "+n,1e3*o[0]+o[1]/1e6)}}v.debug&&(n=r.hrtime(),u.originalSize=e.length),E(function(){e=w.escape(e)}),E(/\\(\r\n|\n)/gm,""),E(/url\((['"])([^\)]+)['"]\)/g,function(e,t,r){var n=0===r.indexOf("data:")&&null===r.match(/data:\w+\/[^;]+;base64,/);return null!==r.match(/[ \t]/g)||n?"url("+t+r+t+")":"url("+r+")"}),E(function(){e=O.process(e)}),E(/@(\-moz\-|\-o\-|\-webkit\-)?keyframes ([^{]+)/g,function(e,t,r){return t=t||"","@"+t+"keyframes "+(r.indexOf(" ")>-1?r:r.replace(/['"]/g,""))}),E(/progid:DXImageTransform\.Microsoft\.(Alpha|Chroma)(\([^\)]+\))([;}'"])/g,function(e,t,r,n){return t.toLowerCase()+r+n}),E(function(){e=x.escape(e)}),E(/\[([^\]]+)\]/g,function(e,t){var r=t.indexOf("="),n=t.indexOf("'"),i=t.indexOf('"');if(0>r&&0>n&&0>i)return e;if(0===n||0===i)return e;var o=t.substring(0,r),a=t.substring(r+1,t.length);return/^['"](?:[a-zA-Z][a-zA-Z\d\-_]+)['"]$/.test(a)?"["+o+"="+a.substring(1,a.length-1)+"]":e}),E(function(){e=k.escape(e)}),E(function(){e=_.escape(e)}),E(/\[([^\]]+)\]/g,function(e){return e.replace(/\s/g,"")}),E(/[\r]?\n/g," "),E(/[\t ]+/g," "),E(/;[ ]?;+/g,";"),E(/ (?:\r\n|\n)/g,y),E(/(?:\r\n|\n)+/g,y),E(/ ([+~>]) /g,"$1"),E(/([!\(\{\}:;=,\n]) /g,"$1"),E(/ ([!\)\{\};=,\n])/g,"$1"),E(/(?:\r\n|\n)\}/g,"}"),E(/([\{;,])(?:\r\n|\n)/g,"$1"),E(/ :([^\{\};]+)([;}])/g,":$1$2"),E(/progid:[^(]+\(([^\)]+)/g,function(e){return e.replace(/,/g,", ")}),E(/;\}/g,"}"),E(function(){e=new o(e).process()}),E(function(){e=new a(e).process()}),E(function(){e=new s(e).process()}),E(function(){e=new i(e).process()}),E(/(font\-weight|font):(normal|bold)([ ;\}!])(\w*)/g,function(e,t,r,n,i){return" "==n&&i.length>0&&!/[.\d]/.test(i)?e:"normal"==r?t+":400"+n+i:"bold"==r?t+":700"+n+i:e});var I=/(\s|:|,|\()\-0([^\.])/g;E(I,"$10$2"),E(I,"$10$2"),E(/(\s|:|,)0+([1-9])/g,"$1$2"),E(/\.(\d{3,})px/g,function(e,t){return"."+Math.round(100*parseFloat("."+t))+"px"}),E(/(\D)\.0+(,|\}|\))/g,"$10$2"),E(/\.([1-9]*)0+(\D)/g,function(e,t,r){return(t.length>0?".":"")+t+r});var A=["px","em","ex","cm","mm","in","pt","pc","%"];if(-1==["ie7","ie8"].indexOf(v.compatibility)&&A.push("rem"),E(new RegExp("(\\s|:|,)\\-?0(?:"+A.join("|")+")","g"),"$10"),E(new RegExp("(\\s|:|,)\\-?(\\d)\\.(\\D)","g"),"$1$2$3"),E(new RegExp("rect\\(0(?:"+A.join("|")+")","g"),"rect(0"),E(/(rgb|rgba|hsl|hsla)\(([^\)]+)\)/g,function(e,t,r){var n=r.split(","),i="hsl"==t||"hsla"==t||n[0].indexOf("%")>-1;return i?(-1==n[1].indexOf("%")&&(n[1]+="%"),-1==n[2].indexOf("%")&&(n[2]+="%"),t+"("+n.join(",")+")"):e}),E(/outline:none/g,"outline:0"),E(/background:(?:none|transparent)([;}])/g,"background:0 0$1"),E(/box-shadow:0 0 0( 0)?([^\.])/g,"box-shadow:0 0$2"),E(/:0 0 0 0([^\.])/g,":0$1"),E(/([: ,=\-])0\.(\d)/g,"$1.$2"),E(/rect\(\s?0(\s|,)0[ ,]0[ ,]0\s?\)/g,"rect(0$10$10$10)"),E(/\*([\.#:\[])/g,"$1"),E(/calc\([^\}]+\}/g,function(e){return e.replace(/\+/g," + ")}),E(/(rgba|hsla)\(([^\)]+)\) /g,"$1($2)"),v.noAdvanced?v.keepBreaks&&E(/\}/g,"}"+y):E(function(){e=new m(e,b,{keepBreaks:v.keepBreaks,lineBreak:y,compatibility:v.compatibility}).process()}),E(function(){e=_.restore(e)}),E(function(){e=v.noRebase?e:new l(v,b).process(e)}),E(function(){e=k.restore(e)}),E(function(){e=w.restore(e)}),E(function(){e=x.restore(e)}),E(function(){var t=e.match(/@charset [^;]+;/),r=t?t[0]:null;r&&(e=r+(v.keepBreaks?y:"")+e.replace(new RegExp("@charset [^;]+;("+y+")?","g"),"").trim())}),v.noAdvanced&&E(function(){e=new f(e).process()}),e=e.trim(),v.debug){var j=r.hrtime(n);u.timeSpent=~~(1e3*j[0]+j[1]/1e6),u.efficiency=1-e.length/u.originalSize,u.minifiedSize=e.length}return t?t.call(this,this.context.errors.length>0?this.context.errors:null,e):e}}).call(this,e("Zbi7gb"),e("buffer").Buffer)},{"./colors/hsl-to-hex":3,"./colors/long-to-short-hex":4,"./colors/rgb-to-hex":5,"./colors/shortener":6,"./images/url-rebase":7,"./imports/inliner":9,"./selectors/empty-removal":17,"./selectors/optimizer":18,"./text/comments":20,"./text/expressions":22,"./text/free":23,"./text/name-quotes":24,"./text/urls":26,Zbi7gb:39,buffer:28}],3:[function(e,t){t.exports=function(e){var t=function(e,t,n){var i,o,a;if(e%=360,0>e&&(e+=360),e=~~e/360,0>t?t=0:t>100&&(t=100),t=~~t/100,0>n?n=0:n>100&&(n=100),n=~~n/100,0===t)i=o=a=n;else{var s=.5>n?n*(1+t):n+t-n*t,u=2*n-s;i=r(u,s,e+1/3),o=r(u,s,e),a=r(u,s,e-1/3)}return[~~(255*i),~~(255*o),~~(255*a)]},r=function(e,t,r){return 0>r&&(r+=1),r>1&&(r-=1),1/6>r?e+6*(t-e)*r:.5>r?t:2/3>r?e+(t-e)*(2/3-r)*6:e};return{process:function(){return e.replace(/hsl\((-?\d+),(-?\d+)%?,(-?\d+)%?\)/g,function(e,r,n,i){var o=t(r,n,i),a=o[0].toString(16),s=o[1].toString(16),u=o[2].toString(16);return"#"+((1==a.length?"0":"")+a)+((1==s.length?"0":"")+s)+((1==u.length?"0":"")+u)})}}}},{}],4:[function(e,t){t.exports=function(e){return{process:function(){return e.replace(/([,: \(])#([0-9a-f]{6})/gi,function(e,t,r){return r[0]==r[1]&&r[2]==r[3]&&r[4]==r[5]?t+"#"+r[0]+r[2]+r[4]:t+"#"+r})}}}},{}],5:[function(e,t){t.exports=function(e){return{process:function(){return e.replace(/rgb\((\-?\d+),(\-?\d+),(\-?\d+)\)/g,function(e,t,r,n){return t=Math.max(0,Math.min(~~t,255)),r=Math.max(0,Math.min(~~r,255)),n=Math.max(0,Math.min(~~n,255)),"#"+("00000"+(t<<16|r<<8|n).toString(16)).slice(-6)})}}}},{}],6:[function(e,t){t.exports=function(e){var t={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#0ff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000",blanchedalmond:"#ffebcd",blue:"#00f",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#f0f",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#0f0",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#f00",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#fff",whitesmoke:"#f5f5f5",yellow:"#ff0",yellowgreen:"#9acd32"},r={},n={};for(var i in t){var o=t[i];i.length<o.length?n[o]=i:r[i]=o}return{toHex:r,toName:n,process:function(){return[r,n].forEach(function(t){var r="("+Object.keys(t).join("|")+")",n=function(e,r,n,i){return r+t[n.toLowerCase()]+i};e=e.replace(new RegExp("([ :,\\(])"+r+"([;\\}!\\) ])","ig"),n),e=e.replace(new RegExp("(,)"+r+"(,)","ig"),n)}),e}}}},{}],7:[function(e,t){var r=e("path"),n=e("./url-rewriter");t.exports=function(e,t){var i=function(i){var o={absolute:!!e.root,relative:!e.root&&!!e.target,fromBase:e.relativeTo};return o.absolute||o.relative?(o.absolute&&e.target&&t.warnings.push("Both 'root' and output file given so rebasing URLs as absolute paths"),o.absolute&&(o.toBase=r.resolve(e.root)),o.relative&&(o.toBase=r.resolve(r.dirname(e.target))),o.fromBase&&o.toBase?n.process(i,o):i):i};return{process:i}}},{"./url-rewriter":8,path:38}],8:[function(e,t){(function(r){var n=e("path"),i=e("url");t.exports={process:function(e,t){for(var r=[],n=0,i=0,o=0;i<e.length&&(n=e.indexOf("url(",i),-1!=n)&&(i=e.indexOf(")",n+4),-1!=i);){r.push(e.substring(o,n));var a=e.substring(n+4,i).replace(/['"]/g,"");r.push("url("+this._rebased(a,t)+")"),o=i+1}return r.length>0?r.join("")+e.substring(o,e.length):e},_rebased:function(e,t){var o,a="/"==e[0]||".css"==e.substring(e.length-4)||0===e.indexOf("data:")||null!==/^https?:\/\//.exec(e)||null!==/__\w+__/.exec(e);return a?e:/https?:\/\//.test(t.toBase)?i.resolve(t.toBase,e):(o=t.absolute?n.resolve(n.join(t.fromBase,e)).replace(t.toBase,""):n.relative(t.toBase,n.join(t.fromBase,e)),"win32"==r.platform?o.replace(/\\/g,"/"):o)}}}).call(this,e("Zbi7gb"))},{Zbi7gb:39,path:38,url:58}],9:[function(e,t){var r=e("fs"),n=e("path"),i=e("http"),o=e("https"),a=e("url"),s=e("../images/url-rewriter"),u=function(e,t){var r={};for(var n in e)r[n]=e[n];for(var i in t)r[i]=t[i];return r};t.exports=function(e,t){var l={timeout:5e3,request:{}},f=u(l,t||{}),c=function(e,t){t._shared=t._shared||{done:[],left:[]};var r=t._shared,n=0,i=0,o=0,a=d(e),s=p(e);for(t.relativeTo=t.relativeTo||t.root,t._baseRelativeTo=t._baseRelativeTo||t.relativeTo,t.visited=t.visited||[];i<e.length&&(n=e.indexOf("@import",o),-1!=n);){if(!a(n)){if(i=e.indexOf(";",n),-1==i){o=e.length,e="";break}return r.done.push(e.substring(0,n)),r.left.unshift([e.substring(i+1),t]),s(n)?h(t):g(e,n,i,t)}o=n+1}return r.done.push(e),h(t)},h=function(e){return e._shared.left.length>0?c.apply(null,e._shared.left.shift()):e.whenDone(e._shared.done.join(""))},d=function(e){var t=/(\/\*(?!\*\/)[\s\S]*?\*\/)/,r=0,n=0,i=!1,o=function(a){var s,u=0,l=0,f=0,c=0;return i?!1:a>r&&n>a?!0:(s=e.match(t))?(r=u=s.index,l=u+s[0].length,c=l+n,f=c-s[0].length,e=e.substring(l),n=c,a>c?o(a):c>a&&a>f):(i=!0,!1)};return o},p=function(e){for(var t=d(e),r=-1;;)if(r=e.indexOf("{",r+1),-1==r||!t(r))break;return function(e){return r>-1?e>r:!1}},g=function(t,r,n,i){var o=t.substring(t.indexOf(" ",r)+1,n).trim(),a=0===o.indexOf("url("),s=a?4:0,u=/^['"]/.exec(o.substring(s,s+2)),l=u?o.indexOf(u[0],s+1):o.split(" ")[0].length,f=o.substring(s,l).replace(/['"]/g,"").replace(/\)$/,"").trim(),c=o.substring(l+1).replace(/^\)/,"").trim(),d=i.isRemote||/^(http|https):\/\//.test(f)||/^\/\//.test(f);if(i.localOnly&&d)return e.warnings.push('Ignoring remote @import declaration of "'+f+'" as no callback given.'),b(f,c,i),h(i);var p=d?m:v;return p(f,c,i)},m=function(t,r,n){var l=/^https?:\/\//.test(t)?t:a.resolve(n.relativeTo,t);if(0===l.indexOf("//")&&(l="http:"+l),n.visited.indexOf(l)>-1)return h(n);e.debug&&console.error("Inlining remote stylesheet: "+l),n.visited.push(l);var d=0===l.indexOf("http://")?i.get:o.get,p=!1,g=function(t){e.errors.push('Broken @import declaration of "'+l+'" - '+t),b(l,r,n),h(n)},v=u(a.parse(l),f.request);d(v,function(e){if(e.statusCode<200||e.statusCode>399)return g("error "+e.statusCode);if(e.statusCode>299){var t=a.resolve(l,e.headers.location);return m(t,r,n)}var i=[],o=a.parse(l);e.on("data",function(e){i.push(e.toString())}),e.on("end",function(){var e=i.join("");e=s.process(e,{toBase:l}),r.length>0&&(e="@media "+r+"{"+e+"}"),c(e,{isRemote:!0,relativeTo:o.protocol+"//"+o.host,_shared:n._shared,whenDone:n.whenDone,visited:n.visited})})}).on("error",function(e){g(e.message)}).on("timeout",function(){p||(g("timeout"),p=!0)}).setTimeout(f.timeout)},v=function(t,i,o){var a="/"==t[0]?o.root:o.relativeTo,u=n.resolve(n.join(a,t));if(!r.existsSync(u)||!r.statSync(u).isFile())return e.errors.push('Broken @import declaration of "'+t+'"'),h(o);if(o.visited.indexOf(u)>-1)return h(o);e.debug&&console.error("Inlining local stylesheet: "+u),o.visited.push(u);var l=r.readFileSync(u,"utf8"),f=n.dirname(u);return l=s.process(l,{relative:!0,fromBase:f,toBase:o._baseRelativeTo}),i.length>0&&(l="@media "+i+"{"+l+"}"),c(l,{root:o.root,relativeTo:f,_baseRelativeTo:o._baseRelativeTo,_shared:o._shared,visited:o.visited,whenDone:o.whenDone,localOnly:o.localOnly})},b=function(e,t,r){var n="@import url("+e+")"+(t.length>0?" "+t:"")+";";r._shared.done.push(n)};return{process:c}}},{"../images/url-rewriter":8,fs:27,http:32,https:36,path:38,url:58}],10:[function(e,t){var r=e("./processable"),n=e("./override-compactor"),i=e("./shorthand-compactor");t.exports=function(e){var t={"animation-delay":["animation"],"animation-direction":["animation"],"animation-duration":["animation"],"animation-fill-mode":["animation"],"animation-iteration-count":["animation"],"animation-name":["animation"],"animation-play-state":["animation"],"animation-timing-function":["animation"],"-moz-animation-delay":["-moz-animation"],"-moz-animation-direction":["-moz-animation"],"-moz-animation-duration":["-moz-animation"],"-moz-animation-fill-mode":["-moz-animation"],"-moz-animation-iteration-count":["-moz-animation"],"-moz-animation-name":["-moz-animation"],"-moz-animation-play-state":["-moz-animation"],"-moz-animation-timing-function":["-moz-animation"],"-o-animation-delay":["-o-animation"],"-o-animation-direction":["-o-animation"],"-o-animation-duration":["-o-animation"],"-o-animation-fill-mode":["-o-animation"],"-o-animation-iteration-count":["-o-animation"],"-o-animation-name":["-o-animation"],"-o-animation-play-state":["-o-animation"],"-o-animation-timing-function":["-o-animation"],"-webkit-animation-delay":["-webkit-animation"],"-webkit-animation-direction":["-webkit-animation"],"-webkit-animation-duration":["-webkit-animation"],"-webkit-animation-fill-mode":["-webkit-animation"],"-webkit-animation-iteration-count":["-webkit-animation"],"-webkit-animation-name":["-webkit-animation"],"-webkit-animation-play-state":["-webkit-animation"],"-webkit-animation-timing-function":["-webkit-animation"],"background-attachment":["background"],"background-clip":["background"],"background-color":["background"],"background-image":["background"],"background-origin":["background"],"background-position":["background"],"background-repeat":["background"],"background-size":["background"],"border-color":["border"],"border-style":["border"],"border-width":["border"],"border-bottom":["border"],"border-bottom-color":["border-bottom","border-color","border"],"border-bottom-style":["border-bottom","border-style","border"],"border-bottom-width":["border-bottom","border-width","border"],"border-left":["border"],"border-left-color":["border-left","border-color","border"],"border-left-style":["border-left","border-style","border"],"border-left-width":["border-left","border-width","border"],"border-right":["border"],"border-right-color":["border-right","border-color","border"],"border-right-style":["border-right","border-style","border"],"border-right-width":["border-right","border-width","border"],"border-top":["border"],"border-top-color":["border-top","border-color","border"],"border-top-style":["border-top","border-style","border"],"border-top-width":["border-top","border-width","border"],"font-family":["font"],"font-size":["font"],"font-style":["font"],"font-variant":["font"],"font-weight":["font"],"list-style-image":["list"],"list-style-position":["list"],"list-style-type":["list"],"margin-bottom":["margin"],"margin-left":["margin"],"margin-right":["margin"],"margin-top":["margin"],"outline-color":["outline"],"outline-style":["outline"],"outline-width":["outline"],"padding-bottom":["padding"],"padding-left":["padding"],"padding-right":["padding"],"padding-top":["padding"],"transition-delay":["transition"],"transition-duration":["transition"],"transition-property":["transition"],"transition-timing-function":["transition"],"-moz-transition-delay":["-moz-transition"],"-moz-transition-duration":["-moz-transition"],"-moz-transition-property":["-moz-transition"],"-moz-transition-timing-function":["-moz-transition"],"-o-transition-delay":["-o-transition"],"-o-transition-duration":["-o-transition"],"-o-transition-property":["-o-transition"],"-o-transition-timing-function":["-o-transition"],"-webkit-transition-delay":["-webkit-transition"],"-webkit-transition-duration":["-webkit-transition"],"-webkit-transition-property":["-webkit-transition"],"-webkit-transition-timing-function":["-webkit-transition"]},o="\\9",a={};for(var s in t)for(var u=0;u<t[s].length;u++){var l=t[s][u],f=a[l];f?f.push(s):a[l]=[s]}var c=function(e){var t=e.split(";"),r=[];if(0!==t.length&&(1!=t.length||-1!=t[0].indexOf(o))){for(var n=0,i=t.length;i>n;n++){var a=t[n];if(""!==a){var s=a.indexOf(":");r.push([a.substring(0,s),a.substring(s+1),a.indexOf("!important")>-1,a.indexOf(o,s+1)>0])}}return r}},h=function(r,n){var i=[],o=[],s=null,u={},l=function(e,t){for(var r=a[e],n=0,s=r.length;s>n;n++)for(var u=0;u<o.length;u++)o[u]!=r[n]||i[u][2]&&!t||(i.splice(u,1),o.splice(u,1),u-=1)},f=function(e){return n===!1||n===!0?n:n.indexOf(e)>-1};e:for(var c=0,h=r.length;h>c;c++){var d=r[c],p=d[0],g=d[2],m=d[3],v=!("-ms-filter"!=p&&"filter"!=p||"background"!=s&&"background-image"!=s)?s:p,b=0;if(e||!m){if(v!=s||f(c))for(;;){if(b=o.indexOf(v,b),-1==b)break;var y=i[b],w=y[2],x=y[3];if(w&&!g)continue e;if(e&&!x&&m)break;i.splice(b,1),o.splice(b,1)}i.push(d),o.push(v),u[v]&&l(v,g);for(var k=0,_=t[v]||[],O=_.length;O>k;k++)u[_[k]]=!0;s=v}}return i},d=function(e){for(var t=[],r=0,n=e.length;n>r;r++)t.push(e[r][0]+":"+e[r][1]);return t.join(";")},p=function(e){var t=r.processable,o=r.Token,a=o.tokenize(e);return a=n.compactOverrides(a,t),a=i.compactShorthands(a,!1,t,o),a=i.compactShorthands(a,!0,t,o),o.detokenize(a)};return{process:function(e,t,r){var n=e,i=c(e);if(i){var o=h(i,t);n=d(o)}return r||(n=p(n)),n}}}},{"./override-compactor":11,"./processable":12,"./shorthand-compactor":14}],11:[function(e,t){t.exports=function(){var e=function(e,t){return e===t},t=function(t,r){var n,i,o,a,s,u,l,f,c=function(e){return e.prop===o.prop},h=function(e){return e.prop===a.prop};for(n=t,s=0;(u=n.length-1-s)>=0;s++){o=n[u],i=r[o.prop]&&r[o.prop].canOverride||e,l=n,n=[];for(var d=!1,p=l.length,g=0;p>g;g++)if(a=l[g],a!==o||d)if(g>u&&!o.isImportant)n.push(a);else if(!a.isImportant||o.isImportant)if(o.isShorthand&&!a.isShorthand&&a.isComponentOf(o))f=o.components.filter(h)[0],i=r[a.prop]&&r[a.prop].canOverride||e,i(a.value,f.value)||n.push(a);else if(a.isShorthand&&!o.isShorthand&&o.isComponentOf(a))f=a.components.filter(c)[0],i(f.value,o.value)&&(o.isImportant?f.isIrrelevant=!0:(f.value=o.value,d=!0),a.isDirty=!0),n.push(a);else if(o.isShorthand&&a.isShorthand&&o.prop===a.prop){for(var m=0;m<a.components.length;m++)if(i=r[a.components[m].prop]&&r[a.components[m].prop].canOverride||e,!i(a.components[m].value,o.components[m].value)){n.push(a);break}}else a.prop===o.prop&&i(a.value,o.value)||n.push(a);else n.push(a);else n.push(a);d&&s--}return n};return{compactOverrides:t}}()},{}],12:[function(e,t){t.exports=function(){var t=e("./token"),r=e("./validator"),n={always:function(){return!0},sameValue:function(e,t){return e===t},sameFunctionOrValue:function(e,t){return r.areSameFunction(e,t)?!0:e===t},unit:function(e,t){return r.isValidUnitWithoutFunction(t)?!0:r.isValidUnitWithoutFunction(e)?!1:r.isValidFunctionWithoutVendorPrefix(t)&&r.isValidFunctionWithoutVendorPrefix(e)?!0:n.sameFunctionOrValue(e,t)},color:function(e,t){return r.isValidNamedColor(t)||r.isValidHexColor(t)?!0:r.isValidNamedColor(e)||r.isValidHexColor(e)?!1:r.isValidRgbaColor(t)||r.isValidHslColor(t)||r.isValidHslaColor(t)?!0:r.isValidRgbaColor(e)||r.isValidHslColor(e)||r.isValidHslaColor(e)?!1:n.sameFunctionOrValue(e,t)},backgroundImage:function(e,t){return"none"===t||"inherit"===t||r.isValidUrl(t)?!0:"none"===e||"inherit"===e||r.isValidUrl(e)?!1:n.sameFunctionOrValue(e,t)}};n=Object.freeze(n);var i={};i.takeCareOfFourValues=function(e){return function(t){var r=a[t.prop],n=[],i=e(t.value);if(0===i.length||i.length<r.components.length&&r.components.length>4)return[t];i.length<r.components.length&&i.length<2&&(i[1]=i[0]),i.length<r.components.length&&i.length<3&&(i[2]=i[0]),i.length<r.components.length&&i.length<4&&(i[3]=i[1]);for(var o=0;o<r.components.length;o++){var s=new c(r.components[o],i[o],t.isImportant);n.push(s)}return n}},i.fourUnits=i.takeCareOfFourValues(function(e){return e.match(new RegExp(r.cssUnitAnyRegexStr,"gi"))}),i.fourBySpaces=i.takeCareOfFourValues(function(e){return e.split(" ").filter(function(e){return e})}),i.fourBySpacesOrFunctions=i.takeCareOfFourValues(function(e){for(var t=[],r="",n=0,i=e.length,o=0;i>o;o++){var a=e[o];r+=a,"("===a?n++:")"===a?(n--,0===n&&(t.push(r.trim()),r="")):" "===a&&0===n&&(t.push(r.trim()),r="")}return r&&(t.push(r.trim()),r=""),t}),i.background=function(e){var t=c.makeDefaults(["background-color","background-image","background-repeat","background-position","background-attachment"],e.isImportant),n=t[0],i=t[1],o=t[2],a=t[3],s=t[4];if("inherit"===e.value)return n.value=i.value=o.value=a.value=s.value="inherit",t;var u=e.value.split(" ");if(0===u.length)return t;var l=u.length-1,f=u[l];r.isValidBackgroundAttachment(f)&&(s.value=f,l--,f=u[l]);var h=u[l-1]+" "+u[l];l>=1&&r.isValidBackgroundPosition(h)?(a.value=h,l-=2,f=u[l]):l>=0&&r.isValidBackgroundPosition(f)&&(a.value=f,l--,f=u[l]),l>=0&&r.isValidBackgroundRepeat(f)&&(o.value=f,l--,f=u[l]);var d=0;return r.isValidColor(u[0])&&(n.value=u[0],d=1),i.value=u.splice(d,l-d+1).join(" ")||"none",t},i.listStyle=function(e){var t=c.makeDefaults(["list-style-type","list-style-position","list-style-image"],e.isImportant),n=t[0],i=t[1],o=t[2];if("inherit"===e.value)return n.value=i.value=o.value="inherit",t;var a=e.value.split(" "),s=0;return s<a.length&&r.isValidListStyleType(a[s])&&(n.value=a[s],s++),s<a.length&&r.isValidListStylePosition(a[s])&&(i.value=a[s],s++),s<a.length&&(o.value=a.splice(s,a.length-s+1).join(" ")),t},i.outline=function(e){var t=c.makeDefaults(["outline-color","outline-style","outline-width"],e.isImportant),n=t[0],i=t[1],o=t[2];if("inherit"===e.value||"inherit inherit inherit"===e.value)return n.value=i.value=o.value="inherit",t;var a,s=e.value.split(" ");return 0===s.length?t:(s.length>=1&&(a=s.filter(function(e){return"inherit"!==e&&r.isValidOutlineWidth(e)}),a.length&&(o.value=a[0],s.splice(s.indexOf(a[0]),1))),s.length>=1&&(a=s.filter(function(e){return"inherit"!==e&&r.isValidOutlineStyle(e)}),a.length&&(i.value=a[0],s.splice(s.indexOf(a[0]),1))),s.length>=1&&(a=s.filter(function(e){return r.isValidOutlineColor(e)}),a.length&&(n.value=a[0],s.splice(s.indexOf(a[0]),1))),t)};var o={fourUnits:function(e,t,r){t[0].isIrrelevant&&(t[0].value=t[2].value),t[2].isIrrelevant&&(t[2].value=t[0].value),t[1].isIrrelevant&&(t[1].value=t[3].value),t[3].isIrrelevant&&(t[3].value=t[1].value),t[0].isIrrelevant&&t[2].isIrrelevant&&(t[0].value=t[2].value=t[1].value===t[3].value?t[1].value:"0"),t[1].isIrrelevant&&t[3].isIrrelevant&&(t[1].value=t[3].value=t[0].value===t[2].value?t[0].value:"0");var n=new c(e,t[0].value,r);return n.granularValues=[],n.granularValues[t[0].prop]=t[0].value,n.granularValues[t[1].prop]=t[1].value,n.granularValues[t[2].prop]=t[2].value,n.granularValues[t[3].prop]=t[3].value,t[0].isIrrelevant&&t[1].isIrrelevant&&t[2].isIrrelevant&&t[3].isIrrelevant?(n.value=a[e].shortestValue||a[e].defaultValue,n):t[0].value===t[1].value&&t[0].value===t[2].value&&t[0].value===t[3].value?n:(n.value+=" "+t[1].value,t[0].value===t[2].value&&t[1].value===t[3].value?n:(n.value+=" "+t[2].value,t[1].value===t[3].value?n:(n.value+=" "+t[3].value,n)))},bySpacesOmitDefaults:function(e,t,r){var n=new c(e,"",r),i=t.filter(function(e){return e.isIrrelevant});if(i.length===t.length)return n.isIrrelevant=!0,n.value=a[e].shortestValue||a[e].defaultValue,n;for(var o=a[e].defaultValue,s=0;s<t.length;s++){var u=t[s];if(n.granularValues=n.granularValues||{},n.granularValues[u.prop]=u.value,u.isIrrelevant){var l=a[u.prop].shortestValue||a[u.prop].defaultValue;l.length<o.length&&(o=l)}u.isIrrelevant||a[u.prop]&&a[u.prop].defaultValue===u.value||(n.value+=" "+u.value)}return n.value=n.value.trim(),n.value||(n.value=o),n},takeCareOfInherit:function(e){return function(t,r,n){var i,o=[],a=[],s=[];for(i=0;i<r.length;i++)if("inherit"===r[i].value){o.push(r[i]);var u=new c(r[i].prop,r[i].isImportant);u.isIrrelevant=!0,s.push(u)}else a.push(r[i]),s.push(r[i]);if(0===a.length)return new c(t,"inherit",n);if(o.length>0){var l=[new c(t,"inherit",n)].concat(a),f=[e(t,s,n)].concat(o),h=c.getDetokenizedLength(l),d=c.getDetokenizedLength(f);return d>h?l:f}return e(t,r,n)}}},a={color:{canOverride:n.color,defaultValue:"transparent",shortestValue:"red"},background:{components:["background-color","background-image","background-repeat","background-position","background-attachment"],breakUp:i.background,putTogether:o.takeCareOfInherit(o.bySpacesOmitDefaults),defaultValue:"0 0",shortestValue:"0"},"background-color":{canOverride:n.color,defaultValue:"transparent",shortestValue:"red"},"background-image":{canOverride:n.backgroundImage,defaultValue:"none"},"background-repeat":{canOverride:n.always,defaultValue:"repeat"},"background-position":{canOverride:n.always,defaultValue:"0 0",shortestValue:"0"},"background-attachment":{canOverride:n.always,defaultValue:"scroll"},"list-style":{components:["list-style-type","list-style-position","list-style-image"],canOverride:n.always,breakUp:i.listStyle,putTogether:o.takeCareOfInherit(o.bySpacesOmitDefaults),defaultValue:"outside",shortestValue:"none"},"list-style-type":{canOverride:n.always,shortestValue:"none",defaultValue:"__hack"},"list-style-position":{canOverride:n.always,defaultValue:"outside",shortestValue:"inside"},"list-style-image":{canOverride:n.always,defaultValue:"none"},outline:{components:["outline-color","outline-style","outline-width"],breakUp:i.outline,putTogether:o.takeCareOfInherit(o.bySpacesOmitDefaults),defaultValue:"0"},"outline-color":{canOverride:n.color,defaultValue:"invert",shortestValue:"red"},"outline-style":{canOverride:n.always,defaultValue:"none"},"outline-width":{canOverride:n.unit,defaultValue:"medium",shortestValue:"0"}},s=function(e,t,r,s,u,l,f){a[e]={components:t,breakUp:r||i.fourUnits,putTogether:s||o.takeCareOfInherit(o.fourUnits),defaultValue:l||"0",shortestValue:f};for(var c=0;c<t.length;c++)a[t[c]]={canOverride:u||n.unit,defaultValue:l||"0",shortestValue:f}};s("border-radius",["border-top-left-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius"]),s("-moz-border-radius",["-moz-border-top-left-radius","-moz-border-top-right-radius","-moz-border-bottom-right-radius","-moz-border-bottom-left-radius"]),s("-webkit-border-radius",["-webkit-border-top-left-radius","-webkit-border-top-right-radius","-webkit-border-bottom-right-radius","-webkit-border-bottom-left-radius"]),s("-o-border-radius",["-o-border-top-left-radius","-o-border-top-right-radius","-o-border-bottom-right-radius","-o-border-bottom-left-radius"]),s("border-color",["border-top-color","border-right-color","border-bottom-color","border-left-color"],i.fourBySpacesOrFunctions,null,n.color,"currentColor","red"),s("border-style",["border-top-style","border-right-style","border-bottom-style","border-left-style"],i.fourBySpaces,null,n.always,"none"),s("border-width",["border-top-width","border-right-width","border-bottom-width","border-left-width"],null,null,null,"medium","0"),s("padding",["padding-top","padding-right","padding-bottom","padding-left"]),s("margin",["margin-top","margin-right","margin-bottom","margin-left"]);for(var u in a)if(a.hasOwnProperty(u)){var l=a[u];if(l.components instanceof Array&&0!==l.components.length){l.isShorthand=!0;for(var f=0;f<l.components.length;f++){if(!a[l.components[f]])throw new Error('"'+l.components[f]+'" is defined as a component of "'+u+"\" but isn't defined in processable.");a[l.components[f]].componentOf=u}}}var c=t.createTokenPrototype(a);return{processable:a,Token:c}}()},{"./token":15,"./validator":16}],13:[function(e,t){!function(){var e="{",r=";",n=":",i=function(e){this.data=e};i.prototype.nextAt=function(t){var i=this.data.lastIndexOf(n,t),o=this.data.lastIndexOf(e,t),a=this.data.lastIndexOf(r,t),s=Math.max(o,a);return this.data.substring(s+1,i).trim()},t.exports=i}()},{}],14:[function(e,t){t.exports=function(){var e=function(e){return"__hack"===e.value},t=function(t,r,n,i){var o,a,s={},u=function(e,t,r){var i,o={};if(!r&&s[e])for(var a=0;a<n[e].components.length;a++){var u=n[e].components[a];if(o[u]=[],s[e].found[u])for(var l=0;l<s[e].found[u].length;l++){var f=s[e].found[u][l];f.isMarkedForDeletion||(o[u].push(f),f.position&&(!i||f.position<i)&&(i=f.position))}}s[e]={lastShorthand:t,found:o,shorthandPosition:i}},l=function(e,t){var r=n[e.prop].componentOf;s[r]||u(r),s[r].found[e.prop]||(s[r].found[e.prop]=[]),s[r].found[e.prop].push(e),!s[r].shorthandPosition&&t&&(s[r].shorthandPosition=t)},f=function(o){var a;if(!s[o]||!s[o].found)return!1;var f=[],c=[];for(a=0;a<n[o].components.length;a++){var h=n[o].components[a];
if(s[o].found[h]&&s[o].found[h].length){var d=s[o].found[h][0];f.push(d),d.isReal!==!1&&c.push(d)}else{if(!s[o].lastShorthand)return!1;var p=s[o].lastShorthand.components[a].clone(r);f.push(p)}}if(0===c.length)return!1;if(c.length===n[o].components.length){for(var g,m=!0,v=!0,b=0;b<c.length;b++){var y=c[b];n[y.prop].canOverride(n[y.prop].defaultValue,y.value)||(m=!1);var w=y.value.indexOf("(");if(w>=0){var x=y.value.substring(0,w);g?v=v&&x===g:g=x}}if(!m||!v)return!1}var k=n[o].putTogether(o,f,r);k instanceof Array||(k=[k]);var _=i.getDetokenizedLength(k),O=i.getDetokenizedLength(c);if(c.length===n[o].components.length||O>_||f.some(e)){for(k[0].isShorthand=!0,k[0].components=n[o].breakUp(k[0]),a=0;a<c.length;a++)c[a].isMarkedForDeletion=!0;for(t[s[o].shorthandPosition].replaceWith=k,u(o,k[0]),a=1;a<k.length;a++)l(k[a]);return!0}return!1},c=function(){for(var e in s)if(s.hasOwnProperty(e))for(;f(e););};for(o=0;o<t.length;o++)if(a=t[o],!a.isMarkedForDeletion&&n[a.prop])if(n[a.prop].isShorthand){if(a.isImportant===r||a.isImportant&&!r){for(;f(a.prop););u(a.prop,a,!0)}}else{if(!n[a.prop].componentOf)continue;if(a.isImportant===r)a.position=o,l(a,o);else if(!r&&a.isImportant){var h=new i(a.prop,a.value,r);h.isIrrelevant=!0,h.isReal=!1,l(h)}}c();var d=[];for(o=0;o<t.length;o++){if(a=t[o],a.replaceWith)for(var p=0;p<a.replaceWith.length;p++)d.push(a.replaceWith[p]);a.isMarkedForDeletion||d.push(a),a.isMarkedForDeletion=!1,a.replaceWith=null}return d};return{compactShorthands:t}}()},{}],15:[function(e,t){t.exports=function(){var e=function(e){function t(t,r,n){this.prop=t,"string"==typeof r?(this.value=r,this.isImportant=n):(this.value=e[t].defaultValue,this.isImportant=r)}var r="!important";return t.prototype.prop=null,t.prototype.value=null,t.prototype.granularValues=null,t.prototype.components=null,t.prototype.position=null,t.prototype.isImportant=!1,t.prototype.isDirty=!1,t.prototype.isShorthand=!1,t.prototype.isIrrelevant=!1,t.prototype.isReal=!0,t.prototype.isMarkedForDeletion=!1,t.prototype.isComponentOf=function(t){return e[this.prop]&&e[t.prop]&&e[t.prop].components instanceof Array&&e[t.prop].components.length?e[t.prop].components.indexOf(this.prop)>=0:!1},t.prototype.clone=function(e){var r=new t(this.prop,this.value,"undefined"!=typeof e?e:this.isImportant);return r},t.prototype.cloneIrrelevant=function(e){var r=t.makeDefault(this.prop,"undefined"!=typeof e?e:this.isImportant);return r.isIrrelevant=!0,r},t.makeDefaults=function(e,r){return e.map(function(e){return new t(e,r)})},t.tokenizeOne=function(n){var i=n.indexOf(":");if(0>i)return new t("",n);var o=n.substr(0,i).trim(),a=n.substr(i+1).trim(),s=!1,u=a.indexOf(r);u>=1&&u===a.length-r.length&&(a=a.substr(0,u).trim(),s=!0);var l=new t(o,a,s);return e[o]&&e[o].isShorthand&&(l.isShorthand=!0,l.components=e[o].breakUp(l),l.isDirty=!0),l},t.tokenize=function(e){var r=e.split(";").map(t.tokenizeOne);return r},t.detokenize=function(t){t instanceof Array||(t=[t]);for(var n=0;n<t.length;n++){var i=t[n];if(i.isShorthand&&i.isDirty){var o=e[i.prop].putTogether(i.prop,i.components,i.isImportant);Array.prototype.splice.apply(t,[n,1].concat(o)),i.isDirty=!1,n--}}var a=t.map(function(e){var t="";return e.prop&&(t+=e.prop+":"),e.value&&(t+=e.value),e.isImportant&&(t+=r),t}).join(";");return a},t.getDetokenizedLength=function(t){t instanceof Array||(t=[t]);for(var n=0,i=0;i<t.length;i++){var o=t[i];if(o.isShorthand&&o.isDirty){var a=e[o.prop].putTogether(o.prop,o.components,o.isImportant);Array.prototype.splice.apply(t,[i,1].concat(a)),o.isDirty=!1,i--}else o.prop&&(n+=o.prop.length+1),o.value&&(n+=o.value.length),o.isImportant&&(n+=r.length)}return n},t};return{createTokenPrototype:e}}()},{}],16:[function(e,t){t.exports=function(){var e="(\\-?\\.?\\d+\\.?\\d*(px|%|em|rem|in|cm|mm|ex|pt|pc|)|auto|inherit)",t="[A-Z]+(\\-|[A-Z]|[0-9])+\\(([A-Z]|[0-9]|\\ |\\,|\\#|\\+|\\-|\\%|\\.)*\\)",r="\\-(\\-|[A-Z]|[0-9])+\\(([A-Z]|[0-9]|\\ |\\,|\\#|\\+|\\-|\\%|\\.)*\\)",n="("+t+"|"+r+")",i="("+e+"|"+t+"|"+r+")",o=["repeat","no-repeat","repeat-x","repeat-y","inherit"],a=["inherit","scroll","fixed","local"],s=["center","top","bottom","left","right"],u=["armenian","circle","cjk-ideographic","decimal","decimal-leading-zero","disc","georgian","hebrew","hiragana","hiragana-iroha","inherit","katakana","katakana-iroha","lower-alpha","lower-greek","lower-latin","lower-roman","none","square","upper-alpha","upper-latin","upper-roman"],l=["inside","outside","inherit"],f=["inherit","hidden","none","dotted","dashed","solid","double","groove","ridge","inset","outset"],c=["thin","thick","medium","inherit"],h={isValidHexColor:function(e){return(4===e.length||7===e.length)&&"#"===e[0]},isValidRgbaColor:function(e){return e=e.split(" ").join(""),e.length>0&&0===e.indexOf("rgba(")&&e.indexOf(")")===e.length-1},isValidHslaColor:function(e){return e=e.split(" ").join(""),e.length>0&&0===e.indexOf("hsla(")&&e.indexOf(")")===e.length-1},isValidNamedColor:function(e){return"auto"!==e&&("transparent"===e||"inherit"===e||/^[a-zA-Z]+$/.test(e))},isValidColor:function(e){return h.isValidNamedColor(e)||h.isValidHexColor(e)||h.isValidRgbaColor(e)||h.isValidHslaColor(e)},isValidUrl:function(e){return 0===e.indexOf("__ESCAPED_URL_CLEAN_CSS")},isValidUnit:function(e){return new RegExp("^"+i+"$","gi").test(e)},isValidUnitWithoutFunction:function(t){return new RegExp("^"+e+"$","gi").test(t)},isValidFunctionWithoutVendorPrefix:function(e){return new RegExp("^"+t+"$","gi").test(e)},isValidFunctionWithVendorPrefix:function(e){return new RegExp("^"+r+"$","gi").test(e)},isValidFunction:function(e){return new RegExp("^"+n+"$","gi").test(e)},isValidBackgroundRepeat:function(e){return o.indexOf(e)>=0},isValidBackgroundAttachment:function(e){return a.indexOf(e)>=0},isValidBackgroundPositionPart:function(t){return s.indexOf(t)>=0?!0:new RegExp("^"+e+"$","gi").test(t)},isValidBackgroundPosition:function(e){return"inherit"===e?!0:e.split(" ").filter(function(e){return""!==e}).every(function(e){return h.isValidBackgroundPositionPart(e)})},isValidListStyleType:function(e){return u.indexOf(e)>=0},isValidListStylePosition:function(e){return l.indexOf(e)>=0},isValidOutlineColor:function(e){return"invert"===e||h.isValidColor(e)||h.isValidVendorPrefixedValue(e)},isValidOutlineStyle:function(e){return f.indexOf(e)>=0},isValidOutlineWidth:function(e){return h.isValidUnit(e)||c.indexOf(e)>=0},isValidVendorPrefixedValue:function(e){return/^-([A-Za-z0-9]|-)*$/gi.test(e)},areSameFunction:function(e,t){if(!h.isValidFunction(e)||!h.isValidFunction(t))return!1;var r=e.substring(0,e.indexOf("(")),n=t.substring(0,t.indexOf("("));return r===n}};return h.cssUnitRegexStr=e,h.cssFunctionNoVendorRegexStr=t,h.cssFunctionVendorRegexStr=r,h.cssFunctionAnyRegexStr=n,h.cssUnitAnyRegexStr=i,h}()},{}],17:[function(e,t){t.exports=function(e){var t=function(e){for(var r=[],n=0,i=0;n<e.length&&(n=e.indexOf("{}",i),-1!=n);){for(var o=n-1;e[o]&&"}"!=e[o]&&"{"!=e[o]&&";"!=e[o];)o--;r.push(e.substring(i,o+1)),i=n+2}return r.length>0?t(r.join("")+e.substring(i,e.length)):e};return{process:function(){return t(e)}}}},{}],18:[function(e,t){var r=e("./tokenizer"),n=e("../properties/optimizer");t.exports=function(e,t,i){var o={"*":/\-(moz|ms|o|webkit)\-/,ie8:/(\-moz\-|\-ms\-|\-o\-|\-webkit\-|:root|:nth|:first\-of|:last|:only|:empty|:target|:checked|::selection|:enabled|:disabled|:not)/,ie7:/(\-moz\-|\-ms\-|\-o\-|\-webkit\-|:focus|:before|:after|:root|:nth|:first\-of|:last|:only|:empty|:target|:checked|::selection|:enabled|:disabled|:not)/},a=[],s=new n(i.compatibility),u=function(e){if(-1==e.indexOf(","))return e;for(var t=[],r=0,n=0,i=-1==e.indexOf("("),o=function(t){if(i)return!1;var r=e.lastIndexOf("(",t),n=e.lastIndexOf(")",t);return-1==r?!1:n>0&&t>n?!1:!0};;){var a,s=e.indexOf(",",r+1);if(-1===s)s=e.length;else if(o(s)){r=s+1;continue}if(a=e.substring(n,s),n=r=s+1,-1==t.indexOf(a)&&t.push(a),s===e.length)break}return t.sort().join(",")},l=function(e){return o[i.compatibility||"*"].test(e)},f=function(e){for(var t={},r=[],n=0,i=e.length;i>n;n++){var o=e[n];if("string"!=typeof o&&!o.block){var s=o.body+"@"+o.selector,u=t[s];u?(r.push(u[0]),u.unshift(n)):t[s]=[n]}}r=r.sort(function(e,t){return e>t?1:-1});for(var l=0,f=r.length;f>l;l++)e.splice(r[l]-l,1);a.unshift(r.length>0)},c=function(e){for(var t=[],r={selector:null,body:null},n=0,i=e.length;i>n;n++){var o=e[n];if("string"!=typeof o&&!o.block)if(o.selector==r.selector){var f=[r.body.split(";").length];r.body=s.process(r.body+";"+o.body,f),t.push(n)}else o.body!=r.body||l(o.selector)||l(r.selector)?r=o:(r.selector=u(r.selector+","+o.selector),t.push(n))}for(var c=0,h=t.length;h>c;c++)e.splice(t[c]-c,1);a.unshift(t.length>0)},h=function(e){for(var t={},r=[],n=e.length-1;n>=0;n--){var i=e[n];if("string"!=typeof i&&!i.block)for(var o=i.selector,s=o.indexOf(",")>-1&&!l(o)?o.split(",").concat(o):[o],u=0,f=s.length;f>u;u++){var c=s[u];t[c]?r.push(c):t[c]=[],t[c].push({where:n,partial:c!=o})}}var h=d(e,r,t),g=p(e,t);a.unshift(h||g)},d=function(e,t,r){for(var n=!1,i=0,o=t.length;o>i;i++){var a=t[i],s=r[a];s.length<2||g(e,a,s,{filterOut:function(e,t){return s[e].partial&&0===t.length},callback:function(e,t,r,i){s[r-i-1].partial||(e.body=t.join(";"),n=!0)}})}return n},p=function(e,t){var r=!1;e:for(var n in t)if(-1!=n.indexOf(",")){for(var i=t[n].pop().where,o=e[i],a=l(n)?[n]:n.split(","),s=[],u=0,f=a.length;f>u;u++){var c=a[u],h=t[c];if(h.length<2)continue e;if(g(e,c,h,{filterOut:function(e){return h[e].where<i},callback:function(e,t,r,n){0===n&&s.push(t.join(";"))}}),s[s.length-1]!=s[0])continue e}o.body=s[0],r=!0}return r},g=function(e,t,r,n){for(var i=[],o=[],a=[],u=[],l=r.length-1,f=0;l>=0;l--)if(!n.filterOut(l,i)){var c=r[l].where,h=e[c],d=h.body;i.push(d),a.push(d.split(";")),u.push(c)}for(l=0,f=i.length;f>l;l++)i[l].length>0&&o.push((o[l-1]||0)+a[l].length);for(var p=s.process(i.join(";"),o,!0),g=p.split(";"),m=u.length,v=g.length-1,b=m-1;b>=0;)if((0===b||a[b].indexOf(g[v])>-1)&&v>-1)v--;else{var y=g.splice(v+1);n.callback(e[u[b]],y,m,b),b--}},m=function(e){var t=function(){return a.length>4&&a[0]===!1&&a[1]===!1};e=Array.isArray(e)?e:[e];for(var r=0,n=e.length;n>r;r++){var i=e[r];i.selector?(i.selector=u(i.selector),i.body=s.process(i.body,!1)):i.block&&m(i.body)}for(a=[];;){if(t())break;if(f(e),t())break;if(c(e),t())break;h(e)}},v=function(e){var t=[];e=Array.isArray(e)?e:[e];for(var r=0,n=e.length;n>r;r++){var o=e[r];if("string"!=typeof o){var a=o.block||o.selector,s=o.block?v(o.body):o.body;s.length>0&&t.push(a+"{"+s+"}")}else t.push(o)}return t.join(i.keepBreaks?i.lineBreak:"")};return{process:function(){var n=new r(e,t).process();return m(n),v(n)}}}},{"../properties/optimizer":10,"./tokenizer":19}],19:[function(e,t){t.exports=function(e,t){var n=new r(e,128),i=n.next(),o=/^@(font\-face|page|\-ms\-viewport|\-o\-viewport|viewport)/,a=function(e){var t,r=e.cursor,o=e.mode;if(i.length==e.cursor){if(n.isEmpty())return null;i=n.next(),e.cursor=0}if("body"==o)return t=i.indexOf("}",r),t>-1?[t,"bodyEnd"]:null;var a=i.indexOf("@",e.cursor),s="top"==o?i.indexOf("__ESCAPED_COMMENT_CLEAN_CSS",e.cursor):-1,u=i.indexOf("{",e.cursor),l=i.indexOf("}",e.cursor);return t=a,(-1==t||s>-1&&t>s)&&(t=s),(-1==t||u>-1&&t>u)&&(t=u),(-1==t||l>-1&&t>l)&&(t=l),-1!=t?s===t?[t,"escape"]:u===t?[t,"bodyStart"]:l===t?[t,"bodyEnd"]:a===t?[t,"special"]:void 0:void 0},s=function(e){var r=[];for(e=e||{cursor:0,mode:"top"};;){var n=a(e);if(!n){var u=i.substring(e.cursor);u.length>0&&(r.push(u),e.cursor+=u.length);break}var l,f,c=n[0],h=n[1];if("special"==h){var d=i.substring(c,e.cursor+"@font-face".length+1),p=0===d.indexOf("@import")||0===d.indexOf("@charset");if(p)l=i.indexOf(";",c+1),r.push(i.substring(e.cursor,l+1)),e.cursor=l+1;else{l=i.indexOf("{",c+1);var g=i.substring(e.cursor,l).trim(),m=o.test(g);f=e.mode,e.cursor=l+1,e.mode=m?"body":"block";var v=s(e);e.mode=f,r.push({block:g,body:v})}}else if("escape"==h){l=i.indexOf("__",c+1);var b=i.substring(e.cursor,l+2);r.push(b),e.cursor=l+2}else if("bodyStart"==h){var y=i.substring(e.cursor,c).trim();f=e.mode,e.cursor=c+1,e.mode="body";var w=s(e);e.mode=f,r.push({selector:y,body:w})}else if("bodyEnd"==h){if("top"==e.mode){var x=e.cursor,k="}"==i[e.cursor]?"Unexpected '}' in '"+i.substring(x-20,x+20)+"'. Ignoring.":"Unexpected content: '"+i.substring(x,c+1)+"'. Ignoring.";t.warnings.push(k),e.cursor=c+1;continue}"block"!=e.mode&&(r=i.substring(e.cursor,c)),e.cursor=c+1;break}}return r};return{process:function(){return s()}}};var r=function(e,t){for(var r=[],n=0,i=e.length;i>n;){var o=n+t>i?i-1:n+t;"}"!=e[o]&&(o=e.indexOf("}",o)),-1==o&&(o=e.length-1),r.push(e.substring(n,o+1)),n=o+1}return{isEmpty:function(){return 0===r.length},next:function(){return r.shift()||""}}}},{}],20:[function(e,t){var r=e("./escape-store");t.exports=function(e,t,n){var i=new r("COMMENT");return{escape:function(e){for(var t=[],r=0,n=0,o=0;n<e.length&&(r=e.indexOf("/*",o),n=e.indexOf("*/",r+2),-1!=r&&-1!=n);){if(t.push(e.substring(o,r)),"!"==e[r+2]){var a=e.substring(r,n+2),s=i.store(a);t.push(s)}o=n+2}return t.length>0?t.join("")+e.substring(o,e.length):e},restore:function(r){var o=0,a=t?n:"";return r.replace(new RegExp(i.placeholderPattern+"("+n+"| )?","g"),function(t,r){switch(o++,e){case"*":return i.restore(r)+a;case 1:case"1":return 1==o?i.restore(r)+a:"";case 0:case"0":return""}})}}}},{"./escape-store":21}],21:[function(e,t){t.exports=function(e){e="ESCAPED_"+e+"_CLEAN_CSS";var t={},r={},n=0,i=function(){return"__"+e+n++ +"__"},o="(__"+e+"\\d{1,}__)";return{placeholderPattern:o,placeholderRegExp:new RegExp(o,"g"),store:function(e){var n=r[e];return n||(n=i(),t[n]=e,r[e]=n),n},restore:function(e){return t[e]}}}},{}],22:[function(e,t){var r=e("./escape-store");t.exports=function(){var e=new r("EXPRESSION"),t=function(e,t){for(var r=t+"expression".length,n=0,i=!1;;){var o=e[r++];if(i?i="'"!=o&&'"'!=o:(i="'"==o||'"'==o,"("==o&&n++,")"==o&&n--,"}"==o&&1==n&&(r--,n--)),0===n||!o)break}return r};return{escape:function(r){for(var n=0,i=0,o=0,a=[];i<r.length&&(n=r.indexOf("expression(",i),-1!=n);){i=t(r,n);var s=r.substring(n,i),u=e.store(s);a.push(r.substring(o,n)),a.push(u),o=i}return a.length>0?a.join("")+r.substring(o,r.length):r},restore:function(t){return t.replace(e.placeholderRegExp,e.restore)}}}},{"./escape-store":21}],23:[function(e,t){!function(){var r=e("./escape-store"),n=e("./quote-scanner"),i=function(){this.matches=new r("FREE_TEXT")};i.prototype.escape=function(e){var t=this;return new n(e).each(function(e,r){var n=t.matches.store(e);r.push(n)})},i.prototype.restore=function(e){return e.replace(this.matches.placeholderRegExp,this.matches.restore)},t.exports=i}()},{"./escape-store":21,"./quote-scanner":25}],24:[function(e,t){!function(){var r=e("./quote-scanner"),n=e("../properties/scanner"),i=function(){},o=/^['"][a-zA-Z][a-zA-Z\d\-_]+['"]$/,a=["animation","-moz-animation","-o-animation","-webkit-animation","animation-name","-moz-animation-name","-o-animation-name","-webkit-animation-name","font","font-family"];i.prototype.process=function(e){var t=new n(e);return new r(e).each(function(e,r,n){var i=t.nextAt(n);a.indexOf(i)>-1&&o.test(e)&&(e=e.substring(1,e.length-1)),r.push(e)})},t.exports=i}()},{"../properties/scanner":13,"./quote-scanner":25}],25:[function(e,t){!function(){var e=function(e){this.data=e},r=function(e,t,r){for(var n=r;;){n=e.indexOf(t,n);{if(!(n>-1&&"\\"==e[n-1]))break;n+=1}}return n};e.prototype.each=function(e){for(var t=this.data,n=[],i=0,o=0,a=0,s=null,u="'",l='"',f=t.length;o<t.length;){var c=t.indexOf(u,o+1),h=t.indexOf(l,o+1);if(-1==c&&(c=f),-1==h&&(h=f),h>c?(i=c,s=u):(i=h,s=l),-1==i)break;if(o=r(t,s,i+1),-1==o)break;var d=t.substring(i,o+1);n.push(t.substring(a,i)),e(d,n,i),a=o+1}return n.length>0?n.join("")+t.substring(a,t.length):t},t.exports=e}()},{}],26:[function(e,t){var r=e("./escape-store");t.exports=function(){var e=new r("URL");return{escape:function(t){for(var r=0,n=0,i=0,o=[];n<t.length&&(r=t.indexOf("url(",n),-1!=r);){n=t.indexOf(")",r);var a=t.substring(r,n+1),s=e.store(a);o.push(t.substring(i,r)),o.push(s),i=n+1}return o.length>0?o.join("")+t.substring(i,t.length):t},restore:function(t){return t.replace(e.placeholderRegExp,function(t){return e.restore(t).replace(/\s/g,"")})}}}},{"./escape-store":21}],27:[function(){},{}],28:[function(e,t,r){function n(e,t,r){if(!(this instanceof n))return new n(e,t,r);var i=typeof e;if("base64"===t&&"string"===i)for(e=A(e);e.length%4!==0;)e+="=";var o;if("number"===i)o=C(e);else if("string"===i)o=n.byteLength(e,t);else{if("object"!==i)throw new Error("First argument needs to be a number, array or string.");o=C(e.length)}var a;n._useTypedArrays?a=n._augment(new Uint8Array(o)):(a=this,a.length=o,a._isBuffer=!0);var s;if(n._useTypedArrays&&"number"==typeof e.byteLength)a._set(e);else if(B(e))for(s=0;o>s;s++)a[s]=n.isBuffer(e)?e.readUInt8(s):e[s];else if("string"===i)a.write(e,0,t);else if("number"===i&&!n._useTypedArrays&&!r)for(s=0;o>s;s++)a[s]=0;return a}function i(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n),n>i&&(n=i)):n=i;var o=t.length;N(o%2===0,"Invalid hex string"),n>o/2&&(n=o/2);for(var a=0;n>a;a++){var s=parseInt(t.substr(2*a,2),16);N(!isNaN(s),"Invalid hex string"),e[r+a]=s}return a}function o(e,t,r,n){var i=z(V(t),e,r,n);return i}function a(e,t,r,n){var i=z(T(t),e,r,n);return i}function s(e,t,r,n){return a(e,t,r,n)}function u(e,t,r,n){var i=z(U(t),e,r,n);return i}function l(e,t,r,n){var i=z(M(t),e,r,n);return i}function f(e,t,r){return $.fromByteArray(0===t&&r===e.length?e:e.slice(t,r))}function c(e,t,r){var n="",i="";r=Math.min(e.length,r);for(var o=t;r>o;o++)e[o]<=127?(n+=D(i)+String.fromCharCode(e[o]),i=""):i+="%"+e[o].toString(16);return n+D(i)}function h(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;r>i;i++)n+=String.fromCharCode(e[i]);return n}function d(e,t,r){return h(e,t,r)}function p(e,t,r){var n=e.length;(!t||0>t)&&(t=0),(!r||0>r||r>n)&&(r=n);for(var i="",o=t;r>o;o++)i+=R(e[o]);return i}function g(e,t,r){for(var n=e.slice(t,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function m(e,t,r,n){n||(N("boolean"==typeof r,"missing or invalid endian"),N(void 0!==t&&null!==t,"missing offset"),N(t+1<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o;return r?(o=e[t],i>t+1&&(o|=e[t+1]<<8)):(o=e[t]<<8,i>t+1&&(o|=e[t+1])),o}}function v(e,t,r,n){n||(N("boolean"==typeof r,"missing or invalid endian"),N(void 0!==t&&null!==t,"missing offset"),N(t+3<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o;return r?(i>t+2&&(o=e[t+2]<<16),i>t+1&&(o|=e[t+1]<<8),o|=e[t],i>t+3&&(o+=e[t+3]<<24>>>0)):(i>t+1&&(o=e[t+1]<<16),i>t+2&&(o|=e[t+2]<<8),i>t+3&&(o|=e[t+3]),o+=e[t]<<24>>>0),o}}function b(e,t,r,n){n||(N("boolean"==typeof r,"missing or invalid endian"),N(void 0!==t&&null!==t,"missing offset"),N(t+1<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o=m(e,t,r,!0),a=32768&o;return a?-1*(65535-o+1):o}}function y(e,t,r,n){n||(N("boolean"==typeof r,"missing or invalid endian"),N(void 0!==t&&null!==t,"missing offset"),N(t+3<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o=v(e,t,r,!0),a=2147483648&o;return a?-1*(4294967295-o+1):o}}function w(e,t,r,n){return n||(N("boolean"==typeof r,"missing or invalid endian"),N(t+3<e.length,"Trying to read beyond buffer length")),H.read(e,t,r,23,4)}function x(e,t,r,n){return n||(N("boolean"==typeof r,"missing or invalid endian"),N(t+7<e.length,"Trying to read beyond buffer length")),H.read(e,t,r,52,8)}function k(e,t,r,n,i){i||(N(void 0!==t&&null!==t,"missing value"),N("boolean"==typeof n,"missing or invalid endian"),N(void 0!==r&&null!==r,"missing offset"),N(r+1<e.length,"trying to write beyond buffer length"),q(t,65535));var o=e.length;if(!(r>=o)){for(var a=0,s=Math.min(o-r,2);s>a;a++)e[r+a]=(t&255<<8*(n?a:1-a))>>>8*(n?a:1-a);return r+2}}function _(e,t,r,n,i){i||(N(void 0!==t&&null!==t,"missing value"),N("boolean"==typeof n,"missing or invalid endian"),N(void 0!==r&&null!==r,"missing offset"),N(r+3<e.length,"trying to write beyond buffer length"),q(t,4294967295));var o=e.length;if(!(r>=o)){for(var a=0,s=Math.min(o-r,4);s>a;a++)e[r+a]=t>>>8*(n?a:3-a)&255;return r+4}}function O(e,t,r,n,i){i||(N(void 0!==t&&null!==t,"missing value"),N("boolean"==typeof n,"missing or invalid endian"),N(void 0!==r&&null!==r,"missing offset"),N(r+1<e.length,"Trying to write beyond buffer length"),F(t,32767,-32768));var o=e.length;if(!(r>=o))return t>=0?k(e,t,r,n,i):k(e,65535+t+1,r,n,i),r+2}function E(e,t,r,n,i){i||(N(void 0!==t&&null!==t,"missing value"),N("boolean"==typeof n,"missing or invalid endian"),N(void 0!==r&&null!==r,"missing offset"),N(r+3<e.length,"Trying to write beyond buffer length"),F(t,2147483647,-2147483648));var o=e.length;if(!(r>=o))return t>=0?_(e,t,r,n,i):_(e,4294967295+t+1,r,n,i),r+4}function S(e,t,r,n,i){i||(N(void 0!==t&&null!==t,"missing value"),N("boolean"==typeof n,"missing or invalid endian"),N(void 0!==r&&null!==r,"missing offset"),N(r+3<e.length,"Trying to write beyond buffer length"),P(t,3.4028234663852886e38,-3.4028234663852886e38));var o=e.length;if(!(r>=o))return H.write(e,t,r,n,23,4),r+4}function I(e,t,r,n,i){i||(N(void 0!==t&&null!==t,"missing value"),N("boolean"==typeof n,"missing or invalid endian"),N(void 0!==r&&null!==r,"missing offset"),N(r+7<e.length,"Trying to write beyond buffer length"),P(t,1.7976931348623157e308,-1.7976931348623157e308));var o=e.length;if(!(r>=o))return H.write(e,t,r,n,52,8),r+8}function A(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function j(e,t,r){return"number"!=typeof e?r:(e=~~e,e>=t?t:e>=0?e:(e+=t,e>=0?e:0))}function C(e){return e=~~Math.ceil(+e),0>e?0:e}function L(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function B(e){return L(e)||n.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function R(e){return 16>e?"0"+e.toString(16):e.toString(16)}function V(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(127>=n)t.push(n);else{var i=r;n>=55296&&57343>=n&&r++;for(var o=encodeURIComponent(e.slice(i,r+1)).substr(1).split("%"),a=0;a<o.length;a++)t.push(parseInt(o[a],16))}}return t}function T(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t}function M(e){for(var t,r,n,i=[],o=0;o<e.length;o++)t=e.charCodeAt(o),r=t>>8,n=t%256,i.push(n),i.push(r);return i}function U(e){return $.toByteArray(e)}function z(e,t,r,n){for(var i=0;n>i&&!(i+r>=t.length||i>=e.length);i++)t[i+r]=e[i];return i}function D(e){try{return decodeURIComponent(e)}catch(t){return String.fromCharCode(65533)}}function q(e,t){N("number"==typeof e,"cannot write a non-number as a number"),N(e>=0,"specified a negative value for writing an unsigned value"),N(t>=e,"value is larger than maximum value for type"),N(Math.floor(e)===e,"value has a fractional component")}function F(e,t,r){N("number"==typeof e,"cannot write a non-number as a number"),N(t>=e,"value larger than maximum allowed value"),N(e>=r,"value smaller than minimum allowed value"),N(Math.floor(e)===e,"value has a fractional component")}function P(e,t,r){N("number"==typeof e,"cannot write a non-number as a number"),N(t>=e,"value larger than maximum allowed value"),N(e>=r,"value smaller than minimum allowed value")}function N(e,t){if(!e)throw new Error(t||"Failed assertion")}var $=e("base64-js"),H=e("ieee754");r.Buffer=n,r.SlowBuffer=n,r.INSPECT_MAX_BYTES=50,n.poolSize=8192,n._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(r){return!1}}(),n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},n.byteLength=function(e,t){var r;switch(e=e.toString(),t||"utf8"){case"hex":r=e.length/2;break;case"utf8":case"utf-8":r=V(e).length;break;case"ascii":case"binary":case"raw":r=e.length;break;case"base64":r=U(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=2*e.length;break;default:throw new Error("Unknown encoding")}return r},n.concat=function(e,t){if(N(L(e),"Usage: Buffer.concat(list[, length])"),0===e.length)return new n(0);if(1===e.length)return e[0];var r;if(void 0===t)for(t=0,r=0;r<e.length;r++)t+=e[r].length;var i=new n(t),o=0;for(r=0;r<e.length;r++){var a=e[r];a.copy(i,o),o+=a.length}return i},n.compare=function(e,t){N(n.isBuffer(e)&&n.isBuffer(t),"Arguments must be Buffers");for(var r=e.length,i=t.length,o=0,a=Math.min(r,i);a>o&&e[o]===t[o];o++);return o!==a&&(r=e[o],i=t[o]),i>r?-1:r>i?1:0},n.prototype.write=function(e,t,r,n){if(isFinite(t))isFinite(r)||(n=r,r=void 0);else{var f=n;n=t,t=r,r=f}t=Number(t)||0;var c=this.length-t;r?(r=Number(r),r>c&&(r=c)):r=c,n=String(n||"utf8").toLowerCase();var h;switch(n){case"hex":h=i(this,e,t,r);break;case"utf8":case"utf-8":h=o(this,e,t,r);break;case"ascii":h=a(this,e,t,r);break;case"binary":h=s(this,e,t,r);break;case"base64":h=u(this,e,t,r);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":h=l(this,e,t,r);break;default:throw new Error("Unknown encoding")}return h},n.prototype.toString=function(e,t,r){var n=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,r=void 0===r?n.length:Number(r),r===t)return"";var i;switch(e){case"hex":i=p(n,t,r);break;case"utf8":case"utf-8":i=c(n,t,r);break;case"ascii":i=h(n,t,r);break;case"binary":i=d(n,t,r);break;case"base64":i=f(n,t,r);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":i=g(n,t,r);break;default:throw new Error("Unknown encoding")}return i},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},n.prototype.equals=function(e){return N(n.isBuffer(e),"Argument must be a Buffer"),0===n.compare(this,e)},n.prototype.compare=function(e){return N(n.isBuffer(e),"Argument must be a Buffer"),n.compare(this,e)},n.prototype.copy=function(e,t,r,i){var o=this;if(r||(r=0),i||0===i||(i=this.length),t||(t=0),i!==r&&0!==e.length&&0!==o.length){N(i>=r,"sourceEnd < sourceStart"),N(t>=0&&t<e.length,"targetStart out of bounds"),N(r>=0&&r<o.length,"sourceStart out of bounds"),N(i>=0&&i<=o.length,"sourceEnd out of bounds"),i>this.length&&(i=this.length),e.length-t<i-r&&(i=e.length-t+r);var a=i-r;if(100>a||!n._useTypedArrays)for(var s=0;a>s;s++)e[s+t]=this[s+r];else e._set(this.subarray(r,r+a),t)}},n.prototype.slice=function(e,t){var r=this.length;if(e=j(e,r,0),t=j(t,r,r),n._useTypedArrays)return n._augment(this.subarray(e,t));for(var i=t-e,o=new n(i,void 0,!0),a=0;i>a;a++)o[a]=this[a+e];return o},n.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},n.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},n.prototype.readUInt8=function(e,t){return t||(N(void 0!==e&&null!==e,"missing offset"),N(e<this.length,"Trying to read beyond buffer length")),e>=this.length?void 0:this[e]},n.prototype.readUInt16LE=function(e,t){return m(this,e,!0,t)},n.prototype.readUInt16BE=function(e,t){return m(this,e,!1,t)},n.prototype.readUInt32LE=function(e,t){return v(this,e,!0,t)},n.prototype.readUInt32BE=function(e,t){return v(this,e,!1,t)},n.prototype.readInt8=function(e,t){if(t||(N(void 0!==e&&null!==e,"missing offset"),N(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var r=128&this[e];return r?-1*(255-this[e]+1):this[e]}},n.prototype.readInt16LE=function(e,t){return b(this,e,!0,t)},n.prototype.readInt16BE=function(e,t){return b(this,e,!1,t)},n.prototype.readInt32LE=function(e,t){return y(this,e,!0,t)},n.prototype.readInt32BE=function(e,t){return y(this,e,!1,t)},n.prototype.readFloatLE=function(e,t){return w(this,e,!0,t)},n.prototype.readFloatBE=function(e,t){return w(this,e,!1,t)},n.prototype.readDoubleLE=function(e,t){return x(this,e,!0,t)},n.prototype.readDoubleBE=function(e,t){return x(this,e,!1,t)},n.prototype.writeUInt8=function(e,t,r){return r||(N(void 0!==e&&null!==e,"missing value"),N(void 0!==t&&null!==t,"missing offset"),N(t<this.length,"trying to write beyond buffer length"),q(e,255)),t>=this.length?void 0:(this[t]=e,t+1)},n.prototype.writeUInt16LE=function(e,t,r){return k(this,e,t,!0,r)},n.prototype.writeUInt16BE=function(e,t,r){return k(this,e,t,!1,r)},n.prototype.writeUInt32LE=function(e,t,r){return _(this,e,t,!0,r)},n.prototype.writeUInt32BE=function(e,t,r){return _(this,e,t,!1,r)},n.prototype.writeInt8=function(e,t,r){return r||(N(void 0!==e&&null!==e,"missing value"),N(void 0!==t&&null!==t,"missing offset"),N(t<this.length,"Trying to write beyond buffer length"),F(e,127,-128)),t>=this.length?void 0:(e>=0?this.writeUInt8(e,t,r):this.writeUInt8(255+e+1,t,r),t+1)},n.prototype.writeInt16LE=function(e,t,r){return O(this,e,t,!0,r)},n.prototype.writeInt16BE=function(e,t,r){return O(this,e,t,!1,r)},n.prototype.writeInt32LE=function(e,t,r){return E(this,e,t,!0,r)},n.prototype.writeInt32BE=function(e,t,r){return E(this,e,t,!1,r)},n.prototype.writeFloatLE=function(e,t,r){return S(this,e,t,!0,r)},n.prototype.writeFloatBE=function(e,t,r){return S(this,e,t,!1,r)},n.prototype.writeDoubleLE=function(e,t,r){return I(this,e,t,!0,r)},n.prototype.writeDoubleBE=function(e,t,r){return I(this,e,t,!1,r)},n.prototype.fill=function(e,t,r){if(e||(e=0),t||(t=0),r||(r=this.length),N(r>=t,"end < start"),r!==t&&0!==this.length){N(t>=0&&t<this.length,"start out of bounds"),N(r>=0&&r<=this.length,"end out of bounds");var n;if("number"==typeof e)for(n=t;r>n;n++)this[n]=e;else{var i=V(e.toString()),o=i.length;for(n=t;r>n;n++)this[n]=i[n%o]}return this}},n.prototype.inspect=function(){for(var e=[],t=this.length,n=0;t>n;n++)if(e[n]=R(this[n]),n===r.INSPECT_MAX_BYTES){e[n+1]="...";break}return"<Buffer "+e.join(" ")+">"},n.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(n._useTypedArrays)return new n(this).buffer;for(var e=new Uint8Array(this.length),t=0,r=e.length;r>t;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var W=n.prototype;n._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=W.get,e.set=W.set,e.write=W.write,e.toString=W.toString,e.toLocaleString=W.toString,e.toJSON=W.toJSON,e.equals=W.equals,e.compare=W.compare,e.copy=W.copy,e.slice=W.slice,e.readUInt8=W.readUInt8,e.readUInt16LE=W.readUInt16LE,e.readUInt16BE=W.readUInt16BE,e.readUInt32LE=W.readUInt32LE,e.readUInt32BE=W.readUInt32BE,e.readInt8=W.readInt8,e.readInt16LE=W.readInt16LE,e.readInt16BE=W.readInt16BE,e.readInt32LE=W.readInt32LE,e.readInt32BE=W.readInt32BE,e.readFloatLE=W.readFloatLE,e.readFloatBE=W.readFloatBE,e.readDoubleLE=W.readDoubleLE,e.readDoubleBE=W.readDoubleBE,e.writeUInt8=W.writeUInt8,e.writeUInt16LE=W.writeUInt16LE,e.writeUInt16BE=W.writeUInt16BE,e.writeUInt32LE=W.writeUInt32LE,e.writeUInt32BE=W.writeUInt32BE,e.writeInt8=W.writeInt8,e.writeInt16LE=W.writeInt16LE,e.writeInt16BE=W.writeInt16BE,e.writeInt32LE=W.writeInt32LE,e.writeInt32BE=W.writeInt32BE,e.writeFloatLE=W.writeFloatLE,e.writeFloatBE=W.writeFloatBE,e.writeDoubleLE=W.writeDoubleLE,e.writeDoubleBE=W.writeDoubleBE,e.fill=W.fill,e.inspect=W.inspect,e.toArrayBuffer=W.toArrayBuffer,e}},{"base64-js":29,ieee754:30}],29:[function(e,t){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(){"use strict";function e(e){var t=e.charCodeAt(0);return t===a?62:t===s?63:u>t?-1:u+10>t?t-u+26+26:f+26>t?t-f:l+26>t?t-l+26:void 0}function n(t){function r(e){l[c++]=e}var n,i,a,s,u,l;if(t.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var f=t.length;u="="===t.charAt(f-2)?2:"="===t.charAt(f-1)?1:0,l=new o(3*t.length/4-u),a=u>0?t.length-4:t.length;var c=0;for(n=0,i=0;a>n;n+=4,i+=3)s=e(t.charAt(n))<<18|e(t.charAt(n+1))<<12|e(t.charAt(n+2))<<6|e(t.charAt(n+3)),r((16711680&s)>>16),r((65280&s)>>8),r(255&s);
return 2===u?(s=e(t.charAt(n))<<2|e(t.charAt(n+1))>>4,r(255&s)):1===u&&(s=e(t.charAt(n))<<10|e(t.charAt(n+1))<<4|e(t.charAt(n+2))>>2,r(s>>8&255),r(255&s)),l}function i(e){function t(e){return r.charAt(e)}function n(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}var i,o,a,s=e.length%3,u="";for(i=0,a=e.length-s;a>i;i+=3)o=(e[i]<<16)+(e[i+1]<<8)+e[i+2],u+=n(o);switch(s){case 1:o=e[e.length-1],u+=t(o>>2),u+=t(o<<4&63),u+="==";break;case 2:o=(e[e.length-2]<<8)+e[e.length-1],u+=t(o>>10),u+=t(o>>4&63),u+=t(o<<2&63),u+="="}return u}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,a=("0".charCodeAt(0),"+".charCodeAt(0)),s="/".charCodeAt(0),u="0".charCodeAt(0),l="a".charCodeAt(0),f="A".charCodeAt(0);t.exports.toByteArray=n,t.exports.fromByteArray=i}()},{}],30:[function(e,t,r){r.read=function(e,t,r,n,i){var o,a,s=8*i-n-1,u=(1<<s)-1,l=u>>1,f=-7,c=r?i-1:0,h=r?-1:1,d=e[t+c];for(c+=h,o=d&(1<<-f)-1,d>>=-f,f+=s;f>0;o=256*o+e[t+c],c+=h,f-=8);for(a=o&(1<<-f)-1,o>>=-f,f+=n;f>0;a=256*a+e[t+c],c+=h,f-=8);if(0===o)o=1-l;else{if(o===u)return a?0/0:1/0*(d?-1:1);a+=Math.pow(2,n),o-=l}return(d?-1:1)*a*Math.pow(2,o-n)},r.write=function(e,t,r,n,i,o){var a,s,u,l=8*o-i-1,f=(1<<l)-1,c=f>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:o-1,p=n?1:-1,g=0>t||0===t&&0>1/t?1:0;for(t=Math.abs(t),isNaN(t)||1/0===t?(s=isNaN(t)?1:0,a=f):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),t+=a+c>=1?h/u:h*Math.pow(2,1-c),t*u>=2&&(a++,u/=2),a+c>=f?(s=0,a=f):a+c>=1?(s=(t*u-1)*Math.pow(2,i),a+=c):(s=t*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;e[r+d]=255&s,d+=p,s/=256,i-=8);for(a=a<<i|s,l+=i;l>0;e[r+d]=255&a,d+=p,a/=256,l-=8);e[r+d-p]|=128*g}},{}],31:[function(e,t){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function i(e){return"number"==typeof e}function o(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!i(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,r,i,s,u,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length))throw t=arguments[1],t instanceof Error?t:TypeError('Uncaught, unspecified "error" event.');if(r=this._events[e],a(r))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:for(i=arguments.length,s=new Array(i-1),u=1;i>u;u++)s[u-1]=arguments[u];r.apply(this,s)}else if(o(r)){for(i=arguments.length,s=new Array(i-1),u=1;i>u;u++)s[u-1]=arguments[u];for(l=r.slice(),i=l.length,u=0;i>u;u++)l[u].apply(this,s)}return!0},r.prototype.addListener=function(e,t){var i;if(!n(t))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?o(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,o(this._events[e])&&!this._events[e].warned){var i;i=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),console.trace())}return this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function r(){this.removeListener(e,r),i||(i=!0,t.apply(this,arguments))}if(!n(t))throw TypeError("listener must be a function");var i=!1;return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var r,i,a,s;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],a=r.length,i=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(o(r)){for(s=a;s-->0;)if(r[s]===t||r[s].listener&&r[s].listener===t){i=s;break}if(0>i)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],n(r))this.removeListener(e,r);else for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.listenerCount=function(e,t){var r;return r=e._events&&e._events[t]?n(e._events[t])?1:e._events[t].length:0}},{}],32:[function(e,t){var r=t.exports,n=(e("events").EventEmitter,e("./lib/request")),i=e("url");r.request=function(e,t){"string"==typeof e&&(e=i.parse(e)),e||(e={}),e.host||e.port||(e.port=parseInt(window.location.port,10)),!e.host&&e.hostname&&(e.host=e.hostname),e.scheme||(e.scheme=window.location.protocol.split(":")[0]),e.host||(e.host=window.location.hostname||window.location.host),/:/.test(e.host)&&(e.port||(e.port=e.host.split(":")[1]),e.host=e.host.split(":")[0]),e.port||(e.port="https"==e.scheme?443:80);var r=new n(new o,e);return t&&r.on("response",t),r},r.get=function(e,t){e.method="GET";var n=r.request(e,t);return n.end(),n},r.Agent=function(){},r.Agent.defaultMaxSockets=4;var o=function(){if("undefined"==typeof window)throw new Error("no window object present");if(window.XMLHttpRequest)return window.XMLHttpRequest;if(window.ActiveXObject){for(var e=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Microsoft.XMLHTTP"],t=0;t<e.length;t++)try{var r=new window.ActiveXObject(e[t]);return function(){if(r){var n=r;return r=null,n}return new window.ActiveXObject(e[t])}}catch(n){}throw new Error("ajax not supported in this browser")}throw new Error("ajax not supported in this browser")}();r.STATUS_CODES={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",300:"Multiple Choices",301:"Moved Permanently",302:"Moved Temporarily",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}},{"./lib/request":33,events:31,url:58}],33:[function(e,t){var r=e("stream"),n=e("./response"),i=e("Base64"),o=e("inherits"),a=t.exports=function(e,t){var r=this;r.writable=!0,r.xhr=e,r.body=[],r.uri=(t.scheme||"http")+"://"+t.host+(t.port?":"+t.port:"")+(t.path||"/"),"undefined"==typeof t.withCredentials&&(t.withCredentials=!0);try{e.withCredentials=t.withCredentials}catch(o){}if(e.open(t.method||"GET",r.uri,!0),r._headers={},t.headers)for(var a=s(t.headers),u=0;u<a.length;u++){var l=a[u];if(r.isSafeRequestHeader(l)){var f=t.headers[l];r.setHeader(l,f)}}t.auth&&this.setHeader("Authorization","Basic "+i.btoa(t.auth));var c=new n;c.on("close",function(){r.emit("close")}),c.on("ready",function(){r.emit("response",c)}),e.onreadystatechange=function(){e.__aborted||c.handle(e)}};o(a,r),a.prototype.setHeader=function(e,t){this._headers[e.toLowerCase()]=t},a.prototype.getHeader=function(e){return this._headers[e.toLowerCase()]},a.prototype.removeHeader=function(e){delete this._headers[e.toLowerCase()]},a.prototype.write=function(e){this.body.push(e)},a.prototype.destroy=function(){this.xhr.__aborted=!0,this.xhr.abort(),this.emit("close")},a.prototype.end=function(e){void 0!==e&&this.body.push(e);for(var t=s(this._headers),r=0;r<t.length;r++){var n=t[r],i=this._headers[n];if(u(i))for(var o=0;o<i.length;o++)this.xhr.setRequestHeader(n,i[o]);else this.xhr.setRequestHeader(n,i)}if(0===this.body.length)this.xhr.send("");else if("string"==typeof this.body[0])this.xhr.send(this.body.join(""));else if(u(this.body[0])){for(var a=[],r=0;r<this.body.length;r++)a.push.apply(a,this.body[r]);this.xhr.send(a)}else if(/Array/.test(Object.prototype.toString.call(this.body[0]))){for(var l=0,r=0;r<this.body.length;r++)l+=this.body[r].length;for(var a=new this.body[0].constructor(l),f=0,r=0;r<this.body.length;r++)for(var c=this.body[r],o=0;o<c.length;o++)a[f++]=c[o];this.xhr.send(a)}else{for(var a="",r=0;r<this.body.length;r++)a+=this.body[r].toString();this.xhr.send(a)}},a.unsafeHeaders=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","content-transfer-encoding","date","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"],a.prototype.isSafeRequestHeader=function(e){return e?-1===l(a.unsafeHeaders,e.toLowerCase()):!1};var s=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t},u=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},l=function(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0;r<e.length;r++)if(e[r]===t)return r;return-1}},{"./response":34,Base64:35,inherits:37,stream:57}],34:[function(e,t){function r(e){for(var t=e.getAllResponseHeaders().split(/\r?\n/),r={},n=0;n<t.length;n++){var i=t[n];if(""!==i){var o=i.match(/^([^:]+):\s*(.*)/);if(o){var a=o[1].toLowerCase(),u=o[2];void 0!==r[a]?s(r[a])?r[a].push(u):r[a]=[r[a],u]:r[a]=u}else r[i]=!0}}return r}var n=e("stream"),i=e("util"),o=t.exports=function(){this.offset=0,this.readable=!0};i.inherits(o,n);var a={streaming:!0,status2:!0};o.prototype.getResponse=function(e){var t=String(e.responseType).toLowerCase();return"blob"===t?e.responseBlob||e.response:"arraybuffer"===t?e.response:e.responseText},o.prototype.getHeader=function(e){return this.headers[e.toLowerCase()]},o.prototype.handle=function(e){if(2===e.readyState&&a.status2){try{this.statusCode=e.status,this.headers=r(e)}catch(t){a.status2=!1}a.status2&&this.emit("ready")}else if(a.streaming&&3===e.readyState){try{this.statusCode||(this.statusCode=e.status,this.headers=r(e),this.emit("ready"))}catch(t){}try{this._emitData(e)}catch(t){a.streaming=!1}}else 4===e.readyState&&(this.statusCode||(this.statusCode=e.status,this.emit("ready")),this._emitData(e),e.error?this.emit("error",this.getResponse(e)):this.emit("end"),this.emit("close"))},o.prototype._emitData=function(e){var t=this.getResponse(e);return t.toString().match(/ArrayBuffer/)?(this.emit("data",new Uint8Array(t,this.offset)),void(this.offset=t.byteLength)):void(t.length>this.offset&&(this.emit("data",t.slice(this.offset)),this.offset=t.length))};var s=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{stream:57,util:60}],35:[function(e,t,r){!function(){function e(e){this.message=e}var t="undefined"!=typeof r?r:this,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.prototype=new Error,e.prototype.name="InvalidCharacterError",t.btoa||(t.btoa=function(t){for(var r,i,o=0,a=n,s="";t.charAt(0|o)||(a="=",o%1);s+=a.charAt(63&r>>8-o%1*8)){if(i=t.charCodeAt(o+=.75),i>255)throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");r=r<<8|i}return s}),t.atob||(t.atob=function(t){if(t=t.replace(/=+$/,""),t.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,i,o=0,a=0,s="";i=t.charAt(a++);~i&&(r=o%4?64*r+i:i,o++%4)?s+=String.fromCharCode(255&r>>(-2*o&6)):0)i=n.indexOf(i);return s})}()},{}],36:[function(e,t){var r=e("http"),n=t.exports;for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i]);n.request=function(e,t){return e||(e={}),e.scheme="https",r.request.call(this,e,t)}},{http:32}],37:[function(e,t){t.exports="function"==typeof Object.create?function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},{}],38:[function(e,t,r){(function(e){function t(e,t){for(var r=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(e){return i.exec(e).slice(1)};r.resolve=function(){for(var r="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var a=o>=0?arguments[o]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(r=a+"/"+r,i="/"===a.charAt(0))}return r=t(n(r.split("/"),function(e){return!!e}),!i).join("/"),(i?"/":"")+r||"."},r.normalize=function(e){var i=r.isAbsolute(e),o="/"===a(e,-1);return e=t(n(e.split("/"),function(e){return!!e}),!i).join("/"),e||i||(e="."),e&&o&&(e+="/"),(i?"/":"")+e},r.isAbsolute=function(e){return"/"===e.charAt(0)},r.join=function(){var e=Array.prototype.slice.call(arguments,0);return r.normalize(n(e,function(e){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},r.relative=function(e,t){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=r.resolve(e).substr(1),t=r.resolve(t).substr(1);for(var i=n(e.split("/")),o=n(t.split("/")),a=Math.min(i.length,o.length),s=a,u=0;a>u;u++)if(i[u]!==o[u]){s=u;break}for(var l=[],u=s;u<i.length;u++)l.push("..");return l=l.concat(o.slice(s)),l.join("/")},r.sep="/",r.delimiter=":",r.dirname=function(e){var t=o(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},r.basename=function(e,t){var r=o(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},r.extname=function(e){return o(e)[3]};var a="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return 0>t&&(t=e.length+t),e.substr(t,r)}}).call(this,e("Zbi7gb"))},{Zbi7gb:39}],39:[function(e,t){function r(){}var n=t.exports={};n.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var r=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),r.length>0)){var n=r.shift();n()}},!0),function(e){r.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),n.title="browser",n.browser=!0,n.env={},n.argv=[],n.on=r,n.addListener=r,n.once=r,n.off=r,n.removeListener=r,n.removeAllListeners=r,n.emit=r,n.binding=function(){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(){throw new Error("process.chdir is not supported")}},{}],40:[function(t,r,n){(function(t){!function(i){function o(e){throw RangeError(V[e])}function a(e,t){for(var r=e.length;r--;)e[r]=t(e[r]);return e}function s(e,t){return a(e.split(R),t).join(".")}function u(e){for(var t,r,n=[],i=0,o=e.length;o>i;)t=e.charCodeAt(i++),t>=55296&&56319>=t&&o>i?(r=e.charCodeAt(i++),56320==(64512&r)?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),i--)):n.push(t);return n}function l(e){return a(e,function(e){var t="";return e>65535&&(e-=65536,t+=U(e>>>10&1023|55296),e=56320|1023&e),t+=U(e)}).join("")}function f(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:_}function c(e,t){return e+22+75*(26>e)-((0!=t)<<5)}function h(e,t,r){var n=0;for(e=r?M(e/I):e>>1,e+=M(e/t);e>T*E>>1;n+=_)e=M(e/T);return M(n+(T+1)*e/(e+S))}function d(e){var t,r,n,i,a,s,u,c,d,p,g=[],m=e.length,v=0,b=j,y=A;for(r=e.lastIndexOf(C),0>r&&(r=0),n=0;r>n;++n)e.charCodeAt(n)>=128&&o("not-basic"),g.push(e.charCodeAt(n));for(i=r>0?r+1:0;m>i;){for(a=v,s=1,u=_;i>=m&&o("invalid-input"),c=f(e.charCodeAt(i++)),(c>=_||c>M((k-v)/s))&&o("overflow"),v+=c*s,d=y>=u?O:u>=y+E?E:u-y,!(d>c);u+=_)p=_-d,s>M(k/p)&&o("overflow"),s*=p;t=g.length+1,y=h(v-a,t,0==a),M(v/t)>k-b&&o("overflow"),b+=M(v/t),v%=t,g.splice(v++,0,b)}return l(g)}function p(e){var t,r,n,i,a,s,l,f,d,p,g,m,v,b,y,w=[];for(e=u(e),m=e.length,t=j,r=0,a=A,s=0;m>s;++s)g=e[s],128>g&&w.push(U(g));for(n=i=w.length,i&&w.push(C);m>n;){for(l=k,s=0;m>s;++s)g=e[s],g>=t&&l>g&&(l=g);for(v=n+1,l-t>M((k-r)/v)&&o("overflow"),r+=(l-t)*v,t=l,s=0;m>s;++s)if(g=e[s],t>g&&++r>k&&o("overflow"),g==t){for(f=r,d=_;p=a>=d?O:d>=a+E?E:d-a,!(p>f);d+=_)y=f-p,b=_-p,w.push(U(c(p+y%b,0))),f=M(y/b);w.push(U(c(f,0))),a=h(r,v,n==i),r=0,++n}++r,++t}return w.join("")}function g(e){return s(e,function(e){return L.test(e)?d(e.slice(4).toLowerCase()):e})}function m(e){return s(e,function(e){return B.test(e)?"xn--"+p(e):e})}var v="object"==typeof n&&n,b="object"==typeof r&&r&&r.exports==v&&r,y="object"==typeof t&&t;(y.global===y||y.window===y)&&(i=y);var w,x,k=2147483647,_=36,O=1,E=26,S=38,I=700,A=72,j=128,C="-",L=/^xn--/,B=/[^ -~]/,R=/\x2E|\u3002|\uFF0E|\uFF61/g,V={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},T=_-O,M=Math.floor,U=String.fromCharCode;if(w={version:"1.2.4",ucs2:{decode:u,encode:l},decode:d,encode:p,toASCII:m,toUnicode:g},"function"==typeof e&&"object"==typeof e.amd&&e.amd)e("punycode",function(){return w});else if(v&&!v.nodeType)if(b)b.exports=w;else for(x in w)w.hasOwnProperty(x)&&(v[x]=w[x]);else i.punycode=w}(this)}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],41:[function(e,t){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e,t,i,o){t=t||"&",i=i||"=";var a={};if("string"!=typeof e||0===e.length)return a;var s=/\+/g;e=e.split(t);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var l=e.length;u>0&&l>u&&(l=u);for(var f=0;l>f;++f){var c,h,d,p,g=e[f].replace(s,"%20"),m=g.indexOf(i);m>=0?(c=g.substr(0,m),h=g.substr(m+1)):(c=g,h=""),d=decodeURIComponent(c),p=decodeURIComponent(h),r(a,d)?n(a[d])?a[d].push(p):a[d]=[a[d],p]:a[d]=p}return a};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],42:[function(e,t){"use strict";function r(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,a,s){return t=t||"&",a=a||"=",null===e&&(e=void 0),"object"==typeof e?r(o(e),function(r){var o=encodeURIComponent(n(r))+a;return i(e[r])?e[r].map(function(e){return o+encodeURIComponent(n(e))}).join(t):o+encodeURIComponent(n(e[r]))}).join(t):s?encodeURIComponent(n(s))+a+encodeURIComponent(n(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},o=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},{}],43:[function(e,t,r){"use strict";r.decode=r.parse=e("./decode"),r.encode=r.stringify=e("./encode")},{"./decode":41,"./encode":42}],44:[function(e,t){t.exports=e("./lib/_stream_duplex.js")},{"./lib/_stream_duplex.js":45}],45:[function(e,t){(function(r){function n(e){return this instanceof n?(u.call(this,e),l.call(this,e),e&&e.readable===!1&&(this.readable=!1),e&&e.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,e&&e.allowHalfOpen===!1&&(this.allowHalfOpen=!1),void this.once("end",i)):new n(e)}function i(){this.allowHalfOpen||this._writableState.ended||r.nextTick(this.end.bind(this))}function o(e,t){for(var r=0,n=e.length;n>r;r++)t(e[r],r)}t.exports=n;var a=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t},s=e("core-util-is");s.inherits=e("inherits");var u=e("./_stream_readable"),l=e("./_stream_writable");s.inherits(n,u),o(a(l.prototype),function(e){n.prototype[e]||(n.prototype[e]=l.prototype[e])})}).call(this,e("Zbi7gb"))},{"./_stream_readable":47,"./_stream_writable":49,Zbi7gb:39,"core-util-is":50,inherits:37}],46:[function(e,t){function r(e){return this instanceof r?void n.call(this,e):new r(e)}t.exports=r;var n=e("./_stream_transform"),i=e("core-util-is");i.inherits=e("inherits"),i.inherits(r,n),r.prototype._transform=function(e,t,r){r(null,e)}},{"./_stream_transform":48,"core-util-is":50,inherits:37}],47:[function(e,t){(function(r){function n(t){t=t||{};var r=t.highWaterMark;this.highWaterMark=r||0===r?r:16384,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=!1,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.calledRead=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.objectMode=!!t.objectMode,this.defaultEncoding=t.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(A||(A=e("string_decoder/").StringDecoder),this.decoder=new A(t.encoding),this.encoding=t.encoding)}function i(e){return this instanceof i?(this._readableState=new n(e,this),this.readable=!0,void S.call(this)):new i(e)}function o(e,t,r,n,i){var o=l(t,r);if(o)e.emit("error",o);else if(null===r||void 0===r)t.reading=!1,t.ended||f(e,t);else if(t.objectMode||r&&r.length>0)if(t.ended&&!i){var s=new Error("stream.push() after EOF");e.emit("error",s)}else if(t.endEmitted&&i){var s=new Error("stream.unshift() after end event");e.emit("error",s)}else!t.decoder||i||n||(r=t.decoder.write(r)),t.length+=t.objectMode?1:r.length,i?t.buffer.unshift(r):(t.reading=!1,t.buffer.push(r)),t.needReadable&&c(e),d(e,t);else i||(t.reading=!1);return a(t)}function a(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}function s(e){if(e>=j)e=j;else{e--;for(var t=1;32>t;t<<=1)e|=e>>t;e++}return e}function u(e,t){return 0===t.length&&t.ended?0:t.objectMode?0===e?0:1:isNaN(e)||null===e?t.flowing&&t.buffer.length?t.buffer[0].length:t.length:0>=e?0:(e>t.highWaterMark&&(t.highWaterMark=s(e)),e>t.length?t.ended?t.length:(t.needReadable=!0,0):e)}function l(e,t){var r=null;return O.isBuffer(t)||"string"==typeof t||null===t||void 0===t||e.objectMode||r||(r=new TypeError("Invalid non-string/buffer chunk")),r}function f(e,t){if(t.decoder&&!t.ended){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,t.length>0?c(e):w(e)}function c(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,t.sync?r.nextTick(function(){h(e)}):h(e))}function h(e){e.emit("readable")}function d(e,t){t.readingMore||(t.readingMore=!0,r.nextTick(function(){p(e,t)}))}function p(e,t){for(var r=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(e.read(0),r!==t.length);)r=t.length;t.readingMore=!1}function g(e){return function(){var t=e._readableState;t.awaitDrain--,0===t.awaitDrain&&m(e)}}function m(e){function t(e){var t=e.write(r);!1===t&&n.awaitDrain++}var r,n=e._readableState;for(n.awaitDrain=0;n.pipesCount&&null!==(r=e.read());)if(1===n.pipesCount?t(n.pipes,0,null):x(n.pipes,t),e.emit("data",r),n.awaitDrain>0)return;return 0===n.pipesCount?(n.flowing=!1,void(E.listenerCount(e,"data")>0&&b(e))):void(n.ranOut=!0)}function v(){this._readableState.ranOut&&(this._readableState.ranOut=!1,m(this))}function b(e,t){var n=e._readableState;if(n.flowing)throw new Error("Cannot switch to old mode now.");var i=t||!1,o=!1;e.readable=!0,e.pipe=S.prototype.pipe,e.on=e.addListener=S.prototype.on,e.on("readable",function(){o=!0;for(var t;!i&&null!==(t=e.read());)e.emit("data",t);null===t&&(o=!1,e._readableState.needReadable=!0)}),e.pause=function(){i=!0,this.emit("pause")},e.resume=function(){i=!1,o?r.nextTick(function(){e.emit("readable")}):this.read(0),this.emit("resume")},e.emit("readable")}function y(e,t){var r,n=t.buffer,i=t.length,o=!!t.decoder,a=!!t.objectMode;if(0===n.length)return null;if(0===i)r=null;else if(a)r=n.shift();else if(!e||e>=i)r=o?n.join(""):O.concat(n,i),n.length=0;else if(e<n[0].length){var s=n[0];r=s.slice(0,e),n[0]=s.slice(e)}else if(e===n[0].length)r=n.shift();else{r=o?"":new O(e);for(var u=0,l=0,f=n.length;f>l&&e>u;l++){var s=n[0],c=Math.min(e-u,s.length);o?r+=s.slice(0,c):s.copy(r,u,0,c),c<s.length?n[0]=s.slice(c):n.shift(),u+=c}}return r}function w(e){var t=e._readableState;if(t.length>0)throw new Error("endReadable called on non-empty stream");!t.endEmitted&&t.calledRead&&(t.ended=!0,r.nextTick(function(){t.endEmitted||0!==t.length||(t.endEmitted=!0,e.readable=!1,e.emit("end"))}))}function x(e,t){for(var r=0,n=e.length;n>r;r++)t(e[r],r)}function k(e,t){for(var r=0,n=e.length;n>r;r++)if(e[r]===t)return r;return-1}t.exports=i;var _=e("isarray"),O=e("buffer").Buffer;i.ReadableState=n;var E=e("events").EventEmitter;E.listenerCount||(E.listenerCount=function(e,t){return e.listeners(t).length});var S=e("stream"),I=e("core-util-is");I.inherits=e("inherits");var A;I.inherits(i,S),i.prototype.push=function(e,t){var r=this._readableState;return"string"!=typeof e||r.objectMode||(t=t||r.defaultEncoding,t!==r.encoding&&(e=new O(e,t),t="")),o(this,r,e,t,!1)},i.prototype.unshift=function(e){var t=this._readableState;return o(this,t,e,"",!0)},i.prototype.setEncoding=function(t){A||(A=e("string_decoder/").StringDecoder),this._readableState.decoder=new A(t),this._readableState.encoding=t};var j=8388608;i.prototype.read=function(e){var t=this._readableState;t.calledRead=!0;var r=e;if(("number"!=typeof e||e>0)&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return c(this),null;if(e=u(e,t),0===e&&t.ended)return 0===t.length&&w(this),null;var n=t.needReadable;t.length-e<=t.highWaterMark&&(n=!0),(t.ended||t.reading)&&(n=!1),n&&(t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1),n&&!t.reading&&(e=u(r,t));var i;return i=e>0?y(e,t):null,null===i&&(t.needReadable=!0,e=0),t.length-=e,0!==t.length||t.ended||(t.needReadable=!0),t.ended&&!t.endEmitted&&0===t.length&&w(this),i},i.prototype._read=function(){this.emit("error",new Error("not implemented"))},i.prototype.pipe=function(e,t){function n(e){e===f&&o()}function i(){e.end()}function o(){e.removeListener("close",s),e.removeListener("finish",u),e.removeListener("drain",p),e.removeListener("error",a),e.removeListener("unpipe",n),f.removeListener("end",i),f.removeListener("end",o),(!e._writableState||e._writableState.needDrain)&&p()}function a(t){l(),e.removeListener("error",a),0===E.listenerCount(e,"error")&&e.emit("error",t)}function s(){e.removeListener("finish",u),l()}function u(){e.removeListener("close",s),l()}function l(){f.unpipe(e)}var f=this,c=this._readableState;switch(c.pipesCount){case 0:c.pipes=e;break;case 1:c.pipes=[c.pipes,e];break;default:c.pipes.push(e)}c.pipesCount+=1;var h=(!t||t.end!==!1)&&e!==r.stdout&&e!==r.stderr,d=h?i:o;c.endEmitted?r.nextTick(d):f.once("end",d),e.on("unpipe",n);var p=g(f);return e.on("drain",p),e._events&&e._events.error?_(e._events.error)?e._events.error.unshift(a):e._events.error=[a,e._events.error]:e.on("error",a),e.once("close",s),e.once("finish",u),e.emit("pipe",f),c.flowing||(this.on("readable",v),c.flowing=!0,r.nextTick(function(){m(f)})),e},i.prototype.unpipe=function(e){var t=this._readableState;if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,this.removeListener("readable",v),t.flowing=!1,e&&e.emit("unpipe",this),this);if(!e){var r=t.pipes,n=t.pipesCount;t.pipes=null,t.pipesCount=0,this.removeListener("readable",v),t.flowing=!1;for(var i=0;n>i;i++)r[i].emit("unpipe",this);return this}var i=k(t.pipes,e);return-1===i?this:(t.pipes.splice(i,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this),this)},i.prototype.on=function(e,t){var r=S.prototype.on.call(this,e,t);if("data"!==e||this._readableState.flowing||b(this),"readable"===e&&this.readable){var n=this._readableState;n.readableListening||(n.readableListening=!0,n.emittedReadable=!1,n.needReadable=!0,n.reading?n.length&&c(this,n):this.read(0))}return r},i.prototype.addListener=i.prototype.on,i.prototype.resume=function(){b(this),this.read(0),this.emit("resume")},i.prototype.pause=function(){b(this,!0),this.emit("pause")},i.prototype.wrap=function(e){var t=this._readableState,r=!1,n=this;e.on("end",function(){if(t.decoder&&!t.ended){var e=t.decoder.end();e&&e.length&&n.push(e)}n.push(null)}),e.on("data",function(i){if(t.decoder&&(i=t.decoder.write(i)),i&&(t.objectMode||i.length)){var o=n.push(i);o||(r=!0,e.pause())}});for(var i in e)"function"==typeof e[i]&&"undefined"==typeof this[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i));var o=["error","close","destroy","pause","resume"];return x(o,function(t){e.on(t,n.emit.bind(n,t))}),n._read=function(){r&&(r=!1,e.resume())},n},i._fromList=y}).call(this,e("Zbi7gb"))},{Zbi7gb:39,buffer:28,"core-util-is":50,events:31,inherits:37,isarray:51,stream:57,"string_decoder/":52}],48:[function(e,t){function r(e,t){this.afterTransform=function(e,r){return n(t,e,r)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function n(e,t,r){var n=e._transformState;n.transforming=!1;var i=n.writecb;if(!i)return e.emit("error",new Error("no writecb in Transform class"));n.writechunk=null,n.writecb=null,null!==r&&void 0!==r&&e.push(r),i&&i(t);var o=e._readableState;o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&e._read(o.highWaterMark)}function i(e){if(!(this instanceof i))return new i(e);a.call(this,e);var t=(this._transformState=new r(e,this),this);this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("finish",function(){"function"==typeof this._flush?this._flush(function(e){o(t,e)}):o(t)})}function o(e,t){if(t)return e.emit("error",t);var r=e._writableState,n=(e._readableState,e._transformState);if(r.length)throw new Error("calling transform done when ws.length != 0");if(n.transforming)throw new Error("calling transform done when still transforming");return e.push(null)}t.exports=i;var a=e("./_stream_duplex"),s=e("core-util-is");s.inherits=e("inherits"),s.inherits(i,a),i.prototype.push=function(e,t){return this._transformState.needTransform=!1,a.prototype.push.call(this,e,t)},i.prototype._transform=function(){throw new Error("not implemented")},i.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},i.prototype._read=function(){var e=this._transformState;null!==e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):e.needTransform=!0
}},{"./_stream_duplex":45,"core-util-is":50,inherits:37}],49:[function(e,t){(function(r){function n(e,t,r){this.chunk=e,this.encoding=t,this.callback=r}function i(e,t){e=e||{};var r=e.highWaterMark;this.highWaterMark=r||0===r?r:16384,this.objectMode=!!e.objectMode,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var n=e.decodeStrings===!1;this.decodeStrings=!n,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){d(t,e)},this.writecb=null,this.writelen=0,this.buffer=[],this.errorEmitted=!1}function o(t){var r=e("./_stream_duplex");return this instanceof o||this instanceof r?(this._writableState=new i(t,this),this.writable=!0,void k.call(this)):new o(t)}function a(e,t,n){var i=new Error("write after end");e.emit("error",i),r.nextTick(function(){n(i)})}function s(e,t,n,i){var o=!0;if(!w.isBuffer(n)&&"string"!=typeof n&&null!==n&&void 0!==n&&!t.objectMode){var a=new TypeError("Invalid non-string/buffer chunk");e.emit("error",a),r.nextTick(function(){i(a)}),o=!1}return o}function u(e,t,r){return e.objectMode||e.decodeStrings===!1||"string"!=typeof t||(t=new w(t,r)),t}function l(e,t,r,i,o){r=u(t,r,i),w.isBuffer(r)&&(i="buffer");var a=t.objectMode?1:r.length;t.length+=a;var s=t.length<t.highWaterMark;return s||(t.needDrain=!0),t.writing?t.buffer.push(new n(r,i,o)):f(e,t,a,r,i,o),s}function f(e,t,r,n,i,o){t.writelen=r,t.writecb=o,t.writing=!0,t.sync=!0,e._write(n,i,t.onwrite),t.sync=!1}function c(e,t,n,i,o){n?r.nextTick(function(){o(i)}):o(i),e._writableState.errorEmitted=!0,e.emit("error",i)}function h(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function d(e,t){var n=e._writableState,i=n.sync,o=n.writecb;if(h(n),t)c(e,n,i,t,o);else{var a=v(e,n);a||n.bufferProcessing||!n.buffer.length||m(e,n),i?r.nextTick(function(){p(e,n,a,o)}):p(e,n,a,o)}}function p(e,t,r,n){r||g(e,t),n(),r&&b(e,t)}function g(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}function m(e,t){t.bufferProcessing=!0;for(var r=0;r<t.buffer.length;r++){var n=t.buffer[r],i=n.chunk,o=n.encoding,a=n.callback,s=t.objectMode?1:i.length;if(f(e,t,s,i,o,a),t.writing){r++;break}}t.bufferProcessing=!1,r<t.buffer.length?t.buffer=t.buffer.slice(r):t.buffer.length=0}function v(e,t){return t.ending&&0===t.length&&!t.finished&&!t.writing}function b(e,t){var r=v(e,t);return r&&(t.finished=!0,e.emit("finish")),r}function y(e,t,n){t.ending=!0,b(e,t),n&&(t.finished?r.nextTick(n):e.once("finish",n)),t.ended=!0}t.exports=o;var w=e("buffer").Buffer;o.WritableState=i;var x=e("core-util-is");x.inherits=e("inherits");var k=e("stream");x.inherits(o,k),o.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe. Not readable."))},o.prototype.write=function(e,t,r){var n=this._writableState,i=!1;return"function"==typeof t&&(r=t,t=null),w.isBuffer(e)?t="buffer":t||(t=n.defaultEncoding),"function"!=typeof r&&(r=function(){}),n.ended?a(this,n,r):s(this,n,e,r)&&(i=l(this,n,e,t,r)),i},o.prototype._write=function(e,t,r){r(new Error("not implemented"))},o.prototype.end=function(e,t,r){var n=this._writableState;"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),"undefined"!=typeof e&&null!==e&&this.write(e,t),n.ending||n.finished||y(this,n,r)}}).call(this,e("Zbi7gb"))},{"./_stream_duplex":45,Zbi7gb:39,buffer:28,"core-util-is":50,inherits:37,stream:57}],50:[function(e,t,r){(function(e){function t(e){return Array.isArray(e)}function n(e){return"boolean"==typeof e}function i(e){return null===e}function o(e){return null==e}function a(e){return"number"==typeof e}function s(e){return"string"==typeof e}function u(e){return"symbol"==typeof e}function l(e){return void 0===e}function f(e){return c(e)&&"[object RegExp]"===v(e)}function c(e){return"object"==typeof e&&null!==e}function h(e){return c(e)&&"[object Date]"===v(e)}function d(e){return c(e)&&("[object Error]"===v(e)||e instanceof Error)}function p(e){return"function"==typeof e}function g(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function m(t){return e.isBuffer(t)}function v(e){return Object.prototype.toString.call(e)}r.isArray=t,r.isBoolean=n,r.isNull=i,r.isNullOrUndefined=o,r.isNumber=a,r.isString=s,r.isSymbol=u,r.isUndefined=l,r.isRegExp=f,r.isObject=c,r.isDate=h,r.isError=d,r.isFunction=p,r.isPrimitive=g,r.isBuffer=m}).call(this,e("buffer").Buffer)},{buffer:28}],51:[function(e,t){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],52:[function(e,t,r){function n(e){if(e&&!u(e))throw new Error("Unknown encoding: "+e)}function i(e){return e.toString(this.encoding)}function o(e){var t=this.charReceived=e.length%2;return this.charLength=t?2:0,t}function a(e){var t=this.charReceived=e.length%3;return this.charLength=t?3:0,t}var s=e("buffer").Buffer,u=s.isEncoding||function(e){switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},l=r.StringDecoder=function(e){switch(this.encoding=(e||"utf8").toLowerCase().replace(/[-_]/,""),n(e),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=o;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=a;break;default:return void(this.write=i)}this.charBuffer=new s(6),this.charReceived=0,this.charLength=0};l.prototype.write=function(e){for(var t="",r=0;this.charLength;){var n=e.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:e.length;if(e.copy(this.charBuffer,this.charReceived,r,n),this.charReceived+=n-r,r=n,this.charReceived<this.charLength)return"";t=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var i=t.charCodeAt(t.length-1);if(!(i>=55296&&56319>=i)){if(this.charReceived=this.charLength=0,n==e.length)return t;e=e.slice(n,e.length);break}this.charLength+=this.surrogateSize,t=""}var o=this.detectIncompleteChar(e),a=e.length;this.charLength&&(e.copy(this.charBuffer,0,e.length-o,a),this.charReceived=o,a-=o),t+=e.toString(this.encoding,0,a);var a=t.length-1,i=t.charCodeAt(a);if(i>=55296&&56319>=i){var s=this.surrogateSize;return this.charLength+=s,this.charReceived+=s,this.charBuffer.copy(this.charBuffer,s,0,s),this.charBuffer.write(t.charAt(t.length-1),this.encoding),t.substring(0,a)}return t},l.prototype.detectIncompleteChar=function(e){for(var t=e.length>=3?3:e.length;t>0;t--){var r=e[e.length-t];if(1==t&&r>>5==6){this.charLength=2;break}if(2>=t&&r>>4==14){this.charLength=3;break}if(3>=t&&r>>3==30){this.charLength=4;break}}return t},l.prototype.end=function(e){var t="";if(e&&e.length&&(t=this.write(e)),this.charReceived){var r=this.charReceived,n=this.charBuffer,i=this.encoding;t+=n.slice(0,r).toString(i)}return t}},{buffer:28}],53:[function(e,t){t.exports=e("./lib/_stream_passthrough.js")},{"./lib/_stream_passthrough.js":46}],54:[function(e,t,r){r=t.exports=e("./lib/_stream_readable.js"),r.Readable=r,r.Writable=e("./lib/_stream_writable.js"),r.Duplex=e("./lib/_stream_duplex.js"),r.Transform=e("./lib/_stream_transform.js"),r.PassThrough=e("./lib/_stream_passthrough.js")},{"./lib/_stream_duplex.js":45,"./lib/_stream_passthrough.js":46,"./lib/_stream_readable.js":47,"./lib/_stream_transform.js":48,"./lib/_stream_writable.js":49}],55:[function(e,t){t.exports=e("./lib/_stream_transform.js")},{"./lib/_stream_transform.js":48}],56:[function(e,t){t.exports=e("./lib/_stream_writable.js")},{"./lib/_stream_writable.js":49}],57:[function(e,t){function r(){n.call(this)}t.exports=r;var n=e("events").EventEmitter,i=e("inherits");i(r,n),r.Readable=e("readable-stream/readable.js"),r.Writable=e("readable-stream/writable.js"),r.Duplex=e("readable-stream/duplex.js"),r.Transform=e("readable-stream/transform.js"),r.PassThrough=e("readable-stream/passthrough.js"),r.Stream=r,r.prototype.pipe=function(e,t){function r(t){e.writable&&!1===e.write(t)&&l.pause&&l.pause()}function i(){l.readable&&l.resume&&l.resume()}function o(){f||(f=!0,e.end())}function a(){f||(f=!0,"function"==typeof e.destroy&&e.destroy())}function s(e){if(u(),0===n.listenerCount(this,"error"))throw e}function u(){l.removeListener("data",r),e.removeListener("drain",i),l.removeListener("end",o),l.removeListener("close",a),l.removeListener("error",s),e.removeListener("error",s),l.removeListener("end",u),l.removeListener("close",u),e.removeListener("close",u)}var l=this;l.on("data",r),e.on("drain",i),e._isStdio||t&&t.end===!1||(l.on("end",o),l.on("close",a));var f=!1;return l.on("error",s),e.on("error",s),l.on("end",u),l.on("close",u),e.on("close",u),e.emit("pipe",l),e}},{events:31,inherits:37,"readable-stream/duplex.js":44,"readable-stream/passthrough.js":53,"readable-stream/readable.js":54,"readable-stream/transform.js":55,"readable-stream/writable.js":56}],58:[function(e,t,r){function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(e,t,r){if(e&&l(e)&&e instanceof n)return e;var i=new n;return i.parse(e,t,r),i}function o(e){return u(e)&&(e=i(e)),e instanceof n?e.format():n.prototype.format.call(e)}function a(e,t){return i(e,!1,!0).resolve(t)}function s(e,t){return e?i(e,!1,!0).resolveObject(t):t}function u(e){return"string"==typeof e}function l(e){return"object"==typeof e&&null!==e}function f(e){return null===e}function c(e){return null==e}var h=e("punycode");r.parse=i,r.resolve=a,r.resolveObject=s,r.format=o,r.Url=n;var d=/^([a-z0-9.+-]+:)/i,p=/:[0-9]*$/,g=["<",">",'"',"`"," ","\r","\n","	"],m=["{","}","|","\\","^","`"].concat(g),v=["'"].concat(m),b=["%","/","?",";","#"].concat(v),y=["/","?","#"],w=255,x=/^[a-z0-9A-Z_-]{0,63}$/,k=/^([a-z0-9A-Z_-]{0,63})(.*)$/,_={javascript:!0,"javascript:":!0},O={javascript:!0,"javascript:":!0},E={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},S=e("querystring");n.prototype.parse=function(e,t,r){if(!u(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e;n=n.trim();var i=d.exec(n);if(i){i=i[0];var o=i.toLowerCase();this.protocol=o,n=n.substr(i.length)}if(r||i||n.match(/^\/\/[^@\/]+@[^@\/]+/)){var a="//"===n.substr(0,2);!a||i&&O[i]||(n=n.substr(2),this.slashes=!0)}if(!O[i]&&(a||i&&!E[i])){for(var s=-1,l=0;l<y.length;l++){var f=n.indexOf(y[l]);-1!==f&&(-1===s||s>f)&&(s=f)}var c,p;p=-1===s?n.lastIndexOf("@"):n.lastIndexOf("@",s),-1!==p&&(c=n.slice(0,p),n=n.slice(p+1),this.auth=decodeURIComponent(c)),s=-1;for(var l=0;l<b.length;l++){var f=n.indexOf(b[l]);-1!==f&&(-1===s||s>f)&&(s=f)}-1===s&&(s=n.length),this.host=n.slice(0,s),n=n.slice(s),this.parseHost(),this.hostname=this.hostname||"";var g="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!g)for(var m=this.hostname.split(/\./),l=0,I=m.length;I>l;l++){var A=m[l];if(A&&!A.match(x)){for(var j="",C=0,L=A.length;L>C;C++)j+=A.charCodeAt(C)>127?"x":A[C];if(!j.match(x)){var B=m.slice(0,l),R=m.slice(l+1),V=A.match(k);V&&(B.push(V[1]),R.unshift(V[2])),R.length&&(n="/"+R.join(".")+n),this.hostname=B.join(".");break}}}if(this.hostname=this.hostname.length>w?"":this.hostname.toLowerCase(),!g){for(var T=this.hostname.split("."),M=[],l=0;l<T.length;++l){var U=T[l];M.push(U.match(/[^A-Za-z0-9_-]/)?"xn--"+h.encode(U):U)}this.hostname=M.join(".")}var z=this.port?":"+this.port:"",D=this.hostname||"";this.host=D+z,this.href+=this.host,g&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==n[0]&&(n="/"+n))}if(!_[o])for(var l=0,I=v.length;I>l;l++){var q=v[l],F=encodeURIComponent(q);F===q&&(F=escape(q)),n=n.split(q).join(F)}var P=n.indexOf("#");-1!==P&&(this.hash=n.substr(P),n=n.slice(0,P));var N=n.indexOf("?");if(-1!==N?(this.search=n.substr(N),this.query=n.substr(N+1),t&&(this.query=S.parse(this.query)),n=n.slice(0,N)):t&&(this.search="",this.query={}),n&&(this.pathname=n),E[o]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var z=this.pathname||"",U=this.search||"";this.path=z+U}return this.href=this.format(),this},n.prototype.format=function(){var e=this.auth||"";e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",i=!1,o="";this.host?i=e+this.host:this.hostname&&(i=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&l(this.query)&&Object.keys(this.query).length&&(o=S.stringify(this.query));var a=this.search||o&&"?"+o||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||E[t])&&i!==!1?(i="//"+(i||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):i||(i=""),n&&"#"!==n.charAt(0)&&(n="#"+n),a&&"?"!==a.charAt(0)&&(a="?"+a),r=r.replace(/[?#]/g,function(e){return encodeURIComponent(e)}),a=a.replace("#","%23"),t+i+r+a+n},n.prototype.resolve=function(e){return this.resolveObject(i(e,!1,!0)).format()},n.prototype.resolveObject=function(e){if(u(e)){var t=new n;t.parse(e,!1,!0),e=t}var r=new n;if(Object.keys(this).forEach(function(e){r[e]=this[e]},this),r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol)return Object.keys(e).forEach(function(t){"protocol"!==t&&(r[t]=e[t])}),E[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r;if(e.protocol&&e.protocol!==r.protocol){if(!E[e.protocol])return Object.keys(e).forEach(function(t){r[t]=e[t]}),r.href=r.format(),r;if(r.protocol=e.protocol,e.host||O[e.protocol])r.pathname=e.pathname;else{for(var i=(e.pathname||"").split("/");i.length&&!(e.host=i.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==i[0]&&i.unshift(""),i.length<2&&i.unshift(""),r.pathname=i.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var o=r.pathname||"",a=r.search||"";r.path=o+a}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var s=r.pathname&&"/"===r.pathname.charAt(0),l=e.host||e.pathname&&"/"===e.pathname.charAt(0),h=l||s||r.host&&e.pathname,d=h,p=r.pathname&&r.pathname.split("/")||[],i=e.pathname&&e.pathname.split("/")||[],g=r.protocol&&!E[r.protocol];if(g&&(r.hostname="",r.port=null,r.host&&(""===p[0]?p[0]=r.host:p.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===i[0]?i[0]=e.host:i.unshift(e.host)),e.host=null),h=h&&(""===i[0]||""===p[0])),l)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,p=i;else if(i.length)p||(p=[]),p.pop(),p=p.concat(i),r.search=e.search,r.query=e.query;else if(!c(e.search)){if(g){r.hostname=r.host=p.shift();var m=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;m&&(r.auth=m.shift(),r.host=r.hostname=m.shift())}return r.search=e.search,r.query=e.query,f(r.pathname)&&f(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!p.length)return r.pathname=null,r.path=r.search?"/"+r.search:null,r.href=r.format(),r;for(var v=p.slice(-1)[0],b=(r.host||e.host)&&("."===v||".."===v)||""===v,y=0,w=p.length;w>=0;w--)v=p[w],"."==v?p.splice(w,1):".."===v?(p.splice(w,1),y++):y&&(p.splice(w,1),y--);if(!h&&!d)for(;y--;y)p.unshift("..");!h||""===p[0]||p[0]&&"/"===p[0].charAt(0)||p.unshift(""),b&&"/"!==p.join("/").substr(-1)&&p.push("");var x=""===p[0]||p[0]&&"/"===p[0].charAt(0);if(g){r.hostname=r.host=x?"":p.length?p.shift():"";var m=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;m&&(r.auth=m.shift(),r.host=r.hostname=m.shift())}return h=h||r.host&&p.length,h&&!x&&p.unshift(""),p.length?r.pathname=p.join("/"):(r.pathname=null,r.path=null),f(r.pathname)&&f(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var e=this.host,t=p.exec(e);t&&(t=t[0],":"!==t&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},{punycode:40,querystring:43}],59:[function(e,t){t.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},{}],60:[function(e,t,r){(function(t,n){function i(e,t){var n={seen:[],stylize:a};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),g(t)?n.showHidden=t:t&&r._extend(n,t),x(n.showHidden)&&(n.showHidden=!1),x(n.depth)&&(n.depth=2),x(n.colors)&&(n.colors=!1),x(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=o),u(n,e,n.depth)}function o(e,t){var r=i.styles[t];return r?"["+i.colors[r][0]+"m"+e+"["+i.colors[r][1]+"m":e}function a(e){return e}function s(e){var t={};return e.forEach(function(e){t[e]=!0}),t}function u(e,t,n){if(e.customInspect&&t&&S(t.inspect)&&t.inspect!==r.inspect&&(!t.constructor||t.constructor.prototype!==t)){var i=t.inspect(n,e);return y(i)||(i=u(e,i,n)),i}var o=l(e,t);if(o)return o;var a=Object.keys(t),g=s(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(t)),E(t)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return f(t);if(0===a.length){if(S(t)){var m=t.name?": "+t.name:"";return e.stylize("[Function"+m+"]","special")}if(k(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(O(t))return e.stylize(Date.prototype.toString.call(t),"date");if(E(t))return f(t)}var v="",b=!1,w=["{","}"];if(p(t)&&(b=!0,w=["[","]"]),S(t)){var x=t.name?": "+t.name:"";v=" [Function"+x+"]"}if(k(t)&&(v=" "+RegExp.prototype.toString.call(t)),O(t)&&(v=" "+Date.prototype.toUTCString.call(t)),E(t)&&(v=" "+f(t)),0===a.length&&(!b||0==t.length))return w[0]+v+w[1];if(0>n)return k(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special");e.seen.push(t);var _;return _=b?c(e,t,n,g,a):a.map(function(r){return h(e,t,n,g,r,b)}),e.seen.pop(),d(_,v,w)}function l(e,t){if(x(t))return e.stylize("undefined","undefined");if(y(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return b(t)?e.stylize(""+t,"number"):g(t)?e.stylize(""+t,"boolean"):m(t)?e.stylize("null","null"):void 0}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function c(e,t,r,n,i){for(var o=[],a=0,s=t.length;s>a;++a)o.push(L(t,String(a))?h(e,t,r,n,String(a),!0):"");return i.forEach(function(i){i.match(/^\d+$/)||o.push(h(e,t,r,n,i,!0))}),o}function h(e,t,r,n,i,o){var a,s,l;if(l=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]},l.get?s=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(s=e.stylize("[Setter]","special")),L(n,i)||(a="["+i+"]"),s||(e.seen.indexOf(l.value)<0?(s=m(r)?u(e,l.value,null):u(e,l.value,r-1),s.indexOf("\n")>-1&&(s=o?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n"))):s=e.stylize("[Circular]","special")),x(a)){if(o&&i.match(/^\d+$/))return s;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+s}function d(e,t,r){var n=0,i=e.reduce(function(e,t){return n++,t.indexOf("\n")>=0&&n++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}function p(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function m(e){return null===e}function v(e){return null==e}function b(e){return"number"==typeof e}function y(e){return"string"==typeof e}function w(e){return"symbol"==typeof e}function x(e){return void 0===e}function k(e){return _(e)&&"[object RegExp]"===A(e)}function _(e){return"object"==typeof e&&null!==e}function O(e){return _(e)&&"[object Date]"===A(e)}function E(e){return _(e)&&("[object Error]"===A(e)||e instanceof Error)}function S(e){return"function"==typeof e}function I(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function A(e){return Object.prototype.toString.call(e)}function j(e){return 10>e?"0"+e.toString(10):e.toString(10)}function C(){var e=new Date,t=[j(e.getHours()),j(e.getMinutes()),j(e.getSeconds())].join(":");return[e.getDate(),T[e.getMonth()],t].join(" ")}function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var B=/%[sdj%]/g;r.format=function(e){if(!y(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(i(arguments[r]));return t.join(" ")}for(var r=1,n=arguments,o=n.length,a=String(e).replace(B,function(e){if("%%"===e)return"%";if(r>=o)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return e}}),s=n[r];o>r;s=n[++r])a+=m(s)||!_(s)?" "+s:" "+i(s);return a},r.deprecate=function(e,i){function o(){if(!a){if(t.throwDeprecation)throw new Error(i);t.traceDeprecation?console.trace(i):console.error(i),a=!0}return e.apply(this,arguments)}if(x(n.process))return function(){return r.deprecate(e,i).apply(this,arguments)};if(t.noDeprecation===!0)return e;var a=!1;return o};var R,V={};r.debuglog=function(e){if(x(R)&&(R=t.env.NODE_DEBUG||""),e=e.toUpperCase(),!V[e])if(new RegExp("\\b"+e+"\\b","i").test(R)){var n=t.pid;V[e]=function(){var t=r.format.apply(r,arguments);console.error("%s %d: %s",e,n,t)}}else V[e]=function(){};return V[e]},r.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},r.isArray=p,r.isBoolean=g,r.isNull=m,r.isNullOrUndefined=v,r.isNumber=b,r.isString=y,r.isSymbol=w,r.isUndefined=x,r.isRegExp=k,r.isObject=_,r.isDate=O,r.isError=E,r.isFunction=S,r.isPrimitive=I,r.isBuffer=e("./support/isBuffer");var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];r.log=function(){console.log("%s - %s",C(),r.format.apply(r,arguments))},r.inherits=e("inherits"),r._extend=function(e,t){if(!t||!_(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e}}).call(this,e("Zbi7gb"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":59,Zbi7gb:39,inherits:37}]},{},[1])(1)});
// This is CodeMirror (http://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    module.exports = mod();
  else if (typeof define == "function" && define.amd) // AMD
    return define([], mod);
  else // Plain browser env
    this.CodeMirror = mod();
})(function() {
  "use strict";

  // BROWSER SNIFFING

  // Kludges for bugs and behavior differences that can't be feature
  // detected are enabled based on userAgent etc sniffing.

  var gecko = /gecko\/\d/i.test(navigator.userAgent);
  // ie_uptoN means Internet Explorer version N or lower
  var ie_upto10 = /MSIE \d/.test(navigator.userAgent);
  var ie_upto7 = ie_upto10 && (document.documentMode == null || document.documentMode < 8);
  var ie_upto8 = ie_upto10 && (document.documentMode == null || document.documentMode < 9);
  var ie_upto9 = ie_upto10 && (document.documentMode == null || document.documentMode < 10);
  var ie_11up = /Trident\/([7-9]|\d{2,})\./.test(navigator.userAgent);
  var ie = ie_upto10 || ie_11up;
  var webkit = /WebKit\//.test(navigator.userAgent);
  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(navigator.userAgent);
  var chrome = /Chrome\//.test(navigator.userAgent);
  var presto = /Opera\//.test(navigator.userAgent);
  var safari = /Apple Computer/.test(navigator.vendor);
  var khtml = /KHTML\//.test(navigator.userAgent);
  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent);
  var phantom = /PhantomJS/.test(navigator.userAgent);

  var ios = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent);
  // This is woefully incomplete. Suggestions for alternative methods welcome.
  var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent);
  var mac = ios || /Mac/.test(navigator.platform);
  var windows = /win/i.test(navigator.platform);

  var presto_version = presto && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
  if (presto_version) presto_version = Number(presto_version[1]);
  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
  var captureRightClick = gecko || (ie && !ie_upto8);

  // Optimize some code when these features are not used.
  var sawReadOnlySpans = false, sawCollapsedSpans = false;

  // EDITOR CONSTRUCTOR

  // A CodeMirror instance represents an editor. This is the object
  // that user code is usually dealing with.

  function CodeMirror(place, options) {
    if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);

    this.options = options = options || {};
    // Determine effective options based on given values and defaults.
    copyObj(defaults, options, false);
    setGuttersForLineNumbers(options);

    var doc = options.value;
    if (typeof doc == "string") doc = new Doc(doc, options.mode);
    this.doc = doc;

    var display = this.display = new Display(place, doc);
    display.wrapper.CodeMirror = this;
    updateGutters(this);
    themeChanged(this);
    if (options.lineWrapping)
      this.display.wrapper.className += " CodeMirror-wrap";
    if (options.autofocus && !mobile) focusInput(this);

    this.state = {
      keyMaps: [],  // stores maps added by addKeyMap
      overlays: [], // highlighting overlays, as added by addOverlay
      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
      overwrite: false, focused: false,
      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
      pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in readInput
      draggingText: false,
      highlight: new Delayed() // stores highlight worker timeout
    };

    // Override magic textarea content restore that IE sometimes does
    // on our hidden textarea on reload
    if (ie_upto10) setTimeout(bind(resetInput, this, true), 20);

    registerEventHandlers(this);

    var cm = this;
    runInOp(this, function() {
      cm.curOp.forceUpdate = true;
      attachDoc(cm, doc);

      if ((options.autofocus && !mobile) || activeElt() == display.input)
        setTimeout(bind(onFocus, cm), 20);
      else
        onBlur(cm);

      for (var opt in optionHandlers) if (optionHandlers.hasOwnProperty(opt))
        optionHandlers[opt](cm, options[opt], Init);
      for (var i = 0; i < initHooks.length; ++i) initHooks[i](cm);
    });
  }

  // DISPLAY CONSTRUCTOR

  // The display handles the DOM integration, both for input reading
  // and content drawing. It holds references to DOM nodes and
  // display-related state.

  function Display(place, doc) {
    var d = this;

    // The semihidden textarea that is focused when the editor is
    // focused, and receives input.
    var input = d.input = elt("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
    // The textarea is kept positioned near the cursor to prevent the
    // fact that it'll be scrolled into view on input from scrolling
    // our fake cursor out of view. On webkit, when wrap=off, paste is
    // very slow. So make the area wide instead.
    if (webkit) input.style.width = "1000px";
    else input.setAttribute("wrap", "off");
    // If border: 0; -- iOS fails to open keyboard (issue #1287)
    if (ios) input.style.border = "1px solid black";
    input.setAttribute("autocorrect", "off"); input.setAttribute("autocapitalize", "off"); input.setAttribute("spellcheck", "false");

    // Wraps and hides input textarea
    d.inputDiv = elt("div", [input], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
    // The fake scrollbar elements.
    d.scrollbarH = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
    d.scrollbarV = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
    // Covers bottom-right square when both scrollbars are present.
    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
    // Covers bottom of gutter when coverGutterNextToScrollbar is on
    // and h scrollbar is present.
    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
    // Will contain the actual code, positioned to cover the viewport.
    d.lineDiv = elt("div", null, "CodeMirror-code");
    // Elements are added to these to represent selection and cursors.
    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
    d.cursorDiv = elt("div", null, "CodeMirror-cursors");
    // A visibility: hidden element used to find the size of things.
    d.measure = elt("div", null, "CodeMirror-measure");
    // When lines outside of the viewport are measured, they are drawn in this.
    d.lineMeasure = elt("div", null, "CodeMirror-measure");
    // Wraps everything that needs to exist inside the vertically-padded coordinate system
    d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
                      null, "position: relative; outline: none");
    // Moved around its parent to cover visible view.
    d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative");
    // Set to the height of the document, allowing scrolling.
    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
    // Behavior of elts with overflow: auto and padding is
    // inconsistent across browsers. This is used to ensure the
    // scrollable area is big enough.
    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerCutOff + "px; width: 1px;");
    // Will contain the gutters, if any.
    d.gutters = elt("div", null, "CodeMirror-gutters");
    d.lineGutter = null;
    // Actual scrollable element.
    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
    d.scroller.setAttribute("tabIndex", "-1");
    // The element in which the editor lives.
    d.wrapper = elt("div", [d.inputDiv, d.scrollbarH, d.scrollbarV,
                            d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

    // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
    if (ie_upto7) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
    // Needed to hide big blue blinking cursor on Mobile Safari
    if (ios) input.style.width = "0px";
    if (!webkit) d.scroller.draggable = true;
    // Needed to handle Tab key in KHTML
    if (khtml) { d.inputDiv.style.height = "1px"; d.inputDiv.style.position = "absolute"; }
    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
    if (ie_upto7) d.scrollbarH.style.minHeight = d.scrollbarV.style.minWidth = "18px";

    if (place.appendChild) place.appendChild(d.wrapper);
    else place(d.wrapper);

    // Current rendered range (may be bigger than the view window).
    d.viewFrom = d.viewTo = doc.first;
    // Information about the rendered lines.
    d.view = [];
    // Holds info about a single rendered line when it was rendered
    // for measurement, while not in view.
    d.externalMeasured = null;
    // Empty space (in pixels) above the view
    d.viewOffset = 0;
    d.lastSizeC = 0;
    d.updateLineNumbers = null;

    // Used to only resize the line number gutter when necessary (when
    // the amount of lines crosses a boundary that makes its width change)
    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
    // See readInput and resetInput
    d.prevInput = "";
    // Set to true when a non-horizontal-scrolling line widget is
    // added. As an optimization, line widget aligning is skipped when
    // this is false.
    d.alignWidgets = false;
    // Flag that indicates whether we expect input to appear real soon
    // now (after some event like 'keypress' or 'input') and are
    // polling intensively.
    d.pollingFast = false;
    // Self-resetting timeout for the poller
    d.poll = new Delayed();

    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

    // Tracks when resetInput has punted to just putting a short
    // string into the textarea instead of the full selection.
    d.inaccurateSelection = false;

    // Tracks the maximum line length so that the horizontal scrollbar
    // can be kept static when scrolling.
    d.maxLine = null;
    d.maxLineLength = 0;
    d.maxLineChanged = false;

    // Used for measuring wheel scrolling granularity
    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

    // True when shift is held down.
    d.shift = false;
  }

  // STATE UPDATES

  // Used to get the editor into a consistent state again when options change.

  function loadMode(cm) {
    cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption);
    resetModeState(cm);
  }

  function resetModeState(cm) {
    cm.doc.iter(function(line) {
      if (line.stateAfter) line.stateAfter = null;
      if (line.styles) line.styles = null;
    });
    cm.doc.frontier = cm.doc.first;
    startWorker(cm, 100);
    cm.state.modeGen++;
    if (cm.curOp) regChange(cm);
  }

  function wrappingChanged(cm) {
    if (cm.options.lineWrapping) {
      addClass(cm.display.wrapper, "CodeMirror-wrap");
      cm.display.sizer.style.minWidth = "";
    } else {
      rmClass(cm.display.wrapper, "CodeMirror-wrap");
      findMaxLine(cm);
    }
    estimateLineHeights(cm);
    regChange(cm);
    clearCaches(cm);
    setTimeout(function(){updateScrollbars(cm);}, 100);
  }

  // Returns a function that estimates the height of a line, to use as
  // first approximation until the line becomes visible (and is thus
  // properly measurable).
  function estimateHeight(cm) {
    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
    return function(line) {
      if (lineIsHidden(cm.doc, line)) return 0;

      var widgetsHeight = 0;
      if (line.widgets) for (var i = 0; i < line.widgets.length; i++) {
        if (line.widgets[i].height) widgetsHeight += line.widgets[i].height;
      }

      if (wrapping)
        return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
      else
        return widgetsHeight + th;
    };
  }

  function estimateLineHeights(cm) {
    var doc = cm.doc, est = estimateHeight(cm);
    doc.iter(function(line) {
      var estHeight = est(line);
      if (estHeight != line.height) updateLineHeight(line, estHeight);
    });
  }

  function keyMapChanged(cm) {
    var map = keyMap[cm.options.keyMap], style = map.style;
    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-keymap-\S+/g, "") +
      (style ? " cm-keymap-" + style : "");
  }

  function themeChanged(cm) {
    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
    clearCaches(cm);
  }

  function guttersChanged(cm) {
    updateGutters(cm);
    regChange(cm);
    setTimeout(function(){alignHorizontally(cm);}, 20);
  }

  // Rebuild the gutter elements, ensure the margin to the left of the
  // code matches their width.
  function updateGutters(cm) {
    var gutters = cm.display.gutters, specs = cm.options.gutters;
    removeChildren(gutters);
    for (var i = 0; i < specs.length; ++i) {
      var gutterClass = specs[i];
      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
      if (gutterClass == "CodeMirror-linenumbers") {
        cm.display.lineGutter = gElt;
        gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
      }
    }
    gutters.style.display = i ? "" : "none";
    updateGutterSpace(cm);
  }

  function updateGutterSpace(cm) {
    var width = cm.display.gutters.offsetWidth;
    cm.display.sizer.style.marginLeft = width + "px";
    cm.display.scrollbarH.style.left = cm.options.fixedGutter ? width + "px" : 0;
  }

  // Compute the character length of a line, taking into account
  // collapsed ranges (see markText) that might hide parts, and join
  // other lines onto it.
  function lineLength(line) {
    if (line.height == 0) return 0;
    var len = line.text.length, merged, cur = line;
    while (merged = collapsedSpanAtStart(cur)) {
      var found = merged.find(0, true);
      cur = found.from.line;
      len += found.from.ch - found.to.ch;
    }
    cur = line;
    while (merged = collapsedSpanAtEnd(cur)) {
      var found = merged.find(0, true);
      len -= cur.text.length - found.from.ch;
      cur = found.to.line;
      len += cur.text.length - found.to.ch;
    }
    return len;
  }

  // Find the longest line in the document.
  function findMaxLine(cm) {
    var d = cm.display, doc = cm.doc;
    d.maxLine = getLine(doc, doc.first);
    d.maxLineLength = lineLength(d.maxLine);
    d.maxLineChanged = true;
    doc.iter(function(line) {
      var len = lineLength(line);
      if (len > d.maxLineLength) {
        d.maxLineLength = len;
        d.maxLine = line;
      }
    });
  }

  // Make sure the gutters options contains the element
  // "CodeMirror-linenumbers" when the lineNumbers option is true.
  function setGuttersForLineNumbers(options) {
    var found = indexOf(options.gutters, "CodeMirror-linenumbers");
    if (found == -1 && options.lineNumbers) {
      options.gutters = options.gutters.concat(["CodeMirror-linenumbers"]);
    } else if (found > -1 && !options.lineNumbers) {
      options.gutters = options.gutters.slice(0);
      options.gutters.splice(found, 1);
    }
  }

  // SCROLLBARS

  // Prepare DOM reads needed to update the scrollbars. Done in one
  // shot to minimize update/measure roundtrips.
  function measureForScrollbars(cm) {
    var scroll = cm.display.scroller;
    return {
      clientHeight: scroll.clientHeight,
      barHeight: cm.display.scrollbarV.clientHeight,
      scrollWidth: scroll.scrollWidth, clientWidth: scroll.clientWidth,
      barWidth: cm.display.scrollbarH.clientWidth,
      docHeight: Math.round(cm.doc.height + paddingVert(cm.display))
    };
  }

  // Re-synchronize the fake scrollbars with the actual size of the
  // content.
  function updateScrollbars(cm, measure) {
    if (!measure) measure = measureForScrollbars(cm);
    var d = cm.display;
    var scrollHeight = measure.docHeight + scrollerCutOff;
    var needsH = measure.scrollWidth > measure.clientWidth;
    var needsV = scrollHeight > measure.clientHeight;
    if (needsV) {
      d.scrollbarV.style.display = "block";
      d.scrollbarV.style.bottom = needsH ? scrollbarWidth(d.measure) + "px" : "0";
      // A bug in IE8 can cause this value to be negative, so guard it.
      d.scrollbarV.firstChild.style.height =
        Math.max(0, scrollHeight - measure.clientHeight + (measure.barHeight || d.scrollbarV.clientHeight)) + "px";
    } else {
      d.scrollbarV.style.display = "";
      d.scrollbarV.firstChild.style.height = "0";
    }
    if (needsH) {
      d.scrollbarH.style.display = "block";
      d.scrollbarH.style.right = needsV ? scrollbarWidth(d.measure) + "px" : "0";
      d.scrollbarH.firstChild.style.width =
        (measure.scrollWidth - measure.clientWidth + (measure.barWidth || d.scrollbarH.clientWidth)) + "px";
    } else {
      d.scrollbarH.style.display = "";
      d.scrollbarH.firstChild.style.width = "0";
    }
    if (needsH && needsV) {
      d.scrollbarFiller.style.display = "block";
      d.scrollbarFiller.style.height = d.scrollbarFiller.style.width = scrollbarWidth(d.measure) + "px";
    } else d.scrollbarFiller.style.display = "";
    if (needsH && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
      d.gutterFiller.style.display = "block";
      d.gutterFiller.style.height = scrollbarWidth(d.measure) + "px";
      d.gutterFiller.style.width = d.gutters.offsetWidth + "px";
    } else d.gutterFiller.style.display = "";

    if (!cm.state.checkedOverlayScrollbar && measure.clientHeight > 0) {
      if (scrollbarWidth(d.measure) === 0) {
        var w = mac && !mac_geMountainLion ? "12px" : "18px";
        d.scrollbarV.style.minWidth = d.scrollbarH.style.minHeight = w;
        var barMouseDown = function(e) {
          if (e_target(e) != d.scrollbarV && e_target(e) != d.scrollbarH)
            operation(cm, onMouseDown)(e);
        };
        on(d.scrollbarV, "mousedown", barMouseDown);
        on(d.scrollbarH, "mousedown", barMouseDown);
      }
      cm.state.checkedOverlayScrollbar = true;
    }
  }

  // Compute the lines that are visible in a given viewport (defaults
  // the the current scroll position). viewPort may contain top,
  // height, and ensure (see op.scrollToPos) properties.
  function visibleLines(display, doc, viewPort) {
    var top = viewPort && viewPort.top != null ? viewPort.top : display.scroller.scrollTop;
    top = Math.floor(top - paddingTop(display));
    var bottom = viewPort && viewPort.bottom != null ? viewPort.bottom : top + display.wrapper.clientHeight;

    var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
    // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
    // forces those lines into the viewport (if possible).
    if (viewPort && viewPort.ensure) {
      var ensureFrom = viewPort.ensure.from.line, ensureTo = viewPort.ensure.to.line;
      if (ensureFrom < from)
        return {from: ensureFrom,
                to: lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight)};
      if (Math.min(ensureTo, doc.lastLine()) >= to)
        return {from: lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight),
                to: ensureTo};
    }
    return {from: from, to: to};
  }

  // LINE NUMBERS

  // Re-align line numbers and gutter marks to compensate for
  // horizontal scrolling.
  function alignHorizontally(cm) {
    var display = cm.display, view = display.view;
    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
    var gutterW = display.gutters.offsetWidth, left = comp + "px";
    for (var i = 0; i < view.length; i++) if (!view[i].hidden) {
      if (cm.options.fixedGutter && view[i].gutter)
        view[i].gutter.style.left = left;
      var align = view[i].alignable;
      if (align) for (var j = 0; j < align.length; j++)
        align[j].style.left = left;
    }
    if (cm.options.fixedGutter)
      display.gutters.style.left = (comp + gutterW) + "px";
  }

  // Used to ensure that the line number gutter is still the right
  // size for the current document size. Returns true when an update
  // is needed.
  function maybeUpdateLineNumberWidth(cm) {
    if (!cm.options.lineNumbers) return false;
    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
    if (last.length != display.lineNumChars) {
      var test = display.measure.appendChild(elt("div", [elt("div", last)],
                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
      display.lineGutter.style.width = "";
      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding);
      display.lineNumWidth = display.lineNumInnerWidth + padding;
      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
      display.lineGutter.style.width = display.lineNumWidth + "px";
      updateGutterSpace(cm);
      return true;
    }
    return false;
  }

  function lineNumberFor(options, i) {
    return String(options.lineNumberFormatter(i + options.firstLineNumber));
  }

  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
  // but using getBoundingClientRect to get a sub-pixel-accurate
  // result.
  function compensateForHScroll(display) {
    return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
  }

  // DISPLAY DRAWING

  // Updates the display, selection, and scrollbars, using the
  // information in display.view to find out which nodes are no longer
  // up-to-date. Tries to bail out early when no changes are needed,
  // unless forced is true.
  // Returns true if an actual update happened, false otherwise.
  function updateDisplay(cm, viewPort, forced) {
    var oldFrom = cm.display.viewFrom, oldTo = cm.display.viewTo, updated;
    var visible = visibleLines(cm.display, cm.doc, viewPort);
    for (var first = true;; first = false) {
      var oldWidth = cm.display.scroller.clientWidth;
      if (!updateDisplayInner(cm, visible, forced)) break;
      updated = true;

      // If the max line changed since it was last measured, measure it,
      // and ensure the document's width matches it.
      if (cm.display.maxLineChanged && !cm.options.lineWrapping)
        adjustContentWidth(cm);

      var barMeasure = measureForScrollbars(cm);
      updateSelection(cm);
      setDocumentHeight(cm, barMeasure);
      updateScrollbars(cm, barMeasure);
      if (webkit && cm.options.lineWrapping)
        checkForWebkitWidthBug(cm, barMeasure); // (Issue #2420)
      if (first && cm.options.lineWrapping && oldWidth != cm.display.scroller.clientWidth) {
        forced = true;
        continue;
      }
      forced = false;

      // Clip forced viewport to actual scrollable area.
      if (viewPort && viewPort.top != null)
        viewPort = {top: Math.min(barMeasure.docHeight - scrollerCutOff - barMeasure.clientHeight, viewPort.top)};
      // Updated line heights might result in the drawn area not
      // actually covering the viewport. Keep looping until it does.
      visible = visibleLines(cm.display, cm.doc, viewPort);
      if (visible.from >= cm.display.viewFrom && visible.to <= cm.display.viewTo)
        break;
    }

    cm.display.updateLineNumbers = null;
    if (updated) {
      signalLater(cm, "update", cm);
      if (cm.display.viewFrom != oldFrom || cm.display.viewTo != oldTo)
        signalLater(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
    }
    return updated;
  }

  // Does the actual updating of the line display. Bails out
  // (returning false) when there is nothing to be done and forced is
  // false.
  function updateDisplayInner(cm, visible, forced) {
    var display = cm.display, doc = cm.doc;
    if (!display.wrapper.offsetWidth) {
      resetView(cm);
      return;
    }

    // Bail out if the visible area is already rendered and nothing changed.
    if (!forced && visible.from >= display.viewFrom && visible.to <= display.viewTo &&
        countDirtyView(cm) == 0)
      return;

    if (maybeUpdateLineNumberWidth(cm))
      resetView(cm);
    var dims = getDimensions(cm);

    // Compute a suitable new viewport (from & to)
    var end = doc.first + doc.size;
    var from = Math.max(visible.from - cm.options.viewportMargin, doc.first);
    var to = Math.min(end, visible.to + cm.options.viewportMargin);
    if (display.viewFrom < from && from - display.viewFrom < 20) from = Math.max(doc.first, display.viewFrom);
    if (display.viewTo > to && display.viewTo - to < 20) to = Math.min(end, display.viewTo);
    if (sawCollapsedSpans) {
      from = visualLineNo(cm.doc, from);
      to = visualLineEndNo(cm.doc, to);
    }

    var different = from != display.viewFrom || to != display.viewTo ||
      display.lastSizeC != display.wrapper.clientHeight;
    adjustView(cm, from, to);

    display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
    // Position the mover div to align with the current scroll position
    cm.display.mover.style.top = display.viewOffset + "px";

    var toUpdate = countDirtyView(cm);
    if (!different && toUpdate == 0 && !forced) return;

    // For big changes, we hide the enclosing element during the
    // update, since that speeds up the operations on most browsers.
    var focused = activeElt();
    if (toUpdate > 4) display.lineDiv.style.display = "none";
    patchDisplay(cm, display.updateLineNumbers, dims);
    if (toUpdate > 4) display.lineDiv.style.display = "";
    // There might have been a widget with a focused element that got
    // hidden or updated, if so re-focus it.
    if (focused && activeElt() != focused && focused.offsetHeight) focused.focus();

    // Prevent selection and cursors from interfering with the scroll
    // width.
    removeChildren(display.cursorDiv);
    removeChildren(display.selectionDiv);

    if (different) {
      display.lastSizeC = display.wrapper.clientHeight;
      startWorker(cm, 400);
    }

    updateHeightsInViewport(cm);

    return true;
  }

  function adjustContentWidth(cm) {
    var display = cm.display;
    var width = measureChar(cm, display.maxLine, display.maxLine.text.length).left;
    display.maxLineChanged = false;
    var minWidth = Math.max(0, width + 3);
    var maxScrollLeft = Math.max(0, display.sizer.offsetLeft + minWidth + scrollerCutOff - display.scroller.clientWidth);
    display.sizer.style.minWidth = minWidth + "px";
    if (maxScrollLeft < cm.doc.scrollLeft)
      setScrollLeft(cm, Math.min(display.scroller.scrollLeft, maxScrollLeft), true);
  }

  function setDocumentHeight(cm, measure) {
    cm.display.sizer.style.minHeight = cm.display.heightForcer.style.top = measure.docHeight + "px";
    cm.display.gutters.style.height = Math.max(measure.docHeight, measure.clientHeight - scrollerCutOff) + "px";
  }


  function checkForWebkitWidthBug(cm, measure) {
    // Work around Webkit bug where it sometimes reserves space for a
    // non-existing phantom scrollbar in the scroller (Issue #2420)
    if (cm.display.sizer.offsetWidth + cm.display.gutters.offsetWidth < cm.display.scroller.clientWidth - 1) {
      cm.display.sizer.style.minHeight = cm.display.heightForcer.style.top = "0px";
      cm.display.gutters.style.height = measure.docHeight + "px";
    }
  }

  // Read the actual heights of the rendered lines, and update their
  // stored heights to match.
  function updateHeightsInViewport(cm) {
    var display = cm.display;
    var prevBottom = display.lineDiv.offsetTop;
    for (var i = 0; i < display.view.length; i++) {
      var cur = display.view[i], height;
      if (cur.hidden) continue;
      if (ie_upto7) {
        var bot = cur.node.offsetTop + cur.node.offsetHeight;
        height = bot - prevBottom;
        prevBottom = bot;
      } else {
        var box = cur.node.getBoundingClientRect();
        height = box.bottom - box.top;
      }
      var diff = cur.line.height - height;
      if (height < 2) height = textHeight(display);
      if (diff > .001 || diff < -.001) {
        updateLineHeight(cur.line, height);
        updateWidgetHeight(cur.line);
        if (cur.rest) for (var j = 0; j < cur.rest.length; j++)
          updateWidgetHeight(cur.rest[j]);
      }
    }
  }

  // Read and store the height of line widgets associated with the
  // given line.
  function updateWidgetHeight(line) {
    if (line.widgets) for (var i = 0; i < line.widgets.length; ++i)
      line.widgets[i].height = line.widgets[i].node.offsetHeight;
  }

  // Do a bulk-read of the DOM positions and sizes needed to draw the
  // view, so that we don't interleave reading and writing to the DOM.
  function getDimensions(cm) {
    var d = cm.display, left = {}, width = {};
    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
      left[cm.options.gutters[i]] = n.offsetLeft;
      width[cm.options.gutters[i]] = n.offsetWidth;
    }
    return {fixedPos: compensateForHScroll(d),
            gutterTotalWidth: d.gutters.offsetWidth,
            gutterLeft: left,
            gutterWidth: width,
            wrapperWidth: d.wrapper.clientWidth};
  }

  // Sync the actual display DOM structure with display.view, removing
  // nodes for lines that are no longer in view, and creating the ones
  // that are not there yet, and updating the ones that are out of
  // date.
  function patchDisplay(cm, updateNumbersFrom, dims) {
    var display = cm.display, lineNumbers = cm.options.lineNumbers;
    var container = display.lineDiv, cur = container.firstChild;

    function rm(node) {
      var next = node.nextSibling;
      // Works around a throw-scroll bug in OS X Webkit
      if (webkit && mac && cm.display.currentWheelTarget == node)
        node.style.display = "none";
      else
        node.parentNode.removeChild(node);
      return next;
    }

    var view = display.view, lineN = display.viewFrom;
    // Loop over the elements in the view, syncing cur (the DOM nodes
    // in display.lineDiv) with the view as we go.
    for (var i = 0; i < view.length; i++) {
      var lineView = view[i];
      if (lineView.hidden) {
      } else if (!lineView.node) { // Not drawn yet
        var node = buildLineElement(cm, lineView, lineN, dims);
        container.insertBefore(node, cur);
      } else { // Already drawn
        while (cur != lineView.node) cur = rm(cur);
        var updateNumber = lineNumbers && updateNumbersFrom != null &&
          updateNumbersFrom <= lineN && lineView.lineNumber;
        if (lineView.changes) {
          if (indexOf(lineView.changes, "gutter") > -1) updateNumber = false;
          updateLineForChanges(cm, lineView, lineN, dims);
        }
        if (updateNumber) {
          removeChildren(lineView.lineNumber);
          lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
        }
        cur = lineView.node.nextSibling;
      }
      lineN += lineView.size;
    }
    while (cur) cur = rm(cur);
  }

  // When an aspect of a line changes, a string is added to
  // lineView.changes. This updates the relevant part of the line's
  // DOM structure.
  function updateLineForChanges(cm, lineView, lineN, dims) {
    for (var j = 0; j < lineView.changes.length; j++) {
      var type = lineView.changes[j];
      if (type == "text") updateLineText(cm, lineView);
      else if (type == "gutter") updateLineGutter(cm, lineView, lineN, dims);
      else if (type == "class") updateLineClasses(lineView);
      else if (type == "widget") updateLineWidgets(lineView, dims);
    }
    lineView.changes = null;
  }

  // Lines with gutter elements, widgets or a background class need to
  // be wrapped, and have the extra elements added to the wrapper div
  function ensureLineWrapped(lineView) {
    if (lineView.node == lineView.text) {
      lineView.node = elt("div", null, null, "position: relative");
      if (lineView.text.parentNode)
        lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
      lineView.node.appendChild(lineView.text);
      if (ie_upto7) lineView.node.style.zIndex = 2;
    }
    return lineView.node;
  }

  function updateLineBackground(lineView) {
    var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
    if (cls) cls += " CodeMirror-linebackground";
    if (lineView.background) {
      if (cls) lineView.background.className = cls;
      else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
    } else if (cls) {
      var wrap = ensureLineWrapped(lineView);
      lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
    }
  }

  // Wrapper around buildLineContent which will reuse the structure
  // in display.externalMeasured when possible.
  function getLineContent(cm, lineView) {
    var ext = cm.display.externalMeasured;
    if (ext && ext.line == lineView.line) {
      cm.display.externalMeasured = null;
      lineView.measure = ext.measure;
      return ext.built;
    }
    return buildLineContent(cm, lineView);
  }

  // Redraw the line's text. Interacts with the background and text
  // classes because the mode may output tokens that influence these
  // classes.
  function updateLineText(cm, lineView) {
    var cls = lineView.text.className;
    var built = getLineContent(cm, lineView);
    if (lineView.text == lineView.node) lineView.node = built.pre;
    lineView.text.parentNode.replaceChild(built.pre, lineView.text);
    lineView.text = built.pre;
    if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
      lineView.bgClass = built.bgClass;
      lineView.textClass = built.textClass;
      updateLineClasses(lineView);
    } else if (cls) {
      lineView.text.className = cls;
    }
  }

  function updateLineClasses(lineView) {
    updateLineBackground(lineView);
    if (lineView.line.wrapClass)
      ensureLineWrapped(lineView).className = lineView.line.wrapClass;
    else if (lineView.node != lineView.text)
      lineView.node.className = "";
    var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
    lineView.text.className = textClass || "";
  }

  function updateLineGutter(cm, lineView, lineN, dims) {
    if (lineView.gutter) {
      lineView.node.removeChild(lineView.gutter);
      lineView.gutter = null;
    }
    var markers = lineView.line.gutterMarkers;
    if (cm.options.lineNumbers || markers) {
      var wrap = ensureLineWrapped(lineView);
      var gutterWrap = lineView.gutter =
        wrap.insertBefore(elt("div", null, "CodeMirror-gutter-wrapper", "position: absolute; left: " +
                              (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"),
                          lineView.text);
      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
        lineView.lineNumber = gutterWrap.appendChild(
          elt("div", lineNumberFor(cm.options, lineN),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: "
              + cm.display.lineNumInnerWidth + "px"));
      if (markers) for (var k = 0; k < cm.options.gutters.length; ++k) {
        var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
        if (found)
          gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " +
                                     dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
      }
    }
  }

  function updateLineWidgets(lineView, dims) {
    if (lineView.alignable) lineView.alignable = null;
    for (var node = lineView.node.firstChild, next; node; node = next) {
      var next = node.nextSibling;
      if (node.className == "CodeMirror-linewidget")
        lineView.node.removeChild(node);
    }
    insertLineWidgets(lineView, dims);
  }

  // Build a line's DOM representation from scratch
  function buildLineElement(cm, lineView, lineN, dims) {
    var built = getLineContent(cm, lineView);
    lineView.text = lineView.node = built.pre;
    if (built.bgClass) lineView.bgClass = built.bgClass;
    if (built.textClass) lineView.textClass = built.textClass;

    updateLineClasses(lineView);
    updateLineGutter(cm, lineView, lineN, dims);
    insertLineWidgets(lineView, dims);
    return lineView.node;
  }

  // A lineView may contain multiple logical lines (when merged by
  // collapsed spans). The widgets for all of them need to be drawn.
  function insertLineWidgets(lineView, dims) {
    insertLineWidgetsFor(lineView.line, lineView, dims, true);
    if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
      insertLineWidgetsFor(lineView.rest[i], lineView, dims, false);
  }

  function insertLineWidgetsFor(line, lineView, dims, allowAbove) {
    if (!line.widgets) return;
    var wrap = ensureLineWrapped(lineView);
    for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
      if (!widget.handleMouseEvents) node.ignoreEvents = true;
      positionLineWidget(widget, node, lineView, dims);
      if (allowAbove && widget.above)
        wrap.insertBefore(node, lineView.gutter || lineView.text);
      else
        wrap.appendChild(node);
      signalLater(widget, "redraw");
    }
  }

  function positionLineWidget(widget, node, lineView, dims) {
    if (widget.noHScroll) {
      (lineView.alignable || (lineView.alignable = [])).push(node);
      var width = dims.wrapperWidth;
      node.style.left = dims.fixedPos + "px";
      if (!widget.coverGutter) {
        width -= dims.gutterTotalWidth;
        node.style.paddingLeft = dims.gutterTotalWidth + "px";
      }
      node.style.width = width + "px";
    }
    if (widget.coverGutter) {
      node.style.zIndex = 5;
      node.style.position = "relative";
      if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px";
    }
  }

  // POSITION OBJECT

  // A Pos instance represents a position within the text.
  var Pos = CodeMirror.Pos = function(line, ch) {
    if (!(this instanceof Pos)) return new Pos(line, ch);
    this.line = line; this.ch = ch;
  };

  // Compare two positions, return 0 if they are the same, a negative
  // number when a is less, and a positive number otherwise.
  var cmp = CodeMirror.cmpPos = function(a, b) { return a.line - b.line || a.ch - b.ch; };

  function copyPos(x) {return Pos(x.line, x.ch);}
  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a; }
  function minPos(a, b) { return cmp(a, b) < 0 ? a : b; }

  // SELECTION / CURSOR

  // Selection objects are immutable. A new one is created every time
  // the selection changes. A selection is one or more non-overlapping
  // (and non-touching) ranges, sorted, and an integer that indicates
  // which one is the primary selection (the one that's scrolled into
  // view, that getCursor returns, etc).
  function Selection(ranges, primIndex) {
    this.ranges = ranges;
    this.primIndex = primIndex;
  }

  Selection.prototype = {
    primary: function() { return this.ranges[this.primIndex]; },
    equals: function(other) {
      if (other == this) return true;
      if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) return false;
      for (var i = 0; i < this.ranges.length; i++) {
        var here = this.ranges[i], there = other.ranges[i];
        if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) return false;
      }
      return true;
    },
    deepCopy: function() {
      for (var out = [], i = 0; i < this.ranges.length; i++)
        out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head));
      return new Selection(out, this.primIndex);
    },
    somethingSelected: function() {
      for (var i = 0; i < this.ranges.length; i++)
        if (!this.ranges[i].empty()) return true;
      return false;
    },
    contains: function(pos, end) {
      if (!end) end = pos;
      for (var i = 0; i < this.ranges.length; i++) {
        var range = this.ranges[i];
        if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
          return i;
      }
      return -1;
    }
  };

  function Range(anchor, head) {
    this.anchor = anchor; this.head = head;
  }

  Range.prototype = {
    from: function() { return minPos(this.anchor, this.head); },
    to: function() { return maxPos(this.anchor, this.head); },
    empty: function() {
      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
    }
  };

  // Take an unsorted, potentially overlapping set of ranges, and
  // build a selection out of it. 'Consumes' ranges array (modifying
  // it).
  function normalizeSelection(ranges, primIndex) {
    var prim = ranges[primIndex];
    ranges.sort(function(a, b) { return cmp(a.from(), b.from()); });
    primIndex = indexOf(ranges, prim);
    for (var i = 1; i < ranges.length; i++) {
      var cur = ranges[i], prev = ranges[i - 1];
      if (cmp(prev.to(), cur.from()) >= 0) {
        var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
        var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
        if (i <= primIndex) --primIndex;
        ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
      }
    }
    return new Selection(ranges, primIndex);
  }

  function simpleSelection(anchor, head) {
    return new Selection([new Range(anchor, head || anchor)], 0);
  }

  // Most of the external API clips given positions to make sure they
  // actually exist within the document.
  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));}
  function clipPos(doc, pos) {
    if (pos.line < doc.first) return Pos(doc.first, 0);
    var last = doc.first + doc.size - 1;
    if (pos.line > last) return Pos(last, getLine(doc, last).text.length);
    return clipToLen(pos, getLine(doc, pos.line).text.length);
  }
  function clipToLen(pos, linelen) {
    var ch = pos.ch;
    if (ch == null || ch > linelen) return Pos(pos.line, linelen);
    else if (ch < 0) return Pos(pos.line, 0);
    else return pos;
  }
  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size;}
  function clipPosArray(doc, array) {
    for (var out = [], i = 0; i < array.length; i++) out[i] = clipPos(doc, array[i]);
    return out;
  }

  // SELECTION UPDATES

  // The 'scroll' parameter given to many of these indicated whether
  // the new cursor position should be scrolled into view after
  // modifying the selection.

  // If shift is held or the extend flag is set, extends a range to
  // include a given position (and optionally a second position).
  // Otherwise, simply returns the range between the given positions.
  // Used for cursor motion and such.
  function extendRange(doc, range, head, other) {
    if (doc.cm && doc.cm.display.shift || doc.extend) {
      var anchor = range.anchor;
      if (other) {
        var posBefore = cmp(head, anchor) < 0;
        if (posBefore != (cmp(other, anchor) < 0)) {
          anchor = head;
          head = other;
        } else if (posBefore != (cmp(head, other) < 0)) {
          head = other;
        }
      }
      return new Range(anchor, head);
    } else {
      return new Range(other || head, head);
    }
  }

  // Extend the primary selection range, discard the rest.
  function extendSelection(doc, head, other, options) {
    setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options);
  }

  // Extend all selections (pos is an array of selections with length
  // equal the number of selections)
  function extendSelections(doc, heads, options) {
    for (var out = [], i = 0; i < doc.sel.ranges.length; i++)
      out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null);
    var newSel = normalizeSelection(out, doc.sel.primIndex);
    setSelection(doc, newSel, options);
  }

  // Updates a single range in the selection.
  function replaceOneSelection(doc, i, range, options) {
    var ranges = doc.sel.ranges.slice(0);
    ranges[i] = range;
    setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options);
  }

  // Reset the selection to a single range.
  function setSimpleSelection(doc, anchor, head, options) {
    setSelection(doc, simpleSelection(anchor, head), options);
  }

  // Give beforeSelectionChange handlers a change to influence a
  // selection update.
  function filterSelectionChange(doc, sel) {
    var obj = {
      ranges: sel.ranges,
      update: function(ranges) {
        this.ranges = [];
        for (var i = 0; i < ranges.length; i++)
          this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
                                     clipPos(doc, ranges[i].head));
      }
    };
    signal(doc, "beforeSelectionChange", doc, obj);
    if (doc.cm) signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
    if (obj.ranges != sel.ranges) return normalizeSelection(obj.ranges, obj.ranges.length - 1);
    else return sel;
  }

  function setSelectionReplaceHistory(doc, sel, options) {
    var done = doc.history.done, last = lst(done);
    if (last && last.ranges) {
      done[done.length - 1] = sel;
      setSelectionNoUndo(doc, sel, options);
    } else {
      setSelection(doc, sel, options);
    }
  }

  // Set a new selection.
  function setSelection(doc, sel, options) {
    setSelectionNoUndo(doc, sel, options);
    addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
  }

  function setSelectionNoUndo(doc, sel, options) {
    if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
      sel = filterSelectionChange(doc, sel);

    var bias = cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1;
    setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

    if (!(options && options.scroll === false) && doc.cm)
      ensureCursorVisible(doc.cm);
  }

  function setSelectionInner(doc, sel) {
    if (sel.equals(doc.sel)) return;

    doc.sel = sel;

    if (doc.cm) {
      doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true;
      signalCursorActivity(doc.cm);
    }
    signalLater(doc, "cursorActivity", doc);
  }

  // Verify that the selection does not partially select any atomic
  // marked ranges.
  function reCheckSelection(doc) {
    setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll);
  }

  // Return a selection that does not partially select any atomic
  // ranges.
  function skipAtomicInSelection(doc, sel, bias, mayClear) {
    var out;
    for (var i = 0; i < sel.ranges.length; i++) {
      var range = sel.ranges[i];
      var newAnchor = skipAtomic(doc, range.anchor, bias, mayClear);
      var newHead = skipAtomic(doc, range.head, bias, mayClear);
      if (out || newAnchor != range.anchor || newHead != range.head) {
        if (!out) out = sel.ranges.slice(0, i);
        out[i] = new Range(newAnchor, newHead);
      }
    }
    return out ? normalizeSelection(out, sel.primIndex) : sel;
  }

  // Ensure a given position is not inside an atomic range.
  function skipAtomic(doc, pos, bias, mayClear) {
    var flipped = false, curPos = pos;
    var dir = bias || 1;
    doc.cantEdit = false;
    search: for (;;) {
      var line = getLine(doc, curPos.line);
      if (line.markedSpans) {
        for (var i = 0; i < line.markedSpans.length; ++i) {
          var sp = line.markedSpans[i], m = sp.marker;
          if ((sp.from == null || (m.inclusiveLeft ? sp.from <= curPos.ch : sp.from < curPos.ch)) &&
              (sp.to == null || (m.inclusiveRight ? sp.to >= curPos.ch : sp.to > curPos.ch))) {
            if (mayClear) {
              signal(m, "beforeCursorEnter");
              if (m.explicitlyCleared) {
                if (!line.markedSpans) break;
                else {--i; continue;}
              }
            }
            if (!m.atomic) continue;
            var newPos = m.find(dir < 0 ? -1 : 1);
            if (cmp(newPos, curPos) == 0) {
              newPos.ch += dir;
              if (newPos.ch < 0) {
                if (newPos.line > doc.first) newPos = clipPos(doc, Pos(newPos.line - 1));
                else newPos = null;
              } else if (newPos.ch > line.text.length) {
                if (newPos.line < doc.first + doc.size - 1) newPos = Pos(newPos.line + 1, 0);
                else newPos = null;
              }
              if (!newPos) {
                if (flipped) {
                  // Driven in a corner -- no valid cursor position found at all
                  // -- try again *with* clearing, if we didn't already
                  if (!mayClear) return skipAtomic(doc, pos, bias, true);
                  // Otherwise, turn off editing until further notice, and return the start of the doc
                  doc.cantEdit = true;
                  return Pos(doc.first, 0);
                }
                flipped = true; newPos = pos; dir = -dir;
              }
            }
            curPos = newPos;
            continue search;
          }
        }
      }
      return curPos;
    }
  }

  // SELECTION DRAWING

  // Redraw the selection and/or cursor
  function updateSelection(cm) {
    var display = cm.display, doc = cm.doc;
    var curFragment = document.createDocumentFragment();
    var selFragment = document.createDocumentFragment();

    for (var i = 0; i < doc.sel.ranges.length; i++) {
      var range = doc.sel.ranges[i];
      var collapsed = range.empty();
      if (collapsed || cm.options.showCursorWhenSelecting)
        drawSelectionCursor(cm, range, curFragment);
      if (!collapsed)
        drawSelectionRange(cm, range, selFragment);
    }

    // Move the hidden textarea near the cursor to prevent scrolling artifacts
    if (cm.options.moveInputWithCursor) {
      var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
      var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
      var top = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                     headPos.top + lineOff.top - wrapOff.top));
      var left = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                      headPos.left + lineOff.left - wrapOff.left));
      display.inputDiv.style.top = top + "px";
      display.inputDiv.style.left = left + "px";
    }

    removeChildrenAndAdd(display.cursorDiv, curFragment);
    removeChildrenAndAdd(display.selectionDiv, selFragment);
  }

  // Draws a cursor for the given range
  function drawSelectionCursor(cm, range, output) {
    var pos = cursorCoords(cm, range.head, "div");

    var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
    cursor.style.left = pos.left + "px";
    cursor.style.top = pos.top + "px";
    cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

    if (pos.other) {
      // Secondary cursor, shown when on a 'jump' in bi-directional text
      var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
      otherCursor.style.display = "";
      otherCursor.style.left = pos.other.left + "px";
      otherCursor.style.top = pos.other.top + "px";
      otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
    }
  }

  // Draws the given range as a highlighted selection
  function drawSelectionRange(cm, range, output) {
    var display = cm.display, doc = cm.doc;
    var fragment = document.createDocumentFragment();
    var padding = paddingH(cm.display), leftSide = padding.left, rightSide = display.lineSpace.offsetWidth - padding.right;

    function add(left, top, width, bottom) {
      if (top < 0) top = 0;
      top = Math.round(top);
      bottom = Math.round(bottom);
      fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left +
                               "px; top: " + top + "px; width: " + (width == null ? rightSide - left : width) +
                               "px; height: " + (bottom - top) + "px"));
    }

    function drawForLine(line, fromArg, toArg) {
      var lineObj = getLine(doc, line);
      var lineLen = lineObj.text.length;
      var start, end;
      function coords(ch, bias) {
        return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
      }

      iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir) {
        var leftPos = coords(from, "left"), rightPos, left, right;
        if (from == to) {
          rightPos = leftPos;
          left = right = leftPos.left;
        } else {
          rightPos = coords(to - 1, "right");
          if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp; }
          left = leftPos.left;
          right = rightPos.right;
        }
        if (fromArg == null && from == 0) left = leftSide;
        if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
          add(left, leftPos.top, null, leftPos.bottom);
          left = leftSide;
          if (leftPos.bottom < rightPos.top) add(left, leftPos.bottom, null, rightPos.top);
        }
        if (toArg == null && to == lineLen) right = rightSide;
        if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
          start = leftPos;
        if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
          end = rightPos;
        if (left < leftSide + 1) left = leftSide;
        add(left, rightPos.top, right - left, rightPos.bottom);
      });
      return {start: start, end: end};
    }

    var sFrom = range.from(), sTo = range.to();
    if (sFrom.line == sTo.line) {
      drawForLine(sFrom.line, sFrom.ch, sTo.ch);
    } else {
      var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
      var singleVLine = visualLine(fromLine) == visualLine(toLine);
      var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
      var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
      if (singleVLine) {
        if (leftEnd.top < rightStart.top - 2) {
          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
          add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
        } else {
          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
        }
      }
      if (leftEnd.bottom < rightStart.top)
        add(leftSide, leftEnd.bottom, null, rightStart.top);
    }

    output.appendChild(fragment);
  }

  // Cursor-blinking
  function restartBlink(cm) {
    if (!cm.state.focused) return;
    var display = cm.display;
    clearInterval(display.blinker);
    var on = true;
    display.cursorDiv.style.visibility = "";
    if (cm.options.cursorBlinkRate > 0)
      display.blinker = setInterval(function() {
        display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
      }, cm.options.cursorBlinkRate);
  }

  // HIGHLIGHT WORKER

  function startWorker(cm, time) {
    if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
      cm.state.highlight.set(time, bind(highlightWorker, cm));
  }

  function highlightWorker(cm) {
    var doc = cm.doc;
    if (doc.frontier < doc.first) doc.frontier = doc.first;
    if (doc.frontier >= cm.display.viewTo) return;
    var end = +new Date + cm.options.workTime;
    var state = copyState(doc.mode, getStateBefore(cm, doc.frontier));

    runInOp(cm, function() {
    doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function(line) {
      if (doc.frontier >= cm.display.viewFrom) { // Visible
        var oldStyles = line.styles;
        var highlighted = highlightLine(cm, line, state, true);
        line.styles = highlighted.styles;
        if (highlighted.classes) line.styleClasses = highlighted.classes;
        else if (line.styleClasses) line.styleClasses = null;
        var ischange = !oldStyles || oldStyles.length != line.styles.length;
        for (var i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
        if (ischange) regLineChange(cm, doc.frontier, "text");
        line.stateAfter = copyState(doc.mode, state);
      } else {
        processLine(cm, line.text, state);
        line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
      }
      ++doc.frontier;
      if (+new Date > end) {
        startWorker(cm, cm.options.workDelay);
        return true;
      }
    });
    });
  }

  // Finds the line to start with when starting a parse. Tries to
  // find a line with a stateAfter, so that it can start with a
  // valid state. If that fails, it returns the line with the
  // smallest indentation, which tends to need the least context to
  // parse correctly.
  function findStartLine(cm, n, precise) {
    var minindent, minline, doc = cm.doc;
    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
    for (var search = n; search > lim; --search) {
      if (search <= doc.first) return doc.first;
      var line = getLine(doc, search - 1);
      if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
      var indented = countColumn(line.text, null, cm.options.tabSize);
      if (minline == null || minindent > indented) {
        minline = search - 1;
        minindent = indented;
      }
    }
    return minline;
  }

  function getStateBefore(cm, n, precise) {
    var doc = cm.doc, display = cm.display;
    if (!doc.mode.startState) return true;
    var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter;
    if (!state) state = startState(doc.mode);
    else state = copyState(doc.mode, state);
    doc.iter(pos, n, function(line) {
      processLine(cm, line.text, state);
      var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo;
      line.stateAfter = save ? copyState(doc.mode, state) : null;
      ++pos;
    });
    if (precise) doc.frontier = pos;
    return state;
  }

  // POSITION MEASUREMENT

  function paddingTop(display) {return display.lineSpace.offsetTop;}
  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight;}
  function paddingH(display) {
    if (display.cachedPaddingH) return display.cachedPaddingH;
    var e = removeChildrenAndAdd(display.measure, elt("pre", "x"));
    var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
    var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
    if (!isNaN(data.left) && !isNaN(data.right)) display.cachedPaddingH = data;
    return data;
  }

  // Ensure the lineView.wrapping.heights array is populated. This is
  // an array of bottom offsets for the lines that make up a drawn
  // line. When lineWrapping is on, there might be more than one
  // height.
  function ensureLineHeights(cm, lineView, rect) {
    var wrapping = cm.options.lineWrapping;
    var curWidth = wrapping && cm.display.scroller.clientWidth;
    if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
      var heights = lineView.measure.heights = [];
      if (wrapping) {
        lineView.measure.width = curWidth;
        var rects = lineView.text.firstChild.getClientRects();
        for (var i = 0; i < rects.length - 1; i++) {
          var cur = rects[i], next = rects[i + 1];
          if (Math.abs(cur.bottom - next.bottom) > 2)
            heights.push((cur.bottom + next.top) / 2 - rect.top);
        }
      }
      heights.push(rect.bottom - rect.top);
    }
  }

  // Find a line map (mapping character offsets to text nodes) and a
  // measurement cache for the given line number. (A line view might
  // contain multiple lines when collapsed ranges are present.)
  function mapFromLineView(lineView, line, lineN) {
    if (lineView.line == line)
      return {map: lineView.measure.map, cache: lineView.measure.cache};
    for (var i = 0; i < lineView.rest.length; i++)
      if (lineView.rest[i] == line)
        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]};
    for (var i = 0; i < lineView.rest.length; i++)
      if (lineNo(lineView.rest[i]) > lineN)
        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i], before: true};
  }

  // Render a line into the hidden node display.externalMeasured. Used
  // when measurement is needed for a line that's not in the viewport.
  function updateExternalMeasurement(cm, line) {
    line = visualLine(line);
    var lineN = lineNo(line);
    var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
    view.lineN = lineN;
    var built = view.built = buildLineContent(cm, view);
    view.text = built.pre;
    removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
    return view;
  }

  // Get a {top, bottom, left, right} box (in line-local coordinates)
  // for a given character.
  function measureChar(cm, line, ch, bias) {
    return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
  }

  // Find a line view that corresponds to the given line number.
  function findViewForLine(cm, lineN) {
    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
      return cm.display.view[findViewIndex(cm, lineN)];
    var ext = cm.display.externalMeasured;
    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
      return ext;
  }

  // Measurement can be split in two steps, the set-up work that
  // applies to the whole line, and the measurement of the actual
  // character. Functions like coordsChar, that need to do a lot of
  // measurements in a row, can thus ensure that the set-up work is
  // only done once.
  function prepareMeasureForLine(cm, line) {
    var lineN = lineNo(line);
    var view = findViewForLine(cm, lineN);
    if (view && !view.text)
      view = null;
    else if (view && view.changes)
      updateLineForChanges(cm, view, lineN, getDimensions(cm));
    if (!view)
      view = updateExternalMeasurement(cm, line);

    var info = mapFromLineView(view, line, lineN);
    return {
      line: line, view: view, rect: null,
      map: info.map, cache: info.cache, before: info.before,
      hasHeights: false
    };
  }

  // Given a prepared measurement object, measures the position of an
  // actual character (or fetches it from the cache).
  function measureCharPrepared(cm, prepared, ch, bias) {
    if (prepared.before) ch = -1;
    var key = ch + (bias || ""), found;
    if (prepared.cache.hasOwnProperty(key)) {
      found = prepared.cache[key];
    } else {
      if (!prepared.rect)
        prepared.rect = prepared.view.text.getBoundingClientRect();
      if (!prepared.hasHeights) {
        ensureLineHeights(cm, prepared.view, prepared.rect);
        prepared.hasHeights = true;
      }
      found = measureCharInner(cm, prepared, ch, bias);
      if (!found.bogus) prepared.cache[key] = found;
    }
    return {left: found.left, right: found.right, top: found.top, bottom: found.bottom};
  }

  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

  function measureCharInner(cm, prepared, ch, bias) {
    var map = prepared.map;

    var node, start, end, collapse;
    // First, search the line map for the text node corresponding to,
    // or closest to, the target character.
    for (var i = 0; i < map.length; i += 3) {
      var mStart = map[i], mEnd = map[i + 1];
      if (ch < mStart) {
        start = 0; end = 1;
        collapse = "left";
      } else if (ch < mEnd) {
        start = ch - mStart;
        end = start + 1;
      } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
        end = mEnd - mStart;
        start = end - 1;
        if (ch >= mEnd) collapse = "right";
      }
      if (start != null) {
        node = map[i + 2];
        if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
          collapse = bias;
        if (bias == "left" && start == 0)
          while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
            node = map[(i -= 3) + 2];
            collapse = "left";
          }
        if (bias == "right" && start == mEnd - mStart)
          while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
            node = map[(i += 3) + 2];
            collapse = "right";
          }
        break;
      }
    }

    var rect;
    if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
      while (start && isExtendingChar(prepared.line.text.charAt(mStart + start))) --start;
      while (mStart + end < mEnd && isExtendingChar(prepared.line.text.charAt(mStart + end))) ++end;
      if (ie_upto8 && start == 0 && end == mEnd - mStart) {
        rect = node.parentNode.getBoundingClientRect();
      } else if (ie && cm.options.lineWrapping) {
        var rects = range(node, start, end).getClientRects();
        if (rects.length)
          rect = rects[bias == "right" ? rects.length - 1 : 0];
        else
          rect = nullRect;
      } else {
        rect = range(node, start, end).getBoundingClientRect();
      }
    } else { // If it is a widget, simply get the box for the whole widget.
      if (start > 0) collapse = bias = "right";
      var rects;
      if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
        rect = rects[bias == "right" ? rects.length - 1 : 0];
      else
        rect = node.getBoundingClientRect();
    }
    if (ie_upto8 && !start && (!rect || !rect.left && !rect.right)) {
      var rSpan = node.parentNode.getClientRects()[0];
      if (rSpan)
        rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom};
      else
        rect = nullRect;
    }

    var top, bot = (rect.bottom + rect.top) / 2 - prepared.rect.top;
    var heights = prepared.view.measure.heights;
    for (var i = 0; i < heights.length - 1; i++)
      if (bot < heights[i]) break;
    top = i ? heights[i - 1] : 0; bot = heights[i];
    var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
                  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
                  top: top, bottom: bot};
    if (!rect.left && !rect.right) result.bogus = true;
    return result;
  }

  function clearLineMeasurementCacheFor(lineView) {
    if (lineView.measure) {
      lineView.measure.cache = {};
      lineView.measure.heights = null;
      if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
        lineView.measure.caches[i] = {};
    }
  }

  function clearLineMeasurementCache(cm) {
    cm.display.externalMeasure = null;
    removeChildren(cm.display.lineMeasure);
    for (var i = 0; i < cm.display.view.length; i++)
      clearLineMeasurementCacheFor(cm.display.view[i]);
  }

  function clearCaches(cm) {
    clearLineMeasurementCache(cm);
    cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
    if (!cm.options.lineWrapping) cm.display.maxLineChanged = true;
    cm.display.lineNumChars = null;
  }

  function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft; }
  function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop; }

  // Converts a {top, bottom, left, right} box from line-local
  // coordinates into another coordinate system. Context may be one of
  // "line", "div" (display.lineDiv), "local"/null (editor), or "page".
  function intoCoordSystem(cm, lineObj, rect, context) {
    if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
      var size = widgetHeight(lineObj.widgets[i]);
      rect.top += size; rect.bottom += size;
    }
    if (context == "line") return rect;
    if (!context) context = "local";
    var yOff = heightAtLine(lineObj);
    if (context == "local") yOff += paddingTop(cm.display);
    else yOff -= cm.display.viewOffset;
    if (context == "page" || context == "window") {
      var lOff = cm.display.lineSpace.getBoundingClientRect();
      yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
      rect.left += xOff; rect.right += xOff;
    }
    rect.top += yOff; rect.bottom += yOff;
    return rect;
  }

  // Coverts a box from "div" coords to another coordinate system.
  // Context may be "window", "page", "div", or "local"/null.
  function fromCoordSystem(cm, coords, context) {
    if (context == "div") return coords;
    var left = coords.left, top = coords.top;
    // First move into "page" coordinate system
    if (context == "page") {
      left -= pageScrollX();
      top -= pageScrollY();
    } else if (context == "local" || !context) {
      var localBox = cm.display.sizer.getBoundingClientRect();
      left += localBox.left;
      top += localBox.top;
    }

    var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top};
  }

  function charCoords(cm, pos, context, lineObj, bias) {
    if (!lineObj) lineObj = getLine(cm.doc, pos.line);
    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
  }

  // Returns a box for a given cursor position, which may have an
  // 'other' property containing the position of the secondary cursor
  // on a bidi boundary.
  function cursorCoords(cm, pos, context, lineObj, preparedMeasure) {
    lineObj = lineObj || getLine(cm.doc, pos.line);
    if (!preparedMeasure) preparedMeasure = prepareMeasureForLine(cm, lineObj);
    function get(ch, right) {
      var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left");
      if (right) m.left = m.right; else m.right = m.left;
      return intoCoordSystem(cm, lineObj, m, context);
    }
    function getBidi(ch, partPos) {
      var part = order[partPos], right = part.level % 2;
      if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
        part = order[--partPos];
        ch = bidiRight(part) - (part.level % 2 ? 0 : 1);
        right = true;
      } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
        part = order[++partPos];
        ch = bidiLeft(part) - part.level % 2;
        right = false;
      }
      if (right && ch == part.to && ch > part.from) return get(ch - 1);
      return get(ch, right);
    }
    var order = getOrder(lineObj), ch = pos.ch;
    if (!order) return get(ch);
    var partPos = getBidiPartAt(order, ch);
    var val = getBidi(ch, partPos);
    if (bidiOther != null) val.other = getBidi(ch, bidiOther);
    return val;
  }

  // Used to cheaply estimate the coordinates for a position. Used for
  // intermediate scroll updates.
  function estimateCoords(cm, pos) {
    var left = 0, pos = clipPos(cm.doc, pos);
    if (!cm.options.lineWrapping) left = charWidth(cm.display) * pos.ch;
    var lineObj = getLine(cm.doc, pos.line);
    var top = heightAtLine(lineObj) + paddingTop(cm.display);
    return {left: left, right: left, top: top, bottom: top + lineObj.height};
  }

  // Positions returned by coordsChar contain some extra information.
  // xRel is the relative x position of the input coordinates compared
  // to the found position (so xRel > 0 means the coordinates are to
  // the right of the character position, for example). When outside
  // is true, that means the coordinates lie outside the line's
  // vertical range.
  function PosWithInfo(line, ch, outside, xRel) {
    var pos = Pos(line, ch);
    pos.xRel = xRel;
    if (outside) pos.outside = true;
    return pos;
  }

  // Compute the character position closest to the given coordinates.
  // Input must be lineSpace-local ("div" coordinate system).
  function coordsChar(cm, x, y) {
    var doc = cm.doc;
    y += cm.display.viewOffset;
    if (y < 0) return PosWithInfo(doc.first, 0, true, -1);
    var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
    if (lineN > last)
      return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1);
    if (x < 0) x = 0;

    var lineObj = getLine(doc, lineN);
    for (;;) {
      var found = coordsCharInner(cm, lineObj, lineN, x, y);
      var merged = collapsedSpanAtEnd(lineObj);
      var mergedPos = merged && merged.find(0, true);
      if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
        lineN = lineNo(lineObj = mergedPos.to.line);
      else
        return found;
    }
  }

  function coordsCharInner(cm, lineObj, lineNo, x, y) {
    var innerOff = y - heightAtLine(lineObj);
    var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth;
    var preparedMeasure = prepareMeasureForLine(cm, lineObj);

    function getX(ch) {
      var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure);
      wrongLine = true;
      if (innerOff > sp.bottom) return sp.left - adjust;
      else if (innerOff < sp.top) return sp.left + adjust;
      else wrongLine = false;
      return sp.left;
    }

    var bidi = getOrder(lineObj), dist = lineObj.text.length;
    var from = lineLeft(lineObj), to = lineRight(lineObj);
    var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;

    if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
    // Do a binary search between these bounds.
    for (;;) {
      if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
        var ch = x < fromX || x - fromX <= toX - x ? from : to;
        var xDiff = x - (ch == from ? fromX : toX);
        while (isExtendingChar(lineObj.text.charAt(ch))) ++ch;
        var pos = PosWithInfo(lineNo, ch, ch == from ? fromOutside : toOutside,
                              xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0);
        return pos;
      }
      var step = Math.ceil(dist / 2), middle = from + step;
      if (bidi) {
        middle = from;
        for (var i = 0; i < step; ++i) middle = moveVisually(lineObj, middle, 1);
      }
      var middleX = getX(middle);
      if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) toX += 1000; dist = step;}
      else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step;}
    }
  }

  var measureText;
  // Compute the default text height.
  function textHeight(display) {
    if (display.cachedTextHeight != null) return display.cachedTextHeight;
    if (measureText == null) {
      measureText = elt("pre");
      // Measure a bunch of lines, for browsers that compute
      // fractional heights.
      for (var i = 0; i < 49; ++i) {
        measureText.appendChild(document.createTextNode("x"));
        measureText.appendChild(elt("br"));
      }
      measureText.appendChild(document.createTextNode("x"));
    }
    removeChildrenAndAdd(display.measure, measureText);
    var height = measureText.offsetHeight / 50;
    if (height > 3) display.cachedTextHeight = height;
    removeChildren(display.measure);
    return height || 1;
  }

  // Compute the default character width.
  function charWidth(display) {
    if (display.cachedCharWidth != null) return display.cachedCharWidth;
    var anchor = elt("span", "xxxxxxxxxx");
    var pre = elt("pre", [anchor]);
    removeChildrenAndAdd(display.measure, pre);
    var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
    if (width > 2) display.cachedCharWidth = width;
    return width || 10;
  }

  // OPERATIONS

  // Operations are used to wrap a series of changes to the editor
  // state in such a way that each change won't have to update the
  // cursor and display (which would be awkward, slow, and
  // error-prone). Instead, display updates are batched and then all
  // combined and executed at once.

  var nextOpId = 0;
  // Start a new operation.
  function startOperation(cm) {
    cm.curOp = {
      viewChanged: false,      // Flag that indicates that lines might need to be redrawn
      startHeight: cm.doc.height, // Used to detect need to update scrollbar
      forceUpdate: false,      // Used to force a redraw
      updateInput: null,       // Whether to reset the input textarea
      typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
      changeObjs: null,        // Accumulated changes, for firing change events
      cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
      selectionChanged: false, // Whether the selection needs to be redrawn
      updateMaxLine: false,    // Set when the widest line needs to be determined anew
      scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
      scrollToPos: null,       // Used to scroll to a specific position
      id: ++nextOpId           // Unique ID
    };
    if (!delayedCallbackDepth++) delayedCallbacks = [];
  }

  // Finish an operation, updating the display and signalling delayed events
  function endOperation(cm) {
    var op = cm.curOp, doc = cm.doc, display = cm.display;
    cm.curOp = null;

    if (op.updateMaxLine) findMaxLine(cm);

    // If it looks like an update might be needed, call updateDisplay
    if (op.viewChanged || op.forceUpdate || op.scrollTop != null ||
        op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                           op.scrollToPos.to.line >= display.viewTo) ||
        display.maxLineChanged && cm.options.lineWrapping) {
      var updated = updateDisplay(cm, {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
      if (cm.display.scroller.offsetHeight) cm.doc.scrollTop = cm.display.scroller.scrollTop;
    }
    // If no update was run, but the selection changed, redraw that.
    if (!updated && op.selectionChanged) updateSelection(cm);
    if (!updated && op.startHeight != cm.doc.height) updateScrollbars(cm);

    // Propagate the scroll position to the actual DOM scroller
    if (op.scrollTop != null && display.scroller.scrollTop != op.scrollTop) {
      var top = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop));
      display.scroller.scrollTop = display.scrollbarV.scrollTop = doc.scrollTop = top;
    }
    if (op.scrollLeft != null && display.scroller.scrollLeft != op.scrollLeft) {
      var left = Math.max(0, Math.min(display.scroller.scrollWidth - display.scroller.clientWidth, op.scrollLeft));
      display.scroller.scrollLeft = display.scrollbarH.scrollLeft = doc.scrollLeft = left;
      alignHorizontally(cm);
    }
    // If we need to scroll a specific position into view, do so.
    if (op.scrollToPos) {
      var coords = scrollPosIntoView(cm, clipPos(cm.doc, op.scrollToPos.from),
                                     clipPos(cm.doc, op.scrollToPos.to), op.scrollToPos.margin);
      if (op.scrollToPos.isCursor && cm.state.focused) maybeScrollWindow(cm, coords);
    }

    if (op.selectionChanged) restartBlink(cm);

    if (cm.state.focused && op.updateInput)
      resetInput(cm, op.typing);

    // Fire events for markers that are hidden/unidden by editing or
    // undoing
    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
    if (hidden) for (var i = 0; i < hidden.length; ++i)
      if (!hidden[i].lines.length) signal(hidden[i], "hide");
    if (unhidden) for (var i = 0; i < unhidden.length; ++i)
      if (unhidden[i].lines.length) signal(unhidden[i], "unhide");

    var delayed;
    if (!--delayedCallbackDepth) {
      delayed = delayedCallbacks;
      delayedCallbacks = null;
    }
    // Fire change events, and delayed event handlers
    if (op.changeObjs)
      signal(cm, "changes", cm, op.changeObjs);
    if (delayed) for (var i = 0; i < delayed.length; ++i) delayed[i]();
    if (op.cursorActivityHandlers)
      for (var i = 0; i < op.cursorActivityHandlers.length; i++)
        op.cursorActivityHandlers[i](cm);
  }

  // Run the given function in an operation
  function runInOp(cm, f) {
    if (cm.curOp) return f();
    startOperation(cm);
    try { return f(); }
    finally { endOperation(cm); }
  }
  // Wraps a function in an operation. Returns the wrapped function.
  function operation(cm, f) {
    return function() {
      if (cm.curOp) return f.apply(cm, arguments);
      startOperation(cm);
      try { return f.apply(cm, arguments); }
      finally { endOperation(cm); }
    };
  }
  // Used to add methods to editor and doc instances, wrapping them in
  // operations.
  function methodOp(f) {
    return function() {
      if (this.curOp) return f.apply(this, arguments);
      startOperation(this);
      try { return f.apply(this, arguments); }
      finally { endOperation(this); }
    };
  }
  function docMethodOp(f) {
    return function() {
      var cm = this.cm;
      if (!cm || cm.curOp) return f.apply(this, arguments);
      startOperation(cm);
      try { return f.apply(this, arguments); }
      finally { endOperation(cm); }
    };
  }

  // VIEW TRACKING

  // These objects are used to represent the visible (currently drawn)
  // part of the document. A LineView may correspond to multiple
  // logical lines, if those are connected by collapsed ranges.
  function LineView(doc, line, lineN) {
    // The starting line
    this.line = line;
    // Continuing lines, if any
    this.rest = visualLineContinued(line);
    // Number of logical lines in this visual line
    this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
    this.node = this.text = null;
    this.hidden = lineIsHidden(doc, line);
  }

  // Create a range of LineView objects for the given lines.
  function buildViewArray(cm, from, to) {
    var array = [], nextPos;
    for (var pos = from; pos < to; pos = nextPos) {
      var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
      nextPos = pos + view.size;
      array.push(view);
    }
    return array;
  }

  // Updates the display.view data structure for a given change to the
  // document. From and to are in pre-change coordinates. Lendiff is
  // the amount of lines added or subtracted by the change. This is
  // used for changes that span multiple lines, or change the way
  // lines are divided into visual lines. regLineChange (below)
  // registers single-line changes.
  function regChange(cm, from, to, lendiff) {
    if (from == null) from = cm.doc.first;
    if (to == null) to = cm.doc.first + cm.doc.size;
    if (!lendiff) lendiff = 0;

    var display = cm.display;
    if (lendiff && to < display.viewTo &&
        (display.updateLineNumbers == null || display.updateLineNumbers > from))
      display.updateLineNumbers = from;

    cm.curOp.viewChanged = true;

    if (from >= display.viewTo) { // Change after
      if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
        resetView(cm);
    } else if (to <= display.viewFrom) { // Change before
      if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
        resetView(cm);
      } else {
        display.viewFrom += lendiff;
        display.viewTo += lendiff;
      }
    } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
      resetView(cm);
    } else if (from <= display.viewFrom) { // Top overlap
      var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
      if (cut) {
        display.view = display.view.slice(cut.index);
        display.viewFrom = cut.lineN;
        display.viewTo += lendiff;
      } else {
        resetView(cm);
      }
    } else if (to >= display.viewTo) { // Bottom overlap
      var cut = viewCuttingPoint(cm, from, from, -1);
      if (cut) {
        display.view = display.view.slice(0, cut.index);
        display.viewTo = cut.lineN;
      } else {
        resetView(cm);
      }
    } else { // Gap in the middle
      var cutTop = viewCuttingPoint(cm, from, from, -1);
      var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
      if (cutTop && cutBot) {
        display.view = display.view.slice(0, cutTop.index)
          .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
          .concat(display.view.slice(cutBot.index));
        display.viewTo += lendiff;
      } else {
        resetView(cm);
      }
    }

    var ext = display.externalMeasured;
    if (ext) {
      if (to < ext.lineN)
        ext.lineN += lendiff;
      else if (from < ext.lineN + ext.size)
        display.externalMeasured = null;
    }
  }

  // Register a change to a single line. Type must be one of "text",
  // "gutter", "class", "widget"
  function regLineChange(cm, line, type) {
    cm.curOp.viewChanged = true;
    var display = cm.display, ext = cm.display.externalMeasured;
    if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
      display.externalMeasured = null;

    if (line < display.viewFrom || line >= display.viewTo) return;
    var lineView = display.view[findViewIndex(cm, line)];
    if (lineView.node == null) return;
    var arr = lineView.changes || (lineView.changes = []);
    if (indexOf(arr, type) == -1) arr.push(type);
  }

  // Clear the view.
  function resetView(cm) {
    cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
    cm.display.view = [];
    cm.display.viewOffset = 0;
  }

  // Find the view element corresponding to a given line. Return null
  // when the line isn't visible.
  function findViewIndex(cm, n) {
    if (n >= cm.display.viewTo) return null;
    n -= cm.display.viewFrom;
    if (n < 0) return null;
    var view = cm.display.view;
    for (var i = 0; i < view.length; i++) {
      n -= view[i].size;
      if (n < 0) return i;
    }
  }

  function viewCuttingPoint(cm, oldN, newN, dir) {
    var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
    if (!sawCollapsedSpans) return {index: index, lineN: newN};
    for (var i = 0, n = cm.display.viewFrom; i < index; i++)
      n += view[i].size;
    if (n != oldN) {
      if (dir > 0) {
        if (index == view.length - 1) return null;
        diff = (n + view[index].size) - oldN;
        index++;
      } else {
        diff = n - oldN;
      }
      oldN += diff; newN += diff;
    }
    while (visualLineNo(cm.doc, newN) != newN) {
      if (index == (dir < 0 ? 0 : view.length - 1)) return null;
      newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
      index += dir;
    }
    return {index: index, lineN: newN};
  }

  // Force the view to cover a given range, adding empty view element
  // or clipping off existing ones as needed.
  function adjustView(cm, from, to) {
    var display = cm.display, view = display.view;
    if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
      display.view = buildViewArray(cm, from, to);
      display.viewFrom = from;
    } else {
      if (display.viewFrom > from)
        display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view);
      else if (display.viewFrom < from)
        display.view = display.view.slice(findViewIndex(cm, from));
      display.viewFrom = from;
      if (display.viewTo < to)
        display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
      else if (display.viewTo > to)
        display.view = display.view.slice(0, findViewIndex(cm, to));
    }
    display.viewTo = to;
  }

  // Count the number of lines in the view whose DOM representation is
  // out of date (or nonexistent).
  function countDirtyView(cm) {
    var view = cm.display.view, dirty = 0;
    for (var i = 0; i < view.length; i++) {
      var lineView = view[i];
      if (!lineView.hidden && (!lineView.node || lineView.changes)) ++dirty;
    }
    return dirty;
  }

  // INPUT HANDLING

  // Poll for input changes, using the normal rate of polling. This
  // runs as long as the editor is focused.
  function slowPoll(cm) {
    if (cm.display.pollingFast) return;
    cm.display.poll.set(cm.options.pollInterval, function() {
      readInput(cm);
      if (cm.state.focused) slowPoll(cm);
    });
  }

  // When an event has just come in that is likely to add or change
  // something in the input textarea, we poll faster, to ensure that
  // the change appears on the screen quickly.
  function fastPoll(cm) {
    var missed = false;
    cm.display.pollingFast = true;
    function p() {
      var changed = readInput(cm);
      if (!changed && !missed) {missed = true; cm.display.poll.set(60, p);}
      else {cm.display.pollingFast = false; slowPoll(cm);}
    }
    cm.display.poll.set(20, p);
  }

  // Read input from the textarea, and update the document to match.
  // When something is selected, it is present in the textarea, and
  // selected (unless it is huge, in which case a placeholder is
  // used). When nothing is selected, the cursor sits after previously
  // seen text (can be empty), which is stored in prevInput (we must
  // not reset the textarea when typing, because that breaks IME).
  function readInput(cm) {
    var input = cm.display.input, prevInput = cm.display.prevInput, doc = cm.doc;
    // Since this is called a *lot*, try to bail out as cheaply as
    // possible when it is clear that nothing happened. hasSelection
    // will be the case when there is a lot of text in the textarea,
    // in which case reading its value would be expensive.
    if (!cm.state.focused || (hasSelection(input) && !prevInput) || isReadOnly(cm) || cm.options.disableInput)
      return false;
    // See paste handler for more on the fakedLastChar kludge
    if (cm.state.pasteIncoming && cm.state.fakedLastChar) {
      input.value = input.value.substring(0, input.value.length - 1);
      cm.state.fakedLastChar = false;
    }
    var text = input.value;
    // If nothing changed, bail.
    if (text == prevInput && !cm.somethingSelected()) return false;
    // Work around nonsensical selection resetting in IE9/10
    if (ie && !ie_upto8 && cm.display.inputHasSelection === text) {
      resetInput(cm);
      return false;
    }

    var withOp = !cm.curOp;
    if (withOp) startOperation(cm);
    cm.display.shift = false;

    // Find the part of the input that is actually new
    var same = 0, l = Math.min(prevInput.length, text.length);
    while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) ++same;
    var inserted = text.slice(same), textLines = splitLines(inserted);

    // When pasing N lines into N selections, insert one line per selection
    var multiPaste = cm.state.pasteIncoming && textLines.length > 1 && doc.sel.ranges.length == textLines.length;

    // Normal behavior is to insert the new text into every selection
    for (var i = doc.sel.ranges.length - 1; i >= 0; i--) {
      var range = doc.sel.ranges[i];
      var from = range.from(), to = range.to();
      // Handle deletion
      if (same < prevInput.length)
        from = Pos(from.line, from.ch - (prevInput.length - same));
      // Handle overwrite
      else if (cm.state.overwrite && range.empty() && !cm.state.pasteIncoming)
        to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length));
      var updateInput = cm.curOp.updateInput;
      var changeEvent = {from: from, to: to, text: multiPaste ? [textLines[i]] : textLines,
                         origin: cm.state.pasteIncoming ? "paste" : cm.state.cutIncoming ? "cut" : "+input"};
      makeChange(cm.doc, changeEvent);
      signalLater(cm, "inputRead", cm, changeEvent);
      // When an 'electric' character is inserted, immediately trigger a reindent
      if (inserted && !cm.state.pasteIncoming && cm.options.electricChars &&
          cm.options.smartIndent && range.head.ch < 100 &&
          (!i || doc.sel.ranges[i - 1].head.line != range.head.line)) {
        var mode = cm.getModeAt(range.head);
        if (mode.electricChars) {
          for (var j = 0; j < mode.electricChars.length; j++)
            if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
              indentLine(cm, range.head.line, "smart");
              break;
            }
        } else if (mode.electricInput) {
          var end = changeEnd(changeEvent);
          if (mode.electricInput.test(getLine(doc, end.line).text.slice(0, end.ch)))
            indentLine(cm, range.head.line, "smart");
        }
      }
    }
    ensureCursorVisible(cm);
    cm.curOp.updateInput = updateInput;
    cm.curOp.typing = true;

    // Don't leave long text in the textarea, since it makes further polling slow
    if (text.length > 1000 || text.indexOf("\n") > -1) input.value = cm.display.prevInput = "";
    else cm.display.prevInput = text;
    if (withOp) endOperation(cm);
    cm.state.pasteIncoming = cm.state.cutIncoming = false;
    return true;
  }

  // Reset the input to correspond to the selection (or to be empty,
  // when not typing and nothing is selected)
  function resetInput(cm, typing) {
    var minimal, selected, doc = cm.doc;
    if (cm.somethingSelected()) {
      cm.display.prevInput = "";
      var range = doc.sel.primary();
      minimal = hasCopyEvent &&
        (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000);
      var content = minimal ? "-" : selected || cm.getSelection();
      cm.display.input.value = content;
      if (cm.state.focused) selectInput(cm.display.input);
      if (ie && !ie_upto8) cm.display.inputHasSelection = content;
    } else if (!typing) {
      cm.display.prevInput = cm.display.input.value = "";
      if (ie && !ie_upto8) cm.display.inputHasSelection = null;
    }
    cm.display.inaccurateSelection = minimal;
  }

  function focusInput(cm) {
    if (cm.options.readOnly != "nocursor" && (!mobile || activeElt() != cm.display.input))
      cm.display.input.focus();
  }

  function ensureFocus(cm) {
    if (!cm.state.focused) { focusInput(cm); onFocus(cm); }
  }

  function isReadOnly(cm) {
    return cm.options.readOnly || cm.doc.cantEdit;
  }

  // EVENT HANDLERS

  // Attach the necessary event handlers when initializing the editor
  function registerEventHandlers(cm) {
    var d = cm.display;
    on(d.scroller, "mousedown", operation(cm, onMouseDown));
    // Older IE's will not fire a second mousedown for a double click
    if (ie_upto10)
      on(d.scroller, "dblclick", operation(cm, function(e) {
        if (signalDOMEvent(cm, e)) return;
        var pos = posFromMouse(cm, e);
        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) return;
        e_preventDefault(e);
        var word = findWordAt(cm.doc, pos);
        extendSelection(cm.doc, word.anchor, word.head);
      }));
    else
      on(d.scroller, "dblclick", function(e) { signalDOMEvent(cm, e) || e_preventDefault(e); });
    // Prevent normal selection in the editor (we handle our own)
    on(d.lineSpace, "selectstart", function(e) {
      if (!eventInWidget(d, e)) e_preventDefault(e);
    });
    // Some browsers fire contextmenu *after* opening the menu, at
    // which point we can't mess with it anymore. Context menu is
    // handled in onMouseDown for these browsers.
    if (!captureRightClick) on(d.scroller, "contextmenu", function(e) {onContextMenu(cm, e);});

    // Sync scrolling between fake scrollbars and real scrollable
    // area, ensure viewport is updated when scrolling.
    on(d.scroller, "scroll", function() {
      if (d.scroller.clientHeight) {
        setScrollTop(cm, d.scroller.scrollTop);
        setScrollLeft(cm, d.scroller.scrollLeft, true);
        signal(cm, "scroll", cm);
      }
    });
    on(d.scrollbarV, "scroll", function() {
      if (d.scroller.clientHeight) setScrollTop(cm, d.scrollbarV.scrollTop);
    });
    on(d.scrollbarH, "scroll", function() {
      if (d.scroller.clientHeight) setScrollLeft(cm, d.scrollbarH.scrollLeft);
    });

    // Listen to wheel events in order to try and update the viewport on time.
    on(d.scroller, "mousewheel", function(e){onScrollWheel(cm, e);});
    on(d.scroller, "DOMMouseScroll", function(e){onScrollWheel(cm, e);});

    // Prevent clicks in the scrollbars from killing focus
    function reFocus() { if (cm.state.focused) setTimeout(bind(focusInput, cm), 0); }
    on(d.scrollbarH, "mousedown", reFocus);
    on(d.scrollbarV, "mousedown", reFocus);
    // Prevent wrapper from ever scrolling
    on(d.wrapper, "scroll", function() { d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

    // When the window resizes, we need to refresh active editors.
    var resizeTimer;
    function onResize() {
      if (resizeTimer == null) resizeTimer = setTimeout(function() {
        resizeTimer = null;
        // Might be a text scaling operation, clear size caches.
        d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = knownScrollbarWidth = null;
        cm.setSize();
      }, 100);
    }
    on(window, "resize", onResize);
    // The above handler holds on to the editor and its data
    // structures. Here we poll to unregister it when the editor is no
    // longer in the document, so that it can be garbage-collected.
    function unregister() {
      if (contains(document.body, d.wrapper)) setTimeout(unregister, 5000);
      else off(window, "resize", onResize);
    }
    setTimeout(unregister, 5000);

    on(d.input, "keyup", operation(cm, onKeyUp));
    on(d.input, "input", function() {
      if (ie && !ie_upto8 && cm.display.inputHasSelection) cm.display.inputHasSelection = null;
      fastPoll(cm);
    });
    on(d.input, "keydown", operation(cm, onKeyDown));
    on(d.input, "keypress", operation(cm, onKeyPress));
    on(d.input, "focus", bind(onFocus, cm));
    on(d.input, "blur", bind(onBlur, cm));

    function drag_(e) {
      if (!signalDOMEvent(cm, e)) e_stop(e);
    }
    if (cm.options.dragDrop) {
      on(d.scroller, "dragstart", function(e){onDragStart(cm, e);});
      on(d.scroller, "dragenter", drag_);
      on(d.scroller, "dragover", drag_);
      on(d.scroller, "drop", operation(cm, onDrop));
    }
    on(d.scroller, "paste", function(e) {
      if (eventInWidget(d, e)) return;
      cm.state.pasteIncoming = true;
      focusInput(cm);
      fastPoll(cm);
    });
    on(d.input, "paste", function() {
      // Workaround for webkit bug https://bugs.webkit.org/show_bug.cgi?id=90206
      // Add a char to the end of textarea before paste occur so that
      // selection doesn't span to the end of textarea.
      if (webkit && !cm.state.fakedLastChar && !(new Date - cm.state.lastMiddleDown < 200)) {
        var start = d.input.selectionStart, end = d.input.selectionEnd;
        d.input.value += "$";
        d.input.selectionStart = start;
        d.input.selectionEnd = end;
        cm.state.fakedLastChar = true;
      }
      cm.state.pasteIncoming = true;
      fastPoll(cm);
    });

    function prepareCopyCut(e) {
      if (cm.somethingSelected()) {
        if (d.inaccurateSelection) {
          d.prevInput = "";
          d.inaccurateSelection = false;
          d.input.value = cm.getSelection();
          selectInput(d.input);
        }
      } else {
        var text = "", ranges = [];
        for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
          var line = cm.doc.sel.ranges[i].head.line;
          var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
          ranges.push(lineRange);
          text += cm.getRange(lineRange.anchor, lineRange.head);
        }
        if (e.type == "cut") {
          cm.setSelections(ranges, null, sel_dontScroll);
        } else {
          d.prevInput = "";
          d.input.value = text;
          selectInput(d.input);
        }
      }
      if (e.type == "cut") cm.state.cutIncoming = true;
    }
    on(d.input, "cut", prepareCopyCut);
    on(d.input, "copy", prepareCopyCut);

    // Needed to handle Tab key in KHTML
    if (khtml) on(d.sizer, "mouseup", function() {
      if (activeElt() == d.input) d.input.blur();
      focusInput(cm);
    });
  }

  // MOUSE EVENTS

  // Return true when the given mouse event happened in a widget
  function eventInWidget(display, e) {
    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
      if (!n || n.ignoreEvents || n.parentNode == display.sizer && n != display.mover) return true;
    }
  }

  // Given a mouse event, find the corresponding position. If liberal
  // is false, it checks whether a gutter or scrollbar was clicked,
  // and returns null if it was. forRect is used by rectangular
  // selections, and tries to estimate a character position even for
  // coordinates beyond the right of the text.
  function posFromMouse(cm, e, liberal, forRect) {
    var display = cm.display;
    if (!liberal) {
      var target = e_target(e);
      if (target == display.scrollbarH || target == display.scrollbarV ||
          target == display.scrollbarFiller || target == display.gutterFiller) return null;
    }
    var x, y, space = display.lineSpace.getBoundingClientRect();
    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
    try { x = e.clientX - space.left; y = e.clientY - space.top; }
    catch (e) { return null; }
    var coords = coordsChar(cm, x, y), line;
    if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
      var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
      coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
    }
    return coords;
  }

  // A mouse down can be a single click, double click, triple click,
  // start of selection drag, start of text drag, new cursor
  // (ctrl-click), rectangle drag (alt-drag), or xwin
  // middle-click-paste. Or it might be a click on something we should
  // not interfere with, such as a scrollbar or widget.
  function onMouseDown(e) {
    if (signalDOMEvent(this, e)) return;
    var cm = this, display = cm.display;
    display.shift = e.shiftKey;

    if (eventInWidget(display, e)) {
      if (!webkit) {
        // Briefly turn off draggability, to allow widgets to do
        // normal dragging things.
        display.scroller.draggable = false;
        setTimeout(function(){display.scroller.draggable = true;}, 100);
      }
      return;
    }
    if (clickInGutter(cm, e)) return;
    var start = posFromMouse(cm, e);
    window.focus();

    switch (e_button(e)) {
    case 1:
      if (start)
        leftButtonDown(cm, e, start);
      else if (e_target(e) == display.scroller)
        e_preventDefault(e);
      break;
    case 2:
      if (webkit) cm.state.lastMiddleDown = +new Date;
      if (start) extendSelection(cm.doc, start);
      setTimeout(bind(focusInput, cm), 20);
      e_preventDefault(e);
      break;
    case 3:
      if (captureRightClick) onContextMenu(cm, e);
      break;
    }
  }

  var lastClick, lastDoubleClick;
  function leftButtonDown(cm, e, start) {
    setTimeout(bind(ensureFocus, cm), 0);

    var now = +new Date, type;
    if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
      type = "triple";
    } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
      type = "double";
      lastDoubleClick = {time: now, pos: start};
    } else {
      type = "single";
      lastClick = {time: now, pos: start};
    }

    var sel = cm.doc.sel, addNew = mac ? e.metaKey : e.ctrlKey;
    if (cm.options.dragDrop && dragAndDrop && !addNew && !isReadOnly(cm) &&
        type == "single" && sel.contains(start) > -1 && sel.somethingSelected())
      leftButtonStartDrag(cm, e, start);
    else
      leftButtonSelect(cm, e, start, type, addNew);
  }

  // Start a text drag. When it ends, see if any dragging actually
  // happen, and treat as a click if it didn't.
  function leftButtonStartDrag(cm, e, start) {
    var display = cm.display;
    var dragEnd = operation(cm, function(e2) {
      if (webkit) display.scroller.draggable = false;
      cm.state.draggingText = false;
      off(document, "mouseup", dragEnd);
      off(display.scroller, "drop", dragEnd);
      if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
        e_preventDefault(e2);
        extendSelection(cm.doc, start);
        focusInput(cm);
        // Work around unexplainable focus problem in IE9 (#2127)
        if (ie_upto10 && !ie_upto8)
          setTimeout(function() {document.body.focus(); focusInput(cm);}, 20);
      }
    });
    // Let the drag handler handle this.
    if (webkit) display.scroller.draggable = true;
    cm.state.draggingText = dragEnd;
    // IE's approach to draggable
    if (display.scroller.dragDrop) display.scroller.dragDrop();
    on(document, "mouseup", dragEnd);
    on(display.scroller, "drop", dragEnd);
  }

  // Normal selection, as opposed to text dragging.
  function leftButtonSelect(cm, e, start, type, addNew) {
    var display = cm.display, doc = cm.doc;
    e_preventDefault(e);

    var ourRange, ourIndex, startSel = doc.sel;
    if (addNew && !e.shiftKey) {
      ourIndex = doc.sel.contains(start);
      if (ourIndex > -1)
        ourRange = doc.sel.ranges[ourIndex];
      else
        ourRange = new Range(start, start);
    } else {
      ourRange = doc.sel.primary();
    }

    if (e.altKey) {
      type = "rect";
      if (!addNew) ourRange = new Range(start, start);
      start = posFromMouse(cm, e, true, true);
      ourIndex = -1;
    } else if (type == "double") {
      var word = findWordAt(doc, start);
      if (cm.display.shift || doc.extend)
        ourRange = extendRange(doc, ourRange, word.anchor, word.head);
      else
        ourRange = word;
    } else if (type == "triple") {
      var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)));
      if (cm.display.shift || doc.extend)
        ourRange = extendRange(doc, ourRange, line.anchor, line.head);
      else
        ourRange = line;
    } else {
      ourRange = extendRange(doc, ourRange, start);
    }

    if (!addNew) {
      ourIndex = 0;
      setSelection(doc, new Selection([ourRange], 0), sel_mouse);
      startSel = doc.sel;
    } else if (ourIndex > -1) {
      replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
    } else {
      ourIndex = doc.sel.ranges.length;
      setSelection(doc, normalizeSelection(doc.sel.ranges.concat([ourRange]), ourIndex),
                   {scroll: false, origin: "*mouse"});
    }

    var lastPos = start;
    function extendTo(pos) {
      if (cmp(lastPos, pos) == 0) return;
      lastPos = pos;

      if (type == "rect") {
        var ranges = [], tabSize = cm.options.tabSize;
        var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
        var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
        var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
        for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
             line <= end; line++) {
          var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
          if (left == right)
            ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
          else if (text.length > leftPos)
            ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
        }
        if (!ranges.length) ranges.push(new Range(start, start));
        setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex), sel_mouse);
      } else {
        var oldRange = ourRange;
        var anchor = oldRange.anchor, head = pos;
        if (type != "single") {
          if (type == "double")
            var range = findWordAt(doc, pos);
          else
            var range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0)));
          if (cmp(range.anchor, anchor) > 0) {
            head = range.head;
            anchor = minPos(oldRange.from(), range.anchor);
          } else {
            head = range.anchor;
            anchor = maxPos(oldRange.to(), range.head);
          }
        }
        var ranges = startSel.ranges.slice(0);
        ranges[ourIndex] = new Range(clipPos(doc, anchor), head);
        setSelection(doc, normalizeSelection(ranges, ourIndex), sel_mouse);
      }
    }

    var editorSize = display.wrapper.getBoundingClientRect();
    // Used to ensure timeout re-tries don't fire when another extend
    // happened in the meantime (clearTimeout isn't reliable -- at
    // least on Chrome, the timeouts still happen even when cleared,
    // if the clear happens after their scheduled firing time).
    var counter = 0;

    function extend(e) {
      var curCount = ++counter;
      var cur = posFromMouse(cm, e, true, type == "rect");
      if (!cur) return;
      if (cmp(cur, lastPos) != 0) {
        ensureFocus(cm);
        extendTo(cur);
        var visible = visibleLines(display, doc);
        if (cur.line >= visible.to || cur.line < visible.from)
          setTimeout(operation(cm, function(){if (counter == curCount) extend(e);}), 150);
      } else {
        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
        if (outside) setTimeout(operation(cm, function() {
          if (counter != curCount) return;
          display.scroller.scrollTop += outside;
          extend(e);
        }), 50);
      }
    }

    function done(e) {
      counter = Infinity;
      e_preventDefault(e);
      focusInput(cm);
      off(document, "mousemove", move);
      off(document, "mouseup", up);
      doc.history.lastSelOrigin = null;
    }

    var move = operation(cm, function(e) {
      if ((ie && !ie_upto9) ?  !e.buttons : !e_button(e)) done(e);
      else extend(e);
    });
    var up = operation(cm, done);
    on(document, "mousemove", move);
    on(document, "mouseup", up);
  }

  // Determines whether an event happened in the gutter, and fires the
  // handlers for the corresponding event.
  function gutterEvent(cm, e, type, prevent, signalfn) {
    try { var mX = e.clientX, mY = e.clientY; }
    catch(e) { return false; }
    if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) return false;
    if (prevent) e_preventDefault(e);

    var display = cm.display;
    var lineBox = display.lineDiv.getBoundingClientRect();

    if (mY > lineBox.bottom || !hasHandler(cm, type)) return e_defaultPrevented(e);
    mY -= lineBox.top - display.viewOffset;

    for (var i = 0; i < cm.options.gutters.length; ++i) {
      var g = display.gutters.childNodes[i];
      if (g && g.getBoundingClientRect().right >= mX) {
        var line = lineAtHeight(cm.doc, mY);
        var gutter = cm.options.gutters[i];
        signalfn(cm, type, cm, line, gutter, e);
        return e_defaultPrevented(e);
      }
    }
  }

  function clickInGutter(cm, e) {
    return gutterEvent(cm, e, "gutterClick", true, signalLater);
  }

  // Kludge to work around strange IE behavior where it'll sometimes
  // re-fire a series of drag-related events right after the drop (#1551)
  var lastDrop = 0;

  function onDrop(e) {
    var cm = this;
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
      return;
    e_preventDefault(e);
    if (ie) lastDrop = +new Date;
    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
    if (!pos || isReadOnly(cm)) return;
    // Might be a file drop, in which case we simply extract the text
    // and insert it.
    if (files && files.length && window.FileReader && window.File) {
      var n = files.length, text = Array(n), read = 0;
      var loadFile = function(file, i) {
        var reader = new FileReader;
        reader.onload = operation(cm, function() {
          text[i] = reader.result;
          if (++read == n) {
            pos = clipPos(cm.doc, pos);
            var change = {from: pos, to: pos, text: splitLines(text.join("\n")), origin: "paste"};
            makeChange(cm.doc, change);
            setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
          }
        });
        reader.readAsText(file);
      };
      for (var i = 0; i < n; ++i) loadFile(files[i], i);
    } else { // Normal drop
      // Don't do a replace if the drop happened inside of the selected text.
      if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
        cm.state.draggingText(e);
        // Ensure the editor is re-focused
        setTimeout(bind(focusInput, cm), 20);
        return;
      }
      try {
        var text = e.dataTransfer.getData("Text");
        if (text) {
          var selected = cm.state.draggingText && cm.listSelections();
          setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
          if (selected) for (var i = 0; i < selected.length; ++i)
            replaceRange(cm.doc, "", selected[i].anchor, selected[i].head, "drag");
          cm.replaceSelection(text, "around", "paste");
          focusInput(cm);
        }
      }
      catch(e){}
    }
  }

  function onDragStart(cm, e) {
    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return; }
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) return;

    e.dataTransfer.setData("Text", cm.getSelection());

    // Use dummy image instead of default browsers image.
    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
    if (e.dataTransfer.setDragImage && !safari) {
      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
      if (presto) {
        img.width = img.height = 1;
        cm.display.wrapper.appendChild(img);
        // Force a relayout, or Opera won't use our image for some obscure reason
        img._top = img.offsetTop;
      }
      e.dataTransfer.setDragImage(img, 0, 0);
      if (presto) img.parentNode.removeChild(img);
    }
  }

  // SCROLL EVENTS

  // Sync the scrollable area and scrollbars, ensure the viewport
  // covers the visible area.
  function setScrollTop(cm, val) {
    if (Math.abs(cm.doc.scrollTop - val) < 2) return;
    cm.doc.scrollTop = val;
    if (!gecko) updateDisplay(cm, {top: val});
    if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val;
    if (cm.display.scrollbarV.scrollTop != val) cm.display.scrollbarV.scrollTop = val;
    if (gecko) updateDisplay(cm);
    startWorker(cm, 100);
  }
  // Sync scroller and scrollbar, ensure the gutter elements are
  // aligned.
  function setScrollLeft(cm, val, isScroller) {
    if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) return;
    val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
    cm.doc.scrollLeft = val;
    alignHorizontally(cm);
    if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val;
    if (cm.display.scrollbarH.scrollLeft != val) cm.display.scrollbarH.scrollLeft = val;
  }

  // Since the delta values reported on mouse wheel events are
  // unstandardized between browsers and even browser versions, and
  // generally horribly unpredictable, this code starts by measuring
  // the scroll effect that the first few mouse wheel events have,
  // and, from that, detects the way it can convert deltas to pixel
  // offsets afterwards.
  //
  // The reason we want to know the amount a wheel event will scroll
  // is that it gives us a chance to update the display before the
  // actual scrolling happens, reducing flickering.

  var wheelSamples = 0, wheelPixelsPerUnit = null;
  // Fill in a browser-detected starting value on browsers where we
  // know one. These don't have to be accurate -- the result of them
  // being wrong would just be a slight flicker on the first wheel
  // scroll (if it is large enough).
  if (ie) wheelPixelsPerUnit = -.53;
  else if (gecko) wheelPixelsPerUnit = 15;
  else if (chrome) wheelPixelsPerUnit = -.7;
  else if (safari) wheelPixelsPerUnit = -1/3;

  function onScrollWheel(cm, e) {
    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail;
    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail;
    else if (dy == null) dy = e.wheelDelta;

    var display = cm.display, scroll = display.scroller;
    // Quit if there's nothing to scroll here
    if (!(dx && scroll.scrollWidth > scroll.clientWidth ||
          dy && scroll.scrollHeight > scroll.clientHeight)) return;

    // Webkit browsers on OS X abort momentum scrolls when the target
    // of the scroll event is removed from the scrollable element.
    // This hack (see related code in patchDisplay) makes sure the
    // element is kept around.
    if (dy && mac && webkit) {
      outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
        for (var i = 0; i < view.length; i++) {
          if (view[i].node == cur) {
            cm.display.currentWheelTarget = cur;
            break outer;
          }
        }
      }
    }

    // On some browsers, horizontal scrolling will cause redraws to
    // happen before the gutter has been realigned, causing it to
    // wriggle around in a most unseemly way. When we have an
    // estimated pixels/delta value, we just handle horizontal
    // scrolling entirely here. It'll be slightly off from native, but
    // better than glitching out.
    if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
      if (dy)
        setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight)));
      setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)));
      e_preventDefault(e);
      display.wheelStartX = null; // Abort measurement, if in progress
      return;
    }

    // 'Project' the visible viewport to cover the area that is being
    // scrolled into view (if we know enough to estimate it).
    if (dy && wheelPixelsPerUnit != null) {
      var pixels = dy * wheelPixelsPerUnit;
      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
      if (pixels < 0) top = Math.max(0, top + pixels - 50);
      else bot = Math.min(cm.doc.height, bot + pixels + 50);
      updateDisplay(cm, {top: top, bottom: bot});
    }

    if (wheelSamples < 20) {
      if (display.wheelStartX == null) {
        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
        display.wheelDX = dx; display.wheelDY = dy;
        setTimeout(function() {
          if (display.wheelStartX == null) return;
          var movedX = scroll.scrollLeft - display.wheelStartX;
          var movedY = scroll.scrollTop - display.wheelStartY;
          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
            (movedX && display.wheelDX && movedX / display.wheelDX);
          display.wheelStartX = display.wheelStartY = null;
          if (!sample) return;
          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
          ++wheelSamples;
        }, 200);
      } else {
        display.wheelDX += dx; display.wheelDY += dy;
      }
    }
  }

  // KEY EVENTS

  // Run a handler that was bound to a key.
  function doHandleBinding(cm, bound, dropShift) {
    if (typeof bound == "string") {
      bound = commands[bound];
      if (!bound) return false;
    }
    // Ensure previous input has been read, so that the handler sees a
    // consistent view of the document
    if (cm.display.pollingFast && readInput(cm)) cm.display.pollingFast = false;
    var prevShift = cm.display.shift, done = false;
    try {
      if (isReadOnly(cm)) cm.state.suppressEdits = true;
      if (dropShift) cm.display.shift = false;
      done = bound(cm) != Pass;
    } finally {
      cm.display.shift = prevShift;
      cm.state.suppressEdits = false;
    }
    return done;
  }

  // Collect the currently active keymaps.
  function allKeyMaps(cm) {
    var maps = cm.state.keyMaps.slice(0);
    if (cm.options.extraKeys) maps.push(cm.options.extraKeys);
    maps.push(cm.options.keyMap);
    return maps;
  }

  var maybeTransition;
  // Handle a key from the keydown event.
  function handleKeyBinding(cm, e) {
    // Handle automatic keymap transitions
    var startMap = getKeyMap(cm.options.keyMap), next = startMap.auto;
    clearTimeout(maybeTransition);
    if (next && !isModifierKey(e)) maybeTransition = setTimeout(function() {
      if (getKeyMap(cm.options.keyMap) == startMap) {
        cm.options.keyMap = (next.call ? next.call(null, cm) : next);
        keyMapChanged(cm);
      }
    }, 50);

    var name = keyName(e, true), handled = false;
    if (!name) return false;
    var keymaps = allKeyMaps(cm);

    if (e.shiftKey) {
      // First try to resolve full name (including 'Shift-'). Failing
      // that, see if there is a cursor-motion command (starting with
      // 'go') bound to the keyname without 'Shift-'.
      handled = lookupKey("Shift-" + name, keymaps, function(b) {return doHandleBinding(cm, b, true);})
             || lookupKey(name, keymaps, function(b) {
                  if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
                    return doHandleBinding(cm, b);
                });
    } else {
      handled = lookupKey(name, keymaps, function(b) { return doHandleBinding(cm, b); });
    }

    if (handled) {
      e_preventDefault(e);
      restartBlink(cm);
      signalLater(cm, "keyHandled", cm, name, e);
    }
    return handled;
  }

  // Handle a key from the keypress event
  function handleCharBinding(cm, e, ch) {
    var handled = lookupKey("'" + ch + "'", allKeyMaps(cm),
                            function(b) { return doHandleBinding(cm, b, true); });
    if (handled) {
      e_preventDefault(e);
      restartBlink(cm);
      signalLater(cm, "keyHandled", cm, "'" + ch + "'", e);
    }
    return handled;
  }

  var lastStoppedKey = null;
  function onKeyDown(e) {
    var cm = this;
    ensureFocus(cm);
    if (signalDOMEvent(cm, e)) return;
    // IE does strange things with escape.
    if (ie_upto10 && e.keyCode == 27) e.returnValue = false;
    var code = e.keyCode;
    cm.display.shift = code == 16 || e.shiftKey;
    var handled = handleKeyBinding(cm, e);
    if (presto) {
      lastStoppedKey = handled ? code : null;
      // Opera has no cut event... we try to at least catch the key combo
      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
        cm.replaceSelection("", null, "cut");
    }

    // Turn mouse into crosshair when Alt is held on Mac.
    if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
      showCrossHair(cm);
  }

  function showCrossHair(cm) {
    var lineDiv = cm.display.lineDiv;
    addClass(lineDiv, "CodeMirror-crosshair");

    function up(e) {
      if (e.keyCode == 18 || !e.altKey) {
        rmClass(lineDiv, "CodeMirror-crosshair");
        off(document, "keyup", up);
        off(document, "mouseover", up);
      }
    }
    on(document, "keyup", up);
    on(document, "mouseover", up);
  }

  function onKeyUp(e) {
    if (signalDOMEvent(this, e)) return;
    if (e.keyCode == 16) this.doc.sel.shift = false;
  }

  function onKeyPress(e) {
    var cm = this;
    if (signalDOMEvent(cm, e)) return;
    var keyCode = e.keyCode, charCode = e.charCode;
    if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return;}
    if (((presto && (!e.which || e.which < 10)) || khtml) && handleKeyBinding(cm, e)) return;
    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
    if (handleCharBinding(cm, e, ch)) return;
    if (ie && !ie_upto8) cm.display.inputHasSelection = null;
    fastPoll(cm);
  }

  // FOCUS/BLUR EVENTS

  function onFocus(cm) {
    if (cm.options.readOnly == "nocursor") return;
    if (!cm.state.focused) {
      signal(cm, "focus", cm);
      cm.state.focused = true;
      addClass(cm.display.wrapper, "CodeMirror-focused");
      // The prevInput test prevents this from firing when a context
      // menu is closed (since the resetInput would kill the
      // select-all detection hack)
      if (!cm.curOp && cm.display.selForContextMenu == cm.doc.sel) {
        resetInput(cm);
        if (webkit) setTimeout(bind(resetInput, cm, true), 0); // Issue #1730
      }
    }
    slowPoll(cm);
    restartBlink(cm);
  }
  function onBlur(cm) {
    if (cm.state.focused) {
      signal(cm, "blur", cm);
      cm.state.focused = false;
      rmClass(cm.display.wrapper, "CodeMirror-focused");
    }
    clearInterval(cm.display.blinker);
    setTimeout(function() {if (!cm.state.focused) cm.display.shift = false;}, 150);
  }

  // CONTEXT MENU HANDLING

  var detectingSelectAll;
  // To make the context menu work, we need to briefly unhide the
  // textarea (making it as unobtrusive as possible) to let the
  // right-click take effect on it.
  function onContextMenu(cm, e) {
    if (signalDOMEvent(cm, e, "contextmenu")) return;
    var display = cm.display;
    if (eventInWidget(display, e) || contextMenuInGutter(cm, e)) return;

    var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
    if (!pos || presto) return; // Opera is difficult.

    // Reset the current text selection only if the click is done outside of the selection
    // and 'resetSelectionOnContextMenu' option is true.
    var reset = cm.options.resetSelectionOnContextMenu;
    if (reset && cm.doc.sel.contains(pos) == -1)
      operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);

    var oldCSS = display.input.style.cssText;
    display.inputDiv.style.position = "absolute";
    display.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) +
      "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: " +
      (ie ? "rgba(255, 255, 255, .05)" : "transparent") +
      "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
    focusInput(cm);
    resetInput(cm);
    // Adds "Select all" to context menu in FF
    if (!cm.somethingSelected()) display.input.value = display.prevInput = " ";
    display.selForContextMenu = cm.doc.sel;

    // Select-all will be greyed out if there's nothing to select, so
    // this adds a zero-width space so that we can later check whether
    // it got selected.
    function prepareSelectAllHack() {
      if (display.input.selectionStart != null) {
        var selected = cm.somethingSelected();
        var extval = display.input.value = "\u200b" + (selected ? display.input.value : "");
        display.prevInput = selected ? "" : "\u200b";
        display.input.selectionStart = 1; display.input.selectionEnd = extval.length;
      }
    }
    function rehide() {
      display.inputDiv.style.position = "relative";
      display.input.style.cssText = oldCSS;
      if (ie_upto8) display.scrollbarV.scrollTop = display.scroller.scrollTop = scrollPos;
      slowPoll(cm);

      // Try to detect the user choosing select-all
      if (display.input.selectionStart != null) {
        if (!ie || ie_upto8) prepareSelectAllHack();
        clearTimeout(detectingSelectAll);
        var i = 0, poll = function() {
          if (display.selForContextMenu == cm.doc.sel && display.input.selectionStart == 0)
            operation(cm, commands.selectAll)(cm);
          else if (i++ < 10) detectingSelectAll = setTimeout(poll, 500);
          else resetInput(cm);
        };
        detectingSelectAll = setTimeout(poll, 200);
      }
    }

    if (ie && !ie_upto8) prepareSelectAllHack();
    if (captureRightClick) {
      e_stop(e);
      var mouseup = function() {
        off(window, "mouseup", mouseup);
        setTimeout(rehide, 20);
      };
      on(window, "mouseup", mouseup);
    } else {
      setTimeout(rehide, 50);
    }
  }

  function contextMenuInGutter(cm, e) {
    if (!hasHandler(cm, "gutterContextMenu")) return false;
    return gutterEvent(cm, e, "gutterContextMenu", false, signal);
  }

  // UPDATING

  // Compute the position of the end of a change (its 'to' property
  // refers to the pre-change end).
  var changeEnd = CodeMirror.changeEnd = function(change) {
    if (!change.text) return change.to;
    return Pos(change.from.line + change.text.length - 1,
               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
  };

  // Adjust a position to refer to the post-change position of the
  // same text, or the end of the change if the change covers it.
  function adjustForChange(pos, change) {
    if (cmp(pos, change.from) < 0) return pos;
    if (cmp(pos, change.to) <= 0) return changeEnd(change);

    var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
    if (pos.line == change.to.line) ch += changeEnd(change).ch - change.to.ch;
    return Pos(line, ch);
  }

  function computeSelAfterChange(doc, change) {
    var out = [];
    for (var i = 0; i < doc.sel.ranges.length; i++) {
      var range = doc.sel.ranges[i];
      out.push(new Range(adjustForChange(range.anchor, change),
                         adjustForChange(range.head, change)));
    }
    return normalizeSelection(out, doc.sel.primIndex);
  }

  function offsetPos(pos, old, nw) {
    if (pos.line == old.line)
      return Pos(nw.line, pos.ch - old.ch + nw.ch);
    else
      return Pos(nw.line + (pos.line - old.line), pos.ch);
  }

  // Used by replaceSelections to allow moving the selection to the
  // start or around the replaced test. Hint may be "start" or "around".
  function computeReplacedSel(doc, changes, hint) {
    var out = [];
    var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];
      var from = offsetPos(change.from, oldPrev, newPrev);
      var to = offsetPos(changeEnd(change), oldPrev, newPrev);
      oldPrev = change.to;
      newPrev = to;
      if (hint == "around") {
        var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
        out[i] = new Range(inv ? to : from, inv ? from : to);
      } else {
        out[i] = new Range(from, from);
      }
    }
    return new Selection(out, doc.sel.primIndex);
  }

  // Allow "beforeChange" event handlers to influence a change
  function filterChange(doc, change, update) {
    var obj = {
      canceled: false,
      from: change.from,
      to: change.to,
      text: change.text,
      origin: change.origin,
      cancel: function() { this.canceled = true; }
    };
    if (update) obj.update = function(from, to, text, origin) {
      if (from) this.from = clipPos(doc, from);
      if (to) this.to = clipPos(doc, to);
      if (text) this.text = text;
      if (origin !== undefined) this.origin = origin;
    };
    signal(doc, "beforeChange", doc, obj);
    if (doc.cm) signal(doc.cm, "beforeChange", doc.cm, obj);

    if (obj.canceled) return null;
    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin};
  }

  // Apply a change to a document, and add it to the document's
  // history, and propagating it to all linked documents.
  function makeChange(doc, change, ignoreReadOnly) {
    if (doc.cm) {
      if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
      if (doc.cm.state.suppressEdits) return;
    }

    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
      change = filterChange(doc, change, true);
      if (!change) return;
    }

    // Possibly split or suppress the update based on the presence
    // of read-only spans in its range.
    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
    if (split) {
      for (var i = split.length - 1; i >= 0; --i)
        makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text});
    } else {
      makeChangeInner(doc, change);
    }
  }

  function makeChangeInner(doc, change) {
    if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) return;
    var selAfter = computeSelAfterChange(doc, change);
    addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
    var rebased = [];

    linkedDocs(doc, function(doc, sharedHist) {
      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change);
        rebased.push(doc.history);
      }
      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
    });
  }

  // Revert a change stored in a document's history.
  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
    if (doc.cm && doc.cm.state.suppressEdits) return;

    var hist = doc.history, event, selAfter = doc.sel;
    var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

    // Verify that there is a useable event (so that ctrl-z won't
    // needlessly clear selection events)
    for (var i = 0; i < source.length; i++) {
      event = source[i];
      if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
        break;
    }
    if (i == source.length) return;
    hist.lastOrigin = hist.lastSelOrigin = null;

    for (;;) {
      event = source.pop();
      if (event.ranges) {
        pushSelectionToHistory(event, dest);
        if (allowSelectionOnly && !event.equals(doc.sel)) {
          setSelection(doc, event, {clearRedo: false});
          return;
        }
        selAfter = event;
      }
      else break;
    }

    // Build up a reverse change object to add to the opposite history
    // stack (redo when undoing, and vice versa).
    var antiChanges = [];
    pushSelectionToHistory(selAfter, dest);
    dest.push({changes: antiChanges, generation: hist.generation});
    hist.generation = event.generation || ++hist.maxGeneration;

    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

    for (var i = event.changes.length - 1; i >= 0; --i) {
      var change = event.changes[i];
      change.origin = type;
      if (filter && !filterChange(doc, change, false)) {
        source.length = 0;
        return;
      }

      antiChanges.push(historyChangeFromChange(doc, change));

      var after = i ? computeSelAfterChange(doc, change, null) : lst(source);
      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
      if (doc.cm) ensureCursorVisible(doc.cm);
      var rebased = [];

      // Propagate to the linked documents
      linkedDocs(doc, function(doc, sharedHist) {
        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
          rebaseHist(doc.history, change);
          rebased.push(doc.history);
        }
        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
      });
    }
  }

  // Sub-views need their line numbers shifted when text is added
  // above or below them in the parent document.
  function shiftDoc(doc, distance) {
    doc.first += distance;
    doc.sel = new Selection(map(doc.sel.ranges, function(range) {
      return new Range(Pos(range.anchor.line + distance, range.anchor.ch),
                       Pos(range.head.line + distance, range.head.ch));
    }), doc.sel.primIndex);
    if (doc.cm) regChange(doc.cm, doc.first, doc.first - distance, distance);
  }

  // More lower-level change function, handling only a single document
  // (not linked ones).
  function makeChangeSingleDoc(doc, change, selAfter, spans) {
    if (doc.cm && !doc.cm.curOp)
      return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);

    if (change.to.line < doc.first) {
      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
      return;
    }
    if (change.from.line > doc.lastLine()) return;

    // Clip the change to the size of this doc
    if (change.from.line < doc.first) {
      var shift = change.text.length - 1 - (doc.first - change.from.line);
      shiftDoc(doc, shift);
      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
                text: [lst(change.text)], origin: change.origin};
    }
    var last = doc.lastLine();
    if (change.to.line > last) {
      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
                text: [change.text[0]], origin: change.origin};
    }

    change.removed = getBetween(doc, change.from, change.to);

    if (!selAfter) selAfter = computeSelAfterChange(doc, change, null);
    if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans);
    else updateDoc(doc, change, spans);
    setSelectionNoUndo(doc, selAfter, sel_dontScroll);
  }

  // Handle the interaction of a change to a document with the editor
  // that this document is part of.
  function makeChangeSingleDocInEditor(cm, change, spans) {
    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

    var recomputeMaxLength = false, checkWidthStart = from.line;
    if (!cm.options.lineWrapping) {
      checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
      doc.iter(checkWidthStart, to.line + 1, function(line) {
        if (line == display.maxLine) {
          recomputeMaxLength = true;
          return true;
        }
      });
    }

    if (doc.sel.contains(change.from, change.to) > -1)
      signalCursorActivity(cm);

    updateDoc(doc, change, spans, estimateHeight(cm));

    if (!cm.options.lineWrapping) {
      doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
        var len = lineLength(line);
        if (len > display.maxLineLength) {
          display.maxLine = line;
          display.maxLineLength = len;
          display.maxLineChanged = true;
          recomputeMaxLength = false;
        }
      });
      if (recomputeMaxLength) cm.curOp.updateMaxLine = true;
    }

    // Adjust frontier, schedule worker
    doc.frontier = Math.min(doc.frontier, from.line);
    startWorker(cm, 400);

    var lendiff = change.text.length - (to.line - from.line) - 1;
    // Remember that these lines changed, for updating the display
    if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
      regLineChange(cm, from.line, "text");
    else
      regChange(cm, from.line, to.line + 1, lendiff);

    var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
    if (changeHandler || changesHandler) {
      var obj = {
        from: from, to: to,
        text: change.text,
        removed: change.removed,
        origin: change.origin
      };
      if (changeHandler) signalLater(cm, "change", cm, obj);
      if (changesHandler) (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
    }
  }

  function replaceRange(doc, code, from, to, origin) {
    if (!to) to = from;
    if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp; }
    if (typeof code == "string") code = splitLines(code);
    makeChange(doc, {from: from, to: to, text: code, origin: origin});
  }

  // SCROLLING THINGS INTO VIEW

  // If an editor sits on the top or bottom of the window, partially
  // scrolled out of view, this ensures that the cursor is visible.
  function maybeScrollWindow(cm, coords) {
    var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
    if (coords.top + box.top < 0) doScroll = true;
    else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false;
    if (doScroll != null && !phantom) {
      var scrollNode = elt("div", "\u200b", null, "position: absolute; top: " +
                           (coords.top - display.viewOffset - paddingTop(cm.display)) + "px; height: " +
                           (coords.bottom - coords.top + scrollerCutOff) + "px; left: " +
                           coords.left + "px; width: 2px;");
      cm.display.lineSpace.appendChild(scrollNode);
      scrollNode.scrollIntoView(doScroll);
      cm.display.lineSpace.removeChild(scrollNode);
    }
  }

  // Scroll a given position into view (immediately), verifying that
  // it actually became visible (as line heights are accurately
  // measured, the position of something may 'drift' during drawing).
  function scrollPosIntoView(cm, pos, end, margin) {
    if (margin == null) margin = 0;
    for (;;) {
      var changed = false, coords = cursorCoords(cm, pos);
      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
      var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
                                         Math.min(coords.top, endCoords.top) - margin,
                                         Math.max(coords.left, endCoords.left),
                                         Math.max(coords.bottom, endCoords.bottom) + margin);
      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
      if (scrollPos.scrollTop != null) {
        setScrollTop(cm, scrollPos.scrollTop);
        if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true;
      }
      if (scrollPos.scrollLeft != null) {
        setScrollLeft(cm, scrollPos.scrollLeft);
        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true;
      }
      if (!changed) return coords;
    }
  }

  // Scroll a given set of coordinates into view (immediately).
  function scrollIntoView(cm, x1, y1, x2, y2) {
    var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
    if (scrollPos.scrollTop != null) setScrollTop(cm, scrollPos.scrollTop);
    if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft);
  }

  // Calculate a new scroll position needed to scroll the given
  // rectangle into view. Returns an object with scrollTop and
  // scrollLeft properties. When these are undefined, the
  // vertical/horizontal position does not need to be adjusted.
  function calculateScrollPos(cm, x1, y1, x2, y2) {
    var display = cm.display, snapMargin = textHeight(cm.display);
    if (y1 < 0) y1 = 0;
    var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
    var screen = display.scroller.clientHeight - scrollerCutOff, result = {};
    var docBottom = cm.doc.height + paddingVert(display);
    var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin;
    if (y1 < screentop) {
      result.scrollTop = atTop ? 0 : y1;
    } else if (y2 > screentop + screen) {
      var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
      if (newTop != screentop) result.scrollTop = newTop;
    }

    var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
    var screenw = display.scroller.clientWidth - scrollerCutOff;
    x1 += display.gutters.offsetWidth; x2 += display.gutters.offsetWidth;
    var gutterw = display.gutters.offsetWidth;
    var atLeft = x1 < gutterw + 10;
    if (x1 < screenleft + gutterw || atLeft) {
      if (atLeft) x1 = 0;
      result.scrollLeft = Math.max(0, x1 - 10 - gutterw);
    } else if (x2 > screenw + screenleft - 3) {
      result.scrollLeft = x2 + 10 - screenw;
    }
    return result;
  }

  // Store a relative adjustment to the scroll position in the current
  // operation (to be applied when the operation finishes).
  function addToScrollPos(cm, left, top) {
    if (left != null || top != null) resolveScrollToPos(cm);
    if (left != null)
      cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left;
    if (top != null)
      cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
  }

  // Make sure that at the end of the operation the current cursor is
  // shown.
  function ensureCursorVisible(cm) {
    resolveScrollToPos(cm);
    var cur = cm.getCursor(), from = cur, to = cur;
    if (!cm.options.lineWrapping) {
      from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur;
      to = Pos(cur.line, cur.ch + 1);
    }
    cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true};
  }

  // When an operation has its scrollToPos property set, and another
  // scroll action is applied before the end of the operation, this
  // 'simulates' scrolling that position into view in a cheap way, so
  // that the effect of intermediate scroll commands is not ignored.
  function resolveScrollToPos(cm) {
    var range = cm.curOp.scrollToPos;
    if (range) {
      cm.curOp.scrollToPos = null;
      var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
      var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
                                    Math.min(from.top, to.top) - range.margin,
                                    Math.max(from.right, to.right),
                                    Math.max(from.bottom, to.bottom) + range.margin);
      cm.scrollTo(sPos.scrollLeft, sPos.scrollTop);
    }
  }

  // API UTILITIES

  // Indent the given line. The how parameter can be "smart",
  // "add"/null, "subtract", or "prev". When aggressive is false
  // (typically set to true for forced single-line indents), empty
  // lines are not indented, and places where the mode returns Pass
  // are left alone.
  function indentLine(cm, n, how, aggressive) {
    var doc = cm.doc, state;
    if (how == null) how = "add";
    if (how == "smart") {
      // Fall back to "prev" when the mode doesn't have an indentation
      // method.
      if (!cm.doc.mode.indent) how = "prev";
      else state = getStateBefore(cm, n);
    }

    var tabSize = cm.options.tabSize;
    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
    if (line.stateAfter) line.stateAfter = null;
    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
    if (!aggressive && !/\S/.test(line.text)) {
      indentation = 0;
      how = "not";
    } else if (how == "smart") {
      indentation = cm.doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
      if (indentation == Pass) {
        if (!aggressive) return;
        how = "prev";
      }
    }
    if (how == "prev") {
      if (n > doc.first) indentation = countColumn(getLine(doc, n-1).text, null, tabSize);
      else indentation = 0;
    } else if (how == "add") {
      indentation = curSpace + cm.options.indentUnit;
    } else if (how == "subtract") {
      indentation = curSpace - cm.options.indentUnit;
    } else if (typeof how == "number") {
      indentation = curSpace + how;
    }
    indentation = Math.max(0, indentation);

    var indentString = "", pos = 0;
    if (cm.options.indentWithTabs)
      for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";}
    if (pos < indentation) indentString += spaceStr(indentation - pos);

    if (indentString != curSpaceString) {
      replaceRange(cm.doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
    } else {
      // Ensure that, if the cursor was in the whitespace at the start
      // of the line, it is moved to the end of that space.
      for (var i = 0; i < doc.sel.ranges.length; i++) {
        var range = doc.sel.ranges[i];
        if (range.head.line == n && range.head.ch < curSpaceString.length) {
          var pos = Pos(n, curSpaceString.length);
          replaceOneSelection(doc, i, new Range(pos, pos));
          break;
        }
      }
    }
    line.stateAfter = null;
  }

  // Utility for applying a change to a line by handle or number,
  // returning the number and optionally registering the line as
  // changed.
  function changeLine(cm, handle, changeType, op) {
    var no = handle, line = handle, doc = cm.doc;
    if (typeof handle == "number") line = getLine(doc, clipLine(doc, handle));
    else no = lineNo(handle);
    if (no == null) return null;
    if (op(line, no)) regLineChange(cm, no, changeType);
    return line;
  }

  // Helper for deleting text near the selection(s), used to implement
  // backspace, delete, and similar functionality.
  function deleteNearSelection(cm, compute) {
    var ranges = cm.doc.sel.ranges, kill = [];
    // Build up a set of ranges to kill first, merging overlapping
    // ranges.
    for (var i = 0; i < ranges.length; i++) {
      var toKill = compute(ranges[i]);
      while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
        var replaced = kill.pop();
        if (cmp(replaced.from, toKill.from) < 0) {
          toKill.from = replaced.from;
          break;
        }
      }
      kill.push(toKill);
    }
    // Next, remove those actual ranges.
    runInOp(cm, function() {
      for (var i = kill.length - 1; i >= 0; i--)
        replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete");
      ensureCursorVisible(cm);
    });
  }

  // Used for horizontal relative motion. Dir is -1 or 1 (left or
  // right), unit can be "char", "column" (like char, but doesn't
  // cross line boundaries), "word" (across next word), or "group" (to
  // the start of next group of word or non-word-non-whitespace
  // chars). The visually param controls whether, in right-to-left
  // text, direction 1 means to move towards the next index in the
  // string, or towards the character to the right of the current
  // position. The resulting position will have a hitSide=true
  // property if it reached the end of the document.
  function findPosH(doc, pos, dir, unit, visually) {
    var line = pos.line, ch = pos.ch, origDir = dir;
    var lineObj = getLine(doc, line);
    var possible = true;
    function findNextLine() {
      var l = line + dir;
      if (l < doc.first || l >= doc.first + doc.size) return (possible = false);
      line = l;
      return lineObj = getLine(doc, l);
    }
    function moveOnce(boundToLine) {
      var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true);
      if (next == null) {
        if (!boundToLine && findNextLine()) {
          if (visually) ch = (dir < 0 ? lineRight : lineLeft)(lineObj);
          else ch = dir < 0 ? lineObj.text.length : 0;
        } else return (possible = false);
      } else ch = next;
      return true;
    }

    if (unit == "char") moveOnce();
    else if (unit == "column") moveOnce(true);
    else if (unit == "word" || unit == "group") {
      var sawType = null, group = unit == "group";
      for (var first = true;; first = false) {
        if (dir < 0 && !moveOnce(!first)) break;
        var cur = lineObj.text.charAt(ch) || "\n";
        var type = isWordChar(cur) ? "w"
          : group && cur == "\n" ? "n"
          : !group || /\s/.test(cur) ? null
          : "p";
        if (group && !first && !type) type = "s";
        if (sawType && sawType != type) {
          if (dir < 0) {dir = 1; moveOnce();}
          break;
        }

        if (type) sawType = type;
        if (dir > 0 && !moveOnce(!first)) break;
      }
    }
    var result = skipAtomic(doc, Pos(line, ch), origDir, true);
    if (!possible) result.hitSide = true;
    return result;
  }

  // For relative vertical movement. Dir may be -1 or 1. Unit can be
  // "page" or "line". The resulting position will have a hitSide=true
  // property if it reached the end of the document.
  function findPosV(cm, pos, dir, unit) {
    var doc = cm.doc, x = pos.left, y;
    if (unit == "page") {
      var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
      y = pos.top + dir * (pageSize - (dir < 0 ? 1.5 : .5) * textHeight(cm.display));
    } else if (unit == "line") {
      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
    }
    for (;;) {
      var target = coordsChar(cm, x, y);
      if (!target.outside) break;
      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break; }
      y += dir * 5;
    }
    return target;
  }

  // Find the word at the given position (as returned by coordsChar).
  function findWordAt(doc, pos) {
    var line = getLine(doc, pos.line).text;
    var start = pos.ch, end = pos.ch;
    if (line) {
      if ((pos.xRel < 0 || end == line.length) && start) --start; else ++end;
      var startChar = line.charAt(start);
      var check = isWordChar(startChar) ? isWordChar
        : /\s/.test(startChar) ? function(ch) {return /\s/.test(ch);}
        : function(ch) {return !/\s/.test(ch) && !isWordChar(ch);};
      while (start > 0 && check(line.charAt(start - 1))) --start;
      while (end < line.length && check(line.charAt(end))) ++end;
    }
    return new Range(Pos(pos.line, start), Pos(pos.line, end));
  }

  // EDITOR METHODS

  // The publicly visible API. Note that methodOp(f) means
  // 'wrap f in an operation, performed on its `this` parameter'.

  // This is not the complete set of editor methods. Most of the
  // methods defined on the Doc type are also injected into
  // CodeMirror.prototype, for backwards compatibility and
  // convenience.

  CodeMirror.prototype = {
    constructor: CodeMirror,
    focus: function(){window.focus(); focusInput(this); fastPoll(this);},

    setOption: function(option, value) {
      var options = this.options, old = options[option];
      if (options[option] == value && option != "mode") return;
      options[option] = value;
      if (optionHandlers.hasOwnProperty(option))
        operation(this, optionHandlers[option])(this, value, old);
    },

    getOption: function(option) {return this.options[option];},
    getDoc: function() {return this.doc;},

    addKeyMap: function(map, bottom) {
      this.state.keyMaps[bottom ? "push" : "unshift"](map);
    },
    removeKeyMap: function(map) {
      var maps = this.state.keyMaps;
      for (var i = 0; i < maps.length; ++i)
        if (maps[i] == map || (typeof maps[i] != "string" && maps[i].name == map)) {
          maps.splice(i, 1);
          return true;
        }
    },

    addOverlay: methodOp(function(spec, options) {
      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
      if (mode.startState) throw new Error("Overlays may not be stateful.");
      this.state.overlays.push({mode: mode, modeSpec: spec, opaque: options && options.opaque});
      this.state.modeGen++;
      regChange(this);
    }),
    removeOverlay: methodOp(function(spec) {
      var overlays = this.state.overlays;
      for (var i = 0; i < overlays.length; ++i) {
        var cur = overlays[i].modeSpec;
        if (cur == spec || typeof spec == "string" && cur.name == spec) {
          overlays.splice(i, 1);
          this.state.modeGen++;
          regChange(this);
          return;
        }
      }
    }),

    indentLine: methodOp(function(n, dir, aggressive) {
      if (typeof dir != "string" && typeof dir != "number") {
        if (dir == null) dir = this.options.smartIndent ? "smart" : "prev";
        else dir = dir ? "add" : "subtract";
      }
      if (isLine(this.doc, n)) indentLine(this, n, dir, aggressive);
    }),
    indentSelection: methodOp(function(how) {
      var ranges = this.doc.sel.ranges, end = -1;
      for (var i = 0; i < ranges.length; i++) {
        var range = ranges[i];
        if (!range.empty()) {
          var start = Math.max(end, range.from().line);
          var to = range.to();
          end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
          for (var j = start; j < end; ++j)
            indentLine(this, j, how);
        } else if (range.head.line > end) {
          indentLine(this, range.head.line, how, true);
          end = range.head.line;
          if (i == this.doc.sel.primIndex) ensureCursorVisible(this);
        }
      }
    }),

    // Fetch the parser token for a given character. Useful for hacks
    // that want to inspect the mode state (say, for completion).
    getTokenAt: function(pos, precise) {
      var doc = this.doc;
      pos = clipPos(doc, pos);
      var state = getStateBefore(this, pos.line, precise), mode = this.doc.mode;
      var line = getLine(doc, pos.line);
      var stream = new StringStream(line.text, this.options.tabSize);
      while (stream.pos < pos.ch && !stream.eol()) {
        stream.start = stream.pos;
        var style = readToken(mode, stream, state);
      }
      return {start: stream.start,
              end: stream.pos,
              string: stream.current(),
              type: style || null,
              state: state};
    },

    getTokenTypeAt: function(pos) {
      pos = clipPos(this.doc, pos);
      var styles = getLineStyles(this, getLine(this.doc, pos.line));
      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
      var type;
      if (ch == 0) type = styles[2];
      else for (;;) {
        var mid = (before + after) >> 1;
        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid;
        else if (styles[mid * 2 + 1] < ch) before = mid + 1;
        else { type = styles[mid * 2 + 2]; break; }
      }
      var cut = type ? type.indexOf("cm-overlay ") : -1;
      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
    },

    getModeAt: function(pos) {
      var mode = this.doc.mode;
      if (!mode.innerMode) return mode;
      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode;
    },

    getHelper: function(pos, type) {
      return this.getHelpers(pos, type)[0];
    },

    getHelpers: function(pos, type) {
      var found = [];
      if (!helpers.hasOwnProperty(type)) return helpers;
      var help = helpers[type], mode = this.getModeAt(pos);
      if (typeof mode[type] == "string") {
        if (help[mode[type]]) found.push(help[mode[type]]);
      } else if (mode[type]) {
        for (var i = 0; i < mode[type].length; i++) {
          var val = help[mode[type][i]];
          if (val) found.push(val);
        }
      } else if (mode.helperType && help[mode.helperType]) {
        found.push(help[mode.helperType]);
      } else if (help[mode.name]) {
        found.push(help[mode.name]);
      }
      for (var i = 0; i < help._global.length; i++) {
        var cur = help._global[i];
        if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
          found.push(cur.val);
      }
      return found;
    },

    getStateAfter: function(line, precise) {
      var doc = this.doc;
      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
      return getStateBefore(this, line + 1, precise);
    },

    cursorCoords: function(start, mode) {
      var pos, range = this.doc.sel.primary();
      if (start == null) pos = range.head;
      else if (typeof start == "object") pos = clipPos(this.doc, start);
      else pos = start ? range.from() : range.to();
      return cursorCoords(this, pos, mode || "page");
    },

    charCoords: function(pos, mode) {
      return charCoords(this, clipPos(this.doc, pos), mode || "page");
    },

    coordsChar: function(coords, mode) {
      coords = fromCoordSystem(this, coords, mode || "page");
      return coordsChar(this, coords.left, coords.top);
    },

    lineAtHeight: function(height, mode) {
      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
      return lineAtHeight(this.doc, height + this.display.viewOffset);
    },
    heightAtLine: function(line, mode) {
      var end = false, last = this.doc.first + this.doc.size - 1;
      if (line < this.doc.first) line = this.doc.first;
      else if (line > last) { line = last; end = true; }
      var lineObj = getLine(this.doc, line);
      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page").top +
        (end ? this.doc.height - heightAtLine(lineObj) : 0);
    },

    defaultTextHeight: function() { return textHeight(this.display); },
    defaultCharWidth: function() { return charWidth(this.display); },

    setGutterMarker: methodOp(function(line, gutterID, value) {
      return changeLine(this, line, "gutter", function(line) {
        var markers = line.gutterMarkers || (line.gutterMarkers = {});
        markers[gutterID] = value;
        if (!value && isEmpty(markers)) line.gutterMarkers = null;
        return true;
      });
    }),

    clearGutter: methodOp(function(gutterID) {
      var cm = this, doc = cm.doc, i = doc.first;
      doc.iter(function(line) {
        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
          line.gutterMarkers[gutterID] = null;
          regLineChange(cm, i, "gutter");
          if (isEmpty(line.gutterMarkers)) line.gutterMarkers = null;
        }
        ++i;
      });
    }),

    addLineClass: methodOp(function(handle, where, cls) {
      return changeLine(this, handle, "class", function(line) {
        var prop = where == "text" ? "textClass" : where == "background" ? "bgClass" : "wrapClass";
        if (!line[prop]) line[prop] = cls;
        else if (new RegExp("(?:^|\\s)" + cls + "(?:$|\\s)").test(line[prop])) return false;
        else line[prop] += " " + cls;
        return true;
      });
    }),

    removeLineClass: methodOp(function(handle, where, cls) {
      return changeLine(this, handle, "class", function(line) {
        var prop = where == "text" ? "textClass" : where == "background" ? "bgClass" : "wrapClass";
        var cur = line[prop];
        if (!cur) return false;
        else if (cls == null) line[prop] = null;
        else {
          var found = cur.match(new RegExp("(?:^|\\s+)" + cls + "(?:$|\\s+)"));
          if (!found) return false;
          var end = found.index + found[0].length;
          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
        }
        return true;
      });
    }),

    addLineWidget: methodOp(function(handle, node, options) {
      return addLineWidget(this, handle, node, options);
    }),

    removeLineWidget: function(widget) { widget.clear(); },

    lineInfo: function(line) {
      if (typeof line == "number") {
        if (!isLine(this.doc, line)) return null;
        var n = line;
        line = getLine(this.doc, line);
        if (!line) return null;
      } else {
        var n = lineNo(line);
        if (n == null) return null;
      }
      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
              widgets: line.widgets};
    },

    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo};},

    addWidget: function(pos, node, scroll, vert, horiz) {
      var display = this.display;
      pos = cursorCoords(this, clipPos(this.doc, pos));
      var top = pos.bottom, left = pos.left;
      node.style.position = "absolute";
      display.sizer.appendChild(node);
      if (vert == "over") {
        top = pos.top;
      } else if (vert == "above" || vert == "near") {
        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
        // Default to positioning above (if specified and possible); otherwise default to positioning below
        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
          top = pos.top - node.offsetHeight;
        else if (pos.bottom + node.offsetHeight <= vspace)
          top = pos.bottom;
        if (left + node.offsetWidth > hspace)
          left = hspace - node.offsetWidth;
      }
      node.style.top = top + "px";
      node.style.left = node.style.right = "";
      if (horiz == "right") {
        left = display.sizer.clientWidth - node.offsetWidth;
        node.style.right = "0px";
      } else {
        if (horiz == "left") left = 0;
        else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
        node.style.left = left + "px";
      }
      if (scroll)
        scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
    },

    triggerOnKeyDown: methodOp(onKeyDown),
    triggerOnKeyPress: methodOp(onKeyPress),
    triggerOnKeyUp: methodOp(onKeyUp),

    execCommand: function(cmd) {
      if (commands.hasOwnProperty(cmd))
        return commands[cmd](this);
    },

    findPosH: function(from, amount, unit, visually) {
      var dir = 1;
      if (amount < 0) { dir = -1; amount = -amount; }
      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
        cur = findPosH(this.doc, cur, dir, unit, visually);
        if (cur.hitSide) break;
      }
      return cur;
    },

    moveH: methodOp(function(dir, unit) {
      var cm = this;
      cm.extendSelectionsBy(function(range) {
        if (cm.display.shift || cm.doc.extend || range.empty())
          return findPosH(cm.doc, range.head, dir, unit, cm.options.rtlMoveVisually);
        else
          return dir < 0 ? range.from() : range.to();
      }, sel_move);
    }),

    deleteH: methodOp(function(dir, unit) {
      var sel = this.doc.sel, doc = this.doc;
      if (sel.somethingSelected())
        doc.replaceSelection("", null, "+delete");
      else
        deleteNearSelection(this, function(range) {
          var other = findPosH(doc, range.head, dir, unit, false);
          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other};
        });
    }),

    findPosV: function(from, amount, unit, goalColumn) {
      var dir = 1, x = goalColumn;
      if (amount < 0) { dir = -1; amount = -amount; }
      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
        var coords = cursorCoords(this, cur, "div");
        if (x == null) x = coords.left;
        else coords.left = x;
        cur = findPosV(this, coords, dir, unit);
        if (cur.hitSide) break;
      }
      return cur;
    },

    moveV: methodOp(function(dir, unit) {
      var cm = this, doc = this.doc, goals = [];
      var collapse = !cm.display.shift && !doc.extend && doc.sel.somethingSelected();
      doc.extendSelectionsBy(function(range) {
        if (collapse)
          return dir < 0 ? range.from() : range.to();
        var headPos = cursorCoords(cm, range.head, "div");
        if (range.goalColumn != null) headPos.left = range.goalColumn;
        goals.push(headPos.left);
        var pos = findPosV(cm, headPos, dir, unit);
        if (unit == "page" && range == doc.sel.primary())
          addToScrollPos(cm, null, charCoords(cm, pos, "div").top - headPos.top);
        return pos;
      }, sel_move);
      if (goals.length) for (var i = 0; i < doc.sel.ranges.length; i++)
        doc.sel.ranges[i].goalColumn = goals[i];
    }),

    toggleOverwrite: function(value) {
      if (value != null && value == this.state.overwrite) return;
      if (this.state.overwrite = !this.state.overwrite)
        addClass(this.display.cursorDiv, "CodeMirror-overwrite");
      else
        rmClass(this.display.cursorDiv, "CodeMirror-overwrite");

      signal(this, "overwriteToggle", this, this.state.overwrite);
    },
    hasFocus: function() { return activeElt() == this.display.input; },

    scrollTo: methodOp(function(x, y) {
      if (x != null || y != null) resolveScrollToPos(this);
      if (x != null) this.curOp.scrollLeft = x;
      if (y != null) this.curOp.scrollTop = y;
    }),
    getScrollInfo: function() {
      var scroller = this.display.scroller, co = scrollerCutOff;
      return {left: scroller.scrollLeft, top: scroller.scrollTop,
              height: scroller.scrollHeight - co, width: scroller.scrollWidth - co,
              clientHeight: scroller.clientHeight - co, clientWidth: scroller.clientWidth - co};
    },

    scrollIntoView: methodOp(function(range, margin) {
      if (range == null) {
        range = {from: this.doc.sel.primary().head, to: null};
        if (margin == null) margin = this.options.cursorScrollMargin;
      } else if (typeof range == "number") {
        range = {from: Pos(range, 0), to: null};
      } else if (range.from == null) {
        range = {from: range, to: null};
      }
      if (!range.to) range.to = range.from;
      range.margin = margin || 0;

      if (range.from.line != null) {
        resolveScrollToPos(this);
        this.curOp.scrollToPos = range;
      } else {
        var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
                                      Math.min(range.from.top, range.to.top) - range.margin,
                                      Math.max(range.from.right, range.to.right),
                                      Math.max(range.from.bottom, range.to.bottom) + range.margin);
        this.scrollTo(sPos.scrollLeft, sPos.scrollTop);
      }
    }),

    setSize: methodOp(function(width, height) {
      function interpret(val) {
        return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
      }
      if (width != null) this.display.wrapper.style.width = interpret(width);
      if (height != null) this.display.wrapper.style.height = interpret(height);
      if (this.options.lineWrapping) clearLineMeasurementCache(this);
      this.curOp.forceUpdate = true;
      signal(this, "refresh", this);
    }),

    operation: function(f){return runInOp(this, f);},

    refresh: methodOp(function() {
      var oldHeight = this.display.cachedTextHeight;
      regChange(this);
      this.curOp.forceUpdate = true;
      clearCaches(this);
      this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop);
      updateGutterSpace(this);
      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
        estimateLineHeights(this);
      signal(this, "refresh", this);
    }),

    swapDoc: methodOp(function(doc) {
      var old = this.doc;
      old.cm = null;
      attachDoc(this, doc);
      clearCaches(this);
      resetInput(this);
      this.scrollTo(doc.scrollLeft, doc.scrollTop);
      signalLater(this, "swapDoc", this, old);
      return old;
    }),

    getInputField: function(){return this.display.input;},
    getWrapperElement: function(){return this.display.wrapper;},
    getScrollerElement: function(){return this.display.scroller;},
    getGutterElement: function(){return this.display.gutters;}
  };
  eventMixin(CodeMirror);

  // OPTION DEFAULTS

  // The default configuration options.
  var defaults = CodeMirror.defaults = {};
  // Functions to run when options are changed.
  var optionHandlers = CodeMirror.optionHandlers = {};

  function option(name, deflt, handle, notOnInit) {
    CodeMirror.defaults[name] = deflt;
    if (handle) optionHandlers[name] =
      notOnInit ? function(cm, val, old) {if (old != Init) handle(cm, val, old);} : handle;
  }

  // Passed to option handlers when there is no old value.
  var Init = CodeMirror.Init = {toString: function(){return "CodeMirror.Init";}};

  // These two are, on init, called from the constructor because they
  // have to be initialized before the editor can start at all.
  option("value", "", function(cm, val) {
    cm.setValue(val);
  }, true);
  option("mode", null, function(cm, val) {
    cm.doc.modeOption = val;
    loadMode(cm);
  }, true);

  option("indentUnit", 2, loadMode, true);
  option("indentWithTabs", false);
  option("smartIndent", true);
  option("tabSize", 4, function(cm) {
    resetModeState(cm);
    clearCaches(cm);
    regChange(cm);
  }, true);
  option("specialChars", /[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\ufeff]/g, function(cm, val) {
    cm.options.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
    cm.refresh();
  }, true);
  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function(cm) {cm.refresh();}, true);
  option("electricChars", true);
  option("rtlMoveVisually", !windows);
  option("wholeLineUpdateBefore", true);

  option("theme", "default", function(cm) {
    themeChanged(cm);
    guttersChanged(cm);
  }, true);
  option("keyMap", "default", keyMapChanged);
  option("extraKeys", null);

  option("lineWrapping", false, wrappingChanged, true);
  option("gutters", [], function(cm) {
    setGuttersForLineNumbers(cm.options);
    guttersChanged(cm);
  }, true);
  option("fixedGutter", true, function(cm, val) {
    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
    cm.refresh();
  }, true);
  option("coverGutterNextToScrollbar", false, updateScrollbars, true);
  option("lineNumbers", false, function(cm) {
    setGuttersForLineNumbers(cm.options);
    guttersChanged(cm);
  }, true);
  option("firstLineNumber", 1, guttersChanged, true);
  option("lineNumberFormatter", function(integer) {return integer;}, guttersChanged, true);
  option("showCursorWhenSelecting", false, updateSelection, true);

  option("resetSelectionOnContextMenu", true);

  option("readOnly", false, function(cm, val) {
    if (val == "nocursor") {
      onBlur(cm);
      cm.display.input.blur();
      cm.display.disabled = true;
    } else {
      cm.display.disabled = false;
      if (!val) resetInput(cm);
    }
  });
  option("disableInput", false, function(cm, val) {if (!val) resetInput(cm);}, true);
  option("dragDrop", true);

  option("cursorBlinkRate", 530);
  option("cursorScrollMargin", 0);
  option("cursorHeight", 1);
  option("workTime", 100);
  option("workDelay", 100);
  option("flattenSpans", true, resetModeState, true);
  option("addModeClass", false, resetModeState, true);
  option("pollInterval", 100);
  option("undoDepth", 200, function(cm, val){cm.doc.history.undoDepth = val;});
  option("historyEventDelay", 1250);
  option("viewportMargin", 10, function(cm){cm.refresh();}, true);
  option("maxHighlightLength", 10000, resetModeState, true);
  option("moveInputWithCursor", true, function(cm, val) {
    if (!val) cm.display.inputDiv.style.top = cm.display.inputDiv.style.left = 0;
  });

  option("tabindex", null, function(cm, val) {
    cm.display.input.tabIndex = val || "";
  });
  option("autofocus", null);

  // MODE DEFINITION AND QUERYING

  // Known modes, by name and by MIME
  var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};

  // Extra arguments are stored as the mode's dependencies, which is
  // used by (legacy) mechanisms like loadmode.js to automatically
  // load a mode. (Preferred mechanism is the require/define calls.)
  CodeMirror.defineMode = function(name, mode) {
    if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
    if (arguments.length > 2) {
      mode.dependencies = [];
      for (var i = 2; i < arguments.length; ++i) mode.dependencies.push(arguments[i]);
    }
    modes[name] = mode;
  };

  CodeMirror.defineMIME = function(mime, spec) {
    mimeModes[mime] = spec;
  };

  // Given a MIME type, a {name, ...options} config object, or a name
  // string, return a mode config object.
  CodeMirror.resolveMode = function(spec) {
    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
      spec = mimeModes[spec];
    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
      var found = mimeModes[spec.name];
      if (typeof found == "string") found = {name: found};
      spec = createObj(found, spec);
      spec.name = found.name;
    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
      return CodeMirror.resolveMode("application/xml");
    }
    if (typeof spec == "string") return {name: spec};
    else return spec || {name: "null"};
  };

  // Given a mode spec (anything that resolveMode accepts), find and
  // initialize an actual mode object.
  CodeMirror.getMode = function(options, spec) {
    var spec = CodeMirror.resolveMode(spec);
    var mfactory = modes[spec.name];
    if (!mfactory) return CodeMirror.getMode(options, "text/plain");
    var modeObj = mfactory(options, spec);
    if (modeExtensions.hasOwnProperty(spec.name)) {
      var exts = modeExtensions[spec.name];
      for (var prop in exts) {
        if (!exts.hasOwnProperty(prop)) continue;
        if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop];
        modeObj[prop] = exts[prop];
      }
    }
    modeObj.name = spec.name;
    if (spec.helperType) modeObj.helperType = spec.helperType;
    if (spec.modeProps) for (var prop in spec.modeProps)
      modeObj[prop] = spec.modeProps[prop];

    return modeObj;
  };

  // Minimal default mode.
  CodeMirror.defineMode("null", function() {
    return {token: function(stream) {stream.skipToEnd();}};
  });
  CodeMirror.defineMIME("text/plain", "null");

  // This can be used to attach properties to mode objects from
  // outside the actual mode definition.
  var modeExtensions = CodeMirror.modeExtensions = {};
  CodeMirror.extendMode = function(mode, properties) {
    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
    copyObj(properties, exts);
  };

  // EXTENSIONS

  CodeMirror.defineExtension = function(name, func) {
    CodeMirror.prototype[name] = func;
  };
  CodeMirror.defineDocExtension = function(name, func) {
    Doc.prototype[name] = func;
  };
  CodeMirror.defineOption = option;

  var initHooks = [];
  CodeMirror.defineInitHook = function(f) {initHooks.push(f);};

  var helpers = CodeMirror.helpers = {};
  CodeMirror.registerHelper = function(type, name, value) {
    if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = {_global: []};
    helpers[type][name] = value;
  };
  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
    CodeMirror.registerHelper(type, name, value);
    helpers[type]._global.push({pred: predicate, val: value});
  };

  // MODE STATE HANDLING

  // Utility functions for working with state. Exported because nested
  // modes need to do this for their inner modes.

  var copyState = CodeMirror.copyState = function(mode, state) {
    if (state === true) return state;
    if (mode.copyState) return mode.copyState(state);
    var nstate = {};
    for (var n in state) {
      var val = state[n];
      if (val instanceof Array) val = val.concat([]);
      nstate[n] = val;
    }
    return nstate;
  };

  var startState = CodeMirror.startState = function(mode, a1, a2) {
    return mode.startState ? mode.startState(a1, a2) : true;
  };

  // Given a mode and a state (for that mode), find the inner mode and
  // state at the position that the state refers to.
  CodeMirror.innerMode = function(mode, state) {
    while (mode.innerMode) {
      var info = mode.innerMode(state);
      if (!info || info.mode == mode) break;
      state = info.state;
      mode = info.mode;
    }
    return info || {mode: mode, state: state};
  };

  // STANDARD COMMANDS

  // Commands are parameter-less actions that can be performed on an
  // editor, mostly used for keybindings.
  var commands = CodeMirror.commands = {
    selectAll: function(cm) {cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);},
    singleSelection: function(cm) {
      cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
    },
    killLine: function(cm) {
      deleteNearSelection(cm, function(range) {
        if (range.empty()) {
          var len = getLine(cm.doc, range.head.line).text.length;
          if (range.head.ch == len && range.head.line < cm.lastLine())
            return {from: range.head, to: Pos(range.head.line + 1, 0)};
          else
            return {from: range.head, to: Pos(range.head.line, len)};
        } else {
          return {from: range.from(), to: range.to()};
        }
      });
    },
    deleteLine: function(cm) {
      deleteNearSelection(cm, function(range) {
        return {from: Pos(range.from().line, 0),
                to: clipPos(cm.doc, Pos(range.to().line + 1, 0))};
      });
    },
    delLineLeft: function(cm) {
      deleteNearSelection(cm, function(range) {
        return {from: Pos(range.from().line, 0), to: range.from()};
      });
    },
    undo: function(cm) {cm.undo();},
    redo: function(cm) {cm.redo();},
    undoSelection: function(cm) {cm.undoSelection();},
    redoSelection: function(cm) {cm.redoSelection();},
    goDocStart: function(cm) {cm.extendSelection(Pos(cm.firstLine(), 0));},
    goDocEnd: function(cm) {cm.extendSelection(Pos(cm.lastLine()));},
    goLineStart: function(cm) {
      cm.extendSelectionsBy(function(range) { return lineStart(cm, range.head.line); }, sel_move);
    },
    goLineStartSmart: function(cm) {
      cm.extendSelectionsBy(function(range) {
        var start = lineStart(cm, range.head.line);
        var line = cm.getLineHandle(start.line);
        var order = getOrder(line);
        if (!order || order[0].level == 0) {
          var firstNonWS = Math.max(0, line.text.search(/\S/));
          var inWS = range.head.line == start.line && range.head.ch <= firstNonWS && range.head.ch;
          return Pos(start.line, inWS ? 0 : firstNonWS);
        }
        return start;
      }, sel_move);
    },
    goLineEnd: function(cm) {
      cm.extendSelectionsBy(function(range) { return lineEnd(cm, range.head.line); }, sel_move);
    },
    goLineRight: function(cm) {
      cm.extendSelectionsBy(function(range) {
        var top = cm.charCoords(range.head, "div").top + 5;
        return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
      }, sel_move);
    },
    goLineLeft: function(cm) {
      cm.extendSelectionsBy(function(range) {
        var top = cm.charCoords(range.head, "div").top + 5;
        return cm.coordsChar({left: 0, top: top}, "div");
      }, sel_move);
    },
    goLineUp: function(cm) {cm.moveV(-1, "line");},
    goLineDown: function(cm) {cm.moveV(1, "line");},
    goPageUp: function(cm) {cm.moveV(-1, "page");},
    goPageDown: function(cm) {cm.moveV(1, "page");},
    goCharLeft: function(cm) {cm.moveH(-1, "char");},
    goCharRight: function(cm) {cm.moveH(1, "char");},
    goColumnLeft: function(cm) {cm.moveH(-1, "column");},
    goColumnRight: function(cm) {cm.moveH(1, "column");},
    goWordLeft: function(cm) {cm.moveH(-1, "word");},
    goGroupRight: function(cm) {cm.moveH(1, "group");},
    goGroupLeft: function(cm) {cm.moveH(-1, "group");},
    goWordRight: function(cm) {cm.moveH(1, "word");},
    delCharBefore: function(cm) {cm.deleteH(-1, "char");},
    delCharAfter: function(cm) {cm.deleteH(1, "char");},
    delWordBefore: function(cm) {cm.deleteH(-1, "word");},
    delWordAfter: function(cm) {cm.deleteH(1, "word");},
    delGroupBefore: function(cm) {cm.deleteH(-1, "group");},
    delGroupAfter: function(cm) {cm.deleteH(1, "group");},
    indentAuto: function(cm) {cm.indentSelection("smart");},
    indentMore: function(cm) {cm.indentSelection("add");},
    indentLess: function(cm) {cm.indentSelection("subtract");},
    insertTab: function(cm) {cm.replaceSelection("\t");},
    insertSoftTab: function(cm) {
      var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
      for (var i = 0; i < ranges.length; i++) {
        var pos = ranges[i].from();
        var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
        spaces.push(new Array(tabSize - col % tabSize + 1).join(" "));
      }
      cm.replaceSelections(spaces);
    },
    defaultTab: function(cm) {
      if (cm.somethingSelected()) cm.indentSelection("add");
      else cm.execCommand("insertTab");
    },
    transposeChars: function(cm) {
      runInOp(cm, function() {
        var ranges = cm.listSelections();
        for (var i = 0; i < ranges.length; i++) {
          var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
          if (cur.ch > 0 && cur.ch < line.length - 1)
            cm.replaceRange(line.charAt(cur.ch) + line.charAt(cur.ch - 1),
                            Pos(cur.line, cur.ch - 1), Pos(cur.line, cur.ch + 1));
        }
      });
    },
    newlineAndIndent: function(cm) {
      runInOp(cm, function() {
        var len = cm.listSelections().length;
        for (var i = 0; i < len; i++) {
          var range = cm.listSelections()[i];
          cm.replaceRange("\n", range.anchor, range.head, "+input");
          cm.indentLine(range.from().line + 1, null, true);
          ensureCursorVisible(cm);
        }
      });
    },
    toggleOverwrite: function(cm) {cm.toggleOverwrite();}
  };

  // STANDARD KEYMAPS

  var keyMap = CodeMirror.keyMap = {};
  keyMap.basic = {
    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
    "Esc": "singleSelection"
  };
  // Note that the save and find-related commands aren't defined by
  // default. User code or addons can define them. Unknown commands
  // are simply ignored.
  keyMap.pcDefault = {
    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
    "Ctrl-Home": "goDocStart", "Ctrl-Up": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Down": "goDocEnd",
    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
    "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
    fallthrough: "basic"
  };
  keyMap.macDefault = {
    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
    "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineStart", "Cmd-Right": "goLineEnd", "Alt-Backspace": "delGroupBefore",
    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delLineLeft",
    "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection",
    fallthrough: ["basic", "emacsy"]
  };
  // Very basic readline/emacs-style bindings, which are standard on Mac.
  keyMap.emacsy = {
    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
    "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
    "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
    "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars"
  };
  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

  // KEYMAP DISPATCH

  function getKeyMap(val) {
    if (typeof val == "string") return keyMap[val];
    else return val;
  }

  // Given an array of keymaps and a key name, call handle on any
  // bindings found, until that returns a truthy value, at which point
  // we consider the key handled. Implements things like binding a key
  // to false stopping further handling and keymap fallthrough.
  var lookupKey = CodeMirror.lookupKey = function(name, maps, handle) {
    function lookup(map) {
      map = getKeyMap(map);
      var found = map[name];
      if (found === false) return "stop";
      if (found != null && handle(found)) return true;
      if (map.nofallthrough) return "stop";

      var fallthrough = map.fallthrough;
      if (fallthrough == null) return false;
      if (Object.prototype.toString.call(fallthrough) != "[object Array]")
        return lookup(fallthrough);
      for (var i = 0; i < fallthrough.length; ++i) {
        var done = lookup(fallthrough[i]);
        if (done) return done;
      }
      return false;
    }

    for (var i = 0; i < maps.length; ++i) {
      var done = lookup(maps[i]);
      if (done) return done != "stop";
    }
  };

  // Modifier key presses don't count as 'real' key presses for the
  // purpose of keymap fallthrough.
  var isModifierKey = CodeMirror.isModifierKey = function(event) {
    var name = keyNames[event.keyCode];
    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
  };

  // Look up the name of a key as indicated by an event object.
  var keyName = CodeMirror.keyName = function(event, noShift) {
    if (presto && event.keyCode == 34 && event["char"]) return false;
    var name = keyNames[event.keyCode];
    if (name == null || event.altGraphKey) return false;
    if (event.altKey) name = "Alt-" + name;
    if (flipCtrlCmd ? event.metaKey : event.ctrlKey) name = "Ctrl-" + name;
    if (flipCtrlCmd ? event.ctrlKey : event.metaKey) name = "Cmd-" + name;
    if (!noShift && event.shiftKey) name = "Shift-" + name;
    return name;
  };

  // FROMTEXTAREA

  CodeMirror.fromTextArea = function(textarea, options) {
    if (!options) options = {};
    options.value = textarea.value;
    if (!options.tabindex && textarea.tabindex)
      options.tabindex = textarea.tabindex;
    if (!options.placeholder && textarea.placeholder)
      options.placeholder = textarea.placeholder;
    // Set autofocus to true if this textarea is focused, or if it has
    // autofocus and no other element is focused.
    if (options.autofocus == null) {
      var hasFocus = activeElt();
      options.autofocus = hasFocus == textarea ||
        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
    }

    function save() {textarea.value = cm.getValue();}
    if (textarea.form) {
      on(textarea.form, "submit", save);
      // Deplorable hack to make the submit method do the right thing.
      if (!options.leaveSubmitMethodAlone) {
        var form = textarea.form, realSubmit = form.submit;
        try {
          var wrappedSubmit = form.submit = function() {
            save();
            form.submit = realSubmit;
            form.submit();
            form.submit = wrappedSubmit;
          };
        } catch(e) {}
      }
    }

    textarea.style.display = "none";
    var cm = CodeMirror(function(node) {
      textarea.parentNode.insertBefore(node, textarea.nextSibling);
    }, options);
    cm.save = save;
    cm.getTextArea = function() { return textarea; };
    cm.toTextArea = function() {
      save();
      textarea.parentNode.removeChild(cm.getWrapperElement());
      textarea.style.display = "";
      if (textarea.form) {
        off(textarea.form, "submit", save);
        if (typeof textarea.form.submit == "function")
          textarea.form.submit = realSubmit;
      }
    };
    return cm;
  };

  // STRING STREAM

  // Fed to the mode parsers, provides helper functions to make
  // parsers more succinct.

  var StringStream = CodeMirror.StringStream = function(string, tabSize) {
    this.pos = this.start = 0;
    this.string = string;
    this.tabSize = tabSize || 8;
    this.lastColumnPos = this.lastColumnValue = 0;
    this.lineStart = 0;
  };

  StringStream.prototype = {
    eol: function() {return this.pos >= this.string.length;},
    sol: function() {return this.pos == this.lineStart;},
    peek: function() {return this.string.charAt(this.pos) || undefined;},
    next: function() {
      if (this.pos < this.string.length)
        return this.string.charAt(this.pos++);
    },
    eat: function(match) {
      var ch = this.string.charAt(this.pos);
      if (typeof match == "string") var ok = ch == match;
      else var ok = ch && (match.test ? match.test(ch) : match(ch));
      if (ok) {++this.pos; return ch;}
    },
    eatWhile: function(match) {
      var start = this.pos;
      while (this.eat(match)){}
      return this.pos > start;
    },
    eatSpace: function() {
      var start = this.pos;
      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
      return this.pos > start;
    },
    skipToEnd: function() {this.pos = this.string.length;},
    skipTo: function(ch) {
      var found = this.string.indexOf(ch, this.pos);
      if (found > -1) {this.pos = found; return true;}
    },
    backUp: function(n) {this.pos -= n;},
    column: function() {
      if (this.lastColumnPos < this.start) {
        this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
        this.lastColumnPos = this.start;
      }
      return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
    },
    indentation: function() {
      return countColumn(this.string, null, this.tabSize) -
        (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
    },
    match: function(pattern, consume, caseInsensitive) {
      if (typeof pattern == "string") {
        var cased = function(str) {return caseInsensitive ? str.toLowerCase() : str;};
        var substr = this.string.substr(this.pos, pattern.length);
        if (cased(substr) == cased(pattern)) {
          if (consume !== false) this.pos += pattern.length;
          return true;
        }
      } else {
        var match = this.string.slice(this.pos).match(pattern);
        if (match && match.index > 0) return null;
        if (match && consume !== false) this.pos += match[0].length;
        return match;
      }
    },
    current: function(){return this.string.slice(this.start, this.pos);},
    hideFirstChars: function(n, inner) {
      this.lineStart += n;
      try { return inner(); }
      finally { this.lineStart -= n; }
    }
  };

  // TEXTMARKERS

  // Created with markText and setBookmark methods. A TextMarker is a
  // handle that can be used to clear or find a marked position in the
  // document. Line objects hold arrays (markedSpans) containing
  // {from, to, marker} object pointing to such marker objects, and
  // indicating that such a marker is present on that line. Multiple
  // lines may point to the same marker when it spans across lines.
  // The spans will have null for their from/to properties when the
  // marker continues beyond the start/end of the line. Markers have
  // links back to the lines they currently touch.

  var TextMarker = CodeMirror.TextMarker = function(doc, type) {
    this.lines = [];
    this.type = type;
    this.doc = doc;
  };
  eventMixin(TextMarker);

  // Clear the marker.
  TextMarker.prototype.clear = function() {
    if (this.explicitlyCleared) return;
    var cm = this.doc.cm, withOp = cm && !cm.curOp;
    if (withOp) startOperation(cm);
    if (hasHandler(this, "clear")) {
      var found = this.find();
      if (found) signalLater(this, "clear", found.from, found.to);
    }
    var min = null, max = null;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this);
      if (cm && !this.collapsed) regLineChange(cm, lineNo(line), "text");
      else if (cm) {
        if (span.to != null) max = lineNo(line);
        if (span.from != null) min = lineNo(line);
      }
      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
      if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
        updateLineHeight(line, textHeight(cm.display));
    }
    if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
      var visual = visualLine(this.lines[i]), len = lineLength(visual);
      if (len > cm.display.maxLineLength) {
        cm.display.maxLine = visual;
        cm.display.maxLineLength = len;
        cm.display.maxLineChanged = true;
      }
    }

    if (min != null && cm && this.collapsed) regChange(cm, min, max + 1);
    this.lines.length = 0;
    this.explicitlyCleared = true;
    if (this.atomic && this.doc.cantEdit) {
      this.doc.cantEdit = false;
      if (cm) reCheckSelection(cm.doc);
    }
    if (cm) signalLater(cm, "markerCleared", cm, this);
    if (withOp) endOperation(cm);
    if (this.parent) this.parent.clear();
  };

  // Find the position of the marker in the document. Returns a {from,
  // to} object by default. Side can be passed to get a specific side
  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
  // Pos objects returned contain a line object, rather than a line
  // number (used to prevent looking up the same line twice).
  TextMarker.prototype.find = function(side, lineObj) {
    if (side == null && this.type == "bookmark") side = 1;
    var from, to;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this);
      if (span.from != null) {
        from = Pos(lineObj ? line : lineNo(line), span.from);
        if (side == -1) return from;
      }
      if (span.to != null) {
        to = Pos(lineObj ? line : lineNo(line), span.to);
        if (side == 1) return to;
      }
    }
    return from && {from: from, to: to};
  };

  // Signals that the marker's widget changed, and surrounding layout
  // should be recomputed.
  TextMarker.prototype.changed = function() {
    var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
    if (!pos || !cm) return;
    runInOp(cm, function() {
      var line = pos.line, lineN = lineNo(pos.line);
      var view = findViewForLine(cm, lineN);
      if (view) {
        clearLineMeasurementCacheFor(view);
        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
      }
      cm.curOp.updateMaxLine = true;
      if (!lineIsHidden(widget.doc, line) && widget.height != null) {
        var oldHeight = widget.height;
        widget.height = null;
        var dHeight = widgetHeight(widget) - oldHeight;
        if (dHeight)
          updateLineHeight(line, line.height + dHeight);
      }
    });
  };

  TextMarker.prototype.attachLine = function(line) {
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp;
      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
        (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
    }
    this.lines.push(line);
  };
  TextMarker.prototype.detachLine = function(line) {
    this.lines.splice(indexOf(this.lines, line), 1);
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp;
      (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
    }
  };

  // Collapsed markers have unique ids, in order to be able to order
  // them, which is needed for uniquely determining an outer marker
  // when they overlap (they may nest, but not partially overlap).
  var nextMarkerId = 0;

  // Create a marker, wire it up to the right lines, and
  function markText(doc, from, to, options, type) {
    // Shared markers (across linked documents) are handled separately
    // (markTextShared will call out to this again, once per
    // document).
    if (options && options.shared) return markTextShared(doc, from, to, options, type);
    // Ensure we are in an operation.
    if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);

    var marker = new TextMarker(doc, type), diff = cmp(from, to);
    if (options) copyObj(options, marker, false);
    // Don't connect empty markers unless clearWhenEmpty is false
    if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
      return marker;
    if (marker.replacedWith) {
      // Showing up as a widget implies collapsed (widget replaces text)
      marker.collapsed = true;
      marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget");
      if (!options.handleMouseEvents) marker.widgetNode.ignoreEvents = true;
      if (options.insertLeft) marker.widgetNode.insertLeft = true;
    }
    if (marker.collapsed) {
      if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
          from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
        throw new Error("Inserting collapsed marker partially overlapping an existing one");
      sawCollapsedSpans = true;
    }

    if (marker.addToHistory)
      addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN);

    var curLine = from.line, cm = doc.cm, updateMaxLine;
    doc.iter(curLine, to.line + 1, function(line) {
      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
        updateMaxLine = true;
      if (marker.collapsed && curLine != from.line) updateLineHeight(line, 0);
      addMarkedSpan(line, new MarkedSpan(marker,
                                         curLine == from.line ? from.ch : null,
                                         curLine == to.line ? to.ch : null));
      ++curLine;
    });
    // lineIsHidden depends on the presence of the spans, so needs a second pass
    if (marker.collapsed) doc.iter(from.line, to.line + 1, function(line) {
      if (lineIsHidden(doc, line)) updateLineHeight(line, 0);
    });

    if (marker.clearOnEnter) on(marker, "beforeCursorEnter", function() { marker.clear(); });

    if (marker.readOnly) {
      sawReadOnlySpans = true;
      if (doc.history.done.length || doc.history.undone.length)
        doc.clearHistory();
    }
    if (marker.collapsed) {
      marker.id = ++nextMarkerId;
      marker.atomic = true;
    }
    if (cm) {
      // Sync editor state
      if (updateMaxLine) cm.curOp.updateMaxLine = true;
      if (marker.collapsed)
        regChange(cm, from.line, to.line + 1);
      else if (marker.className || marker.title || marker.startStyle || marker.endStyle)
        for (var i = from.line; i <= to.line; i++) regLineChange(cm, i, "text");
      if (marker.atomic) reCheckSelection(cm.doc);
      signalLater(cm, "markerAdded", cm, marker);
    }
    return marker;
  }

  // SHARED TEXTMARKERS

  // A shared marker spans multiple linked documents. It is
  // implemented as a meta-marker-object controlling multiple normal
  // markers.
  var SharedTextMarker = CodeMirror.SharedTextMarker = function(markers, primary) {
    this.markers = markers;
    this.primary = primary;
    for (var i = 0; i < markers.length; ++i)
      markers[i].parent = this;
  };
  eventMixin(SharedTextMarker);

  SharedTextMarker.prototype.clear = function() {
    if (this.explicitlyCleared) return;
    this.explicitlyCleared = true;
    for (var i = 0; i < this.markers.length; ++i)
      this.markers[i].clear();
    signalLater(this, "clear");
  };
  SharedTextMarker.prototype.find = function(side, lineObj) {
    return this.primary.find(side, lineObj);
  };

  function markTextShared(doc, from, to, options, type) {
    options = copyObj(options);
    options.shared = false;
    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
    var widget = options.widgetNode;
    linkedDocs(doc, function(doc) {
      if (widget) options.widgetNode = widget.cloneNode(true);
      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
      for (var i = 0; i < doc.linked.length; ++i)
        if (doc.linked[i].isParent) return;
      primary = lst(markers);
    });
    return new SharedTextMarker(markers, primary);
  }

  function findSharedMarkers(doc) {
    return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())),
                         function(m) { return m.parent; });
  }

  function copySharedMarkers(doc, markers) {
    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i], pos = marker.find();
      var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
      if (cmp(mFrom, mTo)) {
        var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
        marker.markers.push(subMark);
        subMark.parent = marker;
      }
    }
  }

  function detachSharedMarkers(markers) {
    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i], linked = [marker.primary.doc];;
      linkedDocs(marker.primary.doc, function(d) { linked.push(d); });
      for (var j = 0; j < marker.markers.length; j++) {
        var subMarker = marker.markers[j];
        if (indexOf(linked, subMarker.doc) == -1) {
          subMarker.parent = null;
          marker.markers.splice(j--, 1);
        }
      }
    }
  }

  // TEXTMARKER SPANS

  function MarkedSpan(marker, from, to) {
    this.marker = marker;
    this.from = from; this.to = to;
  }

  // Search an array of spans for a span matching the given marker.
  function getMarkedSpanFor(spans, marker) {
    if (spans) for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if (span.marker == marker) return span;
    }
  }
  // Remove a span from an array, returning undefined if no spans are
  // left (we don't store arrays for lines without spans).
  function removeMarkedSpan(spans, span) {
    for (var r, i = 0; i < spans.length; ++i)
      if (spans[i] != span) (r || (r = [])).push(spans[i]);
    return r;
  }
  // Add a span to a line.
  function addMarkedSpan(line, span) {
    line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
    span.marker.attachLine(line);
  }

  // Used for the algorithm that adjusts markers for a change in the
  // document. These functions cut an array of spans at a given
  // character position, returning an array of remaining chunks (or
  // undefined if nothing remains).
  function markedSpansBefore(old, startCh, isInsert) {
    if (old) for (var i = 0, nw; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
        (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
      }
    }
    return nw;
  }
  function markedSpansAfter(old, endCh, isInsert) {
    if (old) for (var i = 0, nw; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
        (nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
                                              span.to == null ? null : span.to - endCh));
      }
    }
    return nw;
  }

  // Given a change object, compute the new set of marker spans that
  // cover the line in which the change took place. Removes spans
  // entirely within the change, reconnects spans belonging to the
  // same marker that appear on both sides of the change, and cuts off
  // spans partially within the change. Returns an array of span
  // arrays with one element for each line in (after) the change.
  function stretchSpansOverChange(doc, change) {
    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
    if (!oldFirst && !oldLast) return null;

    var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
    // Get the spans that 'stick out' on both sides
    var first = markedSpansBefore(oldFirst, startCh, isInsert);
    var last = markedSpansAfter(oldLast, endCh, isInsert);

    // Next, merge those two ends
    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
    if (first) {
      // Fix up .to properties of first
      for (var i = 0; i < first.length; ++i) {
        var span = first[i];
        if (span.to == null) {
          var found = getMarkedSpanFor(last, span.marker);
          if (!found) span.to = startCh;
          else if (sameLine) span.to = found.to == null ? null : found.to + offset;
        }
      }
    }
    if (last) {
      // Fix up .from in last (or move them into first in case of sameLine)
      for (var i = 0; i < last.length; ++i) {
        var span = last[i];
        if (span.to != null) span.to += offset;
        if (span.from == null) {
          var found = getMarkedSpanFor(first, span.marker);
          if (!found) {
            span.from = offset;
            if (sameLine) (first || (first = [])).push(span);
          }
        } else {
          span.from += offset;
          if (sameLine) (first || (first = [])).push(span);
        }
      }
    }
    // Make sure we didn't create any zero-length spans
    if (first) first = clearEmptySpans(first);
    if (last && last != first) last = clearEmptySpans(last);

    var newMarkers = [first];
    if (!sameLine) {
      // Fill gap with whole-line-spans
      var gap = change.text.length - 2, gapMarkers;
      if (gap > 0 && first)
        for (var i = 0; i < first.length; ++i)
          if (first[i].to == null)
            (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i].marker, null, null));
      for (var i = 0; i < gap; ++i)
        newMarkers.push(gapMarkers);
      newMarkers.push(last);
    }
    return newMarkers;
  }

  // Remove spans that are empty and don't have a clearWhenEmpty
  // option of false.
  function clearEmptySpans(spans) {
    for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
        spans.splice(i--, 1);
    }
    if (!spans.length) return null;
    return spans;
  }

  // Used for un/re-doing changes from the history. Combines the
  // result of computing the existing spans with the set of spans that
  // existed in the history (so that deleting around a span and then
  // undoing brings back the span).
  function mergeOldSpans(doc, change) {
    var old = getOldSpans(doc, change);
    var stretched = stretchSpansOverChange(doc, change);
    if (!old) return stretched;
    if (!stretched) return old;

    for (var i = 0; i < old.length; ++i) {
      var oldCur = old[i], stretchCur = stretched[i];
      if (oldCur && stretchCur) {
        spans: for (var j = 0; j < stretchCur.length; ++j) {
          var span = stretchCur[j];
          for (var k = 0; k < oldCur.length; ++k)
            if (oldCur[k].marker == span.marker) continue spans;
          oldCur.push(span);
        }
      } else if (stretchCur) {
        old[i] = stretchCur;
      }
    }
    return old;
  }

  // Used to 'clip' out readOnly ranges when making a change.
  function removeReadOnlyRanges(doc, from, to) {
    var markers = null;
    doc.iter(from.line, to.line + 1, function(line) {
      if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
        var mark = line.markedSpans[i].marker;
        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
          (markers || (markers = [])).push(mark);
      }
    });
    if (!markers) return null;
    var parts = [{from: from, to: to}];
    for (var i = 0; i < markers.length; ++i) {
      var mk = markers[i], m = mk.find(0);
      for (var j = 0; j < parts.length; ++j) {
        var p = parts[j];
        if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) continue;
        var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
        if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
          newParts.push({from: p.from, to: m.from});
        if (dto > 0 || !mk.inclusiveRight && !dto)
          newParts.push({from: m.to, to: p.to});
        parts.splice.apply(parts, newParts);
        j += newParts.length - 1;
      }
    }
    return parts;
  }

  // Connect or disconnect spans from a line.
  function detachMarkedSpans(line) {
    var spans = line.markedSpans;
    if (!spans) return;
    for (var i = 0; i < spans.length; ++i)
      spans[i].marker.detachLine(line);
    line.markedSpans = null;
  }
  function attachMarkedSpans(line, spans) {
    if (!spans) return;
    for (var i = 0; i < spans.length; ++i)
      spans[i].marker.attachLine(line);
    line.markedSpans = spans;
  }

  // Helpers used when computing which overlapping collapsed span
  // counts as the larger one.
  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0; }
  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0; }

  // Returns a number indicating which of two overlapping collapsed
  // spans is larger (and thus includes the other). Falls back to
  // comparing ids when the spans cover exactly the same range.
  function compareCollapsedMarkers(a, b) {
    var lenDiff = a.lines.length - b.lines.length;
    if (lenDiff != 0) return lenDiff;
    var aPos = a.find(), bPos = b.find();
    var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
    if (fromCmp) return -fromCmp;
    var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
    if (toCmp) return toCmp;
    return b.id - a.id;
  }

  // Find out whether a line ends or starts in a collapsed span. If
  // so, return the marker for that span.
  function collapsedSpanAtSide(line, start) {
    var sps = sawCollapsedSpans && line.markedSpans, found;
    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
          (!found || compareCollapsedMarkers(found, sp.marker) < 0))
        found = sp.marker;
    }
    return found;
  }
  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true); }
  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false); }

  // Test whether there exists a collapsed span that partially
  // overlaps (covers the start or end, but not both) of a new span.
  // Such overlap is not allowed.
  function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
    var line = getLine(doc, lineNo);
    var sps = sawCollapsedSpans && line.markedSpans;
    if (sps) for (var i = 0; i < sps.length; ++i) {
      var sp = sps[i];
      if (!sp.marker.collapsed) continue;
      var found = sp.marker.find(0);
      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) continue;
      if (fromCmp <= 0 && (cmp(found.to, from) || extraRight(sp.marker) - extraLeft(marker)) > 0 ||
          fromCmp >= 0 && (cmp(found.from, to) || extraLeft(sp.marker) - extraRight(marker)) < 0)
        return true;
    }
  }

  // A visual line is a line as drawn on the screen. Folding, for
  // example, can cause multiple logical lines to appear on the same
  // visual line. This finds the start of the visual line that the
  // given line is part of (usually that is the line itself).
  function visualLine(line) {
    var merged;
    while (merged = collapsedSpanAtStart(line))
      line = merged.find(-1, true).line;
    return line;
  }

  // Returns an array of logical lines that continue the visual line
  // started by the argument, or undefined if there are no such lines.
  function visualLineContinued(line) {
    var merged, lines;
    while (merged = collapsedSpanAtEnd(line)) {
      line = merged.find(1, true).line;
      (lines || (lines = [])).push(line);
    }
    return lines;
  }

  // Get the line number of the start of the visual line that the
  // given line number is part of.
  function visualLineNo(doc, lineN) {
    var line = getLine(doc, lineN), vis = visualLine(line);
    if (line == vis) return lineN;
    return lineNo(vis);
  }
  // Get the line number of the start of the next visual line after
  // the given line.
  function visualLineEndNo(doc, lineN) {
    if (lineN > doc.lastLine()) return lineN;
    var line = getLine(doc, lineN), merged;
    if (!lineIsHidden(doc, line)) return lineN;
    while (merged = collapsedSpanAtEnd(line))
      line = merged.find(1, true).line;
    return lineNo(line) + 1;
  }

  // Compute whether a line is hidden. Lines count as hidden when they
  // are part of a visual line that starts with another line, or when
  // they are entirely covered by collapsed, non-widget span.
  function lineIsHidden(doc, line) {
    var sps = sawCollapsedSpans && line.markedSpans;
    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (!sp.marker.collapsed) continue;
      if (sp.from == null) return true;
      if (sp.marker.widgetNode) continue;
      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
        return true;
    }
  }
  function lineIsHiddenInner(doc, line, span) {
    if (span.to == null) {
      var end = span.marker.find(1, true);
      return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
    }
    if (span.marker.inclusiveRight && span.to == line.text.length)
      return true;
    for (var sp, i = 0; i < line.markedSpans.length; ++i) {
      sp = line.markedSpans[i];
      if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
          (sp.to == null || sp.to != span.from) &&
          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
          lineIsHiddenInner(doc, line, sp)) return true;
    }
  }

  // LINE WIDGETS

  // Line widgets are block elements displayed above or below a line.

  var LineWidget = CodeMirror.LineWidget = function(cm, node, options) {
    if (options) for (var opt in options) if (options.hasOwnProperty(opt))
      this[opt] = options[opt];
    this.cm = cm;
    this.node = node;
  };
  eventMixin(LineWidget);

  function adjustScrollWhenAboveVisible(cm, line, diff) {
    if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
      addToScrollPos(cm, null, diff);
  }

  LineWidget.prototype.clear = function() {
    var cm = this.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
    if (no == null || !ws) return;
    for (var i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1);
    if (!ws.length) line.widgets = null;
    var height = widgetHeight(this);
    runInOp(cm, function() {
      adjustScrollWhenAboveVisible(cm, line, -height);
      regLineChange(cm, no, "widget");
      updateLineHeight(line, Math.max(0, line.height - height));
    });
  };
  LineWidget.prototype.changed = function() {
    var oldH = this.height, cm = this.cm, line = this.line;
    this.height = null;
    var diff = widgetHeight(this) - oldH;
    if (!diff) return;
    runInOp(cm, function() {
      cm.curOp.forceUpdate = true;
      adjustScrollWhenAboveVisible(cm, line, diff);
      updateLineHeight(line, line.height + diff);
    });
  };

  function widgetHeight(widget) {
    if (widget.height != null) return widget.height;
    if (!contains(document.body, widget.node))
      removeChildrenAndAdd(widget.cm.display.measure, elt("div", [widget.node], null, "position: relative"));
    return widget.height = widget.node.offsetHeight;
  }

  function addLineWidget(cm, handle, node, options) {
    var widget = new LineWidget(cm, node, options);
    if (widget.noHScroll) cm.display.alignWidgets = true;
    changeLine(cm, handle, "widget", function(line) {
      var widgets = line.widgets || (line.widgets = []);
      if (widget.insertAt == null) widgets.push(widget);
      else widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget);
      widget.line = line;
      if (!lineIsHidden(cm.doc, line)) {
        var aboveVisible = heightAtLine(line) < cm.doc.scrollTop;
        updateLineHeight(line, line.height + widgetHeight(widget));
        if (aboveVisible) addToScrollPos(cm, null, widget.height);
        cm.curOp.forceUpdate = true;
      }
      return true;
    });
    return widget;
  }

  // LINE DATA STRUCTURE

  // Line objects. These hold state related to a line, including
  // highlighting info (the styles array).
  var Line = CodeMirror.Line = function(text, markedSpans, estimateHeight) {
    this.text = text;
    attachMarkedSpans(this, markedSpans);
    this.height = estimateHeight ? estimateHeight(this) : 1;
  };
  eventMixin(Line);
  Line.prototype.lineNo = function() { return lineNo(this); };

  // Change the content (text, markers) of a line. Automatically
  // invalidates cached information and tries to re-estimate the
  // line's height.
  function updateLine(line, text, markedSpans, estimateHeight) {
    line.text = text;
    if (line.stateAfter) line.stateAfter = null;
    if (line.styles) line.styles = null;
    if (line.order != null) line.order = null;
    detachMarkedSpans(line);
    attachMarkedSpans(line, markedSpans);
    var estHeight = estimateHeight ? estimateHeight(line) : 1;
    if (estHeight != line.height) updateLineHeight(line, estHeight);
  }

  // Detach a line from the document tree and its markers.
  function cleanUpLine(line) {
    line.parent = null;
    detachMarkedSpans(line);
  }

  function extractLineClasses(type, output) {
    if (type) for (;;) {
      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
      if (!lineClass) break;
      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
      var prop = lineClass[1] ? "bgClass" : "textClass";
      if (output[prop] == null)
        output[prop] = lineClass[2];
      else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
        output[prop] += " " + lineClass[2];
    }
    return type;
  }

  function callBlankLine(mode, state) {
    if (mode.blankLine) return mode.blankLine(state);
    if (!mode.innerMode) return;
    var inner = CodeMirror.innerMode(mode, state);
    if (inner.mode.blankLine) return inner.mode.blankLine(inner.state);
  }

  function readToken(mode, stream, state) {
    var style = mode.token(stream, state);
    if (stream.pos <= stream.start)
      throw new Error("Mode " + mode.name + " failed to advance stream.");
    return style;
  }

  // Run the given mode's parser over a line, calling f for each token.
  function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
    var flattenSpans = mode.flattenSpans;
    if (flattenSpans == null) flattenSpans = cm.options.flattenSpans;
    var curStart = 0, curStyle = null;
    var stream = new StringStream(text, cm.options.tabSize), style;
    if (text == "") extractLineClasses(callBlankLine(mode, state), lineClasses);
    while (!stream.eol()) {
      if (stream.pos > cm.options.maxHighlightLength) {
        flattenSpans = false;
        if (forceToEnd) processLine(cm, text, state, stream.pos);
        stream.pos = text.length;
        style = null;
      } else {
        style = extractLineClasses(readToken(mode, stream, state), lineClasses);
      }
      if (cm.options.addModeClass) {
        var mName = CodeMirror.innerMode(mode, state).mode.name;
        if (mName) style = "m-" + (style ? mName + " " + style : mName);
      }
      if (!flattenSpans || curStyle != style) {
        if (curStart < stream.start) f(stream.start, curStyle);
        curStart = stream.start; curStyle = style;
      }
      stream.start = stream.pos;
    }
    while (curStart < stream.pos) {
      // Webkit seems to refuse to render text nodes longer than 57444 characters
      var pos = Math.min(stream.pos, curStart + 50000);
      f(pos, curStyle);
      curStart = pos;
    }
  }

  // Compute a style array (an array starting with a mode generation
  // -- for invalidation -- followed by pairs of end positions and
  // style strings), which is used to highlight the tokens on the
  // line.
  function highlightLine(cm, line, state, forceToEnd) {
    // A styles array always starts with a number identifying the
    // mode/overlays that it is based on (for easy invalidation).
    var st = [cm.state.modeGen], lineClasses = {};
    // Compute the base array of styles
    runMode(cm, line.text, cm.doc.mode, state, function(end, style) {
      st.push(end, style);
    }, lineClasses, forceToEnd);

    // Run overlays, adjust style array.
    for (var o = 0; o < cm.state.overlays.length; ++o) {
      var overlay = cm.state.overlays[o], i = 1, at = 0;
      runMode(cm, line.text, overlay.mode, true, function(end, style) {
        var start = i;
        // Ensure there's a token end at the current position, and that i points at it
        while (at < end) {
          var i_end = st[i];
          if (i_end > end)
            st.splice(i, 1, end, st[i+1], i_end);
          i += 2;
          at = Math.min(end, i_end);
        }
        if (!style) return;
        if (overlay.opaque) {
          st.splice(start, i - start, end, "cm-overlay " + style);
          i = start + 2;
        } else {
          for (; start < i; start += 2) {
            var cur = st[start+1];
            st[start+1] = (cur ? cur + " " : "") + "cm-overlay " + style;
          }
        }
      }, lineClasses);
    }

    return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null};
  }

  function getLineStyles(cm, line) {
    if (!line.styles || line.styles[0] != cm.state.modeGen) {
      var result = highlightLine(cm, line, line.stateAfter = getStateBefore(cm, lineNo(line)));
      line.styles = result.styles;
      if (result.classes) line.styleClasses = result.classes;
      else if (line.styleClasses) line.styleClasses = null;
    }
    return line.styles;
  }

  // Lightweight form of highlight -- proceed over this line and
  // update state, but don't save a style array. Used for lines that
  // aren't currently visible.
  function processLine(cm, text, state, startAt) {
    var mode = cm.doc.mode;
    var stream = new StringStream(text, cm.options.tabSize);
    stream.start = stream.pos = startAt || 0;
    if (text == "") callBlankLine(mode, state);
    while (!stream.eol() && stream.pos <= cm.options.maxHighlightLength) {
      readToken(mode, stream, state);
      stream.start = stream.pos;
    }
  }

  // Convert a style as returned by a mode (either null, or a string
  // containing one or more styles) to a CSS style. This is cached,
  // and also looks for line-wide styles.
  var styleToClassCache = {}, styleToClassCacheWithMode = {};
  function interpretTokenStyle(style, options) {
    if (!style || /^\s*$/.test(style)) return null;
    var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
    return cache[style] ||
      (cache[style] = style.replace(/\S+/g, "cm-$&"));
  }

  // Render the DOM representation of the text of a line. Also builds
  // up a 'line map', which points at the DOM nodes that represent
  // specific stretches of text, and is used by the measuring code.
  // The returned object contains the DOM node, this map, and
  // information about line-wide styles that were set by the mode.
  function buildLineContent(cm, lineView) {
    // The padding-right forces the element to have a 'border', which
    // is needed on Webkit to be able to get line-level bounding
    // rectangles for it (in measureChar).
    var content = elt("span", null, null, webkit ? "padding-right: .1px" : null);
    var builder = {pre: elt("pre", [content]), content: content, col: 0, pos: 0, cm: cm};
    lineView.measure = {};

    // Iterate over the logical lines that make up this visual line.
    for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
      var line = i ? lineView.rest[i - 1] : lineView.line, order;
      builder.pos = 0;
      builder.addToken = buildToken;
      // Optionally wire in some hacks into the token-rendering
      // algorithm, to deal with browser quirks.
      if ((ie || webkit) && cm.getOption("lineWrapping"))
        builder.addToken = buildTokenSplitSpaces(builder.addToken);
      if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
        builder.addToken = buildTokenBadBidi(builder.addToken, order);
      builder.map = [];
      insertLineContent(line, builder, getLineStyles(cm, line));
      if (line.styleClasses) {
        if (line.styleClasses.bgClass)
          builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
        if (line.styleClasses.textClass)
          builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
      }

      // Ensure at least a single node is present, for measuring.
      if (builder.map.length == 0)
        builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));

      // Store the map and a cache object for the current logical line
      if (i == 0) {
        lineView.measure.map = builder.map;
        lineView.measure.cache = {};
      } else {
        (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
        (lineView.measure.caches || (lineView.measure.caches = [])).push({});
      }
    }

    signal(cm, "renderLine", cm, lineView.line, builder.pre);
    return builder;
  }

  function defaultSpecialCharPlaceholder(ch) {
    var token = elt("span", "\u2022", "cm-invalidchar");
    token.title = "\\u" + ch.charCodeAt(0).toString(16);
    return token;
  }

  // Build up the DOM representation for a single token, and add it to
  // the line map. Takes care to render special characters separately.
  function buildToken(builder, text, style, startStyle, endStyle, title) {
    if (!text) return;
    var special = builder.cm.options.specialChars, mustWrap = false;
    if (!special.test(text)) {
      builder.col += text.length;
      var content = document.createTextNode(text);
      builder.map.push(builder.pos, builder.pos + text.length, content);
      if (ie_upto8) mustWrap = true;
      builder.pos += text.length;
    } else {
      var content = document.createDocumentFragment(), pos = 0;
      while (true) {
        special.lastIndex = pos;
        var m = special.exec(text);
        var skipped = m ? m.index - pos : text.length - pos;
        if (skipped) {
          var txt = document.createTextNode(text.slice(pos, pos + skipped));
          if (ie_upto8) content.appendChild(elt("span", [txt]));
          else content.appendChild(txt);
          builder.map.push(builder.pos, builder.pos + skipped, txt);
          builder.col += skipped;
          builder.pos += skipped;
        }
        if (!m) break;
        pos += skipped + 1;
        if (m[0] == "\t") {
          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
          var txt = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
          builder.col += tabWidth;
        } else {
          var txt = builder.cm.options.specialCharPlaceholder(m[0]);
          if (ie_upto8) content.appendChild(elt("span", [txt]));
          else content.appendChild(txt);
          builder.col += 1;
        }
        builder.map.push(builder.pos, builder.pos + 1, txt);
        builder.pos++;
      }
    }
    if (style || startStyle || endStyle || mustWrap) {
      var fullStyle = style || "";
      if (startStyle) fullStyle += startStyle;
      if (endStyle) fullStyle += endStyle;
      var token = elt("span", [content], fullStyle);
      if (title) token.title = title;
      return builder.content.appendChild(token);
    }
    builder.content.appendChild(content);
  }

  function buildTokenSplitSpaces(inner) {
    function split(old) {
      var out = " ";
      for (var i = 0; i < old.length - 2; ++i) out += i % 2 ? " " : "\u00a0";
      out += " ";
      return out;
    }
    return function(builder, text, style, startStyle, endStyle, title) {
      inner(builder, text.replace(/ {3,}/g, split), style, startStyle, endStyle, title);
    };
  }

  // Work around nonsense dimensions being reported for stretches of
  // right-to-left text.
  function buildTokenBadBidi(inner, order) {
    return function(builder, text, style, startStyle, endStyle, title) {
      style = style ? style + " cm-force-border" : "cm-force-border";
      var start = builder.pos, end = start + text.length;
      for (;;) {
        // Find the part that overlaps with the start of this text
        for (var i = 0; i < order.length; i++) {
          var part = order[i];
          if (part.to > start && part.from <= start) break;
        }
        if (part.to >= end) return inner(builder, text, style, startStyle, endStyle, title);
        inner(builder, text.slice(0, part.to - start), style, startStyle, null, title);
        startStyle = null;
        text = text.slice(part.to - start);
        start = part.to;
      }
    };
  }

  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
    var widget = !ignoreWidget && marker.widgetNode;
    if (widget) {
      builder.map.push(builder.pos, builder.pos + size, widget);
      builder.content.appendChild(widget);
    }
    builder.pos += size;
  }

  // Outputs a number of spans to make up a line, taking highlighting
  // and marked text into account.
  function insertLineContent(line, builder, styles) {
    var spans = line.markedSpans, allText = line.text, at = 0;
    if (!spans) {
      for (var i = 1; i < styles.length; i+=2)
        builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i+1], builder.cm.options));
      return;
    }

    var len = allText.length, pos = 0, i = 1, text = "", style;
    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
    for (;;) {
      if (nextChange == pos) { // Update current marker set
        spanStyle = spanEndStyle = spanStartStyle = title = "";
        collapsed = null; nextChange = Infinity;
        var foundBookmarks = [];
        for (var j = 0; j < spans.length; ++j) {
          var sp = spans[j], m = sp.marker;
          if (sp.from <= pos && (sp.to == null || sp.to > pos)) {
            if (sp.to != null && nextChange > sp.to) { nextChange = sp.to; spanEndStyle = ""; }
            if (m.className) spanStyle += " " + m.className;
            if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle;
            if (m.endStyle && sp.to == nextChange) spanEndStyle += " " + m.endStyle;
            if (m.title && !title) title = m.title;
            if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
              collapsed = sp;
          } else if (sp.from > pos && nextChange > sp.from) {
            nextChange = sp.from;
          }
          if (m.type == "bookmark" && sp.from == pos && m.widgetNode) foundBookmarks.push(m);
        }
        if (collapsed && (collapsed.from || 0) == pos) {
          buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                             collapsed.marker, collapsed.from == null);
          if (collapsed.to == null) return;
        }
        if (!collapsed && foundBookmarks.length) for (var j = 0; j < foundBookmarks.length; ++j)
          buildCollapsedSpan(builder, 0, foundBookmarks[j]);
      }
      if (pos >= len) break;

      var upto = Math.min(len, nextChange);
      while (true) {
        if (text) {
          var end = pos + text.length;
          if (!collapsed) {
            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title);
          }
          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
          pos = end;
          spanStartStyle = "";
        }
        text = allText.slice(at, at = styles[i++]);
        style = interpretTokenStyle(styles[i++], builder.cm.options);
      }
    }
  }

  // DOCUMENT DATA STRUCTURE

  // By default, updates that start and end at the beginning of a line
  // are treated specially, in order to make the association of line
  // widgets and marker elements with the text behave more intuitive.
  function isWholeLineUpdate(doc, change) {
    return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
      (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
  }

  // Perform a change on the document data structure.
  function updateDoc(doc, change, markedSpans, estimateHeight) {
    function spansFor(n) {return markedSpans ? markedSpans[n] : null;}
    function update(line, text, spans) {
      updateLine(line, text, spans, estimateHeight);
      signalLater(line, "change", line, change);
    }

    var from = change.from, to = change.to, text = change.text;
    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

    // Adjust the line structure
    if (isWholeLineUpdate(doc, change)) {
      // This is a whole-line replace. Treated specially to make
      // sure line objects move the way they are supposed to.
      for (var i = 0, added = []; i < text.length - 1; ++i)
        added.push(new Line(text[i], spansFor(i), estimateHeight));
      update(lastLine, lastLine.text, lastSpans);
      if (nlines) doc.remove(from.line, nlines);
      if (added.length) doc.insert(from.line, added);
    } else if (firstLine == lastLine) {
      if (text.length == 1) {
        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
      } else {
        for (var added = [], i = 1; i < text.length - 1; ++i)
          added.push(new Line(text[i], spansFor(i), estimateHeight));
        added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
        doc.insert(from.line + 1, added);
      }
    } else if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
      doc.remove(from.line + 1, nlines);
    } else {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
      for (var i = 1, added = []; i < text.length - 1; ++i)
        added.push(new Line(text[i], spansFor(i), estimateHeight));
      if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
      doc.insert(from.line + 1, added);
    }

    signalLater(doc, "change", doc, change);
  }

  // The document is represented as a BTree consisting of leaves, with
  // chunk of lines in them, and branches, with up to ten leaves or
  // other branch nodes below them. The top node is always a branch
  // node, and is the document object itself (meaning it has
  // additional methods and properties).
  //
  // All nodes have parent links. The tree is used both to go from
  // line numbers to line objects, and to go from objects to numbers.
  // It also indexes by height, and is used to convert between height
  // and line object, and to find the total height of the document.
  //
  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

  function LeafChunk(lines) {
    this.lines = lines;
    this.parent = null;
    for (var i = 0, height = 0; i < lines.length; ++i) {
      lines[i].parent = this;
      height += lines[i].height;
    }
    this.height = height;
  }

  LeafChunk.prototype = {
    chunkSize: function() { return this.lines.length; },
    // Remove the n lines at offset 'at'.
    removeInner: function(at, n) {
      for (var i = at, e = at + n; i < e; ++i) {
        var line = this.lines[i];
        this.height -= line.height;
        cleanUpLine(line);
        signalLater(line, "delete");
      }
      this.lines.splice(at, n);
    },
    // Helper used to collapse a small branch into a single leaf.
    collapse: function(lines) {
      lines.push.apply(lines, this.lines);
    },
    // Insert the given array of lines at offset 'at', count them as
    // having the given height.
    insertInner: function(at, lines, height) {
      this.height += height;
      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
      for (var i = 0; i < lines.length; ++i) lines[i].parent = this;
    },
    // Used to iterate over a part of the tree.
    iterN: function(at, n, op) {
      for (var e = at + n; at < e; ++at)
        if (op(this.lines[at])) return true;
    }
  };

  function BranchChunk(children) {
    this.children = children;
    var size = 0, height = 0;
    for (var i = 0; i < children.length; ++i) {
      var ch = children[i];
      size += ch.chunkSize(); height += ch.height;
      ch.parent = this;
    }
    this.size = size;
    this.height = height;
    this.parent = null;
  }

  BranchChunk.prototype = {
    chunkSize: function() { return this.size; },
    removeInner: function(at, n) {
      this.size -= n;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var rm = Math.min(n, sz - at), oldHeight = child.height;
          child.removeInner(at, rm);
          this.height -= oldHeight - child.height;
          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
          if ((n -= rm) == 0) break;
          at = 0;
        } else at -= sz;
      }
      // If the result is smaller than 25 lines, ensure that it is a
      // single leaf node.
      if (this.size - n < 25 &&
          (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
        var lines = [];
        this.collapse(lines);
        this.children = [new LeafChunk(lines)];
        this.children[0].parent = this;
      }
    },
    collapse: function(lines) {
      for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(lines);
    },
    insertInner: function(at, lines, height) {
      this.size += lines.length;
      this.height += height;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at <= sz) {
          child.insertInner(at, lines, height);
          if (child.lines && child.lines.length > 50) {
            while (child.lines.length > 50) {
              var spilled = child.lines.splice(child.lines.length - 25, 25);
              var newleaf = new LeafChunk(spilled);
              child.height -= newleaf.height;
              this.children.splice(i + 1, 0, newleaf);
              newleaf.parent = this;
            }
            this.maybeSpill();
          }
          break;
        }
        at -= sz;
      }
    },
    // When a node has grown, check whether it should be split.
    maybeSpill: function() {
      if (this.children.length <= 10) return;
      var me = this;
      do {
        var spilled = me.children.splice(me.children.length - 5, 5);
        var sibling = new BranchChunk(spilled);
        if (!me.parent) { // Become the parent node
          var copy = new BranchChunk(me.children);
          copy.parent = me;
          me.children = [copy, sibling];
          me = copy;
        } else {
          me.size -= sibling.size;
          me.height -= sibling.height;
          var myIndex = indexOf(me.parent.children, me);
          me.parent.children.splice(myIndex + 1, 0, sibling);
        }
        sibling.parent = me.parent;
      } while (me.children.length > 10);
      me.parent.maybeSpill();
    },
    iterN: function(at, n, op) {
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var used = Math.min(n, sz - at);
          if (child.iterN(at, used, op)) return true;
          if ((n -= used) == 0) break;
          at = 0;
        } else at -= sz;
      }
    }
  };

  var nextDocId = 0;
  var Doc = CodeMirror.Doc = function(text, mode, firstLine) {
    if (!(this instanceof Doc)) return new Doc(text, mode, firstLine);
    if (firstLine == null) firstLine = 0;

    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
    this.first = firstLine;
    this.scrollTop = this.scrollLeft = 0;
    this.cantEdit = false;
    this.cleanGeneration = 1;
    this.frontier = firstLine;
    var start = Pos(firstLine, 0);
    this.sel = simpleSelection(start);
    this.history = new History(null);
    this.id = ++nextDocId;
    this.modeOption = mode;

    if (typeof text == "string") text = splitLines(text);
    updateDoc(this, {from: start, to: start, text: text});
    setSelection(this, simpleSelection(start), sel_dontScroll);
  };

  Doc.prototype = createObj(BranchChunk.prototype, {
    constructor: Doc,
    // Iterate over the document. Supports two forms -- with only one
    // argument, it calls that for each line in the document. With
    // three, it iterates over the range given by the first two (with
    // the second being non-inclusive).
    iter: function(from, to, op) {
      if (op) this.iterN(from - this.first, to - from, op);
      else this.iterN(this.first, this.first + this.size, from);
    },

    // Non-public interface for adding and removing lines.
    insert: function(at, lines) {
      var height = 0;
      for (var i = 0; i < lines.length; ++i) height += lines[i].height;
      this.insertInner(at - this.first, lines, height);
    },
    remove: function(at, n) { this.removeInner(at - this.first, n); },

    // From here, the methods are part of the public interface. Most
    // are also available from CodeMirror (editor) instances.

    getValue: function(lineSep) {
      var lines = getLines(this, this.first, this.first + this.size);
      if (lineSep === false) return lines;
      return lines.join(lineSep || "\n");
    },
    setValue: docMethodOp(function(code) {
      var top = Pos(this.first, 0), last = this.first + this.size - 1;
      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
                        text: splitLines(code), origin: "setValue"}, true);
      setSelection(this, simpleSelection(top));
    }),
    replaceRange: function(code, from, to, origin) {
      from = clipPos(this, from);
      to = to ? clipPos(this, to) : from;
      replaceRange(this, code, from, to, origin);
    },
    getRange: function(from, to, lineSep) {
      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
      if (lineSep === false) return lines;
      return lines.join(lineSep || "\n");
    },

    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text;},

    getLineHandle: function(line) {if (isLine(this, line)) return getLine(this, line);},
    getLineNumber: function(line) {return lineNo(line);},

    getLineHandleVisualStart: function(line) {
      if (typeof line == "number") line = getLine(this, line);
      return visualLine(line);
    },

    lineCount: function() {return this.size;},
    firstLine: function() {return this.first;},
    lastLine: function() {return this.first + this.size - 1;},

    clipPos: function(pos) {return clipPos(this, pos);},

    getCursor: function(start) {
      var range = this.sel.primary(), pos;
      if (start == null || start == "head") pos = range.head;
      else if (start == "anchor") pos = range.anchor;
      else if (start == "end" || start == "to" || start === false) pos = range.to();
      else pos = range.from();
      return pos;
    },
    listSelections: function() { return this.sel.ranges; },
    somethingSelected: function() {return this.sel.somethingSelected();},

    setCursor: docMethodOp(function(line, ch, options) {
      setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
    }),
    setSelection: docMethodOp(function(anchor, head, options) {
      setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
    }),
    extendSelection: docMethodOp(function(head, other, options) {
      extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
    }),
    extendSelections: docMethodOp(function(heads, options) {
      extendSelections(this, clipPosArray(this, heads, options));
    }),
    extendSelectionsBy: docMethodOp(function(f, options) {
      extendSelections(this, map(this.sel.ranges, f), options);
    }),
    setSelections: docMethodOp(function(ranges, primary, options) {
      if (!ranges.length) return;
      for (var i = 0, out = []; i < ranges.length; i++)
        out[i] = new Range(clipPos(this, ranges[i].anchor),
                           clipPos(this, ranges[i].head));
      if (primary == null) primary = Math.min(ranges.length - 1, this.sel.primIndex);
      setSelection(this, normalizeSelection(out, primary), options);
    }),
    addSelection: docMethodOp(function(anchor, head, options) {
      var ranges = this.sel.ranges.slice(0);
      ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
      setSelection(this, normalizeSelection(ranges, ranges.length - 1), options);
    }),

    getSelection: function(lineSep) {
      var ranges = this.sel.ranges, lines;
      for (var i = 0; i < ranges.length; i++) {
        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
        lines = lines ? lines.concat(sel) : sel;
      }
      if (lineSep === false) return lines;
      else return lines.join(lineSep || "\n");
    },
    getSelections: function(lineSep) {
      var parts = [], ranges = this.sel.ranges;
      for (var i = 0; i < ranges.length; i++) {
        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
        if (lineSep !== false) sel = sel.join(lineSep || "\n");
        parts[i] = sel;
      }
      return parts;
    },
    replaceSelection: function(code, collapse, origin) {
      var dup = [];
      for (var i = 0; i < this.sel.ranges.length; i++)
        dup[i] = code;
      this.replaceSelections(dup, collapse, origin || "+input");
    },
    replaceSelections: docMethodOp(function(code, collapse, origin) {
      var changes = [], sel = this.sel;
      for (var i = 0; i < sel.ranges.length; i++) {
        var range = sel.ranges[i];
        changes[i] = {from: range.from(), to: range.to(), text: splitLines(code[i]), origin: origin};
      }
      var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
      for (var i = changes.length - 1; i >= 0; i--)
        makeChange(this, changes[i]);
      if (newSel) setSelectionReplaceHistory(this, newSel);
      else if (this.cm) ensureCursorVisible(this.cm);
    }),
    undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
    redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
    undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
    redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

    setExtending: function(val) {this.extend = val;},
    getExtending: function() {return this.extend;},

    historySize: function() {
      var hist = this.history, done = 0, undone = 0;
      for (var i = 0; i < hist.done.length; i++) if (!hist.done[i].ranges) ++done;
      for (var i = 0; i < hist.undone.length; i++) if (!hist.undone[i].ranges) ++undone;
      return {undo: done, redo: undone};
    },
    clearHistory: function() {this.history = new History(this.history.maxGeneration);},

    markClean: function() {
      this.cleanGeneration = this.changeGeneration(true);
    },
    changeGeneration: function(forceSplit) {
      if (forceSplit)
        this.history.lastOp = this.history.lastOrigin = null;
      return this.history.generation;
    },
    isClean: function (gen) {
      return this.history.generation == (gen || this.cleanGeneration);
    },

    getHistory: function() {
      return {done: copyHistoryArray(this.history.done),
              undone: copyHistoryArray(this.history.undone)};
    },
    setHistory: function(histData) {
      var hist = this.history = new History(this.history.maxGeneration);
      hist.done = copyHistoryArray(histData.done.slice(0), null, true);
      hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
    },

    markText: function(from, to, options) {
      return markText(this, clipPos(this, from), clipPos(this, to), options, "range");
    },
    setBookmark: function(pos, options) {
      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                      insertLeft: options && options.insertLeft,
                      clearWhenEmpty: false, shared: options && options.shared};
      pos = clipPos(this, pos);
      return markText(this, pos, pos, realOpts, "bookmark");
    },
    findMarksAt: function(pos) {
      pos = clipPos(this, pos);
      var markers = [], spans = getLine(this, pos.line).markedSpans;
      if (spans) for (var i = 0; i < spans.length; ++i) {
        var span = spans[i];
        if ((span.from == null || span.from <= pos.ch) &&
            (span.to == null || span.to >= pos.ch))
          markers.push(span.marker.parent || span.marker);
      }
      return markers;
    },
    findMarks: function(from, to, filter) {
      from = clipPos(this, from); to = clipPos(this, to);
      var found = [], lineNo = from.line;
      this.iter(from.line, to.line + 1, function(line) {
        var spans = line.markedSpans;
        if (spans) for (var i = 0; i < spans.length; i++) {
          var span = spans[i];
          if (!(lineNo == from.line && from.ch > span.to ||
                span.from == null && lineNo != from.line||
                lineNo == to.line && span.from > to.ch) &&
              (!filter || filter(span.marker)))
            found.push(span.marker.parent || span.marker);
        }
        ++lineNo;
      });
      return found;
    },
    getAllMarks: function() {
      var markers = [];
      this.iter(function(line) {
        var sps = line.markedSpans;
        if (sps) for (var i = 0; i < sps.length; ++i)
          if (sps[i].from != null) markers.push(sps[i].marker);
      });
      return markers;
    },

    posFromIndex: function(off) {
      var ch, lineNo = this.first;
      this.iter(function(line) {
        var sz = line.text.length + 1;
        if (sz > off) { ch = off; return true; }
        off -= sz;
        ++lineNo;
      });
      return clipPos(this, Pos(lineNo, ch));
    },
    indexFromPos: function (coords) {
      coords = clipPos(this, coords);
      var index = coords.ch;
      if (coords.line < this.first || coords.ch < 0) return 0;
      this.iter(this.first, coords.line, function (line) {
        index += line.text.length + 1;
      });
      return index;
    },

    copy: function(copyHistory) {
      var doc = new Doc(getLines(this, this.first, this.first + this.size), this.modeOption, this.first);
      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
      doc.sel = this.sel;
      doc.extend = false;
      if (copyHistory) {
        doc.history.undoDepth = this.history.undoDepth;
        doc.setHistory(this.getHistory());
      }
      return doc;
    },

    linkedDoc: function(options) {
      if (!options) options = {};
      var from = this.first, to = this.first + this.size;
      if (options.from != null && options.from > from) from = options.from;
      if (options.to != null && options.to < to) to = options.to;
      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from);
      if (options.sharedHist) copy.history = this.history;
      (this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
      copySharedMarkers(copy, findSharedMarkers(this));
      return copy;
    },
    unlinkDoc: function(other) {
      if (other instanceof CodeMirror) other = other.doc;
      if (this.linked) for (var i = 0; i < this.linked.length; ++i) {
        var link = this.linked[i];
        if (link.doc != other) continue;
        this.linked.splice(i, 1);
        other.unlinkDoc(this);
        detachSharedMarkers(findSharedMarkers(this));
        break;
      }
      // If the histories were shared, split them again
      if (other.history == this.history) {
        var splitIds = [other.id];
        linkedDocs(other, function(doc) {splitIds.push(doc.id);}, true);
        other.history = new History(null);
        other.history.done = copyHistoryArray(this.history.done, splitIds);
        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
      }
    },
    iterLinkedDocs: function(f) {linkedDocs(this, f);},

    getMode: function() {return this.mode;},
    getEditor: function() {return this.cm;}
  });

  // Public alias.
  Doc.prototype.eachLine = Doc.prototype.iter;

  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
  var dontDelegate = "iter insert remove copy getEditor".split(" ");
  for (var prop in Doc.prototype) if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
    CodeMirror.prototype[prop] = (function(method) {
      return function() {return method.apply(this.doc, arguments);};
    })(Doc.prototype[prop]);

  eventMixin(Doc);

  // Call f for all linked documents.
  function linkedDocs(doc, f, sharedHistOnly) {
    function propagate(doc, skip, sharedHist) {
      if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
        var rel = doc.linked[i];
        if (rel.doc == skip) continue;
        var shared = sharedHist && rel.sharedHist;
        if (sharedHistOnly && !shared) continue;
        f(rel.doc, shared);
        propagate(rel.doc, doc, shared);
      }
    }
    propagate(doc, null, true);
  }

  // Attach a document to an editor.
  function attachDoc(cm, doc) {
    if (doc.cm) throw new Error("This document is already in use.");
    cm.doc = doc;
    doc.cm = cm;
    estimateLineHeights(cm);
    loadMode(cm);
    if (!cm.options.lineWrapping) findMaxLine(cm);
    cm.options.mode = doc.modeOption;
    regChange(cm);
  }

  // LINE UTILITIES

  // Find the line object corresponding to the given line number.
  function getLine(doc, n) {
    n -= doc.first;
    if (n < 0 || n >= doc.size) throw new Error("There is no line " + (n + doc.first) + " in the document.");
    for (var chunk = doc; !chunk.lines;) {
      for (var i = 0;; ++i) {
        var child = chunk.children[i], sz = child.chunkSize();
        if (n < sz) { chunk = child; break; }
        n -= sz;
      }
    }
    return chunk.lines[n];
  }

  // Get the part of a document between two positions, as an array of
  // strings.
  function getBetween(doc, start, end) {
    var out = [], n = start.line;
    doc.iter(start.line, end.line + 1, function(line) {
      var text = line.text;
      if (n == end.line) text = text.slice(0, end.ch);
      if (n == start.line) text = text.slice(start.ch);
      out.push(text);
      ++n;
    });
    return out;
  }
  // Get the lines between from and to, as array of strings.
  function getLines(doc, from, to) {
    var out = [];
    doc.iter(from, to, function(line) { out.push(line.text); });
    return out;
  }

  // Update the height of a line, propagating the height change
  // upwards to parent nodes.
  function updateLineHeight(line, height) {
    var diff = height - line.height;
    if (diff) for (var n = line; n; n = n.parent) n.height += diff;
  }

  // Given a line object, find its line number by walking up through
  // its parent links.
  function lineNo(line) {
    if (line.parent == null) return null;
    var cur = line.parent, no = indexOf(cur.lines, line);
    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
      for (var i = 0;; ++i) {
        if (chunk.children[i] == cur) break;
        no += chunk.children[i].chunkSize();
      }
    }
    return no + cur.first;
  }

  // Find the line at the given vertical position, using the height
  // information in the document tree.
  function lineAtHeight(chunk, h) {
    var n = chunk.first;
    outer: do {
      for (var i = 0; i < chunk.children.length; ++i) {
        var child = chunk.children[i], ch = child.height;
        if (h < ch) { chunk = child; continue outer; }
        h -= ch;
        n += child.chunkSize();
      }
      return n;
    } while (!chunk.lines);
    for (var i = 0; i < chunk.lines.length; ++i) {
      var line = chunk.lines[i], lh = line.height;
      if (h < lh) break;
      h -= lh;
    }
    return n + i;
  }


  // Find the height above the given line.
  function heightAtLine(lineObj) {
    lineObj = visualLine(lineObj);

    var h = 0, chunk = lineObj.parent;
    for (var i = 0; i < chunk.lines.length; ++i) {
      var line = chunk.lines[i];
      if (line == lineObj) break;
      else h += line.height;
    }
    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
      for (var i = 0; i < p.children.length; ++i) {
        var cur = p.children[i];
        if (cur == chunk) break;
        else h += cur.height;
      }
    }
    return h;
  }

  // Get the bidi ordering for the given line (and cache it). Returns
  // false for lines that are fully left-to-right, and an array of
  // BidiSpan objects otherwise.
  function getOrder(line) {
    var order = line.order;
    if (order == null) order = line.order = bidiOrdering(line.text);
    return order;
  }

  // HISTORY

  function History(startGen) {
    // Arrays of change events and selections. Doing something adds an
    // event to done and clears undo. Undoing moves events from done
    // to undone, redoing moves them in the other direction.
    this.done = []; this.undone = [];
    this.undoDepth = Infinity;
    // Used to track when changes can be merged into a single undo
    // event
    this.lastModTime = this.lastSelTime = 0;
    this.lastOp = null;
    this.lastOrigin = this.lastSelOrigin = null;
    // Used by the isClean() method
    this.generation = this.maxGeneration = startGen || 1;
  }

  // Create a history change event from an updateDoc-style change
  // object.
  function historyChangeFromChange(doc, change) {
    var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
    linkedDocs(doc, function(doc) {attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);}, true);
    return histChange;
  }

  // Pop all selection events off the end of a history array. Stop at
  // a change event.
  function clearSelectionEvents(array) {
    while (array.length) {
      var last = lst(array);
      if (last.ranges) array.pop();
      else break;
    }
  }

  // Find the top change event in the history. Pop off selection
  // events that are in the way.
  function lastChangeEvent(hist, force) {
    if (force) {
      clearSelectionEvents(hist.done);
      return lst(hist.done);
    } else if (hist.done.length && !lst(hist.done).ranges) {
      return lst(hist.done);
    } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
      hist.done.pop();
      return lst(hist.done);
    }
  }

  // Register a change in the history. Merges changes that are within
  // a single operation, ore are close together with an origin that
  // allows merging (starting with "+") into a single event.
  function addChangeToHistory(doc, change, selAfter, opId) {
    var hist = doc.history;
    hist.undone.length = 0;
    var time = +new Date, cur;

    if ((hist.lastOp == opId ||
         hist.lastOrigin == change.origin && change.origin &&
         ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
          change.origin.charAt(0) == "*")) &&
        (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
      // Merge this change into the last event
      var last = lst(cur.changes);
      if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
        // Optimized case for simple insertion -- don't want to add
        // new changesets for every character typed
        last.to = changeEnd(change);
      } else {
        // Add new sub-event
        cur.changes.push(historyChangeFromChange(doc, change));
      }
    } else {
      // Can not be merged, start a new event.
      var before = lst(hist.done);
      if (!before || !before.ranges)
        pushSelectionToHistory(doc.sel, hist.done);
      cur = {changes: [historyChangeFromChange(doc, change)],
             generation: hist.generation};
      hist.done.push(cur);
      while (hist.done.length > hist.undoDepth) {
        hist.done.shift();
        if (!hist.done[0].ranges) hist.done.shift();
      }
    }
    hist.done.push(selAfter);
    hist.generation = ++hist.maxGeneration;
    hist.lastModTime = hist.lastSelTime = time;
    hist.lastOp = opId;
    hist.lastOrigin = hist.lastSelOrigin = change.origin;

    if (!last) signal(doc, "historyAdded");
  }

  function selectionEventCanBeMerged(doc, origin, prev, sel) {
    var ch = origin.charAt(0);
    return ch == "*" ||
      ch == "+" &&
      prev.ranges.length == sel.ranges.length &&
      prev.somethingSelected() == sel.somethingSelected() &&
      new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
  }

  // Called whenever the selection changes, sets the new selection as
  // the pending selection in the history, and pushes the old pending
  // selection into the 'done' array when it was significantly
  // different (in number of selected ranges, emptiness, or time).
  function addSelectionToHistory(doc, sel, opId, options) {
    var hist = doc.history, origin = options && options.origin;

    // A new event is started when the previous origin does not match
    // the current, or the origins don't allow matching. Origins
    // starting with * are always merged, those starting with + are
    // merged when similar and close together in time.
    if (opId == hist.lastOp ||
        (origin && hist.lastSelOrigin == origin &&
         (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
          selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
      hist.done[hist.done.length - 1] = sel;
    else
      pushSelectionToHistory(sel, hist.done);

    hist.lastSelTime = +new Date;
    hist.lastSelOrigin = origin;
    hist.lastOp = opId;
    if (options && options.clearRedo !== false)
      clearSelectionEvents(hist.undone);
  }

  function pushSelectionToHistory(sel, dest) {
    var top = lst(dest);
    if (!(top && top.ranges && top.equals(sel)))
      dest.push(sel);
  }

  // Used to store marked span information in the history.
  function attachLocalSpans(doc, change, from, to) {
    var existing = change["spans_" + doc.id], n = 0;
    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
      if (line.markedSpans)
        (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
      ++n;
    });
  }

  // When un/re-doing restores text containing marked spans, those
  // that have been explicitly cleared should not be restored.
  function removeClearedSpans(spans) {
    if (!spans) return null;
    for (var i = 0, out; i < spans.length; ++i) {
      if (spans[i].marker.explicitlyCleared) { if (!out) out = spans.slice(0, i); }
      else if (out) out.push(spans[i]);
    }
    return !out ? spans : out.length ? out : null;
  }

  // Retrieve and filter the old marked spans stored in a change event.
  function getOldSpans(doc, change) {
    var found = change["spans_" + doc.id];
    if (!found) return null;
    for (var i = 0, nw = []; i < change.text.length; ++i)
      nw.push(removeClearedSpans(found[i]));
    return nw;
  }

  // Used both to provide a JSON-safe object in .getHistory, and, when
  // detaching a document, to split the history in two
  function copyHistoryArray(events, newGroup, instantiateSel) {
    for (var i = 0, copy = []; i < events.length; ++i) {
      var event = events[i];
      if (event.ranges) {
        copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
        continue;
      }
      var changes = event.changes, newChanges = [];
      copy.push({changes: newChanges});
      for (var j = 0; j < changes.length; ++j) {
        var change = changes[j], m;
        newChanges.push({from: change.from, to: change.to, text: change.text});
        if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
          if (indexOf(newGroup, Number(m[1])) > -1) {
            lst(newChanges)[prop] = change[prop];
            delete change[prop];
          }
        }
      }
    }
    return copy;
  }

  // Rebasing/resetting history to deal with externally-sourced changes

  function rebaseHistSelSingle(pos, from, to, diff) {
    if (to < pos.line) {
      pos.line += diff;
    } else if (from < pos.line) {
      pos.line = from;
      pos.ch = 0;
    }
  }

  // Tries to rebase an array of history events given a change in the
  // document. If the change touches the same lines as the event, the
  // event, and everything 'behind' it, is discarded. If the change is
  // before the event, the event's positions are updated. Uses a
  // copy-on-write scheme for the positions, to avoid having to
  // reallocate them all on every rebase, but also avoid problems with
  // shared position objects being unsafely updated.
  function rebaseHistArray(array, from, to, diff) {
    for (var i = 0; i < array.length; ++i) {
      var sub = array[i], ok = true;
      if (sub.ranges) {
        if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
        for (var j = 0; j < sub.ranges.length; j++) {
          rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
          rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
        }
        continue;
      }
      for (var j = 0; j < sub.changes.length; ++j) {
        var cur = sub.changes[j];
        if (to < cur.from.line) {
          cur.from = Pos(cur.from.line + diff, cur.from.ch);
          cur.to = Pos(cur.to.line + diff, cur.to.ch);
        } else if (from <= cur.to.line) {
          ok = false;
          break;
        }
      }
      if (!ok) {
        array.splice(0, i + 1);
        i = 0;
      }
    }
  }

  function rebaseHist(hist, change) {
    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
    rebaseHistArray(hist.done, from, to, diff);
    rebaseHistArray(hist.undone, from, to, diff);
  }

  // EVENT UTILITIES

  // Due to the fact that we still support jurassic IE versions, some
  // compatibility wrappers are needed.

  var e_preventDefault = CodeMirror.e_preventDefault = function(e) {
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
  };
  var e_stopPropagation = CodeMirror.e_stopPropagation = function(e) {
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
  };
  function e_defaultPrevented(e) {
    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
  }
  var e_stop = CodeMirror.e_stop = function(e) {e_preventDefault(e); e_stopPropagation(e);};

  function e_target(e) {return e.target || e.srcElement;}
  function e_button(e) {
    var b = e.which;
    if (b == null) {
      if (e.button & 1) b = 1;
      else if (e.button & 2) b = 3;
      else if (e.button & 4) b = 2;
    }
    if (mac && e.ctrlKey && b == 1) b = 3;
    return b;
  }

  // EVENT HANDLING

  // Lightweight event framework. on/off also work on DOM nodes,
  // registering native DOM handlers.

  var on = CodeMirror.on = function(emitter, type, f) {
    if (emitter.addEventListener)
      emitter.addEventListener(type, f, false);
    else if (emitter.attachEvent)
      emitter.attachEvent("on" + type, f);
    else {
      var map = emitter._handlers || (emitter._handlers = {});
      var arr = map[type] || (map[type] = []);
      arr.push(f);
    }
  };

  var off = CodeMirror.off = function(emitter, type, f) {
    if (emitter.removeEventListener)
      emitter.removeEventListener(type, f, false);
    else if (emitter.detachEvent)
      emitter.detachEvent("on" + type, f);
    else {
      var arr = emitter._handlers && emitter._handlers[type];
      if (!arr) return;
      for (var i = 0; i < arr.length; ++i)
        if (arr[i] == f) { arr.splice(i, 1); break; }
    }
  };

  var signal = CodeMirror.signal = function(emitter, type /*, values...*/) {
    var arr = emitter._handlers && emitter._handlers[type];
    if (!arr) return;
    var args = Array.prototype.slice.call(arguments, 2);
    for (var i = 0; i < arr.length; ++i) arr[i].apply(null, args);
  };

  // Often, we want to signal events at a point where we are in the
  // middle of some work, but don't want the handler to start calling
  // other methods on the editor, which might be in an inconsistent
  // state or simply not expect any other events to happen.
  // signalLater looks whether there are any handlers, and schedules
  // them to be executed when the last operation ends, or, if no
  // operation is active, when a timeout fires.
  var delayedCallbacks, delayedCallbackDepth = 0;
  function signalLater(emitter, type /*, values...*/) {
    var arr = emitter._handlers && emitter._handlers[type];
    if (!arr) return;
    var args = Array.prototype.slice.call(arguments, 2);
    if (!delayedCallbacks) {
      ++delayedCallbackDepth;
      delayedCallbacks = [];
      setTimeout(fireDelayed, 0);
    }
    function bnd(f) {return function(){f.apply(null, args);};};
    for (var i = 0; i < arr.length; ++i)
      delayedCallbacks.push(bnd(arr[i]));
  }

  function fireDelayed() {
    --delayedCallbackDepth;
    var delayed = delayedCallbacks;
    delayedCallbacks = null;
    for (var i = 0; i < delayed.length; ++i) delayed[i]();
  }

  // The DOM events that CodeMirror handles can be overridden by
  // registering a (non-DOM) handler on the editor for the event name,
  // and preventDefault-ing the event in that handler.
  function signalDOMEvent(cm, e, override) {
    signal(cm, override || e.type, cm, e);
    return e_defaultPrevented(e) || e.codemirrorIgnore;
  }

  function signalCursorActivity(cm) {
    var arr = cm._handlers && cm._handlers.cursorActivity;
    if (!arr) return;
    var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
    for (var i = 0; i < arr.length; ++i) if (indexOf(set, arr[i]) == -1)
      set.push(arr[i]);
  }

  function hasHandler(emitter, type) {
    var arr = emitter._handlers && emitter._handlers[type];
    return arr && arr.length > 0;
  }

  // Add on and off methods to a constructor's prototype, to make
  // registering events on such objects more convenient.
  function eventMixin(ctor) {
    ctor.prototype.on = function(type, f) {on(this, type, f);};
    ctor.prototype.off = function(type, f) {off(this, type, f);};
  }

  // MISC UTILITIES

  // Number of pixels added to scroller and sizer to hide scrollbar
  var scrollerCutOff = 30;

  // Returned or thrown by various protocols to signal 'I'm not
  // handling this'.
  var Pass = CodeMirror.Pass = {toString: function(){return "CodeMirror.Pass";}};

  // Reused option objects for setSelection & friends
  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

  function Delayed() {this.id = null;}
  Delayed.prototype.set = function(ms, f) {
    clearTimeout(this.id);
    this.id = setTimeout(f, ms);
  };

  // Counts the column offset in a string, taking tabs into account.
  // Used mostly to find indentation.
  var countColumn = CodeMirror.countColumn = function(string, end, tabSize, startIndex, startValue) {
    if (end == null) {
      end = string.search(/[^\s\u00a0]/);
      if (end == -1) end = string.length;
    }
    for (var i = startIndex || 0, n = startValue || 0;;) {
      var nextTab = string.indexOf("\t", i);
      if (nextTab < 0 || nextTab >= end)
        return n + (end - i);
      n += nextTab - i;
      n += tabSize - (n % tabSize);
      i = nextTab + 1;
    }
  };

  // The inverse of countColumn -- find the offset that corresponds to
  // a particular column.
  function findColumn(string, goal, tabSize) {
    for (var pos = 0, col = 0;;) {
      var nextTab = string.indexOf("\t", pos);
      if (nextTab == -1) nextTab = string.length;
      var skipped = nextTab - pos;
      if (nextTab == string.length || col + skipped >= goal)
        return pos + Math.min(skipped, goal - col);
      col += nextTab - pos;
      col += tabSize - (col % tabSize);
      pos = nextTab + 1;
      if (col >= goal) return pos;
    }
  }

  var spaceStrs = [""];
  function spaceStr(n) {
    while (spaceStrs.length <= n)
      spaceStrs.push(lst(spaceStrs) + " ");
    return spaceStrs[n];
  }

  function lst(arr) { return arr[arr.length-1]; }

  var selectInput = function(node) { node.select(); };
  if (ios) // Mobile Safari apparently has a bug where select() is broken.
    selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; };
  else if (ie) // Suppress mysterious IE10 errors
    selectInput = function(node) { try { node.select(); } catch(_e) {} };

  function indexOf(array, elt) {
    for (var i = 0; i < array.length; ++i)
      if (array[i] == elt) return i;
    return -1;
  }
  if ([].indexOf) indexOf = function(array, elt) { return array.indexOf(elt); };
  function map(array, f) {
    var out = [];
    for (var i = 0; i < array.length; i++) out[i] = f(array[i], i);
    return out;
  }
  if ([].map) map = function(array, f) { return array.map(f); };

  function createObj(base, props) {
    var inst;
    if (Object.create) {
      inst = Object.create(base);
    } else {
      var ctor = function() {};
      ctor.prototype = base;
      inst = new ctor();
    }
    if (props) copyObj(props, inst);
    return inst;
  };

  function copyObj(obj, target, overwrite) {
    if (!target) target = {};
    for (var prop in obj)
      if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
        target[prop] = obj[prop];
    return target;
  }

  function bind(f) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){return f.apply(null, args);};
  }

  var nonASCIISingleCaseWordChar = /[\u00df\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  var isWordChar = CodeMirror.isWordChar = function(ch) {
    return /\w/.test(ch) || ch > "\x80" &&
      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
  };

  function isEmpty(obj) {
    for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false;
    return true;
  }

  // Extending unicode characters. A series of a non-extending char +
  // any number of extending chars is treated as a single unit as far
  // as editing and measuring is concerned. This is not fully correct,
  // since some scripts/fonts/browsers also treat other configurations
  // of code points as a group.
  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch); }

  // DOM UTILITIES

  function elt(tag, content, className, style) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (style) e.style.cssText = style;
    if (typeof content == "string") e.appendChild(document.createTextNode(content));
    else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
    return e;
  }

  var range;
  if (document.createRange) range = function(node, start, end) {
    var r = document.createRange();
    r.setEnd(node, end);
    r.setStart(node, start);
    return r;
  };
  else range = function(node, start, end) {
    var r = document.body.createTextRange();
    r.moveToElementText(node.parentNode);
    r.collapse(true);
    r.moveEnd("character", end);
    r.moveStart("character", start);
    return r;
  };

  function removeChildren(e) {
    for (var count = e.childNodes.length; count > 0; --count)
      e.removeChild(e.firstChild);
    return e;
  }

  function removeChildrenAndAdd(parent, e) {
    return removeChildren(parent).appendChild(e);
  }

  function contains(parent, child) {
    if (parent.contains)
      return parent.contains(child);
    while (child = child.parentNode)
      if (child == parent) return true;
  }

  function activeElt() { return document.activeElement; }
  // Older versions of IE throws unspecified error when touching
  // document.activeElement in some cases (during loading, in iframe)
  if (ie_upto10) activeElt = function() {
    try { return document.activeElement; }
    catch(e) { return document.body; }
  };

  function classTest(cls) { return new RegExp("\\b" + cls + "\\b\\s*"); }
  function rmClass(node, cls) {
    var test = classTest(cls);
    if (test.test(node.className)) node.className = node.className.replace(test, "");
  }
  function addClass(node, cls) {
    if (!classTest(cls).test(node.className)) node.className += " " + cls;
  }
  function joinClasses(a, b) {
    var as = a.split(" ");
    for (var i = 0; i < as.length; i++)
      if (as[i] && !classTest(as[i]).test(b)) b += " " + as[i];
    return b;
  }

  // FEATURE DETECTION

  // Detect drag-and-drop
  var dragAndDrop = function() {
    // There is *some* kind of drag-and-drop support in IE6-8, but I
    // couldn't get it to work yet.
    if (ie_upto8) return false;
    var div = elt('div');
    return "draggable" in div || "dragDrop" in div;
  }();

  var knownScrollbarWidth;
  function scrollbarWidth(measure) {
    if (knownScrollbarWidth != null) return knownScrollbarWidth;
    var test = elt("div", null, null, "width: 50px; height: 50px; overflow-x: scroll");
    removeChildrenAndAdd(measure, test);
    if (test.offsetWidth)
      knownScrollbarWidth = test.offsetHeight - test.clientHeight;
    return knownScrollbarWidth || 0;
  }

  var zwspSupported;
  function zeroWidthElement(measure) {
    if (zwspSupported == null) {
      var test = elt("span", "\u200b");
      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
      if (measure.firstChild.offsetHeight != 0)
        zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !ie_upto7;
    }
    if (zwspSupported) return elt("span", "\u200b");
    else return elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
  }

  // Feature-detect IE's crummy client rect reporting for bidi text
  var badBidiRects;
  function hasBadBidiRects(measure) {
    if (badBidiRects != null) return badBidiRects;
    var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
    var r0 = range(txt, 0, 1).getBoundingClientRect();
    if (r0.left == r0.right) return false;
    var r1 = range(txt, 1, 2).getBoundingClientRect();
    return badBidiRects = (r1.right - r0.right < 3);
  }

  // See if "".split is the broken IE version, if so, provide an
  // alternative way to split lines.
  var splitLines = CodeMirror.splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
    var pos = 0, result = [], l = string.length;
    while (pos <= l) {
      var nl = string.indexOf("\n", pos);
      if (nl == -1) nl = string.length;
      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
      var rt = line.indexOf("\r");
      if (rt != -1) {
        result.push(line.slice(0, rt));
        pos += rt + 1;
      } else {
        result.push(line);
        pos = nl + 1;
      }
    }
    return result;
  } : function(string){return string.split(/\r\n?|\n/);};

  var hasSelection = window.getSelection ? function(te) {
    try { return te.selectionStart != te.selectionEnd; }
    catch(e) { return false; }
  } : function(te) {
    try {var range = te.ownerDocument.selection.createRange();}
    catch(e) {}
    if (!range || range.parentElement() != te) return false;
    return range.compareEndPoints("StartToEnd", range) != 0;
  };

  var hasCopyEvent = (function() {
    var e = elt("div");
    if ("oncopy" in e) return true;
    e.setAttribute("oncopy", "return;");
    return typeof e.oncopy == "function";
  })();

  // KEY NAMES

  var keyNames = {3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
                  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
                  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
                  46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod", 107: "=", 109: "-", 127: "Delete",
                  173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
                  221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
                  63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"};
  CodeMirror.keyNames = keyNames;
  (function() {
    // Number keys
    for (var i = 0; i < 10; i++) keyNames[i + 48] = keyNames[i + 96] = String(i);
    // Alphabetic keys
    for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
    // Function keys
    for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
  })();

  // BIDI HELPERS

  function iterateBidiSections(order, from, to, f) {
    if (!order) return f(from, to, "ltr");
    var found = false;
    for (var i = 0; i < order.length; ++i) {
      var part = order[i];
      if (part.from < to && part.to > from || from == to && part.to == from) {
        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
        found = true;
      }
    }
    if (!found) f(from, to, "ltr");
  }

  function bidiLeft(part) { return part.level % 2 ? part.to : part.from; }
  function bidiRight(part) { return part.level % 2 ? part.from : part.to; }

  function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0; }
  function lineRight(line) {
    var order = getOrder(line);
    if (!order) return line.text.length;
    return bidiRight(lst(order));
  }

  function lineStart(cm, lineN) {
    var line = getLine(cm.doc, lineN);
    var visual = visualLine(line);
    if (visual != line) lineN = lineNo(visual);
    var order = getOrder(visual);
    var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual);
    return Pos(lineN, ch);
  }
  function lineEnd(cm, lineN) {
    var merged, line = getLine(cm.doc, lineN);
    while (merged = collapsedSpanAtEnd(line)) {
      line = merged.find(1, true).line;
      lineN = null;
    }
    var order = getOrder(line);
    var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line);
    return Pos(lineN == null ? lineNo(line) : lineN, ch);
  }

  function compareBidiLevel(order, a, b) {
    var linedir = order[0].level;
    if (a == linedir) return true;
    if (b == linedir) return false;
    return a < b;
  }
  var bidiOther;
  function getBidiPartAt(order, pos) {
    bidiOther = null;
    for (var i = 0, found; i < order.length; ++i) {
      var cur = order[i];
      if (cur.from < pos && cur.to > pos) return i;
      if ((cur.from == pos || cur.to == pos)) {
        if (found == null) {
          found = i;
        } else if (compareBidiLevel(order, cur.level, order[found].level)) {
          if (cur.from != cur.to) bidiOther = found;
          return i;
        } else {
          if (cur.from != cur.to) bidiOther = i;
          return found;
        }
      }
    }
    return found;
  }

  function moveInLine(line, pos, dir, byUnit) {
    if (!byUnit) return pos + dir;
    do pos += dir;
    while (pos > 0 && isExtendingChar(line.text.charAt(pos)));
    return pos;
  }

  // This is needed in order to move 'visually' through bi-directional
  // text -- i.e., pressing left should make the cursor go left, even
  // when in RTL text. The tricky part is the 'jumps', where RTL and
  // LTR text touch each other. This often requires the cursor offset
  // to move more than one unit, in order to visually move one unit.
  function moveVisually(line, start, dir, byUnit) {
    var bidi = getOrder(line);
    if (!bidi) return moveLogically(line, start, dir, byUnit);
    var pos = getBidiPartAt(bidi, start), part = bidi[pos];
    var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit);

    for (;;) {
      if (target > part.from && target < part.to) return target;
      if (target == part.from || target == part.to) {
        if (getBidiPartAt(bidi, target) == pos) return target;
        part = bidi[pos += dir];
        return (dir > 0) == part.level % 2 ? part.to : part.from;
      } else {
        part = bidi[pos += dir];
        if (!part) return null;
        if ((dir > 0) == part.level % 2)
          target = moveInLine(line, part.to, -1, byUnit);
        else
          target = moveInLine(line, part.from, 1, byUnit);
      }
    }
  }

  function moveLogically(line, start, dir, byUnit) {
    var target = start + dir;
    if (byUnit) while (target > 0 && isExtendingChar(line.text.charAt(target))) target += dir;
    return target < 0 || target > line.text.length ? null : target;
  }

  // Bidirectional ordering algorithm
  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
  // that this (partially) implements.

  // One-char codes used for character types:
  // L (L):   Left-to-Right
  // R (R):   Right-to-Left
  // r (AL):  Right-to-Left Arabic
  // 1 (EN):  European Number
  // + (ES):  European Number Separator
  // % (ET):  European Number Terminator
  // n (AN):  Arabic Number
  // , (CS):  Common Number Separator
  // m (NSM): Non-Spacing Mark
  // b (BN):  Boundary Neutral
  // s (B):   Paragraph Separator
  // t (S):   Segment Separator
  // w (WS):  Whitespace
  // N (ON):  Other Neutrals

  // Returns null if characters are ordered as they appear
  // (left-to-right), or an array of sections ({from, to, level}
  // objects) in the order in which they occur visually.
  var bidiOrdering = (function() {
    // Character types for codepoints 0 to 0xff
    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
    // Character types for codepoints 0x600 to 0x6ff
    var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm";
    function charType(code) {
      if (code <= 0xf7) return lowTypes.charAt(code);
      else if (0x590 <= code && code <= 0x5f4) return "R";
      else if (0x600 <= code && code <= 0x6ed) return arabicTypes.charAt(code - 0x600);
      else if (0x6ee <= code && code <= 0x8ac) return "r";
      else if (0x2000 <= code && code <= 0x200b) return "w";
      else if (code == 0x200c) return "b";
      else return "L";
    }

    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
    // Browsers seem to always treat the boundaries of block elements as being L.
    var outerType = "L";

    function BidiSpan(level, from, to) {
      this.level = level;
      this.from = from; this.to = to;
    }

    return function(str) {
      if (!bidiRE.test(str)) return false;
      var len = str.length, types = [];
      for (var i = 0, type; i < len; ++i)
        types.push(type = charType(str.charCodeAt(i)));

      // W1. Examine each non-spacing mark (NSM) in the level run, and
      // change the type of the NSM to the type of the previous
      // character. If the NSM is at the start of the level run, it will
      // get the type of sor.
      for (var i = 0, prev = outerType; i < len; ++i) {
        var type = types[i];
        if (type == "m") types[i] = prev;
        else prev = type;
      }

      // W2. Search backwards from each instance of a European number
      // until the first strong type (R, L, AL, or sor) is found. If an
      // AL is found, change the type of the European number to Arabic
      // number.
      // W3. Change all ALs to R.
      for (var i = 0, cur = outerType; i < len; ++i) {
        var type = types[i];
        if (type == "1" && cur == "r") types[i] = "n";
        else if (isStrong.test(type)) { cur = type; if (type == "r") types[i] = "R"; }
      }

      // W4. A single European separator between two European numbers
      // changes to a European number. A single common separator between
      // two numbers of the same type changes to that type.
      for (var i = 1, prev = types[0]; i < len - 1; ++i) {
        var type = types[i];
        if (type == "+" && prev == "1" && types[i+1] == "1") types[i] = "1";
        else if (type == "," && prev == types[i+1] &&
                 (prev == "1" || prev == "n")) types[i] = prev;
        prev = type;
      }

      // W5. A sequence of European terminators adjacent to European
      // numbers changes to all European numbers.
      // W6. Otherwise, separators and terminators change to Other
      // Neutral.
      for (var i = 0; i < len; ++i) {
        var type = types[i];
        if (type == ",") types[i] = "N";
        else if (type == "%") {
          for (var end = i + 1; end < len && types[end] == "%"; ++end) {}
          var replace = (i && types[i-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
          for (var j = i; j < end; ++j) types[j] = replace;
          i = end - 1;
        }
      }

      // W7. Search backwards from each instance of a European number
      // until the first strong type (R, L, or sor) is found. If an L is
      // found, then change the type of the European number to L.
      for (var i = 0, cur = outerType; i < len; ++i) {
        var type = types[i];
        if (cur == "L" && type == "1") types[i] = "L";
        else if (isStrong.test(type)) cur = type;
      }

      // N1. A sequence of neutrals takes the direction of the
      // surrounding strong text if the text on both sides has the same
      // direction. European and Arabic numbers act as if they were R in
      // terms of their influence on neutrals. Start-of-level-run (sor)
      // and end-of-level-run (eor) are used at level run boundaries.
      // N2. Any remaining neutrals take the embedding direction.
      for (var i = 0; i < len; ++i) {
        if (isNeutral.test(types[i])) {
          for (var end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
          var before = (i ? types[i-1] : outerType) == "L";
          var after = (end < len ? types[end] : outerType) == "L";
          var replace = before || after ? "L" : "R";
          for (var j = i; j < end; ++j) types[j] = replace;
          i = end - 1;
        }
      }

      // Here we depart from the documented algorithm, in order to avoid
      // building up an actual levels array. Since there are only three
      // levels (0, 1, 2) in an implementation that doesn't take
      // explicit embedding into account, we can build up the order on
      // the fly, without following the level-based algorithm.
      var order = [], m;
      for (var i = 0; i < len;) {
        if (countsAsLeft.test(types[i])) {
          var start = i;
          for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
          order.push(new BidiSpan(0, start, i));
        } else {
          var pos = i, at = order.length;
          for (++i; i < len && types[i] != "L"; ++i) {}
          for (var j = pos; j < i;) {
            if (countsAsNum.test(types[j])) {
              if (pos < j) order.splice(at, 0, new BidiSpan(1, pos, j));
              var nstart = j;
              for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
              order.splice(at, 0, new BidiSpan(2, nstart, j));
              pos = j;
            } else ++j;
          }
          if (pos < i) order.splice(at, 0, new BidiSpan(1, pos, i));
        }
      }
      if (order[0].level == 1 && (m = str.match(/^\s+/))) {
        order[0].from = m[0].length;
        order.unshift(new BidiSpan(0, 0, m[0].length));
      }
      if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
        lst(order).to -= m[0].length;
        order.push(new BidiSpan(0, len - m[0].length, len));
      }
      if (order[0].level != lst(order).level)
        order.push(new BidiSpan(order[0].level, len, len));

      return order;
    };
  })();

  // THE END

  CodeMirror.version = "4.1.0";

  return CodeMirror;
});

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  var ie_lt8 = /MSIE \d/.test(navigator.userAgent) &&
    (document.documentMode == null || document.documentMode < 8);

  var Pos = CodeMirror.Pos;

  var matching = {"(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<"};

  function findMatchingBracket(cm, where, strict, config) {
    var line = cm.getLineHandle(where.line), pos = where.ch - 1;
    var match = (pos >= 0 && matching[line.text.charAt(pos)]) || matching[line.text.charAt(++pos)];
    if (!match) return null;
    var dir = match.charAt(1) == ">" ? 1 : -1;
    if (strict && (dir > 0) != (pos == where.ch)) return null;
    var style = cm.getTokenTypeAt(Pos(where.line, pos + 1));

    var found = scanForBracket(cm, Pos(where.line, pos + (dir > 0 ? 1 : 0)), dir, style || null, config);
    if (found == null) return null;
    return {from: Pos(where.line, pos), to: found && found.pos,
            match: found && found.ch == match.charAt(0), forward: dir > 0};
  }

  // bracketRegex is used to specify which type of bracket to scan
  // should be a regexp, e.g. /[[\]]/
  //
  // Note: If "where" is on an open bracket, then this bracket is ignored.
  //
  // Returns false when no bracket was found, null when it reached
  // maxScanLines and gave up
  function scanForBracket(cm, where, dir, style, config) {
    var maxScanLen = (config && config.maxScanLineLength) || 10000;
    var maxScanLines = (config && config.maxScanLines) || 1000;

    var stack = [];
    var re = config && config.bracketRegex ? config.bracketRegex : /[(){}[\]]/;
    var lineEnd = dir > 0 ? Math.min(where.line + maxScanLines, cm.lastLine() + 1)
                          : Math.max(cm.firstLine() - 1, where.line - maxScanLines);
    for (var lineNo = where.line; lineNo != lineEnd; lineNo += dir) {
      var line = cm.getLine(lineNo);
      if (!line) continue;
      var pos = dir > 0 ? 0 : line.length - 1, end = dir > 0 ? line.length : -1;
      if (line.length > maxScanLen) continue;
      if (lineNo == where.line) pos = where.ch - (dir < 0 ? 1 : 0);
      for (; pos != end; pos += dir) {
        var ch = line.charAt(pos);
        if (re.test(ch) && (style === undefined || cm.getTokenTypeAt(Pos(lineNo, pos + 1)) == style)) {
          var match = matching[ch];
          if ((match.charAt(1) == ">") == (dir > 0)) stack.push(ch);
          else if (!stack.length) return {pos: Pos(lineNo, pos), ch: ch};
          else stack.pop();
        }
      }
    }
    return lineNo - dir == (dir > 0 ? cm.lastLine() : cm.firstLine()) ? false : null;
  }

  function matchBrackets(cm, autoclear, config) {
    // Disable brace matching in long lines, since it'll cause hugely slow updates
    var maxHighlightLen = cm.state.matchBrackets.maxHighlightLineLength || 1000;
    var marks = [], ranges = cm.listSelections();
    for (var i = 0; i < ranges.length; i++) {
      var match = ranges[i].empty() && findMatchingBracket(cm, ranges[i].head, false, config);
      if (match && cm.getLine(match.from.line).length <= maxHighlightLen) {
        var style = match.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
        marks.push(cm.markText(match.from, Pos(match.from.line, match.from.ch + 1), {className: style}));
        if (match.to && cm.getLine(match.to.line).length <= maxHighlightLen)
          marks.push(cm.markText(match.to, Pos(match.to.line, match.to.ch + 1), {className: style}));
      }
    }

    if (marks.length) {
      // Kludge to work around the IE bug from issue #1193, where text
      // input stops going to the textare whever this fires.
      if (ie_lt8 && cm.state.focused) cm.display.input.focus();

      var clear = function() {
        cm.operation(function() {
          for (var i = 0; i < marks.length; i++) marks[i].clear();
        });
      };
      if (autoclear) setTimeout(clear, 800);
      else return clear;
    }
  }

  var currentlyHighlighted = null;
  function doMatchBrackets(cm) {
    cm.operation(function() {
      if (currentlyHighlighted) {currentlyHighlighted(); currentlyHighlighted = null;}
      currentlyHighlighted = matchBrackets(cm, false, cm.state.matchBrackets);
    });
  }

  CodeMirror.defineOption("matchBrackets", false, function(cm, val, old) {
    if (old && old != CodeMirror.Init)
      cm.off("cursorActivity", doMatchBrackets);
    if (val) {
      cm.state.matchBrackets = typeof val == "object" ? val : {};
      cm.on("cursorActivity", doMatchBrackets);
    }
  });

  CodeMirror.defineExtension("matchBrackets", function() {matchBrackets(this, true);});
  CodeMirror.defineExtension("findMatchingBracket", function(pos, strict, config){
    return findMatchingBracket(this, pos, strict, config);
  });
  CodeMirror.defineExtension("scanForBracket", function(pos, dir, style, config){
    return scanForBracket(this, pos, dir, style, config);
  });
});

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var Pos = CodeMirror.Pos;
  function cmp(a, b) { return a.line - b.line || a.ch - b.ch; }

  var nameStartChar = "A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
  var nameChar = nameStartChar + "\-\:\.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
  var xmlTagStart = new RegExp("<(/?)([" + nameStartChar + "][" + nameChar + "]*)", "g");

  function Iter(cm, line, ch, range) {
    this.line = line; this.ch = ch;
    this.cm = cm; this.text = cm.getLine(line);
    this.min = range ? range.from : cm.firstLine();
    this.max = range ? range.to - 1 : cm.lastLine();
  }

  function tagAt(iter, ch) {
    var type = iter.cm.getTokenTypeAt(Pos(iter.line, ch));
    return type && /\btag\b/.test(type);
  }

  function nextLine(iter) {
    if (iter.line >= iter.max) return;
    iter.ch = 0;
    iter.text = iter.cm.getLine(++iter.line);
    return true;
  }
  function prevLine(iter) {
    if (iter.line <= iter.min) return;
    iter.text = iter.cm.getLine(--iter.line);
    iter.ch = iter.text.length;
    return true;
  }

  function toTagEnd(iter) {
    for (;;) {
      var gt = iter.text.indexOf(">", iter.ch);
      if (gt == -1) { if (nextLine(iter)) continue; else return; }
      if (!tagAt(iter, gt + 1)) { iter.ch = gt + 1; continue; }
      var lastSlash = iter.text.lastIndexOf("/", gt);
      var selfClose = lastSlash > -1 && !/\S/.test(iter.text.slice(lastSlash + 1, gt));
      iter.ch = gt + 1;
      return selfClose ? "selfClose" : "regular";
    }
  }
  function toTagStart(iter) {
    for (;;) {
      var lt = iter.ch ? iter.text.lastIndexOf("<", iter.ch - 1) : -1;
      if (lt == -1) { if (prevLine(iter)) continue; else return; }
      if (!tagAt(iter, lt + 1)) { iter.ch = lt; continue; }
      xmlTagStart.lastIndex = lt;
      iter.ch = lt;
      var match = xmlTagStart.exec(iter.text);
      if (match && match.index == lt) return match;
    }
  }

  function toNextTag(iter) {
    for (;;) {
      xmlTagStart.lastIndex = iter.ch;
      var found = xmlTagStart.exec(iter.text);
      if (!found) { if (nextLine(iter)) continue; else return; }
      if (!tagAt(iter, found.index + 1)) { iter.ch = found.index + 1; continue; }
      iter.ch = found.index + found[0].length;
      return found;
    }
  }
  function toPrevTag(iter) {
    for (;;) {
      var gt = iter.ch ? iter.text.lastIndexOf(">", iter.ch - 1) : -1;
      if (gt == -1) { if (prevLine(iter)) continue; else return; }
      if (!tagAt(iter, gt + 1)) { iter.ch = gt; continue; }
      var lastSlash = iter.text.lastIndexOf("/", gt);
      var selfClose = lastSlash > -1 && !/\S/.test(iter.text.slice(lastSlash + 1, gt));
      iter.ch = gt + 1;
      return selfClose ? "selfClose" : "regular";
    }
  }

  function findMatchingClose(iter, tag) {
    var stack = [];
    for (;;) {
      var next = toNextTag(iter), end, startLine = iter.line, startCh = iter.ch - (next ? next[0].length : 0);
      if (!next || !(end = toTagEnd(iter))) return;
      if (end == "selfClose") continue;
      if (next[1]) { // closing tag
        for (var i = stack.length - 1; i >= 0; --i) if (stack[i] == next[2]) {
          stack.length = i;
          break;
        }
        if (i < 0 && (!tag || tag == next[2])) return {
          tag: next[2],
          from: Pos(startLine, startCh),
          to: Pos(iter.line, iter.ch)
        };
      } else { // opening tag
        stack.push(next[2]);
      }
    }
  }
  function findMatchingOpen(iter, tag) {
    var stack = [];
    for (;;) {
      var prev = toPrevTag(iter);
      if (!prev) return;
      if (prev == "selfClose") { toTagStart(iter); continue; }
      var endLine = iter.line, endCh = iter.ch;
      var start = toTagStart(iter);
      if (!start) return;
      if (start[1]) { // closing tag
        stack.push(start[2]);
      } else { // opening tag
        for (var i = stack.length - 1; i >= 0; --i) if (stack[i] == start[2]) {
          stack.length = i;
          break;
        }
        if (i < 0 && (!tag || tag == start[2])) return {
          tag: start[2],
          from: Pos(iter.line, iter.ch),
          to: Pos(endLine, endCh)
        };
      }
    }
  }

  CodeMirror.registerHelper("fold", "xml", function(cm, start) {
    var iter = new Iter(cm, start.line, 0);
    for (;;) {
      var openTag = toNextTag(iter), end;
      if (!openTag || iter.line != start.line || !(end = toTagEnd(iter))) return;
      if (!openTag[1] && end != "selfClose") {
        var start = Pos(iter.line, iter.ch);
        var close = findMatchingClose(iter, openTag[2]);
        return close && {from: start, to: close.from};
      }
    }
  });
  CodeMirror.findMatchingTag = function(cm, pos, range) {
    var iter = new Iter(cm, pos.line, pos.ch, range);
    if (iter.text.indexOf(">") == -1 && iter.text.indexOf("<") == -1) return;
    var end = toTagEnd(iter), to = end && Pos(iter.line, iter.ch);
    var start = end && toTagStart(iter);
    if (!end || end == "selfClose" || !start || cmp(iter, pos) > 0) return;
    var here = {from: Pos(iter.line, iter.ch), to: to, tag: start[2]};

    if (start[1]) { // closing tag
      return {open: findMatchingOpen(iter, start[2]), close: here, at: "close"};
    } else { // opening tag
      iter = new Iter(cm, to.line, to.ch, range);
      return {open: here, close: findMatchingClose(iter, start[2]), at: "open"};
    }
  };

  CodeMirror.findEnclosingTag = function(cm, pos, range) {
    var iter = new Iter(cm, pos.line, pos.ch, range);
    for (;;) {
      var open = findMatchingOpen(iter);
      if (!open) break;
      var forward = new Iter(cm, pos.line, pos.ch, range);
      var close = findMatchingClose(forward, open.tag);
      if (close) return {open: open, close: close};
    }
  };

  // Used by addon/edit/closetag.js
  CodeMirror.scanForClosingTag = function(cm, pos, name, end) {
    var iter = new Iter(cm, pos.line, pos.ch, end ? {from: 0, to: end} : null);
    return !!findMatchingClose(iter, name);
  };
});

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../fold/xml-fold"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../fold/xml-fold"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  CodeMirror.defineOption("matchTags", false, function(cm, val, old) {
    if (old && old != CodeMirror.Init) {
      cm.off("cursorActivity", doMatchTags);
      cm.off("viewportChange", maybeUpdateMatch);
      clear(cm);
    }
    if (val) {
      cm.state.matchBothTags = typeof val == "object" && val.bothTags;
      cm.on("cursorActivity", doMatchTags);
      cm.on("viewportChange", maybeUpdateMatch);
      doMatchTags(cm);
    }
  });

  function clear(cm) {
    if (cm.state.tagHit) cm.state.tagHit.clear();
    if (cm.state.tagOther) cm.state.tagOther.clear();
    cm.state.tagHit = cm.state.tagOther = null;
  }

  function doMatchTags(cm) {
    cm.state.failedTagMatch = false;
    cm.operation(function() {
      clear(cm);
      if (cm.somethingSelected()) return;
      var cur = cm.getCursor(), range = cm.getViewport();
      range.from = Math.min(range.from, cur.line); range.to = Math.max(cur.line + 1, range.to);
      var match = CodeMirror.findMatchingTag(cm, cur, range);
      if (!match) return;
      if (cm.state.matchBothTags) {
        var hit = match.at == "open" ? match.open : match.close;
        if (hit) cm.state.tagHit = cm.markText(hit.from, hit.to, {className: "CodeMirror-matchingtag"});
      }
      var other = match.at == "close" ? match.open : match.close;
      if (other)
        cm.state.tagOther = cm.markText(other.from, other.to, {className: "CodeMirror-matchingtag"});
      else
        cm.state.failedTagMatch = true;
    });
  }

  function maybeUpdateMatch(cm) {
    if (cm.state.failedTagMatch) doMatchTags(cm);
  }

  CodeMirror.commands.toMatchingTag = function(cm) {
    var found = CodeMirror.findMatchingTag(cm, cm.getCursor());
    if (found) {
      var other = found.at == "close" ? found.open : found.close;
      if (other) cm.extendSelection(other.to, other.from);
    }
  };
});

// Because sometimes you need to style the cursor's line.
//
// Adds an option 'styleActiveLine' which, when enabled, gives the
// active line's wrapping <div> the CSS class "CodeMirror-activeline",
// and gives its background <div> the class "CodeMirror-activeline-background".

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";
  var WRAP_CLASS = "CodeMirror-activeline";
  var BACK_CLASS = "CodeMirror-activeline-background";

  CodeMirror.defineOption("styleActiveLine", false, function(cm, val, old) {
    var prev = old && old != CodeMirror.Init;
    if (val && !prev) {
      cm.state.activeLines = [];
      updateActiveLines(cm, cm.listSelections());
      cm.on("beforeSelectionChange", selectionChange);
    } else if (!val && prev) {
      cm.off("beforeSelectionChange", selectionChange);
      clearActiveLines(cm);
      delete cm.state.activeLines;
    }
  });

  function clearActiveLines(cm) {
    for (var i = 0; i < cm.state.activeLines.length; i++) {
      cm.removeLineClass(cm.state.activeLines[i], "wrap", WRAP_CLASS);
      cm.removeLineClass(cm.state.activeLines[i], "background", BACK_CLASS);
    }
  }

  function sameArray(a, b) {
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; i++)
      if (a[i] != b[i]) return false;
    return true;
  }

  function updateActiveLines(cm, ranges) {
    var active = [];
    for (var i = 0; i < ranges.length; i++) {
      var line = cm.getLineHandleVisualStart(ranges[i].head.line);
      if (active[active.length - 1] != line) active.push(line);
    }
    if (sameArray(cm.state.activeLines, active)) return;
    cm.operation(function() {
      clearActiveLines(cm);
      for (var i = 0; i < active.length; i++) {
        cm.addLineClass(active[i], "wrap", WRAP_CLASS);
        cm.addLineClass(active[i], "background", BACK_CLASS);
      }
      cm.state.activeLines = active;
    });
  }

  function selectionChange(cm, sel) {
    updateActiveLines(cm, sel.ranges);
  }
});

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("css", function(config, parserConfig) {
  if (!parserConfig.propertyKeywords) parserConfig = CodeMirror.resolveMode("text/css");

  var indentUnit = config.indentUnit,
      tokenHooks = parserConfig.tokenHooks,
      mediaTypes = parserConfig.mediaTypes || {},
      mediaFeatures = parserConfig.mediaFeatures || {},
      propertyKeywords = parserConfig.propertyKeywords || {},
      nonStandardPropertyKeywords = parserConfig.nonStandardPropertyKeywords || {},
      colorKeywords = parserConfig.colorKeywords || {},
      valueKeywords = parserConfig.valueKeywords || {},
      fontProperties = parserConfig.fontProperties || {},
      allowNested = parserConfig.allowNested;

  var type, override;
  function ret(style, tp) { type = tp; return style; }

  // Tokenizers

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (tokenHooks[ch]) {
      var result = tokenHooks[ch](stream, state);
      if (result !== false) return result;
    }
    if (ch == "@") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("def", stream.current());
    } else if (ch == "=" || (ch == "~" || ch == "|") && stream.eat("=")) {
      return ret(null, "compare");
    } else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "#") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("atom", "hash");
    } else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    } else if (/\d/.test(ch) || ch == "." && stream.eat(/\d/)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    } else if (ch === "-") {
      if (/[\d.]/.test(stream.peek())) {
        stream.eatWhile(/[\w.%]/);
        return ret("number", "unit");
      } else if (stream.match(/^[^-]+-/)) {
        return ret("meta", "meta");
      }
    } else if (/[,+>*\/]/.test(ch)) {
      return ret(null, "select-op");
    } else if (ch == "." && stream.match(/^-?[_a-z][_a-z0-9-]*/i)) {
      return ret("qualifier", "qualifier");
    } else if (/[:;{}\[\]\(\)]/.test(ch)) {
      return ret(null, ch);
    } else if (ch == "u" && stream.match("rl(")) {
      stream.backUp(1);
      state.tokenize = tokenParenthesized;
      return ret("property", "word");
    } else if (/[\w\\\-]/.test(ch)) {
      stream.eatWhile(/[\w\\\-]/);
      return ret("property", "word");
    } else {
      return ret(null, null);
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped) {
          if (quote == ")") stream.backUp(1);
          break;
        }
        escaped = !escaped && ch == "\\";
      }
      if (ch == quote || !escaped && quote != ")") state.tokenize = null;
      return ret("string", "string");
    };
  }

  function tokenParenthesized(stream, state) {
    stream.next(); // Must be '('
    if (!stream.match(/\s*[\"\')]/, false))
      state.tokenize = tokenString(")");
    else
      state.tokenize = null;
    return ret(null, "(");
  }

  // Context management

  function Context(type, indent, prev) {
    this.type = type;
    this.indent = indent;
    this.prev = prev;
  }

  function pushContext(state, stream, type) {
    state.context = new Context(type, stream.indentation() + indentUnit, state.context);
    return type;
  }

  function popContext(state) {
    state.context = state.context.prev;
    return state.context.type;
  }

  function pass(type, stream, state) {
    return states[state.context.type](type, stream, state);
  }
  function popAndPass(type, stream, state, n) {
    for (var i = n || 1; i > 0; i--)
      state.context = state.context.prev;
    return pass(type, stream, state);
  }

  // Parser

  function wordAsValue(stream) {
    var word = stream.current().toLowerCase();
    if (valueKeywords.hasOwnProperty(word))
      override = "atom";
    else if (colorKeywords.hasOwnProperty(word))
      override = "keyword";
    else
      override = "variable";
  }

  var states = {};

  states.top = function(type, stream, state) {
    if (type == "{") {
      return pushContext(state, stream, "block");
    } else if (type == "}" && state.context.prev) {
      return popContext(state);
    } else if (type == "@media") {
      return pushContext(state, stream, "media");
    } else if (type == "@font-face") {
      return "font_face_before";
    } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(type)) {
      return "keyframes";
    } else if (type && type.charAt(0) == "@") {
      return pushContext(state, stream, "at");
    } else if (type == "hash") {
      override = "builtin";
    } else if (type == "word") {
      override = "tag";
    } else if (type == "variable-definition") {
      return "maybeprop";
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    } else if (type == ":") {
      return "pseudo";
    } else if (allowNested && type == "(") {
      return pushContext(state, stream, "params");
    }
    return state.context.type;
  };

  states.block = function(type, stream, state) {
    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (propertyKeywords.hasOwnProperty(word)) {
        override = "property";
        return "maybeprop";
      } else if (nonStandardPropertyKeywords.hasOwnProperty(word)) {
        override = "string-2";
        return "maybeprop";
      } else if (allowNested) {
        override = stream.match(/^\s*:/, false) ? "property" : "tag";
        return "block";
      } else {
        override += " error";
        return "maybeprop";
      }
    } else if (type == "meta") {
      return "block";
    } else if (!allowNested && (type == "hash" || type == "qualifier")) {
      override = "error";
      return "block";
    } else {
      return states.top(type, stream, state);
    }
  };

  states.maybeprop = function(type, stream, state) {
    if (type == ":") return pushContext(state, stream, "prop");
    return pass(type, stream, state);
  };

  states.prop = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" && allowNested) return pushContext(state, stream, "propBlock");
    if (type == "}" || type == "{") return popAndPass(type, stream, state);
    if (type == "(") return pushContext(state, stream, "parens");

    if (type == "hash" && !/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(stream.current())) {
      override += " error";
    } else if (type == "word") {
      wordAsValue(stream);
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    }
    return "prop";
  };

  states.propBlock = function(type, _stream, state) {
    if (type == "}") return popContext(state);
    if (type == "word") { override = "property"; return "maybeprop"; }
    return state.context.type;
  };

  states.parens = function(type, stream, state) {
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == ")") return popContext(state);
    return "parens";
  };

  states.pseudo = function(type, stream, state) {
    if (type == "word") {
      override = "variable-3";
      return state.context.type;
    }
    return pass(type, stream, state);
  };

  states.media = function(type, stream, state) {
    if (type == "(") return pushContext(state, stream, "media_parens");
    if (type == "}") return popAndPass(type, stream, state);
    if (type == "{") return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top");

    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (word == "only" || word == "not" || word == "and")
        override = "keyword";
      else if (mediaTypes.hasOwnProperty(word))
        override = "attribute";
      else if (mediaFeatures.hasOwnProperty(word))
        override = "property";
      else
        override = "error";
    }
    return state.context.type;
  };

  states.media_parens = function(type, stream, state) {
    if (type == ")") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state, 2);
    return states.media(type, stream, state);
  };

  states.font_face_before = function(type, stream, state) {
    if (type == "{")
      return pushContext(state, stream, "font_face");
    return pass(type, stream, state);
  };

  states.font_face = function(type, stream, state) {
    if (type == "}") return popContext(state);
    if (type == "word") {
      if (!fontProperties.hasOwnProperty(stream.current().toLowerCase()))
        override = "error";
      else
        override = "property";
      return "maybeprop";
    }
    return "font_face";
  };

  states.keyframes = function(type, stream, state) {
    if (type == "word") { override = "variable"; return "keyframes"; }
    if (type == "{") return pushContext(state, stream, "top");
    return pass(type, stream, state);
  };

  states.at = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == "word") override = "tag";
    else if (type == "hash") override = "builtin";
    return "at";
  };

  states.interpolation = function(type, stream, state) {
    if (type == "}") return popContext(state);
    if (type == "{" || type == ";") return popAndPass(type, stream, state);
    if (type != "variable") override = "error";
    return "interpolation";
  };

  states.params = function(type, stream, state) {
    if (type == ")") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == "word") wordAsValue(stream);
    return "params";
  };

  return {
    startState: function(base) {
      return {tokenize: null,
              state: "top",
              context: new Context("top", base || 0, null)};
    },

    token: function(stream, state) {
      if (!state.tokenize && stream.eatSpace()) return null;
      var style = (state.tokenize || tokenBase)(stream, state);
      if (style && typeof style == "object") {
        type = style[1];
        style = style[0];
      }
      override = style;
      state.state = states[state.state](type, stream, state);
      return override;
    },

    indent: function(state, textAfter) {
      var cx = state.context, ch = textAfter && textAfter.charAt(0);
      var indent = cx.indent;
      if (cx.type == "prop" && ch == "}") cx = cx.prev;
      if (cx.prev &&
          (ch == "}" && (cx.type == "block" || cx.type == "top" || cx.type == "interpolation" || cx.type == "font_face") ||
           ch == ")" && (cx.type == "parens" || cx.type == "params" || cx.type == "media_parens") ||
           ch == "{" && (cx.type == "at" || cx.type == "media"))) {
        indent = cx.indent - indentUnit;
        cx = cx.prev;
      }
      return indent;
    },

    electricChars: "}",
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    fold: "brace"
  };
});

  function keySet(array) {
    var keys = {};
    for (var i = 0; i < array.length; ++i) {
      keys[array[i]] = true;
    }
    return keys;
  }

  var mediaTypes_ = [
    "all", "aural", "braille", "handheld", "print", "projection", "screen",
    "tty", "tv", "embossed"
  ], mediaTypes = keySet(mediaTypes_);

  var mediaFeatures_ = [
    "width", "min-width", "max-width", "height", "min-height", "max-height",
    "device-width", "min-device-width", "max-device-width", "device-height",
    "min-device-height", "max-device-height", "aspect-ratio",
    "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio",
    "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color",
    "max-color", "color-index", "min-color-index", "max-color-index",
    "monochrome", "min-monochrome", "max-monochrome", "resolution",
    "min-resolution", "max-resolution", "scan", "grid"
  ], mediaFeatures = keySet(mediaFeatures_);

  var propertyKeywords_ = [
    "align-content", "align-items", "align-self", "alignment-adjust",
    "alignment-baseline", "anchor-point", "animation", "animation-delay",
    "animation-direction", "animation-duration", "animation-fill-mode",
    "animation-iteration-count", "animation-name", "animation-play-state",
    "animation-timing-function", "appearance", "azimuth", "backface-visibility",
    "background", "background-attachment", "background-clip", "background-color",
    "background-image", "background-origin", "background-position",
    "background-repeat", "background-size", "baseline-shift", "binding",
    "bleed", "bookmark-label", "bookmark-level", "bookmark-state",
    "bookmark-target", "border", "border-bottom", "border-bottom-color",
    "border-bottom-left-radius", "border-bottom-right-radius",
    "border-bottom-style", "border-bottom-width", "border-collapse",
    "border-color", "border-image", "border-image-outset",
    "border-image-repeat", "border-image-slice", "border-image-source",
    "border-image-width", "border-left", "border-left-color",
    "border-left-style", "border-left-width", "border-radius", "border-right",
    "border-right-color", "border-right-style", "border-right-width",
    "border-spacing", "border-style", "border-top", "border-top-color",
    "border-top-left-radius", "border-top-right-radius", "border-top-style",
    "border-top-width", "border-width", "bottom", "box-decoration-break",
    "box-shadow", "box-sizing", "break-after", "break-before", "break-inside",
    "caption-side", "clear", "clip", "color", "color-profile", "column-count",
    "column-fill", "column-gap", "column-rule", "column-rule-color",
    "column-rule-style", "column-rule-width", "column-span", "column-width",
    "columns", "content", "counter-increment", "counter-reset", "crop", "cue",
    "cue-after", "cue-before", "cursor", "direction", "display",
    "dominant-baseline", "drop-initial-after-adjust",
    "drop-initial-after-align", "drop-initial-before-adjust",
    "drop-initial-before-align", "drop-initial-size", "drop-initial-value",
    "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis",
    "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap",
    "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings",
    "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust",
    "font-stretch", "font-style", "font-synthesis", "font-variant",
    "font-variant-alternates", "font-variant-caps", "font-variant-east-asian",
    "font-variant-ligatures", "font-variant-numeric", "font-variant-position",
    "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow",
    "grid-auto-position", "grid-auto-rows", "grid-column", "grid-column-end",
    "grid-column-start", "grid-row", "grid-row-end", "grid-row-start",
    "grid-template", "grid-template-areas", "grid-template-columns",
    "grid-template-rows", "hanging-punctuation", "height", "hyphens",
    "icon", "image-orientation", "image-rendering", "image-resolution",
    "inline-box-align", "justify-content", "left", "letter-spacing",
    "line-break", "line-height", "line-stacking", "line-stacking-ruby",
    "line-stacking-shift", "line-stacking-strategy", "list-style",
    "list-style-image", "list-style-position", "list-style-type", "margin",
    "margin-bottom", "margin-left", "margin-right", "margin-top",
    "marker-offset", "marks", "marquee-direction", "marquee-loop",
    "marquee-play-count", "marquee-speed", "marquee-style", "max-height",
    "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index",
    "nav-left", "nav-right", "nav-up", "opacity", "order", "orphans", "outline",
    "outline-color", "outline-offset", "outline-style", "outline-width",
    "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y",
    "padding", "padding-bottom", "padding-left", "padding-right", "padding-top",
    "page", "page-break-after", "page-break-before", "page-break-inside",
    "page-policy", "pause", "pause-after", "pause-before", "perspective",
    "perspective-origin", "pitch", "pitch-range", "play-during", "position",
    "presentation-level", "punctuation-trim", "quotes", "region-break-after",
    "region-break-before", "region-break-inside", "region-fragment",
    "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness",
    "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang",
    "ruby-position", "ruby-span", "shape-inside", "shape-outside", "size",
    "speak", "speak-as", "speak-header",
    "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set",
    "tab-size", "table-layout", "target", "target-name", "target-new",
    "target-position", "text-align", "text-align-last", "text-decoration",
    "text-decoration-color", "text-decoration-line", "text-decoration-skip",
    "text-decoration-style", "text-emphasis", "text-emphasis-color",
    "text-emphasis-position", "text-emphasis-style", "text-height",
    "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow",
    "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position",
    "text-wrap", "top", "transform", "transform-origin", "transform-style",
    "transition", "transition-delay", "transition-duration",
    "transition-property", "transition-timing-function", "unicode-bidi",
    "vertical-align", "visibility", "voice-balance", "voice-duration",
    "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress",
    "voice-volume", "volume", "white-space", "widows", "width", "word-break",
    "word-spacing", "word-wrap", "z-index",
    // SVG-specific
    "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color",
    "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events",
    "color-interpolation", "color-interpolation-filters",
    "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering",
    "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke",
    "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin",
    "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering",
    "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal",
    "glyph-orientation-vertical", "text-anchor", "writing-mode"
  ], propertyKeywords = keySet(propertyKeywords_);

  var nonStandardPropertyKeywords = [
    "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color",
    "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color",
    "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside",
    "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button",
    "searchfield-results-decoration", "zoom"
  ], nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords);

  var colorKeywords_ = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige",
    "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown",
    "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
    "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod",
    "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen",
    "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
    "darkslateblue", "darkslategray", "darkturquoise", "darkviolet",
    "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick",
    "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
    "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew",
    "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender",
    "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral",
    "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink",
    "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
    "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta",
    "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
    "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
    "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",
    "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered",
    "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
    "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue",
    "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon",
    "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue",
    "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan",
    "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white",
    "whitesmoke", "yellow", "yellowgreen"
  ], colorKeywords = keySet(colorKeywords_);

  var valueKeywords_ = [
    "above", "absolute", "activeborder", "activecaption", "afar",
    "after-white-space", "ahead", "alias", "all", "all-scroll", "alternate",
    "always", "amharic", "amharic-abegede", "antialiased", "appworkspace",
    "arabic-indic", "armenian", "asterisks", "auto", "avoid", "avoid-column", "avoid-page",
    "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary",
    "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box",
    "both", "bottom", "break", "break-all", "break-word", "button", "button-bevel",
    "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "cambodian",
    "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret",
    "cell", "center", "checkbox", "circle", "cjk-earthly-branch",
    "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote",
    "col-resize", "collapse", "column", "compact", "condensed", "contain", "content",
    "content-box", "context-menu", "continuous", "copy", "cover", "crop",
    "cross", "crosshair", "currentcolor", "cursive", "dashed", "decimal",
    "decimal-leading-zero", "default", "default-button", "destination-atop",
    "destination-in", "destination-out", "destination-over", "devanagari",
    "disc", "discard", "document", "dot-dash", "dot-dot-dash", "dotted",
    "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out",
    "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede",
    "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er",
    "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er",
    "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et",
    "ethiopic-halehame-gez", "ethiopic-halehame-om-et",
    "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et",
    "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et",
    "ethiopic-halehame-tig", "ew-resize", "expanded", "extra-condensed",
    "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "footnotes",
    "forwards", "from", "geometricPrecision", "georgian", "graytext", "groove",
    "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hebrew",
    "help", "hidden", "hide", "higher", "highlight", "highlighttext",
    "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "icon", "ignore",
    "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite",
    "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis",
    "inline-block", "inline-table", "inset", "inside", "intrinsic", "invert",
    "italic", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer",
    "landscape", "lao", "large", "larger", "left", "level", "lighter",
    "line-through", "linear", "lines", "list-item", "listbox", "listitem",
    "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian",
    "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian",
    "lower-roman", "lowercase", "ltr", "malayalam", "match",
    "media-controls-background", "media-current-time-display",
    "media-fullscreen-button", "media-mute-button", "media-play-button",
    "media-return-to-realtime-button", "media-rewind-button",
    "media-seek-back-button", "media-seek-forward-button", "media-slider",
    "media-sliderthumb", "media-time-remaining-display", "media-volume-slider",
    "media-volume-slider-container", "media-volume-sliderthumb", "medium",
    "menu", "menulist", "menulist-button", "menulist-text",
    "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic",
    "mix", "mongolian", "monospace", "move", "multiple", "myanmar", "n-resize",
    "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop",
    "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap",
    "ns-resize", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote",
    "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset",
    "outside", "outside-shape", "overlay", "overline", "padding", "padding-box",
    "painted", "page", "paused", "persian", "plus-darker", "plus-lighter", "pointer",
    "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button",
    "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region",
    "relative", "repeat", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba",
    "ridge", "right", "round", "row-resize", "rtl", "run-in", "running",
    "s-resize", "sans-serif", "scroll", "scrollbar", "se-resize", "searchfield",
    "searchfield-cancel-button", "searchfield-decoration",
    "searchfield-results-button", "searchfield-results-decoration",
    "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama",
    "single", "skip-white-space", "slide", "slider-horizontal",
    "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow",
    "small", "small-caps", "small-caption", "smaller", "solid", "somali",
    "source-atop", "source-in", "source-out", "source-over", "space", "square",
    "square-button", "start", "static", "status-bar", "stretch", "stroke",
    "sub", "subpixel-antialiased", "super", "sw-resize", "table",
    "table-caption", "table-cell", "table-column", "table-column-group",
    "table-footer-group", "table-header-group", "table-row", "table-row-group",
    "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai",
    "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight",
    "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er",
    "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top",
    "transparent", "ultra-condensed", "ultra-expanded", "underline", "up",
    "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal",
    "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url",
    "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted",
    "visibleStroke", "visual", "w-resize", "wait", "wave", "wider",
    "window", "windowframe", "windowtext", "x-large", "x-small", "xor",
    "xx-large", "xx-small"
  ], valueKeywords = keySet(valueKeywords_);

  var fontProperties_ = [
    "font-family", "src", "unicode-range", "font-variant", "font-feature-settings",
    "font-stretch", "font-weight", "font-style"
  ], fontProperties = keySet(fontProperties_);

  var allWords = mediaTypes_.concat(mediaFeatures_).concat(propertyKeywords_)
    .concat(nonStandardPropertyKeywords).concat(colorKeywords_).concat(valueKeywords_);
  CodeMirror.registerHelper("hintWords", "css", allWords);

  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = null;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ["comment", "comment"];
  }

  function tokenSGMLComment(stream, state) {
    if (stream.skipTo("-->")) {
      stream.match("-->");
      state.tokenize = null;
    } else {
      stream.skipToEnd();
    }
    return ["comment", "comment"];
  }

  CodeMirror.defineMIME("text/css", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    tokenHooks: {
      "<": function(stream, state) {
        if (!stream.match("!--")) return false;
        state.tokenize = tokenSGMLComment;
        return tokenSGMLComment(stream, state);
      },
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css"
  });

  CodeMirror.defineMIME("text/x-scss", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      ":": function(stream) {
        if (stream.match(/\s*{/))
          return [null, "{"];
        return false;
      },
      "$": function(stream) {
        stream.match(/^[\w-]+/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "#": function(stream) {
        if (!stream.eat("{")) return false;
        return [null, "interpolation"];
      }
    },
    name: "css",
    helperType: "scss"
  });

  CodeMirror.defineMIME("text/x-less", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      "@": function(stream) {
        if (stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, false)) return false;
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "&": function() {
        return ["atom", "atom"];
      }
    },
    name: "css",
    helperType: "less"
  });

});

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("xml", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var multilineTagIndentFactor = parserConfig.multilineTagIndentFactor || 1;
  var multilineTagIndentPastTag = parserConfig.multilineTagIndentPastTag;
  if (multilineTagIndentPastTag == null) multilineTagIndentPastTag = true;

  var Kludges = parserConfig.htmlMode ? {
    autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
                      'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
                      'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
                      'track': true, 'wbr': true},
    implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
                       'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
                       'th': true, 'tr': true},
    contextGrabbers: {
      'dd': {'dd': true, 'dt': true},
      'dt': {'dd': true, 'dt': true},
      'li': {'li': true},
      'option': {'option': true, 'optgroup': true},
      'optgroup': {'optgroup': true},
      'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
            'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
            'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
            'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
            'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
      'rp': {'rp': true, 'rt': true},
      'rt': {'rp': true, 'rt': true},
      'tbody': {'tbody': true, 'tfoot': true},
      'td': {'td': true, 'th': true},
      'tfoot': {'tbody': true},
      'th': {'td': true, 'th': true},
      'thead': {'tbody': true, 'tfoot': true},
      'tr': {'tr': true}
    },
    doNotIndent: {"pre": true},
    allowUnquoted: true,
    allowMissing: true,
    caseFold: true
  } : {
    autoSelfClosers: {},
    implicitlyClosed: {},
    contextGrabbers: {},
    doNotIndent: {},
    allowUnquoted: false,
    allowMissing: false,
    caseFold: false
  };
  var alignCDATA = parserConfig.alignCDATA;

  // Return variables for tokenizers
  var type, setStyle;

  function inText(stream, state) {
    function chain(parser) {
      state.tokenize = parser;
      return parser(stream, state);
    }

    var ch = stream.next();
    if (ch == "<") {
      if (stream.eat("!")) {
        if (stream.eat("[")) {
          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
          else return null;
        } else if (stream.match("--")) {
          return chain(inBlock("comment", "-->"));
        } else if (stream.match("DOCTYPE", true, true)) {
          stream.eatWhile(/[\w\._\-]/);
          return chain(doctype(1));
        } else {
          return null;
        }
      } else if (stream.eat("?")) {
        stream.eatWhile(/[\w\._\-]/);
        state.tokenize = inBlock("meta", "?>");
        return "meta";
      } else {
        type = stream.eat("/") ? "closeTag" : "openTag";
        state.tokenize = inTag;
        return "tag bracket";
      }
    } else if (ch == "&") {
      var ok;
      if (stream.eat("#")) {
        if (stream.eat("x")) {
          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
        } else {
          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
        }
      } else {
        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
      }
      return ok ? "atom" : "error";
    } else {
      stream.eatWhile(/[^&<]/);
      return null;
    }
  }

  function inTag(stream, state) {
    var ch = stream.next();
    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
      state.tokenize = inText;
      type = ch == ">" ? "endTag" : "selfcloseTag";
      return "tag bracket";
    } else if (ch == "=") {
      type = "equals";
      return null;
    } else if (ch == "<") {
      state.tokenize = inText;
      state.state = baseState;
      state.tagName = state.tagStart = null;
      var next = state.tokenize(stream, state);
      return next ? next + " error" : "error";
    } else if (/[\'\"]/.test(ch)) {
      state.tokenize = inAttribute(ch);
      state.stringStartCol = stream.column();
      return state.tokenize(stream, state);
    } else {
      stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
      return "word";
    }
  }

  function inAttribute(quote) {
    var closure = function(stream, state) {
      while (!stream.eol()) {
        if (stream.next() == quote) {
          state.tokenize = inTag;
          break;
        }
      }
      return "string";
    };
    closure.isInAttribute = true;
    return closure;
  }

  function inBlock(style, terminator) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.match(terminator)) {
          state.tokenize = inText;
          break;
        }
        stream.next();
      }
      return style;
    };
  }
  function doctype(depth) {
    return function(stream, state) {
      var ch;
      while ((ch = stream.next()) != null) {
        if (ch == "<") {
          state.tokenize = doctype(depth + 1);
          return state.tokenize(stream, state);
        } else if (ch == ">") {
          if (depth == 1) {
            state.tokenize = inText;
            break;
          } else {
            state.tokenize = doctype(depth - 1);
            return state.tokenize(stream, state);
          }
        }
      }
      return "meta";
    };
  }

  function Context(state, tagName, startOfLine) {
    this.prev = state.context;
    this.tagName = tagName;
    this.indent = state.indented;
    this.startOfLine = startOfLine;
    if (Kludges.doNotIndent.hasOwnProperty(tagName) || (state.context && state.context.noIndent))
      this.noIndent = true;
  }
  function popContext(state) {
    if (state.context) state.context = state.context.prev;
  }
  function maybePopContext(state, nextTagName) {
    var parentTagName;
    while (true) {
      if (!state.context) {
        return;
      }
      parentTagName = state.context.tagName;
      if (!Kludges.contextGrabbers.hasOwnProperty(parentTagName) ||
          !Kludges.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
        return;
      }
      popContext(state);
    }
  }

  function baseState(type, stream, state) {
    if (type == "openTag") {
      state.tagStart = stream.column();
      return tagNameState;
    } else if (type == "closeTag") {
      return closeTagNameState;
    } else {
      return baseState;
    }
  }
  function tagNameState(type, stream, state) {
    if (type == "word") {
      state.tagName = stream.current();
      setStyle = "tag";
      return attrState;
    } else {
      setStyle = "error";
      return tagNameState;
    }
  }
  function closeTagNameState(type, stream, state) {
    if (type == "word") {
      var tagName = stream.current();
      if (state.context && state.context.tagName != tagName &&
          Kludges.implicitlyClosed.hasOwnProperty(state.context.tagName))
        popContext(state);
      if (state.context && state.context.tagName == tagName) {
        setStyle = "tag";
        return closeState;
      } else {
        setStyle = "tag error";
        return closeStateErr;
      }
    } else {
      setStyle = "error";
      return closeStateErr;
    }
  }

  function closeState(type, _stream, state) {
    if (type != "endTag") {
      setStyle = "error";
      return closeState;
    }
    popContext(state);
    return baseState;
  }
  function closeStateErr(type, stream, state) {
    setStyle = "error";
    return closeState(type, stream, state);
  }

  function attrState(type, _stream, state) {
    if (type == "word") {
      setStyle = "attribute";
      return attrEqState;
    } else if (type == "endTag" || type == "selfcloseTag") {
      var tagName = state.tagName, tagStart = state.tagStart;
      state.tagName = state.tagStart = null;
      if (type == "selfcloseTag" ||
          Kludges.autoSelfClosers.hasOwnProperty(tagName)) {
        maybePopContext(state, tagName);
      } else {
        maybePopContext(state, tagName);
        state.context = new Context(state, tagName, tagStart == state.indented);
      }
      return baseState;
    }
    setStyle = "error";
    return attrState;
  }
  function attrEqState(type, stream, state) {
    if (type == "equals") return attrValueState;
    if (!Kludges.allowMissing) setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrValueState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    if (type == "word" && Kludges.allowUnquoted) {setStyle = "string"; return attrState;}
    setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrContinuedState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    return attrState(type, stream, state);
  }

  return {
    startState: function() {
      return {tokenize: inText,
              state: baseState,
              indented: 0,
              tagName: null, tagStart: null,
              context: null};
    },

    token: function(stream, state) {
      if (!state.tagName && stream.sol())
        state.indented = stream.indentation();

      if (stream.eatSpace()) return null;
      type = null;
      var style = state.tokenize(stream, state);
      if ((style || type) && style != "comment") {
        setStyle = null;
        state.state = state.state(type || style, stream, state);
        if (setStyle)
          style = setStyle == "error" ? style + " error" : setStyle;
      }
      return style;
    },

    indent: function(state, textAfter, fullLine) {
      var context = state.context;
      // Indent multi-line strings (e.g. css).
      if (state.tokenize.isInAttribute) {
        if (state.tagStart == state.indented)
          return state.stringStartCol + 1;
        else
          return state.indented + indentUnit;
      }
      if (context && context.noIndent) return CodeMirror.Pass;
      if (state.tokenize != inTag && state.tokenize != inText)
        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
      // Indent the starts of attribute names.
      if (state.tagName) {
        if (multilineTagIndentPastTag)
          return state.tagStart + state.tagName.length + 2;
        else
          return state.tagStart + indentUnit * multilineTagIndentFactor;
      }
      if (alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
      var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
      if (tagAfter && tagAfter[1]) { // Closing tag spotted
        while (context) {
          if (context.tagName == tagAfter[2]) {
            context = context.prev;
            break;
          } else if (Kludges.implicitlyClosed.hasOwnProperty(context.tagName)) {
            context = context.prev;
          } else {
            break;
          }
        }
      } else if (tagAfter) { // Opening tag spotted
        while (context) {
          var grabbers = Kludges.contextGrabbers[context.tagName];
          if (grabbers && grabbers.hasOwnProperty(tagAfter[2]))
            context = context.prev;
          else
            break;
        }
      }
      while (context && !context.startOfLine)
        context = context.prev;
      if (context) return context.indent + indentUnit;
      else return 0;
    },

    electricInput: /<\/[\s\w:]+>$/,
    blockCommentStart: "<!--",
    blockCommentEnd: "-->",

    configuration: parserConfig.htmlMode ? "html" : "xml",
    helperType: parserConfig.htmlMode ? "html" : "xml"
  };
});

CodeMirror.defineMIME("text/xml", "xml");
CodeMirror.defineMIME("application/xml", "xml");
if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

});

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("htmlmixed", function(config, parserConfig) {
  var htmlMode = CodeMirror.getMode(config, {name: "xml",
                                             htmlMode: true,
                                             multilineTagIndentFactor: parserConfig.multilineTagIndentFactor,
                                             multilineTagIndentPastTag: parserConfig.multilineTagIndentPastTag});
  var cssMode = CodeMirror.getMode(config, "css");

  var scriptTypes = [], scriptTypesConf = parserConfig && parserConfig.scriptTypes;
  scriptTypes.push({matches: /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i,
                    mode: CodeMirror.getMode(config, "javascript")});
  if (scriptTypesConf) for (var i = 0; i < scriptTypesConf.length; ++i) {
    var conf = scriptTypesConf[i];
    scriptTypes.push({matches: conf.matches, mode: conf.mode && CodeMirror.getMode(config, conf.mode)});
  }
  scriptTypes.push({matches: /./,
                    mode: CodeMirror.getMode(config, "text/plain")});

  function html(stream, state) {
    var tagName = state.htmlState.tagName;
    var style = htmlMode.token(stream, state.htmlState);
    if (tagName == "script" && /\btag\b/.test(style) && stream.current() == ">") {
      // Script block: mode to change to depends on type attribute
      var scriptType = stream.string.slice(Math.max(0, stream.pos - 100), stream.pos).match(/\btype\s*=\s*("[^"]+"|'[^']+'|\S+)[^<]*$/i);
      scriptType = scriptType ? scriptType[1] : "";
      if (scriptType && /[\"\']/.test(scriptType.charAt(0))) scriptType = scriptType.slice(1, scriptType.length - 1);
      for (var i = 0; i < scriptTypes.length; ++i) {
        var tp = scriptTypes[i];
        if (typeof tp.matches == "string" ? scriptType == tp.matches : tp.matches.test(scriptType)) {
          if (tp.mode) {
            state.token = script;
            state.localMode = tp.mode;
            state.localState = tp.mode.startState && tp.mode.startState(htmlMode.indent(state.htmlState, ""));
          }
          break;
        }
      }
    } else if (tagName == "style" && /\btag\b/.test(style) && stream.current() == ">") {
      state.token = css;
      state.localMode = cssMode;
      state.localState = cssMode.startState(htmlMode.indent(state.htmlState, ""));
    }
    return style;
  }
  function maybeBackup(stream, pat, style) {
    var cur = stream.current();
    var close = cur.search(pat), m;
    if (close > -1) stream.backUp(cur.length - close);
    else if (m = cur.match(/<\/?$/)) {
      stream.backUp(cur.length);
      if (!stream.match(pat, false)) stream.match(cur);
    }
    return style;
  }
  function script(stream, state) {
    if (stream.match(/^<\/\s*script\s*>/i, false)) {
      state.token = html;
      state.localState = state.localMode = null;
      return html(stream, state);
    }
    return maybeBackup(stream, /<\/\s*script\s*>/,
                       state.localMode.token(stream, state.localState));
  }
  function css(stream, state) {
    if (stream.match(/^<\/\s*style\s*>/i, false)) {
      state.token = html;
      state.localState = state.localMode = null;
      return html(stream, state);
    }
    return maybeBackup(stream, /<\/\s*style\s*>/,
                       cssMode.token(stream, state.localState));
  }

  return {
    startState: function() {
      var state = htmlMode.startState();
      return {token: html, localMode: null, localState: null, htmlState: state};
    },

    copyState: function(state) {
      if (state.localState)
        var local = CodeMirror.copyState(state.localMode, state.localState);
      return {token: state.token, localMode: state.localMode, localState: local,
              htmlState: CodeMirror.copyState(htmlMode, state.htmlState)};
    },

    token: function(stream, state) {
      return state.token(stream, state);
    },

    indent: function(state, textAfter) {
      if (!state.localMode || /^\s*<\//.test(textAfter))
        return htmlMode.indent(state.htmlState, textAfter);
      else if (state.localMode.indent)
        return state.localMode.indent(state.localState, textAfter);
      else
        return CodeMirror.Pass;
    },

    innerMode: function(state) {
      return {state: state.localState || state.htmlState, mode: state.localMode || htmlMode};
    }
  };
}, "xml", "javascript", "css");

CodeMirror.defineMIME("text/html", "htmlmixed");

});
