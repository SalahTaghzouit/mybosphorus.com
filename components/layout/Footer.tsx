import Section from "./Section";
import Container from "./Container";

const Footer = () => (
  <Section color={'white'}>
    <div className={'footer'}>
      <Container>
        <div className={'copyright'}>
          © 2017 - {new Date().getFullYear()} - Bosphorus Supply Solutions
        </div>
      </Container>
    </div>
    <style jsx>{`
      .footer {
        padding: 6em 0;
      }
    `}</style>
  </Section>
)

export default Footer
