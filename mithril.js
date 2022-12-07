const root = document.querySelector("#app");

// m.mount(root, {
//   view: function () {
//     return m("h1", "Try me out");
//   },
// });

// m.render(root, "Hello world");

// m.render(root, [
//   m("main", [
//     m("h1", { class: "title" }, "My first app"),
//     m("button", "A button"),
//   ]),
// ]);

// var count = 0; // added a variable

// var increment = function () {
//   m.request({
//     method: "PUT",
//     url: "https://rem-rest-api.herokuapp.com/api/tutorial/1",
//     body: { count: count + 1 },
//     withCredentials: true,
//   }).then(function (data) {
//     count = parseInt(data.count);
//   });
// };

// var Splash = {
//   view: function () {
//     return m("a", { href: "#!/hello" }, "Enter!");
//   },
// };

// var Hello = {
//   view: function () {
//     return m("main", [
//       m("h1", { class: "title" }, "My first app"),
//       // changed the next line
//       m(
//         "button",
//         {
//           onclick: increment,
//         },
//         count + " clicks"
//       ),
//     ]);
//   },
// };

// // m.mount(root, Hello);

// m.route(root, "/splash", {
//   "/splash": Splash,
//   "/hello": Hello,
// });

const Clock = () => {
  let now = new Date();
  let count1 = 1;
  let intId = null;

  return {
    oninit: (vnode) => {
      console.debug("Clock oninit", vnode);
      intId = setInterval(() => {
        now = new Date();
        count1++;
        console.debug("now", now);
        m.redraw();
      }, 1000);
    },

    onremove: (vnode) => {
      console.debug("Clock onremove", vnode);
      if (intId != null) {
        clearInterval(intId);
      }
    },

    view: () => m("div", `Agora: ${now.toLocaleString()}`),
  };
};

m.mount(root, {
  view: () => [m("h1", "Hello " + "props.name"), m(Clock)],
});
