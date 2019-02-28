import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import StarRatings from 'react-star-rating-component';
import SkyLight from 'react-skylight';

let city = '';

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
        breakfast_time: 1,
        breakfast_text: "Tea at Buckingham Palace is a must, and a perfect way to do it is by stopping for breakfast before lines get long. Scones are my favorite breakfast food with a pot of tea. Clotted cream is amazing, but there is also jam and honey for little ones.",
        morning_activity: "Changing of the Guard",
        morning_cost: "Free",
        morning_time: 2,
        morning_text: "The Changing of the Guard is one of the best royal experience. The Gaurd changes at 10 am every morning, so don't worry if it is raining. The best place to see is along the East side of the palace gates.",
        lunch: "Pret a Manager",
        lunch_cost: "$",
        lunch_time: 1,
        lunch_text: "This is my family's favorite place to eat around London. It is a great healthy option to fast food. Their sandwiches are great, and the have fresh seasonal fruit that my kids loved.",
        afternoon_activity: "Kensington Palace",
        afternoon_cost: "$",
        afternoon_time: 2,
        afternoon_text: "Kensington is at the other ends of Hyde and Kensington Parks from Buckingham. If it is a nice day, it is really fun to walk accross the park. If your kids are a bit older, try renting bikes from the entrance of Hyde to bike accross the parks and return at the end of Kensignton.",
        dinner: "Plowmans at The Kingsman",
        dinner_cost: "$",
        dinner_time: 1.5,
        dinner_text: "In England, pubs are family resturants. The Kingsman is just off the side of Kensignton Park and has the best Plowsman in town. Kids always are a fan of their Fish and Chips with mushy peas.",
        evening_activity: "Ride the Eye",
        evening_cost: "$$",
        evening_time: 2,
        evening_text: "The Eye is a bit of a trek from Kensington, but if you are still up for a bit of adventure, the giant wheel is the perfect way to \"crown\" your day.",
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
        breakfast_time: 0.5,
        breakfast_text: "Pastries are my family's favorite way to start the day. Try any cafe or a local Pret a Maneger.",
        morning_activity: "Kew Gardens",
        morning_cost: "$",
        morning_time: 2,
        morning_text: "Going to Kew Gardens was my absolute favorite thing we did while in London. I have always loved glass houses, and they have not one, but THREE amazing victorian era glass houses. The Palm House is amazing with beautiful wrought iron staircases and catwalks. If you want an instagram worthy picture, this is your spot.",
        lunch: "Fish and Chips",
        lunch_cost: "$",
        lunch_time: 1.5,
        lunch_text: "A great British classic and a favorite with kids and adults alike.",
        afternoon_activity: "Kensington Park",
        afternoon_cost: "Free",
        afternoon_time: 1.5,
        afternoon_text: "Kensington Park and the connected Hyde Park are great for sunny days. Kensington a wonderful playground near the pond and Kensington Palace with a pirate ship. It is also really fun to rent bikes to ride around.",
        dinner: "Local Pub",
        dinner_cost: "$$",
        dinner_time: 1.5,
        dinner_text: "Can't leave Britian without having dinner at a pub! We went to a different pub every night we were here.",
        evening_activity: "Boat along the river",
        evening_cost: "$$",
        evening_time: 2.5,
        evening_text: "An evening cruise is always a fun way to end the day. If you are feeling fancy, skip the pub and book a dinner cruise.",
    },
    {
        name: "Impressions of Impressionism",
        city: "Paris, France",
        date: new Date("2019-10-10"),
        rating: 4,
        num_reviews: 200,
        tags: ["indoor"],
        breakfast: "Coffee and Croissant in a Local Cafe",
        breakfast_cost: "$",
        breakfast_time: 1,
        breakfast_text: "This is filler text. It is just for ascetic purposes. Blah blah blah blah. Yummy breakfast. Nom nom nom.",
        morning_activity: "The Louve",
        morning_cost: "$$$",
        morning_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        morning_time: 2.5,
        lunch: "Crepe",
        lunch_cost: "$",
        lunch_time: 0.5,
        lunch_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        afternoon_activity: "The Orangery",
        afternoon_cost: "$$",
        afternoon_time: 1.5,
        afternoon_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        dinner: "Le Petit Macaron",
        dinner_cost: "$$$",
        dinner_time: 1.5,
        dinner_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        evening_activity: "Paris Opera",
        evening_cost: "$$$",
        evening_time: 3,
        evening_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
    },
    {
        name: "Church and State",
        city: "Rome, Italy",
        date: new Date("2016-04-01"),
        rating: 4,
        num_reviews: 156,
        tags: ["outdoor","active"],
        breakfast: "Coffee and pastry",
        breakfast_cost: "$",
        breakfast_time: 1,
        breakfast_text: "This is filler text. It is just for ascetic purposes. Blah blah blah blah. Yummy breakfast. Nom nom nom.",
        morning_activity: "The Forum",
        morning_cost: "$$",
        morning_time: 2,
        morning_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        lunch: "Gelato",
        lunch_cost: "$",
        lunch_time: 0.5,
        lunch_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        afternoon_activity: "The Colosseum",
        afternoon_cost: "$$",
        afternoon_time: 2.5,
        afternoon_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        dinner: "Pizzaria de Gorgiono",
        dinner_cost: "$",
        dinner_time: 1.5,
        dinner_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        evening_activity: "The Vatican",
        evening_cost: "$$$",
        evening_time: 2.5,
        evening_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
    },
    {
        name: "Renaince Sculpture",
        city: "Rome, Italy",
        date: new Date("2018-07-04"),
        rating: 3,
        num_reviews: 14,
        tags:["indoor", "outdoor", "active"],
        breakfast: "Cannoli",
        breakfast_cost: "$$",
        breakfast_time: 0.5,
        breakfast_text: "This is filler text. It is just for ascetic purposes. Blah blah blah blah. Yummy breakfast. Nom nom nom.",
        morning_activity: "The Vatican Museum",
        morning_cost: "$$",
        morning_time: 2.5,
        morning_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        lunch: "Pizzaria",
        lunch_cost: "$$",
        lunch_time: 1.5,
        lunch_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        afternoon_activity: "The Borghese",
        afternoon_cost: "$$",
        afternoon_time: 2,
        afternoon_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        dinner: "Pasta at The Palatine House",
        dinner_cost: "$$",
        dinner_time: 1.5,
        dinner_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        evening_activity: "Fountain Walk",
        evening_cost: "Free",
        evening_time: 2.5,
        evening_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
    },
    {
        name: "Pan-theon: Greek Food",
        city: "Athens, Greece",
        date: new Date("2010-10-10"),
        rating: 5,
        num_reviews: 135,
        tags:["indoor","outdoor"],
        breakfast: "Traditional greek breakfast",
        breakfast_cost: "$$$",
        breakfast_time: 1.5,
        breakfast_text: "This is filler text. It is just for ascetic purposes. Blah blah blah blah. Yummy breakfast. Nom nom nom.",
        morning_activity: "The Pantheon",
        morning_cost: "$$$",
        morning_time: 1.5,
        morning_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        lunch: "Street Gyro",
        lunch_cost: "$",
        lunch_time: 1,
        lunch_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        afternoon_activity: "Tour of Athenian Olive Farm",
        afternoon_cost: "$$",
        afternoon_time: 2,
        afternoon_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        dinner: "Dinner with Farm Family",
        dinner_cost: "$$",
        dinner_time: 1.5,
        dinner_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        evening_activity: "Evening walk",
        evening_cost: "Free",
        evening_time: 2,
        evening_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
    },
    {
        name: "Travel Haiku",
        city: "Tokyo, Japan",
        date: new Date("2015-12-30"),
        rating: 3,
        num_reviews: 10,
        tags:["kids", "outdoor", "active"],
        breakfast: "Cinnamon swirl bread",
        breakfast_cost: "$$",
        breakfast_time: 1,
        breakfast_text: "This is filler text. It is just for ascetic purposes. Blah blah blah blah. Yummy breakfast. Nom nom nom.",
        morning_activity: "Cherry blossom walk",
        morning_cost: "Free",
        morning_time: 1.5,
        morning_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        lunch: "Ramen House",
        lunch_cost: "$$",
        lunch_time: 1,
        lunch_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        afternoon_activity: "Bridge walk",
        afternoon_cost: "Free",
        afternoon_time: 1.5,
        afternoon_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        dinner: "Sushi and Teriaki",
        dinner_cost: "$$$",
        dinner_time: 1.5,
        dinner_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        evening_activity: "Tokyo Tower",
        evening_cost: "$$",
        evening_time: 1.5,
        evening_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
    },
    {
        name: "Law and Order",
        city: "London, England",
        date: new Date("2017-11-11"),
        rating: 3,
        num_reviews: 98,
        tags:["outdoor", "active"],
        breakfast: "Traditional English Breakfast",
        breakfast_cost: "$$",
        breakfast_time: 1.5,
        breakfast_text: "This is filler text. It is just for ascetic purposes. Blah blah blah blah. Yummy breakfast. Nom nom nom.",
        morning_activity: "Tour of Parliament",
        morning_cost: "$",
        morning_time: 2,
        morning_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        lunch: "Parliament Cafeteria",
        lunch_cost: "$$",
        lunch_time: 1.5,
        lunch_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        afternoon_activity: "Tower of London",
        afternoon_cost: "$$",
        afternoon_time: 1.5,
        afternoon_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        dinner: "Fish and Chips",
        dinner_cost: "$",
        dinner_time: 1,
        dinner_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
        evening_activity: "Seats of Power walk",
        evening_cost: "Free",
        evening_time: 2,
        evening_text: "More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. More filler text. Fun stuff. Blah blah blah. ",
    },
];

