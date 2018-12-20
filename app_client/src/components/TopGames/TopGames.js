import React, { Component } from "react";
// REDUX VARIABLES
import PropTypes from "prop-types";
import { connect } from "react-redux";

// FOOTER COMPONENT
class TopGames extends Component {
    // RENDER
    render() {
        // RETURN
        return (
            <div>
                <div className="row">
                    <h4 className="center-align">
                        Top Games
                    </h4>
                </div>
                <div className="row center-align">
                    <div className="col s4 m4">
                        <div className="card z-depth-2">
                            <div className="card-content">
                                <div>
                                    <span className="card-title activator grey-text text-darken-4">
                                        <strong>
                                            Top 03
                                        </strong>      
                                    </span>
                                </div>
                                <p>
                                    {this.props.stats.lifeTimeStats[1].value}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col s4 m4">
                        <div className="card z-depth-2">
                            <div className="card-content">
                                <div>
                                    <span className="card-title activator grey-text text-darken-4">
                                        <strong>
                                            Top 05 
                                        </strong>
                                    </span>
                                </div>
                                <p>
                                    {this.props.stats.lifeTimeStats[0].value}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col s4 m4">
                        <div className="card z-depth-2">
                            <div className="card-content">
                                <div>
                                    <span className="card-title activator grey-text text-darken-4">
                                        <strong>
                                            Top 10
                                        </strong>  
                                    </span>
                                </div>
                                <p>
                                    {this.props.stats.lifeTimeStats[3].value}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ); // END RETURN
    }; // END RENDER
}; // END NAVBAR


TopGames.propTypes = {
    stats: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    stats: state.stats.playerStats,
    styles: state.stats.styles
});

export default connect(mapStateToProps, null)(TopGames);
