import { PropsWithChildren } from 'react';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="
      mx-auto
      max-w-3xl
      rounded-lg
      bg-white
      shadow
      grid
      h-96
      my-10
    ">
      {children}
    </div>
  );
};

export default Container;
