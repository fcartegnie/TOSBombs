TOSBombs {#TOSBombs}
======================================

Just crashes your browser the TOS way.
See: [TOS's Row of bombs](http://en.wikipedia.org/wiki/Row_of_bombs)

TOSBombs Method: constructor {#TOSBombs:constructor}
------------------------------------------------------

### Prerequisite

	#CSS
	.TOSBombs_layer { position:absolute; top:0; left:0; height:100%; width:100%; z-index:10000; visibility:hidden;}
	.TOSBomb { display:inline; width:16px; height:16px; background-image:url('tosbomb16.gif'); float:left; margin-top:25%;}

### Syntax:

	TOSBombs(target, options);

### Arguments:

1. target - (*element* or *id*, optional) the target element. (Defaults to body)
2. options - (*object*, optional) see below.

### Options:

* nb - (*integer*, defaults to 4)  Number of bombs.
* Any Mootools.FX standard option

### Returns:

(object) A new TOSBombs instance.

	
TOSBombs Method: show {#VisibilityWatcher:show}
--------------------------------------------------

Guess what

TOSBombs Method: hide {#VisibilityWatcher:hide}
--------------------------------------------------

Guess what
