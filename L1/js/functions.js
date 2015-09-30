var catData = {
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
		}

	]
};

var HTMLDivCat = '<div id= "%divCatId%" class="col-sm-4"></div>';
var HTMLCatImage = '<img id="%catId%" src="%imgSrc%" alt="Click Cat" class="img-responsive"/>';
var HTMLCatName = '<h3 id="%nameId%"></h3>';
var HTMLNumberOfClicks = '<h3 id="%NumOfClicks%"> number of clicks: <span>%counter%</span></h3>';


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