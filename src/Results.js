import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Results.scss';

let city = "";

let itineraries = [
    {
        name: "Royal Palaces",
        city: "London, England",
        date: new Date("2018-05-28"),
        rating: 5,
        num_reviews: 110,
        tags: ["kids", "outdoor", "active"],
        breakfast: "Clotted Cream and Scones",
        breakfast_cost: "$$",
        breakfast_text: "Tea at Buckingham Palace is a must, and a perfect way to do it is by stopping for breakfast before lines get long. Scones are my favorite breakfast food with a pot of tea. Clotted cream is amazing, but there is also jam and honey for little ones.",
        morning_activity: "Changing of the Gaurd",
        morning_cost: "Free",
        morning_text: "The Changing of the Gaurd is one of the best royal experience. The Gaurd changes at 10 am every morning, so don't worry if it is raining. The best place to see is along the East side of the palace gates.",
        lunch: "Pret a Manager",
        lunch_cost: "$",
        lunch_text: "This is my family's favorite place to eat around London. It is a great healthy option to fast food. Their sandwiches are great, and the have fresh seasonal fruit that my kids loved.",
        afternoon_activity: "Kensington Palace",
        afternoon_cost: "$",
        afternoon_text: "Kensington is at the other ends of Hyde and Kensington Parks from Buckingham. If it is a nice day, it is really fun to walk accross the park. If your kids are a bit older, try renting bikes from the entrance of Hyde to bike accross the parks and return at the end of Kensignton.",
        dinner: "Plowmans at The Kingsman",
        dinner_cost: "$",
        dinner_text: "In England, pubs are family resturants. The Kingsman is just off the side of Kensignton Park and has the best Plowsman in town. Kids always are a fan of their Fish and Chips with mushy peas.",
        evening_activity: "Ride the Eye",
        evening_cost: "$$",
        evening_text: "The Eye is a bit of a treck from Kensington, but if you are still up for a bit of adventure, the giant wheel is the perfect way to \"crown\" your day.",
    },
    {
        name: "Park Walks",
        city: "London, England",
        date: new Date("2017-07-23"),
        rating: 3,
        num_reviews: 24,
        tags: ["kids", "outdoor", "active"],
        breakfast: "Pastries",
        breakfast_cost: "$",
        breakfast_text: "Pastries are my family's favorite way to start the day. Try any cafe or a local Pret a Maneger.",
        morning_activity: "Kew Gardens",
        morning_cost: "$",
        morning_text: "Going to Kew Gardens was my absolute favorite thing we did while in London. I have always loved glass houses, and they have not one, but THREE amazing victorian era glass houses. The Palm House is amazing with beautiful wrought iron staircases and catwalks. If you want an instagram worthy picture, this is your spot.",
        lunch: "Fish and Chips",
        lunch_cost: "$",
        lunch_text: "A great British classic and a favorite with kids and adults alike.",
        afternoon_activity: "Kensington Park",
        afternoon_cost: "Free",
        afternoon_text: "Kensington Park and the connected Hyde Park are great for sunny days. Kensington a wonderful playground near the pond and Kensington Palace with a pirate ship. It is also really fun to rent bikes to ride around.",
        dinner: "Local Pub",
        dinner_cost: "$$",
        dinner_text: "Can't leave Britian without having dinner at a pub! We went to a different pub every night we were here.",
        evening_activity: "Boat along the river",
        evening_cost: "$$",
        evening_text: "An evening cruise is always a fun way to end the day. If you are feeling fancy, skip the pub and book a dinner cruise.",
    },
    {
        name: "Impressions of Impressionism",
        city: "Paris, France",
        date: new Date("2019-10-10"),
        rating: 4,
        num_reviews: 200,
        tags: ["indoor"],
        breakfast: "Coffee and Croisaunt in a Local Cafe",
        morning_activity: "The Louve",
        lunch: "Crepe",
        afternoon_activity: "The Orangery",
        dinner: "Le Petit Macaron",
        evening_activity: "Paris Opera"
    },
    {
        name: "Church and State",
        city: "Rome, Italy",
        date: new Date("2016-04-01"),
        rating: 4,
        num_reviews: 156,
        tags: ["outdoor","active"],
        breakfast: "Coffee and pastery",
        morning_activity: "The Forum",
        lunch: "Gelato",
        afternoon_activity: "The Colosseum",
        dinner: "Pizzaria de Gorgiono",
        evening_activity: "The Vatican"
    },
    {
        name: "Renaince Sculpture",
        city: "Rome, Italy",
        date: new Date("2018-07-04"),
        rating: 3,
        num_reviews: 14,
        tags:["indoor", "outdoor", "active"],
        breakfast: "Cannoli",
        morning_activity: "The Vatican Muesum",
        lunch: "Pizzaria",
        afternoon_activity: "The Borghese",
        dinner: "Pasta at The Palatine House",
        evening_activity: "Fountain Walk"
    },
    {
        name: "Pan-theon: Greek Food",
        city: "Athens, Greece",
        date: new Date("2010-10-10"),
        rating: 5,
        num_reviews: 135,
        tags:["indoor","outdoor"],
        breakfast: "Traditional greek breakfast",
        morning_activity: "The Pantheon",
        lunch: "Street Gyro",
        afternoon_activity: "Tour of Athenian Olive Farm",
        dinner: "Dinner with Farm Family",
        evening_activity: "Evening walk"
    },
    {
        name: "Travel Haiku",
        city: "Tokyo, Japan",
        date: new Date("2015-12-30"),
        rating: 3,
        num_reviews: 10,
        tags:["kids", "outdoor", "active"],
        breakfast: "Cinnimon swirl bread",
        morning_activity: "Cherry blossem walk",
        lunch: "Ramen House",
        afternoon_activity: "Bridge walk",
        dinner: "Sushi and Teriaki",
        evening_activity: "Tokyo Tower"
    },
    {
        name: "Law and Order",
        city: "London, England",
        date: new Date("2017-11-11"),
        rating: 3,
        num_reviews: 98,
        tags:["outdoor", "active"],
        breakfast: "Traditional English Breakfast",
        morning_activity: "Tour of Parliment",
        lunch: "Parliment Cafeteria",
        afternoon_activity: "Tower of London",
        dinner: "Fish and Chips",
        evening_activity: "Seats of Power walk"
    },
];

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//kids, active, indoor, outdoor
let filtersChecked = [false, false, false, false];

