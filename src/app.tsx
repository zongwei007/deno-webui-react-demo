import { useCallback, useState } from "react";

export default () => {
  const [a, setA] = useState(4);
  const [b, setB] = useState(6);
  const [res, setRes] = useState("?");

  const calculate = useCallback(async () => {
    const r = await _calculate(a, b);
    setRes(String(r));
  }, [a, b]);

  const startCheck = useCallback(async () => {
    // Call Deno backend function and pass arguments
    const response = await _checkResult(a, b, parseInt(res));
    alert(response);
  }, [a, b, res]);

  return (
    <>
      <h1>WebUI 2 - Deno Hello World</h1>
      <br />
      A: <input value={a} onChange={(e) => setA(parseInt(e.target.value))} />
      <br />
      <br />
      B: <input value={b} onChange={(e) => setB(parseInt(e.target.value))} />
      <br />
      <br />
      <div style={{ color: "#dbdd52" }}>Result: {res}</div>
      <br />
      <br />
      <button onClick={calculate}>Calculate</button> -
      <button onClick={startCheck}>Check Result</button> -
      <button id="exit">Exit</button>
    </>
  );
};
