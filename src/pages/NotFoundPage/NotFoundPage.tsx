// eslint-disable-next-line max-len
import { CursorAnimation } from '../../components/ParticialAnimation/ParticialAnimation';
import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <div className="notFound-wrapper">
      <CursorAnimation />
      <h2 className="title">Page not found</h2>
      <div className="unicorn-wrap">
        <div className="unicorn">
          <div className="unicorn-body" />
          <div className="unicorn-butt">
            <div className="unicorn-tail" />
          </div>
          <div className="unicorn-feet-1 unicorn-feet" />
          <div className="unicorn-feet-2 unicorn-feet" />
          <div className="unicorn-upper">
            <div className="unicorn-neck-1">
              <div className="unicorn-hair" />
            </div>
            <div className="unicorn-neck-2" />
            <div className="unicorn-head-1">
              <div className="unicorn-ear" />
              <div className="unicorn-horn" />
            </div>
            <div className="unicorn-head-2">
              <div className="unicorn-eye" />
            </div>
          </div>
          <div className="unicorn-comfeti" />
          <div className="grass-group">
            <div className="grass-1 grass" />
            <div className="grass-2 grass" />
            <div className="grass-3 grass" />
            <div className="grass-4 grass" />
            <div className="grass-5 grass" />
          </div>
        </div>
      </div>
    </div>
  );
};
