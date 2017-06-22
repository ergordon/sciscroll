// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

	var
	stage = $("#container"), //sets stage
	intro = $("#intro"),
	conclusion = $("#conclusion"), 
	width = $(window).width(), //find page width
	center = width/2,
	middle = height/2,
	height = $(window).height(),
	r = Raphael("scrollStory","100%","100%"), //sets raphael canvas
	playLength = 10000, //full length of page
	currentStep = 0, //start at 0

	

	/*
	*	Font Attributes
	*/
	comonTextAttr2 = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 300,"fill":"#fff","font-size":25,"text-anchor": "start"};
	comonTextAttrTitle = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 500,"fill":"#fff","font-size":50,"line-height": 50,"text-anchor": "start", "text-align": "center"};
	comonTextAttr2B = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 300,"fill":"#000","font-size":25,"text-anchor": "start"};
	
	guids = drawGuids(r, center, height); //draw guides on raphael canvas using center as x and height as y. 

	/*
	*	Declare Objects
	*/
	var obj ={  
		nursery: r.image().attr({
			"width": 1500, //fixed width of image 3072 × 2104
			"height": 800, //fixed height of image
			"src": homepageImg+"nursery.gif", //source of image
		}),
		text1: r.text().attr(comonTextAttrTitle).attr({
			text:"Every star you see twinkling in the night sky\nis a luminous sphere of super heated gas, \nhundreds of times the size of our planet.",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0	
		}),
		text2: r.text().attr(comonTextAttrTitle).attr({
			text:"The fundamental cosmic unit, a star, is what \ngives the universe ligh and planets like Earth, \nthe energy to sustain life.",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0	
		}),
		text3: r.text().attr(comonTextAttrTitle).attr({
			text:"Each star, including the Sun, may seem like a \npermanent part of the sky but the reality \nis quite harsh.",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0	
		}),
		pixle: r.image().attr({
			opacity: 0,
			"width": 2000,
			"height": 2000,
			"src": homepageImg+"pixle.png",
		}),
		text4: r.text().attr(comonTextAttrTitle).attr({
			text:"Every star, though old and wise, \nfades from the night sky.",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0	
		}),
		text5: r.text().attr(comonTextAttrTitle).attr({
			text:"It is the circle of a stars life. A part of...",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0	
		}),
	};

	makeAnim(obj, center,height);
	//new stuff
	
	stage.css("height", playLength+height*5);

	/* 
	*	Handle animation 
	*/
	function stepTo(step) {
		var pos, start, dest;
	    //$( window ).scrollTop( 0 ).scrollLeft( 0 );
	    start = 2*height;
	    dest = start*2;
	   		pos = limitWithin((step/dest)*-dest, -dest, 0);
	   		intro.css("top", pos);

		//run animations
		$.each(obj, function (i,val) {
			stepAnim(val, step);
		});
		//console.log(step-dest-150);
		dest = height+10;
		pos = limitWithin(dest - (((step-(start+playLength))/dest)*(dest))/2, 0, dest);
		conclusion.css("top", pos);
		//console.log(dest, pos);
		//console.log(step);
	}

	/*
	*	Handles Dynamic Screen Size
	*/
	$(window).resize(function(){
		console.log(width, center, height);
		console.log(height);
		width = $(window).width();
		height = $(window).height();
		center = width/2;
		//console.log(width, center, height);

		obj = updateGuids(obj,center,height);
			  makeAnim(obj, center,height);
			  stepTo(currentStep);
	});

	$('html').niceScroll();
	$(document).scroll(function(){
		var docScroll = $(document).scrollTop();
		stepTo(docScroll);
	});
});

function setAnim(el,anims,start,end){
	var anim, obj = {};
	$.each(anims, function(i, val){
		obj[(i/end)*100] = val;
	});
	el.start = start;
	el.end = end;
	el.a = Raphael.animation(obj,end);
	//console.log(el.a);
}

function stepAnim(el, step){
	//console.log("el",el.end, step, el.start);
	el.status(el.a, limitWithin(step-el.start,0.001,el.end)/el.end);
}

