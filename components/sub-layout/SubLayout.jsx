import styled from "styled-components";

const SubLayout = ({
  children,
  rightWidth = "0 0 90%",
  leftWidth = "0 0 10%",
}) => {
  const [left, right] = children;

  const layoutStyle = {
    left: {
      flex: leftWidth,
    },
    right: {
      flex: rightWidth,
    },
  };

  return (
    <Container>
      <div style={layoutStyle.left}>{left}</div>
      <div style={layoutStyle.right}>{right}</div>
    </Container>
  );
};
export default SubLayout;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
