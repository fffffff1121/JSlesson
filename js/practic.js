"use strict"

var name = prompt("Input name - ", '');

if (name == null) {

	alert("Bay bay!");

} else if (name == '') {

	alert("Input realy name!");

} else {

	var pass = prompt("Input password - ", '');

	if (pass == null) {

		alert("Bay bay!");

	} else if (pass == '') {

		alert("Input realy password!");

	} else {

		var age = prompt("Input your age -", '');

		if (age == null) {

			alert("Bay bay!");

		} else if (age == '') {

			alert("Input realy age!");

		} else if (age < 14) {

			alert("You are little!");

		} else {

			var statsView = prompt("Are you want see your statistic ? \nYes or Not", '');

			if (statsView == null) {

				alert("Bay bay!");

			} else if (statsView == "Yes") {

				alert("Your name - " + name + "\n" + "Your password - " + pass + "\n" + "Your age - " + age);

			} else if (statsView == "Not") {

				alert("Bay bay!");

			}

		}

	}

}