/*
---
description: TOSBombs class.

license: MIT-style

authors:
- Francois Cartegnie

requires:
- core/1.2.3: '*'

provides: [TOSBombs]

...
*/

var TOSBombs = new Class({

	Extends: Fx,

	options: {
		nb: 4,
		duration: Fx.Durations['long']
	},

	initialize: function(target, options){
		this.parent(options);
		this.element = new Element('div', {'class': 'TOSBombs_layer'}); 		
		if (target == undefined)
			this.target = document.body;
		else
			this.target = document.id(target);
		this.target.grab(this.element);
		this.counter = 1;
		var handler = this.resizeHandler.bind(this);
		[window, this.target].each( function(el){ el.addEvent('resize', handler); } );
	},

	set: function(now){
		if (Math.floor(now) == this.counter)
		{
			this.element.grab(
				new Element('div', {'class': 'TOSBomb'})
			);
			this.counter++;
		}
		return this;
	},

	resizeHandler: function()
	{
		this.element.setStyles( this.target.getCoordinates() );
	},

	show: function(){
		this.resizeHandler();
		this.element.setStyle('visibility', 'visible');
		this.counter = 1;
		this.start(0, this.options['nb']);
		return this;
	},

	hide: function(){
		this.element.setStyle('visibility', 'hidden');
		this.element.empty();		
		return this;
	}
});//!Class
