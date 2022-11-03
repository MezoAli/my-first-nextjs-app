import { useRouter } from "next/router";
import EventItem from "../../components/events/event-item";
import { getEventById } from "../../dummy-data";
function SpecificEventPage() {
	const router = useRouter();
	const eventId = router.query.eventId;
	const event = getEventById(eventId);
	console.log(event);
	return <EventItem item={event} btn={false} />;
}

export default SpecificEventPage;
