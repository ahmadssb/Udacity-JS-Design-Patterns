var Cat = function(){

	this.counter = ko.observable(0);
	this.name = ko.observable('cat 1');
	this.imgSrc = ko.observable('images/cat1.jpg');

	this.cat = ko.observableArray([
		{
			nickname: 'kitty1'
		},
		{
			nickname: 'kitty2'
		},
		{
			nickname: 'kitty3'
		},
		{
			nickname: 'kitty4'
		}
	]);

	this.level = ko.computed(function () {
		var level;
		var clicks = this.counter();
		if (clicks < 10) {
			level = '1';
		} else if (clicks < 20) {
			level = '2';
		} else if (clicks < 30) {
			level = '3';
		} else if (clicks < 40) {
			level = '4';
		} else {
			level = '5';
		}
		return level;
	}, this);
	
	

}
var ViewModel = function () {
	this.currentCat = ko.observable(new Cat());
	this.incremenCounter = function () {
		this.counter(this.counter() + 1);

	};

};



ko.applyBindings(new ViewModel());
