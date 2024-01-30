import { useEffect } from "react";

import './../../stylesheets/home.css'

import img1 from './../../resources/images/about_page.jpg'
import img2 from './../../resources/images/contact_img.jpg'
import img3 from './../../resources/images/loading_cube.png'
import img4 from './../../resources/images/faq.jpg'
import img5 from './../../resources/images/graph.jpg'
import img6 from './../../resources/images/hero_img.jpg'
import img7 from './../../resources/images/home_maps.jpg'

import Carousel from "../util-components/carousel/AliceCarousel";

const Home = (props) => {

    useEffect(() => {
        props.setOnPage(1)
    }, [props])

    const images = [
        img1, img2, img3, img4, img5, img6, img7
    ]

    return (
        <>
            <div id="home">
                <Carousel images={images} />
            </div>
        </>
    )
}

export default Home