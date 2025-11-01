import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(to bottom, #5bbcf0, #d2ebff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding-top: 4rem;

  img {
    position: absolute;
    top: 2rem;
    right: 3rem;
    width: 7.5rem;
  }
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  width: 90%;
  max-width: 60rem; /* equivalente a 960px */
  padding: 3rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.8rem 2.5rem; /* vertical e horizontal */
  }

  h3 {
    margin-top: 1rem;
    font-weight: 700;
    color: #000;
    font-size: 1.125rem;
  }
`;

export const Title = styled.h1`
  color: #1d43b7;
  text-align: center;
  font-weight: 1000;
  font-size: 1.625rem;
  margin-bottom: 1rem;
`;

export const AddressBox = styled.div`
  background-color: #d9d9d9;
  border-radius: 0.5rem;
  padding: 1em;
  font-size: 0.9rem;
  color: #000;
  line-height: 1.4;
`;

export const GroupButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 1.5rem;
`;
