const user = {
  name: "sheri",
  age: 20,
  skills: ["html", "css", "js"],
};

const xhr = new XMLHttpRequest();
xhr.open("DELETE", "https://reqres.in/api/users/2");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.addEventListener("load", function () {
  //   const res = JSON.parse(xhr.responseText);
  console.log("deleted");
});

xhr.send();
