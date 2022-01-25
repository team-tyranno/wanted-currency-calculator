import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
`;

export const UnfoldButton = styled.button`
  text-decoration: none;
  color: #333333;
  width: 50px;
  height: 25px;
  padding: 15px 20px;
  display: block;
`;

export const MenuList = styled.div`
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
`;

export const DroppedMenu = styled.button`
  text-decoration: none;
  color: #333333;
  width: 50px;
  height: 25px;
  padding: 15px 20px;
  display: block;
`;
