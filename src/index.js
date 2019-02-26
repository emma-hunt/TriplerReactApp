import React from 'react';
import ReactDOM from 'react-dom';
import { HomeSearchPage, ResultsPage, ItineraryPage } from './TriplerApp';
import * as serviceWorker from './serviceWorker';
import './TriplerApp.scss';
import { Route, HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path='/' component={ HomeSearchPage }/>
            <Route exact path='/results' component={ ResultsPage }/>
            <Route exact path='/itinerary' component={ ItineraryPage }/>
        </div>
    </HashRouter>, document.getElementById("container")
)

serviceWorker.unregister();
