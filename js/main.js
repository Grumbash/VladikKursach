// размер окнна 

var screenWidth = document.documentElement.clientWidth;
var screenHeight = document.documentElement.clientHeight;

console.log(screenWidth);
console.log(screenHeight);

// наши элементы
var mainScreen  = document.querySelector('.main-screen'),
	center		= document.querySelector('.center')
	leftSide	= document.querySelector('.left-side')
	topSide		= document.querySelector('.top-side')
	rightSide	= document.querySelector('.right-side')
	downSide	= document.querySelector('.down-side');
// задаем нашим элементам динамичекую высоту и ширину 

mainScreen.style.width  = screenWidth+"px";
mainScreen.style.height = screenHeight+"px";

center.style.width 		= screenWidth+"px";
center.style.height 	= screenHeight+"px";
center.style.left 		= 0;
center.style.right 		= 0;
center.style.top 		= 0;
center.style.bottom 	= 0;

leftSide.style.width 	= screenWidth/4+"px";
leftSide.style.height	= screenHeight+"px";
leftSide.style.left 	= -screenWidth/4+"px";

rightSide.style.width 	= screenWidth/4+"px";
rightSide.style.height	= screenHeight+"px";
rightSide.style.right 	= -screenWidth/4+"px";

topSide.style.width 	= screenWidth+"px";
topSide.style.height	= screenHeight/4+"px";

downSide.style.width 	= screenWidth+"px";
downSide.style.height	= screenHeight/4+"px";

// ищим кнопки
var leftBtn  = document.querySelector('.left-button')
	topBtn	 = document.querySelector('.top-button')
	rightBtn = document.querySelector('.right-button')
	downBnt	 = document.querySelector('.down-button');

// вещаем прослушку и клики на кнопки
leftBtn.onclick = function () {
	if(center.style.left == 0 || center.style.left == 0+"px"){	
		center.style.left = leftSide.style.width;
		leftSide.style.left = 0+"px";
		center.style.top = "";
		center.style.right = "";
		center.style.bottom = "";
		center.removeEventListener('transitionend', ednAnim);
	}else{
		center.style.left = 0+"px";
		leftSide.style.left = -screenWidth/4+"px";
		center.addEventListener('transitionend', ednAnim);
	}
}

topBtn.onclick = function () {
	if(center.style.top == 0 || center.style.top == 0+"px"){	
		center.style.top = topSide.style.height;
		topSide.style.top = 0+"px";
		center.style.right = "";
		center.style.left = "";
		center.style.bottom = "";
		center.removeEventListener('transitionend', ednAnim);
	}else{
		center.style.top = 0+"px";
		topSide.style.top = -screenHeight/4+"px";
		center.addEventListener('transitionend', ednAnim);
	}
}

rightBtn.onclick = function () {
	if(center.style.right == 0 || center.style.right == 0+"px"){	
		center.style.right = rightSide.style.width;
		rightSide.style.right = 0+"px";
		center.style.top = "";
		center.style.left = "";
		center.style.bottom = "";
		center.removeEventListener('transitionend', ednAnim);
	}else{
		center.style.right = 0+"px";
		rightSide.style.right = -screenWidth/4+"px";	
		center.addEventListener('transitionend', ednAnim);
	}
}

downBnt.onclick = function () {
	if(center.style.bottom == 0 || center.style.bottom == 0+"px"){	
		center.removeEventListener('transitionend', ednAnim);
		center.style.bottom = downSide.style.height;
		downSide.style.bottom = 0+"px";
		center.style.top = "";
		center.style.left = "";
		center.style.right = "";
		
	}else{
		center.addEventListener('transitionend', ednAnim);
		center.style.bottom = 0+"px";
		downSide.style.bottom = -screenHeight/4+"px";
	}
}

function ednAnim(){
	center.style.top = 0;
	center.style.right = 0;
	center.style.bottom = 0;
	center.style.left = 0;
}





