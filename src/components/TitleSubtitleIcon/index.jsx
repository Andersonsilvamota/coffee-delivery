import * as Styles from "./styles";

export function TitleSubtitleIcon({title, subtitle, icon}){
  return(
    <Styles.Title className='title'>
      {icon}
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </Styles.Title>
  )
}