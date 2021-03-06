import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Explore from "./components/Explore";
import ImageInput from './components/ImageInput';
import SingleImage from "./components/SingleImage";
import ImageEdit from "./components/ImageEdit";
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <SplashPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/images">
            <Explore />
          </Route>
          <Route exact path="/images/upload">
            <ImageInput />
          </Route>
          <Route exact path="/images/:id">
            <SingleImage />
          </Route>
          <Route exact path="images/:id/edit">
             <ImageEdit />
          </Route>
          <Route>
            <h1>404: Not Found</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;