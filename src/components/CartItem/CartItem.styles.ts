import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightblue;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 20px;
  margin-bottom: 20px;

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    flex: 1;

    &__price,
    &__buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
