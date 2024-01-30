import { Link } from 'react-router-dom'

import '../../stylesheets/pageNotFound.css'

const Error_404 = () => {
	return (
		<div id="error-wrapper">
			<p>
				Error 404!
				<br />
				Page not found
			</p>

			<p className='redirect-link'>
				<Link to="/">Go to Home</Link>
			</p>
		</div>
	)
}

export default Error_404