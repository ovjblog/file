(function($,undefined){var POPON='pop-on';var ROLLUP='roll-up';var ROLLUP_LENGTH=3;var defaults={captionSize:4,captionStyle:{'background-color':"rgba(255,0,0,0.8)",'color':'white','padding':"3px"},onCaptionChange:function(index){},captionType:POPON};function isWithinCursor(time,cursor){if(time>cursor.endTime){return 1;}else if(time<cursor.startTime){return-1;}else{return 0;}}
function applyCaptionStyle(captionOverlay,cursor){captionOverlay.removeClass("position-HB position-HT position-VR position-VL align-C align-L");if(!cursor.position){captionOverlay.addClass("position-HB");}else{captionOverlay.addClass("position-"+ cursor.position);}
if(!cursor.alignment){captionOverlay.addClass("align-C");}else{captionOverlay.addClass("align-"+ cursor.alignment);}}
function convertRubyTags(text){var regex=/<R.+?value=[\"'](.+?)[\"']>(.+?)<\/R>/ig;while(m=regex.exec(text)){text=text.replace(m[0],"<ruby>"+ m[2]+"<rt>"+ m[1]+"</rt></ruby>");}
return text;}
function applyGroupTagStyle(text){var regex=/<G>(.+?)<\/G>/ig;while(m=regex.exec(text)){text=text.replace(m[0],"<G class='group-tags'>"+ m[1]+"</G>");}
return text;}
function registerCaptionPlugin(options){var noCaption,cursorID;var captionOverlays,numDisplayCaption;var captions=options.data,setting=$.extend(true,{},defaults,options.setting),videoWrapper=$(this.el()),player=this;function initialize(){captionOverlays=[];numDisplayCaption=0;addCaptionOverlay();noCaption=false;cursorID=searchCaption(0);if(setting.captionType===ROLLUP){applyCaptionStyle(captionOverlays[0],{position:'HB',alignment:'C'});captionOverlays[0].empty();}
if(!noCaption){updateCaptionText();}else{updateCaptionOverlay(0,true);}
player.on("timeupdate",function(){ct=this.currentTime()*1000;updateCaptionCursor(ct);});}
function hideCaption(){for(var i=0;i<numDisplayCaption;i++){updateCaptionOverlay(i,true);}}
function updateCaptionCursor(currentTime){if(noCaption){cursorID=searchCaption(currentTime);if(noCaption){hideCaption();return;}
updateCaptionText();return;}
var cursor=captions[cursorID];if(isWithinCursor(currentTime,cursor)==0){}else{if(currentTime>cursor.endTime&&(currentTime- cursor.endTime)<500){cursorID++;if(cursorID>captions.length- 1){noCaption=true;}}else{cursorID=searchCaption(currentTime);}
if(noCaption){hideCaption();}else{updateCaptionText();}}}
function searchCaption(currentTime){var minIndex=0,maxIndex=captions.length- 1;var currentIndex,isWithin;while(minIndex<=maxIndex){currentIndex=Math.ceil((minIndex+ maxIndex)/ 2);
isWithin=isWithinCursor(currentTime,captions[currentIndex]);if(isWithin==1){minIndex=currentIndex+ 1;}else if(isWithin==-1){maxIndex=currentIndex- 1;}else{noCaption=false;while(currentIndex>0&&isWithinCursor(currentTime,captions[currentIndex- 1])==0){currentIndex--;}
return currentIndex;}}
noCaption=true;}
function updateCaptionText(){if(setting.captionType==POPON){updatePopOnCaptionText();}else if(setting.captionType==ROLLUP){updateRollUpCaptionText();}}
function updateRollUpCaptionText(){captionOverlays[0].css("visibility","visible");var cursor=captions[cursorID];if(captionOverlays[0].find('.vjs-caption-overlay-text').length>=ROLLUP_LENGTH){captionOverlays[0].find('.vjs-caption-overlay-text')[0].remove();}
var captionText=convertRubyTags(cursor.data);captionText=applyGroupTagStyle(captionText);var newOverlayText=$("<span class='vjs-caption-overlay-text'><span></span></span>").css(setting.captionStyle);newOverlayText.find('span').html(captionText).addClass('caption-font-size-'+ setting.captionSize);captionOverlays[0].append(newOverlayText);numDisplayCaption=1;setting.onCaptionChange(cursorID);}
function updateCaptionOverlay(index,hide){if(hide){captionOverlays[index].css("visibility","hidden");}else{captionOverlays[index].css("visibility","visible");}}
function updatePopOnCaptionText(){var numNewDisplayCaption=1;while(true){var cursor=captions[cursorID];if(!cursor.data){updateCaptionOverlay(numNewDisplayCaption- 1,true);}else{updateCaptionOverlay(numNewDisplayCaption- 1,false);}
applyCaptionStyle(captionOverlays[numNewDisplayCaption- 1],cursor);var captionText=convertRubyTags(cursor.data);captionText=applyGroupTagStyle(captionText);captionOverlays[numNewDisplayCaption- 1].find('.vjs-caption-overlay-text span').html(captionText);if((cursorID<captions.length- 1)&&(cursor.startTime!=captions[cursorID+ 1].startTime||cursor.endTime!=captions[cursorID+ 1].endTime)){break;}
numNewDisplayCaption++;cursorID++;if(numNewDisplayCaption>captionOverlays.length){addCaptionOverlay();}
if(cursorID>captions.length- 1){noCaption=true;break;}}
while(numDisplayCaption>numNewDisplayCaption){updateCaptionOverlay(numDisplayCaption- 1,true);numDisplayCaption--;}
numDisplayCaption=numNewDisplayCaption;setting.onCaptionChange(cursorID);}
function addCaptionOverlay(){var overlay=$("<div class='vjs-caption-overlay'><span class='vjs-caption-overlay-text'><span></span></span></div>")
overlay.find('.vjs-caption-overlay-text').css(setting.captionStyle);captionOverlays.push(overlay);videoWrapper.append(overlay);applyCaptionSize();}
function applyCaptionSize(){videoWrapper.find('.vjs-caption-overlay-text span').each(function(){$(this).removeClass().addClass('caption-font-size-'+ setting.captionSize);});}
player.caption={updateCaption:function(callback){cursorID=searchCaption(ct);updateCaptionText();if(callback)callback();},loadNewCaption:function(){player.pause().currentTime(0);captions=newCaption.data;cursorID=0;noCaption=false;updateCaptionText();},getRowCursorID:function(){return cursorID;},getCaptionData:function(){return captions;},increaseFontSize:function(){setting.captionSize=(setting.captionSize+ 1)%9;applyCaptionSize();},decreaseFontSize:function(){setting.captionSize--;if(setting.captionSize<0)setting.captionSize=8;applyCaptionSize();},changeToRollUp:function(){setting.captionType=ROLLUP;applyCaptionStyle(captionOverlays[0],{position:'HB',alignment:'C'});captionOverlays[0].empty();while(numDisplayCaption>1){captionOverlays[numDisplayCaption-1].css("visibility","hidden");numDisplayCaption--;}},changeToPopOn:function(){setting.captionType=POPON;var rollupOverlaysLength=captionOverlays[0].find('.vjs-caption-overlay-text').length;while(rollupOverlaysLength>1){captionOverlays[0].find('.vjs-caption-overlay-text')[0].remove();rollupOverlaysLength--;}}}
initialize();}
videojs.plugin('caption',registerCaptionPlugin);})(jQuery);
