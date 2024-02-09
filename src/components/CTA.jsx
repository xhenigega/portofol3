import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
      Seeking talent?<br className='sm:block hidden' />
      I'm eager for projects and roles.Let's connect!</p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;