import { Box, Typography } from '@mui/material/'
import { Colors } from '@theme/colors'
import ProductCard from '@components/elements/ProductCard'
import { allproducts } from '@constants/featured.course'

const CourseContainer: React.FC = () => {
  const rows = [...Array(Math.ceil(allproducts.length / 4))]
  const productRows = rows.map((_row, idx) =>
    allproducts.slice(idx * 4, idx * 4 + 4)
  )
  const content = productRows.map((row, idx) => (
    <div className="columns" key={idx}>
      {row.map((item, index) => (
        <div className="column" key={index.toString()}>
          <ProductCard isDark={false} desc={item.desc} data={item} />
        </div>
      ))}
    </div>
  ))

  return (
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
          Сургалт
        </Typography>
        <Typography variant="body1" component="p">
          Практик буудлагын спорт нь дэлхийн өнцөг булан бүрт шинээр гишүүн
          элсүүлэхдээ тухайн хичээллэх төрлөөр нь аюулгүй ажиллагааны сургалтыг
          явуулж, аюулгүй буудагч бэлтгэн тэмцээн уралдаанд оролцуулдаг.
        </Typography>
      </Box>
      <Box sx={{ paddingBottom: '100px' }}>{content}</Box>
    </>
  )
}

export default CourseContainer
