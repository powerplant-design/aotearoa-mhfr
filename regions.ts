const regions = [
    { id: 0, name: 'aotearoa' },
    { id: 1, name: 'opotiki' },
    { id: 2, name: 'whakatane' },
    { id: 3, name: 'taupo' },
    { id: 4, name: 'tauranga' },
    { id: 5, name: 'hamilton' },
    { id: 6, name: 'auckland' },
    { id: 7, name: 'wellington' },
    { id: 8, name: 'christchurch' },
    { id: 9, name: 'dunedin' },
    { id: 10, name: 'invercargill' },
    { id: 11, name: 'greymouth' },
    { id: 12, name: 'whangarei' },
    { id: 13, name: 'napier' },
    { id: 14, name: 'palmerston-north' },
    { id: 15, name: 'new-plymouth' },
    { id: 16, name: 'whanganui' },
    { id: 17, name: 'masterton' },
    { id: 18, name: 'blenheim' },
    { id: 19, name: 'nelson' },
    { id: 20, name: 'greytown' },
];

export default regions;
export interface Region {
    id: number;
    name: string;
}
