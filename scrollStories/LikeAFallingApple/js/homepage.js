/*
*  Update Log:
*    -06/21/14: Project Begins: Set Up JS and HTML with Raphael 
*		-06/22/14: Added Objects and Created project Structure.
*		-06/23/14: Added Paths to Objects
*		-06/24/14: Attempting split animations
*		-06/26/14: Apple Orbits moon. Opacity function added. Scale Feature Added
*		-06/28/14: Page 12 of design notes. Space Time coninuum added. Working on changable image.
*		-07/06/14: Added Astronaut, black hole and created template for sucked in. Finished everything. Debugging from here on out
*/


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
	playLength = 119000, //full length of page
	currentStep = 0, //start at 0

	

	/*
	*	Font Attributes
	*/
	comonTextAttr2 = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 300,"fill":"#fff","font-size":25,"text-anchor": "start"};
	comonTextAttrTitle = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 500,"fill":"#fff","font-size":50,"line-height": 50,"text-anchor": "start"};
	comonTextAttrTop = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 100,"fill":"#fff","font-size":50,"text-anchor": "start"};
	comonTextAttrMiddle = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 300,"fill":"#fff","font-size":56,"text-anchor": "start"};
	comonTextAttrBold = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 500,"fill":"#fff","font-size":126,"line-height": 50,"text-anchor": "start"};
	comonTextAttrBold2 = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 500,"fill":"#fff","font-size":50,"line-height": 50,"text-anchor": "start"};
	comonTextAttrThe = {"font-family":"Roboto Condensed, sans-serif","font-weight": 50,"fill":"#fff","font-size":300,"text-anchor": "start"};
	comonTextAttrSpace = {"font-family":"Roboto Condensed, sans-serif","font-weight": 300,"fill":"#fff","font-size":120,"text-anchor": "start"};
	comonTextAttrTime = {"font-family":"Roboto Condensed, sans-serif","font-weight": 300,"fill":"#fff","font-size":161,"line-height": 50,"text-anchor": "start"};
	comonTextAttrContinuum = {"font-family":"Roboto Condensed, sans-serif","font-weight": 300,"fill":"#fff","font-size":170,"line-height": 50,"text-anchor": "start"};

	r.addGuides(); //add path trace feature
	guids = drawGuids(r, center, height); //draw guides on raphael canvas using center as x and height as y. 

	/*
	*	Declare Objects
	*/
	var obj ={  
		tree: r.image().attr({
			"width": 350, //fixed width of image
			"height": 1000, //fixed height of image
			"src": homepageImg+"tree2.gif", //source of image
			guide: guids["tree"], //which guide path to take
			along:0 //start at 0
		}),
		text1a: r.text().attr(comonTextAttrTitle).attr({
			text:"What Comes Up,",
			guide:guids["text1a"],
			along:0
		}),
		text1b: r.text().attr(comonTextAttrTitle).attr({
			text:"Must Come Down",
			guide:guids["text1b"],
			along:0
		}),
		text2a: r.text().attr(comonTextAttr2).attr({
			text:"Gravity is a force that acts on all matter in the Universe.",
			guide:guids["text2a"],
			along:0
		}),
		text2b: r.text().attr(comonTextAttr2).attr({
			text:"It is the same force that makes things fall.",
			guide:guids["text2b"],
			along:0
		}),
		apple: r.image().attr({
			"width": 27,
			"height": 24,
			"src": homepageImg+"apple.png",
			guide: guids["apple"],
			along:0
		}),
		apple2: r.image().attr({
			"width": 27,
			"height": 24,
			"src": homepageImg+"apple.png",
			guide: guids["apple2"],
			along:0,
			opacity:0
		}),
		newton: r.image().attr({
			"width": 293,
			"height": 418,
			"src": homepageImg+"earth.gif",
			transform:"T "+(center-370)+" "+(height+10)
	        //guide:guids["newton"],
	        //along:0
	    }),
		text3a: r.text().attr(comonTextAttr2).attr({
			text:"Newton was an amazing scientist. He made countless",
			guide:guids["text3a"],
			along:0
		}),
		text3b: r.text().attr(comonTextAttr2).attr({
			text:"discoveries and understood the universe more than",
			guide:guids["text3b"],
			along:0
		}),
		text3c: r.text().attr(comonTextAttr2).attr({
			text:"anyone ever could. He discovered the Laws of Motion,",
			guide:guids["text3c"],
			along:0
		}),
		text3d: r.text().attr(comonTextAttr2).attr({
			text:"Laws of Gravity, and Laws of Optics all before the age of 26!",
			guide:guids["text3d"],
			along:0
		}),

		text4a: r.text().attr(comonTextAttr2).attr({
			text:"When Newton was hit by that apple,",
			guide:guids["text4a"],
			along:0
		}),
		text4b: r.text().attr(comonTextAttr2).attr({
			text:"he didn't let it go. Instead, He wondered",
			guide:guids["text4b"],
			along:0
		}),
		text4c: r.text().attr(comonTextAttr2).attr({
			text:"if the same force that made the apple fall",
			guide:guids["text4c"],
			along:0
		}),
		text4d: r.text().attr(comonTextAttr2).attr({
			text:"was also what kept the moon around the earth.",
			guide:guids["text4d"],
			along:0
		}),
		moon: r.image().attr({
			"width": 420,
			"height": 420,
			"src": homepageImg+"moon.gif",
	        //transform:"T "+(center-370)+" "+(height+10)
	        guide:guids["moon"],
	        along:0
	    }),
	   	equationEarth: r.image().attr({
			"width": 500,
			"height": 280,
			"src": homepageImg+"equationEarth.gif",
	        //transform:"T "+(center-370)+" "+(height+10)
	        guide:guids["equationEarth"],
	        along:0
	    }),
	    text5a: r.text().attr(comonTextAttr2).attr({
			text:"The force attraction between two",
			guide:guids["text5a"],
			along:0
		}),
		text5b: r.text().attr(comonTextAttr2).attr({
			text:"objects depends only on the",
			guide:guids["text5b"],
			along:0
		}),
		text5c: r.text().attr(comonTextAttr2).attr({
			text:"mass of the objects and the",
			guide:guids["text5c"],
			along:0
		}),
		text5d: r.text().attr(comonTextAttr2).attr({
			text:"distance between them.",
			guide:guids["text5d"],
			along:0
		}),
		text6a: r.text().attr(comonTextAttrTitle).attr({
			text:"Bigger Objects",
			//guide:guids["text6a"],
			//along:0
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			
		}),
		text6b: r.text().attr(comonTextAttr2).attr({
			text:"Have stronger gravity",
			//guide:guids["text6b"],
			//along:0
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			
		}),
		text7a: r.text().attr(comonTextAttrTitle).attr({
			text:"Smaller Objects",
			//guide:guids["text7a"],
			//along:0
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			
		}),
		text7b: r.text().attr(comonTextAttr2).attr({
			text:"Have weaker gravity",
			//guide:guids["text7b"],
			//along:0
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
		}),
		text8a: r.text().attr(comonTextAttrTop).attr({
			text:"What’s truly remarkable",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			//guide:guids["text8a"],
			//along:0
		}),
		text8b: r.text().attr(comonTextAttrMiddle).attr({
			text:"is that the law is truly",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			//guide:guids["text8b"],
			//along:0
		}),
		text8c: r.text().attr(comonTextAttrBold).attr({
			text:"Universal",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			//guide:guids["text8c"],
			//along:0
		}),
		text9a: r.text().attr(comonTextAttrBold2).attr({
			text:"You can predict the movement of",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			//guide:guids["text9a"],
			//along:0
		}),
		text9Moon: r.text().attr(comonTextAttrBold2).attr({
			text:"moons.",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			//guide:guids["text9a"],
			//along:0
		}),
		text9Earth: r.text().attr(comonTextAttrBold2).attr({
			text:"planets.",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			//guide:guids["text9a"],
			//along:0
		}),
		text9Sun: r.text().attr(comonTextAttrBold2).attr({
			text:"stars.",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			//guide:guids["text9a"],
			//along:0
		}),
		text9Galaxy: r.text().attr(comonTextAttrBold2).attr({
			text:"galaxies!",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			//guide:guids["text9a"],
			//along:0
		}),
		text9Matter: r.text().attr(comonTextAttrBold2).attr({
			text:"anything with mass!",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			//guide:guids["text9a"],
			//along:0
		}),
		planet: r.image().attr({
			"width": 600,
			"height": 600,
			"src": homepageImg+"earthplanet.gif",
			opacity:0
	        //transform:"T "+(center-370)+" "+(height+10)
	    }),
	    stars: r.image().attr({
			"width": 800,
			"height": 800,
			"src": homepageImg+"sun.gif",
			opacity:0
	        //transform:"T "+(center-370)+" "+(height+10)
	    }),
	    galaxy: r.image().attr({
			"width": 1000,
			"height": 1000,
			"src": homepageImg+"galaxy.gif",
			opacity:0
	        //transform:"T "+(center-370)+" "+(height+10)
	    }),
	    astronaut: r.image().attr({
			"width": 266,
			"height": 289,
			"src": homepageImg+"astronaut.gif",
			opacity:0
	        //transform:"T "+(center-370)+" "+(height+10)
	    }),

	    text10a: r.text().attr(comonTextAttrThe).attr({
			text:"THE",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			//guide:guids["text9a"],
			//along:0
		}),
		text10b: r.text().attr(comonTextAttrSpace).attr({
			text:"SPACE",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			//guide:guids["text9a"],
			//along:0
		}),
		text10c: r.text().attr(comonTextAttrTime).attr({
			text:"TIME",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			//guide:guids["text9a"],
			//along:0
		}),
		text10d: r.text().attr(comonTextAttrContinuum).attr({
			text:"CONTINUUM",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			//guide:guids["text9a"],
			//along:0
		}),
		einstien: r.image().attr({
			"width": 246,
			"height": 375,
			"src": homepageImg+"einstien.gif",
			opacity:0
	        //transform:"T "+(center-370)+" "+(height+10)
	    }),
	    text11a: r.text().attr(comonTextAttr2).attr({
			text:"It may sound scary but it's really not",
			//guide:guids["text11a"],
			//along:0
			opacity:0
		}),
	    text12a: r.text().attr(comonTextAttr2).attr({
			text:"Einstein was another amazing scientist.",
			guide:guids["text12a"],
			along:0
		}),
		text12b: r.text().attr(comonTextAttr2).attr({
			text:"He too changed the way we look at the",
			guide:guids["text12b"],
			along:0
		}),
		text12c: r.text().attr(comonTextAttr2).attr({
			text:"universe. He is the father of relativity",
			guide:guids["text12c"],
			along:0
		}),
		text12d: r.text().attr(comonTextAttr2).attr({
			text:"and theorized the Space Time Continuum.",
			guide:guids["text12d"],
			along:0
		}),

		text13a: r.text().attr(comonTextAttr2).attr({
			text:"Imagine the Space-Time Continuum",
			opacity:0
		}),
		text13b: r.text().attr(comonTextAttr2).attr({
			text:"like a blanket, and anything on the blanket",
			opacity:0
		}),
		text13c: r.text().attr(comonTextAttr2).attr({
			text:"will cause it to bend and warp. The bigger",
			opacity:0
		}),
		text13d: r.text().attr(comonTextAttr2).attr({
			text:"something is, the more the blanket bends.",
			opacity:0
		}),
		grid: r.image().attr({
			"width": 400,
			"height": 400,
			"src": homepageImg+"grid.gif",
			opacity:0
	    }),
	    
	    text14a: r.text().attr(comonTextAttr2).attr({
			text:"Lets see what our apple does",
			opacity:0
		}),
		text14b: r.text().attr(comonTextAttr2).attr({
			text:"to the Space-Time Continuum.",
			opacity:0
		}),
		gravityApple: r.image().attr({
			"width": 720,
			"height": 720,
			"src": homepageImg+"gravityApple.gif",
			opacity:0
	        //transform:"T "+(center-370)+" "+(height+10)
	    }),
	    text15a: r.text().attr(comonTextAttr2).attr({
			text:"As you can see, the apple",
			opacity:0
		}),
		text15b: r.text().attr(comonTextAttr2).attr({
			text:"warps the space around it but",
			opacity:0
		}),
		text15c: r.text().attr(comonTextAttr2).attr({
			text:"not by much.",
			opacity:0
		}),
		text16a: r.text().attr(comonTextAttr2).attr({
			text:"Now, lets replace the apple with a star.",
			opacity:0
		}),
		gravitySun: r.image().attr({
			"width": 584,
			"height": 746,
			"src": homepageImg+"gravitySun.gif",
			opacity:0
	        //transform:"T "+(center-370)+" "+(height+10)
	    }),
	    text17a: r.text().attr(comonTextAttr2).attr({
			text:"As you can see, this star is much more ",
			opacity:0
		}),
		text17b: r.text().attr(comonTextAttr2).attr({
			text:"massive than the apple so it warps ",
			opacity:0
		}),
		text17c: r.text().attr(comonTextAttr2).attr({
			text:"space much much more.",
			opacity:0
		}),
		text18a: r.text().attr(comonTextAttr2).attr({
			text:"What if we kept adding more and more",
			opacity:0
		}),
		text18b: r.text().attr(comonTextAttr2).attr({
			text:"mass to the star but never changed its size?",
			opacity:0
		}),
		blackhole: r.image().attr({
			"width": 619,
			"height": 516,
			"src": homepageImg+"blackhole.jpg",
			opacity:0
	        //transform:"T "+(center-370)+" "+(height+10)
	    }),
	    text19a: r.text().attr(comonTextAttr2).attr({
			text:"When a lot of matter is compressed into such a compact",
			opacity:0
		}),
		text19b: r.text().attr(comonTextAttr2).attr({
			text:"space, we create a blackhole. The gravitational pull is so",
			opacity:0
		}),
		text19c: r.text().attr(comonTextAttr2).attr({
			text:"strong, not even light can escape. At this point, a black ",
			opacity:0
		}),
		text19d: r.text().attr(comonTextAttr2).attr({
			text:"hole attracts more and more objects making its ",
			opacity:0
		}),
		text19e: r.text().attr(comonTextAttr2).attr({
			text:"gravitational force even stronger.",
			opacity:0
		}),
		
		text20a: r.text().attr(comonTextAttr2).attr({
			text:"While some matter gets sucked in",
			opacity:0
		}),
		text21a: r.text().attr(comonTextAttr2).attr({
			text:"Most objects are lucky and get slingshot past the black hole",
			opacity:0
		}),
		asteroid1: r.image().attr({
			"width": 128,
			"height": 128,
			"src": homepageImg+"asteroid1.gif",
			opacity:0,
			guide:guids["asteroid1"],
			along:0,
	    }),
	    asteroid2: r.image().attr({
			"width": 128,
			"height": 128,
			"src": homepageImg+"asteroid2.gif",
			opacity:0,
			guide:guids["asteroid2"],
			along:0
	    }),
	    asteroid3: r.image().attr({
			"width": 128,
			"height": 128,
			"src": homepageImg+"asteroid3.gif",
			opacity:0,
			guide:guids["asteroid3"],
			along:0
	    }),
	    asteroid4: r.image().attr({
			"width": 128,
			"height": 128,
			"src": homepageImg+"asteroid4.gif",
			opacity:0,
			guide:guids["asteroid4"],
			along:0
	    }),
	    text22a: r.text().attr(comonTextAttrTop).attr({
			text:"Gravity can be observed from an apple",
			guide:guids["text22a"],
			along:0
		}),
		text22b: r.text().attr(comonTextAttrTop).attr({
			text:"falling down to the earth, to the movements",
			guide:guids["text22b"],
			along:0
		}),
		text22c: r.text().attr(comonTextAttrTop).attr({
			text:"within the cosmos. Gravity effects every day ",
			guide:guids["text22c"],
			along:0
		}),
		text22d: r.text().attr(comonTextAttrTop).attr({
			text:"matter but believe it or not, despite its immense ",
			guide:guids["text22d"],
			along:0
		}),
		text22e: r.text().attr(comonTextAttrTop).attr({
			text:"hold on the things around us, gravity is the",
			guide:guids["text22e"],
			along:0
		}),
		text22f: r.text().attr(comonTextAttrTop).attr({
			text:"weakest natural force. Continue scrolling to",
			guide:guids["text22f"],
			along:0
		}),
		text22g: r.text().attr(comonTextAttrTop).attr({
			text:"learn all that gravity does in our everyday",
			guide:guids["text22g"],
			along:0
		}),
		text22h: r.text().attr(comonTextAttrTop).attr({
			text:"lives and the cosmos around us.",
			guide:guids["text22h"],
			along:0
		}),
	};

	makeAnim(obj, center,height);
	
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
		console.log(step);
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
		tree: [
		["M", center-620, middle-252],
		["L", center-620, -1000]
		],
		text1a: [
		["M", center-10, middle-215],
		["L", center-10, -495]
		],
		text1b: [
		["M", center-8, middle-165],
		["L", center-8, -445]
		],
		text2a: [
		["M", center-208, bottom-25],
		["L", center-208, -450]
		],
		text2b: [
		["M", center-208, bottom+5 ],
		["L", center-208, -420]
		],
		apple: [
		["M", center-335, middle-197],
		["C", center-335,  middle-355, center-190,  middle-285, center-190,  middle-150],
		],
		apple2: [
		["M", center-190, middle-150],
		["C", center-190,  middle+210, center-100,  middle+200, center-425,  middle+230],//trapped by orbit

		["C", center-425,  middle+230, center-660,  middle+200, center-640,  middle],//first quarter lap
		["C", center-640,  middle, center-660,  middle-200, center-425,  middle-260],//first half lap. at top
		["C", center-425,  middle-260, center-160,  middle-275, center-165,  middle],//first 3/4 lap. 
		["C", center-165,  middle, center-160,  middle+275, center-425,  middle+230],//first lap. at bottom

		["C", center-425,  middle+230, center-660,  middle+200, center-640,  middle],//2nd quarter lap
		["C", center-640,  middle, center-600,  middle-360, center,  middle-1000,],//fly off
		],
		text3a: [
		["M", center-118, bottom-25],
		["L", center-118, -450]
		],
		text3b: [
		["M", center-118, bottom+5 ],
		["L", center-118, -420]
		],
		text3c: [
		["M", center-118, bottom+35],
		["L", center-118, -390]
		],
		text3d: [
		["M", center-118, bottom+65 ],
		["L", center-118, -360]
		],
		text4a: [
		["M", center-618, bottom-25],
		["L", center-618, -450]
		],
		text4b: [
		["M", center-618, bottom+5 ],
		["L", center-618, -420]
		],
		text4c: [
		["M", center-618, bottom+35],
		["L", center-618, -390]
		],
		text4d: [
		["M", center-618, bottom+65 ],
		["L", center-618, -360]
		],
		moon: [
		["M", center-618, bottom+65 ],
		["L", center-618, -360]
		],
		equationEarth: [
		["M", center+118, bottom+65 ],
		["L", center+118, -360]
		],
		text5a: [
		["M", center-125, bottom-25],
		["L", center-125, -450]
		],
		text5b: [
		["M", center-125, bottom+5 ],
		["L", center-125, -420]
		],
		text5c: [
		["M", center-125, bottom+35],
		["L", center-125, -390]
		],
		text5d: [
		["M", center-125, bottom+65 ],
		["L", center-125, -360]
		],
		text8a: [
		["M", center-50, bottom-55],
		["L", center-50, -450]
		],
		text8b: [
		["M", center-50, bottom+5 ],
		["L", center-50, -420]
		],
		text8c: [
		["M", center-55, bottom+125],
		["L", center-55, -360]
		],
		text9a: [
		["M", center-55, bottom+125],
		["L", center-55, -360]
		],

		text12a: [
		["M", center-525, bottom-25],
		["L", center-525, -450]
		],
		text12b: [
		["M", center-525, bottom+5 ],
		["L", center-525, -420]
		],
		text12c: [
		["M", center-525, bottom+35],
		["L", center-525, -390]
		],
		text12d: [
		["M", center-525, bottom+65 ],
		["L", center-525, -360]
		],
		
		asteroid1: [
		["M", center+625, middle-230],
		["C", center+625,  middle-230, center-660,  middle+200, center-640,  middle],//2nd quarter lap
		["C", center-640,  middle, center-600,  middle-360, center-400,  middle-100],//fly off
		],
		asteroid2: [
		["M", center-425, middle+430],
		["C", center-425,  middle+430, center-660,  middle+200, center-640,  middle],//2nd quarter lap
		["C", center-640,  middle, center-600,  middle-360, center-400,  middle-100],//fly off
		],
		asteroid3: [
		["M", center+725, middle-830],
		["C", center+725,  middle-830, center-460,  middle+400, center-640,  middle],//2nd quarter lap
		["C", center-640,  middle, center-600,  middle-360, center+200,  middle-1000,],//fly off
		],
		asteroid4: [
		["M", center-425, middle+430],
		["C", center-425,  middle+430, center-660,  middle+200, center-640,  middle-200],//2nd quarter lap
		["C", center-640,  middle-200, center+200,  middle-400, center+200,  middle+1000,],//fly off
		],
		text22a: [
		["M", center-618, bottom-25],
		["L", center-618, -450]
		],
		text22b: [
		["M", center-618, bottom+30 ],
		["L", center-618, -395]
		],
		text22c: [
		["M", center-618, bottom+85],
		["L", center-618, -340]
		],
		text22d: [
		["M", center-618, bottom+140],
		["L", center-618, -285]
		],
		text22e: [
		["M", center-618, bottom+195 ],
		["L", center-618, -230]
		],
		text22f: [
		["M", center-618, bottom+250],
		["L", center-618, -175]
		],
		text22g: [
		["M", center-618, bottom+305],
		["L", center-618, -120]
		],
		text22h: [
		["M", center-618, bottom+360 ],
		["L", center-618, -65]
		],
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

	//setAnim(object to animate,{what step:what action, what step:what action}, start animation, duration)
	setAnim(obj.tree,{1000:{along:0}, 6400:{along:1}},start, end);

	setAnim(obj.text1a,{0:{along:0}, 3000:{along:1}}, start, end);
	setAnim(obj.text1b,{0:{along:0}, 3000:{along:1}}, start, end);
	setAnim(obj.text2a,{0:{along:0}, 4000:{along:1}}, start+300, 3500);
	setAnim(obj.text2b,{0:{along:0}, 4000:{along:1}}, start+300, 3500);

	setAnim(obj.apple,{ 
		0:{opacity:1, along:0},
		2000:{opacity:1, along:1},//apple hits newtons head
		3750:{opacity:1},
		3751:{opacity:0},
	},start+3200, 3751);//make sure end of apple is same as end of last script
	
	x = center-390;
	setAnim(obj.newton,{
		0:{transform:"T "+x+" "+(height+10)},
		1900:{transform:"T "+x+" "+(middle-230)},
		3500:{transform:"T "+x+" "+(middle-230)},
		6400:{transform:"T "+x+" "+(-418)}

	},start+1000, 6400);
	
	setAnim(obj.text3a,{0:{along:0}, 6000:{along:1}}, start+1300, 6400);
	setAnim(obj.text3b,{0:{along:0}, 6000:{along:1}}, start+1300, 6400);
	setAnim(obj.text3c,{0:{along:0}, 6000:{along:1}}, start+1300, 6400);
	setAnim(obj.text3d,{0:{along:0}, 6000:{along:1}}, start+1300, 6400);
	
	setAnim(obj.text4a,{0:{along:0}, 7400:{along:1}}, start+4500, 7400);
	setAnim(obj.text4b,{0:{along:0}, 7400:{along:1}}, start+4500, 7400);
	setAnim(obj.text4c,{0:{along:0}, 7400:{along:1}}, start+4500, 7400);
	setAnim(obj.text4d,{0:{along:0}, 7400:{along:1}}, start+4500, 7400);

	//setAnim(obj.moon,{6000:{along:0}, 8400:{along:1}}, start+100, 8400);
