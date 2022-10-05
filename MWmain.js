
var i = 0; // Start point
var images = [];
var time = 2000;

// Image List
images[0] = 'MWimages/bread.jpg';
images[1] = 'MWimages/burger.jpg';
images[2] = 'MWimages/cappuccino.jpg';
images[3] = 'MWimages/tee.jpg';

// Change Image
function changeImg() {
	document.slide.src = images[i];

	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;




