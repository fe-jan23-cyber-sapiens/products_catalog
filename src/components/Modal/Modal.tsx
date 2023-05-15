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
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      // className={modalMode ? `${s.modal} ${s.active}` : s.modal}
      className={classNames(
        'modal',
        { 'modal, modal--active': modalMode },
      )}
      onClick={closeModal}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        // className={modalMode ? `${s.modalContent} ${s.active}` : s.modalContent}
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
