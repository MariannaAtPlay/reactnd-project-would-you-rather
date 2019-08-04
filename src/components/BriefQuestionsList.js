import React from 'react';
import Typography from '@material-ui/core/Typography';
import BriefQuestion from './BriefQuestion';

function BriefQuestionsList(props) {
	const { idsList, emptyListNote } = props;

	return (
		<div>
			{idsList.length ? (
				idsList.map((id) => <BriefQuestion key={id} id={id} />)
			) : (
				<Typography component="p" align="center">
					{emptyListNote}
				</Typography>
			)}
		</div>
	);
}

export default BriefQuestionsList;
