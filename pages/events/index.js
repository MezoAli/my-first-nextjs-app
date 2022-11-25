import Head from "next/head";
import EventList from "../../components/events/event-list";
import Eventsearch from "../../components/events/event-search";
import { getAllEvents } from "../../components/helpers/helper";

function AllEventsPage(props) {
	const events = props.events;
	return (
		<>
			<Head>
				<title>Nextjs All Events</title>
				<meta
					name="description"
					content="explore a lot of events you might be interested"
				/>
			</Head>
			<Eventsearch />
			<EventList items={events} />
		</>
	);
}

export async function getStaticProps() {
	const allEvents = await getAllEvents();
	return {
		props: {
			events: allEvents,
		},
		revalidate: 120,
	};
}

export default AllEventsPage;
