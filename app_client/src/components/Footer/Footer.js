import React, { Component } from "react";
// REDUX VARIABLES
import PropTypes from "prop-types";
import { connect } from "react-redux";

// f

class Footer extends Component {
    render() {
        return (
            <footer className={`page-footer ${this.props.styles.color.palette}`}>
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">
                                Footer Content
                            </h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer
                                content.
                                </p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2018 Stat
                    </div>
                </div>
            </footer>
        );
    };
};

Footer.propTypes = {
    styles: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    styles: state.stats.styles
});

export default connect(mapStateToProps, null)(Footer);