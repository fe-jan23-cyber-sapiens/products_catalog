import { FC, ReactNode } from 'react';
import './Modal.scss';
import classNames from 'classnames';

interface ModalProps {
  children: ReactNode,
  modalMode: boolean,
  closeModal: () => void,
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    children,
    modalMode,
    closeModal,
  } = props;

  return (
    <div
      className={classNames(
        'modal',
        { 'modal, modal--active': modalMode },
      )}
      onClick={closeModal}
    >
      <div
        className={classNames(
          'modalContent',
          { 'modalContent, modalContent--active': modalMode },
        )}
        onClick={event => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
