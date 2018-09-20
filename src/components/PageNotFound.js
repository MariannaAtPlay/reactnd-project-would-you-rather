import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

function PageNotFound () {
  return (
	<div>
    	<Typography  variant="display4" align='center'>
     		404 ERROR
     	</Typography>
        <Typography  variant="subheading" align='center'>
			<Link to="/">Return to Home Page</Link>
    	</Typography>
	</div>
  );
}

export default PageNotFound;