//Highest Rated, Most Reviewed, Most Recent
let sortSelected = "Highest Rated";

//kids, active, indoor, outdoor
let filtersChecked = [false, false, false, false];

class HomeSearchPage extends React.Component {
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
        window.location.hash = "#/results/?" + this.state.searchString.trim().toLowerCase();
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            window.location.hash = "#/results/?" + this.state.searchString;//.trim().toLowerCase();
        }
    }

    render() {
        return(
            <div id="homePageContainer">
                <div id="homeBannerContainer">
                    <div id='logo'>
                        <img id="logoImg" src="resources/images/Logo.svg" alt="Tripler Logo"></img>
                        <h1 id="title">Tripler</h1>
                        <p id="tagline">find tomorrow's adventure</p>
                    </div>
                </div>
                <div id="homeSearchContainer">
                    <p id="searchPrompt">Browse single day itineraries from around the world</p>
                    <div id="homeSearchBarContainer">
                        <input
                            id="homeSearchBar"
                            type="text"
                            value={this.state.searchString}
                            placeholder="Where to next?"
                            onChange={this.handleSearchChange.bind(this)}
                            onKeyPress={this.handleKeyPress}
                        />
                        <button
                            type="button"
                            onClick={ this.searchClicked.bind(this) }
                            id="homeSearchButton"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

class ResultsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            itineraries: [],
            itemName: '',
            highlight: "Highest Rated",
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

    sortHighestRated() {
        sortSelected = "Highest Rated";
        ReactDOM.render(<Results />, document.getElementById("results"));
        this.setState({
            highlight: "Highest Rated",
        });
    }
    sortMostReviewed() {
        sortSelected = "Most Reviewed";
        ReactDOM.render(<Results />, document.getElementById("results"));
        this.setState({
            highlight: "Most Reviewed",
        });
    }
    sortMostRecent() {
        sortSelected = "Most Recent";
        ReactDOM.render(<Results />, document.getElementById("results"));
        this.setState({
            highlight: "Most Recent",
        });
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

    handleSearchChange(event) {
        this.setState({searchString: event.target.value})
    }

    searchClicked() {
        window.location.hash = "#/results/?" + this.state.searchString;//.trim().toLowerCase();
    }

    itemClicked(name) {
        this.setState({
            itemName: name.replace(/\s/g, ''),
        });
        window.location.hash = "#/itinerary/?" + name.replace(/\s/g, '').toLowerCase();

    }

    logoClicked() {
        window.location.hash = '#/';
    }

    getSearchCity() {
        city = this.props.location.search.substring(1);
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.searchClicked();
        }
    }

    render() {
        this.getSearchCity();
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
            <div id="resultsPageContainer">
                <div id="homeBannerContainer">
                    <div id='logo' onClick={ () => this.logoClicked() }>
                        <img id="logoImg" src="resources/images/Logo.svg" alt="Tripler Logo"></img>
                        <h1 id="title">Tripler</h1>
                        <p id="tagline">find tomorrow's adventure</p>
                    </div>
                    <div id="searchContainer">
                        <input
                            id="searchBar"
                            type="text"
                            value={this.state.searchString}
                            placeholder={ city }
                            onChange={this.handleSearchChange.bind(this)}
                            onKeyPress={this.handleKeyPress}
                        />
                        <button
                            type="button"
                            id="searchButton"
                            onClick={this.searchClicked.bind(this)}>
                            Search
                        </button>
                    </div>
                </div>
                <br></br>

                <div id="resultsMain">
                    <div id="filter">
                        <div>
                            <h3>Sort</h3>
                        </div>
                        <div id="sortChild">
                            <p id="highestRatedSort" style={{color: sortSelected.includes("Highest Rated") ? "#4eaabc" : "black", fontWeight: sortSelected.includes("Highest Rated") ? "bold" : "normal"}} onClick={this.sortHighestRated.bind(this)}>Highest Rated</p>
                        </div>
                        <div id="sortChild">
                            <p id="mostReviewedSort" style={{color: sortSelected.includes("Most Reviewed") ? "#4eaabc" : "black", fontWeight: sortSelected.includes("Most Reviewed") ? "bold" : "normal"}} onClick={this.sortMostReviewed.bind(this)}>Most Reviewed</p>
                        </div>
                        <div id="sortChild">
                            <p id="mostRecentSort" style={{color: sortSelected.includes("Most Recent") ? "#4eaabc" : "black", fontWeight: sortSelected.includes("Most Recent") ? "bold" : "normal"}} onClick={this.sortMostRecent.bind(this)}>Most Recent</p>
                        </div>
                        <div>
                            <h3>Filter</h3>
                        </div>
                        <div id="filterChild">
                            <input type="checkbox" onChange={this.filterKid} ></input> <label id="kidFilter">Kids</label>
                        </div>
                        <div id="filterChild">
                            <input type="checkbox" onChange={this.filterActive} ></input> <label id="activeFilter">Active</label>
                        </div>
                        <div id="filterChild">
                            <input type="checkbox" onChange={this.filterOutdoor} ></input> <label id="outdoorFilter">Outdoor</label>
                        </div>
                        <div id="filterChild">
                            <input type="checkbox" onChange={this.filterIndoor} ></input> <label id="indoorFilter">Indoor</label>
                        </div>
                    </div>

                    <div id="results">
                        <div>
                            <ul id="resultsForCityText">
                                <li>
                                    <p>Itineraries for { city }</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                {this.itineraries.map(l => {
                                    if(l.city.trim().toLowerCase().includes(city.trim().toLowerCase()) && this.filterFunction(l)) {
                                        return (
                                            <div id="resultCard">
                                                <li id="listItem" onClick={() => this.itemClicked(l.name)}>
                                                    <div id="cardTop">
                                                        <div id="rtc">
                                                            <p id="resultTitle">{l.name}</p>
                                                        </div>
                                                        <p id="itemDate">Posted {l.date.toDateString()}</p>

                                                    </div>
                                                    <div id="cardBottom">
                                                        <div id="cardBody">
                                                            <p id="resultCity">{l.city}</p>
                                                            <div id="ratings">
                                                                <StarRatings
                                                                    name='rating'
                                                                    value={l.rating}
                                                                    starCount={5}
                                                                    starDimension='50px'
                                                                    starRatedColor="#FFD95F"
                                                                    starColor="#FFD95F"
                                                                    emptyStarColor="grey"
                                                                />
                                                                <p id="numReviews">{l.num_reviews} Reviews</p>
                                                            </div>
                                                            <p>Tags: {l.tags.join(", ")}</p>
                                                        </div>
                                                        <div id="eventListIcons">
                                                            <div>
                                                                <img id="mealImg" src="resources/images/meal.svg" alt="TriplerFood"></img>
                                                                <p id="breakfast">{l.breakfast}</p>
                                                            </div>
                                                            <div>
                                                                <img id="activityImg" src="resources/images/activity.png" alt="TriplerAct"></img>
                                                                <p>{l.morning_activity}</p>
                                                            </div>
                                                            <div>
                                                                <img id="mealImg" src="resources/images/meal.svg" alt="TriplerFood"></img>
                                                                <p>{l.lunch}</p>
                                                            </div>
                                                            <div>
                                                                <img id="activityImg" src="resources/images/activity.png" alt="TriplerAct"></img>
                                                                <p>{l.afternoon_activity}</p>
                                                            </div>
                                                            <div>
                                                                <img id="mealImg" src="resources/images/meal.svg" alt="TriplerFood"></img>
                                                                <p>{l.dinner}</p>
                                                            </div>
                                                            <div>
                                                                <img id="activityImg" src="resources/images/activity.png" alt="TriplerAct"></img>
                                                                <p>{l.evening_activity}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </li>
                                            </div>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class ItineraryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraryName: '',
            searchString: '',
            printVisible: false,
            emailVisible: false,
            emailString: '',
        };
    }

    handleSearchChange(event) {
        this.setState({ searchString: event.target.value });
    }

    handleEmailTextChange(event) {
        this.setState( { emailString: event.target.value });
    }

    searchClicked() {
        window.location.hash = "#/results/?" + this.state.searchString;//.trim().toLowerCase();
    }

    logoClicked() {
        window.location.hash = '#/';
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.searchClicked();
        }
    }

    handleEmailKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.emailButtonClicked();
        }
    }

    emailButtonClicked() {
        ReactDOM.render(<EmailSent />, document.getElementById("emailContainer"));
    }

    logoClicked() {
        window.location.hash = '#/';
    }

    getItineraryName() {
        return this.props.location.search.substring(1);
    }

    printClicked() {
        this.setState({
            printVisible: true,
        });
        console.log("Hello");
    }

    emailClicked() {
        this.setState({
            emailVisible: true,
        });
    }

    closeClicked() {
        this.setState({
            printVisible: false,
            emailVisible: false,
        });
    }

    getTimeAddition(time) {
        if (time <= 1) {
            return "hour";
        }
        else {
            return "hours";
        }
    }


    render() {
        this.getItineraryName();

        var skylightStyle = {
            backgroundColor: '#E9F1F4',
        };

        return (
            <div id="itineraryPageContainer">
                <div id="homeBannerContainer">
                    <div id='logo' onClick={ () => this.logoClicked() }>
                        <img id="logoImg" src="resources/images/Logo.svg" alt="Tripler Logo"></img>
                        <h1 id="title">Tripler</h1>
                        <p id="tagline">find tomorrow's adventure</p>
                    </div>
                    <div id="searchContainer">
                        <input
                            id="searchBar"
                            type="text"
                            value={this.state.searchString}
                            placeholder="Search"
                            onChange={this.handleSearchChange.bind(this)}
                            onKeyPress={this.handleKeyPress}
                        />
                        <button
                            type="button"
                            id="searchButton"
                            onClick={this.searchClicked.bind(this)}>
                            Search
                        </button>
                    </div>
                </div>
                <br></br>
                <div id="itineraryMain">
                    {itineraries.map(i => {
                        if (i.name.replace(/\s/g,'').toLowerCase().includes(this.getItineraryName())) {
                            return(
                                <div id="itineraryItem">
                                    <div id="itineraryTop">
                                        <p id="resultTitle">{i.name}</p>
                                        <img
                                            id="printImg"
                                            src="resources/images/print.png"
                                            alt="Print Button"
                                            onClick={ () => this.printPopup.show() }>
                                        </img>
                                        <SkyLight
                                            id="skylight"
                                            dialogStyles={ skylightStyle }
                                            hideOnOverlayClicked
                                            ref={ ref => this.printPopup = ref }>
                                            <p id="printPopup">Itinerary successfully sent to print queue!</p>
                                        </SkyLight>
                                        <img
                                            id="emailImg"
                                            src="resources/images/email.png"
                                            alt="Email Button"
                                            onClick={ () => this.emailPopup.show() }>
                                        </img>
                                        <SkyLight
                                            id="skylight"
                                            dialogStyles={ skylightStyle }
                                            hideOnOverlayClicked
                                            ref={ ref => this.emailPopup = ref }>
                                            <div id="emailContainer">
                                                <div id="emailPrompt">
                                                    <p>Send itinerary to email:</p>
                                                </div>
                                                <div id="emailTextBarContainer">
                                                    <input
                                                        id="emailTextBar"
                                                        type="text"
                                                        placeholder="email@address.com"
                                                        onKeyPress={ this.handleEmailKeyPress }
                                                    />
                                                </div>
                                                <div id="emailButtonContainer">
                                                    <button
                                                        type="button"
                                                        id="emailButton"
                                                        onClick={ () => this.emailButtonClicked()}>
                                                        Search
                                                    </button>
                                                </div>
                                            </div>
                                        </SkyLight>
                                    </div>
                                    <p id="resultCity">{i.city}</p>
                                    <p>Posted { i.date.toDateString() }</p>
                                    <div id="ratings">
                                        <StarRatings
                                            name='rating'
                                            value={ i.rating }
                                            starCount={5}
                                            starColor="#FFD95F"
                                            starDimension="90px"
                                            emptyStarColor="grey"
                                        />
                                        <p id="numReviews">{ i.num_reviews } Reviews</p>
                                    </div>
                                    <p>Tags: {i.tags.join(", ")}</p>
                                    <br></br>
                                    <div id="activity">
                                        <a id="activityTitle" href="https://www.google.com">Breakfast:  { i.breakfast }</a>
                                        <p id="activityItem">{ i.breakfast_cost }</p>
                                        <p id="activityItem">Time Estimation: { i.breakfast_time } { this.getTimeAddition(i.breakfast_time) }</p>
                                        <p id="activityItem">{ i.breakfast_text }</p>
                                    </div>
                                    <br></br>
                                    <div id="activity">
                                        <a id="activityTitle" href="https://www.google.com">Morning Activity:  { i.morning_activity }</a>
                                        <p id="activityItem">{ i.morning_cost }</p>
                                        <p id="activityItem">Time Estimation: { i.morning_time } { this.getTimeAddition(i.morning_time) }</p>
                                        <p id="activityItem">{ i.morning_text }</p>
                                    </div>
                                    <br></br>
                                    <div id="activity">
                                        <a id="activityTitle" href="https://www.google.com">Lunch:  { i.lunch }</a>
                                        <p id="activityItem">{ i.lunch_cost }</p>
                                        <p id="activityItem">Time Estimation: { i.lunch_time } { this.getTimeAddition(i.lunch_time) }</p>
                                        <p id="activityItem">{ i.lunch_text }</p>
                                    </div>
                                    <br></br>
                                    <div id="activity">
                                        <a id="activityTitle" href="https://www.google.com">Afternoon Activity:  { i.afternoon_activity }</a>
                                        <p id="activityItem">{ i.afternoon_cost }</p>
                                        <p id="activityItem">Time Estimation: { i.afternoon_time } { this.getTimeAddition(i.afternoon_time) }</p>
                                        <p id="activityItem">{ i.afternoon_text }</p>
                                    </div>
                                    <br></br>
                                    <div id="activity">
                                        <a id="activityTitle" href="https://www.google.com">Dinner:  { i.dinner }</a>
                                        <p id="activityItem">{ i.dinner_cost }</p>
                                        <p id="activityItem">Time Estimation: { i.dinner_time } { this.getTimeAddition(i.dinner_time) }</p>
                                        <p id="activityItem">{ i.dinner_text }</p>
                                    </div>
                                    <br></br>
                                    <div id="activity">
                                        <a id="activityTitle" href="https://www.google.com">Evening Activity:  { i.evening_activity }</a>
                                        <p id="activityItem">{ i.evening_cost }</p>
                                        <p id="activityItem">Time Estimation: { i.evening_time } { this.getTimeAddition(i.evening_time) }</p>
                                        <p id="activityItem">{ i.evening_text }</p>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}

class EmailSent extends React.Component {
    render() {
        return(
            <div id="emailSentText">Email Sent</div>
        );
    };
}

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: [],
            itemName: '',
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

    itemClicked(name) {
        this.setState({
            itemName: name.replace(/\s/g, ''),
        });
        window.location.hash = "#/itinerary/?" + name.replace(/\s/g, '').toLowerCase();
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
            <div>
                <div>
                    <ul id="resultsForCityText">
                        <li>
                            <p>Itineraries for { city }</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        {this.itineraries.map(l => {
                            if(l.city.trim().toLowerCase().includes(city.trim().toLowerCase()) && this.filterFunction(l)) {
                                return (
                                    <div id="resultCard">
                                        <li id="listItem" onClick={() => this.itemClicked(l.name)}>
                                            <div id="cardTop">
                                                <div id="rtc">
                                                    <p id="resultTitle">{l.name}</p>
                                                </div>
                                                <p id="itemDate">Posted {l.date.toDateString()}</p>

                                            </div>
                                            <div id="cardBottom">
                                                <div id="cardBody">
                                                    <p id="resultCity">{l.city}</p>
                                                    <div id="ratings">
                                                        <StarRatings
                                                            name='rating'
                                                            value={l.rating}
                                                            starCount={5}
                                                            starDimension='50px'
                                                            starRatedColor="#FFD95F"
                                                            starColor="#FFD95F"
                                                            emptyStarColor="grey"
                                                        />
                                                        <p id="numReviews">{l.num_reviews} Reviews</p>
                                                    </div>
                                                    <p>Tags: {l.tags.join(", ")}</p>
                                                </div>
                                                <div id="eventListIcons">
                                                    <div>
                                                        <img id="mealImg" src="resources/images/meal.svg" alt="TriplerFood"></img>
                                                        <p id="breakfast">{l.breakfast}</p>
                                                    </div>
                                                    <div>
                                                        <img id="activityImg" src="resources/images/activity.png" alt="TriplerAct"></img>
                                                        <p>{l.morning_activity}</p>
                                                    </div>
                                                    <div>
                                                        <img id="mealImg" src="resources/images/meal.svg" alt="TriplerFood"></img>
                                                        <p>{l.lunch}</p>
                                                    </div>
                                                    <div>
                                                        <img id="activityImg" src="resources/images/activity.png" alt="TriplerAct"></img>
                                                        <p>{l.afternoon_activity}</p>
                                                    </div>
                                                    <div>
                                                        <img id="mealImg" src="resources/images/meal.svg" alt="TriplerFood"></img>
                                                        <p>{l.dinner}</p>
                                                    </div>
                                                    <div>
                                                        <img id="activityImg" src="resources/images/activity.png" alt="TriplerAct"></img>
                                                        <p>{l.evening_activity}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                    </div>
                                );
                            }
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}


export {
    HomeSearchPage,
    ResultsPage,
    ItineraryPage,
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
