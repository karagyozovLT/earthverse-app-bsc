import Image from "next/image";

const MintBnfd = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex items-center gap-4 mt-28">
        <h1 className="text-4xl font-black">Mint BNFD</h1>
        <Image
          width={100}
          height={10}
          alt="BNFT Stablecoin logo"
          src="/images/about/bnft-stablecoin-logo.png"
        />
      </div>

      <div className="use-card grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-2">
        <div className="mt-7 bg-[#eaf9ff] rounded-xl p-6">
          <h4 className="text-[#597dff] text-lg mb-5 font-black">
            Mint BNFD with Virtual Land NFTs
          </h4>
          <p className="text-md mb-5">
            Mint BNFD by selling Land NFTs in our virtual estate. Buyers
            purchase Land NFTs using standard stablecoin, which is then used to
            buy BNB on the open market. The BNB is staked, and the buyer
            receives staking rewards from staked BNB. An equivalent amount of
            BNFD is minted and sent to the seller`s wallet.
          </p>
        </div>
        <div className="mt-7 bg-[#eaf9ff] rounded-xl p-6">
          <h4 className="text-[#597dff] text-lg mb-5 font-black">
            Mint BNFD with Stablecoin
          </h4>
          <p className="text-md mb-5">
            Mint BNFD with your standard stablecoin and start earning BVNB
            staking rewards simply by holding BNFD. Connect your wallet to our
            minting site, select the desired stablecoin amount, and press the
            MINT button to receive BNFD in your wallet. By minting BNFD, your
            stablecoin is used to purchase BNB on the open market, which is then
            staked, and the user receives staking rewards from staked BNB.{" "}
          </p>
        </div>
        <div className="mt-7 bg-[#eaf9ff] rounded-xl p-6">
          <h4 className="text-[#597dff] text-lg mb-5 font-black">
            Mint BNFD with Cash
          </h4>
          <p className="text-md mb-5">
            Connect your wallet to our fiat on-ramp and mint BNFD with your bank
            card. Choose the desired stablecoin amount, press the MINT button,
            and receive BNFD in your wallet. By minting BNFD, your card is
            charged for the amount of stablecoin minted, and the cash is used to
            buy BNB on the open market. The BNB is staked, and the user receives
            staking rewards from staked BNB.
          </p>
        </div>
      </div>

      <div className="mt-[80px]">
        <h1 className="text-4xl font-black mb-5">BNFD Redemption & Peg.</h1>
        <p className="text-md mb-5">
          BNFD can be minted with Virtual Land NFT purchases, stablecoins, or
          cash/bank cards. Each user minting stablecoin is entitled to staking
          rewards from staked BNB proportional to the amount of minted BNFD. The
          protocol`s smart contract holds a liquid staking derivative called
          BNBx, which directs staking rewards only to the user. The LSD in our
          smart contract can be redeemed only by the user who wants to burn the
          stablecoin, and it is only released for redemption purposes. BNFD is
          pegged to a value of 1 USD, maintained by similar algorithms as RAI
          stablecoin. The redemption price is fixed at 1 USD, calculated by the
          ratio of the market price of BNBx and BNB. Market forces and arbitrage
          incentives are in place to ensure the stability of the peg.
        </p>
      </div>
    </div>
  );
};

export default MintBnfd;
