import styled from "styled-components";

export const ItemsContainerStyle = styled.div`
  margin-top: 60px;
  display: grid;
  row-gap: 20px;
`;

export const ItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background: black;
  color: red;
  align-items: center;
  column-gap: 20px;
  .item-name {
    flex: 1;
    font-size: 20px;
    font-weight: 600;
  }
  i {
    cursor: pointer;
  }
`;
