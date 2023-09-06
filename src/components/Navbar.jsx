import { Disclosure } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const menu = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About us",
    href: "/aboutus",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Whitepaper",
    href: "/whitepaper",
  },
  {
    label: "Contact us",
    href: "/contactus",
  },
];
export default function Navbar() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  useEffect(() => {
    if (isPanelOpen) {
      // Add the class to disable scrolling
      document.body.classList.add("overflow-hidden");
    } else {
      // Remove the class to enable scrolling
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isPanelOpen]);

  return (
    <>
      <nav className="md:p-6 hero">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap  justify-between md:gap-10 md:flex-nowrap">
                <div className="flex md:flex-nowrap w-full  items-center px-10 justify-between">
                  <img
                    src="/assets/randomz.svg"
                    width={60}
                    height={60}
                    alt={"notfound"}
                    className="md:flex hidden"
                  />
                  <div className="items-center justify-center hidden w-full md:flex ">
                    {menu.map((item, index) => (
                      <NavLink
                        to={item.href}
                        key={index}
                        className={({ isActive }) =>
                          isActive
                            ? " px-5 py-2 text-base pb-4 font-medium text-white border-b border-[#14E8B6] "
                            : "px-5 py-2 text-base font-medium text-white pb-4 "
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                  <Link
                    to={"/dashboard"}
                    className="leading-3 w-full max-w-fit py-4  justify-center hidden md:flex items-center p-3 text-center rounded-md   connect-wallet  text-white font-bold "
                  >
                    Connect to Dapp
                  </Link>
                </div>
                <div
                  className={`flex md:hidden p-4 h-full items-center justify-between w-full md:w-auto  ${
                    open ? " bg-[#090C18] " : " bg-transparent "
                  } `}
                >
                  <img
                    src="/assets/randomz.svg"
                    width={40}
                    height={40}
                    alt={"notfound"}
                    className="md:hidden"
                  />
                  <Disclosure.Button
                    onClick={() => setIsPanelOpen(!isPanelOpen)}
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto bg-transparent rounded-md md:hidden text-white focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#24BD78"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>
              </div>
              <Disclosure.Panel
                style={{
                  zIndex: 9999,
                }}
              >
                <div className="flex flex-col bg-[#090C18] items-center h-screen justify-start order-2 w-full md:hidden">
                  {menu.map((item, index) => (
                    <Link
                      to={item.href}
                      key={index}
                      className="px-5 my-4 py-2 text-sm font-medium text-[#E1E1E1]  hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}{" "}
                  <Link
                    to={"/dashboard"}
                    className="leading-3 w-full mt-2 max-w-fit py-4  justify-center flex items-center p-3 text-center rounded-md   connect-wallet  text-white font-bold "
                  >
                    Connect to Dapp
                  </Link>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </>
  );
}
