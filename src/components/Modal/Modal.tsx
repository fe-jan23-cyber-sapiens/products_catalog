import { FC, ReactNode } from 'react';
import './Modal.scss';
import classNames from 'classnames';

interface ModalProps {
  children: ReactNode;
  modalMode: boolean;
  closeModal: () => void;
}

export const Modal: FC<ModalProps> = ({
  children,
  modalMode,
  closeModal,
}) => {
  return (
    <button
      type="button"
      className={classNames(
        'modal',
        { 'modal, modal--active': modalMode },
      )}
      onClick={closeModal}
    >
      <button
        type="button"
        className={classNames(
          'modalContent',
          { 'modalContent, modalContent--active': modalMode },
        )}
        onClick={event => event.stopPropagation()}
      >
        {children}
      </button>
    </button>
  );
};
