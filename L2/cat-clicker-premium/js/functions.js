// model
var catData = {
	"currentCat": 0,
	"cats": [
		{
			"name": "cat name 1",
			"image": "images/cat1.jpg",
			"counter": 0
		},
		{
			"name": "cat name 2",
			"image": "images/cat2.jpg",
			"counter": 0
		},
		{
			"name": "cat name 3",
			"image": "images/cat3.jpg",
			"counter": 0
		}

	]
};



// view
//var HTMLDivCat = '<div id= "%divCatId%" class="divCat col-sm-12"></div>';
//var HTMLDivCatName = '<div id= "%divCatNameId%" class="col-sm-4"></div>';
//var HTMLCatImage = '<img id="%catId%" src="%imgSrc%" alt="Click Cat" class="img-responsive"/>';
//var HTMLCatName = '<h3 id="%nameId%"></h3>';
//var HTMLNumberOfClicks = '<h3 id="%NumOfClicks%"> number of clicks: <span>%counter%</span></h3>';

var viewCats = {
	// init
	init: function () {
		this.HTMLDivCat = '<div id= "%divCatId%" class="divCat col-sm-12"></div>';
		this.HTMLCatImage = '<img id="%catId%" src="%imgSrc%" alt="Click Cat" class="img-responsive"/>';
		this.HTMLCatName = '<h3 id="%nameId%"></h3>';
		this.HTMLNumberOfClicks = '<h3 id="%NumOfClicks%"> number of clicks: <span>%counter%</span></h3>';
		this.render();
	},
	// render
	render: function () {
		var currentCat = catData.currentCat;
		var cat = catData.cats;
		console.log("viewCats: " + cat[currentCat].name + " is clicked and current cat is " + currentCat);

		var divCat = this.HTMLDivCat.replace('%divCatId%', 'divCat' + currentCat);
		$('#cats').html(divCat);

		var imgCat = this.HTMLCatImage.replace('%catId%', 'catImage' + currentCat);
		$('#divCat' + currentCat).append(imgCat);
		$("#catImage" + currentCat).attr('src', cat[currentCat].image);

		var catName = this.HTMLCatName.replace('%nameId%', 'catName' + currentCat);
		$('#divCat' + currentCat).append(catName);
		$('#divCat' + currentCat).children('#catName' + currentCat).html(cat[currentCat].name);

		var numberOfClicksCat = this.HTMLNumberOfClicks.replace('%NumOfClicks%', 'counterCat' + currentCat);
		$('#divCat' + currentCat).append(numberOfClicksCat);
		$('#counterCat' + currentCat).children('span').html(cat[currentCat].counter);

		$('#catImage' + currentCat).click(function () {
			controller.incremenCounter();
			//$('#counterCat' + currentCat).children('span').html(count);
		});
	}
};


//
//$(document).ready(function () {
//	for (var i = 0; i < catData.cats.length; i++) {
//		console.log("catData Length: " + catData.cats.length);
//		var divCatName = HTMLDivCatName.replace('%divCatNameId%', 'divCatName' + i);
//		$('#catList').append(divCatName);
//
//		var catName = HTMLCatName.replace('%nameId%', 'catName' + i);
//		$('#divCatName' + i).append(catName);
//		$('#catName' + i).html(catData.cats[i].name);
//		(function (currentCat) {
//			var image = catData.cats[currentCat].image;
//			var count = catData.cats[currentCat].counter;
//			$('#catName' + currentCat).click(function () {
//				console.log(catData.cats[currentCat].name);
//				var divCat = HTMLDivCat.replace('%divCatId%', 'divCat' + currentCat);
//				$('#cats').html(divCat);
//
//				var imgCat = HTMLCatImage.replace('%catId%', 'catImage' + currentCat);
//				$('#divCat' + currentCat).append(imgCat);
//				$("#catImage" + currentCat).attr('src', catData.cats[currentCat].image);
//
//				var catName = HTMLCatName.replace('%nameId%', 'catName' + currentCat);
//				$('#divCat' + currentCat).append(catName);
//				$('#divCat' + currentCat).children('#catName' + currentCat).html(catData.cats[currentCat].name);
//
//				var numberOfClicksCat = HTMLNumberOfClicks.replace('%NumOfClicks%', 'counterCat' + currentCat);
//				$('#divCat' + currentCat).append(numberOfClicksCat);
//				$('#counterCat' + currentCat).children('span').html(catData.cats[currentCat].counter);
//
//				$('#catImage' + currentCat).click(function () {
//					count++;
//					$('#counterCat' + currentCat).children('span').html(count);
//				});
//
//			});
//		})(i);
//
//	}
//});


