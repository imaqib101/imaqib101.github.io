var database = [
  {
    username: "aqib",
    password: "qwerty"
  },
  {
    username: "ib",
    password: "erty"
  },
  {
    username: "akb",
    password: "qwey"
  }
];

var newsFeed = [
  {
    username: "abhi",
    timeline: "bored!"
  },
  {
    username: "chris",
    timeline: "javascript is so cool!!!"
  }
];

var userNamePrompt = prompt("Enter your username: ");
var passwordPrompt = prompt("Enter your password: ");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong usename and password");
  }
}
signIn(userNamePrompt, passwordPrompt);
