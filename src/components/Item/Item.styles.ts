import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  border: 1px solid lightblue;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 2px 0 0;
  }

  Button {
    border-radius: 0 0 20px 20px;
    background-color: lightgray;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
