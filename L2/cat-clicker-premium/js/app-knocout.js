var ViewModel = function () {
	this.counter = ko.observable(0);
	this.name = ko.observable('cat 1');
	this.imgSrc =  ko.observable('images/cat1.jpg');
	

	this.incremenCounter = function () {
		this.counter(this.counter() + 1);
		
	};
	
	this.cat = ko.observableArray([
		{nickname: 'kitty1'},
		{nickname: 'kitty2'},
		{nickname: 'kitty3'},
		{nickname: 'kitty4'}
	]);
	
};
	


ko.applyBindings(new ViewModel());