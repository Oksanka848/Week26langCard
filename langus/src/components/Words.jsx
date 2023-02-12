import words from './diction.json';

export default function Words() {
  return (
    <>{
      words.map((word) =>
        <Words key={word.id} en={word.en} ru={word.ru} tr={word.tr}>
        </Words>
      )
    }</>
  )
}
