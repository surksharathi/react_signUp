

import React from 'react';

class SignUp extends React.Component {


    constructor() {

        super()
        this.state = {

            name: "",
            email: "",
            password: "",
            error: ""
        }


    }


    render() {


        return (

            <div> Sign Up page</div>
        )
    }
}


export default SignUp;