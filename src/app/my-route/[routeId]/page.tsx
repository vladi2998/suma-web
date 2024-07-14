export default function RouteById({ params }: { params: { routeId: string } }) {
	return <div>Route: {params.routeId}</div>;
}
