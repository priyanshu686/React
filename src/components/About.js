import log from '../../Image/Image_About.png';

const About = () => {
  return (
    <div className="about-conatiner">
      <h1 className='about-name'>Who we Are?</h1>
      <div className='content-img'>
      <p>
        Launched in 2010, Our technology platform connects customers, restaurant
        partners and delivery partners, serving their multiple needs. Customers
        use our platform to search and discover restaurants, read and write
        customer generated reviews and view and upload photos, order food
        delivery, book a table and make payments while dining-out at
        restaurants. On the other hand, we provide restaurant partners with
        industry-specific marketing tools which enable them to engage and
        acquire customers to grow their business while also providing a reliable
        and efficient last mile delivery service. We also operate a one-stop
        procurement solution, Hyperpure, which supplies high quality ingredients
        and kitchen products to restaurant partners. We also provide our
        delivery partners with transparent and flexible earning opportunities.
      </p>

      <img src={log} alt="img" className="img-about"></img>
      </div>
    </div>
  );
};

export default About;