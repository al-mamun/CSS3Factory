(function(){this.css3factory.directive("slider",function(){return{restrict:"E",template:'<div class="swatch-slider"></div>\n<input\n  type="text"\n  class="position-input"\n  ng-model="activeSwatch.position"\n  maxlength="3"\n>',controller:function(i){return i.positionUpdate=function(t,n){return n.value!==Number(i.activeSwatch.position)?(i.activeSwatch.position=n.value,i.$apply()):void 0}},link:function(i,t){return t.find(".swatch-slider").slider({max:100,range:"min",change:i.positionUpdate,slide:i.positionUpdate}),i.$watch("activeSwatch.position",function(i){return t.find(".swatch-slider").slider("option","value",i)}),t.on("focus",".position-input",function(){return t.find(".swatch-slider").addClass("transition")}),t.on("blur",".position-input",function(){return t.find(".swatch-slider").removeClass("transition")})}}})}).call(this);