(function(){
	var lastEventId;
	var lastAccountId;
	var ec;
	var ac;

	$(document).ready(function () {
		main();
		ec = new Athens_EventController({});
		ac = new Athens_AccountController({});
		console.log("yay");
	});



	function main() {
		$("#testEventAdd").on("click", function () {
			addRandomEvent();
		});

		$("#testEventShow").on("click", function () {
			showEventData();
		});

		$("#testEventRemove").on("click", function () {
			removeLastEvent();
		});

		$("#testEventUpdate").on("click", function () {
			updateLastEvent();
		});

		$("#testAccountAdd").on("click", function () {
			addRandomAccount();
		});

		$("#testAccountShow").on("click", function () {
			showAccountData();
		});

		$("#testAccountRemove").on("click", function () {
			removeLastAccount();
		});

		$("#testAccountUpdate").on("click", function () {
			updateLastAccount();
		});
	}



	function addRandomEvent() {
		var d = Date.now();
		var date = new Athens_Event_Date();
		var eData = {
			userId: "00ea51",
			eventName: "Cool Event " + d,
			date: date,
			start: d,
			end: d + Math.random() * 1000000
		};
		var e = new Athens_Event(eData);
		console.log("created event: ", e);
		lastEventId = ec.createEvent(e);
		console.log("inserted event: ", lastEventId);
		console.log("getting that event back...");
		var eRow = ec.findEvent(lastEventId).fetch();
		console.log(eRow);
		console.log("turning that into an actual event object...");
		console.log(new Athens_Event(eRow[0]));
	}



	function removeLastEvent(){
		console.log("removing event with id " + lastEventId);
		ec.removeEvent(lastEventId);
		console.log("New list of events not marked as deleted: ");
		console.log(ec.findEvent({deleted: {$not: true}}).fetch());
		showEventData();
	}



	function updateLastEvent(){
		var e = new Athens_Event(ec.findEvent({_id: lastEventId}).fetch()[0]);
		e.eventName = "New event name! " + Date.now();
		console.log("Going to update new event with new name: " + e.eventName);
		ec.updateEvent({_id: lastEventId}, e, onEventUpdate);
	}



	function onEventUpdate(){
		console.log("Update complete. Selecting updated event from DB: ");
		console.log(ec.findEvent({_id: lastEventId}).fetch()[0]);
	}



	function showEventData(){
		console.log("Full event list: ");
		console.log(ec.findEvent({}).fetch());
	}



	function addRandomAccount() {
		var d = Date.now();
		var data = {
			accountId: "00ea51",
			admin: [651321],
			user: [651321, 5641152354],
			companyName: "company name: " + d,
			location: [129380]
		};
		var a = new Athens_Account(data);
		console.log("created account: ", a);
		lastAccountId = ac.createAccount(a);
		console.log("inserted account: ", lastAccountId);
		console.log("getting that account back...");
		var arr = ac.findAccount(lastAccountId).fetch();
		console.log(arr);
		console.log("turning that into an actual account object...");
		console.log(new Athens_Account(arr[0]));
	}



	function removeLastAccount() {
		console.log("removing account with id " + lastAccountId);
		ac.removeAccount(lastAccountId);
		console.log("New list of accounts not marked as deleted: ");
		console.log(ac.findAccount({deleted: {$not: true}}).fetch());
		showAccountData();
	}



	function updateLastAccount() {
		var a = new Athens_Account(ac.findAccount({_id: lastAccountId}).fetch()[0]);
		a.companyName = "New company name! " + Date.now();
		console.log("Going to update new account with new company name: " + a.companyName);
		ac.updateAccount({_id: lastAccountId}, a, onAccountUpdate);
	}



	function onAccountUpdate() {
		console.log("Update complete. Selecting updated account from DB: ");
		console.log(ac.findAccount({_id: lastAccountId}).fetch()[0]);
	}



	function showAccountData() {
		console.log("Full account list: ");
		console.log(ac.findAccount({}).fetch());
	}
})();