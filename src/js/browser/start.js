import { createApp } from '/app/start.js';
import { createDomUi } from '/ui/visual/dom/start.js';

export async function start (details = {}) {
  createApp ();
  createDomUi ();
}

start ()
