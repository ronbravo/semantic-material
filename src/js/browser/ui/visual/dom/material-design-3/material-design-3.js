import '/library/axios/axios.min.js';

globalThis.material3 = {};

async function getArea (details = {}) {
  let { preview, styles } = details;
  let area, font, id, selector, target;

  id = 'material-3-design';
  area = document.body.querySelector (`#${id}`);
  if (!area) {
    console.log ('creating material 3 design');
    area = document.createElement ('div');
    area.id = id;
    document.body.appendChild (area);
  }

  if (styles === true) {
    selector = `.styles.group.area`;
    target = area.querySelector (selector);
    if (!target) {

      // ref: https://stackoverflow.com/a/71536843
      font = new FontFace ('Roboto', 'url(/font/roboto/files/roboto-latin-400-normal.woff2)');
      await font.load ();
      document.fonts.add (font);

      // font = new FontFace ('Roboto', 'url(/font/roboto/files/roboto-latin-500-normal.woff2)');
      // await font.load ();
      // document.fonts.add (font);

      target = document.createElement ('div');
      target.className = 'styles group area';
      area.appendChild (target);
    }
    return target;
  }

  if (preview === true) {
    selector = `.preview.group.area`;
    target = area.querySelector (selector);
    if (!target) {
      target = document.createElement ('div');
      target.className = 'material-3 preview group area';
      area.appendChild (target);
    }
    return target;
  }
}

globalThis.material3.getArea = getArea;

async function loadStyle (details = {}) {
  let { path } = details;
  let axios, dom, less, parent, reply;

  try {
    axios = globalThis.axios;
    less = globalThis.less;

    parent = await getArea ({ styles: true });
    dom = parent.querySelector (`[data-path="${path}"]`);
    if (!dom) {
      reply = await axios.get (path);

      less.render (reply.data).then (function (result) {
        console.log (result.css);
        dom = document.createElement ('style');
        dom.dataset.path = path;
        dom.textContent = result.css;
        parent.appendChild (dom);
      }, function (err) {
        console.error (err);
      });
    }
  }
  catch (err) {
    console.error (err);
  }
}

globalThis.material3.loadStyle = loadStyle;
