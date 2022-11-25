import { useEffect } from "react";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../components/helpers/helper";
import Head from "next/head";
import NewsletterRegistration from "../components/input/newsletter-registration";

function Home(props) {
	const { allEvents } = props;

	return (
		<>
			{" "}
			<Head>
				<title>Nextjs Featured Events</title>
				<meta
					name="description"
					content="explore a lot of events you might be interested"
				/>
			</Head>
			<NewsletterRegistration />
			<EventList items={allEvents} />{" "}
		</>
	);
}

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();
	return {
		props: {
			allEvents: featuredEvents,
		},
	};
}

export default Home;
