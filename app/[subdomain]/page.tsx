'use client';
import { useParams } from 'next/navigation';

const Home = () => {
    const params = useParams();
    const tenant = params.subdomain;

    // if tenant === 'aotearoa' then show aotearoa
    // else show website

    return <div>{tenant}</div>;
};

export default Home;
