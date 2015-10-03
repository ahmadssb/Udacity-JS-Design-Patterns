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
var HTMLDivCat = '<div id= "%divCatId%" class="divCat col-sm-12"></div>';
var HTMLDivCatName = '<div id= "%divCatNameId%" class="col-sm-4"></div>';
var HTMLCatImage = '<img id="%catId%" src="%imgSrc%" alt="Click Cat" class="img-responsive"/>';
var HTMLCatName = '<h3 id="%nameId%"></h3>';
var HTMLNumberOfClicks = '<h3 id="%NumOfClicks%"> number of clicks: <span>%counter%</span></h3>';

var viewCats = {
	// init
	
	// render
	
	 
};

var viewCatsList = {
	
};



// controler
var controller = {
	// init
	
	// getCurrentCat
	
	// setCurrentCat(catIndex)
	
	// getCats
	
	// increment counter
};




$(document).ready(function () {
	for (var i = 0; i < catData.cats.length; i++) {
		console.log("catData Length: " + catData.cats.length);
		var divCatName = HTMLDivCatName.replace('%divCatNameId%', 'divCatName' + i);
		$('#catList').append(divCatName);

		var catName = HTMLCatName.replace('%nameId%', 'catName' + i);
		$('#divCatName' + i).append(catName);
		$('#catName' + i).html(catData.cats[i].name);
		(function (currentCat) {
			var image = catData.cats[currentCat].image;
			var count = catData.cats[currentCat].counter;
			$('#catName' + currentCat).click(function () {
				console.log(catData.cats[currentCat].name);
				var divCat = HTMLDivCat.replace('%divCatId%', 'divCat' + currentCat);
				$('#cats').html(divCat);

				var imgCat = HTMLCatImage.replace('%catId%', 'catImage' + currentCat);
				$('#divCat' + currentCat).append(imgCat);
				$("#catImage" + currentCat).attr('src', catData.cats[currentCat].image);

				var catName = HTMLCatName.replace('%nameId%', 'catName' + currentCat);
				$('#divCat' + currentCat).append(catName);
				$('#divCat' + currentCat).children('#catName' + currentCat).html(catData.cats[currentCat].name);

				var numberOfClicksCat = HTMLNumberOfClicks.replace('%NumOfClicks%', 'counterCat' + currentCat);
				$('#divCat' + currentCat).append(numberOfClicksCat);
				$('#counterCat' + currentCat).children('span').html(catData.cats[currentCat].counter);

				$('#catImage' + currentCat).click(function () {
					count++;
					$('#counterCat' + currentCat).children('span').html(count);
				});

			});
		})(i);

	}
});
/*
$(document).ready(function () {
	for (var i = 0; i < catData.cats.length; i++) {
		console.log(catData.cats.length);
		var divCat = HTMLDivCat.replace('%divCatId%', 'divCat' + i);
		$('#cats').append(divCat);

		var imgCat = HTMLCatImage.replace('%catId%', 'catImage' + i);
		$('#divCat' + i).append(imgCat);
		$("#catImage" + i).attr('src', catData.cats[i].image);


		var catName = HTMLCatName.replace('%nameId%', 'catName' + i);
		$('#divCat' + i).append(catName);
		$('#catName' + i).html(catData.cats[i].name);

		var numberOfClicksCat = HTMLNumberOfClicks.replace('%NumOfClicks%', 'counterCat' + i);
		$('#divCat' + i).append(numberOfClicksCat);
		$('#counterCat' + i).children('span').html(catData.cats[i].counter);
		(function (iCurrent) {
			var count = catData.cats[iCurrent].counter;
			$('#catImage' + iCurrent).click(function () {
				count++;
				//console.log(count);
				$('#counterCat' + iCurrent).children('span').html(count);
			});
		})(i);
	}
});
*/
