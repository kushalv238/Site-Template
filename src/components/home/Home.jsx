import { useEffect } from "react";

import './../../stylesheets/home.css'

import { Link } from "react-router-dom";

const Home = (props) => {

    useEffect(() => {
        props.setOnPage(1)
    }, [props])

    return (
        <>
            <div id="home">
                Home
            </div>
        </>
    )
}

export default Home