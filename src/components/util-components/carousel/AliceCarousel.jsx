import { useEffect, useState } from "react";

import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css";

import './carousel.css'

const Carousel = ({ images }) => {
    const handleDragStart = (e) => e.preventDefault();

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(
            images?.map((img, idx) =>
                <div key={idx} className="carousel-img-wrapper">
                    <img alt="carousel-images" src={img} onDragStart={handleDragStart} />
                </div>
            )
        )
    }, [images])

    const res = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3}
    }

    return (
        <div className="carousel-wrapper">
            <AliceCarousel
                items={items}
                mouseTracking={true}
                controlsStrategy="alternate"
                responsive={res}
                autoPlay={true}
                autoPlayControls={true}
                autoPlayStrategy="none"
                autoPlayInterval={1400}
                infinite={true}
                keyboardNavigation={true}
                touchTracking={true}
            />
        </div>
    )
}

export default Carousel