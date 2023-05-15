import "./styles.css";
console.clear();

let counter = 0;

function setOutput(output) {
  document
    .getElementById("output")
    .insertAdjacentHTML("beforeend", `<div>${output}</div>`);
  console.log(output);
}

function createPromise() {
  return new Promise((resolve) => {
    counter++;
    setTimeout(resolve, 1000);
    setOutput(`promise ${counter} resolved`);
  });
}
createPromise()
  .then(createPromise)
  .then(createPromise)
  .then((response) => {
    setOutput("(done)");
  })
  .catch((error) => console.log(error));
