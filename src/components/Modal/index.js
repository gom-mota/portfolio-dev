import React from 'react';
import { Main } from './styles.js'

const SimpleModal = ({ id='modal', onClose=() => {}, children}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  }

  return (
    <Main>
      <div id={id} className="modal" onClick={handleOutsideClick}>
        <div className="container">
          <button className="close" onClick={onClose} />
          <div className="content">
            {children}
          </div>
        </div>
      </div>
    </Main>

  );
}

const AlertModal = ({ id='modal', onClose=() => {}, children}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  }

  return (
    <Main>
      <div id={id} className="modal" onClick={handleOutsideClick}>
        <div className="container">
          <button className="close" onClick={onClose} />
          <div className="content">{children}</div>
        </div>
      </div>
    </Main>

  );
}

export {SimpleModal, AlertModal};