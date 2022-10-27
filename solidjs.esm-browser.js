import { createSignal, onCleanup } from "https://cdn.skypack.dev/solid-js";
import { render } from "https://cdn.skypack.dev/solid-js/web";
import html from "https://cdn.skypack.dev/solid-js/html";

const Clock = () => {
  const [now, setNow] = createSignal(new Date());
  const intId = setInterval(() => setNow(new Date()), 1000);

  onCleanup(() => clearInterval(intId));

  return html`<div>Agora: ${() => now().toLocaleString()}</div>`;
};

const PropsDemo = (props) => {
  return html`<h1>${props.children} ${props.name}!</h1>`;
};

function App() {
  return html`
    <>
      <${PropsDemo} name="World">Hello</PropsDemo>
      <${Clock} />
    </>
  `;
}

// render(html`<${App} name="World" />`, document.getElementById("app"));
render(App, document.body);
