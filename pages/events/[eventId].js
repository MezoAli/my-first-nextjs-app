import Head from "next/head";
import EventItem from "../../components/events/event-item";
import { getAllEvents, getEventById } from "../../components/helpers/helper";
import Comments from "../../components/input/comments";
function SpecificEventPage(props) {
	const { event } = props;

	return (
		<>
			<Head>
				<title>{event.title}</title>
				<meta name="description" content={event.description} />
			</Head>
			<EventItem item={event} btn={false} />
			<Comments eventId={event.id} />
		</>
	);
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
