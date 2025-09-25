import { Switch, Route } from 'react-router-dom';

import { useState } from 'react';

import Siparis from './pages/Siparis';

import Anasayfa from "./pages/Anasayfa";

import Success from './pages/Success';



export default function App() {

  const [successVeri, setSuccessVeri] = useState(null);

  return (
    <>
      <Switch>
          <Route exact path="/">
            <Anasayfa />
          </Route>
          <Route path="/siparis">
              <Siparis setSuccessVeri={setSuccessVeri} />
          </Route>
          <Route path="/success">
              <Success successVeri={successVeri} />
          </Route>
        </Switch>
    </>
  )
}
