import contactImg from './../../resources/images/contact_img.jpg'

const Contact = () => {
    return (
        <div className='my-10'>
            <div className='px-10 flex flex-wrap items-center justify-center'>
                <p className='text-5xl w-1/2 text-center'>Thank you for using our voting system</p>
                <p className='text-gray-500 w-full text-center mt-5'>Kindly contact us via this platform, we aim to please our users and we can't do that without your feedback, reviews and comments</p>
            </div>
            <div className="w-full flex flex-wrap items-center justify-center mx-20 mt-10">
                <div className="w-1/2 flex justify-center items-center">
                    <img className='w-1/2' src={contactImg} alt="" />
                </div>
                <div className="w-1/2">
                    <form>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input className='mb-5 w-3/4' type="text" name="name" id="name" placeholder='Name' />

                        <br />
                        <label htmlFor="email">Email</label>
                        <br />
                        <input className='w-3/4 mb-5' type="email" name="email" id="email" placeholder='Email' />

                        <br />
                        <label htmlFor="queries">Questions and Comments</label>
                        <br />
                        <textarea name="queries" className="w-3/4 mb-5" cols="30" rows="10"></textarea>

                        <br />

                        <div className="w-full flex">
                            <input className='cursor-pointer' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact