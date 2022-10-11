import { Widget } from '@typeform/embed-react';

function Typeform() {
	return (
		<div style={{ height: '100%' }}>
			<h2>The Survey</h2>
			<iframe
				width="90%"
				height="90%"
				id="getstartedvid"
				src="https://form.jotform.com/222717107340144"
				frameBorder="0"
			/>
		</div>
	);
}

export default Typeform;
