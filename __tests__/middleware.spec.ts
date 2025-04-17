import { NextRequest, NextResponse } from 'next/server';
import middleware from '../middleware';

const createMockRequest = ({
    host,
    path = '/',
    proto = 'https',
}: {
    host: string;
    path?: string;
    proto?: string;
}) =>
    ({
        nextUrl: {
            pathname: path,
        },
        headers: {
            get: (key: string) => {
                if (key === 'host') return host;
                if (key === 'x-forwarded-proto') return proto;
                return null;
            },
        },
    } as unknown as NextRequest);

describe('middleware', () => {
    // @todo: 'rewrites for a valid subdomain'

    it('redirects to default subdomain for unknown subdomain', async () => {
        const req = createMockRequest({
            host: 'invalid.mhfr.nz',
            path: '/support',
        });
        const res = await middleware(req);

        expect(res).toBeInstanceOf(NextResponse);
        expect((res as NextResponse).headers.get('location')).toBe(
            'https://aotearoa.mhfr.nz/support'
        );
    });

    it('rewrites to landing or default for localhost', async () => {
        const req = createMockRequest({
            host: 'localhost:3000',
            proto: 'http',
        });
        const res = await middleware(req);

        expect((res as NextResponse).headers.get('location')).toBe(
            'http://aotearoa.localhost:3000/'
        );
    });

    it('redirects to default subdomain if none present', async () => {
        const req = createMockRequest({
            host: 'mhfr.nz',
            path: '/support',
            proto: 'https',
        });
        const res = await middleware(req);

        expect((res as NextResponse).headers.get('location')).toBe(
            'https://aotearoa.mhfr.nz/support'
        );
    });
});
