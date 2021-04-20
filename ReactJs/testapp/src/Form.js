import React, { Component } from 'react'

class Form extends Component {
    constructor () {
        super ()
        this.state = {
            firstName:"",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (event) {
        const {name, value, type, checked} = event.target
        if (type === "checkbox") {
            this.setState ({
                [name]: checked
            })
        } else {
            this.setState ({
                [name]: value
            })
        }
    }

    render () {
        return (
            <main>
                <form>
                    <input 
                        name = "firstName"
                        value = {this.state.firstName}
                        onChange = {this.handleChange}
                        placeholder = "First Name" 
                    /><br />

                    <input 
                        name = "lastName"
                        value = {this.state.lastName}
                        onChange = {this.handleChange}
                        placeholder = "Last Name" 
                    /><br />

                    <input 
                        name = "age"
                        value = {this.state.age}
                        onChange = {this.handleChange}
                        placeholder = "Age" 
                    /><br />

                    <label>
                        <input 
                            type = "radio"
                            name = "gender"
                            value = "Female"
                            checked = {this.state.gender === "Female"}
                            onChange = {this.handleChange}
                        /> Female
                    </label>
                    <br />

                    <label>
                        <input
                            type = "radio"
                            name = "gender"
                            value = "Male"
                            checked = {this.state.gender === "Male"}
                            onChange = {this.handleChange} 
                        /> Male
                    </label>
                    <br />

                    <label>
                        <input 
                            type = "checkbox"
                            name = "isVegan"
                            onChange = {this.handleChange}
                            checked = {this.state.isVegan}
                        /> Vegan?
                    </label>
                    <br />

                    <label>
                        <input 
                            type = "checkbox"
                            name = "isKosher"
                            onChange = {this.handleChange}
                            checked = {this.state.isKosher}
                        /> Kosher?
                    </label>
                    <br />

                    <label>
                        <input 
                            type = "checkbox"
                            name = "isLactoseFree"
                            onChange = {this.handleChange}
                            checked = {this.state.isLactoseFree}
                        /> Lactose Free?
                    </label>
                    <br />

                    <select value = {this.state.destination} name = "destination" onChange = {this.handleChange}>
                        <option value = "">--Select your destination--</option>
                        <option value = "Germany">Germany</option>
                        <option value = "England">England</option>
                        <option value = "Japan">Japan</option>
                        <option value = "VietNam">VietNam</option>
                    </select>
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    <b>Your dietary restriction: </b><br />
                    Vegan: {this.state.isVegan ? "Yes" : "No"} <br />
                    Kosher: {this.state.isKosher ? "Yes" : "No"} <br />
                    Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"} <br />
                </p>
            </main>
        )
    }
}
export default Form