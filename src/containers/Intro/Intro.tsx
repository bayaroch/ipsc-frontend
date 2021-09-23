import IntroButton from '@components/common/IntroButton'
import Slider from '@components/common/Slider'
import { useRouter } from 'next/router'

const banners = [
  { url: '/images/intro/slide1.jpg' },
  { url: '/images/intro/slide2.jpg' },
]

const Intro: React.FC = () => {
  const router = useRouter()
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

              <IntroButton onClick={() => router.push('/about_aasc')}>
                Дэлгэрэнгүй
              </IntroButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Intro
