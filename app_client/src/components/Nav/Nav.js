import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit(e) {
        e.preventDefault();
        window.location.href = `/fortnite/${this.state.playerName}`;
        document.getElementById("search").reset();
    };

    render() {
        return (
            <header>
                <nav>
                    <div className={`nav-wrapper ${this.props.styles.color.palette}`}>
                        <form id="search" onSubmit={this.onSubmit}>
                            <div className="input-field">
                                <input id="searchInput" type="search" name="playerName" onChange={this.onChange} required />
                                <label className="label-icon" htmlFor="search">
                                    <i className="material-icons">
                                        search
                                    </i>
                                </label>
                                <i className="material-icons"></i>
                            </div>
                        </form>
                    </div>
                </nav>
            </header>
        );
    };
};

Nav.propTypes = {
    styles: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    styles: state.stats.styles
});

export default withRouter(connect(mapStateToProps, null)(Nav));