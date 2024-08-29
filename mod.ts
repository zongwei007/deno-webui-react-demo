import { WebUI } from "webui";

function checkResult(e: WebUI.Event) {
  const a = e.arg.number(0);
  const b = e.arg.number(1);
  const res = e.arg.number(2);
  if (a + b == res) {
    return `Correct: ${a} + ${b} = ${res}`;
  } else {
    return `Incorrect: ${a} + ${b} != ${res}`;
  }
}

function calculate(e: WebUI.Event) {
  const a = e.arg.number(0);
  const b = e.arg.number(1);

  const result = a + b;

  return result;
}

const appUI = new WebUI();

appUI.bind("_calculate", calculate);
appUI.bind("_checkResult", checkResult);
appUI.bind("exit", () => WebUI.exit());

appUI.show("./public/index.html");

await WebUI.wait();
