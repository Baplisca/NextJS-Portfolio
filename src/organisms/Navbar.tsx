import { NextPage } from "next";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0px;
  z-index: 100;

  background-color: #343a40;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  height: 50px;
`;
const HeaderMenu = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 18px;
  list-style: none;
  display: flex;
`;

const MyNavLink = styled(Link)`
  color: #888;
  text-decoration: none;
  padding: 15px;
  :hover {
    color: #fff;
  }
`;

const LngWrapper = styled.li`
  :hover {
    color: #fff;
  }
  cursor: pointer;
  color: #888;
  margin-right: 5px;
`;
const GapWrapper = styled.li`
  margin: 0 10px;
  color: #fff;
`;

const Navbar: NextPage = () => {
  return (
    <>
      <HeaderWrapper>
        <div></div>
        <HeaderMenu>
          <li>
            <MyNavLink href="/">
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{ marginRight: "10px" }}
              />
              About
            </MyNavLink>
          </li>
          <li>
            <MyNavLink href="/work">
              <FontAwesomeIcon
                icon={faLaptopCode}
                style={{ marginRight: "10px" }}
              />
              Work
            </MyNavLink>
          </li>
          <GapWrapper>|</GapWrapper>
          <LngWrapper>あ</LngWrapper>
          <LngWrapper>A</LngWrapper>
        </HeaderMenu>
      </HeaderWrapper>
    </>
  );
};

export default Navbar;
