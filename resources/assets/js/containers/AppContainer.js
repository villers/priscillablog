import React  from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
