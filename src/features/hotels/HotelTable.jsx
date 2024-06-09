import { useSearchParams } from "react-router-dom";
/*eslint-disable*/
import Spinner from "../../ui/Spinner";
import HotelRow from "./HotelRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useHotels } from "./useHotels";
import Pagination from "../../ui/Pagination";

function HotelTable() {
  const { isLoading, hotels } = useHotels();

  // get params from url
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("discount") || "all";

  if (isLoading) return <Spinner />; // condition,  after hooks
  if (!hotels.length) return <Empty resourceName="hotels" />;

  // filtering
  let filteredHotels;
  if (filterValue === "all") filteredHotels = hotels;
  if (filterValue === "discount") {
    filteredHotels = hotels.filter((hotel) => hotel.discount > 0);
  }

  // sort by
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  console.log(filteredHotels);
  const sortedHotels = filteredHotels.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Hotel</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedHotels}
          render={(hotel) => <HotelRow hotel={hotel} key={hotel.id} />}
        />
      </Table>
    </Menus>
  );
}

export default HotelTable;
