import styled from "styled-components";

const Wrapper = styled.div`
  /* padding: 0 20px; */
  background-color: red;
  margin: 0 auto;
  width: 978px;
  padding: 0 23px;
`;

const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
