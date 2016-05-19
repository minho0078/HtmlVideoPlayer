var vp = "";
var vs_video = function(){
                  this.speedUp = function(obj){
                     vp = document.getElementById(obj);
                     vp.playbackRate += 0.5;
                  }
                  ,this.speedDown = function(obj){
                     vp = document.getElementById(obj);
                     vp.playbackRate -= 0.5;
                  }
                  ,this.volumeUp = function(obj){
                     vp = document.getElementById(obj);
                     if(vp.volume < 1){
                        vp.volume += 0.1;
                     }
                  }
                  ,this.volumeDown = function(obj){
                     vp = document.getElementById(obj);
                     if(vp.volume >0){
                        vp.volume -= 0.1;
                     }
                  }
               }

// 자막 DIV 위치 세팅~
var oSelf = $('.sub');
var oSelfArray = oSelf.attr('id').split("_");
var oBoss = $('#'+oSelfArray[0]);

var selfId = oSelf.attr('id');
var subDiv = $('#'+selfId);

subDiv.css(
   {  'width': oBoss.css('width')   }
);

subDiv.position().top = oBoss.position().top;

var vPosition = getAbsolutePos(document.getElementById(oSelfArray[0]));
var sPosition = getAbsolutePos(document.getElementById(oSelf.attr('id')));

var new_sPostion_y = vPosition.x + parseInt(oBoss.css('height').replace("px","")) - parseInt(oSelf.css('height').replace("px",""));

subDiv.offset({top: new_sPostion_y-40});

function getAbsolutePos(obj) {
	var position = new Object;
	position.x = 0;
	position.y = 0;
	if( obj ) {
		position.x = obj.offsetLeft + obj.clientLeft;
		position.y = obj.offsetTop + obj.clientTop;
		if( obj.offsetParent ) {
			var parentpos = getAbsolutePos(obj.offsetParent);
			position.x += parentpos.x;
			position.y += parentpos.y;
		}
	}
	return position;
}


/* 자막 기능 */
var subClearTime = 0;
var ov = document.getElementById(oSelfArray[0]);

ov.onplay = function() {
   setInterval(function(){

         var sTime = (ov.currentTime).toFixed(1);

         if(subClearTime == sTime){
            subDiv.html("");
         }
         //console.log(sub[sTime]);

         if(sub[sTime] != undefined){

            subClearTime = (sub[sTime])[0];

            subDiv.html(sub[sTime][1]);
         }

   },100);
};
