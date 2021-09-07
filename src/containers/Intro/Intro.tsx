import IntroButton from '@components/common/IntroButton'
import Slider from '@components/common/Slider'
import Link from 'next/link'

const banners = [
  { url: '/images/intro/slide1.jpg' },
  { url: '/images/intro/slide2.jpg' },
]

const Intro: React.FC = () => {
  return (
    <>
      <div className="intro-section">
        <div className="image-container">
          <Slider fullSize={true} images={banners} />
        </div>
        <div className="intro-wrapper">
          <div className="intro-container container">
            <div className="intro-content">
              <div className="dvc-logo">
                <img src="/images/logo-dvc.png" />
              </div>
              <div className="intro-headline">
                IPSC Action Air <br />
                практик буудлагын спорт
              </div>
              <Link href="/about_aasc">
                <IntroButton>Дэлгэрэнгүй</IntroButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Intro
