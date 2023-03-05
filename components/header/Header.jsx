import { FaBars, FaWallet } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";

import BNBChainLogoIcon from "../../svg/components/BNBChainLogoIcon";
import DropDown from "./DropDown";
import Image from "next/image";
import Link from "next/link";
import VerticalLineIcon from "../../svg/components/VerticalLineIcon";
import { useState } from "react";

const Header = () => {
  const { data: session } = useSession();
  const [dropDownBtnClicked, setDropDownBtnClicked] = useState("");
  const [isVisibleMobileMenu, setIsVisibleMobileMenu] = useState(false);

  const renderWalletAddress = () => {
    const firstSixSymbols = session.user.address.slice(0, 6);
    const lastFourSymbols = session.user.address.slice(38, 42);

    return `${firstSixSymbols}...${lastFourSymbols}`;
  };

  const handleClickBtn = (name) => {
    if (name === dropDownBtnClicked) setDropDownBtnClicked("");
    else setDropDownBtnClicked(name);
  };

  const handleFaBarsBtnClick = () => {
    setIsVisibleMobileMenu(!isVisibleMobileMenu);
  };

  const handleOptionClick = () => {
    if (isVisibleMobileMenu) setIsVisibleMobileMenu(false);
  };

  const handleSignOutSessionClick = () => {
    handleOptionClick();
    signOut();
  };

  return (
    <div className="z-[9999] w-full dark-mode:text-gray-200 dark-mode:bg-gray-800 py-2 fixed top-0 bg-white shadow-lg">
      <div className="flex md:flex-row flex-col flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap px-4 justify-between md:items-center md:pl-8 md:px-[90px] md:ml-14">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center mr-[100px]">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="E(AR)TH - NFT EARTH ON ETHEREUM"
                width={110}
                height={50}
              />
            </Link>
            <VerticalLineIcon />
            <BNBChainLogoIcon />
          </div>

          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={handleFaBarsBtnClick}
          >
            <FaBars />
          </button>
        </div>
        <nav
          className={`${
            isVisibleMobileMenu ? "" : "hidden"
          } md:ml-20 flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-start md:flex-row md:space-x-6 sm:items-start md:items-center lg:items-center xl:items-center 2xl:items-center`}
        >
          <DropDown
            btnName="Learn"
            clickedBtnName={dropDownBtnClicked}
            options={[
              { href: "/about-earthverse", name: "About E(AR)TH" },
              { href: "/about-bnfd", name: "About BNFD" },
              { href: "/geo-spoofing", name: "Geospoofing" },
              { href: "/our-team", name: "Team" },
            ]}
            handleOptionClick={handleOptionClick}
            handleClickBtn={() => handleClickBtn("Learn")}
          />
          <DropDown
            btnName="Participate"
            clickedBtnName={dropDownBtnClicked}
            options={[
              { href: "/claim-free-land", name: "Claim Free Land" },
              { href: "/play-game", name: "Play E[AR]TH Game" },
              { href: "/ar-app", name: "AR app" },
              { href: "/create-vr-model", name: "Create VR Model" },
            ]}
            handleOptionClick={handleOptionClick}
            handleClickBtn={() => handleClickBtn("Participate")}
          />
          <DropDown
            btnName="Resources"
            clickedBtnName={dropDownBtnClicked}
            options={[
              { href: "/virtual-estate-marketplace", name: "Virtual Estate" },
            ]}
            handleOptionClick={handleOptionClick}
            handleClickBtn={() => handleClickBtn("Resources")}
          />
          <div className="py-4">
            <Link
              href="/mint-bnfd"
              onClick={handleOptionClick}
              className="whitespace-nowrap px-4 py-2 mt-2 text-md font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Mint BNFD
            </Link>
          </div>

          <div className="flex flex-row w-full sm:justify-start md:justify-end lg:justify-end xl:justify-end 2xl:justify-end">
            {session ? (
              <button
                onClick={handleSignOutSessionClick}
                className="flex items-center justify-between gap-2 md:ml-2 whitespace-nowrap rounded-lg bg-indigo-800 text-md py-1 px-4 font-semibold text-white shadow-sm"
              >
                <span className="px-2">{renderWalletAddress()}</span>
                <span className="px-2">Sign Out</span>
              </button>
            ) : (
              <Link
                href="/connect-wallet"
                onClick={handleOptionClick}
                className="flex items-center justify-between gap-2 md:ml-2 ml-3 whitespace-nowrap rounded-lg bg-indigo-800 text-md py-1 px-4 font-semibold text-white shadow-sm"
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
