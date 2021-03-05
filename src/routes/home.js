import { Component } from 'preact'
import cx from 'classnames'
import Base from '../_base'
import ProjectsBlock from '../components/projects-block'
import Button from '../components/button'
import Moon from '../components/moon'
import TeamPictures from '../components/team-pictures'
import MarkupCustomElement from '../components/markup-custom-element'
import ContactBlock from '../components/contact-block'
import FilterBlock from '../components/filter-block'
import getLanguageLink from '../utils/getLanguageLink'
import Icon from '../components/icon'
import s from './home.sass'

export default class extends Component {
  state = { preActivePillar: '', activePillar: 'develop' }

  componentDidMount () {
    this.heroText.base.style = undefined
    this.homePlanetWorkS.base.style = undefined

    // Move planet light if firstView is true
    if (this.props.firstView) {
      let x = 0
      this._planetShine = setInterval(() => {
        x++
        if (x > 16) { clearInterval(this._planetShine) }
        this.setState({ lightLeft: 3 * x, lightTop: 3 * x })
      }, 145)
    }

    // randomize glitch effect, add extra empty block for pauses
    // const foundationPillars = ['strategy', 'design', 'develop']
    // this.randomizer = setInterval(() => {
    //   const randomPillar = foundationPillars[Math.floor(Math.random() * foundationPillars.length)]
    //   this.setState({
    //     // preActivePillar: this.state.activePillar,
    //     activePillar: randomPillar
    //   })

    //   // Remove old pillar after x milliseconds
    //   // setTimeout(() => {
    //   //   this.setState({ preActivePillar: [] })
    //   // }, Math.floor(Math.random() * 1000))
    // }, Math.floor(Math.random() * 1000) + 1000)

    window.addEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    this.scrollPoint = window.pageYOffset + (window.innerHeight / 1.4)

    // if (window.pageYOffset < (this.heroText.base.offsetTop + this.heroText.base.offsetHeight)) {
    //   this.heroText.base.style.transform = `translateY(-${(window.pageYOffset / 5).toFixed(1)}px)`
    // }

    if (this.props.data.content.promoteBox.enabled) {
      this.setState({ showPromote: window.pageYOffset > 500 })
    }

    // Parallax effect on 'Our work' block
    const planetWorkScroll = (this.scrollPoint - (this.homeWorkBlock.offsetTop * 1.3))
    if (planetWorkScroll > 0 && window.pageYOffset < (this.homeWorkBlock.offsetTop + this.homeWorkBlock.offsetHeight)) {
      this.homePlanetWorkS.base.style.transform = `scale(0.75) translateY(${(planetWorkScroll / 27).toFixed(1)}px)`
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
    window.clearInterval(this._planetShine)
    window.clearInterval(this._randomizer)
  }

  render (
    { data, firstView, categoryChange, root, caseCategory },
    { lightLeft, lightTop, activePillar, preActivePillar }
  ) {
    return (
      <Base firstView={firstView} categoryChange={categoryChange} route={'/' + (caseCategory || '')} data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.welcome}>
              <Moon
                position={firstView ? 'middleRight' : 'topRight'}
                size='medium'
                background='blue'
                customClass={cx(s.moon, firstView && s.firstView)}
                style={{ left: lightLeft, top: lightTop }}
              />
              <MarkupCustomElement
                class={cx(firstView && s.firstView, categoryChange && s.categoryChange)}
                ref={el => { this.heroText = el }}
                element='h1'
                markup={data.content.home.hero}
                trim={false}
              />
            </div>

            <div class={cx(s.work, firstView && s.firstView)} ref={(el) => { this.homeWorkBlock = el }}>
              <Moon
                size='small'
                position='bottomLeft'
                background='red'
                customClass={s.moon}
                ref={(el) => { this.homePlanetWorkS = el }}
              />
              <FilterBlock
                items={Object.keys(data.caseCategories).map(key => ({
                  href: key === 'featured' ? getLanguageLink('') : getLanguageLink('/' + key),
                  name: data.caseCategories[key].name
                }))}
                className={s.filterBlock}
                page='home'
              />
              <ProjectsBlock
                {...data.projectsBlock}
                baseKey={caseCategory}
                animateInBlocks
                projects={data.caseCategories[caseCategory || 'featured'].cases}
                page='front'
                allCases={data.allCases}
                firstView={firstView}
              />
              {caseCategory !== 'all-projects' && <Button customClass={s.button} to='/work' label={data.content.home.seeMoreProjects} arrow transition='slide' />}
            </div>

            <TeamPictures {...data.teamPictures} />
          </div>

          <ContactBlock content={data.content.contactBlock} dark />
        </div>
        {data.content.promoteBox.enabled && (
          <div class={cx(s.promoteBox, this.state.showPromote && !this.state.hidePromote && s.show)}>
            <button class={s.close} onClick={() => this.setState({ hidePromote: true })}>
              <Icon id='close' />
            </button>
            <h2>{data.content.promoteBox.title}</h2>
            <p class={s.text}>{data.content.promoteBox.text}</p>
            <Button
              arrow
              small
              customClass={s.button}
              to={data.content.promoteBox.buttonTo}
              label={data.content.promoteBox.buttonLabel}
              transition='slide'
              width='215'
            />
          </div>
        )}
      </Base>
    )
  }
}
