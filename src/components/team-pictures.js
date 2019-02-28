import Button from '../components/button'
import { frontTeamPictures } from '../data.json'
import s from './team-pictures.sass'

export default ({ title, text }) => (
  <div class={s.team}>
    <div class={s.text}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
    <div class={s.teamPictures}>
      {frontTeamPictures.map((picture, i) => (
        <div class={s.block}>
          <img src={require(`../images/${picture}`)} />
        </div>
      ))}
      <div class={s.block}>
        <Button to='/team' label='See the whole team' fullsize arrow />
      </div>
    </div>
  </div>
)
