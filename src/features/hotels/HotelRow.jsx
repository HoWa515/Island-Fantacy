/*eslint-disable*/
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import CreateHotelForm from "./CreateHotelForm";
import { useDeleteHotel } from "./useDeleteHotel";
import { HiPencil, HiTrash } from "react-icons/hi";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Button from "../../ui/Button";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Hotel = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function HotelRow({ hotel }) {
  const {
    id: hotelID,
    name,
    maxCapacity,
    regularPrice,
    image,
    discount,
  } = hotel;

  const { isDeleting, deleteHotel } = useDeleteHotel();

  return (
    <Table.Row>
      <Modal>
        <Modal.Open opens="hotel-img">
          <Img src={image} style={{ cursor: "pointer" }} />
        </Modal.Open>
        <Modal.Window name="hotel-img">
          <Img src={image} style={{ width: "60vh" }} />
        </Modal.Window>
      </Modal>

      <Hotel>{name}</Hotel>
      <div>Up to {maxCapacity}</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>--</span>
      )}
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={hotelID} />

            <Menus.List id={hotelID}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateHotelForm hotelToEdit={hotel} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="hotels"
                disabled={isDeleting}
                onConfirm={() => deleteHotel(hotelID)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default HotelRow;
