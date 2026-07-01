import Container from "./Container";

const Section = ({ id, children }) => {
  return (
    <section
      id={id}
      className="py-24 lg:py-32"
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;