import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<div id="frontpage">
			<Head>
				<title>High School Transition Survey</title>
				<meta name="description" content="Automatically write your high school transition survey" />
				<link rel="icon" href="/public/favicon-32x32.png" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
				/>

				<script async src="https://www.googletagmanager.com/gtag/js?id=G-QTLF2CG3ED" />
				<script>
					window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}
					gtag('js', new Date()); gtag('config', 'G-QTLF2CG3ED');
				</script>
			</Head>

			<div className="ui raised segment" id="getstarted">
				<h1>HS Transition Survey</h1>
				<h3>Write your report while you're interviewing students about their post-high school plans</h3>

				<Link href="/write" prefetch>
					<button className="ui button" style={{ maxWidth: '150px', alignSelf: 'center', margin: '10px' }}>
						Get Started
					</button>
				</Link>

				<iframe
					width="80%"
					height="400"
					id="getstartedvid"
					src="https://www.youtube.com/embed/6JL2htnXq2g"
					title="Automatically Write HS Transition Survey"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>

			<footer className={styles.footer} />
		</div>
	);
}
