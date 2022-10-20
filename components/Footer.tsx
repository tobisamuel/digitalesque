const Footer = () => {
  return (
    <div className="min-h-[80vh] grid grid-cols-1 gap-y-6 md:grid-cols-[1fr_0.5fr_0.5fr_1fr_0.75fr] px-6 py-16 bg-[#029e8e] text-white font-travels font-bold md:gap-x-4 md:px-44">
      <div className="py-4 border-t-2 border-white">
        <p>
          The Digital <br />
          Transformation Agency
        </p>
      </div>

      <div className="py-4 border-t-2 border-white flex flex-col tracking-wider md:col-start-4">
        <a href="">Instagram</a>
        <a href="">Twitter</a>
        <a href="">LinkedIn</a>
      </div>
      <div className="py-4 border-t-2 border-white flex flex-col tracking-wider">
        <a href="">Privacy Policy</a>
        <a href="">Terms & Conditions</a>
      </div>
      <div className="py-4 border-t-2 border-white flex flex-col tracking-wider">
        <span>For new business enquiries</span>
        <a href="">office@thecorporation.xyz</a>
      </div>
      <div className="py-4 border-t-2 border-white flex flex-col tracking-wider md:col-start-4">
        <span>8 IBM Haruna Str, Utako District, Abuja 900211</span>
      </div>
      <div className="py-4 border-t-2 border-white">
        <span>All Rights Reserved 2022</span>
      </div>
    </div>
  );
};

export default Footer;
