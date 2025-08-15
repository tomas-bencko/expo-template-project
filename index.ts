import { registerRootComponent } from 'expo';

import App from './App';

async function enableMocking() {
  if (!__DEV__) {
    return;
  }

  await import('./src/mocks/msw.polyfills');
  const { server } = await import('./src/mocks/server');
  server.listen();
}

enableMocking().then(() => {
  // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
  // It also ensures that whether you load the app in Expo Go or in a native build,
  // the environment is set up appropriately
  registerRootComponent(App);
});
