const celleTombola = function () {
  const tombolaSection = document.getElementById("tabellone");
  for (let i = 0; i < 76; i++) {
    const quadratini = document.createElement("div");
    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;
    quadratini.appendChild(cellValue);
    tombolaSection.appendChild(quadratini);
  }
};
celleTombola();
document.getElementById("randomButton").addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 76) + 1;
  document.getElementById("randomNumber").innerText = randomNumber;
  for (let i = 0; i < cells.length; i++) {
    if (parseInt(cells[i].innerText) === randomNumber) {
      cells[i].classList.add("highlight");
    }
  }
});

const tabellone = document.getElementById("tabellone");
const cells = tabellone.getElementsByTagName("h3");
