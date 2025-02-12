
export const TAG_NAME = 'sem-app-ui-display';

export class SemAppUiDisplay extends HTMLElement {
  constructor () {
    super();
  }

  connectedCallback () {
    let parent;
    parent = this.attachShadow ({ mode: 'closed' });
    parent.innerHTML = '<h1>Hi</h1>';
  }
}
