import React, { Component } from "react";
// REDUX VARIABLES
import PropTypes from "prop-types";
import { connect } from "react-redux";

class StatCollection extends Component {
    render() {
        return (
            <ul className="collection left-align z-depth-2">
                <li className="collection-item avatar ">
                    <i className="material-icons circle amber">
                        insert_chart
                    </i>
                    <span className="title">
                        <strong>
                            Wins
                        </strong>
                    </span>
                    <p>
                        Total: {this.props.stats.lifeTimeStats[8].value}
                        <br />
                        Games: {this.props.stats.lifeTimeStats[7].value}
                        <br />
                        Percent: {this.props.stats.lifeTimeStats[9].value}
                    </p>
                </li>
                <li className="collection-item avatar">
                    <i className="material-icons circle red">
                        healing
                    </i>
                    <span className="title">
                        Kills
                        </span>
                    <p>
                        Total: {this.props.stats.lifeTimeStats[10].value}
                        <br />
                        KD: {this.props.stats.lifeTimeStats[11].value}
                        <br />
                        Score: {this.props.stats.lifeTimeStats[6].value}
                    </p>
                </li>
            </ul>
        );
    };
};

StatCollection.propTypes = {
    stats: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    stats: state.stats.playerStats,
    styles: state.stats.styles
});

export default connect(mapStateToProps, null)(StatCollection);
