import "./styles.css";
console.clear();

let counter = 0;

function setOutput(output) {
  document
    .getElementById("output")
    .insertAdjacentHTML("beforeend", `<div>${output}</div>`);
  console.log(output);
}

function createPromise(rejectFlag) {
  return new Promise((resolve, reject) => {
    counter++;
    if (rejectFlag) {
      reject("promise rejected, my dude");
    } else {
      setTimeout(resolve, 1000);
    }
    setOutput(`promise ${counter} resolved`);
  });
}
createPromise()
  .then(createPromise)
  .then(createPromise)
  .then((response) => {
    try {
      createPromise("rejected");
    } catch (error) {
      console.log(error);
    }
  });
// .then((response) => Promise.reject("promise rejected")); // alternate way to force a rejection
// .catch((error) => {
//   setOutput(error);
//   console.log(`errorrr: ${error}`);
// });

// window.addEventListener("unhandledrejection", (event) => {
// event.preventDefault();
// console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
// });
