import React from 'react'

function LoginButton (props) {
    return (
        <button
            style = {{width: "100px", height: "30px", alignItems: "center"}}
            onClick = {props.onClick}>
            Login
        </button>
    );
}

function LogoutButton (props) {
    return (
        <button 
            style = {{width: "100px", height: "30px", alignItems: "center"}}
            onClick = {props.onClick}>
            Logout
        </button>
    );
}

function UserGreeting (props) {
    return <h1>Welcome back!</h1>
}

function GuestGreeting (props) {
    return <h1>Please Login !</h1>
}

function Greeting (props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}

class LoginControl extends React.Component {
    
    constructor (props) {
        super (props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleClick () {
        this.setState (prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
    render () {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick = {this.handleClick} />
        } else {
            button = <LoginButton onClick = {this.handleClick} />
        }
        return (
            <div>
                <Greeting isLoggedIn = {isLoggedIn} />
                {button}
            </div>
        );
    }
}
export default LoginControl