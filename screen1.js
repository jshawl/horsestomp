//�Xara Ltd
var clicked="";var gtype=".gif";var selstate="_over";if (typeof(loc)=="undefined" || loc==""){var loc="";if (document.body&&document.body.innerHTML){var tt=document.body.innerHTML;var ml=tt.match(/["']([^'"]*)screen1.js["']/i);if(ml && ml.length > 1) loc=ml[1];}}document.write("<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr>");document.write("<td><img src=\""+loc+"screen1_left"+gtype+"\" alt=\"\" width=\"6\" height=\"19\"></td>");tr(false);writeButton("","http://www.horsestomp.com/","screen1_b1",107,19,"Home","",0);writeButton("","http://www.horsestomp.com/cows.html","screen1_b2",107,19,"Cows","",0);writeButton("","http://www.horsestomp.com/donors.html","screen1_b3",107,19,"Donors","",0);writeButton("","http://www.horsestomp.com/f1s.html","screen1_b4",107,19,"F1's","",0);writeButton("","http://www.horsestomp.com/farmpics.html","screen1_b5",107,19,"On The Farm","",0);writeButton("","http://www.horsestomp.com/forsale.html","screen1_b6",107,19,"For Sale","",0);tr(true);document.write("<td><img src=\""+loc+"screen1_right"+gtype+"\" alt=\"\" width=\"6\" height=\"19\"></td>");document.write("</tr></table>");loc="";function tr(b){}function turn_over(name) {if (document.images != null && clicked != name) {document[name].src = document[name+"_over"].src;}}function turn_off(name) {if (document.images != null && clicked != name) {document[name].src = document[name+"_off"].src;}}function reg(gname,name){if (document.images){document[name+"_off"] = new Image();document[name+"_off"].src = loc+gname+gtype;document[name+"_over"] = new Image();document[name+"_over"].src = loc+gname+"_over"+gtype;}}function evs(name){ return " onmouseover=\"turn_over('"+ name + "')\" onmouseout=\"turn_off('"+ name + "')\""}function writeButton(urld,url,name,w,h,alt,target,hsp){gname=name;while(typeof(document[name])!="undefined")name+="x";reg(gname,name);tr(true);document.write("<td>");if(alt!="")alt=" alt=\""+alt+"\"";if(target!="")target=" target=\""+target+"\"";if(w>0)w=" width=\""+w+"\"";else w="";if(h>0)h=" height=\""+h+"\"";else h="";if(url!="")url=" href=\""+urld+url+"\"";if(typeof(clx)!="undefined"){target="";url=" href=\"?"+clx+"\"";alt=" alt=\"Click to edit\"";}document.write("<a "+url+evs(name)+target+">");if(hsp==-1)hsp=" align=\"right\"";else if(hsp>0)hsp=" hspace=\""+hsp+"\"";else hsp="";document.write("<img src=\""+loc+gname+gtype+"\" name=\""+name+"\""+w+h+alt+hsp+" border=\"0\" /></a></td>");tr(false);}