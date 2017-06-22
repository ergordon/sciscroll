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
	biggerText = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 400,"fill":"#fff","font-size":35,"text-anchor": "start", "text-align":"center"};
	BIGText = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 800,"fill":"#fff","font-size":50,"line-height": 50,"text-anchor": "start"};
	biggerBlackerText = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 400,"fill":"#000","font-size":35,"text-anchor": "start", "text-align":"center"};
	r.addGuides(); //add path trace feature
	guids = drawGuids(r, center, height); //draw guides on raphael canvas using center as x and height as y. 

	/*
	*	Declare Objects
	*/
	var obj ={  
		white: r.image().attr({
			"width": 4000, //fixed width of image
			"height": 4000, //fixed height of image
			"src": homepageImg+"white.png", //source of image
			transform:"T "+(center)+" "+(middle),
			opacity: 0,
		}),
		text1a: r.text().attr(biggerText).attr({
			text:"Have you ever wondered \nwhat makes a space craft \nlike Deep Space 1, Dawn, \nSMART 1, and many \nother crafts fly?",
			guide:guids["text1a"],
			along:0
		}),
		text1b: r.text().attr(biggerText).attr({
			text:"These ships move using",
	        opacity:0,
		}),
		text1c: r.text().attr(BIGText).attr({
			text:"ELECTROSTATIC ION PROPULSION",
	        opacity:0,
		}),
		ds1: r.image().attr({
			"width": 500, //fixed width of image
			"height": 395, //fixed height of image
			"src": homepageImg+"ds1.png", //source of image
			guide: guids["satellite"], //which guide path to take
			opacity: 0,
			along:0 //start at 0
		}),
		dawn: r.image().attr({
			"width": 500, //fixed width of image
			"height": 236, //fixed height of image
			"src": homepageImg+"dawn.png", //source of image
			guide: guids["satellite"], //which guide path to take
			opacity: 0,
			along:0 //start at 0
		}),
		smart: r.image().attr({
			"width": 500, //fixed width of image
			"height": 240, //fixed height of image
			"src": homepageImg+"smart1.png", //source of image
			guide: guids["satellite"], //which guide path to take
			along:0, //start at 0
			opacity: 0
		}),
		earth: r.image().attr({
			"width": 500, //fixed width of image
			"height": 500, //fixed height of image
			"src": homepageImg+"earth.png", //source of image
			guide: guids["earth"], //which guide path to take
			along:0 //start at 0
		}),
		text2a: r.text().attr(biggerBlackerText).attr({
			text:"This is a Xenon Atom. It has 54 electrons, \n54 protons and 54 neutrons. It is a stable \ngas which means it is happy the way it is.",
			opacity: 0
		}),
		xenon: r.image().attr({
			"width": 276, //fixed width of image
			"height": 273, //fixed height of image
			"src": homepageImg+"xenon.png", //source of image
		}),
		electron: r.image().attr({
			"width": 69, //fixed width of image
			"height": 57, //fixed height of image
			"src": homepageImg+"elec.png", //source of image
			guide: guids["freeElectron"], //which guide path to take
			opacity: 0,
			along:0 //start at 0
		}),
		text2b: r.text().attr(biggerBlackerText).attr({
			text:"Here we have a free electron.\nThis is an electron that belongs to no atom.",
			opacity: 0
		}),
		xenon2: r.image().attr({
			"width": 276, //fixed width of image
			"height": 273, //fixed height of image
			"src": homepageImg+"xenon.png", //source of image
		}),
		electron2: r.image().attr({
			"width": 23, //fixed width of image
			"height": 19, //fixed height of image
			"src": homepageImg+"elec.png", //source of image
			opacity: 0,
		}),
		text3a: r.text().attr(biggerBlackerText).attr({
			text:"When a free electron hits our Xenon atom, \nit knocks off one of the Xenon’s electrons.",
			opacity: 0
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
		obj[i] = r.path(val)/*.hide();*///hides path, remove.hide() for testing (it allows you to see paths.)
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
		earth: [
			["M", center+100, middle-50],
			["L", center+1000, middle-50]
		],
		text1a: [
			["M", center, middle-150],
			["L", center, middle]
		],
		satellite: [
			["M", center+100, middle+50],
			["C", center+100, middle+50, center-400,  middle+450, center-1000,  middle-400],
		],
		freeElectron: [
			["M", center-900, middle-40],
			["C", center+100, middle+50, center-200,  middle+650, center-600,  middle],
			["C", center-600, middle, center-400,  middle-250, center-200,  middle],
			["C", center-200, middle, center,  middle+100, center+1000,  middle+200],
		]
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
	setAnim(obj.earth,{
		0:{along:0}, 
		500:{along:1}
		}, start+3500, end);
	setAnim(obj.text1a,{
		0:{opacity: 1, along:0},
		500:{opacity: 0, along:1}
		}, start+3500, end);
	setAnim(obj.ds1,{
		0:{opacity:0, transform: "S 0.75"},
		1:{opacity: 1, along: 0},
		2000:{along: 1},
		2001:{opacity:0}
		},start, end);
	setAnim(obj.dawn,{
		0:{opacity:0, transform: "S 0.75"},
		1:{opacity: 1, along: 0},
		2000:{along: 1},
		2001:{opacity:0}
		},start+1000, end);
	setAnim(obj.smart,{
		0:{opacity:0, transform: "S 0.75"},
		1:{opacity: 1, along: 0},
		2000:{along: 1},
		2001:{opacity:0}
		},start+2000, end);
	setAnim(obj.text1b,{
		0:{opacity: 0, transform:"T "+(center-200)+" "+(middle-300)}, 
		1:{opacity: 1},
		600:{transform: "T "+(center-200)+" "+(middle-300), opacity: 1},
		700:{transform: "T "+(center-200)+" "+(middle-500), opacity: 0}
		},start+6500, end);
	setAnim(obj.text1c,{
    	0:{opacity:0,transform:"T "+(center-425)+" "+(middle-225)},
    	600:{opacity:1, transform:"T "+(center-425)+" "+(middle-225)},
    	700:{transform:"T "+(center-425)+" "+(middle-300)}
    	}, start+6500, end);
	setAnim(obj.white,{
    	0:{opacity:0},
    	200:{opacity:1},
    	700:{opacity:1}
    	}, start+9500, end);
	setAnim(obj.text2a,{
		0:{opacity:0,transform:"T "+(center-125)+" "+(middle-100)},
		100:{opacity: 1},
    	600:{opacity:1, transform:"T "+(center-125)+" "+(middle-100)},
    	700:{transform:"T "+(center+900)+" "+(middle-100)}
		}, start+10500, end);
	setAnim(obj.xenon,{
		0:{opacity:0,transform:"T "+(center-900)+" "+(middle-100)},
		100:{opacity: 1},
    	600:{opacity:1, transform:"T "+(center-425)+" "+(middle-100)},
    	800:{transform:"T "+(center-425)+" "+(middle+800)}
		}, start+10500, end);
	setAnim(obj.electron,{
		0:{opacity: 0},
		1:{opacity: 1, along: 0},
    	1000:{along: 1}
		}, start+13000, end);
	setAnim(obj.text2b,{
		0:{opacity:0,transform:"T "+(center-125)+" "+(middle-100)},
		100:{opacity: 1},
    	600:{opacity:1, transform:"T "+(center-125)+" "+(middle-100)},
    	700:{transform:"T "+(center+900)+" "+(middle-100)}
		}, start+13000, end);
	setAnim(obj.xenon2,{
		0:{opacity:0,transform:"T "+(center+900)+" "+(middle-100)},
		100:{opacity: 1},
    	600:{opacity:1, transform:"T "+(center+125)+" "+(middle-100)},
    	800:{transform:"T "+(center+125)+" "+(middle-100)}
		}, start+15500, end);
	setAnim(obj.electron2,{
		0:{opacity:0,transform:"T "+(center-900)+" "+(middle+25)},
		100:{opacity: 1},
    	600:{opacity:1, transform:"T "+(center+110)+" "+(middle+25)},
    	800:{transform:"T "+(center+110)+" "+(middle+25)}//collisoin
		}, start+15500, end);
	setAnim(obj.text3a,{
		0:{opacity:0,transform:"T "+(center-125)+" "+(middle-100)},
		100:{opacity: 1},
    	600:{opacity:1, transform:"T "+(center-125)+" "+(middle-100)},
    	700:{transform:"T "+(center+900)+" "+(middle-100)}
		}, start+15500, end);
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