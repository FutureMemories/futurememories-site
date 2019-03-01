import { Component } from 'preact'
import Base from '../_base'
import Moon from '../components/moon'
import Button from '../components/button'
import Icon from '../components/icon'
import TeamPictures from '../components/team-pictures'
import { company, careersWorkplaces, careersPositions } from '../data.json'
import s from './careers.sass'

export default class extends Component {
  render () {
    return (
      <Base>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.heroText} >
              <Moon position='bottomRight' size='large' background='blue' customClass={s.moon} />
              <h1>
                {`Remember what you did tomorrow?\nJoin our space now.`}
              </h1>
            </div>

            <div class={s.workplaces}>
              <div class={s.text}>
                <h1>The modern workplace</h1>
                <p>Our studio in downtown Gothenburg are the center of Future Memories. A modern and stimulating comfort zone where we craft digital products of tomorrow together as a team.</p>
              </div>
              <div class={s.content}>
                {careersWorkplaces.map(row => (
                  <div class={s.workplace}>
                    <div class={s.image}>
                      <img src={require(`../images/${row.image}`)} />
                    </div>
                    <div class={s.desc}>
                      <h3>{row.label}</h3>
                      <p>{row.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div class={s.positions}>
              <div class={s.text}>
                <h1>Available positions</h1>
                <p>Want to work in a beautiful office? Check. In a great city? Bingo. Don’t like working with assholes? We don’t hire them. Want to eat pancakes in bed? That’s your own business.</p>
              </div>
              <div class={s.content}>
                {careersPositions.map(row => (
                  <div class={s.position}>
                    <div class={s.image}>
                      <img src={require(`../images/${row.image}`)} />
                    </div>
                    <div class={s.desc}>
                      <div class={s.title}>
                        <Icon id={row.icon} />
                        <h3>{row.label}</h3>
                      </div>
                      <p>{row.text}</p>
                      <p class={s.tasks}>{row.tasks}</p>
                      <Button to={`mailto:${company.email}`} label='Apply' small center width='216' />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <TeamPictures
              title='Behind the surface'
              text='Behind every project there’s faces, faces with a broad range of skills. Make sure to check us out.'
            />

          </div>
        </div>
      </Base>
    )
  }
}
