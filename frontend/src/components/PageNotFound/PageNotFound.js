import React from 'react'

import { useHistory } from "react-router-dom"
const PageNotFound = () => {
	const history = useHistory();
	const handleClick=()=>{
		history.push('/');
	}

	return (
		<div className="notFound-container">
			<h1> 404 Page Not Found</h1>
			<h3>This is totally normal I swear</h3>

			<button onClick={handleClick}>Return home</button>
		</div>
		
	)
}

export default PageNotFound;