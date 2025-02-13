import Substate from 'substate';

export async function createApp (details = {}) {
  let store;

  await calculateScreen ();

  store = new Substate ({
    name: 'Semantic Material App',
    state: {
      app: {
      },
    },
  })
}

async function calculateScreen (detail = {}) {
  // ref: https://m3.material.io/blog/device-metrics
  let screen;

  screen = {
    diagonal: 5.7,
    dimension: {
      height: 5.15,
      width: 2.44,
    },
    ratio: 0,
    pixel: 0,
    dpi: 440,
    density: 0,
  }

  screen.pixel = (screen.dpi * (screen.dpi / 160));

  console.log ('SCREEN:', JSON.stringify (screen, null, 2));
}

