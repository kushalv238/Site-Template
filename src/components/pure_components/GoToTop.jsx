import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import scrollToTop from './../../utility/scrollToTop'

import './../../stylesheets/toTop.css'

const GoToTop = ({ notTop }) => {
    return (
        <>
            {
                notTop ?
                    <div
                        className='scroll-to-top'
                        onClick={scrollToTop}
                    >
                        <FontAwesomeIcon icon={faArrowUp} />
                    </div >
                    : <></>
            }
        </>

    )
}

export default GoToTop