/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import {
  Descope,
  useDescope,
  useSession,
  useUser,
} from '@descope/react-sdk';
import {
  FC, useContext, useEffect,
} from 'react';
import './AuthComponent.scss';

import { ThemeContext } from '../../context/ThemeContext';

type Props = {
  setUserPhoto: (userPhoto: string | null) => void;
};

export const AuthComponent: FC<Props> = ({ setUserPhoto }) => {
  const { isAuthenticated, isSessionLoading } = useSession();
  const { user, isUserLoading } = useUser();
  const { logout } = useDescope();

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setUserPhoto(user?.picture || null);
  }, [user?.picture]);

  // eslint-disable-next-line no-console
  console.log(theme);

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

              <button
                type="button"
                onClick={logout as unknown as React.MouseEventHandler<HTMLButtonElement>}
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
