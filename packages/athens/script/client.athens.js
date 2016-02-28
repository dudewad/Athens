(function(){
	var lastId;

	$(document).ready(function () {
		main();
		console.log("yay");
	});



	function main() {
		$("#testEventAdd").on("click", function () {
			addRandomEvent();
		});

		$("#testEventShow").on("click", function () {
			showData();
		});
	}



	function addRandomEvent() {
		var d = Date.now();
		var date = new Athens_Event_Date();
		var eData = {
			userId: "00ea51",
			name: "Cool Event " + d,
			date: date,
			start: d,
			end: d + Math.random() * 1000000
		};
		var e = new Athens_Event(eData);
		console.log(e);
		lastId = col_Events.insert(e);
	}



	function showData(){
		var record = col_Events.find({_id: lastId});

	}
})();