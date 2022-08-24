import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants/routes.constant';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = (props: SidebarProps) => {
  if (props.open === false) return null;

  return (
    <Wrapper>
      <Burger onClick={props.onClose}>X</Burger>
      <Homepage to={'/'} key={0}>
        Homepage
      </Homepage>
      <List>
        {ROUTES.map((route) => (
          <LinkList to={route.path} key={route.id}>
            {route.name}
          </LinkList>
        ))}
      </List>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background: #286fc7;
  width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Homepage = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  padding-bottom: 2rem;

  :hover {
    text-decoration: underline;
  }
`;

const Burger = styled.button`
  margin: 3rem;
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: 0.5s;
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;

  :hover {
    background: white;
    color: #286fc7;
    transition: 0.5s;
  }
`;

const List = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LinkList = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  padding-bottom: 2rem;
  :hover {
    text-decoration: underline;
  }
`;
