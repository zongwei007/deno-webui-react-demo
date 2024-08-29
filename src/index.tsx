import ReactDOMClient from "react-dom/client";
import App from "./app.tsx";

function render() {
  const root = ReactDOMClient.createRoot(document.getElementById("root")!);
  root.render(<App />);
}

document.addEventListener("DOMContentLoaded", () => {
  render();
});
