import { NextRequest, NextResponse } from 'next/server';
import regions from './regions';

export const config = {
    matcher: ['/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)'],
};

function getRootDomain(hostname: string): string {
    if (hostname.includes('localhost')) {
        return 'localhost:3000';
    }
    const parts = hostname.split('.');
    return parts.slice(-2).join('.');
}

export default async function middleware(req: NextRequest) {
    const url = req.nextUrl;
    const hostname = req.headers.get('host');
    const targetSubdomain = hostname?.split('.')[0] || '';
    const protocol = req.headers.get('x-forwarded-proto') || 'http';

    const subdomain =
        regions.find((region) => region.name === targetSubdomain) || null;

    if (subdomain) {
        const newUrl = new URL(`/${subdomain.name}${url.pathname}`, req.url);
        return NextResponse.rewrite(newUrl);
    }

    const rootDomain = getRootDomain(hostname || '');
    const newUrl = new URL(
        `${protocol}://${regions[0].name}.${rootDomain}${url.pathname}`,
        req.url
    );
    return NextResponse.redirect(newUrl);
}
