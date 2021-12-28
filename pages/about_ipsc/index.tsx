import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import { ipscCollection } from '@constants/image.constants'
import { Colors } from '@theme/colors'

const AboutUs: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentWrapper topSpace={true}>
        <>
          <Box
            sx={{
              paddingTop: '40px',
              paddingBottom: '40px',
              maxWidth: 600,
              margin: '0 auto',
            }}
          >
            <Typography
              sx={{
                color: Colors.black,
                textAlign: 'center',
                paddingTop: '20px',
                paddingBottom: '30px',
              }}
              variant="h3"
              component="h3"
            >
              IPSC гэж юу вэ?
            </Typography>
            <Typography variant="body1" component="p">
              IPSC нь International Practical Shooting Confederation (IPSC)
              товчлол бөгөөд мөн практик буудлагын спортыг илэрхийлсэн нэршил
              юм.
            </Typography>
            <Typography variant="body1" component="p">
              IPSC нь 1976 оны 5-р сарын 24 үүссэн бөгөөд123 гишүүн оронтой.
            </Typography>
            <Typography variant="body1" component="p">
              Гар буу, карабин, урт буу болон хийн гар буу гэсэн үндсэн 4
              төрөлтэй спорт юм.
            </Typography>
            <Typography variant="body1" component="p">
              IPSC уриа нь Diligentia, Vis, Celeritas буюу латинаар Хурд, Хүч,
              Цэц гэсэн үгний товчлол байдаг. IPSC-д нас, хүйсийн хязгаар
              байдаггүй бөгөөд тамирчид нь 16-с доош Super Junior, 21-с доош
              Junior, 50-с дээш Senior, 60-с дээш Super Senior, эмэгтэй бол Lady
              гэсэн категорит хуваагдана.
            </Typography>
            <Typography variant="body1" component="p">
              IPSC онооны системыг comstock гэдэг бөгөөд буудагчийн нийт авсан
              оноог, дасгал гүйцэтгэсэн хугацаанд хувааж hit factor-оор үнэлдэг
              нь уг спортын онцлог юм.
            </Typography>
          </Box>
          <Box sx={{ maxWidth: 800, margin: '0 auto', paddingBottom: '100px' }}>
            <ImageList rowHeight={240} cols={3}>
              {ipscCollection.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1}>
                  <img
                    src={item.img}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    alt={item.title}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default AboutUs
