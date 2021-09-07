import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import RulesContainer from '@containers/Pages/RulesContainer'
import ContentHeader from '@components/elements/ContentHeader'

const MatchDq: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Тэмцээнээс хасах “DQ”'} />
      <ContentWrapper topSpace={true}>
        <>
          <RulesContainer>
            <p style={{ textAlign: 'justify' }}>
              Практик буудлагын спортын үндсэн зорилго нь “зэвсэгтэй аюулгүй,
              зөв харьцаж сурах соёлыг түгээх” тул энэхүү зорилгынхоо хүрээнд
              тэмцээний явцад&nbsp;
              <a href="https://ipscaa.wordpress.com/safety_rules/">
                аюулгүйн үндсэн 4 дүрэм
              </a>
              &nbsp;болон бусад журам, заавруудыг зөрчсөн тохиолдолд шууд
              хасдаг. Бусад спортын төрөлд торгууль өгөх байдлаар тамирчдыг
              шийтгэх нь түгээмэл&nbsp;бол практик
              буудлага&nbsp;нь&nbsp;торгууль өгөхөөс гадна тэмцээнээс шууд
              хасдагаараа илүү хатуу, чанд дүрэмтэй спорт юм. Тэмцээнээс
              хасагдсан тохиолдолд дасгалыг дундаас нь зогсоох бөгөөд тус
              тамирчны цуглуулсан бүх оноог хүчингүйд тооцож, тэмцээний туршид
              дахиж буудлага хийхийг хориглодог.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Аюулгүйн үндсэн 4 дүрмээс гадна&nbsp;
              <a
                href="https://ipscaa.wordpress.com/safety_rules/"
                target="_blank"
                rel="noopener noreferrer"
              >
                тэмцээний нийтлэг зааварчилгаа
              </a>
              г зөрчвөл мөн тэмцээнээс хасдаг.&nbsp;Дараах бичлэгээс та бүхэн
              тэмцээнээс хасагдаж байгаа тохиолдлуудыг үзнэ үү.
            </p>
            <div
              className="jetpack-video-wrapper"
              style={{ textAlign: 'justify' }}
            >
              <span className="embed-youtube">
                <div className="jetpack-video-wrapper">
                  <span
                    className="embed-youtube"
                    style={{ textAlign: 'center', display: 'block' }}
                  >
                    <iframe
                      className="youtube-player"
                      src="https://www.youtube.com/embed/4wEycuGSQig?version=3&rel=1&showsearch=0&showinfo=1&iv_load_policy=1&fs=1&hl=en&autohide=2&wmode=transparent"
                      allowFullScreen={true}
                      style={{
                        border: '0px',
                        display: 'block',
                        margin: '0px',
                        width: '100%',
                        height: '500px',
                      }}
                      sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
                      data-ratio="0.5628205128205128"
                      data-width={780}
                      data-height={439}
                    />
                  </span>
                </div>
              </span>
            </div>
            <div />
            <div>
              <hr />
            </div>
            <p style={{ textAlign: 'justify' }}>
              Уг бичлэг дээр “сум алдсан” буюу &nbsp;буудах ёсгүй байхад
              санамсаргүй буудсан тохиолдлууд харагдаж байгаа нь
            </p>
            <blockquote>
              <p style={{ textAlign: 'justify' }}>Дүрэм №4</p>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
              “
              <strong>
                &nbsp;Би буудлага үйлдэхээс бусад үед гохонд&nbsp;хуруу
                хүргэхгүй”&nbsp;
              </strong>
              дүрмийг зөрчсөнөөс үүдэж байгаа алдаа юм. Хэрэв хуруу гохон дээр
              байгаагүй бол ийм алдаа гарахгүй байсан гэдэгт 100% итгэлтэй байж
              болно. Буу хэзээ ч өөрөө бууддаггүй. Түүнчлэн “сум алдаагүй”
              боловч магазин солих үед, мөн шилжилт хөдөлгөөн хийх үед хуруугаа
              гохонд хүргэсэн, эсвэл хуруу нь гохны хүрээн дотор байгаа
              тохиолдолд тус дүрмийг зөрчсөн гэж үзэж шууд тэмцээнээс хасдаг.
            </p>
            <hr />
            <p style={{ textAlign: 'justify' }}>
              Мөн зэвсэгтэйгээ эргэх хөдөлгөөн хийж байгаа, эсвэл зэвсгээ бариад
              гүйж&nbsp;байгаа зэрэг үйлдлүүд нь
            </p>
            <blockquote>
              <p style={{ textAlign: 'justify' }}>Дүрэм №2</p>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
              “<strong>Би буудахыг хүсээгүй зүгт зэвсгийг чиглүүлэхгүй”</strong>
              -ийг зөрчсөнд тооцогдоно. Та бүхэн сайтар анзаарвал тухайн
              тамирчин ямар нэг хөдөлгөөн хийх үед зэвсгийн хошуу&nbsp;бай
              байгаа зүг рүү биш, өөр тийш хандсаныг харж болно. Энэ бол ноцтой
              алдаанд тооцогдох бөгөөд тэмцээнээс гарцаагүй хасагдах нөхцөл юм.
            </p>
            <hr />
            <p style={{ textAlign: 'justify' }}>
              Бичлэг дээр зэвсгээ&nbsp;алдаж унагасан, эсвэл буруу цэнэглэсэн
              үйлдлүүд харагдаж байгаа нь
            </p>
            <blockquote>
              <p style={{ textAlign: 'justify' }}>Дүрэм №1</p>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
              “
              <strong>
                Би зэвсэгтэй&nbsp;хэзээд цэнэгтэй мэт харьцана”&nbsp;
              </strong>
              дүрмийг зөрчсөн хэрэг юм. Хутга мэс барихдаа хуруу гараа исгэчих
              вий гэж хэн бүхэн болгоомжилдог мөртлөө хутганаас ч илүү анхаарал,
              болгоомжтой байвал зохих зэвсэгтэй харьцах үедээ яагаад
              хайхрамжгүй байж болох билээ?
            </p>
            <hr />
            <p style={{ textAlign: 'justify' }}>Дээрх бүх тохиолдолд</p>
            <blockquote>
              <p style={{ textAlign: 'justify' }}>Дүрэм №3</p>
            </blockquote>
            <p style={{ textAlign: 'justify' }}>
              “
              <strong>
                Би буудахын өмнө байны орчин тойрныг үргэлж хянана”&nbsp;
              </strong>
              дүрэм зөрчигдсөн гэсэн үг. Хэрэв тамирчин байны орчин тойрныг
              үнэхээр хянасан л юм бол яагаад сум алдав, яагаад байнаас өөр зүг
              рүү зэвсгийг чиглүүлэв, яагаад зэвсэгтэй хайхрамжгүй харьцав? Тэр
              үнэхээр байны орчин тойрныг анзаарсан бол тэнд хүмүүс байгаа,
              үзэгчид, шүүгчид, бусад тамирчид байгаа, буудахад зориулагдаагүй
              эд зүйлс бий гэдгийг мэдэж, ухамсарлаж байх ёстой. Гэтэл тэр
              тэгсэнгүй, алдаа гаргалаа. Тэгэхээр тэр байныг орчин тойрныг
              гүйцэд хянаагүй гэсэн үг.
            </p>
            <hr />
            <p style={{ textAlign: 'justify' }}>
              Өөрөөр хэлбэл практик буудлагын спортод нэг алдаа
              гаргавал&nbsp;2-3 дүрэм зөрчигдөж байгаа гэсэн үг тул шууд
              тэмцээнээс хасах шийтгэл ногдуулдаг. Тэмцээнээс хасаж байгаа нь
              үндсэндээ, тэмцээнд оролцохоосоо өмнө хангалттай бэлтгэл хийж,
              аюулгүйн дүрмийг ягштал баримталж, хэвшүүлсэн байх ёстой тамирчин
              алдаа гаргаж байгаа нь&nbsp;дүрмээ гүйцэд сураагүй, бэлтгэл нь
              гүйцээгүй, “ногоон”-оороо байгааг илтгэж байгаа тул&nbsp;түүнд
              эргэн&nbsp;бодох,&nbsp;дахин бясалгах, давтан суралцах
              хугацааг&nbsp;олгож байгаа хэрэг. Иймд тэмцээнээс хасаж байгаа нь
              шийтгэл биш, харин тухайн тамирчинд дахин боломж олгож байгаа
              хэрэг юм.
            </p>
            <blockquote>
              <p>Safety First</p>
            </blockquote>
          </RulesContainer>
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default MatchDq
