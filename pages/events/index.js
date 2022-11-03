import EventList from "../../components/events/event-list";
import Eventsearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
	const events = getAllEvents();
	return (
		<>
			<Eventsearch />
			<EventList items={events} />
		</>
	);
}

export default AllEventsPage;
