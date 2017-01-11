/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
window.onscroll = function () {
    console.log(window.pageYOffset);
    var nav = document.getElementById('second-content');
    if ( window.pageYOffset > 100 ) {
        nav.classList.add("upContent");
    } else {
        nav.classList.remove("upContent");
    }
}