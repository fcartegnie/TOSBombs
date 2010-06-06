TOSBombs
===========

![Screenshot](http://fcartegnie.github.com/TOSBombs/Capture-1.png)

100% Useless class.

Just crashes your browser the TOS way :)
See: [TOS's Row of bombs](http://en.wikipedia.org/wiki/Row_of_bombs)

Demonstrates that Mootools.Fx can also be used to generate content.

How to Use
----------

The css styles:
	#CSS
	.TOSBombs_layer { position:absolute; top:0; left:0; height:100%; width:100%; z-index:10000; visibility:hidden;}
	.TOSBomb { display:inline; width:16px; height:16px; background-image:url('tosbomb16.gif'); float:left; margin-top:25%;}

Document's body crash:
	#JS
	var crasher = new TOSBombs();
	crasher.show();

