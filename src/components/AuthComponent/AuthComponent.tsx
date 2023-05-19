import {
  Descope, useDescope, useSession, useUser,
} from '@descope/react-sdk';

import { FC, MouseEventHandler, useEffect } from 'react';
import './AuthComponent.scss';
import { Link } from 'react-router-dom';

interface AuthProps {
  setUserPhoto: (userPhoto: string | null) => void;
  closeModal: () => void,
}

export const AuthComponent: FC<AuthProps> = ({ setUserPhoto, closeModal }) => {
  const { isAuthenticated, isSessionLoading } = useSession();
  const { user, isUserLoading } = useUser();
  const { logout } = useDescope();

  useEffect(() => {
    setUserPhoto(user?.picture || null);
  }, [user?.picture]);

  return (
    <>
      {isSessionLoading || isUserLoading ? (
        <p className="auth-loading">Loading...</p>
      ) : (
        <>
          {isAuthenticated ? (
            <div className="auth">
              <img
                className="auth-user-photo"
                src={user.picture}
                alt="user_photo"
              />

              <p className="auth-greeting">
                {`Hello, ${user.name}`}
              </p>

              <Link
                to="/orders"
                className="auth__orders"
                onClick={closeModal}
              >
                <p>My orders</p>
              </Link>

              <button
                type="button"
                onClick={
                  logout as unknown as MouseEventHandler<HTMLButtonElement>
                }
                className="auth-logout-button"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="descope">
              <Descope
                flowId="sign-up-or-in"
                onSuccess={(success) => success.detail.user}
                onError={(error) => error.toString()}
                theme="light"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};
