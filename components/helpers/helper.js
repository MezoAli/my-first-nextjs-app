export async function getAllEvents() {
	const response = await fetch(
		"https://next-course-9c216-default-rtdb.firebaseio.com/events.json"
	);
	const data = await response.json();
	const transformedData = [];
	for (const Key in data) {
		transformedData.push({
			id: Key,
			...data[Key],
		});
	}
	return transformedData;
}

export async function getFeaturedEvents() {
	const allEvents = await getAllEvents();
	return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
	const allEvents = await getAllEvents();
	return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
	const allEvents = await getAllEvents();
	const { year, month } = dateFilter;

	let filteredEvents = allEvents.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}
