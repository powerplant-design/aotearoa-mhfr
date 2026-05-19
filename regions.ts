const regions: Region[] = [
    { id: 0, slug: 'aotearoa', name: 'Aotearoa' },
    { id: 1, slug: 'opotiki', name: 'Ōpōtiki' },
    { id: 2, slug: 'mataatua', name: 'Mataatua' },
    // { id: 3, slug: 'taupo', name: 'Taupo' },
    // { id: 4, slug: 'tauranga', name: 'Tauranga' },
    // { id: 5, slug: 'hamilton', name: 'Hamilton' },
    // { id: 6, name: 'auckland' },
    // { id: 7, name: 'wellington' },
    // { id: 8, name: 'christchurch' },
    // { id: 9, name: 'dunedin' },
    // { id: 10, name: 'invercargill' },
    // { id: 11, name: 'greymouth' },
    // { id: 12, name: 'whangarei' },
    // { id: 13, name: 'napier' },
    // { id: 14, name: 'palmerston-north' },
    // { id: 15, name: 'new-plymouth' },
    // { id: 16, name: 'whanganui' },
    // { id: 17, name: 'masterton' },
    // { id: 18, name: 'blenheim' },
    // { id: 19, name: 'nelson' },
    // { id: 20, name: 'greytown' },
];

export default regions;
export interface Region {
    id: number;
    slug: string;
    name: string;
}
