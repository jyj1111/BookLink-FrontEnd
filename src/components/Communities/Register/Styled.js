import styled from 'styled-components';

export const MainContainerDiv = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

export const MainContentsDiv = styled.div`
  width: 103rem;
  height: 100%;
  border: 1px solid black;
`;

export const SelectContainerDiv = styled.div`
  width: 100%;
  height: 5.7rem;
  border: 1px solid black;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SelectDiv = styled.div`
  display: flex;
  margin-left: 1.7rem;
  p {
    margin-left: 1.7rem;
  }
`;
export const BookContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 95.5rem;
    box-sizing: border-box;
    border-radius: 0.8rem;
  }
`;
export const cityContainerDiv = styled.div`
  display: flex;
  height: 13.857rem;
`;
export const citiesDiv = styled.div`
  width: 10.714rem;
  overflow: auto;
`;
export const cityDiv = styled.div`
  text-align: center;
  font-weight: ${({ active }) => (active === 'true' ? 'bold' : 'normal')};
`;

export const districtiesDiv = styled.div`
  width: 92.143rem;
  overflow: auto;
  border: 1px solid black;
`;
export const districtDiv = styled.div`
  text-align: center;
  font-weight: ${({ active }) => (active === 'true' ? 'bold' : 'normal')};
`;

export const Title = styled.input`
  width: 100%;
  height: 4.2rem;
  box-sizing: border-box;
  border-radius: 0.8rem;
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;