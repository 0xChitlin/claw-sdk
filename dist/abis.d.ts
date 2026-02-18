export declare const IDENTITY_ABI: readonly [{
    readonly name: "register";
    readonly type: "function";
    readonly stateMutability: "payable";
    readonly inputs: readonly [{
        readonly type: "string";
        readonly name: "agentURI";
    }];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly name: "tokenIdByName";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "string";
        readonly name: "name";
    }];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly name: "ownerOf";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "uint256";
        readonly name: "tokenId";
    }];
    readonly outputs: readonly [{
        readonly type: "address";
    }];
}, {
    readonly name: "getIdentity";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "uint256";
        readonly name: "tokenId";
    }];
    readonly outputs: readonly [{
        readonly type: "address";
        readonly name: "agentWallet";
    }, {
        readonly type: "string";
        readonly name: "name";
    }, {
        readonly type: "uint256";
        readonly name: "registeredAt";
    }, {
        readonly type: "address";
        readonly name: "creator";
    }, {
        readonly type: "bool";
        readonly name: "active";
    }];
}, {
    readonly name: "totalSupply";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly name: "tokenOfOwnerByIndex";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "owner";
    }, {
        readonly type: "uint256";
        readonly name: "index";
    }];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly name: "balanceOf";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "owner";
    }];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly name: "Registered";
    readonly type: "event";
    readonly inputs: readonly [{
        readonly type: "uint256";
        readonly name: "tokenId";
        readonly indexed: true;
    }, {
        readonly type: "address";
        readonly name: "owner";
        readonly indexed: true;
    }, {
        readonly type: "string";
        readonly name: "agentURI";
    }];
}];
export declare const SKILL_REGISTRY_ABI: readonly [{
    readonly name: "registerSkill";
    readonly type: "function";
    readonly stateMutability: "payable";
    readonly inputs: readonly [{
        readonly type: "string";
        readonly name: "name";
    }, {
        readonly type: "string";
        readonly name: "skillURI";
    }, {
        readonly type: "uint256";
        readonly name: "fee";
    }];
    readonly outputs: readonly [];
}, {
    readonly name: "installSkill";
    readonly type: "function";
    readonly stateMutability: "payable";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "skillAddress";
    }];
    readonly outputs: readonly [];
}, {
    readonly name: "getSkill";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "skillAddress";
    }];
    readonly outputs: readonly [{
        readonly type: "string";
        readonly name: "name";
    }, {
        readonly type: "string";
        readonly name: "skillURI";
    }, {
        readonly type: "uint256";
        readonly name: "fee";
    }, {
        readonly type: "address";
        readonly name: "author";
    }, {
        readonly type: "bool";
        readonly name: "active";
    }];
}, {
    readonly name: "getInstalledSkills";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "uint256";
        readonly name: "agentId";
    }];
    readonly outputs: readonly [{
        readonly type: "address[]";
    }];
}, {
    readonly name: "isInstalled";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "uint256";
        readonly name: "agentId";
    }, {
        readonly type: "address";
        readonly name: "skillAddress";
    }];
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly name: "SkillRegistered";
    readonly type: "event";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "skillAddress";
        readonly indexed: true;
    }, {
        readonly type: "address";
        readonly name: "author";
        readonly indexed: true;
    }, {
        readonly type: "string";
        readonly name: "name";
    }];
}, {
    readonly name: "SkillInstalled";
    readonly type: "event";
    readonly inputs: readonly [{
        readonly type: "uint256";
        readonly name: "agentId";
        readonly indexed: true;
    }, {
        readonly type: "address";
        readonly name: "skillAddress";
        readonly indexed: true;
    }];
}];
export declare const WALLET_FACTORY_ABI: readonly [{
    readonly name: "createWallet";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly type: "uint256";
        readonly name: "agentId";
    }];
    readonly outputs: readonly [{
        readonly type: "address";
    }];
}, {
    readonly name: "getWallet";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "uint256";
        readonly name: "agentId";
    }];
    readonly outputs: readonly [{
        readonly type: "address";
    }];
}, {
    readonly name: "WalletCreated";
    readonly type: "event";
    readonly inputs: readonly [{
        readonly type: "uint256";
        readonly name: "agentId";
        readonly indexed: true;
    }, {
        readonly type: "address";
        readonly name: "wallet";
        readonly indexed: true;
    }];
}];
export declare const DIVIDENDS_ABI: readonly [{
    readonly name: "claim";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
}, {
    readonly name: "pendingDividends";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "account";
    }];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly name: "totalDistributed";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly name: "DividendsClaimed";
    readonly type: "event";
    readonly inputs: readonly [{
        readonly type: "address";
        readonly name: "account";
        readonly indexed: true;
    }, {
        readonly type: "uint256";
        readonly name: "amount";
    }];
}];
//# sourceMappingURL=abis.d.ts.map