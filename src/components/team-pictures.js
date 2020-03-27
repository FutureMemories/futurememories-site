import { frontTeamPictures } from '../english.json'
import Button from '../components/button'
import cx from 'classnames'
import s from './team-pictures.sass'

export default ({ title, text, alt, label, class: className }) => (
  <div class={cx(s.team, className)}>
    <div class={s.text}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
    <div class={s.teamPictures}>
      {frontTeamPictures.map((picture, i) => (
        <div key={'team_pic_' + i} class={cx(s.block, s.filter)}>
          <img alt={alt} src={require(`../images/${picture}`)} />
        </div>
      ))}
      <div class={s.block}>
        <Button to='/team' label={label} fullsize arrow transition='slideArrow' />
      </div>
    </div>
  </div>
)
