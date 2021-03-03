import IntroButton from '@components/common/IntroButton'
import './styles.scss'

interface IntroProps {}

const Intro: React.FC<IntroProps> = () => {
  const onIntroClick = () => {
    console.log('im clicking')
  }
  return (
    <>
      <div className="intro-section">
        <div className="image-container">
          <div className="intro-container container">
            <div className="intro-content">
              <div className="dvc-logo">
                <img src="/images/logo-dvc.svg" />
              </div>
              <div className="intro-headline">
                IPSC Action Air буюу практик буудлагын спорт
              </div>
              <IntroButton onClick={onIntroClick}>Дэлгэрэнгүй</IntroButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Intro
