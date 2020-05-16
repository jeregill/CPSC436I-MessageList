import React, { FunctionComponent } from 'react';
import './TopNav.css';

interface OwnProps {}

type Props = OwnProps;

const TopNav: FunctionComponent<Props> = () => {

  return (
      <div>
          <ul className='top-nav'>
              <li>
                  <a><i className="material-icons">home</i></a>
                  </li>
              <li>
                  <a><i className="material-icons">info</i></a>
              </li>
              <li>
                  <a><i className="material-icons">settings</i></a>
              </li>
          </ul>
      </div>
  );
};

export default TopNav;
