import './component/sem-app-ui-display/start.js';

async function start () {
  let dom, parent;
  parent = document.querySelector ('#app');
  if (parent) {
    dom = document.createElement ('sem-app-ui-display');
    parent.appendChild (dom);
  }
}

start ();
