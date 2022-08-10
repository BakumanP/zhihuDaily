import './dailyCard.less'
export interface DailyCardProps {
  title: string,
  imgPath: string
}
function dailyCard(props: DailyCardProps){
  return (
    <div className="daily-card">
      <div className="daily-card-image">
        <img src={props.imgPath} alt={props.title} width={320} />
      </div>
      <div className="daily-card-title" >{props.title}</div>
    </div>
  )
}
export default dailyCard