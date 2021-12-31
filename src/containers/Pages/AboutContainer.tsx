import { Box, Typography, Grid } from '@mui/material/'
import { Colors } from '@theme/colors'

const ClubContainer: React.FC = () => {
  return (
    <>
      <Grid
        container
        sx={{
          height: 'auto',
          minHeight: { xl: '100vh', lg: 'auto', md: 'auto', sm: 'auto' },
          paddingTop: '52px',
        }}
        spacing={0}
      >
        <Grid xs={12} md={4} item>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              background: "url('images/bg/shooter.jpg')",
              backgroundSize: 'Cover',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          ></Box>
        </Grid>
        <Grid xs={12} md={8} item>
          <Box
            sx={{
              background: Colors.white,
              height: '100%',
              width: '100%',
              padding: { xl: '140px', lg: '1rem', sm: '1rem', xs: '1rem' },
            }}
          >
            <Typography
              sx={{ fontSize: 30, display: 'block' }}
              variant="h1"
              component="h1"
            >
              IPSC Экшн Эйр
            </Typography>
            <Typography variant="h3" sx={{ mb: 2 }} component="h4">
              ПРАКТИК БУУДЛАГЫН СПОРТЫН ХИЙН ГАР БУУНЫ ТӨРӨЛ
            </Typography>
            <Typography variant="body1" component="p">
              Практик буудлага нь галт зэвсэг ашиглан богино хугацаанд өгөгдсөн
              дасгалыг түргэн гүйцэтгэх буудлагын спортын нэг төрөл юм. Тийм ч
              учраас практик буудлагын спортын уриа нь латинаар DELIGENTIA, VIS,
              CELERITAS (товчоор DVC) буюу монголоор харгалзан ХУРД, ХҮЧ, ЦЭЦ
              юм. Өөрөөр хэлбэл практик буудлагын спорт нь хурд, хүч, цэц гэсэн
              гурван хүчин зүйлийг тэнцвэртэйгээр ашиглахыг сургадаг.
            </Typography>
            <Typography variant="body1" component="div">
              Практик буудлагын үндсэн 5 төрөл байдаг.
              <ul>
                Үүнд: <li>1. Pistol</li> <li>2. Rifle</li>
                <li>3. Shotgun </li> 4. Mini Rifle<li> 5. Action Air</li>
              </ul>
              <br />
            </Typography>
            <Typography variant="body1" component="p">
              Бусад буудлагын төрлөөс ялгагдах гол онцлог нь тухайн дасгалыг
              гүйцэтгэх явцад цуглуулсан оноог зарцуулсан хугацаанд хувааж оноог
              тооцдог бөгөөд аль болох том калибртай сум ашигласан тохиолдолд
              илүү оноо авах боломжийг олгодог. Энэ нь тамирчнаас илүү хүч, илүү
              ур чадвар шаарддаг байна.
            </Typography>
            <Typography variant="body1" component="p">
              Практик буудлагын спортын үндсэн зорилго нь галт зэвсэгтэй
              аюулгүй, зөв харьцах соёлыг олон нийтэд түгээхэд оршино. Энэ
              спортоор хичээллэснээр санамсар болгоомжгүй үйлдлээс сум алдаж амь
              нас, эрүүл мэнд, өмч хөрөнгө хохирохоос урьдчилан сэргийлж сурна.
              Тус спорт нь хагас зууны турш дэлхийн олон оронд хөгжихдөө
              санамсаргүй алдаа эндэгдлийн нэг ч тохиолдол гаргаагүй нь дэг
              журам, аюулгүй байдалд хамгийн сайн сургадаг хатуу чанд спортын
              төрөл гэдгээ тодорхой илтгэдэг юм.
            </Typography>
            <Typography variant="body1" component="p">
              Харин практик буудлагын спортын эйкшн эйр төрөл нь ихэнх галт
              зэвсэг ашиглах боломжгүй, хуулиар иргэдэд галт зэвсэг ашиглахыг
              хориглосон улс орнуудад эйрсофт хийн бууг ашиглаж уг спортыг
              хөгжүүлэх зорилготой үүссэн төрөл юм. Тэмцээний дүрэм, гүйцэтгэл,
              онооны систем гээд бүх зүйл нь галт зэвсэгээр явуулах тэмцээнтэй
              ижил явагдах бөгөөд зөвхөн зэвсэг нь бодит галт зэвсэг бус эйрсофт
              хийн бууг ашигладгаараа онцлог. Манай орны хувьд аль аль төрлөөр
              нь хичээллэх бүрэн боломжтой.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default ClubContainer
