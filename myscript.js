window.onload = function() {
	//document.getElementById("title").innerHTML = "めしだ";
};

chrome.tabs.query({active: true}, function(tabs) {
	var tab = tabs[0];
	console.log(tab);
	chrome.tabs.get(tab.id, function(tab) {
		document.getElementById("recipe_title").value = tab.title;
		document.getElementById("recipe_url").value = tab.url;
	});
});

$(function() {
	$('#execute').click(function() {
		$.ajax({
			url: 'http://127.0.0.1:8000/api/v1/recipe/',
			type: 'post',
			dataType: 'json',
			data: {
				title: $('#recipe_title').val(),
				url: $('#recipe_url').val(),
				category: 0
			},
			success: function(data) {
				alert(data);
			}
		});
	});
});
