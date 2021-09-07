import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import RulesContainer from '@containers/Pages/RulesContainer'
import ContentHeader from '@components/elements/ContentHeader'

const SafetyRules: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Аюулгүй ажиллагааны үндсэн дүрэм'} />
      <ContentWrapper topSpace={true}>
        <>
          <RulesContainer>
            <p style={{ textAlign: 'justify' }}>
              <span style={{ color: '#ff0000' }}>
                <strong>
                  1. Би зэвсэгтэй&nbsp;үргэлж цэнэгтэй мэт харьцана.
                </strong>
              </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
              <em>
                Энэ нь зэвсгийг үргэлж цэнэгтэй байж магадгүй гэж бодож,
                урьдчилан шалгаж, аюулгүй байдлыг хангаж, болгоомжтой харьцах
                ёстой гэсэн үг юм.
              </em>
            </p>
            <p style={{ textAlign: 'justify' }}>
              <span style={{ color: '#ff0000' }}>
                <strong>
                  2. Би буудахыг хүсээгүй зүгт зэвсгийн хошууг чиглүүлэхгүй.
                </strong>
              </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
              <em>
                Энэ нь барьж байгаа зэвсгийнхээ хошууг хаашаа харж байгааг
                тогтмол хянаж,&nbsp;хаа хамаагүй зүгрүү санамсаргүй чиглүүлэхээс
                зайлсхийж, зөвхөн буудах зүгт чиглүүлнэ гэсэн үг юм.
              </em>
            </p>
            <p style={{ textAlign: 'justify' }}>
              <span style={{ color: '#ff0000' }}>
                <strong>
                  3. Би буудахын өмнө байны орчин тойрныг үргэлж хянана.
                </strong>
              </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
              <em>
                Энэ нь буудлага үйлдэхээс өмнө байны орчин тойронд хүн, амьтан,
                байнаас бусад ямарваа зүйл байгаа эсэхийг урьдчилж хянах ёстойг
                илэрхийлдэг.
              </em>
            </p>
            <p style={{ textAlign: 'justify' }}>
              <span style={{ color: '#ff0000' }}>
                <strong>
                  4. Би буудлага үйлдэхээс бусад үед гохонд&nbsp;хуруу
                  хүргэхгүй.
                </strong>
              </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
              <em>
                Энэ нь зэвсгийг гартаа барьж байх үедээ буудах гээгүй бол гохонд
                хуруу хүргэхгүй байх ёстой гэсэн үг юм.
              </em>
            </p>
            <hr />
            <p>&nbsp;</p>
            <p style={{ textAlign: 'justify' }}>
              Аюулгүйн&nbsp;үндсэн 4 зарчмыг цаг ямагт биелүүлж байх ёстой
              байдаг. Эдгээр зарчмыг зөрчсөн тохиолдолд шууд тэмцээнээс хасдаг.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Сэтгэлзүйн шинжлэх ухааны тодорхойлолтоор “Аливаа үйлдлийг
              3000-аас доошгүй удаа давтвал рефлекс болж хувирдаг”. Иймд дээрх 4
              зарчмыг биет байдлаар олон удаа давтах замаар зэвсэгтэй аюулгүй
              харьцах соёл, хэвшлийг эзэмших боломжтой.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Ер нь&nbsp;дан ганц тэмцээн ч гэлтгүй, амьдрал дээр аливаа хүн
              ямар ч тохиолдолд дээрх зарчмыг баримталж сурснаар санамсар
              болгоомжгүйгээс үүдэн гардаг “сум алдах” аюулаас зайлсхийж чадна.
            </p>
          </RulesContainer>
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default SafetyRules
