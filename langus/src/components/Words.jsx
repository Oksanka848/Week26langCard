import words from './diction.json';

export default function Words() {
  return (
    <>
    {
      words.map((word) =>
        <Words key={word.id} en={word.en} ru={word.ru} tr={word.tr}>
          <div className={style.item}>{word}</div>
    <div className={style.item}>{translate}</div>
    <div className={style.item}>{transcription}</div>
    <div className={style.item}>{tag}</div>
    <div className={style.buttons}>
        <button className={style.btn} onClick={handleEditMode}>Редактировать</button>
        <button className={style.btn} >Удалить</button>
    </div>
        </Words>
      )
    }</>
  )
}
