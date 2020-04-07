/* global FormData fetch */
import s from './contact-block.sass'
import { Component } from 'preact'
import cx from 'classnames'

export default class extends Component {
  onSendMail = (ev) => {
    ev.preventDefault()

    const formData = new FormData(this.panelRef)
    const body = {}
    const headers = { 'Content-Type': 'application/json' }

    for (const [key, value] of formData.entries()) {
      body[key] = value
    }

    this.setState({ sending: true, sent: false, errorSending: false })

    fetch('/.netlify/functions/send-contact-email', {
      method: 'POST',
      body: JSON.stringify(body),
      headers
    })
      .then((res) => {
        if (!res.ok) throw new Error('Not ok!')
        this.setState({ sending: false, sent: true })
      })
      .catch(() => {
        this.setState({ sending: false, sent: false, errorSending: true })
      })
  }

  onClickOverlay = (ev) => {
    let clickedInsidePanel = false
    let node = ev.target
    while (node) {
      if (node === this.panelRef) {
        clickedInsidePanel = true
        break
      }
      node = node.parentNode
    }

    if (!clickedInsidePanel) {
      this.setState({ showOverlay: false })
    }
  }

  render ({ content, dark }, { showOverlay, sending, sent, errorSending }) {
    return (
      <section class={cx(s.block, dark && s.dark)}>
        <h3>{content.title}</h3>
        <div class={s.buttons}>
          <div class={cx(s.button, s.meeting)}>
            <a onClick={() => this.setState({ showOverlay: true })}>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M9 10V12H7V10H9ZM13 10V12H11V10H13ZM17 10V12H15V10H17ZM19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89 21 3 20.1 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H6V1H8V3H16V1H18V3H19ZM19 19V8H5V19H19ZM9 14V16H7V14H9ZM13 14V16H11V14H13ZM17 14V16H15V14H17Z' fill='currentColor' />
              </svg>
              {content.bookAMeeting}
            </a>
            <p>{content.addressLabel}</p>
          </div>
          <div class={cx(s.button, s.phone)}>
            <a href={`tel:${content.phoneNumber}`}>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.2652 15.5 20.5196 15.6054 20.7071 15.7929C20.8946 15.9804 21 16.2348 21 16.5V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21C15.4913 21 11.1673 19.2089 7.97918 16.0208C4.79107 12.8327 3 8.50868 3 4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H7.5C7.76522 3 8.01957 3.10536 8.20711 3.29289C8.39464 3.48043 8.5 3.73478 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z' fill='currentColor' />
              </svg>
              {content.phoneNumber}
            </a>
            <p>{content.phoneHours}</p>
          </div>
        </div>
        <div class={cx(s.overlay, !showOverlay && s.hidden)} onClick={this.onClickOverlay}>
          <form class={s.panel} onSubmit={this.onSendMail} ref={el => { this.panelRef = el }}>
            <button type='button' class={s.close} onClick={() => this.setState({ showOverlay: false })}>
              <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z' fill='black' />
              </svg>
            </button>
            <h3>{content.bookAMeetingHeader}</h3>
            {sending && <p class={s.message}>{content.sending}</p>}
            {sent && <p class={s.message}>{content.sent}</p>}
            {(!sending && !sent) && (
              <div class={s.fields}>
                <input name='name' type='text' placeholder={content.fields.name} required />
                <input name='email' type='email' placeholder={content.fields.email} required />
                <input name='telephone' type='tel' placeholder={content.fields.telephone} />
                <input name='time' type='text' placeholder={content.fields.suggestTime} />
                <textarea name='message' placeholder={content.fields.message} rows={5} required />
              </div>
            )}
            {(!sending && !sent) && (
              <button type='submit' class={s.submit}>
                {content.fields.send}
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M2 21L23 12L2 3V10L17 12L2 14V21Z' fill='white' />
                </svg>
              </button>
            )}
            {errorSending && <p class={s.error}>{content.errorSending}</p>}
          </form>
        </div>
      </section>
    )
  }
}