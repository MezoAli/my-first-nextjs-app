import Link from "next/link";
import Image from "next/image";
import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowIcon from "../icons/arrow-right-icon";

function EventItem({ item, btn }) {
	const { id, title, location, date, image } = item;

	const modifiedDate = new Date(date).toLocaleDateString("en-Us", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const modifiedAddress = location.replace(", ", "\n");

	const exploreLink = `/events/${id}`;

	return (
		<li className={classes.item}>
			<Image src={`/${image}`} alt={title} width={400} height={400} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<DateIcon />
						<time>{modifiedDate}</time>
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address>{modifiedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					{btn === false ? null : (
						<Button link={exploreLink}>
							<span>Explore Event</span>
							<span className={classes.icon}>
								<ArrowIcon />
							</span>
						</Button>
					)}
				</div>
			</div>
		</li>
	);
}

export default EventItem;
