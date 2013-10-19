//©Xara Ltd
if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML;var ml=tt.match(/["']([^'"]*)screen.js["']/i);if(ml && ml.length > 1) loc=ml[1];}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".screen_menu {z-index:999;border-color:#000000;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#cccccc;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write(".screen_plain, a.screen_plain:link, a.screen_plain:visited{text-align:left;background-color:#cccccc;color:#000000;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:8pt;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("a.screen_plain:hover, a.screen_plain:active{background-color:#cccccc;color:#000000;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:8pt;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0xcccccc;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("screen_left.gif",18,6,2,0,0)
mainMenuItem("screen_b1",".gif",18,55,"http://www.horsestomp.com","","Home",2,2,"screen_plain");
mainMenuItem("screen_b2",".gif",18,55,"http://www.horsestomp.com/donors.htm","","Donors",2,2,"screen_plain");
mainMenuItem("screen_b3",".gif",18,55,"http://www.horsestomp.com/cows.htm","","Cows",2,2,"screen_plain");
mainMenuItem("screen_b4",".gif",18,55,"http://www.horsestomp.com/bulls.htm","","Bulls",2,2,"screen_plain");
endMainMenu("screen_right.gif",18,6)

startSubmenu("screen_b3","screen_menu",94);
submenuItem("Adults","http://www.fayettefbc.org/ministries.htm#adult","","screen_plain");
submenuItem("Youth","http://www.fayettefbc.org/ministries.htm#youth","","screen_plain");
submenuItem("Children","http://www.fayettefbc.org/ministries.htm#children","","screen_plain");
submenuItem("Church Library","http://www.fayettefbc.org/ministries.htm#churchlibrary","","screen_plain");
endSubmenu("screen_b3");

startSubmenu("screen_b2","screen_menu",145);
submenuItem("Meet The Staff","http://www.fayettefbc.org/staff.htm","","screen_plain");
submenuItem("What We Believe at FFBC","http://www.fayettefbc.org/about.htm#believe","","screen_plain");
submenuItem("Baptist Ordinances","http://www.fayettefbc.org/about.htm#baptist","","screen_plain");
endSubmenu("screen_b2");

startSubmenu("screen_b1","screen_menu",137);
submenuItem("Vision Statement","http://www.fayettefbc.org/index3.htm#vision","","screen_plain");
submenuItem("Purpose of the Church","http://www.fayettefbc.org/index3.htm#purpose","","screen_plain");
submenuItem("Newsletter","http://www.fayettefbc.org/pdfs/ffbcnewsletter.pdf","","screen_plain");
endSubmenu("screen_b1");

loc="";
