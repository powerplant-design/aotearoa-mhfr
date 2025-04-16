import { NextRequest, NextResponse } from 'next/server';

const subdomains = ['aotearoa', 'opotiki', 'whakatane'];

export const config = {
    matcher: ['/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)'],
};

export default async function middleware(req: NextRequest) {
    const url = req.nextUrl;
    const hostname = req.headers.get('host');
    const targetSubdomain = hostname?.split('.')[0] || '';

    const subdomain = subdomains.find((s) => s === targetSubdomain) || null;

    if (subdomain) {
        return NextResponse.rewrite(
            new URL(`/${subdomain}${url.pathname}`, req.url)
        );
    }

    const protocol = req.headers.get('x-forwarded-proto') || 'http';
    return NextResponse.redirect(
        new URL(`${protocol}://${subdomains[0]}.${hostname}`)
    );
}
