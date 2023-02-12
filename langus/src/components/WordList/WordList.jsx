import React from 'react'
import style from './wordlist.module.scss';
import Words from '../Words';


export default function WordList() {
  return (
    <div className={style.container}>
    <ul className={style.list_container}>
        <li className={style.en}> Слово</li>
        <li className={style.ru}>Перевод</li>
        <li className={style.tr}>Транскрипция</li>
        
    </ul >
<Words/>
</div>
)
}
