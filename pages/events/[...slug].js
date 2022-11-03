import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";
function FilteredEventsPage() {
	const router = useRouter();
	const filteredData = router.query.slug;

	if (!filteredData) {
		return <p>Loading...</p>;
	}

	const filteredYear = filteredData[0];
	const filteredMonth = filteredData[1];

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2023 ||
		numYear < 2019 ||
		numMonth > 12 ||
		numMonth < 1
	) {
		return <p>Invalid filters, please adjust your values</p>;
	}

	console.log(numYear, numMonth);

	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth,
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return <p>No events Found</p>;
	}
	console.log(filteredEvents);

	return <EventList items={filteredEvents} />;
}

export default FilteredEventsPage;
