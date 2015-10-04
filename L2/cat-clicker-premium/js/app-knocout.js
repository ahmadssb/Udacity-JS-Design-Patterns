var Cat = function (data) {

	this.counter = ko.observable(data.counter);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);

	this.nickname = ko.observableArray(data.nickname);

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
};

var ViewModel = function () {
	var self = this;
	this.currentCat = ko.observable(new Cat({
		counter: 0,
		name: 'abbas',
		imgSrc: 'images/cat2.jpg',
		nickname: [ "abbas1 Nickname", "abbas2 Nickname", "abbas3 Nickname"]
	}));
	this.incremenCounter = function () {
		self.currentCat().counter(self.currentCat().counter() + 1);

	};

};



ko.applyBindings(new ViewModel());
