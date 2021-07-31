import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SI from './Components/SI-units';
import Error from './Components/error';
import Conversions from './Components/conversions';

function App() {
    return (
        <main>
            <Switch>
                {/* here we have used exact keyword to tell the browser that just look for '/' in url. 
              If don't do this then it will take other things like http://localhost:3000 as the url */}
                <Route path="/" component={SI} exact />
                <Route path="/conversions" component={Conversions} />
                <Route component={Error} />
            </Switch>
        </main>
    );
}

export default App;
