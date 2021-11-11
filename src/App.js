import { Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Provider } from "react-redux";

import { configureStore } from "./store";

// css
import "./assets/scss/main.scss";

// routes config
import routes from "./routes";

import TopNav from "./conteners/TopNav";

const store = configureStore();
const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <TopNav />
        <Switch>
          <Suspense fallback="loading...">
            {routes.map((route, i) => (
              <Route
                key={i}
                exact={true}
                path={route.path}
                component={route.component}
              />
            ))}
          </Suspense>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
