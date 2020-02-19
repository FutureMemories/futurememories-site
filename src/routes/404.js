import Base from '../_base'
import Button from '../components/button'
import Moon from '../components/moon'
import s from './404.sass'

export default ({ data }) => (
  <Base removeFooter data={data}>
    <div class={s.view}>
      <div class={s.notFound}>
        <img src={require('../images/broken-document.svg')} />
        <h2>404_page_not_found.jpg</h2>
        <Button to='/' label='Go back' transition='slide' arrow reverse small />
      </div>
      <Moon size='big' position='topLeft' background='blue' customClass={s.moon} />
    </div>
  </Base>
)
