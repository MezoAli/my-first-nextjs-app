import Mainheader from "./main-header";

function Layout(props) {
	return (
		<>
			<Mainheader />
			<main>{props.children}</main>
		</>
	);
}

export default Layout;
