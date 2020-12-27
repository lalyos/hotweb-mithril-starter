import * as page from './page.js';
import("/.hotweb/client.mjs")
  .then((hotweb) => {
    hotweb.watchCSS();
    hotweb.watchHTML();
    hotweb.refresh(() => m.redraw());
  })
  .catch((error) => {
    console.log("[warning] hotweb couldn't be loaded:", error);
  });

m.route(document.getElementById("page"), "/page", {
    "/page": wrap(() => page.Page)
})

function wrap(cb) {
    return { view: () => m(cb()) };
}