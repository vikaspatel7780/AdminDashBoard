
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './Redux/store.js'

const App = () => {
  return (
    <Router>
    <Provider store={store}>

  
      <Dashboard />
      </Provider>
      <Toaster />
    </Router>
  );
};

export default App;
