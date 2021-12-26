import React, { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Wrapper from '@src/components/Wrapper/Wrapper';
import Button from '@src/components/UI/Button/Button';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Wrapper>
        <header className="flex  justify-between items-center pt-5 ">
          <div>
            <h2 className="font-black text-2xl">Idris Codes</h2>
          </div>
          <ul className="hidden sm:flex">
            <li className={`${router.pathname === '/' && 'text-blue-600'}   mx-1`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`${router.pathname === '/teaching' && 'text-blue-600'}   mx-1`}>
              <Link href="/teaching">Teaching</Link>
            </li>
            <li className={`${router.pathname === '/courses' && 'text-blue-600'}   mx-1`}>
              <Link href="/courses">Courses</Link>
            </li>
            <li className={`${router.pathname === '/resources' && 'text-blue-600'}   mx-1`}>
              <Link href="/resources">Resources</Link>
            </li>
          </ul>

          <div>
            <Button primary onClick={() => alert('set a sign up please')}>
              Sign up
            </Button>
          </div>
        </header>
      </Wrapper>
      {children}
    </>
  );
};

export default Layout;
