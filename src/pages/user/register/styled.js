import styled from "styled-components";

const Background = styled.div`
  background: linear-gradient(to bottom, #5bbcf0, #d2ebff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .logo {
    position: absolute;
    top: 25px;
    right: 50px;
    width: 120px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  h3 {
    margin-top: 20px;
    font-weight: 600;
  }
`;

const Title = styled.h1`
  color: #1d43b7;
  text-align: center;
  margin-bottom: 15px;
  font-weight: 700;
`;

const AddressBox = styled.div`
  background-color: #d9d9d9;
  border-radius: 8px;
  padding: 1em;
  font-size: 0.9rem;
`;

const GroupButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;
`;

export { Background, Container, Title, AddressBox, GroupButtons };
