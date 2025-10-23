import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Check from '../components/check'
import Line from '../components/line'
import IconContainer from '../components/icon-container'
import './home.css'
import pt from '../locales/pt.json';
const t = (key) => {
  const valor = pt[key];
  if (!valor) return key;
  // Remove tags html
  return valor.replace(/<[^>]+>/g, '').replace(/\n/g, '').trim();
};

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <section className="home-hero">
        <header className="home-header10">
          <header data-thq="thq-navbar" className="home-navbar">
            <img alt="image" src="/logo.svg" className="home-branding1" />
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <div className="home-hamburger">
                <img alt="image" src="/hamburger.svg" className="home-icon10" />
              </div>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-container11">
                  <img alt="image" src="/logo.svg" className="home-image10" />
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon11">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <span className="home-text10">
                    <span>{t('text_QbMYw5')}</span>
                  </span>
                  <span className="home-text11">
                    <span>{t('text_oVkJKh')}</span>
                  </span>
                  <span className="home-text12">
                    <span>{t('text_UjLxJU')}</span>
                  </span>
                  <span className="home-text13">
                    <span>{t('text_tXzjrm')}</span>
                  </span>
                  <span className="home-text14">
                    <span>{t('text_6yGwrk')}</span>
                  </span>
                </nav>
                <div className="home-container12">
                  <button className="home-login button">
                    <span>{t('Login_PH0SY3')}</span>
                  </button>
                  <button className="button">
                    <span>{t('Register_enrz_1')}</span>
                  </button>
                </div>
              </div>
              <div className="home-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon13"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon15"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon17"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </header>
        <video
          src="/togethr-template.mp4"
          loop
          muted
          poster="/hero-bg.png"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <div className="home-hero-content">
          <div className="home-header-container1">
            <div className="home-header11">
              <h1 className="home-heading10">
                <span>{t('Heading_KgueuC')}</span>
              </h1>
            </div>
            <p className="home-caption10">
              <span>{t('Caption_fIOdMl')}</span>
            </p>
          </div>
          <button className="button home-button1">
            <span>
              <span>{t('text_OcfgYQ')}</span>
            </span>
          </button>
        </div>
      </section>
      <section className="home-note">
        <h2 className="home-caption11">
          <span>{t('Caption_xnN8ti')}</span>
        </h2>
      </section>
      <section className="home-statistics">
        <div className="home-content10">
          <div className="home-stat1">
            <h3 className="home-header12">
              <span>{t('Header_jSVLU1')}</span>
            </h3>
            <span className="home-caption12">
              <span>{t('Caption_NaViGl')}</span>
            </span>
          </div>
          <div className="home-stat2">
            <h3 className="home-header13">
              <span>{t('Header_r1vhsU')}</span>
            </h3>
            <span className="home-caption13">
              <span>{t('Caption_2ExBh0')}</span>
            </span>
          </div>
          <div className="home-stat3">
            <h3 className="home-header14">
              <span>{t('Header_alSFnJ')}</span>
            </h3>
            <span className="home-caption14">
              <span>{t('Caption_t4KbHk')}</span>
            </span>
          </div>
        </div>
      </section>
      <section className="home-slider1">
        <div className="home-header15">
          <h2 className="home-heading11">
            <span>{t('Heading_bQqBul')}</span>
          </h2>
        </div>
        <div className="home-selector">
          <p className="home-caption15">
            <span>{t('Caption_2fii23')}</span>
          </p>
          <div className="home-slide-titles">
            <div className="slide-title">
              <span>
                <span>{t('text_s78TDV')}</span>
              </span>
            </div>
            <div className="slide-title slide-title-active">
              <span>
                <span>{t('text_Kb_nTC')}</span>
              </span>
            </div>
            <div className="slide-title">
              <span>
                <span>{t('text_SdKzI2')}</span>
              </span>
            </div>
            <div className="slide-title">
              <span>
                <span>{t('text__6UwIz')}</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-slides">
        <div className="home-slider2 slider blaze-slider">
          <div className="home-slider-container blaze-container">
            <div className="home-slider-track-container blaze-track-container">
              <div className="home-slider-track blaze-track">
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image11"
                  />
                  <div className="home-content11">
                    <div className="home-header16">
                      <h3 className="home-heading12">
                        <span>{t('Heading_i75CBF')}</span>
                      </h3>
                      <p className="home-caption16">
                        <span>{t('Caption_EeyoUA')}</span>
                      </p>
                    </div>
                    <div className="home-more1">
                      <span className="home-caption17">
                        <span>{t('Caption_K4PieA')}</span>
                      </span>
                      <svg viewBox="0 0 1024 1024" className="home-icon19">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image12"
                  />
                  <div className="home-content12">
                    <div className="home-header17">
                      <h3 className="home-heading13">
                        <span>{t('Heading_ke9fBT')}</span>
                      </h3>
                      <p className="home-caption18">
                        <span>{t('Caption_D62S1d')}</span>
                      </p>
                    </div>
                    <div className="home-more2">
                      <span className="home-caption19">
                        <span>{t('Caption_fG5hWV')}</span>
                      </span>
                      <svg viewBox="0 0 1024 1024" className="home-icon21">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image13"
                  />
                  <div className="home-content13">
                    <div className="home-header18">
                      <h3 className="home-heading14">
                        <span>{t('Heading_u0YjEy')}</span>
                      </h3>
                      <p className="home-caption20">
                        <span>{t('Caption_CsG81C')}</span>
                      </p>
                    </div>
                    <div className="home-more3">
                      <span className="home-caption21">
                        <span>{t('Caption_i9GzpI')}</span>
                      </span>
                      <svg viewBox="0 0 1024 1024" className="home-icon23">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image14"
                  />
                  <div className="home-content14">
                    <div className="home-header19">
                      <h3 className="home-heading15">
                        <span>{t('Heading_UE31oX')}</span>
                      </h3>
                      <p className="home-caption22">
                        <span>{t('Caption_gbutj0')}</span>
                      </p>
                    </div>
                    <div className="home-more4">
                      <span className="home-caption23">
                        <span>{t('Caption_Q4HCMi')}</span>
                      </span>
                      <svg viewBox="0 0 1024 1024" className="home-icon25">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-controls1">
              <button
                data-role="previous-banner-button"
                className="home-previous1 blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon27">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-next1 blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon29">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container14">
            <Script
              html={`<script defer>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <section className="home-get-started">
        <div className="home-header-container2">
          <div className="home-header20">
            <h2 className="home-heading16">
              <span>{t('Heading_7_INyC')}</span>
            </h2>
            <p className="home-caption24">
              <span>{t('Caption_CnvoOL')}</span>
            </p>
          </div>
          <div className="home-button2">
            <button className="button">
              <span>
                <span>{t('text_24oOSj')}</span>
              </span>
            </button>
          </div>
        </div>
        <img alt="image" src="/getstarted-800w.png" className="home-image15" />
      </section>
      <section className="home-objectives">
        <div className="home-content15">
          <span className="home-text21">
            <span>{t('text_NitdTs')}</span>
          </span>
          <div className="home-objectives-list">
            <div className="objective">
              <h3 className="home-text22">
                <span>{t('text_aypa8n')}</span>
              </h3>
              <p className="home-text23">
                <span>{t('text_vn5K_o')}</span>
              </p>
            </div>
            <div className="objective home-objective2">
              <h3 className="home-text24">
                <span>{t('text_DoHLeW')}</span>
              </h3>
              <p className="home-text25">
                <span>{t('text_qX_zcw')}</span>
              </p>
            </div>
            <div className="objective home-objective3">
              <h3 className="home-text26">
                <span>{t('text_JaVxqM')}</span>
              </h3>
              <p className="home-text27">
                <span>{t('text_8KYQDt')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-growth">
        <div className="home-content16">
          <div className="home-header21">
            <div className="home-header22">
              <h2 className="home-heading17">
                <span>{t('Heading_J7CoBM')}</span>
              </h2>
            </div>
            <p className="home-caption25">
              <span>{t('Caption_3Kv6g4')}</span>
            </p>
            <p className="home-caption26">
              <span>{t('Caption_bcWFMu')}</span>
            </p>
          </div>
          <div className="home-testimonial1">
            <div className="home-content17">
              <span className="home-text28">
                <span>{t('text_v-MgFF')}</span>
              </span>
              <p className="home-text29">
                <span>{t('text_zV9mL1')}</span>
              </p>
            </div>
            <div className="home-information1">
              <div className="home-author1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjcxMDU2MzMz&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-icon31"
                />
                <span className="home-name1">
                  <span>{t('Name_pFcS96')}</span>
                </span>
              </div>
              <img alt="image" src="/logoipsum.svg" className="home-from1" />
            </div>
          </div>
        </div>
        <div className="home-images1">
          <div className="home-square1"></div>
          <img alt="image" src="/growth-1400w.png" className="home-image16" />
        </div>
      </section>
      <section className="home-experience">
        <div className="home-images2">
          <div className="home-square2"></div>
          <img
            alt="image"
            src="/experience-1400w.png"
            className="home-image17"
          />
        </div>
        <div className="home-content18">
          <div className="home-header23">
            <div className="home-header-container3">
              <div className="home-header24">
                <h2 className="home-heading18">
                  <span>{t('Heading_TjWPe4')}</span>
                </h2>
              </div>
              <p className="home-caption27">
                <span>{t('Caption_Tfllz3')}</span>
              </p>
            </div>
            <div className="home-checkmarks">
              <div className="home-check1">
                <div className="home-mark1">
                  <svg viewBox="0 0 1024 1024" className="home-icon32">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text30">
                  <span>{t('text_e4bllu')}</span>
                </span>
              </div>
              <div className="home-check2">
                <div className="home-mark2">
                  <svg viewBox="0 0 1024 1024" className="home-icon34">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text31">
                  <span>{t('text_lEDLEQ')}</span>
                </span>
              </div>
              <div className="home-check3">
                <div className="home-mark3">
                  <svg viewBox="0 0 1024 1024" className="home-icon36">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text32">
                  <span>{t('text_6dL6pH')}</span>
                </span>
              </div>
              <div className="home-check4">
                <div className="home-mark4">
                  <svg viewBox="0 0 1024 1024" className="home-icon38">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text33">
                  <span>{t('text_G61tj5')}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="home-testimonial2">
            <div className="home-content19">
              <span className="home-text34">
                <span>{t('text_YkShgJ')}</span>
              </span>
              <p className="home-text35">
                <span>{t('text_tVQA8r')}</span>
              </p>
            </div>
            <div className="home-information2">
              <div className="home-author2">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY3MTA1NjMzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-icon40"
                />
                <span className="home-name2">
                  <span>{t('Name_N1GEHR')}</span>
                </span>
              </div>
              <img alt="image" src="/logoipsum-2.svg" className="home-from2" />
            </div>
          </div>
        </div>
      </section>
      <section className="home-create">
        <div className="home-content20">
          <div className="home-header25">
            <h2 className="home-heading19">
              <span>{t('Heading_C__pCV')}</span>
            </h2>
          </div>
          <button className="home-button4 button">
            <span>
              <span>{t('text_v5ZkMv')}</span>
            </span>
          </button>
        </div>
      </section>
      <section className="home-comparision">
        <div className="home-header-container4">
          <div className="home-header26">
            <h2 className="home-heading20">
              <span>{t('Heading_EeLhdX')}</span>
            </h2>
          </div>
          <p className="home-caption28">
            <span>{t('Caption_LFU7ip')}</span>
          </p>
        </div>
        <div className="home-table">
          <div className="home-row10">
            <div className="home-headers1">
              <span className="home-text37">
                <span>{t('text_av3eSe')}</span>
              </span>
            </div>
            <div className="home-plans1">
              <div className="home-row11">
                <span className="home-text38">
                  <span>{t('text_cxz_i1')}</span>
                </span>
                <span className="home-text39">
                  <span>{t('text_iwRxg4')}</span>
                </span>
                <span className="home-text40">
                  <span>{t('text_uj1wCg')}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="home-row12">
            <div className="home-headers2">
              <span className="home-text41">
                <span>{t('text_TJqULp')}</span>
              </span>
            </div>
            <div className="home-plans2">
              <div className="home-row13">
                <div className="value">
                  <Check locale={props?.locale ?? ''}></Check>
                </div>
                <div className="value">
                  <Check locale={props?.locale ?? ''}></Check>
                </div>
                <div className="value">
                  <Check locale={props?.locale ?? ''}></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row14">
            <div className="home-headers3">
              <span className="home-text42">
                <span>{t('text_3JC75e')}</span>
              </span>
            </div>
            <div className="home-plans3">
              <div className="home-row15">
                <div className="value">
                  <Check locale={props?.locale ?? ''}></Check>
                </div>
                <div className="value">
                  <Check locale={props?.locale ?? ''}></Check>
                </div>
                <div className="value">
                  <Line locale={props?.locale ?? ''}></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row16">
            <div className="home-headers4">
              <span className="home-text43">
                <span>{t('text_DM1w72')}</span>
              </span>
            </div>
            <div className="home-plans4">
              <div className="home-row17">
                <div className="value">
                  <span className="home-text44">
                    <span>{t('text_z7XtHr')}</span>
                  </span>
                </div>
                <div className="value">
                  <Line locale={props?.locale ?? ''}></Line>
                </div>
                <div className="value">
                  <Line locale={props?.locale ?? ''}></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row18">
            <div className="home-headers5">
              <span className="home-text45">
                <span>{t('text_Qjl7a_')}</span>
              </span>
            </div>
            <div className="home-plans5">
              <div className="home-row19">
                <div className="value">
                  <span className="home-text46">
                    <span>{t('text_O9obIC')}</span>
                  </span>
                </div>
                <div className="value">
                  <span className="home-text47">
                    <span>{t('text_3-laon')}</span>
                  </span>
                </div>
                <div className="value">
                  <Line locale={props?.locale ?? ''}></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row20">
            <div className="home-headers6">
              <span className="home-text48">
                <span>{t('text_aZpl8e')}</span>
              </span>
            </div>
            <div className="home-plans6">
              <div className="home-row21">
                <div className="value">
                  <Check locale={props?.locale ?? ''}></Check>
                </div>
                <div className="value">
                  <Line locale={props?.locale ?? ''}></Line>
                </div>
                <div className="value">
                  <span className="home-text49">
                    <span>{t('text_fqdvE_')}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row22">
            <div className="home-headers7">
              <span className="home-text50">
                <span>{t('text_Dk21_z')}</span>
              </span>
            </div>
            <div className="home-plans7">
              <div className="home-row23">
                <div className="value">
                  <Check locale={props?.locale ?? ''}></Check>
                </div>
                <div className="value">
                  <Check locale={props?.locale ?? ''}></Check>
                </div>
                <div className="value">
                  <Check locale={props?.locale ?? ''}></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row24">
            <div className="home-headers8">
              <span className="home-text51">
                <span>{t('text_jEsSXD')}</span>
              </span>
            </div>
            <div className="home-plans8">
              <div className="home-row25">
                <div className="value">
                  <Check locale={props?.locale ?? ''}></Check>
                </div>
                <div className="value">
                  <span className="home-text52">
                    <span>{t('text_RkpSF0')}</span>
                  </span>
                </div>
                <div className="value">
                  <Line locale={props?.locale ?? ''}></Line>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-data">
        <div className="home-header-container5">
          <div className="home-header27">
            <div className="home-row26">
              <h2 className="home-heading21">
                <span>{t('Heading_Y8S1LE')}</span>
              </h2>
            </div>
          </div>
          <p className="home-caption29">
            <span>{t('Caption_Vbob4W')}</span>
          </p>
        </div>
        <div className="home-content21">
          <div className="home-image18">
            <img alt="image" src="/data-1400w.png" className="home-image19" />
          </div>
          <div className="home-accordion">
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header28">
                  <span>{t('Header_i791nu')}</span>
                </h3>
                <p data-role="accordion-content" className="accordion-content">
                  <span>{t('Content_bx5O2m')}</span>
                </p>
              </div>
              <IconContainer
                rootClassName="icon-containerroot-class-name"
                locale={props?.locale ?? ''}
              ></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header29">
                  <span>{t('Header_iMS7zu')}</span>
                </h3>
                <p data-role="accordion-content" className="accordion-content">
                  <span>{t('Content_wr67HK')}</span>
                </p>
              </div>
              <IconContainer
                rootClassName="icon-containerroot-class-name1"
                locale={props?.locale ?? ''}
              ></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header30">
                  <span>{t('Header_dk9Hum')}</span>
                </h3>
                <p data-role="accordion-content" className="accordion-content">
                  <span>{t('Content_4niJgn')}</span>
                </p>
              </div>
              <IconContainer
                rootClassName="icon-containerroot-class-name2"
                locale={props?.locale ?? ''}
              ></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header31">
                  <span>{t('Header_wtMW-X')}</span>
                </h3>
                <p data-role="accordion-content" className="accordion-content">
                  <span>{t('Content_6sryZu')}</span>
                </p>
              </div>
              <IconContainer
                rootClassName="icon-containerroot-class-name3"
                locale={props?.locale ?? ''}
              ></IconContainer>
            </div>
            <div>
              <div className="home-container16">
                <Script
                  html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-customer">
        <div className="home-header32">
          <h2 className="home-heading22">
            <span>{t('Heading_FPbN9Z')}</span>
          </h2>
        </div>
        <div className="home-quotes">
          <div className="home-quote1">
            <p className="home-quote2">
              <span>{t('Quote_E6Ds5X')}</span>
            </p>
            <div className="home-author3">
              <span className="home-name3">
                <span>{t('Name_M7_nPj')}</span>
              </span>
              <span className="home-location1">
                <span>{t('Location_pfZv0S')}</span>
              </span>
            </div>
          </div>
          <div className="home-quote3">
            <p className="home-quote4">
              <span>{t('Quote_eCLGK5')}</span>
            </p>
            <div className="home-author4">
              <span className="home-name4">
                <span>{t('Name_WCS9xs')}</span>
              </span>
              <span className="home-location2">
                <span>{t('Location_xsbXVJ')}</span>
              </span>
            </div>
          </div>
          <div className="home-quote5">
            <p className="home-quote6">
              <span>{t('Quote_L2e9xN')}</span>
            </p>
            <div className="home-author5">
              <span className="home-name5">
                <span>{t('Name_fKRthT')}</span>
              </span>
              <span className="home-location3">
                <span>{t('Location_aNTjW4')}</span>
              </span>
            </div>
          </div>
          <div className="home-quote7">
            <p className="home-quote8">
              <span>{t('Quote_DlF2XG')}</span>
            </p>
            <div className="home-author6">
              <span className="home-name6">
                <span>{t('Name_c6HEmX')}</span>
              </span>
              <span className="home-location4">
                <span>{t('Location_hUd_oz')}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="home-controls2">
          <button className="home-previous2 button">
            <svg viewBox="0 0 1024 1024" className="home-icon41">
              <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
            </svg>
          </button>
          <button className="home-next2 button">
            <svg viewBox="0 0 1024 1024" className="home-icon43">
              <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </button>
          <button className="button home-button5">
            <span>
              <span>{t('text_rCtgMc')}</span>
            </span>
          </button>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-header33">
          <h2 className="home-heading23">
            <span>{t('Heading_2Q_w29')}</span>
          </h2>
        </div>
        <div className="home-content30">
          <div className="home-column1">
            <div className="home-element14">
              <h3 className="home-header34">
                <span>{t('Header_G6EY42')}</span>
              </h3>
              <p className="home-content31">
                <span>{t('Content_acxaht')}</span>
              </p>
            </div>
            <div className="home-element15">
              <h3 className="home-header35">
                <span>{t('Header_yW87AM')}</span>
              </h3>
              <p className="home-content32">
                <span>{t('Content_GzZkGP')}</span>
              </p>
            </div>
            <div className="home-element16">
              <h3 className="home-header36">
                <span>{t('Header_cauYD0')}</span>
              </h3>
              <p className="home-content33">
                <span>{t('Content_s4RWR7')}</span>
              </p>
            </div>
          </div>
          <div className="home-column2">
            <div className="home-element17">
              <h3 className="home-header37">
                <span>{t('Header_Db-Kh9')}</span>
              </h3>
              <p className="home-content34">
                <span>{t('Content_XC13r2')}</span>
              </p>
            </div>
            <div className="home-element18">
              <h3 className="home-header38">
                <span>{t('Header_y9EQAt')}</span>
              </h3>
              <p className="home-content35">
                <span>{t('Content_1tjGgb')}</span>
              </p>
            </div>
            <div className="home-element19">
              <h3 className="home-header39">
                <span>{t('Header_5OXJBo')}</span>
              </h3>
              <p className="home-content36">
                <span>{t('Content_ndnUlF')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content37">
          <div className="home-main">
            <div className="home-branding2">
              <img alt="image" src="/logo.svg" className="home-image20" />
              <span className="home-text54">
                <span>{t('text_oq-868')}</span>
              </span>
            </div>
            <div className="home-links">
              <div className="home-column3">
                <span className="home-header40">
                  <span>{t('Header_cQzzql')}</span>
                </span>
                <div className="home-list1">
                  <Link to="/" className="home-navlink10">
                    <span>{t('text_u3VjZO')}</span>
                  </Link>
                  <Link to="/" className="home-navlink11">
                    <span>{t('text_AiF15p')}</span>
                  </Link>
                  <Link to="/" className="home-navlink12">
                    <span>{t('text_mn-H9v')}</span>
                  </Link>
                  <Link to="/" className="home-navlink13">
                    <span>{t('text_CSHqWG')}</span>
                  </Link>
                </div>
              </div>
              <div className="home-column4">
                <span className="home-header41">
                  <span>{t('Header_njIcP_')}</span>
                </span>
                <div className="home-list2">
                  <Link to="/" className="home-navlink14">
                    <span>{t('text_9-17L4')}</span>
                  </Link>
                  <Link to="/" className="home-navlink15">
                    <span>{t('text_Nh8rGO')}</span>
                  </Link>
                  <Link to="/" className="home-navlink16">
                    <span>{t('text_DXZVS6')}</span>
                  </Link>
                  <Link to="/" className="home-navlink17">
                    <span>{t('text_2Lhv7E')}</span>
                  </Link>
                  <Link to="/" className="home-navlink18">
                    <span>{t('text_V08FnQ')}</span>
                  </Link>
                  <Link to="/" className="home-navlink19">
                    <span>{t('text_RG7POv')}</span>
                  </Link>
                  <Link to="/" className="home-navlink20">
                    <span>{t('text_UspGQX')}</span>
                  </Link>
                </div>
              </div>
              <div className="home-column5">
                <span className="home-header42">
                  <span>{t('Header_rmvFaw')}</span>
                </span>
                <div className="home-list3">
                  <Link to="/" className="home-navlink21">
                    <span>{t('text_MIuQsY')}</span>
                  </Link>
                  <Link to="/" className="home-navlink22">
                    <span>{t('text_k7MEjC')}</span>
                  </Link>
                  <Link to="/" className="home-navlink23">
                    <span>{t('text__6n1io')}</span>
                  </Link>
                  <Link to="/" className="home-navlink24">
                    <span>{t('text_jiQhqH')}</span>
                  </Link>
                  <Link to="/" className="home-navlink25">
                    <span>{t('text_wU2tgi')}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text55">
              <span>{t('text_pmx1xn')}</span>
            </span>
            <button data-role="scroll-top" className="home-button6 button">
              <img alt="image" src="/arrow.svg" className="home-image21" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="home-container18">
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup" className="home-link">
      
      </a>
    </div>
  )
}

export default Home
