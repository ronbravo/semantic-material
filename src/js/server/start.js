import liveServer from 'live-server';

export async function start (details = {}) {
  let params;

  params = {
    cors: true,

    // Set the server port. Defaults to 8080.
    port: 9000,

    // // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    // host: "0.0.0.0",

    // Set root directory that's being served. Defaults to cwd.
    root: './src/js/browser',

    // When false, it won't load your browser by default.
    open: false,

    // comma-separated string for paths to ignore
    // ignore: 'scss,my/templates',
    // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    file: 'start.html',

    // Waits for all changes, before reloading. Defaults to 0 sec.
    wait: 1000,

    // Mount a directory to a route.
    mount: [
      ['/', './public'],
      ['/', './src/js/browser'],
      ['/app', './src/js/app'],
      ['/font', './node_modules/@fontsource'],
      // ['/font', './node_modules/@font-source'],
      // ['/', '/home/ronbravo/projects/dev/semantic-material/src/js/browser'],
      // ['/font', '/home/ronbravo/projects/dev/semantic-material/node_modules/@fontsource'],
    ],

    // 0 = errors only, 1 = some, 2 = lots
    logLevel: 2,
    // middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
  };

  liveServer.start (params);
}

start ();
