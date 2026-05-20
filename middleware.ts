import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import regions from './regions';

export function middleware(request: NextRequest) {
    const hostname = request.headers.get('host') ?? '';
    // hostname examples: opotiki.aotearoamhfr.nz, aotearoamhfr.nz, opotiki.localhost:3000
    const subdomain = hostname.split('.')[0];

    const isRegion = regions.some(
        (r) => r.slug === subdomain && r.slug !== 'aotearoa'
    );

    if (isRegion) {
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-region', subdomain);
        return NextResponse.next({ request: { headers: requestHeaders } });
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        // Skip Next.js internals and static files
        '/((?!_next/static|_next/image|favicon.ico|fonts).*)',
    ],
};
