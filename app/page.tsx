"use client";

import { useState } from "react";
import { generateMnemonic } from "bip39";
import SolanaWallet from "@/components/SolanaWallet";
import EtheWallet from "@/components/EtheWallet";

export default function Home() {
  const [mnemonics, setMnemonics] = useState("");
  const [solanaWallet, setSolanaWallet] = useState(true);
  const generateSeedPhrase = () => {
    const generatedMnemonic = generateMnemonic();
    setMnemonics(generatedMnemonic);
  };
  return (
    <div className="h-max w-80 my-20 flex flex-col justify-center items-center text-white">
      <button
        className="border-2 p-2 border-white"
        onClick={generateSeedPhrase}
      >
        Generate Seed Phrase
      </button>
      {mnemonics.length > 0 && (
        <>
          {" "}
          <div className="mt-10 w-100 flex justify-center items-start  bg-gray-800">
            {mnemonics.split(" ").map((mnemonic: string, index) => (
              <p key={index} className="m-10">
                {mnemonic}
              </p>
            ))}
          </div>
          <p className="text-sm opacity-60">
            save these mnemonics safely/privately somewhere else
          </p>
        </>
      )}
      {mnemonics.length > 0 && (
        <>
          <div className="flex flex-col gap-4 justify-center items-center mt-10">
            <p>SET wallet</p>
            <div className="flex flex-row gap-2 justify-center">
              <button
                onClick={() => setSolanaWallet(true)}
                className={`border-2 p-2 border-white ${
                  solanaWallet && "bg-gray-400"
                }`}
              >
                Solana Wallet
              </button>
              <button
                onClick={() => setSolanaWallet(false)}
                className={`border-2 p-2 border-white ${
                  !solanaWallet && "bg-gray-400"
                }`}
              >
                Ethereum Wallet
              </button>
            </div>
          </div>
          <div className="mt-10 w-100 flex justify-center items-start  bg-gray-800">
            {solanaWallet ? <SolanaWallet /> : <EtheWallet />}
          </div>
        </>
      )}
    </div>
  );
}
