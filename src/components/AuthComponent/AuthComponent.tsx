/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import {
  Descope,
  useDescope,
  useSession,
  useUser,
} from '@descope/react-sdk';
import {
  FC, useEffect,
} from 'react';
import './AuthComponent.scss';

type Props = {
  setUserPhoto: (userPhoto: string | null) => void;
};

export const AuthComponent: FC<Props> = ({ setUserPhoto }) => {
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
              <p className="auth-greeting">
                {`Hello, ${user.name}`}
                <img
                  className="auth-user-photo"
                  src={user.picture}
                  alt="user_photo"
                />
              </p>
              <div className="auth-private">My Private Component</div>
              <button
                type="button"
                onClick={
                  logout as unknown as React.MouseEventHandler<HTMLButtonElement>
                }
                className="auth-logout-button"
              >
                Logout
              </button>
            </div>
          ) : (
            <Descope
              flowId="sign-up-or-in"
              onSuccess={(success) => success.detail.user}
              onError={(error) => error.toString()}
              theme="light"
            />
          )}
        </>
      )}
    </>
  );
};
