// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from 'https://dev.jspm.io/react/index.js';

let colors: string[] = [];

const App = () => {
  const [state, setState] = React.useState<HTMLInputElement | null>('');
  const handler = (e: { target: HTMLInputElement }) => {
    setState(e.target);
  };

  console.log('User:', state);
  return (
    <div style={{ backgroundColor: 'black' }}>
      <h1 style={{ backgroundColor: 'white' }}>Proyecto en Deno</h1>
      <form>
        <label style={{ backgroundColor: 'white' }}>
          Submit your favorite color:
        </label>
        <input
          style={{ backgroundColor: 'white' }}
          type="submit"
          value="Submit"
          onChange={handler}
        />
      </form>
      {colors.push(state as string)}
      <ul style={{ backgroundColor: 'white' }}>{colors}</ul>
    </div>
  );
};

export default App;
