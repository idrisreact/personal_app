import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  onClick?: () => void;
  primary?: boolean;
}
const Button: FC<IProps> = ({ children, onClick, primary }) => {
  return (
    <>
      {primary ? (
        <button className=" px-6 py-1 rounded-lg bg-blue-600 text-white hover:" onClick={onClick}>
          {children}
        </button>
      ) : (
        <button className=" px-6 py-1 rounded-lg bg-red-600 text-white hover:" onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
