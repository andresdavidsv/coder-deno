// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from 'https://dev.jspm.io/react/index.js';
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server.js';
import { createApp } from 'https://deno.land/x/servest@v1.3.1/mod.ts';
import App from './App.tsx';

const app = createApp();

app.handle('/', async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({ 'Content-Type': 'text/html; charset=utf-8' }),
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>servert</title>
        </head>
        <body>
          <div id="root"><App /></div>
        </body>
      </html>
    ),
  });
});

app.listen({ port: 3000 });
console.log('Denoland listening at http://localhost:3000');
