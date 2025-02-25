export async function createCommonButtons (details = {}) {
  let dom, parent;

  await material3.loadStyle ({ path: import.meta.resolve ('./common.less') });
  parent = await material3.getArea ({ preview: true });

  dom = document.createElement ('div');
  dom.className = 'preview common buttons';
  parent.appendChild (dom);

  await createButton ({ class: 'material-3 common ui button', parent: dom });
  await createButton ({ class: 'material-3 common ui button hover', parent: dom });
}

async function createButton (details = {}) {
  let { class: className, parent } = details;
  let dom;

  dom = document.createElement ('button');
  dom.className = className;
  dom.textContent = 'Label';
  parent.appendChild (dom);
}