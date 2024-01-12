import React from "react";
import DisplayData from "./components/DisplayData";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore } from "redux";
import Reducer from "./components/Reducer";
import {thunk} from "redux-thunk";

const store = legacy_createStore(Reducer, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="h-screen">
          <div className="w-full h-full p-6 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4 flex flex-col justify-center items-center">
              Data Display
            </h1>
            <DisplayData />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
