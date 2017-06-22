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
	playLength = 48000, //full length of page
	currentStep = 0, //start at 0

	

	/*
	*	Font Attributes
	*/
	biggerText = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 400,"fill":"#fff","font-size":35,"text-anchor": "middle", "text-align":"center"};
	BIGText = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 800,"fill":"#fff","font-size":50,"line-height": 50,"text-anchor": "start"};
	biggerBlackerText = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 400,"fill":"#000","font-size":35,"text-anchor": "start", "text-align":"center"};
	biggerBlackerTitle = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 800,"fill":"#000","font-size":50,"text-anchor": "start", "text-align":"center"};
	thinBlackText = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 400,"fill":"#000","font-size":15,"text-anchor": "start", "text-align":"center"};
	biggerBlackerText5a = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 400,"fill":"#000","font-size":35,"text-anchor": "middle", "text-align":"center"};

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
		blue: r.image().attr({
			"width": 2000, //fixed width of image
			"height": 2000, //fixed height of image
			"src": homepageImg+"blue.gif", //source of image
			transform:"T "+(center-5000)+" "+(middle),
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
			opacity: 0,
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
			opacity: 0
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
		xenonIon: r.image().attr({
			"width": 276, //fixed width of image
			"height": 273, //fixed height of image
			"src": homepageImg+"XenonIon.png", //source of image
			opacity: 0,
		}),
		electronBounce: r.image().attr({
			"width": 23, //fixed width of image
			"height": 19, //fixed height of image
			"src": homepageImg+"pissedElec.png", //source of image
			opacity: 0,
		}),
		text3b: r.text().attr(biggerBlackerText).attr({
			text:"The Xenon atom, now missing an electron, \nbecomes electrically unstable. It's now a",
			opacity: 0
		}),
		text3c: r.text().attr(biggerBlackerTitle).attr({
			text:"Positive Xenon Ion!",
			opacity: 0
		}),
		text3d: r.text().attr(biggerBlackerText).attr({
			text:"This is called Ionization, it is the fundamental process for Ion drives. \nIonization is what happens to thousands of atoms in an Ion Thruster.",
			opacity: 0
		}),
		screenGrid: r.image().attr({
			"width": 237, //fixed width of image
			"height": 306, //fixed height of image
			"src": homepageImg+"ScreenGrid.png", //source of image
			opacity: 0,
		}),
		happyXenon: r.image().attr({
			"width": 55, //fixed width of image
			"height": 55, //fixed height of image
			"src": homepageImg+"XenonIon.png", //source of image
			opacity: 0,
		}),
		happyXenon1: r.image().attr({
			"width": 55, //fixed width of image
			"height": 55, //fixed height of image
			"src": homepageImg+"XenonIon.png", //source of image
			opacity: 0,
		}),
		happyXenon2: r.image().attr({
			"width": 55, //fixed width of image
			"height": 55, //fixed height of image
			"src": homepageImg+"XenonIon.png", //source of image
			opacity: 0,
		}),
		text4a: r.text().attr(biggerBlackerText).attr({
			text:"Positive Xenon Ions are electrically unbalance. This means they can \nbe attracted or repelled by positive or negative charges, respectively.\nThis could not be done when the Xenon was just an ordinary atom.",
			opacity: 0
		}),
		acclGrid: r.image().attr({
			"width": 237, //fixed width of image
			"height": 306, //fixed height of image
			"src": homepageImg+"AcclGrid.png", //source of image
			opacity: 0,
		}),
		screenGridDemoOne: r.image().attr({
			"width": 237, //fixed width of image
			"height": 306, //fixed height of image
			"src": homepageImg+"ScreenGrid.png", //source of image
			opacity: 0,
		}),
		acclGridDemoOne: r.image().attr({
			"width": 237, //fixed width of image
			"height": 306, //fixed height of image
			"src": homepageImg+"AcclGrid.png", //source of image
			opacity: 0,
		}),
		happyXenonDemo: r.image().attr({
			"width": 55, //fixed width of image
			"height": 55, //fixed height of image
			"src": homepageImg+"XenonIon.png", //source of image
			opacity: 0,
		}),
		arrow: r.image().attr({
			"width": 50, //fixed width of image
			"height": 50, //fixed height of image
			"src": homepageImg+"arrow.png", //source of image
			opacity: 0,
		}),
		text4b: r.text().attr(biggerBlackerText).attr({
			text:"This attraction and repulsion are what makes an ion thruster work.",
			opacity: 0
		}),
		text4ba: r.text().attr(thinBlackText).attr({
			text:"Positive Ions are attracted to a \nnegative charge and race to it.",
			opacity: 0
		}),
		text4bb: r.text().attr(thinBlackText).attr({
			text:"They move so fast though that  \nthey slip through the holes and\nslingshot past the negative grid!",
			opacity: 0
		}),
		text4bc: r.text().attr(thinBlackText).attr({
			text:"They move so fast they\neven come close to a\npositive charged grid,\nwhich for a positive ion,\nis the worst thing imaginable.",
			opacity: 0
		}),
		text4bd: r.text().attr(thinBlackText).attr({
			text:"They HATE being around the\npositive grid and run away\nfrom the grid, even quicker\nthan how they ran toward\nthe negative grid.",
			opacity: 0
		}),
		bigXenonIon: r.image().attr({
			"width": 850, //fixed width of image
			"height": 850, //fixed height of image
			"src": homepageImg+"XenonIon.png", //source of image
			opacity: 0,
		}),
		bigXenon: r.image().attr({
			"width": 850, //fixed width of image
			"height": 850, //fixed height of image
			"src": homepageImg+"Xenon.png", //source of image
			opacity: 0,
		}),
		returningElectron: r.image().attr({
			"width": 45, //fixed width of image
			"height": 38, //fixed height of image
			"src": homepageImg+"happyElec.png", //source of image
			opacity: 0,
		}),
		text5a: r.text().attr(biggerBlackerText5a).attr({
			text:"The ions leave going really fast. \nThis is what makes the spacecraft move!\nBut an Ion can’t be left alone. They miss\ntheir lost electron! They need to be complete\nagain or else they would go back inside to find\nit which breaks the engine. ",
			opacity: 0
		}),
		text5b: r.text().attr(biggerBlackerText).attr({
			text:"To fix this, scientist and engineers bring their\nmissing electrons to the ions to make them\nstable and happy again.",
			opacity: 0
		}),
		ionDrive: r.image().attr({
			"width": 1000, //fixed width of image
			"height": 691, //fixed height of image
			"src": homepageImg+"mess.gif", //source of image
			opacity: 0,
		}),
		text6: r.text().attr(BIGText).attr({
			text:"TOGETHER A SYSTEM IS CREATED",
			opacity: 0
		}),
		text7a: r.text().attr(biggerText).attr({
			text:"\t These tiny particles, smaller than the head of \n\t the sharpest pin, about the size of a grain of \n\t\tsand cut into 50,000,000,000,000,000,000 \n\t\t\tpieces, are all joined together and used to \npush giant space ships of discovery and exploration. ",
			opacity: 0
		}),
		ds1End: r.image().attr({
			"width": 500, //fixed width of image
			"height": 395, //fixed height of image
			"src": homepageImg+"ds1.png", //source of image
			guide: guids["satelliteEnd"], //which guide path to take
			opacity: 0,
			along:0 //start at 0
		}),
		text7b: r.text().attr(biggerText).attr({
			text:"With time and patience, these ships will explore farther \nthan humanity has ever seen before.",
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
		earth: [
			["M", center+100, middle-50],
			["L", center+1000, middle-50]
		],
		text1a: [
			["M", center, middle-150],
			["L", center, middle]
		],
		satellite: [
			["M", center-100, middle+50],
			["C", center-100, middle+50, center-400,  middle+450, center-1000,  middle-400],
		],
		freeElectron: [
			["M", center-900, middle-40],
			["C", center+100, middle+50, center-200,  middle+650, center-600,  middle],
			["C", center-600, middle, center-400,  middle-250, center-200,  middle],
			["C", center-200, middle, center,  middle+100, center+1000,  middle+200],
		],
		satelliteEnd: [
			["M", center-300, middle+150],
			["C", center-300, middle+150, center-100,  middle-350, center+1000,  middle-800],
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
		0:{opacity: 0, transform:"T "+(center)+" "+(middle-300)}, 
		1:{opacity: 1},
		600:{transform: "T "+(center)+" "+(middle-300), opacity: 1},
		700:{transform: "T "+(center)+" "+(middle-500), opacity: 0}
		},start+6500, end);
	setAnim(obj.text1c,{
    	0:{opacity:0,transform:"T "+(center-425)+" "+(middle-225)},
    	2500:{opacity:1, transform:"T "+(center-425)+" "+(middle-225)},
    	3500:{transform:"T "+(center-425)+" "+(middle-300)},
    	29900:{opacity: 1, transform:"T "+(center-425)+" "+(middle-300)},
    	29900:{opacity: 0, transform:"T "+(center-425)+" "+(middle-300)}
    	}, start+6500, end+27000);
	setAnim(obj.white,{
    	0:{opacity:0},
    	200:{opacity:1},
    	600:{opacity:1},
    	700:{opacity:0}
    	}, start+9500, end+30000);
	setAnim(obj.text2a,{
		0:{opacity:0,transform:"T "+(center-125)+" "+(middle-100)},
		100:{opacity: 1},
    	600:{opacity:1, transform:"T "+(center-125)+" "+(middle-100)},
    	700:{transform:"T "+(center+1000)+" "+(middle-100)}
		}, start+10500, end);
	setAnim(obj.xenon,{
		0:{opacity:0,transform:"T "+(center-900)+" "+(middle-100)},
		100:{opacity: 1},
    	600:{opacity:1, transform:"T "+(center-425)+" "+(middle-100)},
    	800:{transform:"T "+(center-425)+" "+(middle+900)}
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
    	700:{transform:"T "+(center+1000)+" "+(middle-100)}
		}, start+13000, end);
	setAnim(obj.xenon2,{
		0:{opacity:0,transform:"T "+(center+900)+" "+(middle-100)},
		1:{opacity: 1},
    	800:{opacity:1, transform:"T "+(center+125)+" "+(middle-100)},
    	//800:{transform:"T "+(center+125)+" "+(middle-100)},
    	801:{opacity:0}
		}, start+14725, end);
	setAnim(obj.electron2,{
		0:{opacity:0,transform:"T "+(center-900)+" "+(middle-65)},
		100:{opacity: 1},
    	600:{opacity:1, transform:"T "+(center+160)+" "+(middle-65)},
    	800:{transform:"T "+(center+160)+" "+(middle-65)},//collisoin
    	800:{transform:"T "+(center+625)+" "+(middle-825)}
		}, start+15500, end);
	setAnim(obj.text3a,{
		0:{opacity:0,transform:"T "+(center-2000)+" "+(middle+200)},
		1:{opacity: 1, transform:"T "+(center-2000)+" "+(middle+200)},
    	600:{opacity:1, transform:"T "+(center-550)+" "+(middle+200)},
    	800:{opacity:1, transform:"T "+(center-550)+" "+(middle+200)},
    	1000:{opacity: 0, transform:"T "+(center-550)+" "+(middle+900)}
		}, start+15500, end);
	setAnim(obj.xenonIon,{
		0:{opacity:0,transform:"T "+(center+125)+" "+(middle-100)},
		1:{opacity: 1},
    	800:{opacity:1, transform:"T "+(center+125)+" "+(middle-100)},
    	//800:{transform:"T "+(center+125)+" "+(middle-100)},
    	801:{opacity:0}
		}, start+17699, end);
	setAnim(obj.electronBounce,{
		0:{opacity:0,transform:"T "+(center+160)+" "+(middle-65)},
		1:{opacity: 1},
    	100:{opacity:1, transform:"T "+(center-600)+" "+(middle-965)},
		}, start+17720, end);
	setAnim(obj.text3b,{
		0:{opacity:0,transform:"T "+(center-550)+" "+(middle+900)},
		1:{opacity: 1, transform:"T "+(center-550)+" "+(middle+900)},
    	600:{opacity:1, transform:"T "+(center-550)+" "+(middle-100)},
    	3000:{opacity:1, transform:"T "+(center-550)+" "+(middle-100)},
    	3200:{opacity: 0}
		}, start+17400, end);
	setAnim(obj.text3c,{
		0:{opacity:0,transform:"T "+(center-480)+" "+(middle-25)},
		100:{opacity: 1, transform:"T "+(center-480)+" "+(middle-25)},
    	300:{opacity:0, transform:"T "+(center-480)+" "+(middle-25)},
    	800:{opacity: 0}
		}, start+19500, end);
	setAnim(obj.text3d,{
		0:{opacity:0,transform:"T "+(center-525)+" "+(middle+900)},
		1:{opacity: 1, transform:"T "+(center-525)+" "+(middle+900)},
    	600:{opacity:1, transform:"T "+(center-525)+" "+(middle)},
    	800:{opacity:1, transform:"T "+(center-525)+" "+(middle)},
    	1000:{opacity: 0, transform:"T "+(center+900)+" "+(middle)}
		}, start+20000, end);
	setAnim(obj.screenGrid,{
		0:{opacity:0,transform:"T "+(center+900)+" "+(middle-200)},
		1:{opacity: 1, transform:"T "+(center+900)+" "+(middle-200)},
    	800:{opacity:1, transform:"T "+(center+225)+" "+(middle-200)},
    	1000:{opacity:1, transform:"T "+(center+225)+" "+(middle-200)},
    	1001:{opacity: 0}
		}, start+22500, end);
	setAnim(obj.happyXenon,{
		0:{opacity:0,transform:"T "+(center-900)+" "+(middle-100)},
		1:{opacity: 1, transform:"T "+(center-900)+" "+(middle-100)},
    	2000:{opacity:1, transform:"T "+(center+100)+" "+(middle-100)},
    	2500:{opacity:1, transform:"T "+(center+150)+" "+(middle-100)},
    	3000:{opacity: 1, transform:"T "+(center+100)+" "+(middle-100)},
    	4000:{opacity: 1, transform:"T "+(center-900)+" "+(middle-100)}
		}, start+22500, end+2500);
	setAnim(obj.happyXenon1,{
		0:{opacity:0,transform:"T "+(center-850)+" "+(middle-175)},
		1:{opacity: 1, transform:"T "+(center-850)+" "+(middle-175)},
    	2000:{opacity:1, transform:"T "+(center+25)+" "+(middle-175)},
    	2500:{opacity:1, transform:"T "+(center+50)+" "+(middle-175)},
    	3000:{opacity: 1, transform:"T "+(center+25)+" "+(middle-175)},
    	4000:{opacity: 1, transform:"T "+(center-850)+" "+(middle-175)}
		}, start+22500, end+2500);
	setAnim(obj.happyXenon2,{
		0:{opacity:0,transform:"T "+(center-825)+" "+(middle-25)},
		1:{opacity: 1, transform:"T "+(center-825)+" "+(middle-25)},
    	2000:{opacity:1, transform:"T "+(center+75)+" "+(middle-25)},
    	2500:{opacity:1, transform:"T "+(center+125)+" "+(middle-25)},
    	3000:{opacity: 1, transform:"T "+(center+75)+" "+(middle-25)},
    	4000:{opacity: 1, transform:"T "+(center-825)+" "+(middle-25)}
		}, start+22500, end+2500);
	setAnim(obj.text4a,{
		0:{opacity:0,transform:"T "+(center-525)+" "+(middle+900)},
		1:{opacity: 1, transform:"T "+(center-525)+" "+(middle+900)},
    	200:{opacity:1, transform:"T "+(center-525)+" "+(middle+200)},
    	1000:{opacity:1, transform:"T "+(center-525)+" "+(middle+200)},
    	1200:{opacity: 0, transform:"T "+(center+900)+" "+(middle+200)}
		}, start+22500, end+3000);
	setAnim(obj.acclGrid,{
		0:{opacity:0,transform:"T "+(center+225)+" "+(middle-200)},
		1:{opacity: 1, transform:"T "+(center+225)+" "+(middle-200)},
    	800:{opacity:1, transform:"T "+(center+225)+" "+(middle-200)},
    	1000:{opacity:1, transform:"T "+(center+225)+" "+(middle-200)},
    	1001:{opacity: 0}
		}, start+25500, end);
	setAnim(obj.happyXenonDemo,{
		0:{opacity:0,transform:"T "+(center-900)+" "+(middle-25)},
		1:{opacity: 1, transform:"T "+(center-900)+" "+(middle-25)},
    	1000:{opacity:1, transform:"T "+(center-400)+" "+(middle-25)},
    	4000:{opacity:1, transform:"T "+(center+100)+" "+(middle-25)},
    	4500:{opacity: 1, transform:"T "+(center+825)+" "+(middle-25)},
    	//4000:{opacity: 1, transform:"T "+(center+825)+" "+(middle-25)}
		}, start+28500, end);
	setAnim(obj.arrow,{
		0:{opacity:0,transform:"T "+(center-900)+" "+(middle-75)},
		1:{opacity: 1, transform:"R0 T "+(center-900)+" "+(middle-75)},
    	1000:{opacity:1, transform:"R0 T "+(center-400)+" "+(middle-75)},
    	1001:{opacity:1, transform:"R180 T "+(center-400)+" "+(middle-75)},
    	4000:{opacity:1, transform:"R180 T "+(center+100)+" "+(middle-75)},
    	4001:{opacity:1, transform:"R0 T "+(center+100)+" "+(middle-75)},
    	4500:{opacity: 1, transform:"R0 T "+(center+825)+" "+(middle-75)},
    	//4000:{opacity: 1, transform:"T "+(center+825)+" "+(middle-25)}
		}, start+28500, end);
	setAnim(obj.acclGridDemoOne,{
		0:{opacity:0,transform:"T "+(center+225)+" "+(middle-200)},
		1:{opacity: 1, transform:"T "+(center+25)+" "+(middle-200)},
    	800:{opacity:1, transform:"T "+(center+25)+" "+(middle-200)},
    	1000:{opacity:1, transform:"T "+(center+25)+" "+(middle-200)},
    	1001:{opacity: 0}
		}, start+28500, end);
	setAnim(obj.screenGridDemoOne,{
		0:{opacity:0,transform:"T "+(center-425)+" "+(middle-200)},
		1:{opacity: 1, transform:"T "+(center-425)+" "+(middle-200)},
    	800:{opacity:1, transform:"T "+(center-425)+" "+(middle-200)},
    	1000:{opacity:1, transform:"T "+(center-425)+" "+(middle-200)},
    	1001:{opacity: 0}
		}, start+28500, end);
	setAnim(obj.text4b,{
		0:{opacity:0,transform:"T "+(center-525)+" "+(middle+900)},
		1:{opacity: 1, transform:"T "+(center-525)+" "+(middle+900)},
    	200:{opacity:1, transform:"T "+(center-525)+" "+(middle+200)},
    	1000:{opacity:1, transform:"T "+(center-525)+" "+(middle+200)},
    	1200:{opacity: 0, transform:"T "+(center-525)+" "+(middle+900)}
		}, start+28500, end);
	setAnim(obj.text4ba,{
		0:{opacity:0,transform:"T "+(center-175)+" "+(middle-175)},
		1:{opacity: 1, transform:"T "+(center-175)+" "+(middle-175)},
    	200:{opacity:1, transform:"T "+(center-175)+" "+(middle-175)},
    	600:{opacity:1, transform:"T "+(center-175)+" "+(middle-175)},
    	800:{opacity: 0, transform:"T "+(center-175)+" "+(middle-175)}
		}, start+29500, end-2000);
	setAnim(obj.text4bb,{
		0:{opacity:0,transform:"T "+(center-175)+" "+(middle+75)},
		1:{opacity: 1, transform:"T "+(center-175)+" "+(middle+75)},
    	200:{opacity:1, transform:"T "+(center-175)+" "+(middle+75)},
    	600:{opacity:1, transform:"T "+(center-175)+" "+(middle+75)},
    	800:{opacity: 0, transform:"T "+(center-175)+" "+(middle+75)}
		}, start+29500, end-2000);
	setAnim(obj.text4bc,{
		0:{opacity:0,transform:"T "+(center+275)+" "+(middle-175)},
		1:{opacity: 1, transform:"T "+(center+275)+" "+(middle-175)},
    	200:{opacity:1, transform:"T "+(center+275)+" "+(middle-175)},
    	600:{opacity:1, transform:"T "+(center+275)+" "+(middle-175)},
    	800:{opacity: 0, transform:"T "+(center+275)+" "+(middle-175)}
		}, start+30500, end-2000);
	setAnim(obj.text4bd,{
		0:{opacity:0,transform:"T "+(center+275)+" "+(middle+75)},
		1:{opacity: 1, transform:"T "+(center+275)+" "+(middle+75)},
    	200:{opacity:1, transform:"T "+(center+275)+" "+(middle+75)},
    	600:{opacity:1, transform:"T "+(center+275)+" "+(middle+75)},
    	800:{opacity: 0, transform:"T "+(center+275)+" "+(middle+75)}
		}, start+30500, end-2000);
	setAnim(obj.text5a,{
		0:{opacity:0,transform:"T "+(center-225)+" "+(middle+900)},
		1:{opacity: 1, transform:"T "+(center-225)+" "+(middle+900)},
    	200:{opacity:1, transform:"T "+(center-225)+" "+(middle+100)},
    	1000:{opacity:1, transform:"T "+(center-225)+" "+(middle+100)},
    	1200:{opacity: 0, transform:"T "+(center-225)+" "+(middle+900)}
		}, start+31500, end);
	setAnim(obj.bigXenonIon,{
		0:{opacity:0,transform:"T "+(center+900)+" "+(middle-300)},
		1:{opacity: 1},
    	800:{opacity:1, transform:"T "+(center+125)+" "+(middle-300)},
    	//800:{transform:"T "+(center+125)+" "+(middle-100)},
    	801:{opacity:0}
		}, start+32000, end);
	setAnim(obj.bigXenon,{
		0:{opacity:0,transform:"T "+(center+125)+" "+(middle-300)},
		1:{opacity: 1},
    	800:{opacity:1, transform:"T "+(center+900)+" "+(middle-300)},
    	//800:{transform:"T "+(center+125)+" "+(middle-100)},
    	801:{opacity:0}
		}, start+34974, end);
	setAnim(obj.returningElectron,{
		0:{opacity:0,transform:"T "+(center-900)+" "+(middle-190)},
		100:{opacity: 1},
    	2999:{opacity: 1, transform:"T "+(center+250)+" "+(middle-190)},//collisoin
    	3000:{opacity: 0}
		}, start+32000, end);
	setAnim(obj.text5b,{
		0:{opacity:0,transform:"T "+(center-550)+" "+(middle+900)},
		1:{opacity: 1, transform:"T "+(center-550)+" "+(middle+900)},
    	200:{opacity:1, transform:"T "+(center-550)+" "+(middle+100)},
    	1000:{opacity:1, transform:"T "+(center-550)+" "+(middle+100)},
    	1200:{opacity: 0, transform:"T "+(center-550)+" "+(middle+900)}
		}, start+34000, end);
	setAnim(obj.ionDrive,{
		0:{opacity:0,transform:"S 1 T "+(center-550)+" "+(middle+900)},
		1:{opacity: 1, transform:"S 1 T "+(center-550)+" "+(middle+900)},
    	200:{opacity:1, transform:"S 1 T "+(center-550)+" "+(middle-300)},
    	1000:{opacity:1, transform:"S 1  T "+(center-550)+" "+(middle-300)},
    	1200:{opacity: 0.5, transform:"S 2 T "+(center-1850)+" "+(middle-300)},
    	1201:{opacity: 0, transform:"S 2 T "+(center-1850)+" "+(middle-300)}
		}, start+37000, end);
	setAnim(obj.blue,{
    	0:{opacity:0},
    	200:{opacity:1},
    	600:{opacity:1},
    	700:{opacity:0}
    	}, start+39500, end);
	setAnim(obj.text6,{
		0:{opacity:0,transform:"T "+(center-550)+" "+(middle+900)},
		1:{opacity: 1, transform:"T "+(center-550)+" "+(middle+900)},
    	200:{opacity:1, transform:"T "+(center-550)+" "+(middle+100)},
    	1000:{opacity:1, transform:"T "+(center-550)+" "+(middle+100)},
    	1200:{opacity: 0, transform:"T "+(center-550)+" "+(middle+900)}
		}, start+39500, end);
	setAnim(obj.text7a,{
		0:{opacity:0,transform:"T "+(center)+" "+(middle+900)},
		1:{opacity: 1, transform:"T "+(center)+" "+(middle+900)},
    	200:{opacity:1, transform:"T "+(center)+" "+(middle+100)},
    	1000:{opacity:1, transform:"T "+(center)+" "+(middle+100)},
    	1200:{opacity: 0, transform:"T "+(center)+" "+(middle-900)}
		}, start+42500, end);
	setAnim(obj.text7b,{
		0:{opacity:0,transform:"T "+(center-150)+" "+(middle+900)},
		1:{opacity: 1, transform:"T "+(center-150)+" "+(middle+900)},
    	200:{opacity:1, transform:"T "+(center-150)+" "+(middle+100)},
    	1000:{opacity:1, transform:"T "+(center-150)+" "+(middle+100)},
    	1200:{opacity: 0, transform:"T "+(center-150)+" "+(middle+900)}
		}, start+45500, end);
	setAnim(obj.ds1End,{
		0:{opacity:0, transform: "S 0.75"},
		1:{opacity: 1, along: 0},
		2000:{along: 1},
		2001:{opacity:0}
		},start+45500, end);
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