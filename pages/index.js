import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

function Home() {
	const featuredEvents = getFeaturedEvents();
	console.log(featuredEvents);
	return (
		<>
			<EventList items={featuredEvents} />
		</>
	);
}

export default Home;
