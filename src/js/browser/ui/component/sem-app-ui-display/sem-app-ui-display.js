import template from './sem-app-ui-display.html?raw';
// import '@fontsource/roboto';
// import './sem-app-ui-display.less';

// http://localhost:9100/@fs/home/ronbravo/projects/dev/semantic-material/node_modules/.pnpm/@fontsource+roboto@5.1.1/node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff2

export const TAG_NAME = 'sem-app-ui-display';

export class SemAppUiDisplay extends HTMLElement {
  constructor () {
    super();
  }

  connectedCallback () {
    let dom, parent;

    parent = this.attachShadow ({ mode: 'closed' });
    dom = document.createElement ('div');
    parent.appendChild (dom);

    parent = dom;
    dom = document.createElement ('div');
    dom.id = 'app';
    parent.appendChild (dom);

    dom.innerHTML = template;

    // createUpdateStyleHandler ({
    //   base: 'http://localhost:9100',
    //   parent,
    //   source: '/ui/component/sem-app-ui-display/sem-app-ui-display.less',
    // }) ();
    createUpdateStyleHandler ({
      // base: 'http://localhost:9101',
      base: '',
      parent,
      source: '/ui/component/sem-app-ui-display/sem-app-ui-display.less',
    }) ();
  }
}

// ------------------------------------------------------
// Check for hot reload
import axios from 'axios';
import less from 'less';

const CSS_BLOCK_START = 'export default "';
const CSS_BLOCK_END = '"';

function createUpdateStyleHandler (details = {}) {
  let { base = '', parent, source, } = details;

  async function updateStyleHandler () {
    let dom, end, id, mod, reply, start, text, url;

    try {
      url = `${base}${source}`;

      reply = await axios.get (url);

      text = reply.data;
      // start = CSS_BLOCK_START.length;
      // end = text.lastIndexOf (CSS_BLOCK_END);

      // console.log ('text:', text);

      // return;
      text = text
        .substring (start, end)
        .replaceAll (' [', '[')
        .replaceAll (' (', '(')
        // .replaceAll ('\\n', '\n')
        .trim ();

      less.render (text, async (err, output) => {
        if (!err) {
          // console.log (output.css);
          id = 'component-style';
          dom = document.querySelector ('#' + id);

          if (!dom) {
            dom = document.createElement ('style');
            dom.id = id;
            parent.appendChild (dom);

            // ref: https://stackoverflow.com/a/71536843
            const myFont = new FontFace ('Roboto', 'url(/font/roboto/files/roboto-latin-400-normal.woff2)');
            await myFont.load ();
            document.fonts.add (myFont);

            // dom = document.createElement ('link');
            // dom.rel = 'stylesheet';
            // dom.type = 'text/css';
            // dom.href = '/font/roboto/400.css';
            // // dom.setAttribute ('crossorigin', 'anonymous');
            // document.head.appendChild (dom);

            // <link href="/font/roboto/400.css" rel="stylesheet" type="text/css" />
            // parent.appendChild (dom);
            // <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;lang=en" />
          }

          dom.textContent = output.css;
        }
        else {
          console.error (err);
        }
      });
    }
    catch (err) {
      console.error (err);
    }
  }

  if (import.meta.hot) {
    import.meta.hot.on ('less-file-change', async () => {
      console.log ('WHAT...');
      // await updateStyleHandler ();
    })
  }


  return updateStyleHandler;
}
