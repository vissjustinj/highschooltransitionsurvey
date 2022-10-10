import JotformEmbed from 'react-jotform-embed';

function Typeform() {
	return (
		<div style={{ height: '100%' }}>
			<h2>The Survey</h2>
			<JotformEmbed src="https://form.jotform.com/222717107340144" />
		</div>
	);
}

export default Typeform;
