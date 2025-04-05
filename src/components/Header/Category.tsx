import { motion } from 'framer-motion';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  /* background-color: #525b46; */
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  margin-right: 20px;
  color: ${props => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${props => props.theme.white.lighter};
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -8px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${props => props.theme.red};
`;

const Category = () => {
  const popularMatch = useMatch('/');
  const comingMatch = useMatch('coming-soon');
  const nowMatch = useMatch('now-playing');

  return (
    <Box>
      <Items>
        <Item>
          <Link to='/'>POPULAR {popularMatch && <Circle layoutId='circle' />}</Link>
        </Item>
        <Item>
          <Link to='coming-soon'>COMING SOON {comingMatch && <Circle layoutId='circle' />}</Link>
        </Item>
        <Item>
          <Link to='now-playing'>NOW PLAYING {nowMatch && <Circle layoutId='circle' />}</Link>
        </Item>
      </Items>
    </Box>
  );
};
export default Category;
