import TeamCard from "../components/TeamCard";

const OurTeam = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <h1 className="text-4xl font-black mt-28">Meet the Team</h1>
      <div className="bg-[#eaf9ff] mt-5">
        <div className="use-card grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2 p-6 sm:p-8 md:p-8 lg:p-16 xl:p-16 2xl:p-16">
          <TeamCard
            fullName="Georgi Karagyozov"
            role="Smart Contract & Front End Engineer"
            srcImg="/images/team/georgi-karagyozov.jpeg"
            altImg="Georgi Karagyozov"
            linkedinLink="https://www.linkedin.com/in/georgi-karagyozov-1a33041b0/"
          />
          <TeamCard
            fullName="Niall McLoughlin"
            role="Game design, Unity, Thirdweb"
            srcImg="/images/team/niall-mcLoughlin.jpeg"
            altImg="Niall McLoughlin"
            linkedinLink="https://www.linkedin.com/in/niall-mcloughlin-291966a4/"
            twitterLink="https://twitter.com/neillniall"
          />
          <TeamCard
            fullName="Mudassir Malik"
            role="Front End Engineer"
            srcImg="/images/team/mudassir-malik.jpg"
            altImg="Mudassir Malik"
            linkedinLink="https://www.linkedin.com/in/mohammad-mudassir-075777130/"
            twitterLink="https://twitter.com/Hafiz786990"
          />
          <TeamCard
            fullName="Mishkat Mustafid"
            role="Mobile Engineer"
            srcImg="/images/team/mishkat-mustafid.jpg"
            altImg="Mishkat Mustafid"
            linkedinLink="https://www.linkedin.com/in/mishkatmustafid/"
            twitterLink="https://twitter.com/MishkatMustafid"
          />
          <TeamCard
            fullName="Luxmi Gupta"
            role="Mobile Engineer"
            srcImg="/images/team/luxmi-gupta.jpeg"
            altImg="Luxmi Gupta"
            linkedinLink="https://www.linkedin.com/in/luxmi-gupta-058519191/"
            twitterLink="https://twitter.com/luxmigupta1799"
          />
          <TeamCard
            fullName="Muhammad Inaamullah"
            role="AI & Geo-Spoofing"
            srcImg="/images/team/muhammad-inaamullah.jpeg"
            altImg="Muhammad Inaamullah"
            linkedinLink="https://www.linkedin.com/in/muhammad-inaamullah/"
            twitterLink="https://twitter.com/therealInaam"
          />
          <TeamCard
            fullName="Saumy Sharma"
            role="Augmented reality (AR)"
            srcImg="/images/team/saumy-sharma.jpeg"
            altImg="Saumy Sharma"
            linkedinLink="https://www.linkedin.com/in/saumy-sharma/"
            twitterLink="https://twitter.com/bad_casm"
          />
          <TeamCard
            fullName="Heeba Shaikh"
            role="Augmented reality (AR)"
            srcImg="/images/team/heeba-shaikh.jpeg"
            altImg="Heeba Shaikh"
            linkedinLink="https://www.linkedin.com/in/shaikhheeba07/"
            twitterLink="https://twitter.com/ShaikhHeeba_07"
          />
          <TeamCard
            fullName="Peter Krulis"
            role="Smart Contract Engineer"
            srcImg="/images/team/peter-krulis.jpeg"
            altImg="Peter Krulis"
            linkedinLink="https://www.linkedin.com/in/peter-krulis-4921751a2/"
            twitterLink="https://twitter.com/krulis_petr"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
