const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  { name: "leo", age: 22, profession: "admin" },
  { name: "lily", age: 28, profession: "developer" },
  { name: "levi", age: 30, profession: "admin" },
];

const dummyArray = ["This", "is", "a", "dummy", "array"];

// 1. Print Developers
function printDeveloper() {
  let i = 0;

  while (i < data.length) {
    console.log(data[i].name);
    console.log(data[i].age);
    console.log(data[i].profession);
    i++;
  }
}

// 2. Add Data
function addData() {
  let newName = prompt("Enter your name");
  let newAge = prompt("Enter your age");
  let newProfession = prompt("Enter your proffession");

  const newData = {
    name: newName,
    age: parseInt(newAge),
    profession: newProfession,
  };

  data.push(newData);

  printDeveloper();
}

// 3. Remove Admins
function removeAdmin() {
  let i = 0;

  while (i < data.length) {
    if (data[i].profession === "admin") {
      delete data[i].name;
      delete data[i].age;
      delete data[i].profession;
    }
    i++;
  }

  printDeveloper();
}

// 4. Concatenate Array
function concatenateArray() {
  console.log(data.concat(dummyArray));
}

// 5. Average Age
function averageAge() {
  let i = 0;
  let total = 0;

  while (i < data.length) {
    total += parseInt(data[i].age);
    i++;
  }
  console.log(total / data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  let i = 0;
  let count = 0;

  data.forEach((element) => {
    if (data[i].age >= 25) {
      count++;
    }
  });

  if (count == 0) {
    console.log("This array is Invalid");
  } else {
    console.log("This array is Valid");
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let uniqueArray = [...new Set(data.map((element) => element.profession))];

  console.log(uniqueArray);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);

  printDeveloper();
}

// 9. Update Profession
function updateJohnsProfession() {
  data.map((element) => {
    if (element.name == "john") {
      element.profession = "manager";
    }
  });

  printDeveloper();
}

// 10. Profession Count
function getTotalProfessions() {
  let numOfAdmin = 0;
  let numOfDevs = 0;

  data.forEach((element) => {
    if (element.profession === "developer") {
      numOfDevs++;
    } else if (element.profession === "admin") {
      numOfAdmin++;
    }
  });

  console.log(numOfAdmin);
  console.log(numOfDevs);
}
