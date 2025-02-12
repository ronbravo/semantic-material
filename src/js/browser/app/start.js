import Substate from 'substate';

export async function createApp (details = {}) {
  let store;

  store = new Substate ({
    name: 'Semantic Material App',
    state: {
      app: {
      },
    },
  })
}
