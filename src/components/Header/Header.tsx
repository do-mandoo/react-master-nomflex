import { motion, useAnimation, useMotionValueEvent, useScroll } from 'framer-motion';
import styled from 'styled-components';
import LogoSearch from './LogoSearch';
import Category from './Category';

const Wrapper = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  /* background-color: black; */
  font-size: 14px;
  padding: 20px 60px;
  color: #fff;
`;

const navVariants = {
  top: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  scroll: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
};

const Header = () => {
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();

  // useMotionValueEvent를 사용하여 scrollY 값 변화 감지
  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > 80) {
      navAnimation.start('scroll');
    } else {
      navAnimation.start('top');
    }
  });

  return (
    <>
      <Wrapper variants={navVariants} animate={navAnimation} initial='top'>
        <LogoSearch />
        <Category />
      </Wrapper>
    </>
  );
};

export default Header;
