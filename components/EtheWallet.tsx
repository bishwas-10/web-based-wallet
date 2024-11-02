"use client"
import React, { useState } from 'react'

/*using similar to solana wallet in this*/
// import { useState } from "react";
// import { mnemonicToSeed } from "bip39";
// import { Wallet, HDNodeWallet } from "ethers";

// export const EthWallet = ({mnemonic}) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [addresses, setAddresses] = useState([]);

//     return (
//         <div>
//             <button onClick={async function() {
//                 const seed = await mnemonicToSeed(mnemonic);
//                 const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
//                  const hdNode = HDNodeWallet.fromSeed(seed);
//                  const child = hdNode.derivePath(derivationPath);
//                  const privateKey = child.privateKey;
//                  const wallet = new Wallet(privateKey);
//                  setCurrentIndex(currentIndex + 1);
//                 setAddresses([...addresses, wallet.address]);
//             }}>
//                 Add ETH wallet
//             </button>

//             {addresses.map(p => <div>
//                 Eth - {p}
//             </div>)}
//         </div>
//     )
// }

const EtheWallet = () => {
    const [seed, setSeed] = useState<string>("");

    return (
      <div className="w-max flex flex-col gap-2 bg-black">
        <div className=" flex flex-row gap-10 items-center">
        <input
          type="text"
          placeholder="use one of the mnemonic"
          className="h-10 p-2"
          onChange={(e) => setSeed(e.target.value)}
        />
        <button className="border-2 p-2 border-white">
          generate pub/priv key pair
        </button>
        </div>
      </div>
    );
}

export default EtheWallet