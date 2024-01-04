import { useEffect } from "react";

import './../../stylesheets/home.css'

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