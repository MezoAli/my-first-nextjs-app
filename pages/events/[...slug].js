import Head from "next/head";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../components/helpers/helper";
function FilteredEventsPage(props) {
	const router = useRouter();
	const filteredData = router.query.slug;

	if (props.loading) {
		return <p>Loading...</p>;
	}

	if (props.isValid) {
		return <p>Invalid filters, please adjust your values</p>;
	}

	if (!props.filteredEvents || props.filteredEvents.length === 0) {
		return <p>No events Found</p>;
	}

	return (
		<>
			<Head>
				<title>filtered events</title>
				<meta
					name="description"
					content={props.filteredEvents[0]?.description}
				/>
			</Head>
			<EventList items={props.filteredEvents} />
		</>
	);
}

export async function getServerSideProps(context) {
	const { slug: filteredData } = context.params;
	if (!filteredData) {
		return {
			props: {
				loading: true,
			},
		};
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
		return {
			props: {
				isValid: false,
			},
		};
	}

	const filteredEvents = await getFilteredEvents({
		year: numYear,
		month: numMonth,
	});

	return {
		props: {
			filteredEvents: filteredEvents,
		},
	};
}

export default FilteredEventsPage;
