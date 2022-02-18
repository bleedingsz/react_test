import Onboard from "bnc-onboard";

const networkId = 56,
      BLOCKNATIVE_KEY = "8a4d7093-47fa-410e-91be-78d45ee29bcf";


export function initOnboard (subscriptions){
    const onboard = Onboard;
    return onboard({
        hideBranding: false,
        BLOCKNATIVE_KEY,
        network: networkId,
        darkMode: true,
        subscriptions,
        walletSelect: {
            wallets: [
                { walletName: "metamask" },
                { walletName: 'trust' },
                { walletName: 'binance' }
            ]
        },
        walletCheck: [
            { checkName: "connect" },
            { checkName: "accounts" },
            { checkName: "network" },
            { checkName: "balance" }
        ]
    })
}
