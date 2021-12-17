import { Box, Typography } from '@mui/material/'
import { Colors } from '@theme/colors'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { clubCollection } from '@constants/image.constants'

const ClubContainer: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          paddingTop: 40,
          paddingBottom: 40,
          maxWidth: 600,
          margin: '0 auto',
        }}
      >
        <Typography
          sx={{
            color: Colors.black,
            textAlign: 'center',
            paddingTop: 20,
            paddingBottom: 30,
          }}
          variant="h3"
          component="h3"
        >
          IPSC Action Air Club
        </Typography>
        <Typography variant="body1" component="p">
          IPSC Action Air Club нь Монголын Практик Буудлагын Холбооны харьяа
          клуб тул Монгол улсад практик буудлагын спортын үйл ажиллагаа явуулах
          бүх эрхийг ОУПБХ-ноос олгосон.
        </Typography>
        <Typography variant="body1" component="p">
          Экшн эйр буудлагын клуб нь 7 хоног бүрийн НЯМ гарагт тэмцээн уралдаан
          зохион байгуулдаг бөгөөд гишүүнээр элсэхийн тулд аюулгүй ажиллагааны
          анхан шатны сургалтанд хамрагдаж, гэрчилгээ авсан байх шаардлагатай.
          Сургалт нь зөвхөн БЯМБА гарагт хичээллэж байна. Мөн ажлын өдрүүдэд
          тамирчид хувийн бэлтгэл хангах зорилгоор клубынхээ зааланд бэлтгэл
          хийх боломжтой.
        </Typography>
        <Typography variant="body1" component="p">
          Практик буудлагын спорт нь зэвсэгийн хувьд 5 төрөлд хуваагддаг бөгөөд
          экшн эйр төрөл бол энэхүү 5 төрлийн нэг юм. Эйрсофт бууг ашиглан
          практик буудлагын спортын дүрмийг баримтлан тэмцээн уралдаан,
          сургалтууд явагддагаараа онцлогтой. Экшн эйр буудлагын клубтэй
          холбогдох утас: 8611-0200
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 800, margin: '0 auto', paddingBottom: 100 }}>
        <ImageList rowHeight={240} cols={3}>
          {clubCollection.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1}>
              <img
                src={item.img}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                alt={item.title}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  )
}

export default ClubContainer
