import React from 'react';
import Contacts from '../Contacts/Contacts';
import style from './style.module.scss';


export default function Header() {
  return (
    <>
    <div className={style.header}>
    <nav>
      <a href='/#'>Main</a>
      <a href='/#'>Words</a>
      <a href='/#'>Train</a>
      </nav>
      <Contacts />
      </div>
    </>
  )
}
