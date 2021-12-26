import Button from '@src/components/UI/Button/Button';
import Text from '@src/components/UI/Typography/Heading';
import Wrapper from '@src/components/Wrapper/Wrapper';
import { FC } from 'react';
import styles from '../styles/Home.module.css';

const Home: FC = () => {
  return (
    <Wrapper>
      <div className=" max-w-2xl mt-16">
        <Text fontSize="text-base">Welcome to Idris codes</Text>
        <Text fontSize="text-7xl" color="text-blue-600">
          Go From Zero to Expert in a matter of months
        </Text>
        <div className="my-5">
          <Text fontSize="text-sm" opacity>
            You will learn the most in date technologies, that are used at the leading tech companies.
          </Text>
        </div>
        <Button primary>Join now</Button>
      </div>
    </Wrapper>
  );
};

export default Home;
