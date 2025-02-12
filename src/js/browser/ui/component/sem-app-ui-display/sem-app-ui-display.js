import template from './sem-app-ui-display.html?raw';
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

    createUpdateStyleHandler ({
      base: 'http://localhost:9100',
      parent,
      source: '/ui/component/sem-app-ui-display/sem-app-ui-display.less?inline',
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
      start = CSS_BLOCK_START.length;
      end = text.lastIndexOf (CSS_BLOCK_END);
      text = text.substring (start, end).replaceAll ('\\n', '\n').trim ();

      less.render (text, (err, output) => {
        if (!err) {
          // console.log (output.css);
          id = 'component-style';
          dom = document.querySelector ('#' + id);

          if (!dom) {
            dom = document.createElement ('style');
            dom.id = id;
            parent.appendChild (dom);
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