//Highest Rated, Most Reviewed, Most Recent
let sortSelected = "Highest Rated";

class Filters extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            highestRated: "Highest Rated",
            mostReviewed: "Most Reviewed",
            mostRecent: "Most Recent",
            kids: "Kids",
            active: "Active",
            outdoor: "Outdoor",
            indoor: "Indoor",
        }
    }

    sortHighestRated() {
        sortSelected = "Highest Rated";
        ReactDOM.render(<Results />, document.getElementById("results"));
    }
    sortMostReviewed() {
        sortSelected = "Most Reviewed";
        ReactDOM.render(<Results />, document.getElementById("results"));
    }
    sortMostRecent() {
        sortSelected = "Most Recent";
        ReactDOM.render(<Results />, document.getElementById("results"));
    }

    filterKid() {
        filtersChecked[0] = !filtersChecked[0];
        ReactDOM.render(<Results />, document.getElementById("results"));
    }
    filterActive() {
        filtersChecked[1] = !filtersChecked[1];
        ReactDOM.render(<Results />, document.getElementById("results"));
    }
    filterOutdoor() {
        filtersChecked[2] = !filtersChecked[2];
        ReactDOM.render(<Results />, document.getElementById("results"));
    }
    filterIndoor() {
        filtersChecked[3] = !filtersChecked[3];
        ReactDOM.render(<Results />, document.getElementById("results"));
    }

    render() {
        return (
            <div id="filter">
                <h3>Sort</h3>
                <button id="highestRatedSort" onClick={this.sortHighestRated}>{this.state.highestRated}</button>
                <button id="mostReviewedSort" onClick={this.sortMostReviewed}>{this.state.mostReviewed}</button>
                <button id="mostRecentSort" onClick={this.sortMostRecent}>{this.state.mostRecent}</button>
                <h3>Filter</h3>
                <input name="kidBox" type="checkbox" checked="false" id="kidFilter" onClick={this.filterKid}>{this.state.kids}</input>
                <checkbox id="activeFilter" onClick={this.filterActive}>{this.state.active}</checkbox>
                <button id="outdoorFilter" onClick={this.filterOutdoor}>{this.state.outdoor}</button>
                <button id="indoorFilter" onClick={this.filterIndoor}>{this.state.indoor}</button>
            </div>
        );
    }
}

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: [],
        };
    }

    filterFunction(l) {
        if(!filtersChecked[0] || (filtersChecked[0] && l.tags.indexOf("kids")) > -1) {
            if(!filtersChecked[1] || (filtersChecked[1] && l.tags.indexOf("active")) > -1) {
                if(!filtersChecked[2] || (filtersChecked[2] && l.tags.indexOf("outdoor")) > -1) {
                    if(!filtersChecked[3] || (filtersChecked[3] && l.tags.indexOf("indoor")) > -1) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    render() {
        this.itineraries = itineraries;

        if(sortSelected.includes("Highest Rated")) {
            this.itineraries = itineraries.sort((b, a) => a.rating - b.rating);
        }
        else if(sortSelected.includes("Most Reviewed")) {
            this.itineraries = itineraries.sort((b, a) => a.num_reviews - b.num_reviews);
        }
        else {
            this.itineraries = itineraries.sort((b, a) => a.date - b.date);
        }
        return (
            <div id="results">
                <ul>
                    {this.itineraries.map(l => {
                        if(l.city.trim().toLowerCase().includes(city) && this.filterFunction(l)) {
                            return (
                                <div id="resultCard">
                                    <li id="listItem">
                                        <p id="resultTitle">{l.name}</p>
                                        <p id="resultCity">A day in {l.city}</p>
                                        <p id="date">Posted {months[l.date.getUTCMonth()]}, {l.date.getFullYear()}</p>
                                        <p>{l.rating}/5 {l.num_reviews} Reviews</p>
                                        <p>Tags: {l.tags.join(", ")}</p>
                                        <p>Food:
                                            <ul id="foodlist">
                                                <li>{l.breakfast}</li>
                                                <li>{l.lunch}</li>
                                                <li>{l.dinner}</li>
                                            </ul>
                                        </p>
                                        <p>Activities:
                                            <ul id="eventlist">
                                                <li>{l.morning_activity}</li>
                                                <li>{l.afternoon_activity}</li>
                                                <li>{l.evening_activity}</li>
                                            </ul>
                                        </p>
                                    </li>
                                </div>
                            );
                        }
                    })}
                </ul>
            </div>
        );
    }
}

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
        };
    }

    handleSearchChange(event) {
        this.setState({searchString: event.target.value})
    }

    searchClicked() {
        city = this.state.searchString.trim().toLowerCase();
        ReactDOM.render(<Results />, document.getElementById("results"));
    }


    render() {
        const {
            search,
        } = this.state;

        return (
            <div id="banner" >
                <div id='logo'>
                    <h1>Tripler</h1>
                    <p>find tomorrow's adventure</p>
                </div>
                <div id="searchContainer">
                    <input
                        id="searchBar"
                        type="text"
                        value={this.state.searchString}
                        placeholder="city"
                        onChange={this.handleSearchChange.bind(this)}
                    />
                    <button
                        type="button"
                        id="searchButton"
                        onClick={this.searchClicked.bind(this)}>
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

export {
    Filters,
    Results,
    Banner,
}