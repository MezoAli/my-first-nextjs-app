import EventItem from "../../components/events/event-item";
import { getAllEvents, getEventById } from "../../components/helpers/helper";
function SpecificEventPage(props) {
	const { event } = props;

	return <EventItem item={event} btn={false} />;
}

export async function getStaticProps(context) {
	const { params } = context;
	const eventId = params.eventId;
	const event = await getEventById(eventId);

	return {
		props: {
			event: event,
		},
	};
}

export async function getStaticPaths() {
	const allEvents = await getAllEvents();
	const ids = allEvents.map((event) => event.id);
	const paths = ids.map((id) => {
		return {
			params: { eventId: id },
		};
	});
	return {
		paths: paths,
		fallback: false,
	};
}

export default SpecificEventPage;
