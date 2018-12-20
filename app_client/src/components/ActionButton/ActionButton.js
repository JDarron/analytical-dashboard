import React, { Component } from "react";
// REDUX VARIABLES
import PropTypes from "prop-types";
import { connect } from "react-redux";

class PlayerRating extends Component {
    render() {
        return (
            <div>
                <div className="fixed-action-btn">
                    <a href="/" className={`btn-floating btn-large ${this.props.styles.color.palette}`}>
                        <i className="large material-icons">home</i>
                    </a>
                </div>
            </div>
        );
    };
};

PlayerRating.propTypes = {
    styles: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    styles: state.stats.styles
});

export default connect(mapStateToProps, null)(PlayerRating);
