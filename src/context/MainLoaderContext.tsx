import { createContext, ReactNode } from 'react';
import { useModal } from '../hooks/useModal';

type MainLoaderContextType = {
  modal: boolean,
};

export const MainLoaderContext = createContext<MainLoaderContextType>({
  modal: true,
});

type MainLoaderProviderProps = {
  children: ReactNode;
};

export const MainLoaderProvider = ({
  children,
}: MainLoaderProviderProps) => {
  const { modal, toggleModal } = useModal(true);

  setTimeout(() => {
    toggleModal();
  }, 2000);

  return (
    <MainLoaderContext.Provider value={{ modal }}>
      {children}
    </MainLoaderContext.Provider>
  );
};
