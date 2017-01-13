/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
	document.getElementById("mySidenavContact").style.width = "100%";
}
function openContactNav() {
	document.getElementById("mySidenavContact").style.width = "100%";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function closeContactNav() {
    document.getElementById("mySidenavContact").style.width = "0";
}
function pageScroll() {
	window.scrollTo(0,0); 
    scrolldelay = setTimeout('pageScroll()',200);
	clearTimeout(scrolldelay);
}
window.onscroll = function () {
    console.log(window.pageYOffset);
    var firstNav = document.getElementById('second-content');
	var secondNav = document.getElementById('third-content');
	var thirdNav = document.getElementById('fourth-content');
	var fourthdNav = document.getElementById('fifth-content');
	
	var removeClass = [ firstNav, secondNav];
    if (screen.width > 1024 & window.pageYOffset > 50) {
        firstNav.classList.add("upContent");
    }
	else{
		firstNav.classList.remove("upContent");
  }
	if ( window.pageYOffset > 250 ) {
        secondNav.classList.add("upContent");
    }
	else{
        secondNav.classList.remove("upContent");
    }
	if ( window.pageYOffset > 550 ) {
        thirdNav.classList.add("upContent");
    }
	else{
        thirdNav.classList.remove("upContent");
    }
	if ( window.pageYOffset > 850 ) {
        fourthNav.classList.add("upContent");
    }
	else{
        thirdNav.classList.remove("upContent");
    }
	if ( window.pageYOffset < 320 ) {
       document.getElementById("scrollbtn").style.display = "none";
    }
	else{
        document.getElementById("scrollbtn").style.display = "block";
    }
}