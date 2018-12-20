import React from 'react';
// REDUX 
import PropTypes from "prop-types";
import { connect } from "react-redux";
// FUSION CHARTS
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const chartConfigs = {
    type: 'angulargauge',
    width: '100%',
    height: '225',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "lowerLimit": "0",
            "upperLimit": "10",
            "showValue": "1",
            "theme": "carbon",
            "showToolTip": "0"
        },
        "colorRange": {
            "color": [{
                "minValue": "1",
                "maxValue": "2",
                "code": "#f44336"
            }, {
                "minValue": "3",
                "maxValue": "4",
                    "code": "#ff9800"
            }, {
                "minValue": "5",
                "maxValue": "6",
                    "code": "#673ab7"
            },{
                "minValue": "7",
                "maxValue": "8",
                "code": "#2196f3"
            },{
                "minValue": "9",
                "maxValue": "10",
                "code": "#4caf50"
            }]
        },
        "dials": {
            "dial": [{
                "value": 6
            }]
        }
    }
};

class SkillMeter extends React.Component {
    render() {
        return (
            <ReactFC
                {...chartConfigs} />
        );
    };
};

SkillMeter.propTypes = {
    stats: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    stats: state.stats.playerStats,
    styles: state.stats.styles
});

export default connect(mapStateToProps, null)(SkillMeter);