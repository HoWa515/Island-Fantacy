/*eslint-disable*/
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";
const StyledLogoutIcon = styled.span`
  display: flex;
  align-items: center;
`;
function Logout() {
  const { logout, isLoading } = useLogout();
  return null;
  // return (
  //   <ButtonIcon disabled={isLoading} onClick={logout}>
  //     {isLoading ? (
  //       <SpinnerMini />
  //     ) : (
  //       <StyledLogoutIcon>
  //         Logout:
  //         <HiArrowRightOnRectangle />
  //       </StyledLogoutIcon>
  //     )}
  //   </ButtonIcon>
  // );
}

export default Logout;
