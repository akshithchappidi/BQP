// components/MainComponent/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-bold mb-2">Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                {/* <li>
                  <a href="#">Products</a>
                </li> */}
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">News Room</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Social Links</h3>
              <ul>
                {/* <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li> */}
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Contact Us</h3>
              <p>Bangalore,Karnataka,India</p>
              <p>New York,United States of America</p>
              <p>Cambridge ,United Kingdom</p>
              <p>Email: leadership@bosonqpsi.com</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;