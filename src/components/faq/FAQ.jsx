import faq from './../../resources/images/faq.jpg'

const FAQ = () => {
    return (
        <div className='my-10'>
            <div className='px-10 flex flex-wrap items-center justify-center'>
                <p className='text-5xl w-1/2 text-center'>Frequently Asked Questions</p>
            </div>
            <div className='w-full flex justify-center mt-10'>
                <img className='w-1/3' src={faq} alt="faq" />
            </div>
            <div className='my-10 px-28'>
                <ul className='list-decimal'>
                    <li className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iste?</li>
                    <p className='mb-10'>Lorem ipsum dolor sit amet.</p>
                    <li className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iste?</li>
                    <p className='mb-10'>Lorem ipsum dolor sit amet.</p>
                    <li className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iste?</li>
                    <p className='mb-10'>Lorem ipsum dolor sit amet.</p>
                    <li className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iste?</li>
                    <p className='mb-10'>Lorem ipsum dolor sit amet.</p>
                    <li className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iste?</li>
                    <p className='mb-10'>Lorem ipsum dolor sit amet.</p>
                </ul>
            </div>
            <div className='flex justify-center'>
                <p className='registerBtn cursor-pointer'>Submit your Question</p>
            </div>
        </div>
    )
}

export default FAQ