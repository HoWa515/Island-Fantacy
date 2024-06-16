/*eslint-disable*/
import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import { HiOutlineUser } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

function HeaderMenu() {
  const date = new Date();
  return (
    <StyledHeaderMenu>
      <li>{date.toISOString().slice(0, 10)}</li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
