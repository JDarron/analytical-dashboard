import React, { Component } from 'react';
import M from 'materialize-css';
// REDUX VARIABLES
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchStats } from '../../../actions/statActions';
// COMPONENTS
import PlayerRating from "../../../components/PlayerRating";
import SkillMeter from "../../../components/SkillMeter";
import StatCollection from "../../../components/StatCollection";
import RecentSessions from "../../../components/RecentSessions";
import TopGames from "../../../components/TopGames";

class FortnitePage extends Component {

    componentDidMount() {
        M.AutoInit();
        const location = window.location.pathname;
        const query = location.slice(10);
        this.props.fetchStats(query);
    };

    render() {

        let page;
        const statsExist = this.props.stats.lifeTimeStats;

        if (statsExist) {
            page = <main>
                {/* <!-- CONTENT CONTAINER --> */}
                <div className="container content-container">
                    {/* <!-- CONTENT ROW --> */}
                    <div className="row">
                        {/* <!-- LEFT COLUMN --> */}
                        <div className="col s12 m4 l5">
                            <div className="row">
                                <PlayerRating />
                            </div>
                            <div className="row center-align">
                                <SkillMeter />
                                <h5>
                                    Skill Level
                                </h5>
                            </div>
                            <div className="row">
                                <StatCollection />
                            </div>
                        </div>
                        {/* <!-- END LEFT COLUMN --> */}
                        {/* <!-- RIGHT COLUMN --> */}
                        <div className="col s12 m7 offset-m1 l6 offset-l1">
                            <div className="row">
                                <TopGames />
                            </div>
                            <div className="row">
                                <RecentSessions />
                            </div>
                        </div>
                        {/* <!-- END RIGHT COLUMN --> */}
                    </div>
                    {/* <!-- CONTENT ROW --> */}
                </div>
                {/* <!-- END CONTENT CONTAINER --> */}
            </main>
        } else if (this.props.stats.error) {
            page = <main className="container content-container center-align">
                <div className='red-text darken-4'>
                    <div className="card-panel alert alert-danger #ffcdd2 red lighten-4">
                        <b>Player not found:</b> Make sure you're spelling is correct and all special characters are accounted for
                    </div>
                </div >
            </main>
        } else {
            page = <main style={{ marginTop: "400px" }} className="container content-container center-align">

                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>

                    <div className="spinner-layer spinner-red">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>

                    <div className="spinner-layer spinner-yellow">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>

                    <div className="spinner-layer spinner-green">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                
            </main>
        };

        return (
            page
        );
    };
};

FortnitePage.propTypes = {
    stats: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    stats: state.stats.playerStats,
    styles: state.stats.styles
});

export default connect(mapStateToProps, { fetchStats })(FortnitePage);
