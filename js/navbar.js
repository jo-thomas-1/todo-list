window.onscroll = function() {scroll_detect()};

function scroll_detect()
{
  	if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5 || window.pageYOffset > 5)
  	{
	    document.getElementById("navbar").style.backgroundColor = "#ffffff";
	    document.getElementById("navbar").style.boxShadow = "0 .5rem 2rem rgba(0,0,0,.55)";
	    document.getElementById("navbar").style.transition = "all 1s";
  	}
  	else
  	{
	    document.getElementById("navbar").style.backgroundColor = "transparent";
	    document.getElementById("navbar").style.boxShadow = "";
  	}
}