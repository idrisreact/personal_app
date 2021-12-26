import { FC, ReactNode } from 'react';

interface IProps {
  fontSize?: FontSize;
  children: ReactNode;
  opacity?: boolean;
  color?: string;
}

type FontSize = 'text-sm' | 'text-base' | 'text-lg' | 'text-7xl';

const Text: FC<IProps> = ({ fontSize, children, opacity, color }) => {
  const size: FontSize = fontSize;
  return <h1 className={`${size} ${opacity && 'opacity-50'} ${color} `}>{children}</h1>;
};

export default Text;
