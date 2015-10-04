var catData = {
	"currentCat": 0,
	"cats": [
		{
			"name": "cat name 1",
			"imgSrc": "images/cat1.jpg",
			"counter": 0,
			"nickname": ["abbas1 Nickname"]

		},
		{
			"name": "cat name 2",
			"imgSrc": "images/cat2.jpg",
			"counter": 0,
			"nickname": ["abbas2 Nickname"]
		},
		{
			"name": "cat name 3",
			"imgSrc": "images/cat3.jpg",
			"counter": 0,
			"nickname": ["abbas3 Nickname"]
		}

	]
};

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

	this.catList = ko.observableArray([]);

	catData.cats.forEach(function (catItem) {
		self.catList.push(new Cat(catItem));
	});
	this.setCat = function (catId) {
		console.log("catId" + catId);
		self.currentCat(catId);
	};

	this.currentCat = ko.observable(this.catList()[0]);
	this.incremenCounter = function () {
		self.currentCat().counter(self.currentCat().counter() + 1);

	};

};



ko.applyBindings(new ViewModel());
