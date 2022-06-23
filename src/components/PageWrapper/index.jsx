import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 978px;
  padding: 0 23px;
`;

const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
