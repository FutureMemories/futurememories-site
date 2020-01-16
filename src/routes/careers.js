import { Component } from 'preact'
import Base from '../_base'
import Moon from '../components/moon'
import Button from '../components/button'
import TeamPictures from '../components/team-pictures'
import { company, careersWorkplaces, careersPositions } from '../data.json'
import s from './careers.sass'

export default class extends Component {
  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
    this.heroText.style = undefined

    const hash = window.location.hash.substr(1)
    const element = document.getElementById(hash)
    if (element) {
      const { offsetParent, offsetTop } = element
      window.scrollTo(0, this.positions.offsetTop + offsetParent.offsetTop + offsetTop - 50)
    }
  }

  onScroll = () => {
    if (window.pageYOffset < (this.heroText.offsetTop + this.heroText.offsetHeight)) {
      this.heroText.style.transform = `translateY(-${(window.pageYOffset / 5).toFixed(1)}px)`
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }

  render () {
    return (
      <Base title='Careers' route='/careers'>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.heroText}>
              <Moon
                position='bottomRight'
                size='large'
                background='blue'
                customClass={s.moon}
              />
              <h1 ref={(el) => { this.heroText = el }}>
                Remember what you did tomorrow?{'\n'}<span>Join</span> our space now
              </h1>
            </div>

            <div class={s.workplaces}>
              <div class={s.text}>
                <h1>The modern workspace</h1>
                <p>Our studio in downtown Gothenburg is the center of Future Memories. A modern and stimulating comfort zone where we craft digital products of tomorrow together as a team.</p>
              </div>
              <div class={s.content}>
                {careersWorkplaces.map((row, i) => (
                  <div key={'workplace_' + i} class={s.workplace}>
                    <div class={s.image}>
                      <img alt={`workplace: ${row.label}`} src={require(`../images/${row.image}`)} />
                    </div>
                    <div class={s.desc}>
                      <h3>{row.label}</h3>
                      <p>{row.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div class={s.positions} ref={e => { this.positions = e }}>
              <div class={s.text}>
                <h1>Available positions</h1>
                <p>Want to work in a beautiful office? Check. In a great city? Bingo. Don’t like working with assholes? We don’t hire them. Want to eat pancakes in bed? That’s your own business.</p>
              </div>
              <div class={s.content}>
                {careersPositions.map(row => (
                  <div key={'position_' + row.id} class={s.position}>
                    <div class={s.image}>
                      <img alt={`position: ${row.label}`} src={require(`../images/${row.image}`)} />
                    </div>
                    <div id={row.id} class={s.desc}>
                      <div class={s.title}>
                        <h3>{row.label}</h3>
                      </div>
                      <p>{row.text}</p>
                      <p class={s.tasks}>{row.tasks}</p>
                      <Button to={`mailto:${company.jobs}?subject=${row.subject}`} label='Apply' arrow transition='slide' small width='215' />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <TeamPictures
              title='Behind the scenes'
              text='May we introduce ourselves? A well-attuned group of professionals enjoying working together.'
            />

          </div>
        </div>
      </Base>
    )
  }
}
