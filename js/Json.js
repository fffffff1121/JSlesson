// var leader = {
//     name: "Василий Иванович",
//     age: 35
// };
// var leaderStr = JSON.stringify(leader);
// leader = JSON.parse(leaderStr);
//
var leader = {
    name: "Василий Иванович"
  };
  
  var soldier = {
    name: "Петька"
  };
  
  // эти объекты ссылаются друг на друга!
  leader.soldier = soldier;
  soldier.leader = leader;
  var team = [leader, soldier];
  var str = JSON.stringify(team, ['name']);
	alert(str);

	var obj= JSON.parse(str)
	alert(obj[1].name)