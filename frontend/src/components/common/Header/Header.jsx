import React, { useState } from "react";
import logo from "../../../image/ResQ_logo.png";
import { Dialog, Popover } from "@headlessui/react";

import { useSelector } from "react-redux";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Header() {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(useSelector((state) => state.user));
  const isLogedin = useSelector((state) => state.user.logedIn);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-20
             w-auto"
              src={logo}
              alt="logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to={`/`}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          {isLogedin ? (
            <Link
              to={`/user/${currentUser._id}/rescuerequestForm`}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Rescues
            </Link>
          ) : (
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Rescues
            </a>
          )}

          {isLogedin ? (
            <Link
              to={`/user/${currentUser._id}/donation`}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Donation
            </Link>
          ) : (
            <Link
              to="/please-login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Donation
            </Link>
          )}

          {isLogedin && currentUser.role !== "adopter" ? (
            <Link
              to="/user/become-adopter"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Adoption
            </Link>
          ) : isLogedin && currentUser.role === "adopter" ? (
            <Link
              to={`/user/${currentUser._id}/available-pets`}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Adoption
            </Link>
          ) : (
            <Link
              to="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Adoption
            </Link>
          )}

          <Link
            to="/gallery"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Gallery
          </Link>

          {isLogedin ? (
            <Link
              to={`/user/${currentUser._id}/feedback`}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Feedback
            </Link>
          ) : (
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Feedback
            </a>
          )}
        </Popover.Group>

        {isLogedin ? (
          <Link
            to={`/profile/${currentUser._id}`}
            className="hidden lg:flex lg:flex-1 lg:justify-end"
          >
            <img
              src={currentUser.photo}
              alt="profile"
              className="h-10 w-10 rounded-full object-cover"
            />
          </Link>
        ) : (
          <Link
            to="/log-in"
            className="hidden lg:flex lg:flex-1 lg:justify-end"
          >
            Log in
          </Link>
        )}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {isLogedin ? (
              <Link
                to={`/profile/${currentUser._id}`}
                className="lg:flex lg:flex-1 lg:justify-end -m-1.5 p-1.5"
              >
                <img
                  src={currentUser.photo}
                  alt="profile"
                  className="h-10 w-10 rounded-full object-cover"
                />
              </Link>
            ) : (
              ""
            )}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to={`/`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Rescues
                </a>

                {isLogedin ? (
                  <Link
                    to={`/user/${currentUser._id}/donation`}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Donation
                  </Link>
                ) : (
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Donation
                  </a>
                )}

                {isLogedin && currentUser.role !== "adopter" ? (
                  <Link
                    to="/user/become-adopter"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Adoption
                  </Link>
                ) : (
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Adoption
                  </a>
                )}
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Gallery
                </a>

                {isLogedin ? (
                  <Link
                    to={`/user/${currentUser._id}/feedback`}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Feedback
                  </Link>
                ) : (
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Feedback
                  </a>
                )}
              </div>

              {isLogedin ? (
                ""
              ) : (
                <Link
                  to="/log-in"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;
