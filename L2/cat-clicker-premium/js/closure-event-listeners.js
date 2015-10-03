$('body').html('<h1>Testings</h1>');
var HTMLDiv = '<div id="-1"></div>';

var nums = [1, 2, 3, 4];

for (var i = 0; i < nums.length; i++) {
	var num = nums[i];
	$('body').append(HTMLDiv);
	$('body').children('#-1').attr('id', 'div' + i);
	$('#div' + i).append('<p>this is div ' + num + '</p>');
	console.log(num);

	var currentDiv = document.getElementById('div' + i);
	(function (iCurrent) {
		$('#div' + i).click(function () {
			console.log(iCurrent);
		});
	})(i);

}
