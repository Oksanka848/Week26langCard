import React from 'react';
import MainCard from '../MainCard';
import Cards from '../Cards';
import StudyCards from '../StudyCards';
import Progress from '../Progress';
import style from './style.module.scss';

export default function Main() {
  return (
    <>
    <div className={`${style.main} ${style.dgrid}`}>
    
    <section className={`${style.mainconteiner}`}>
    <div className={`${style.groupinfo} ${style.card2}`}><MainCard/></div></section>
    <section><Cards/></section>
    <section><StudyCards/></section>
    <section><Progress/></section>
    </div>
          </>
  )
}

