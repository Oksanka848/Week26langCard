import React from 'react';
import MainCard from './MainCard';
import Cards from './Cards';
import StudyCards from './StudyCards';
import Progress from './Progress';

export default function Main() {
  return (
    <>
    <section><MainCard/></section>
    <section><Cards/></section>
    <section><StudyCards/></section>
    <section><Progress/></section>
          </>
  )
}

