let numYears = document.getElementById("yrs");
let numMonths = document.getElementById("mnt");
let numDays = document.getElementById("dys");

function calculateAge() {
  let day = parseInt(document.getElementById("day").value, 10);
  let month = parseInt(document.getElementById("month").value, 10);
  let year = parseInt(document.getElementById("year").value, 10);

  const birthDate = new Date(year, month - 1, day);
  console.log(birthDate);
  const currentDate = new Date();
  console.log(currentDate);

  const ageInMilliseconds = currentDate - birthDate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;

  const years = Math.floor(ageInDays / 365);
  const months = Math.floor((ageInDays % 365) / 30);
  const days = Math.floor((ageInDays % 365) % 30);

  if (isNaN(birthDate)) {
    numYears.textContent = years;
    numMonths.textContent = months;
    numDays.textContent = days;

    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
  } else if (
    currentDate < birthDate ||
    day > 31 ||
    month > 12 ||
    day == 0 ||
    month == 0 ||
    year == 0
  ) {
    document.getElementsByClassName("error-message").style.display = "block";
    alert("Please Enter a valid Date");
    numYears.textContent = "--";
    numMonths.textContent = "--";
    numDays.textContent = "--";
  }
}