/* 
*	Limits a given value between a lower and upper limit 
*/
function limitWithin( value, lowerLimit, upperLimit ) {
	if ( value > upperLimit ) {
		return upperLimit;
	} else if ( value < lowerLimit ) {
		return lowerLimit;
	}
	return value;
}

function drawGuids(r, center, height) {
	var paths = makePath(center,height);

	var obj ={};
	$.each(paths, function(i,val){
		obj[i] = r.path(val).hide();//hides path, remove.hide() for testing (it allows you to see paths.)
	});

	return obj
}

function updateGuids(obj, center, height) {

	var paths = makePath(center,height);

	$.each(obj, function(i,val){
		if(val.attr("guide")){
			val.attr("guide").attr("path",paths[i]);
			//val.attr("along", val.attr("along"));
		}
	});

	return obj
}

function makePath(center,height){

	/*
	*	Lesson on SVG Paths:
	*
	*	M-Moveto: Think about it like teleporting from point A to point B.
	*	L-Lineto: Think about it like driving a car from A to B. The distance must be covered
	*	C-Curveto: You move in a path like a lineto but it is curved.
	*/

	var 
	middle = height/2,
	bottom = height+50,
	obj ={  
		
	};

	return obj
}

function makeAnim(obj, center,height){

	var start = 2*height - 150, 
		end = 3000, 
		middle = height/2,
		bottom = height+50,
		x, 
		y;

	
    setAnim(obj.nursery,{
		0:{opacity:0, transform:"T "+(center-700)+" "+(middle-450)},
		1:{opacity: 0},
		6400:{opacity:1,transform:"T "+(center-700)+" "+(middle-450)},
		18000:{opacity:1,transform:"T "+(center-700)+" "+(middle-450)},
		19000:{opacity:0,transform:"T "+(center-700)+" "+(middle-450)}
	},start+5000, 9000);
	setAnim(obj.text1,{
    	0:{opacity:1,transform:"T "+(center-500)+" "+(middle+450)},
    	1:{transform:"T "+(center-500)+" "+(middle-650)}
    }, start-1000, 2000);
    setAnim(obj.text2,{
    	0:{opacity:1,transform:"T "+(center-500)+" "+(middle+450)},
    	1:{transform:"T "+(center-500)+" "+(middle-650)}
    }, start-250, 2000);
    setAnim(obj.text3,{
    	0:{opacity:1,transform:"T "+(center-500)+" "+(middle+450)},
    	1:{transform:"T "+(center-500)+" "+(middle-650)}
    }, start+500, 2000);
    setAnim(obj.pixle,{
    	0:{opacity:0, transform:"T "+(center-800)+" "+(middle-400)},
		6400:{opacity:1},
		8000:{opacity:1},
		9000:{opacity:1}
    }, start+1250, 1000);
    setAnim(obj.text4,{
    	0:{opacity:1,transform:"T "+(center-500)+" "+(middle+450)},
    	1:{transform:"T "+(center-500)+" "+(middle-650)}
    }, start+2000, 2000);
    setAnim(obj.text5,{
    	0:{opacity:1,transform:"T "+(center-500)+" "+(middle+450)},
    	1:{transform:"T "+(center-500)+" "+(middle-650)}
    }, start+2750, 2000);
}

//automatic scrolling
var scrollSetting = false,
	scrollSpeed = 10;

function pageScroll() 
{
	scrollSetting = true;
	console.log(scrollSetting);
}
function stopPageScroll()
{
	scrollSetting = false;
	console.log(scrollSetting);
}
function pageScrollSetting()
{
	if(scrollSetting==true)
	{
		window.scrollBy(0,scrollSpeed);
		scrollDelay = setTimeout('pageScrollSetting()',50);
	}
	if(scrollSetting==false)
	{
		window.scrollBy(0,0);
		scrollDelay = setTimeout('pageScrollSetting',0);
		
	}
}
function pageScrollPlus()
{
	if(scrollSpeed <=100)
	{
	scrollSpeed = scrollSpeed+10;
	console.log(scrollSpeed);
}
}
function pageScrollMinus()
{
	if(scrollSpeed > 0)
	{
	scrollSpeed = scrollSpeed-10;
	console.log(scrollSpeed);
}
}
//

	