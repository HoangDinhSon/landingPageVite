const DataForBlockChainDevelopService = [
    {
        id: 1,
        leftParagrap: 'Cryptocurrency & NFTs',
        lisDetail: [
            {
                id: 100,
                right: 'Cryptocurrency Development',
                detail: 'Handoff your cryptocurrency development to our team of qualified engineers. Our team has real-world experience creating a range of crypto tokens, bitcoins, altcoins, NFTs, custom smart contracts, etc., with bank-level security features that help investors trade safely within a decentralized blockchain network.',
            },
            {
                id: 101,
                right: 'Crypto Wallets Development',
                detail: 'detailRightSecond',
            },
            {
                id: 102,
                right: 'NFT Marketplace Development',
                detail: 'detailrightThird',
            },
            {
                id: 103,
                right: 'Smart Contract Development',
                detail: 'detailRightFourth',
            },
            {
                id: 104,
                right: 'ICO and IEO Development',
                detail: 'detailRightFifth',
            },
        ],
    },
    {
        id: 2,
        leftParagrap: 'Decentralized Solutions',
        lisDetail: [
            {
                id: 105,
                right: 'Centralized / Decentralized Exchange Development',
                detail: 'detailtRightFist',
            },
            {
                id: 106,
                right: 'Hyperledger Solutions',
                detail: 'detailRightSecond',
            },
            {
                id: 107,
                right: 'DeFi Solution Development',
                detail: 'detailrightThird',
            },
            {
                id: 108,
                right: 'Decentralized App (dApp) Development',
                detail: 'detailRightFourth',
            },
            {
                id: 109,
                right: 'ICO and IEO Development2',
                detail: 'detailRightFifth',
            },
        ],
    },
    {
        id: 3,
        leftParagrap: 'Blockchain Solutions',
        lisDetail: [
            {
                id: 110,
                right: 'Dedicated Blockchain Development',
                detail: 'detailtRightFist',
            },
            {
                id: 111,
                right: 'End-to-end Blockchain Development',
                detail: 'detailRightSecond',
            },
            {
                id: 112,
                right: 'POC Development',
                detail: 'detailrightThird',
            },
            {
                id: 113,
                right: 'Blockchain Consultation',
                detail: 'detailRightFourth',
            },
            {
                id: 114,
                right: 'Blockchain Staff Augmentation',
                detail: 'detailRightFifth',
            },
        ],
    },
];
/***DATA FOR COMPOENENT APPROACHES_TO_BLOCKCHAIN*****/
import { hybridApproach, publicApproach, privateAproach } from './src/assets/icons';
const dumyDataForApproachtoblockchain = [
    {
        icon: publicApproach,
        header: 'Public',
        paragrap:
            'Permission-less and non-restrictive, public blockchains work best when maintaining large user bases where any member of the shared network can verify records, do proof-of-work, or engage in mining.',
    },
    {
        icon: privateAproach,
        header: 'Private',
        paragrap:
            'Permission-less and non-restrictive, public blockchains work best when maintaining large user bases where any member of the shared network can verify records, do proof-of-work, or engage in mining.',
    },
    {
        icon: hybridApproach,
        header: 'Hybrid',
        paragrap:
            'Permission-less and non-restrictive, public blockchains work best when maintaining large user bases where any member of the shared network can verify records, do proof-of-work, or engage in mining.',
    },
];
/***DATA FOR HEADER ****/
const dummyDataFoHeaderDeskhop = [
    {
        href: '#',
        className: '',

        content: 'HOME',
    },
    {
        href: '#contact',
        className: '',

        content: 'SERVICES',
    },
    {
        href: '#contact',
        className: 'text-[#E21A22]',
        content: 'BLOCKCHAIN',
    },
    {
        href: '#contact',
        className: '',

        content: 'BLOG',
    },
    {
        href: '#contact',
        className: '',

        content: 'JOBS',
    },
    {
        href: '#contact',
        className: '',

        content: 'ABOUT',
    },
    {
        href: '#contact',

        className: 'text-red-600 bg-[green]',

        content: 'TESTIMONIALS',
    },
    {
        href: '#contact',
        className: "",

        content: 'CONTACT',
    },
];
export { DataForBlockChainDevelopService, dumyDataForApproachtoblockchain, dummyDataFoHeaderDeskhop };
