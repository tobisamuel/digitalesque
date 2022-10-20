import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const openMenu = () => {
    setmenuOpen(true);
  };

  const closeMenu = () => {
    setmenuOpen(false);
  };

  return (
    <div className="relative">
      <div className="sticky top-0 left-0 w-full px-6 py-6 bg-white flex justify-between z-[] md:px-44 md:py-10">
        <span>
          <svg
            className="w-auto h-[1.75rem] translate-y-[0.25rem]"
            viewBox="0 0 151.35 25.68"
          >
            <path
              d="M30.67,4.87a6.36,6.36,0,0,1,3.87,1.31l.93-1.33h3.12L36.34,8.34a6.36,6.36,0,0,1-2.14,8.2l-3.05,3.52a18.38,18.38,0,0,1,8.09,2v3.55c-7.91-5.27-10.41-1-14.78-4.76L24.52,17A8.2,8.2,0,0,0,28,19.56l1.51-1.67.36-.34a6.37,6.37,0,0,1,.84-12.68Zm0,3.1a3.28,3.28,0,1,1-3.28,3.28h0A3.26,3.26,0,0,1,30.67,8h0Z"
              fill="#029e8e"
              fillRule="evenodd"
            ></path>
            <path
              d="M20.85,0a2,2,0,1,1-2,2A2,2,0,0,1,20.85,0Z"
              fill="#029e8e"
              fillRule="evenodd"
            ></path>
            <polygon
              points="19.13 4.87 22.56 4.87 22.56 17.61 19.13 17.61 19.13 4.87"
              fill="#029e8e"
              fillRule="evenodd"
            ></polygon>
            <polygon
              points="48.75 0 52.18 0 52.18 4.87 56.9 4.87 56.9 8.31 52.18 8.31 52.18 17.5 48.75 17.5 48.75 8.31 45.25 8.31 45.25 4.87 48.75 4.87 48.75 0"
              fill="#029e8e"
              fillRule="evenodd"
            ></polygon>
            <path
              d="M64.93,4.87a6.31,6.31,0,0,1,3.45,1V4.72h3.44V17.5H68.38v-.91A6.37,6.37,0,1,1,64.93,4.87Zm0,3.22a3.16,3.16,0,1,1-3.16,3.16h0a3.15,3.15,0,0,1,3.15-3.15Z"
              fill="#029e8e"
              fillRule="evenodd"
            ></path>
            <polygon
              points="74.42 0 77.86 0 77.86 17.61 74.42 17.61 74.42 0"
              fill="#029e8e"
              fillRule="evenodd"
            ></polygon>
            <path
              d="M92,13.1H83.4A3.14,3.14,0,0,0,86,14.4a3.09,3.09,0,0,0,1-.17h4.61A6.55,6.55,0,1,1,92,13.1ZM83.18,9.67h5.47a3.16,3.16,0,0,0-4.32-1.15A3.1,3.1,0,0,0,83.18,9.67Z"
              fill="#029e8e"
              fillRule="evenodd"
            ></path>
            <path
              d="M115.24,4.87a6.37,6.37,0,1,0,3.32,11.81v9H122V4.87h-3.43V5.8A6.41,6.41,0,0,0,115.24,4.87Zm0,3.21a3.16,3.16,0,1,0,3.16,3.16,3.15,3.15,0,0,0-3.16-3.16Z"
              fill="#029e8e"
              fillRule="evenodd"
            ></path>
            <path
              d="M133.45,4.87h3.44v6.49h0a6.37,6.37,0,0,1-12.51,1.57h0a6.63,6.63,0,0,1-.21-1.26h0V4.87h3.44V12.4a3.15,3.15,0,0,0,5.86,0V4.87Z"
              fill="#029e8e"
              fillRule="evenodd"
            ></path>
            <path
              d="M103.39,13H97.66l-3,.14A6.37,6.37,0,0,1,105.4,6.93l-2.2,2.33a3.16,3.16,0,0,0-5.1.26h8.78a6.66,6.66,0,0,1,.23,1.72,6.36,6.36,0,0,1-10.83,4.54l2.25-2.29a3.17,3.17,0,0,0,4.48-.06,2.89,2.89,0,0,0,.38-.47Z"
              fill="#029e8e"
              fillRule="evenodd"
            ></path>
            <path
              d="M41.88,0a2,2,0,1,1-2,2A2,2,0,0,1,41.88,0Z"
              fill="#029e8e"
              fillRule="evenodd"
            ></path>
            <polygon
              points="40.16 4.87 43.6 4.87 43.6 17.61 40.16 17.61 40.16 4.87"
              fill="#029e8e"
              fillRule="evenodd"
            ></polygon>
            <path
              d="M151,13.1h-8.6a3.14,3.14,0,0,0,2.6,1.3,3.09,3.09,0,0,0,1-.17h4.6a6.37,6.37,0,1,1,.47-1.13Zm-8.79-3.43h5.47a3.16,3.16,0,0,0-4.32-1.15A3.1,3.1,0,0,0,142.21,9.67Z"
              fill="#029e8e"
              fillRule="evenodd"
            ></path>
            <path
              d="M9.35,0A8.76,8.76,0,1,1,0,8.76,9.17,9.17,0,0,1,.2,6.88H3.78a5.32,5.32,0,1,0,6.86-3.1,5.41,5.41,0,0,0-1.86-.34H0V0Z"
              fill="#029e8e"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>

        <button
          type="button"
          className="flex items-center gap-2"
          onClick={openMenu}
        >
          <span className="md:text-lg">Menu</span>
          <svg className="w-auto h-[0.625rem]" viewBox="0 0 39.52 5.8">
            <rect width="39.52" height="0.84" fill="inherit"></rect>
            <rect y="4.96" width="39.52" height="0.84" fill="inherit"></rect>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {/* <div
        className={`absolute w-screen h-full inset-y-0 right-0 bg-[#029e8e] z-50 transform transition-all ease-in-out ${
          menuOpen ? "-translate-y-0" : "-translate-y-full"
        } z-50`}
      >
        <div className="relative h-full px-6 text-white font-bold md:px-44">
          <div className="flex justify-between items-center border-b-2 border-white md:h-24">
            <h4 className="mt-24 mb-6 text-2xl font-travels font-extrabold tracking-wider md:mt-0 md:mb-0">
              The Digitalesque Website Menu
            </h4>

            <button
              className="flex items-center gap-2 text-white font-semibold md:top-0 hover:text-blue-300"
              tabIndex={0}
              onClick={closeMenu}
            >
              <span className="md:text-lg">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="mt-8 pb-16 space-y-2 ml-auto md:w-1/2 md:space-y-4">
            <div className="px-4 py-4 border-b-2 border-white md:px-8">
              <a
                href=""
                className="text-xl font-travels font-extrabold tracking-wide md:text-3xl"
              >
                The Company
              </a>
              <p className="md:text-lg">
                Everything you need to know about our brand core.
              </p>
            </div>

            <div className="px-4 py-4 border-b-2 border-white md:px-8">
              <a
                href=""
                className="text-xl font-travels font-extrabold tracking-wide md:text-3xl"
              >
                The Blueprint
              </a>
              <p className="md:text-lg">
                Our detailed plan on how we engage in business
              </p>
            </div>

            <div className="px-4 py-4 border-b-2 border-white md:px-8">
              <a
                href=""
                className="text-xl font-travels font-extrabold tracking-wide md:text-3xl"
              >
                The Clientele
              </a>
              <p className="md:text-lg">
                The individuals and orgaizations we have served
              </p>
            </div>

            <div className="px-4 py-4 border-b-2 border-white md:px-8">
              <a
                href=""
                className="text-xl font-travels font-extrabold tracking-wide md:text-3xl"
              >
                Our Capabilities
              </a>
              <p className="md:text-lg">
                More details on the kind of workload we can carry.
              </p>
            </div>

            <div className="px-4 py-4 border-b-2 border-white md:px-8">
              <a
                href=""
                className="text-xl font-travels font-extrabold tracking-wide md:text-3xl"
              >
                Our Insights
              </a>
              <p className="md:text-lg">
                Thouhgts from us or our friends in the industry.
              </p>
            </div>

            <div className="px-4 py-4 border-b-2 border-white md:px-8">
              <a
                href=""
                className="text-xl font-travels font-extrabold tracking-wide md:text-3xl"
              >
                Our Contacts
              </a>
              <p className="md:text-lg">
                A list of the options to connect with our firm.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
