import { TAG_NAME, SemAppUiDisplay } from './sem-app-ui-display.js';

if (customElements.get (TAG_NAME) === undefined) {
  customElements.define (TAG_NAME, SemAppUiDisplay);
}
else {
  throw new Error (`Unable to register the component [${TAG_NAME}] since it already exists.`);
}
