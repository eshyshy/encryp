"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Crypto",
    id: "crypto",
    content: (
      <ul className="list-disc pl-2">
        <li>BTC</li>
        <li>ETH</li>
        <li>USDT</li>
        <li>BNB</li>
        <li>SOL</li>
        <li>XRP</li>
      </ul>
    ),
  },
  {
    title: "Network",
    id: "network",
    content: (
      <ul className="list-disc pl-2">
        <li>	BNB Chain BNB, Ethereum ETH, Polygon MATIC</li>
        <li>TRON TRX, EOS, Avalanche, Arbitrum</li>
      </ul>
    ),
  },
  {
    title: "Dapps",
    id: "dapps",
    content: (
      <ul className="list-disc pl-2">
        <li>HOT game</li>
        <li>Pixel</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("crypto");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Decentralize Solution</h2>
          <p className="text-base lg:text-lg">
          Decentralized physical infrastructure networks (DePINs) are blockchain protocols that build, maintain, and operate physical hardware infrastructure in an open and decentralized manner.
          The DePIN industry covers infrastructure for data storage, wireless connectivity, computing, energy, data collection, and more. DePIN protocols have garnered crypto investor interest lately due to their potential to impact a wide range of industries, including the Internet, artificial intelligence (AI), energy, wireless communications, and more.
          A DePIN is a peer-to-peer (P2P) network that meets hardware demand through an open and decentralized marketplace. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("crypto")}
              active={tab === "crypto"}
            >
              {" "}
              Crypto{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("network")}
              active={tab === "network"}
            >
              {" "}
              Network{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("dapps")}
              active={tab === "dapps"}
            >
              {" "}
              Dapps{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;