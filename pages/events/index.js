import EventList from "../../components/events/event-list";
import Eventsearch from "../../components/events/event-search";
import { getAllEvents } from "../../components/helpers/helper";

function AllEventsPage(props) {
	const events = props.events;
	return (
		<>
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
