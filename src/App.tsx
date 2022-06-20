import './app.scss';

const App: React.FC = () => {
  const name: string = 'Custom React App v18 - Typescript & Webpack 💻 👍 ';
  return (
    <div className="app-container">
      <div className="workspace">
        <h1 className="custom-styles">Hi, this is a boilerplate project called: {name}</h1>
        <span>It uses:</span>
        <ul>
          <li>React v18</li>
          <li>Typescript</li>
          <li>Webpack</li>
          <li>Babel</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
