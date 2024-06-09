import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
// import HotelTable from "../hotels/HotelTable";
import CreateHotelForm from "./CreateHotelForm";

function AddHotel() {
  return (
    <Modal>
      <Modal.Open opens="hotel-form">
        <Button>Add new Hotel</Button>
      </Modal.Open>
      <Modal.Window name="hotel-form">
        <CreateHotelForm />
      </Modal.Window>
    </Modal>
  );
}

// function AddHotel() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button
//         onClick={() => {
//           setIsOpenModal((show) => !show);
//         }}
//       >
//         Add new hotel
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateHotelForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddHotel;
