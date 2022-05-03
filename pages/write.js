import Document from '../components/Document.js';
import Typeform from '../components/Typeform.js';
import Head from 'next/head';

function Write() {
	return (
		<div style={{ height: '100%' }}>
			<Head>
				<title>High School Transition Survey</title>
				<meta name="description" content="Automatically write your high school transition survey" />
				<link rel="icon" href="public/favicon-32x32.png" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<div>
					<h1 style={{ textAlign: 'center', padding: '10px' }}>
						Transitions Survey{' '}
						<button
							style={{ fontSize: 'medium' }}
							onClick={() => {
								window.location.reload(false);
							}}
						>
							Reload Page
						</button>
					</h1>
				</div>
				<div className="App" style={{ height: '90%' }}>
					<div className="ui grid" style={{ height: '100%' }}>
						<div className="eight wide column">
							<div className="ui raised segment" style={{ height: '100%' }}>
								<Typeform style={{ height: '100%' }} />
							</div>
						</div>
						<div className="eight wide column">
							<div className="ui raised segment" style={{ height: '100%' }}>
								<Document />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Write;
