import ImgCard from "../components/about/ImgCard";

const AboutBnfd = () => {
  const renderCommonParagraph = (text) => {
    return <p className="text-md mb-5">{text}</p>;
  };

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-wrap gap-12 mt-32">
        <div className="w-full sm:w-full md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12">
          <h2 className="text-4xl mb-5 font-black">What is BNFD?</h2>

          <h4 className="text-[#597dff] text-lg mb-5 font-black">
            Follow the process of minting, selling, and transferring Land NFT
            and Stablecoin:
          </h4>

          {renderCommonParagraph(
            "1. Users can claim free land in our metaverse based on their real-world geo-location."
          )}
          {renderCommonParagraph(
            "2. The claimed land is converted into an NFT and listed on our Virtual Estate with a price tag."
          )}
          {renderCommonParagraph(
            "3. Buyers and sellers negotiate the price of the Land NFT."
          )}
          {renderCommonParagraph(
            "4. Buyers purchase the Land NFT using BUSD, USDT, USDC, or any other stablecoin issued on BNB Chain."
          )}
          {renderCommonParagraph(
            "5. The payment for the Land NFT is passed on to our minting smart contract, which mints an equivalent amount of our BNFD stablecoin that can be used within our virtual world and DEFI. The seller of the Land NFT receives payment in our stablecoin."
          )}
          {renderCommonParagraph(
            "6. Once the payment is received, our platform swaps the stablecoin for the equivalent amount of BNB using the Pancake Swap router."
          )}
          {renderCommonParagraph(
            "7. The BNB is then sent to the staking contract of STADER and received as staked LSD of BNB, called BNBx"
          )}
          {renderCommonParagraph(
            "8. Buyers of the Land NFT receive ownership of the virtual land and BNBx (LSD of STADER), in addition to rewards from staked BNB."
          )}
        </div>
        <div className="flex flex-row justify-center rounded-3xl w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12">
          <img src="./images/about/diagram.png" alt="Diagram" />
        </div>
      </div>

      <div className="bg-[#eaf9ff] mt-10 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:p-16 lg:p-16 xl:p-16 2xl:p-16 p-8 sm:gap-20 md:gap-30 lg:gap-60">
        <ImgCard
          isLarge
          srcImg="./images/about/bnft-stablecoin-logo.png"
          altImg="BNFT Stablecoin"
          title="REDEMPTION + PEG MECHANISM"
          description="Redemptions and peg mechanisms are currently in development, but we
          would like to remove staked BNB completely from the circulation,
          only allowing users to use its LSDs BNBx to trade, redeem, and use
          our internal mechanism to peg the value of BNFD to 1 USD. This
          should have a positive effect on BNB price."
        />
      </div>
    </div>
  );
};

export default AboutBnfd;
