"use client";

import { mnemonicToSeed } from "bip39";
import React, { useState } from "react";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";

const SolanaWallet = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState<any[]>([]);
  const [mnemonic, setMnemonic] = useState<string>("");
  function mnemonicToSEED() {
    const seed = mnemonicToSeed(mnemonic);
    const path = `m/44'/501'/${currentIndex}'/0'`;
    const derivedSeed = derivePath(path, seed.toString()).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);
    console.log(keypair);
    setCurrentIndex(currentIndex + 1);
    setPublicKeys([...publicKeys, keypair]);
  }
  return (
    <div className="w-max flex flex-col gap-2 bg-black">
      <div className=" flex flex-row gap-10 items-center">
        <input
          type="text"
          placeholder="use one of the mnemoinc"
          className="h-10 p-2 text-black"
          onChange={(e) => setMnemonic(e.target.value)}
        />
        <button className="border-2 p-2 border-white" onClick={mnemonicToSEED}>
          generate pub/priv key pair
        </button>
      </div>
      {publicKeys.map((p, i) => (
        <div key={i} className="p-2 bg-gray-200 text-black">
          <p>{p.publicKey?.toBase58()}</p>
          <p>
            {Buffer.from(Object.values(p.secretKey) as any).toString("base64")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SolanaWallet;
