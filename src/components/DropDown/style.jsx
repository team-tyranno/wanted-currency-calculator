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
  text-align: center;
`;

export const MenuList = styled.div`
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
`;

export const DroppedMenu = styled.button`
  text-decoration: none;
  color: #333333;
  width: 50px;
  height: 25px;
  text-align: center;
  display: block;
`;
