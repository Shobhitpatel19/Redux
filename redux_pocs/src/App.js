import './App.css';
import Ball from "./components/Ball"
// import Ball from "./components/Ball"
// import Bat from "./components/Bat"
// import BatuseReducer from "./components/BatuseReducer"
import { Provider } from "react-redux";
import store from './store';

function App() {
  return (
    // <>
    //   {/* <Ball/> */}
    //   <Bat/>
    //   <BatuseReducer/>
    // </>

    <>
    <Provider store={store}>
      <Ball/>
    </Provider>
    </>
  );
}

export default App;
