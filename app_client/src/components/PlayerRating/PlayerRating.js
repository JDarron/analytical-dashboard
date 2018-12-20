import React, { Component } from "react";
// REDUX VARIABLES
import PropTypes from "prop-types";
import { connect } from "react-redux";

class PlayerRating extends Component {
    render() {
        let name;

        const statsExist = this.props.stats.lifeTimeStats
        if (statsExist) {
            name = this.props.stats.epicUserHandle

        } else {
            name = "Nameless"
        }

        return (
            <div>
                <div className='row'>
                    <div className="col s6 offset-s3 m10 offset-m1 l8 offset-l2 center-align">
                        <div className={`card-panel ${this.props.styles.color.palette}`}>
                            <span className="white-text score">
                                <strong style={{ fontSize: "100px" }}>
                                    6
                        </strong>
                            </span>
                        </div>
                    </div>
                </div>
                <h3 className="row center-align">
                    {name}
                </h3>
            </div>
        );
    };
};

PlayerRating.propTypes = {
    stats: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    stats: state.stats.playerStats,
    styles: state.stats.styles
});

export default connect(mapStateToProps, null)(PlayerRating);