/*
	setAnim(obj.apple,{
		6400:{transform:"T "+(center-618)+" "+(middle-230)},
		7000:{transform:"T "+(center-618)+" "+(middle-230)},
		8000:{transform:"T "+(center-618)+" "+(-418)}
	},start+8000, end);//was 3200
*/

	setAnim(obj.apple2,{ 
		0:{opacity:0, along:0},
		1:{opacity:1},
		5500:{opacity:1, along:1},
	},start+6930, 20500);//make sure end of apple is same as end of last script was 20500

	x = center-618;
	setAnim(obj.moon,{
		0:{transform:"T "+x+" "+(height+10)},
		4500:{transform:"T "+x+" "+(middle-230)+"S 1"},
		15000:{transform:"T "+x+" "+(middle-230)},
		17000:{transform:"T "+x+10+" "+(middle-230)+"S 0.1"}
	},start+5500, 17000);

	setAnim(obj.equationEarth,{0:{along:0}, 7400:{along:1}}, start+7000, 7400);
	setAnim(obj.text5a,{0:{along:0}, 7400:{along:1}}, start+7000, 6000);
	setAnim(obj.text5b,{0:{along:0}, 7400:{along:1}}, start+7000, 6000);
	setAnim(obj.text5c,{0:{along:0}, 7400:{along:1}}, start+7000, 6000);
	setAnim(obj.text5d,{0:{along:0}, 7400:{along:1}}, start+7000, 6000);
	
    x = (center)/4.5;
    setAnim(obj.text6a,{
    	0:{opacity:0,transform:"T "+(center+120)+" "+(middle+200)+" S 0.1"},
    	400:{opacity:1,transform:"T "+(center-x-50)+" "+(middle-250)+" S 0.75"},
    	600:{transform:"T "+(center-x-50)+" "+(middle-250)+" S 0.75"},
		800:{transform:"T "+(center-x-50)+" "+(-418)+" S 0.75"}
    }, start+9000, 4500);
    setAnim(obj.text6b,{
    	0:{opacity:0,transform:"T "+(center+120)+" "+(middle+250)+" S 0.1"},
    	400:{opacity:1,transform:"T "+(center-x)+" "+(middle-200)+" S 0.75"},
    	600:{transform:"T "+(center-x)+" "+(middle-200)+" S 0.75"},
		800:{transform:"T "+(center-x)+" "+(-418)+" S 0.75"}	
    }, start+9000, 4500);
    setAnim(obj.text7a,{
    	0:{opacity:0,transform:"T "+(center+420)+" "+(middle+300)+" S 0.1"},
    	400:{opacity:1,transform:"T "+(center-x-50)+" "+(middle)+" S 0.75"},
    	600:{transform:"T "+(center-x-50)+" "+(middle)+" S 0.75"},
		800:{transform:"T "+(center-x-50)+" "+(-418)+" S 0.75"}	
    }, start+9000, 4500);
    setAnim(obj.text7b,{
    	0:{opacity:0,transform:"T "+(center+420)+" "+(middle+350)+" S 0.1"},
    	400:{opacity:1,transform:"T "+(center-x)+" "+(middle+50)+" S 0.75"},
    	600:{transform:"T "+(center-x)+" "+(middle+50)+" S 0.75"},
		800:{transform:"T "+(center-x)+" "+(-418)+" S 0.75"}		
    }, start+9000, 4500);

    setAnim(obj.text8a,{
    	0:{opacity:1,transform:"T "+(center-50)+" "+(height+500)},
		4500:{transform:"T "+(center-50)+" "+(middle-100)},
		7000:{transform:"T "+(center-50)+" "+(middle-100)},
		7400:{transform:"T "+(center-50)+" "+(-269)}
    },start+12000, 7400);
	setAnim(obj.text8b,{
		0:{opacity:1,transform:"T "+(center-50)+" "+(height+555)},
		4500:{transform:"T "+(center-50)+" "+(middle-30)},
		7000:{transform:"T "+(center-50)+" "+(middle-30)},
		7400:{transform:"T "+(center-50)+" "+(-219)}
	},start+12000, 7400);
	setAnim(obj.text8c,{
		0:{opacity:0,transform:"T "+(center-55)+" "+(height+630)},
		4500:{opacity:0,transform:"T "+(center-55)+" "+(middle+65)},
		7000:{opacity:1,transform:"T "+(center-55)+" "+(middle+65)},
		7400:{opacity:1,transform:"T "+(center-55)+" "+(-119)}
	},start+12000, 7400);

	setAnim(obj.text9a,{
		0:{opacity:0,transform:"T "+(center-600)+" "+(height+630)},
		4500:{opacity:1,transform:"T "+(center-600)+" "+(middle+300)},
		23000:{opacity:1,transform:"T "+(center-600)+" "+(middle+300)},
		23400:{opacity:1,transform:"T "+(center-600)+" "+(-40)}
	},start+14000, 23400);
	setAnim(obj.text9Moon,{
		0:{opacity:0,transform:"T "+(center+150)+" "+(height+630)},
		4500:{opacity:1,transform:"T "+(center+150)+" "+(middle+300)},
		7000:{opacity:1,transform:"T "+(center+150)+" "+(middle+300)},
		7400:{opacity:0,transform:"T "+(center+200)+" "+(middle+300)}
	},start+14000, 7400);
	setAnim(obj.text9Earth,{
		0:{opacity:0,transform:"T "+(center+150)+" "+(height+630)},
		4500:{opacity:1,transform:"T "+(center+150)+" "+(middle+300)},
		7000:{opacity:1,transform:"T "+(center+150)+" "+(middle+300)},
		7400:{opacity:0,transform:"T "+(center+200)+" "+(middle+300)}
	},start+18000, 7400);
	setAnim(obj.text9Sun,{
		0:{opacity:0,transform:"T "+(center+150)+" "+(height+630)},
		4500:{opacity:1,transform:"T "+(center+150)+" "+(middle+300)},
		7000:{opacity:1,transform:"T "+(center+150)+" "+(middle+300)},
		7400:{opacity:0,transform:"T "+(center+200)+" "+(middle+300)}
	},start+22000, 7400);
	setAnim(obj.text9Galaxy,{
		0:{opacity:0,transform:"T "+(center+150)+" "+(height+630)},
		4500:{opacity:1,transform:"T "+(center+150)+" "+(middle+300)},
		7000:{opacity:1,transform:"T "+(center+150)+" "+(middle+300)},
		7400:{opacity:0,transform:"T "+(center+200)+" "+(middle+300)}
	},start+26000, 7400);
	setAnim(obj.text9Matter,{
		0:{opacity:0,transform:"T "+(center+150)+" "+(height+630)},
		4500:{opacity:1,transform:"T "+(center+150)+" "+(middle+300)},
		7000:{opacity:1,transform:"T "+(center+150)+" "+(middle+300)},
		7400:{opacity:1,transform:"T "+(center+150)+" "+(-40)}
	},start+30000, 7400);
	setAnim(obj.planet,{
		0:{opacity:1, transform:"T "+(center-1500)+" "+(middle-300)+"S .75"},
		7400:{transform:"T "+(center-600)+10+" "+(middle-300)+"S 0.1"}
	},start+22000, 7400);
	setAnim(obj.stars,{
		0:{opacity:1, transform:"R15 T "+(center-1900)+" "+(middle-440)+"S 1"},
		7400:{transform:"R360 T "+(center-600)+10+" "+(middle-440)+"S 0.1"}
	},start+26000, 7400);
	setAnim(obj.galaxy,{
		0:{opacity:0, transform:"R0 T "+(center-1900)+" "+(middle-650)+"S 1"},
		1:{opacity:1},
		7400:{transform:"R130 T "+(center-600)+10+" "+(middle-650)+"S 0.1"}
	},start+30000, 7400);
	setAnim(obj.astronaut,{
		0:{opacity:1, transform:"R0 T "+(center-1400)+" "+(middle-150)+"S 1"},
		6400:{opacity:1,transform:"R560 T "+(center+300)+" "+(middle-350)+"S 0.01"},
		7400:{opacity:0,}
	},start+34000, 7400);

	setAnim(obj.text10a,{
		0:{opacity:0,transform:"T "+(center-430)+" "+(height+630)},
		4500:{opacity:1,transform:"T "+(center-430)+" "+(middle-120)},
		7000:{opacity:1,transform:"T "+(center-430)+" "+(middle-120)},
		7400:{opacity:1,transform:"T "+(center-430)+" "+(middle-900)}
	},start+35000, 8000);
	setAnim(obj.text10b,{
		0:{opacity:0,transform:"T "+(center+85)+" "+(height+630)},
		4500:{opacity:1,transform:"T "+(center+85)+" "+(middle-185)},
		7000:{opacity:1,transform:"T "+(center+85)+" "+(middle-185)},
		7400:{opacity:1,transform:"T "+(center+85)+" "+(middle-960)}
	},start+35000, 8000);
	setAnim(obj.text10c,{
		0:{opacity:0,transform:"T "+(center+90)+" "+(height+630)},
		4500:{opacity:1,transform:"T "+(center+90)+" "+(middle-70)},
		7000:{opacity:1,transform:"T "+(center+90)+" "+(middle-70)},
		7400:{opacity:1, transform:"T "+(center+90)+" "+(middle-853)}
	},start+35000, 8000);
	setAnim(obj.text10d,{
		0:{opacity:0, transform:" T  "+(center-423)+" "+(height+630)},
		4500:{opacity:1,transform:"T "+(center-423)+" "+(middle+80)},
		7000:{opacity:1,transform:"T "+(center-423)+" "+(middle+80)},
		7400:{opacity:1,transform:"T "+(center-423)+" "+(middle-750)}
	},start+35000, 8000);

	setAnim(obj.einstien,{
		0:{opacity:1, transform:"R0 T "+(center-1700)+" "+(bottom-385)},
		7400:{transform:"T "+(center+400)+" "+(bottom-385)},
		57000:{transform:"T "+(center+400)+" "+(bottom-385)},
		59000:{transform:"T "+(center+800)+" "+(bottom-385)},
	},start+36000, 59000);

	//setAnim(obj.text11a,{0:{along:0}, 7400:{along:1}}, start+43000, 6000);
	setAnim(obj.text11a,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle)},
		800:{transform:"T "+(center+100)+" "+(-418)}
    }, start+44000, 5500);

    setAnim(obj.text12a,{0:{along:0}, 7400:{along:1}}, start+43000, 7400);
	setAnim(obj.text12b,{0:{along:0}, 7400:{along:1}}, start+43000, 7400);
	setAnim(obj.text12c,{0:{along:0}, 7400:{along:1}}, start+43000, 7400);
	setAnim(obj.text12d,{0:{along:0}, 7400:{along:1}}, start+43000, 7400);

	setAnim(obj.text13a,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{transform:"T "+(center+100)+" "+(-418)}
    }, start+50000, 5500);
    setAnim(obj.text13b,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{transform:"T "+(center+100)+" "+(-418)}
    }, start+52000, 5500);
    setAnim(obj.text13c,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{transform:"T "+(center+100)+" "+(-418)}
    }, start+54000, 5500);
    setAnim(obj.text13d,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{transform:"T "+(center+100)+" "+(-418)}
    }, start+56000, 5500);

     setAnim(obj.grid,{
    	0:{opacity:0,transform:"T "+(center-500)+" "+(middle)+"S 1"},
    	400:{opacity:1,transform:"T "+(center-500)+" "+(middle-200)},
    	500:{transform: "S 1.05 T "+(center-500)+" "+(middle-200)},
    	700:{transform: "S 0.95 T "+(center-500)+" "+(middle-200)},
    	900:{transform: "S 1.01 T "+(center-500)+" "+(middle-200)},
    	1100:{transform: "S 0.90 T "+(center-500)+" "+(middle-200)},
    	1300:{transform: "S 0.95 T "+(center-500)+" "+(middle-200)},
    	1500:{transform: "S 1.05 T "+(center-500)+" "+(middle-200)},
    	1800:{transform:"T "+(center-500)+" "+(middle-200)},
		2000:{transform:"T "+(center-500)+" "+(-418)+"S 1"}
    }, start+50500, 9000);


    setAnim(obj.text14a,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{transform:"T "+(center+100)+" "+(-418)}
    }, start+61000, 5500);
    setAnim(obj.text14b,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{transform:"T "+(center+100)+" "+(-418)}
    }, start+63000, 5500);
    setAnim(obj.gravityApple,{
		0:{opacity:0, transform:"R0 T "+(center-600)+" "+(middle-325)},
		3000:{opacity:1, transform:"R0 T "+(center-600)+" "+(middle-325)},
		9000:{opacity:1},
		9001:{opacity:0}
	},start+68000, 9001);
	setAnim(obj.text15a,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{transform:"T "+(center+100)+" "+(middle-800)}
    }, start+67000, 5500);
    setAnim(obj.text15b,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{transform:"T "+(center+100)+" "+(middle-800)}
    }, start+69000, 5500);
    setAnim(obj.text15c,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{transform:"T "+(center+100)+" "+(middle-800)}
    }, start+71000, 5500);
    setAnim(obj.text16a,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{transform:"T "+(center+100)+" "+(-418)}
    }, start+75000, 5500);
    setAnim(obj.gravitySun,{
		0:{opacity:0, transform:"R0 T "+(center-550)+" "+(middle-325)},
		1:{opacity:1, transform:"R0 T "+(center-550)+" "+(middle-325)},
		15999:{opacity:1},
		16000:{opacity:0}
	},start+77000, 16000);
	setAnim(obj.text17a,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{opacity:1,transform:"T "+(center+100)+" "+(middle-800)},
		801:{opacity:0}
    }, start+80000, 5500);
    setAnim(obj.text17b,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{opacity:1,transform:"T "+(center+100)+" "+(middle-800)},
		801:{opacity:0}
    }, start+82000, 5500);
    setAnim(obj.text17c,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{opacity:1,transform:"T "+(center+100)+" "+(middle-800)},
		801:{opacity:0}
    }, start+84000, 5500);
    setAnim(obj.text18a,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{opacity:1,transform:"T "+(center+100)+" "+(middle-800)},
		801:{opacity:0}
    }, start+89000, 5500);
    setAnim(obj.text18b,{
    	0:{opacity:0,transform:"T "+(center+100)+" "+(middle)},
    	600:{opacity:1,transform:"T "+(center+100)+" "+(middle-100)},
		800:{opacity:1,transform:"T "+(center+100)+" "+(middle-800)},
		801:{opacity:0}
    }, start+91000, 5500);
    setAnim(obj.blackhole,{
		0:{opacity:0, transform:"R0 T "+(center-586)+" "+(middle-270)},
		2000:{opacity:1, transform:"R0 T "+(center-586)+" "+(middle-270)},
		10000:{opacity:1},
		11000:{opacity:0},
	},start+94000, 22000);
	setAnim(obj.text19e,{
		0:{opacity:0,   transform:"T "+(center-50)+" "+(height+630)},
		4500:{opacity:1,transform:"T "+(center-50)+" "+(middle-100)},
		7000:{opacity:1,transform:"T "+(center-50)+" "+(middle-100)},
		7400:{opacity:1,transform:"T "+(center-50)+" "+(middle-900)}
	},start+95000, 8000);
	setAnim(obj.text19d,{
		0:{opacity:0,   transform:"T "+(center-50)+" "+(height+640)},
		4500:{opacity:1,transform:"T "+(center-50)+" "+(middle-140)},
		7000:{opacity:1,transform:"T "+(center-50)+" "+(middle-140)},
		7400:{opacity:1,transform:"T "+(center-50)+" "+(middle-940)}
	},start+95000, 8000);
	setAnim(obj.text19c,{
		0:{opacity:0,   transform:"T "+(center-50)+" "+(height+630)},
		4500:{opacity:1,transform:"T "+(center-50)+" "+(middle-180)},
		7000:{opacity:1,transform:"T "+(center-50)+" "+(middle-180)},
		7400:{opacity:1,transform:"T "+(center-50)+" "+(middle-980)}
	},start+95000, 8000);
	setAnim(obj.text19b,{
		0:{opacity:0, transform:" T  "+(center-50)+" "+(height+630)},
		4500:{opacity:1,transform:"T "+(center-50)+" "+(middle-220)},
		7000:{opacity:1,transform:"T "+(center-50)+" "+(middle-220)},
		7400:{opacity:1,transform:"T "+(center-50)+" "+(middle-1020)}
	},start+95000, 8000);
	setAnim(obj.text19a,{
		0:{opacity:0, transform:" T  "+(center-50)+" "+(height+630)},
		4500:{opacity:1,transform:"T "+(center-50)+" "+(middle-260)},
		7000:{opacity:1,transform:"T "+(center-50)+" "+(middle-260)},
		7400:{opacity:1,transform:"T "+(center-50)+" "+(middle-1040)}
	},start+95000, 8000);
	setAnim(obj.asteroid1,{ 
		0:{opacity:0, along:0},
		1:{opacity:1,transform:"S 1"},
		5500:{opacity:1, along:1},
		5501:{opacity:0},
	},start+103000, 5500);
	setAnim(obj.asteroid2,{ 
		0:{opacity:0, along:0},
		1:{opacity:1,transform:"S 1"},
		5500:{opacity:1, along:1},
		5501:{opacity:0},
	},start+103000, 7500);
	setAnim(obj.asteroid3,{ 
		0:{opacity:0, along:0},
		1:{opacity:1},
		5500:{opacity:1, along:1},
	},start+110000, 5500);
	setAnim(obj.asteroid4,{
		0:{opacity:0, along:0},
		1:{opacity:1},
		5500:{opacity:1, along:1},
	},start+110000, 5500);
	setAnim(obj.text20a,{
    	0:{opacity:0,transform:"T "+(center+120)+" "+(middle+250)+" S 1"},
    	400:{opacity:1,transform:"T "+(center+120)+" "+(middle+100)},
    	600:{transform:"T "+(center-450)+" "+(middle-50)+" S 0.01"},
		800:{opacity:1,transform:"T "+(center-450)+" "+(middle-50)+" S 0.01"},
		801:{opacity:0}	
    }, start+103000, 4500);
    setAnim(obj.text21a,{
    	0:{opacity:0,transform:"T "+(center+400)+" "+(middle+300)+" S 1"},
    	400:{opacity:1,transform:"T "+(center-600)+" "+(middle+100)+" S 0.85"},
    	600:{transform:"T "+(center-900)+" "+(middle+50)+" S 0.45"},
		800:{opacity:1,transform:"T "+(center-1200)+" "+(middle-150)+" S 0.25"},
		801:{opacity:0}
    }, start+110000, 4500);

  	setAnim(obj.text22a,{0:{along:0}, 7400:{along:1}}, start+115000, 7400);
  	setAnim(obj.text22b,{0:{along:0}, 7400:{along:1}}, start+115000, 7400);
	setAnim(obj.text22c,{0:{along:0}, 7400:{along:1}}, start+115000, 7400);
	setAnim(obj.text22d,{0:{along:0}, 7400:{along:1}}, start+115000, 7400);
	setAnim(obj.text22e,{0:{along:0}, 7400:{along:1}}, start+115000, 7400);
	setAnim(obj.text22f,{0:{along:0}, 7400:{along:1}}, start+115000, 7400);
	setAnim(obj.text22g,{0:{along:0}, 7400:{along:1}}, start+115000, 7400);
	setAnim(obj.text22h,{0:{along:0}, 7400:{along:1}}, start+115000, 7400);
}

 WebFontConfig = {
    google: { families: [ 'Roboto+Condensed::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();