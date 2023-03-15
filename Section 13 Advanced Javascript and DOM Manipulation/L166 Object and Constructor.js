// Javascript Object
var houseKeeper1 = {
  yearsOfExperience: 12,
  name: "Jane",
  cleaningReportoire: ["bathroom", "lobby", "bedroom"],
};

// constructor in Javascript

function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}

// Initialise Object
var BellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
var BellBoy2 = new BellBoy("Jimmy", 21, true, ["English", "German"]);

function HouseKeeper(yearsOfExperience, name, cleaningReportoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningReportoire = cleaningReportoire;
}

var houseKeeper2 = new HouseKeeper(9, "Tom", ["lobby", "bedroom"]);
console.log(houseKeeper2.cleaningReportoire);
