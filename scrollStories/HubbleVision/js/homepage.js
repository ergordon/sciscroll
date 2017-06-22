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
	playLength = 192300, //full length of page
	currentStep = 0, //start at 0

	

	/*
	*	Font Attributes
	*/
	comonTextAttr2 = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 300,"fill":"#fff","font-size":25,"text-anchor": "start"};
	comonTextAttrTitle = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 500,"fill":"#fff","font-size":50,"line-height": 50,"text-anchor": "start"};
	comonTextAttr2B = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 300,"fill":"#000","font-size":25,"text-anchor": "start"};
	comonTextAttrBigW = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 400,"fill":"#fff","font-size":30,"text-anchor": "start"};
	comonTextAttrTitleB = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 500,"fill":"#000","font-size":50,"line-height": 50,"text-anchor": "start"};
	comonTextAttrWordBubble = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 500,"fill":"#000","font-size":20,"line-height": 50,"text-anchor": "start"};
	comonTextAttrBigB = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 500,"fill":"#000","font-size":30,"line-height": 50,"text-anchor": "start"};
	comonTextAttrBeforeSpace = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 500,"fill":"#fff","font-size":50,"line-height": 50,"text-anchor": "start"};
	comonTextAttrSpace = {"font-family":"Lato, Helvetica, Arial, sans-serif","font-weight": 500,"fill":"#fff","font-size":100,"line-height": 50,"text-anchor": "start"};
	r.addGuides(); //add path trace feature
	guids = drawGuids(r, center, height); //draw guides on raphael canvas using center as x and height as y. 

	/*
	*	Declare Objects
	*/
	var obj ={  

		//Page 1
		title: r.image().attr({
			"width": 1152, //fixed width of image 3072 × 2104
			"height": 789, //fixed height of image
			"src": homepageImg+"HubbleVision.gif", //source of image
			guide: guids["title"], //which guide path to take
			along:0, //start at 0
			className: "title"
		}),
		ground: r.image().attr({
			"width": 3000, //fixed width of image 500 × 282
			"height": 499, //fixed height of image
			"src": homepageImg+"ground.png", //source of image
			opacity:0
		}),
		fire: r.image().attr({
			"width": 250, //fixed width of image 500 × 282
			"height": 250, //fixed height of image
			"src": homepageImg+"fire.png", //source of image
			opacity:0
		}),
		smoke: r.image().attr({
			"width": 250, //fixed width of image 3072 × 2104
			"height": 500, //fixed height of image
			"src": homepageImg+"smoke.png", //source of image
			opacity:0
		}),
		leftForest: r.image().attr({
			"width": 501, //fixed width of image 1504 × 2147
			"height": 715, //fixed height of image
			"src": homepageImg+"leftForest.png", //source of image
			opacity:0
		}),
		rightForest: r.image().attr({
			"width": 503, //fixed width of image 1509 × 2421
			"height": 807, //fixed height of image
			"src": homepageImg+"rightForest.png", //source of image
			opacity:0
		}),
		text1: r.text().attr(comonTextAttr2).attr({
			text:"Stargazing is a ritual as old as human culture. \nOn a clear dark night we lift our heads and \ngaze to the skies, suddenly we are touched \nby the splendor of the stars. ",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
			
		}),
		text2: r.text().attr(comonTextAttr2).attr({
			text:"We are the descendents of countless\ngenerations of astronomers, and as it \ndid for our ancestors, the universe dangles\ntantalizing mysteries before our eyes.\nIt dares us to come explore the vast \nopenness of space.",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
		}),
		text3: r.text().attr(comonTextAttr2).attr({
			text:"No one knows who the true inventor\nof the telescope is because in the 17th\ncentury the telescope had been recreated\nall over known world.",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
		}),

		//Page 2
		moon: r.image().attr({
			"width": 200, //fixed width of image 1509 × 2421
			"height": 200, //fixed height of image
			"src": homepageImg+"moon.gif", //source of image
			guide: guids["moon"],
			along:0,
			opacity:0,
		}),
		city: r.image().attr({
			"width": 3000, //fixed width of image 1509 × 2421
			"height": 600, //fixed height of image
			"src": homepageImg+"cityBack.gif", //source of image
			opacity:0
		}),
		galileo: r.image().attr({
			"width": 1000, //fixed width of image 1509 × 2421
			"height": 600, //fixed height of image
			"src": homepageImg+"galileo.gif", //source of image
			opacity:0
		}),
		galileoPrison: r.image().attr({
			"width": 1000, //fixed width of image 1509 × 2421
			"height": 600, //fixed height of image
			"src": homepageImg+"galileoPrison.png", //source of image
			opacity:0
		}),
		
		telescopeG: r.image().attr({
			"width": 250, //fixed width of image 1509 × 2421
			"height": 130, //fixed height of image
			"src": homepageImg+"telescopeG.gif", //source of image
			opacity:0
		}),

		text4: r.text().attr(comonTextAttr2).attr({
			text:"In June 1609, Galileo created his very own\ntelescope, knowing its great potential\nin the field of astronomy.\n",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
		}),
		text5: r.text().attr(comonTextAttr2).attr({
			text:"In November 1609, Galileo pointed his\nimproved telescope with 20x magnification\nand pointed it to the moon. ",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
		}),
		text6: r.text().attr(comonTextAttr2).attr({
			text:"For the first time in history, the moon was\nexamined in great depth and detail.\n",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
		}),
		text7: r.text().attr(comonTextAttr2).attr({
			text:"For an entire month he examined and\ndrew the moon and described that \nresearch in his book Sidereus Nuncius.\n",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
		}),
		text8: r.text().attr(comonTextAttr2).attr({
			text:"Galileo's observations led him to the \nstartling conclusion that the moon is \nanything but perfect. The moon is\nrough with a changing surface.\n",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
		}),
		text9: r.text().attr(comonTextAttr2).attr({
			text:"Galileo made many other great discoveries, \neven proving the sun centered model of the solar system. \nSadly, Galileo’s discovery came ahead of its time \nand he was sentenced to house arrest for \nthe rest of his life by order of the church. \n",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
		}),
		//Page 3

		skyCity: r.image().attr({
			"width": 2000, //fixed width of image 1509 × 2421
			"height": 2000, //fixed height of image
			"src": homepageImg+"skyCity.gif", //source of image
			opacity:0
		}),
		fieldCity: r.image().attr({
			"width": 1500, //fixed width of image 1509 × 2421
			"height": 466, //fixed height of image
			"src": homepageImg+"fieldCity.gif", //source of image
			opacity:0
		}),
		hugeTelescope: r.image().attr({
			"width": 650, //fixed width of image 1509 × 2421
			"height": 549, //fixed height of image
			"src": homepageImg+"hugeTelescope.gif", //source of image
			opacity:0
		}),
		cloud1: r.image().attr({
			"width": 1500, //fixed width of image 1509 × 2421
			"height": 466, //fixed height of image
			"src": homepageImg+"cloud1.gif", //source of image
			opacity:0
		}),
		cloud2: r.image().attr({
			"width": 650, //fixed width of image 1509 × 2421
			"height": 549, //fixed height of image
			"src": homepageImg+"cloud2.gif", //source of image
			opacity:0
		}),

		text10: r.text().attr(comonTextAttrTitleB).attr({
			text:"The early models of telescopes were single lens.",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
		}),
		text11: r.text().attr(comonTextAttr2B).attr({
			text:"It improved our vision of distant objects but had its defects.\nThe thicker the lens the more magnification but the more \nblurred the image will be. A solution at the time was to create\na really long tube for the telescope to increase the focal length.",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
		}),
		text12: r.text().attr(comonTextAttr2B).attr({
			text:"This created telescopes with \nridiculously long focal tubes though!\nSome being as long as 150ft!",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
		}),

		//Page 4
		newtonCity: r.image().attr({
			"width": 1400, //fixed width of image 1509 × 2421
			"height": 800, //fixed height of image
			"src": homepageImg+"newtonCity.gif", //source of image
			opacity:0
		}),
		salesManHand: r.image().attr({
			"width": 2000, //fixed width of image 1509 × 2421
			"height": 400, //fixed height of image
			"src": homepageImg+"salesManHand.gif", //source of image
			opacity:0
		}),
		
		salesManLeftHand: r.image().attr({
			"width": 272, //fixed width of image 1509 × 2421
			"height": 204, //fixed height of image
			"src": homepageImg+"salesManLeftHand.gif", //source of image
			opacity:0
		}),
		
		salesMan: r.image().attr({
			"width": 274, //fixed width of image 1509 × 2421
			"height": 419, //fixed height of image
			"src": homepageImg+"salesMan.gif", //source of image
			opacity:0
		}),
		wordCloud: r.image().attr({
			"width": 250, //fixed width of image 1509 × 2421
			"height": 250, //fixed height of image
			"src": homepageImg+"WordCloud.gif", //source of image
			opacity:0
		}),
		reflectingTelescopeInside: r.image().attr({
			"width": 162, //fixed width of image 1509 × 2421
			"height": 140, //fixed height of image
			"src": homepageImg+"reflectingTelescopeInside.gif", //source of image
			opacity:0
		}),
		reflectingTelescopeOutside: r.image().attr({
			"width": 162, //fxed width of image 1509 × 2421
			"height": 140, //fixed height of image
			"src": homepageImg+"reflectingTelescopeOutside.gif", //source of image
			opacity:0
		}),

		text13: r.text().attr(comonTextAttrTitleB).attr({
			text:"ENOUGH!",
			transform:"T "+(center-70)+" "+(middle),
	        opacity:0
		}),

		text14: r.text().attr(comonTextAttrWordBubble).attr({
			text:"\tHi there! \nSir Isaac Newton here to \nbring you the latest in \ntelescope technology. I \nbring to you today the \nReflecting Telescope.",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		text15: r.text().attr(comonTextAttrWordBubble).attr({
			text:"It does it all! \nIt magnifies and \nit’s compact. The skies \nhave never been clearer!",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		text16: r.text().attr(comonTextAttrWordBubble).attr({
			text:"The way it works is light \ncomes in the focal tube, \nwhere it hits the curved \nmirror, reflecting back to \na mirror directing it to the \neyepiece.",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		text17: r.text().attr(comonTextAttrWordBubble).attr({
			text:"Thus creating a clear, \nsharp image of the stars.",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),

		//Page 5
		observatoryBackground: r.image().attr({
			"width": 2500, //fxed width of image 1509 × 2421
			"height": 2500, //fixed height of image
			"src": homepageImg+"observatorybackground.jpg", //source of image
			opacity:0
		}),
		observatoryBackgroundTransform: r.image().attr({
			"width": 2500, //fxed width of image 1509 × 2421
			"height": 2500, //fixed height of image
			"src": homepageImg+"observatoryBackgroundTransform.jpg", //source of image
			opacity:0
		}),
		mountains: r.image().attr({
			"width": 1000, //fxed width of image 1509 × 2421
			"height": 600, //fixed height of image
			"src": homepageImg+"mountains.gif", //source of image
			opacity:0
		}),
		mountainClouds: r.image().attr({
			"width": 600, //fxed width of image 1509 × 2421
			"height": 400, //fixed height of image
			"src": homepageImg+"mountainClouds.gif", //source of image
			opacity:0,
			guide: guids["mountainClouds2"],
			along:0,
		}),
		mountainClouds2: r.image().attr({
			"width": 600, //fxed width of image 1509 × 2421
			"height": 400, //fixed height of image
			"src": homepageImg+"mountainClouds2.gif", //source of image
			opacity:0,
			guide: guids["mountainClouds2"],
			along:0,
		}),
		observatory: r.image().attr({
			"width": 2500, //fxed width of image 1509 × 2421
			"height": 2500, //fixed height of image
			"src": homepageImg+"observatory.gif", //source of image
			opacity:0
		}),
		
		text18: r.text().attr(comonTextAttrBigB).attr({
			text:"Imagine that somewhere in the world, \nprobably atop a mountain well away from light pollution, \na group of astronomers, engineers, electronic experts \nangle a telescope towards the sky for the first time.",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		text19: r.text().attr(comonTextAttrBigB).attr({
			text:"Everything has been built to specification, \nthe mirror is ground correctly, \nand the systems are checked for operation.\n",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		text20: r.text().attr(comonTextAttrBigB).attr({
			text:"The telescope will open its eyes to the universe,\nbearing witness to all of its wonders and beauty. ",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		text21: r.text().attr(comonTextAttrBigB).attr({
			text:"Years of planning, building, tweaking, experimenting\nall  boils down to one moment of truth, the “first light”",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		text22: r.text().attr(comonTextAttrBigW).attr({
			text:"But telescopes on Earth face a major obstacle.\nThe Earth's atmosphere is a fluid, chaotic soup of gas and dust. \nIt blurs visible light, causing the stars twinkle. ",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		text23: r.text().attr(comonTextAttrBeforeSpace).attr({
			text:"It was time to build\n an observatory in",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		text24: r.text().attr(comonTextAttrSpace).attr({
			text:"SPACE!",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		Discovery: r.image().attr({
			"width": 500, //fxed width of image 1509 × 2421
			"height": 558, //fixed height of image
			"src": homepageImg+"discovery.png", //source of image
			opacity:0,
			guide: guids["discovery"], //which guide path to take
			along:0 //start at 0
		}),
		text25: r.text().attr(comonTextAttrBigW).attr({
			text:"Space Shuttle Discovery made the frightening\njourney sending the Hubble to space.",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		text26: r.text().attr(comonTextAttrBigW).attr({
			text:"May 20th, 1990 was the Hubble’s “First Light.”\nIt was nothing like any other telescopes first light.\nIt was an exhilarating and confusing time, and the \nculmination of years of planning, development \nand work by more than thousands of people. ",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		Hubble: r.image().attr({
			"width": 500, //fxed width of image 1509 × 2421
			"height": 558, //fixed height of image
			"src": homepageImg+"Hubble.png", //source of image
			opacity:0,
			guide: guids["hubble"], //which guide path to take
			along:0 //start at 0
		}),
		neb1: r.image().attr({
			"width": 2000, //fxed width of image 1509 × 2421
			"height": 2000, //fixed height of image
			"src": homepageImg+"neb1.jpg", //source of image
			opacity:0
		}),
		neb2: r.image().attr({
			"width": 2000, //fxed width of image 1509 × 2421
			"height": 2000, //fixed height of image
			"src": homepageImg+"neb2.jpg", //source of image
			opacity:0
		}),
		neb3: r.image().attr({
			"width": 2000, //fxed width of image 1509 × 2421
			"height": 2000, //fixed height of image
			"src": homepageImg+"neb3.jpg", //source of image
			opacity:0
		}),
		Overlay: r.image().attr({
			"width": 2000, //fxed width of image 1509 × 2421
			"height": 300, //fixed height of image
			"src": homepageImg+"overlay.png", //source of image
			opacity:0,
		}),
		text27: r.text().attr(comonTextAttrBigW).attr({
			text:"After a very rocky beginning, \nthe Hubble has provided us with images \nthat have become cosmic icons. ",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		text28: r.text().attr(comonTextAttrBigW).attr({
			text:"In 1995, Robert Williams proposed we point the Hubble \nat the darkest, most void part of the sky and see what we get. \nThe results showed us the seemingly infinite span of the universe \nand the millions and millions of galaxies that make the cosmic web. ",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		text29: r.text().attr(comonTextAttrBigW).attr({
			text:"Each scene exposes the tapestry of the universe. \nThe dynamic interlace between matter and energy \nthat paints our view of the cosmos. ",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
		text30: r.text().attr(comonTextAttrBigW).attr({
			text:"The Hubble has lived well beyond its expected life. \nIt has provided us with hundreds of stunning views of the universe \nthat have become cosmic icons. New technology is added to the \nHubble to keep it in touch with discoveries on earth. ",
			transform:"T "+(center-70)+" "+(middle),
			opacity:0,
		}),
// 
		
	};

	makeAnim(obj, center,height);
	//new stuff
	obj.text30.node.onclick = function () {
		console.log("The Hubble has gone well passed its expected life span because it has been consistantly modified to compare with the technology back on Earth.")
	}
	obj.neb3.node.onclick = function () {
		console.log("Orion Nebula: Also known as M42, the wispy Orion Nebula is a mass of glowing gas surrounding about 3,000 young stars at the edge of an immense molecular cloud.")
	}
	
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
		title: [
		["M", center-620, middle-600],
		["L", center-620, -1000]
		],
		moon: [
		["M", center-700, middle+100],
		["C", center-700,  middle+100, center,  middle-900, center+900,  middle+250],
		],
		mountainClouds2: [
		["M", center+1500, middle-50],
		["L", center-1500, middle-50],
		["M", center+1500, middle],
		["L", center-1500, middle],
		],
		discovery: [
		["M", center+300, middle+100],
		["C", center+300,  middle+100, center-1500,  middle-600, center-3000,  middle-600],
		],
		hubble: [
		["M", center-3000, middle-600],
		["C", center-3000,  middle-900, center-1500,  middle-900, center+1000,  middle+300],
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
	setAnim(obj.title,{1000:{along:0}, 6400:{along:1}},start, end);

	//Page 1
	setAnim(obj.ground,{
		0:{opacity:1, transform:"T "+(center-775)+" "+(middle+450)},
		6400:{opacity:1,transform:"T "+(center-775)+" "+(middle+50)},
		18000:{opacity:1,transform:"T "+(center-775)+" "+(middle+50)},
		19000:{opacity:1,transform:"T "+(center-2175)+" "+(middle+600)}
	},start+100, 19000);

	setAnim(obj.smoke,{
		0:{opacity:1, transform:"T "+(center-150)+" "+(middle+150)},
		6400:{opacity:1,transform:"T "+(center-150)+" "+(middle-350)},
		18000:{opacity:1,transform:"T "+(center-150)+" "+(middle-350)},
		19000:{opacity:1,transform:"T "+(center-1650)+" "+(middle+200)},
	},start+100, 19000);

	setAnim(obj.fire,{
		0:{opacity:1, transform:"T "+(center-150)+" "+(middle+550)},
		6400:{opacity:1,transform:"T "+(center-150)+" "+(middle+50)},
		18000:{opacity:1,transform:"T "+(center-150)+" "+(middle+50)},
		19000:{opacity:1, transform:"T "+(center-1650)+" "+(middle+600)}
	},start+100, 19000);

	setAnim(obj.leftForest,{
		0:{opacity:1, transform:"T "+(center-1200)+" "+(middle+350)},
		6400:{opacity:1,transform:"T "+(center-800)+" "+(middle-200)},
		18000:{opacity:1,transform:"T "+(center-800)+" "+(middle-200)},
		19000:{opacity:1,transform:"T "+(center-2300)+" "+(middle+350)}
	},start+100, 19000);

	setAnim(obj.rightForest,{
		0:{opacity:1, transform:"T "+(center+600)+" "+(middle+350)},
		6400:{opacity:1,transform:"T "+(center+300)+" "+(middle-200)},
		18000:{opacity:1,transform:"T "+(center+300)+" "+(middle-200)},
		19000:{opacity:1, transform:"T "+(center-1200)+" "+(middle+350),}
	},start+100, 19000);

	setAnim(obj.text1,{
    	0:{opacity:0,transform:"T "+(center+600)+" "+(middle-250)},
    	400:{opacity:1,transform:"T "+(center+80)+" "+(middle-250)},
    	600:{transform:"T "+(center+80)+" "+(middle-250)},
		800:{transform:"T "+(center+80)+" "+(-418)}	
    }, start+9000, 4500);

    setAnim(obj.text2,{
    	0:{opacity:0,transform:"T "+(center+600)+" "+(middle-250)},
    	400:{opacity:1,transform:"T "+(center+80)+" "+(middle-250)},
    	600:{transform:"T "+(center+80)+" "+(middle-250)},
		800:{transform:"T "+(center+80)+" "+(-418)}	
    }, start+13000, 4500);

    setAnim(obj.text3,{
    	0:{opacity:0,transform:"T "+(center+600)+" "+(middle-250)},
    	400:{opacity:1,transform:"T "+(center+80)+" "+(middle-250)},
    	600:{transform:"T "+(center+80)+" "+(middle-250)},
		800:{transform:"T "+(center+80)+" "+(-418)}	
    }, start+17000, 4500);
	
	//Page 2

	setAnim(obj.moon.toFront(),{ 
		0:{opacity:0, along:0},
		1:{opacity:1},
		33000:{opacity:1, along:1},//apple hits newtons head
		34000:{opacity:1},
		34001:{opacity:0},
	},start+23000, 33000);//make sure end of apple is same as end of last script

	setAnim(obj.city.toFront(),{
		0:{opacity:1, transform:"T "+(center-800)+" "+(middle+350)},
		6400:{opacity:1,transform:"T "+(center-800)+" "+(middle-200)},
		33000:{opacity:1,transform:"T "+(center-800)+" "+(middle-200)},
		34000:{opacity:1, transform:"T "+(center-800)+" "+(middle+350),}
	},start+17000, 34000);

	setAnim(obj.galileo.toFront(),{
		0:{opacity:1, transform:"T "+(center+600)+" "+(middle+350)},
		6400:{opacity:1,transform:"T "+(center-300)+" "+(middle-200)},
		33000:{opacity:1,transform:"T "+(center-300)+" "+(middle-200)},
		36700:{opacity:1, transform:"T "+(center+1200)+" "+(middle-200),}
	},start+17000, 36700);

	setAnim(obj.telescopeG.toFront(),{
		0:{opacity:1, transform:"T "+(center+600)+" "+(middle+350)},
		6400:{opacity:1,transform:"T "+(center+200)+" "+(middle-80)},
		33000:{opacity:1,transform:"T "+(center+200)+" "+(middle-80)},
		34000:{opacity:1, transform:"T "+(center+1200)+" "+(middle-200)}
	},start+17000, 34000);



	setAnim(obj.galileoPrison.toFront(),{
		0:{opacity:1, transform:"T "+(center+200)+" "+(middle-200)},
		6400:{opacity:1,transform:"T "+(center-300)+" "+(middle-200)},
		12000:{opacity:1,transform:"T "+(center-300)+" "+(middle-200)},
		13000:{opacity:1, transform:"T "+(center+100)+" "+(middle-200),}
	},start+38000, 13000);

	setAnim(obj.text4.toFront(),{
    	0:{opacity:0,transform:"T "+(center-600)+" "+(middle+650)},
    	400:{opacity:1,transform:"T "+(center-600)+" "+(middle+150)},
    	600:{transform:"T "+(center-600)+" "+(middle+150)},
		800:{transform:"T "+(center-1200)+" "+(middle+150)}	
    }, start+19000, 8000);

    setAnim(obj.text5.toFront(),{
    	0:{opacity:0,transform:"T "+(center+600)+" "+(middle-250)},
    	400:{opacity:1,transform:"T "+(center+80)+" "+(middle-250)},
    	600:{transform:"T "+(center+80)+" "+(middle-250)},
		800:{transform:"T "+(center+80)+" "+(-418)}	
    }, start+23000, 8000);

    setAnim(obj.text6.toFront(),{
    	0:{opacity:0,transform:"T "+(center-600)+" "+(middle+650)},
    	400:{opacity:1,transform:"T "+(center-600)+" "+(middle+150)},
    	600:{transform:"T "+(center-600)+" "+(middle+150)},
		800:{transform:"T "+(center-1200)+" "+(middle+150)}	
    }, start+27000, 8000);

    setAnim(obj.text7.toFront(),{
    	0:{opacity:0,transform:"T "+(center-600)+" "+(middle+650)},
    	400:{opacity:1,transform:"T "+(center-600)+" "+(middle+150)},
    	600:{transform:"T "+(center-600)+" "+(middle+150)},
		800:{transform:"T "+(center-1200)+" "+(middle+150)}	
    }, start+31000, 8000);

    setAnim(obj.text8.toFront(),{
    	0:{opacity:0,transform:"T "+(center-600)+" "+(middle+650)},
    	400:{opacity:1,transform:"T "+(center-600)+" "+(middle+150)},
    	600:{transform:"T "+(center-600)+" "+(middle+150)},
		800:{transform:"T "+(center-1200)+" "+(middle+150)}	
    }, start+35000, 8000);

    setAnim(obj.text9.toFront(),{
    	0:{opacity:0,transform:"T "+(center-550)+" "+(middle+650)},
    	400:{opacity:1,transform:"T "+(center-550)+" "+(middle-200)},
    	600:{transform:"T "+(center-550)+" "+(middle-200)},
		800:{transform:"T "+(center-1800)+" "+(middle-200)}	
    }, start+40000, 8000);

//Page 3
	setAnim(obj.skyCity,{
		0:{opacity:0, transform:"T "+(center-800)+" "+(middle-400)},
		6400:{opacity:1,transform:"T "+(center-800)+" "+(middle-400)},
		27000:{opacity:1,transform:"T "+(center-800)+" "+(middle-400)},
		28000:{opacity:0, transform:"T "+(center-800)+" "+(middle-400),}
	},start+50000, 28000);

	setAnim(obj.fieldCity,{
		0:{opacity:1, transform:"T "+(center-800)+" "+(middle+400)},
		6400:{opacity:1,transform:"T "+(center-800)+" "+(middle-100)},
		27000:{opacity:1,transform:"T "+(center-800)+" "+(middle-100)},
		28000:{opacity:1, transform:"T "+(center-800)+" "+(middle+400),}
	},start+50000, 28000);

	setAnim(obj.hugeTelescope,{
		0:{opacity:1, transform:"T "+(center-200)+" "+(middle+600)},
		6400:{opacity:1,transform:"T "+(center-200)+" "+(middle-200)},
		18000:{opacity:1,transform:"T "+(center-200)+" "+(middle-200)},
		30000:{opacity:1, transform:"T "+(center+12000)+" "+(middle-200)+"R 1800",}
	},start+50000, 30000);

	setAnim(obj.cloud1,{
		0:{opacity:1, transform:"T "+(center+800)+" "+(middle-500)},
		6400:{opacity:1,transform:"T "+(center-800)+" "+(middle-500)},
		12000:{opacity:1,transform:"T "+(center-800)+" "+(middle-500)},
		13000:{opacity:1, transform:"T "+(center+800)+" "+(middle-500),}
	},start+50000, 13000);

	setAnim(obj.cloud2,{
		0:{opacity:1, transform:"T "+(center-1200)+" "+(middle-500)},
		6400:{opacity:1,transform:"T "+(center-700)+" "+(middle-500)},
		12000:{opacity:1,transform:"T "+(center-700)+" "+(middle-500)},
		13000:{opacity:1, transform:"T "+(center-1200)+" "+(middle-500),}
	},start+50000, 13000);

	setAnim(obj.text10,{
    	0:{opacity:0,transform:"T "+(center-1200)+" "+(middle-250)},
    	400:{opacity:1,transform:"T "+(center-600)+" "+(middle-250)},
    	600:{transform:"T "+(center-600)+" "+(middle-250)},
		800:{opacity:0,transform:"T "+(center-1200)+" "+(middle-250)}	
    }, start+48000, 8000);

    setAnim(obj.text11,{
    	0:{opacity:0,transform:"T "+(center-550)+" "+(middle+650)},
    	400:{opacity:1,transform:"T "+(center-550)+" "+(middle-275)},
    	600:{transform:"T "+(center-550)+" "+(middle-275)},
		800:{transform:"T "+(center-1800)+" "+(middle-275)}	
    }, start+55000, 8000);

    setAnim(obj.text12,{
    	0:{opacity:0,transform:"T "+(center-600)+" "+(middle+650)},
    	400:{opacity:1,transform:"T "+(center-600)+" "+(middle+150)},
    	600:{transform:"T "+(center-600)+" "+(middle+150)},
		800:{transform:"T "+(center-1200)+" "+(middle+150)}	
    }, start+57000, 8000);

    setAnim(obj.salesManHand,{
		0:{opacity:0, transform:"T "+(center-2600)+" "+(middle)},
		1:{opacity:1}, 
		5900:{opacity:1,transform:"T "+(center-2000)+" "+(middle)},
		9000:{opacity:1,transform:"T "+(center-2000)+" "+(middle)},
		13000:{opacity:1, transform:"T "+(center-1000)+" "+(middle),},
		15000:{opacity:1, transform:"T "+(center-2600)+" "+(middle),},
		15001:{opacity:0}
	},start+63000, 15000);

	setAnim(obj.text13,{
    	0:{opacity:0,transform:"T "+(center-400)+" "+(middle-200)},
    	400:{opacity:1,transform:"T "+(center-400)+" "+(middle-200)},
    	600:{transform:"T "+(center-400)+" "+(middle-200)},
		800:{opacity:0,transform:"T "+(center-400)+" "+(middle-200)}	
    }, start+63000, 8000);

    //page 4
    setAnim(obj.newtonCity,{
		0:{opacity:0, transform:"T "+(center+700)+" "+(middle-400)},
		1:{opacity:1},
		1900:{opacity:1,transform:"T "+(center-700)+" "+(middle-400)},
		9000:{opacity:1,transform:"T "+(center-700)+" "+(middle-400)},
		34000:{opacity:1, transform:"T "+(center-700)+" "+(middle-400),},
		35000:{opacity:0, transform:"T "+(center-700)+" "+(middle-400),}
	},start+76000, 35000);

    setAnim(obj.salesMan,{
		0:{opacity:0, transform:"T "+(center-400)+" "+(middle+500)},
		1:{opacity:1},
		5900:{opacity:1,transform:"T "+(center-400)+" "+(middle+50)},
		9000:{opacity:1,transform:"T "+(center-400)+" "+(middle+50)},
		34000:{opacity:1, transform:"T "+(center-400)+" "+(middle+50),},
		35000:{opacity:0, transform:"T "+(center-400)+" "+(middle+500),}
	},start+75000, 35000);

	setAnim(obj.salesManLeftHand,{
		0:{opacity:0, transform:"T "+(center-250)+" "+(middle+650)},
		1:{opacity:1},
		5900:{opacity:1,transform:"T "+(center-250)+" "+(middle+200)},
		9000:{opacity:1,transform:"T "+(center-220)+" "+(middle+125)+"R -55"},
		34000:{opacity:1, transform:"T "+(center-220)+" "+(middle+125)+"R -55",},
		35000:{opacity:0, transform:"T "+(center-250)+" "+(middle+650),}
	},start+75000, 35000);

	setAnim(obj.wordCloud,{
		0:{opacity:0, transform:"T "+(center-200)+" "+(middle-150)},
		1:{opacity:1},
		6400:{opacity:1,transform:"T "+(center-200)+" "+(middle-150)},
		27000:{opacity:1,transform:"T "+(center-200)+" "+(middle-150)},
		28000:{opacity:0, transform:"T "+(center-200)+" "+(middle-150),}
	},start+81000, 28000);

	setAnim(obj.reflectingTelescopeInside,{
		0:{opacity:0, transform:"T "+(center-50)+" "+(middle-1500)},
		1:{opacity:1},
		6400:{opacity:1,transform:"T "+(center-20)+" "+(middle+70)},
		28000:{opacity:1,transform:"T "+(center-20)+" "+(middle+70)},
		29000:{opacity:0, transform:"T "+(center-20)+" "+(middle+800),}
	},start+81000, 29000);

	setAnim(obj.reflectingTelescopeOutside,{
		0:{opacity:0, transform:"T "+(center-50)+" "+(middle-1500)},
		1:{opacity:1},
		6400:{opacity:1,transform:"T "+(center-20)+" "+(middle+70)},
		15000:{opacity:1,transform:"T "+(center-20)+" "+(middle+70)},
		16000:{opacity:0, transform:"T "+(center-20)+" "+(middle+70),}
	},start+81000, 16000);

	setAnim(obj.text14,{
    	0:{opacity:0,transform:"T "+(center-180)+" "+(middle-55)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-180)+" "+(middle-55)},
    	1200:{opacity:1,transform:"T "+(center-180)+" "+(middle-55)},
		1300:{opacity:0,transform:"T "+(center-180)+" "+(middle-55)}	
    }, start+81000, 8000);

    setAnim(obj.text15,{
    	0:{opacity:0,transform:"T "+(center-180)+" "+(middle-55)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-180)+" "+(middle-55)},
    	1200:{opacity:1,transform:"T "+(center-180)+" "+(middle-55)},
		1300:{opacity:0,transform:"T "+(center-180)+" "+(middle-55)}	
    }, start+88890, 6300);

    setAnim(obj.text16,{
    	0:{opacity:0,transform:"T "+(center-180)+" "+(middle-55)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-180)+" "+(middle-55)},
    	1200:{opacity:1,transform:"T "+(center-180)+" "+(middle-55)},
		1300:{opacity:0,transform:"T "+(center-180)+" "+(middle-55)}	
    }, start+96000, 6300);

    setAnim(obj.text17,{
    	0:{opacity:0,transform:"T "+(center-180)+" "+(middle-55)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-180)+" "+(middle-55)},
    	1200:{opacity:1,transform:"T "+(center-180)+" "+(middle-55)},
		1300:{opacity:0,transform:"T "+(center-180)+" "+(middle-55)}	
    }, start+102000, 6300);

    //Page 5
    setAnim(obj.observatoryBackground,{
		0:{opacity:0, transform:"T "+(center-800)+" "+(middle-400)},
		2000:{opacity:1},
		19000:{opacity:1},
		//19001:{opacity:0}
	},start+110000, 19000);

	setAnim(obj.observatoryBackgroundTransform,{
		0:{opacity:0, transform:"T "+(center-800)+" "+(middle-400)},
		2000:{opacity:0},
		19000:{opacity:1},
		//19001:{opacity:0}
	},start+134000, 19000);

	setAnim(obj.mountains,{
		0:{opacity:0, transform:"T "+(center-650)+" "+(middle+1000)},//fix this by making it start later and make the mountains go up fast but not faster than the mouintain
		1:{opacity:1},
		8400:{opacity:1, transform:"T "+(center-650)+" "+(middle-200)},
		9000:{opacity:1, transform:"T "+(center-650)+" "+(middle-200)},
		14400:{opacity:1, transform:"T "+(center-650)+" "+(middle+1000)},
		19000:{opacity:1},
		//19001:{opacity:0}
	},start+110000, 19000);

	setAnim(obj.mountainClouds,{
		0:{opacity:0, along:0},1:{opacity:1},33000:{opacity:1, along:1},33001:{opacity:0}
	},start+112000, 33000);

	setAnim(obj.mountainClouds2,{ 
		0:{opacity:0, along:0},1:{opacity:1},33000:{opacity:1, along:1},33001:{opacity:0}
	},start+120000, 33000);

    setAnim(obj.observatory,{
		0:{opacity:0, transform:"T "+(center-700)+" "+(middle+3800)},
		1:{opacity:1},
		6400:{opacity:1,transform:"T "+(center-700)+" "+(middle-1400)},
		8400:{opacity:1,transform:"T "+(center-700)+" "+(middle-1400)},
		18000:{opacity:1,transform:"T "+(center-1800)+" "+(middle-300)},
		30000:{opacity:1,transform:"T "+(center-1800)+" "+(middle-300)},
		34000:{opacity:1,transform:"T "+(center-1800)+" "+(middle+800)},
	},start+110000, 34000);

	setAnim(obj.text18,{
    	0:{opacity:0,transform:"T "+(center-600)+" "+(middle-90)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-600)+" "+(middle-90)},
    	1200:{opacity:1,transform:"T "+(center-600)+" "+(middle-90)},
		1300:{opacity:0,transform:"T "+(center-600)+" "+(middle-90)}	
    }, start+111000, 6300);

    setAnim(obj.text19,{
    	0:{opacity:0,transform:"T "+(center-1200)+" "+(middle-90)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-600)+" "+(middle-90)},
    	1200:{opacity:1,transform:"T "+(center-600)+" "+(middle-90)},
		1300:{opacity:0,transform:"T "+(center-1200)+" "+(middle-90)}	
    }, start+119000, 6300);

    setAnim(obj.text20,{
    	0:{opacity:0,transform:"T "+(center-1200)+" "+(middle-90)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-600)+" "+(middle-90)},
    	1200:{opacity:1,transform:"T "+(center-600)+" "+(middle-90)},
		1300:{opacity:0,transform:"T "+(center-1200)+" "+(middle-90)}	
    }, start+128000, 6300);

    setAnim(obj.text21,{
    	0:{opacity:0,transform:"T "+(center-1200)+" "+(middle-90)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-600)+" "+(middle-90)},
    	1200:{opacity:1,transform:"T "+(center-600)+" "+(middle-90)},
		1300:{opacity:0,transform:"T "+(center-1200)+" "+(middle-90)}	
    }, start+134000, 6300);
    
    setAnim(obj.text22,{
    	0:{opacity:0,transform:"T "+(center-1200)+" "+(middle-90)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-600)+" "+(middle-90)},
    	1200:{opacity:1,transform:"T "+(center-600)+" "+(middle-90)},
		1300:{opacity:0,transform:"T "+(center-1200)+" "+(middle-90)}	
    }, start+144000, 6300);

    setAnim(obj.text23,{
    	0:{opacity:0,transform:"T "+(center-1200)+" "+(middle-90)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-200)+" "+(middle-90)},
    	1200:{opacity:1,transform:"T "+(center-200)+" "+(middle-90)},
		1300:{opacity:0,transform:"T "+(center-1200)+" "+(middle-90)}	
    }, start+150000, 6300);

    setAnim(obj.text24,{
    	0:{opacity:0,transform:"T "+(center-1200)+" "+(middle+30)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-180)+" "+(middle+30)},
    	1200:{opacity:1,transform:"T "+(center-180)+" "+(middle+30)},
		1300:{opacity:0,transform:"T "+(center-1200)+" "+(middle+30)}	
    }, start+150000, 6300);

    setAnim(obj.Discovery,{

		0:{opacity:0, along:0},
		1:{opacity:1, transform:"R -90"},
		33000:{opacity:1, along:1},
		33001:{opacity:0}
		//0:{opacity:0, transform:"R -25 T "+(center+300)+" "+(middle)},
		//1:{opacity:1,transform:"R -25 T "+(center+300)+" "+(middle)},
		//18000:{opacity:1,transform:"T "+(center-3000)+" "+(middle-600)+"R -90"},
	},start+154000, 33000);

 	setAnim(obj.text25,{
    	0:{opacity:0,transform:"T "+(center-1200)+" "+(middle-200)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-400)+" "+(middle-200)},
    	1200:{opacity:1,transform:"T "+(center-400)+" "+(middle-200)},
		1300:{opacity:0,transform:"T "+(center-1200)+" "+(middle-200)}	
    }, start+156300, 6000);

 	setAnim(obj.text26,{
    	0:{opacity:0,transform:"T "+(center+500)+" "+(middle+200)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-100)+" "+(middle+200)},
    	1200:{opacity:1,transform:"T "+(center-100)+" "+(middle+200)},
		1300:{opacity:0,transform:"T "+(center+500)+" "+(middle+200)}	
    }, start+162300, 6000);

 	setAnim(obj.Hubble,{

		0:{opacity:0, along:0},
		1:{opacity:1,},
		33000:{opacity:1, along:1},
		33001:{opacity:0}
		//0:{opacity:0, transform:"R -25 T "+(center+300)+" "+(middle)},
		//1:{opacity:1,transform:"R -25 T "+(center+300)+" "+(middle)},
		//18000:{opacity:1,transform:"T "+(center-3000)+" "+(middle-600)+"R -90"},
	},start+155600, 30000);

	setAnim(obj.Overlay,{
		0:{opacity:0, transform:"T "+(center-350)+" "+(middle-150)},
		1:{opacity:1, transform:"T "+(center-350)+" "+(middle-150)},
		18000:{opacity:1},
		18001:{opacity:0}
	},start+174300, 18000);

	setAnim(obj.neb1,{
		0:{opacity:0, transform:"T "+(center-800)+" "+(middle-400)},
		2000:{opacity:1},
		19000:{opacity:1, transform:"T "+(center-800)+" "+(middle-600)},
		//19001:{opacity:0}
	},start+174300, 6000);

	setAnim(obj.neb2,{
		0:{opacity:0, transform:"T "+(center-800)+" "+(middle-600)},
		2000:{opacity:1},
		19000:{opacity:1, transform:"T "+(center-900)+" "+(middle-500)},
		//19001:{opacity:0}
	},start+180300, 3000);

	setAnim(obj.neb3,{
		0:{opacity:0, transform:"T "+(center-800)+" "+(middle-400)},
		2000:{opacity:1},
		19000:{opacity:1,transform:"T "+(center-1000)+" "+(middle-600)},
		//19001:{opacity:0}
	},start+185600, 4000);

	setAnim(obj.text27,{
    	0:{opacity:0,transform:"T "+(center+500)+" "+(middle+100)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-100)+" "+(middle+100)},
    	1200:{opacity:1,transform:"T "+(center-100)+" "+(middle+100)},
		1300:{opacity:0,transform:"T "+(center+500)+" "+(middle+100)}	
    }, start+168300, 6000);
    setAnim(obj.text28,{
    	0:{opacity:0,transform:"T "+(center-300)+" "+(middle)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-300)+" "+(middle)},
    	1200:{opacity:1,transform:"T "+(center-300)+" "+(middle)},
		1300:{opacity:0,transform:"T "+(center-300)+" "+(middle)}	
    }, start+174300, 6000);
    setAnim(obj.text29,{
    	0:{opacity:0,transform:"T "+(center-300)+" "+(middle)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-300)+" "+(middle)},
    	1200:{opacity:1,transform:"T "+(center-300)+" "+(middle)},
		1300:{opacity:0,transform:"T "+(center-300)+" "+(middle)}	
    }, start+180300, 6000);
    setAnim(obj.text30,{
    	0:{opacity:0,transform:"T "+(center-300)+" "+(middle)},
    	1:{opacity:1},
    	400:{transform:"T "+(center-300)+" "+(middle)},
    	1200:{opacity:1,transform:"T "+(center-300)+" "+(middle)},
		1300:{opacity:0,transform:"T "+(center-300)+" "+(middle)}	
    }, start+186300, 6000);

}

//automatic scrolling
var scrollSetting = false,
	scrollSpeed = 60;

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
	scrollSpeed = scrollSpeed+20;
	console.log(scrollSpeed);
}
}
function pageScrollMinus()
{
	if(scrollSpeed > 0)
	{
	scrollSpeed = scrollSpeed-20;
	console.log(scrollSpeed);
}
}
//

	