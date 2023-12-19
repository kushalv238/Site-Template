import aboutPageImg from './../../resources/images/about_page.jpg'

import '../../stylesheets/about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faVoteYea } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <div className='my-10'>
            <div className='px-10 flex flex-wrap items-center justify-center'>
                <p className='text-5xl w-1/2 text-center'>We aim to make elections easy, seamless & fair</p>
                <p className='text-gray-500 w-full text-center mt-5'>This application was made to improve the voting system in our country</p>
            </div>
            <div className='flex items-center justify-center mt-10'>
                <img className='w-1/2' src={aboutPageImg} alt="about" />
            </div>
            <div className='flex flex-wrap items-center justify-center px-20 my-10'>
                <div className="idea_card flex flex-wrap items-center p-5 py-14 w-2/5 m-auto">
                    <div className='w-full icon__wrapper'>
                        <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <p className='text-2xl w-full text-white mt-4 text-white'>The Idea</p>
                    <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quaerat soluta nam magni alias, asperiores minima doloremque quas nihil. Quas.</p>
                </div>
                <div className="solution-card flex flex-wrap items-center p-5 py-14 w-2/5 m-auto">
                    <div className='w-full icon__wrapper icon_invert'>
                        <FontAwesomeIcon icon={faVoteYea} />
                    </div>
                    <p className='text-2xl w-full text-black mt-4'>The Solution</p>
                    <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quaerat soluta nam magni alias, asperiores minima doloremque quas nihil. Quas.</p>
                </div>
            </div>
        </div>
    )
}

export default About