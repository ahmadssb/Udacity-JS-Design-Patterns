var ViewModel = function () {
	this.counter = ko.observable(0);
	this.name = ko.observable('cat 1');
	this.imgSrc =  ko.observable('images/cat1.jpg');
	this.leve = ko.ob

	this.incremenCounter = function () {
		this.counter(this.counter() + 1);
	};
};



ko.applyBindings(new ViewModel());