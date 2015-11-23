window.onload = function(){

var jianpan = document.getElementById('jianpan');
var anniu   = document.getElementsByClassName('anniu');
var jishi   = document.getElementById('jishi');
var description = document.getElementById('description');
var desc = document.getElementById('desc');
var start = document.getElementById('start');
var time = 0,timerId,kaiguan = false;

for( var i = 0;i<anniu.length;i++){
	var s =Math.floor(Math.random()*122);
	while( s < 65 || ( s > 90 && s < 97 ) ){
		s = Math.floor(Math.random()*122);
	}
	anniu[i].innerHTML=String.fromCharCode(s);
}

document.onkeydown = function(e){
var top = jianpan.firstElementChild;
	if(e.shiftKey){
		if(e.keyCode != top.innerHTML.charCodeAt(0))
		   return;
	}else{
		if(e.keyCode +32 != top.innerHTML.charCodeAt(0))
		   return;
	}
	if(!kaiguan){
	    var jishiqi = function(){
	       jishi.innerHTML = time++;
	    };
        timerId = setInterval(jishiqi,1000);
        kaiguan = true;
    }
	jianpan.removeChild(top);
	if(jianpan.children.length == 0){
		location.reload();
		clearInterval(timerId);
		alert(time);
	}
};
description.onmousedown = function(){
   desc.style.display = 'block';
};
description.onmouseout= function(){
   desc.style.display = 'none';
};
start.onclick = function(){
	jianpan.style.display='block';
};


};