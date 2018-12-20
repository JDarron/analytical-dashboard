import React, { Component } from "react";
// REDUX VARIABLES
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Chart from "../Chart";

class RecentSessions extends Component {
    render() {
        let recentSessionsPanel;

        const statsExist = this.props.stats.recentMatches;

        const tableRow = this.props.stats.recentMatches.map((stats, i) => (
            <tr key={stats.id}>
                <td>
                    {i + 1}
                </td>
                <td>
                    {stats.matches}
                </td>
                <td>
                    {stats.kills}
                </td>
                <td>
                    {stats.score}
                </td>
            </tr>
        ));

        if (statsExist) {
            recentSessionsPanel = <div className="card z-depth-3">
                <div className="card-image waves-effect waves-block waves-light">
                    <Chart />
                </div>
                <div className={`card-content ${this.props.styles.color.paletteLight}`}>
                    <span className="card-title activator grey-text text-darken-4">
                        More Stats
                        <i className="material-icons right">
                            more_vert
                        </i>
                    </span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4 center-align">
                        Recent Game Stats
                        <i className="material-icons right">
                            close
                        </i>
                    </span>
                    <table className="striped centered">
                        <thead>
                            <tr>
                                <th>Session</th>
                                <th>Games</th>
                                <th>Kills</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRow}
                        </tbody>
                    </table>
                </div>
            </div>
        } 
        else {
            recentSessionsPanel = <div className='red-text darken-4'>
                <div className={`card-panel ${this.props.styles.color.paletteLight}`}>
                    <b>No recent sessions:</b> Must not have played for a while...
                    </div>
            </div >
        };

        return (
            recentSessionsPanel
        );
    };
};

RecentSessions.propTypes = {
    stats: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    stats: state.stats.playerStats,
    styles: state.stats.styles
});

export default connect(mapStateToProps, null)(RecentSessions);