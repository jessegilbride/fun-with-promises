import "./styles.css";
console.clear();

function setOutput(output) {
  document
    .getElementById("output")
    .insertAdjacentHTML("beforeend", `<div>${output}</div>`);
  console.log(output);
}

const promiseA = new Promise((resolve, reject) => {
  resolve("promise A resolved"); // message passed through on resolve
});
const promiseB = new Promise((resolve, reject) => {
  resolve("promise B resolved"); // message passed through on resolve
});
const promiseC = new Promise((resolve, reject) => {
  resolve("promise C resolved"); // message passed through on resolve
});

promiseA
  .then((res) => {
    setOutput(res);
    promiseC.then((res) => {
      setOutput(res);
      promiseB.then((res) => {
        setOutput(res);
      });
    });
  })
  .catch((error) => {
    setOutput(error);
    console.log(error);
  });

console.log("logged immediately, cuz it's not async");
