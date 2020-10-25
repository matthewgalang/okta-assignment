import React, { useState } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import "../styles/styles.css"

const Contact = () => {
    const [state, setState] = useState({
        formSubmitted: false
    });

    function handleSubmit() {
        setState({
            formSubmitted: true
        })

    }

    return (
        <div className="container contact-page">
            <SEO title="Contact Page" />
            <h1 className="heading--page-title">Contact</h1>
            {(!state.formSubmitted) ?
            (
                <>
                <p className="text-center">Fill out the fields below and submit</p>
                <form onSubmit={handleSubmit} className="contact-form" method="POST">
                    <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" placeholder="First Name" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" placeholder="Last Name" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" name="phone" placeholder="Phone Number" required/>
                    </div>

                    <button type="submit">Submit</button>
                </form>
                </>
            )
             : 
             (<>
                <p className="text-center">
                    Thank You
                    <br/>
                    <Link to="/">Return to homepage</Link>
                    </p>
                
             </>)
            }
            
        </div>
    )
}

export default Contact