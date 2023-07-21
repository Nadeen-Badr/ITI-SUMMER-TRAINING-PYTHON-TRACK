var numbers = [];
for (var i = 0; i < 5; i++) {
  var num = parseInt(prompt("Enter a number:"));
  numbers.push(num);
}

var sortedDescending = numbers.slice().sort(compareDescending);
var sortedAscending = numbers.slice().sort(compareAscending);

console.log("u've entered the values of " + numbers.join(", "));
console.log("ur values after being sorted descending " + sortedDescending.join(", "));
console.log("ur values after being sorted ascending " + sortedAscending.join(", "));

function compareDescending(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
}

function compareAscending(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}