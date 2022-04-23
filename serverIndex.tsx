// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import ReactDOMServer from 'https://dev.jspm.io/react-dom@16.13.1/server';
import { opine } from 'https://deno.land/x/opine@0.3.0/mod.ts';
export {
  Request,
  Response,
  NextFunction,
} from 'https://deno.land/x/opine@0.3.0/src/types.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      input: React.ComponentProps<'input'>;
      div: React.ComponentProps<'div'>;
      h1: React.ComponentProps<'h1'>;
      p: React.ComponentProps<'p'>;
    }
  }
}

const App = () => {
  const [color, setColor] = React.useState(0);
  return (
    <div style={{ backgroundColor: 'black' }}>
      <h1 style={{ backgroundColor: 'white' }}>Hello DenoLand! </h1>
      <input
        style={{ backgroundColor: 'white' }}
        onChange={(e: any) => setColor(e.target.value)}
      />
      <ul>
        {color.forEach((c: any) => {
          <li style={{ backgroundColor: 'white' }}>{c}</li>;
        })}
      </ul>
    </div>
  );
};
const app = opine();
const browserBundlePath = '/browser.js';

const js = `import React from "https://dev.jspm.io/react@16.13.1";\nimport ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";\nconst App = ${App};\nReactDOM.hydrate(React.createElement(App), document.body);`;

const html = `<html><head><script type="module" src="${browserBundlePath}"></script><style>* { font-family: Helvetica; }</style></head><body>${(
  ReactDOMServer as any
).renderToString(<App />)}</body></html>`;

app.use(browserBundlePath, (req, res, next) => {
  res.type('application/javascript').send(js);
});

app.use('/', (req, res, next) => {
  res.type('text/html').send(html);
});

app.listen({ port: 3000 });

console.log('Denoland listening at http://localhost:3000');