var viewCatsList = {
	// init
	init: function () {
		this.HTMLDivCatName = '<div id= "%divCatNameId%" class="col-sm-4"></div>';
		this.HTMLCatName = '<h3 id="%nameId%"></h3>';
		this.render();
	},
	// render
	render: function () {
		var cats = controller.getCats();
		console.log(cats);
		for (var i = 0; i < cats.length; i++) {
			var cat = cats[i];
			var divCatName = this.HTMLDivCatName.replace('%divCatNameId%', 'divCatName' + i);
			$('#catList').append(divCatName);

			var catName = this.HTMLCatName.replace('%nameId%', 'catName' + i);
			$('#divCatName' + i).append(catName);
			$('#catName' + i).html(cat.name);
			(function (currentCat) {
				$('#catName' + currentCat).click(function () {
					controller.setCurrentCat(currentCat);
					viewCats.render();
					console.log(cats[currentCat].name + " is clicked and current cat is " + controller.getCurrentCat());

				});
			})(i);
		}
	}

};

var viewAdmin = {
	init: function () {
		this.adminForm = $("#adminForm");
		this.adminBtn = $("#adminBtn");
		this.cancelAdmin = $("#cancelAdmin");
		this.submitAdmin = $("#submitAdmin");
		this.inputCatName = $("#catName").val();
		this.inputCatImage = $("#catImage").val();
		this.inputCatCounter = $("#catCounter").val();
		this.render();
	},
	
	render: function () {
		this.adminForm.hide();
		this.adminBtn.click(function() {
			$("#adminForm").toggle(300);
		});
		this.cancelAdmin.click(function() {
			$("#adminForm").hide(300);
		});
		this.submitAdmin.click(function() {
			controller.addNewCat($("#catName").val(), $("#catImage").val(), $("#catCounter").val());
			console.log($("#catName").val() + " - " + $("#catImage").val() + " - " + $("#catCounter").val())
		});
	}
	
}



// controler
var controller = {
	// init
	init: function () {
		viewCatsList.init();
		viewCats.init();
		viewAdmin.init();
	},
	// getCurrentCat
	getCurrentCat: function () {
		return catData.currentCat;
	},
	// setCurrentCat(catIndex)
	setCurrentCat: function (catIndex) {
		catData.currentCat = catIndex;
	},
	// getCats
	getCats: function () {
		return catData.cats;
	},
	// increment counter
	incremenCounter: function () {
		catData.cats[this.getCurrentCat()].counter++;
		viewCats.render();
	},
	
	addNewCat: function(catName, catImage, catCounter) {
		this.getCats().push({
			"name": catName,
			"image": catImage,
			"counter": catCounter
		});
		console.log("addNewCat: " + catName + " - " +  catImage + " - " + catCounter);
		console.log(this.getCats());
		viewCatsList.render();
		viewCats.render();
	}
	
};


//
//$(document).ready(function () {
//	for (var i = 0; i < catData.cats.length; i++) {
//		console.log("catData Length: " + catData.cats.length);
//		var divCatName = HTMLDivCatName.replace('%divCatNameId%', 'divCatName' + i);
//		$('#catList').append(divCatName);
//
//		var catName = HTMLCatName.replace('%nameId%', 'catName' + i);
//		$('#divCatName' + i).append(catName);
//		$('#catName' + i).html(catData.cats[i].name);
//		(function (currentCat) {
//			var image = catData.cats[currentCat].image;
//			var count = catData.cats[currentCat].counter;
//			$('#catName' + currentCat).click(function () {
//				console.log(catData.cats[currentCat].name);
//				var divCat = HTMLDivCat.replace('%divCatId%', 'divCat' + currentCat);
//				$('#cats').html(divCat);
//
//				var imgCat = HTMLCatImage.replace('%catId%', 'catImage' + currentCat);
//				$('#divCat' + currentCat).append(imgCat);
//				$("#catImage" + currentCat).attr('src', catData.cats[currentCat].image);
//
//				var catName = HTMLCatName.replace('%nameId%', 'catName' + currentCat);
//				$('#divCat' + currentCat).append(catName);
//				$('#divCat' + currentCat).children('#catName' + currentCat).html(catData.cats[currentCat].name);
//
//				var numberOfClicksCat = HTMLNumberOfClicks.replace('%NumOfClicks%', 'counterCat' + currentCat);
//				$('#divCat' + currentCat).append(numberOfClicksCat);
//				$('#counterCat' + currentCat).children('span').html(catData.cats[currentCat].counter);
//
//				$('#catImage' + currentCat).click(function () {
//					count++;
//					$('#counterCat' + currentCat).children('span').html(count);
//				});
//
//			});
//		})(i);
//
//	}
//});

controller.init();
