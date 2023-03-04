import { signOut, useSession } from "next-auth/react";

import DropDown from "./DropDown";
import { FaBars } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const { data: session } = useSession();
  const [dropDownBtnClicked, setDropDownBtnClicked] = useState("");

  const renderWalletAddress = () => {
    const firstSixSymbols = session.user.address.slice(0, 6);
    const lastFourSymbols = session.user.address.slice(38, 42);

    return `${firstSixSymbols}...${lastFourSymbols}`;
  };

  const handleClickBtn = (name) => {
    if (name === dropDownBtnClicked) setDropDownBtnClicked("");
    else setDropDownBtnClicked(name);
  };

  return (
    <div className="z-[9999] w-full dark-mode:text-gray-200 dark-mode:bg-gray-800 py-2 fixed top-0 bg-white shadow-lg">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between">
          <Link href="/" className="mr-16">
            <Image
              src="/images/logo.png"
              alt="E(AR)TH - NFT EARTH ON ETHEREUM"
              width={110}
              height={48}
            />
          </Link>
          <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
            <FaBars />
          </button>
        </div>
        <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-start md:flex-row space-x-6 sm:items-start md:items-center lg:items-center xl:items-center 2xl:items-center">
          <DropDown
            btnName="Learn"
            clickedBtnName={dropDownBtnClicked}
            options={[
              { href: "/about-earthverse", name: "About E(AR)TH" },
              { href: "/about-bnfd", name: "About BNFD" },
              { href: "/geo-spoofing", name: "Geospoofing" },
              { href: "/our-team", name: "Team" },
            ]}
            handleClickBtn={() => handleClickBtn("Learn")}
          />
          <DropDown
            btnName="Participate"
            clickedBtnName={dropDownBtnClicked}
            options={[
              { href: "/claim-free-land", name: "Claim Free Land" },
              { href: "/", name: "Play E[AR]TH Game" },
              { href: "/", name: "AR app" },
              { href: "/", name: "Create VR Model" },
            ]}
            handleClickBtn={() => handleClickBtn("Participate")}
          />
          <DropDown
            btnName="Resources"
            clickedBtnName={dropDownBtnClicked}
            options={[
              { href: "/virtual-estate-marketplace", name: "Virtual Estate" },
            ]}
            handleClickBtn={() => handleClickBtn("Resources")}
          />
          <Link
            href="/"
            className="whitespace-nowrap px-4 py-2 mt-2 text-md font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Mint BNFD
          </Link>
          <div className="flex flex-row w-full sm:justify-start md:justify-end lg:justify-end xl:justify-end 2xl:justify-end">
            {session ? (
              <button
                onClick={signOut}
                className="flex items-center justify-between gap-2 ml-3 whitespace-nowrap rounded-lg bg-indigo-800 text-md py-1 px-4 font-semibold text-white shadow-sm"
              >
                <span className="px-2">{renderWalletAddress()}</span>
                <span className="px-2">Sign Out</span>
              </button>
            ) : (
              <Link
                href="/connect-wallet"
                className="flex items-center justify-between gap-2 ml-3 whitespace-nowrap rounded-lg bg-indigo-800 text-md py-1 px-4 font-semibold text-white shadow-sm"
              >
                <FaWallet />
                Connect
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
