var slider = document.querySelector("input[type=range]");
var slider_img = document.querySelector("#slider_img");
var slider_background = document.querySelector("#slider_background");
var switch1 = document.querySelector("#switch");
var switch_circle = document.querySelector("#switch #circle");
var yearly_billing = false;

set_slider();
set_pageviews_value();

slider.oninput = ()=>{
	set_slider();
	set_pageviews_value();
}

slider.addEventListener("mousedown", ()=>{
	slider_img.style.backgroundColor = "hsl(174, 86%, 25%)";
});

slider.addEventListener("mouseup", ()=>{
	slider_img.style.backgroundColor = "hsl(174, 86%, 45%)";
});

switch1.onclick = ()=>{
	var style = getComputedStyle(switch_circle)["right"];
	if(style=="2px"){
		switch_circle.style.animationName = "move_left";
		yearly_billing = false;
	}else if(style=="18px"){
		switch_circle.style.animationName = "move_right";
		yearly_billing = true;
	}
	
	setTimeout(()=>{
		set_pageviews_value();
	},500);
	
	
}


function set_slider(){
	var multiplier = 100/17.3;
	var value = slider.value - 8;
	var position = value*multiplier;
	
	slider_img.style.left = position + "%";
	slider_background.style.backgroundImage = "linear-gradient(to right, hsl(174, 77%, 80%)" + position + "%, hsl(224, 65%, 95%)" + position + "%)";
}

function set_pageviews_value(){
	var value = slider.value;
	var pageviews_value;
	var price_value;
	switch(value){
		case "8":
			pageviews_value = "10K ";
			price_value = 8;
			break;
			
		case "12":
			pageviews_value = "50K ";
			price_value = 12;
			break;	
			
		case "16":
			pageviews_value = "100K ";
			price_value = 16;
			break;
			
		case "20":
			pageviews_value = "500K ";
			price_value = 24;
			break;
			
		case "24":
			pageviews_value = "1M ";
			price_value = 36;
			break;
	}
	
	
	if(yearly_billing){
		price_value = price_value*0.75;
		price_value+=".00";
	}else{
		price_value+=".00";
	}
	
	document.querySelector("#pageviews_value").innerHTML = pageviews_value;
	document.querySelector("#price_value").innerHTML = "$"+ price_value;
}
