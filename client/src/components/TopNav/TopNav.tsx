import React, { FunctionComponent } from 'react';
import './TopNav.css';

interface OwnProps {}

type Props = OwnProps;

const TopNav: FunctionComponent<Props> = () => {

  return (
      <div>
          <ul className='top-nav'>
              <li>
                  <i className="material-icons">home</i>
                  </li>
              <li>
                  <i className="material-icons">info</i>
              </li>
              <li>
                  <i className="material-icons">settings</i>
              </li>
          </ul>
      </div>
  );
};

export default TopNav;
