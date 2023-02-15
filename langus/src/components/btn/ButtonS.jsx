import style from './button.module.scss';

export default function ButtonS(props) {
  return (
    <>{
      <div className={style.buttonS}><span className={style.glowingtxt}><span className={style.faultyletter}>{props.text}</span></span></div>

    }</>
  )
}