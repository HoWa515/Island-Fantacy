import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";
function HotelTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All Hotels" },
          { value: "discount", label: "Has Discount" },
        ]}
      />
      <Sort
        options={[
          { value: "regularPrice-asc", label: "Price: low-high" },
          { value: "regularPrice-desc", label: "Price: high-low" },
          { value: "maxCapacity-asc", label: "Capacity: low-high" },
          { value: "maxCapacity-desc", label: "Capacity: high-low" },
        ]}
      />
    </TableOperations>
  );
}

export default HotelTableOperations;
