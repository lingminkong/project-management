import { comparePasswords, createJWT, hashPassword } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

const signIn = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    const user = await db.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res.status(401);
      res.json('Invalid login');
      res.end;
    }

    const passwordMatched = await comparePasswords(
      req.body.password,
      user!.password
    );

    if (!passwordMatched) {
      res.status(401);
      res.json('Invalid login');
      res.end;
    }

    res.status(200);
    res.end();
  } else {
    res.status(402); // why returns 402 here?
    res.end();
  }
};

export default signIn;
