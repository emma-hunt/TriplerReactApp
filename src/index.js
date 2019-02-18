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
            <Route exact path={ process.env.PUBLIC_URL + '/' } component={ HomeSearchPage }/>
            <Route path={ process.env.PUBLIC_URL + '/results' } component={ ResultsPage }/>
            <Route path={ process.env.PUBLIC_URL + '/itinerary' } component={ ItineraryPage }/>
        </div>
    </BrowserRouter>, document.getElementById("container")
)

serviceWorker.unregister();
