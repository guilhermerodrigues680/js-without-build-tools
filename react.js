// Initialize htm with React
const { Fragment, useState, useEffect } = React;
const html = htm.bind(React.createElement);

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

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(html`
  <${Fragment}>
    <${App} name="World" />
  </Fragment>
`);
// root.render(html`
//   <${React.StrictMode}>
//     <${App} name="World" />
//   </React.StrictMode>
// `);