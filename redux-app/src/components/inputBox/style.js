import styled from "styled-components";

export const InputBoxStyle = styled.div`
  .input-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;
    input {
      flex: 1;
      font-size: 17px;
      color: red;
      background: black;
      border: none;
      padding: 10px 20px;
      border-radius: 40px;
      :focus {
        outline: none;
      }
    }
    .add-btn{
      min-width:46px
    }
    .edit-btn{
      min-width:46px
    }
    i {
      background: black;
      color: red;
      padding: 3px 9px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;
