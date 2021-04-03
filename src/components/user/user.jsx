import React from 'react';
import PropTypes from 'prop-types';
import {user as userType} from '../../types';
import {mixClass} from '../../utils/common';

const User = ({user, className = ``}) => {
  const {avatarUrl, name, isPro} = user;

  const [block] = className.split(`__`);

  const getMixedClass = mixClass(block);

  return (
    <div className={`${ className } user`}>
      <div className={`${getMixedClass(`__avatar-wrapper`)} ${isPro ? getMixedClass(`__avatar-wrapper--pro`) : ``} user__avatar-wrapper`}>
        <img className={`${getMixedClass(`__avatar`)} user__avatar`} src={avatarUrl} width={74} height={74} alt="Host avatar" />
      </div>
      <span className={`${getMixedClass(`__user-name`)}`}>
        { name }
      </span>
      {isPro && <span className={`${getMixedClass(`__user-status`)}`}>Pro</span>}
    </div>
  );
};

User.propTypes = {
  user: userType,
  className: PropTypes.string,
};

export default User;
