

const Footer = () => {
    return (
        <footer className=" footer p-10 bg-gray-800 text-white mt-10">
      <div className="footer container mx-auto ">
      
      <aside className=" lg:ml-28 ml-10 ">
        <img src="" alt="" className="" />
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav className="lg:ml-16 ml-10 mb-6">
        <h6 className="footer-title">About</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="lg:ml-16 ml-10 mb-6">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="lg:ml-16 ml-10 mb-6">
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      </div>
      
    </footer>
    );
};

export default Footer;