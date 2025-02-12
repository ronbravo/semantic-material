import { createApp } from './app/start.js';
import './ui/component/sem-app-ui-display/start.js';

async function start () {
  let dom, parent;
  parent = document.querySelector ('.app.preview.area');
  if (parent) {
    dom = document.createElement ('sem-app-ui-display');
    parent.appendChild (dom);

    createApp ();
  }
}

start ();

// if (import.meta.hot) {
//   import.meta.hot.on ('vite:beforeFullReload', () => {
//     throw new Error ('skipping full reload');
//     console.log ('**** BLAM')
//   });
// }