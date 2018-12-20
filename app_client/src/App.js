import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// COMPONENTS
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import ActionButton from "./components/ActionButton"
// PAGES
import Home from "./pages/home/Home";
import Fortnite from "./pages/stats/Fortnite/Fortnite";
// APP STYLES
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <div>
                            <Nav />
                            <main>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/fortnite/:id" component={props => <Fortnite {...props} />} />
                                <ActionButton />
                            </main>
                            {/* <Footer /> */}
                        </div>
                    </Router>
                </Provider>
            </div>
        );
    };
};

export default App;
