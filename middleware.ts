import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

// had to make this again here as the other one is in a file with bcrypt which is not supported on edge runtimes
const verifyJWT = async (jwt: string) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload;
};

const isPublicPath = (pathname: string) => {
  const PUBLIC_FILE = /\.(.*)$/;

  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/signin') ||
    pathname.startsWith('/register') ||
    PUBLIC_FILE.test(pathname)
  );
};

const middleware = async (req: NextRequest, res: NextResponse) => {
  const { pathname } = req.nextUrl;

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  const jwt = req.cookies.get(process.env.COOKIE_NAME!);
  if (!jwt) {
    req.nextUrl.pathname = '/signin';
    return NextResponse.redirect(req.nextUrl);
  }

  try {
    await verifyJWT(jwt.value);
    return NextResponse.next();
  } catch (e) {
    console.error(e);
    req.nextUrl.pathname = '/signin';
    return NextResponse.redirect(req.nextUrl);
  }
};

export default middleware;
