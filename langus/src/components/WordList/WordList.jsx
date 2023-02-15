import React from 'react';
import words from './diction.json';
import Words from '../Words/Words';
import style from './wordlist.module.scss';
import ButtonS from '../btn/ButtonS';

export default function WordList() {
 
  return (
    
    <div className={style.container}>
            <ul className={style.listcontainer}>
                <li className={style.item}> Слово</li>
                <li className={style.item}>Перевод</li>
                <li className={style.item}>Транскрипция</li>
                <li className={style.item}><ButtonS  text={["редактировать"]} /></li>
                <li className={style.item}><ButtonS text={["удалить"]} /></li>
            </ul >
            {
            words.map((word) =>
        <Words key={word.id} en={word.en} ru={word.ru} tr={word.tr}/> )}
     
           
        </div>
    
  )
}
