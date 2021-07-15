import AppContainer from "./screen/AppScreenContainer";
import store from "./store/store";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContainer/>
      </Router>
    </Provider>
  );
}

export default App;
