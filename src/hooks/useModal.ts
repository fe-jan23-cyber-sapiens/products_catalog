import { useState } from 'react';

export const useModal = (initialValue?: boolean) => {
  const [modal, setModal] = useState<boolean>(initialValue || false);

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

  return { modal, toggleModal };
};
