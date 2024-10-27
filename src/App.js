import './App.css';
import { Counter } from './features/counter/Counter';
import store from './store/reduxstore'
import { Provider } from 'react-redux'
import { Link } from 'react-router-dom'


// include tailwind css as well here
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Link to="/other-component">Go to Other Component</Link> */}
        <Counter></Counter>

      </div>
    </Provider>
  );
}

export default App;
