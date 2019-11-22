import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null,
    };
    componentDidMount() {
        window.gapi.load('client:auth2 ', () => {
            window.gapi.client.init({
                clientId: '750879000653-9s3hdfjops0c83d1krnc1h3kdb4at4ud.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();   // crrating instance  // prototype class, not the real class
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };
    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }

    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return <div> I don't know if we are signed in </div>;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (<button onClick={this.onSignInClick} className="ui red google button">
                <i className="google icon" />
                Sign In with Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()} </div>;
    }
};

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth); 