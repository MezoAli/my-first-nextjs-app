import { useEffect } from "react";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../components/helpers/helper";

function Home(props) {
	const { allEvents } = props;

	return (
		<>
			{" "}
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
