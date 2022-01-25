import styled from 'styled-components';

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  width: 50px;
  height: 30px;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #e5e5e5;
  ${(props) => props.active && 'border-bottom: 1px solid white; background-color: white;'};
`;
