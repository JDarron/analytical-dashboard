import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.carbon';
// REDUX VARIABLES
import PropTypes from "prop-types";
import { connect } from "react-redux"

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let data = [];

const chartConfigs = {
    type: 'column2d',
    height: '400',
    width: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Recent Sessions Stats",
            "xAxisName": "Recent Game Sessions",
            "yAxisName": "Kills",
            "theme": "carbon",
        },
        "data": data
    }
};

class Chart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    static getDerivedStateFromProps(nextProps) {
        data.length = 0;
        nextProps.stats.recentMatches.forEach(elem => {
            data.push({
                'label': `Games: ${elem.matches}`,
                'value': elem.kills
            })
        });
        return null;
    };

    render() {
        return (
            <ReactFC
                {...chartConfigs} />
        );
    }
}

Chart.propTypes = {
    stats: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    stats: state.stats.playerStats,
    styles: state.stats.styles
});

export default connect(mapStateToProps, null)(Chart);