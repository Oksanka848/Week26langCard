import React from 'react';
import MainCard from '../MainCard';
import Cards from '../Cards';
import StudyCards from '../StudyCards';
import Progress from '../Progress';
import style from './style.module.scss';

export default function Main() {
  return (
    <>
    <div className={style.main}>
    <section><MainCard/></section>
    <section><Cards/></section>
    <section><StudyCards/></section>
    <section><Progress/></section>
    </div>
          </>
  )
}

