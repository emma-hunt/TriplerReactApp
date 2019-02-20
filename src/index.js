import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HomeSearchPage, ResultsPage, ItineraryPage } from './TriplerApp';
import * as serviceWorker from './serviceWorker';
import './TriplerApp.scss';
import { Route, BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path='/' component={ HomeSearchPage }/>
            <Route path='/results' component={ ResultsPage }/>
            <Route path='/itinerary' component={ ItineraryPage }/>
        </div>
    </BrowserRouter>, document.getElementById("container")
)

serviceWorker.unregister();
