window.onload = function() {
	//document.getElementById("title").innerHTML = "めしだ";
};

chrome.tabs.query({active: true}, function(tabs) {
	var tab = tabs[0];
	console.log(tab);
	chrome.tabs.get(tab.id, function(tab) {
		document.getElementById("recipe_title").value = tab.title;
		document.getElementById("recipe_url").innerHTML = tab.url;
	});
});