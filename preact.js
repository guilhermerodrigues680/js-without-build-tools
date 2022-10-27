// // No build tools route
// // Preact is packaged to be used directly in the browser, and doesn't require any build or tools:

// const { h, Component, render } = preact;

// // Create your app
// const app = h('h1', null, 'Hello World!');

// render(app, document.body);

//
// Alternatives to JSX
//

// Initialize htm with Preact
const { h, render, Fragment } = preact;
const { useState, useEffect } = preactHooks;
const html = htm.bind(h); // preact.h

function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const intId = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(intId);
  }, []);

  return html`<div>Agora: ${now.toLocaleString()}</div>`;
}

function App(props) {
  return html`
    <${Fragment}>
      <h1>Hello ${props.name}!</h1>
      <${Clock} />
    <//>
  `;
}

render(html`<${App} name="World" />`, document.getElementById("app"));
