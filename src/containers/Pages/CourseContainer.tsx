import { makeStyles, Box, Typography } from '@material-ui/core/'
import { Colors } from '@theme/colors'
import Card from '@components/elements/Card'
import { allproducts } from '@constants/featured.course'

const CourseContainer: React.FC = () => {
  const classes = useStyles()

  const rows = [...Array(Math.ceil(allproducts.length / 4))]
  const productRows = rows.map((_row, idx) =>
    allproducts.slice(idx * 4, idx * 4 + 4)
  )
  const content = productRows.map((row, idx) => (
    <div className="columns" key={idx}>
      {row.map((item, index) => (
        <div className="column" key={index.toString()}>
          <Card isDark={false} desc={item.desc} data={item} />
        </div>
      ))}
    </div>
  ))

  return (
    <>
      <Box className={classes.content}>
        <Typography className={classes.title} variant="h3" component="h3">
          Сургалт
        </Typography>
        <Typography variant="body1" component="p">
          Практик буудлагын спорт нь дэлхийн өнцөг булан бүрт шинээр гишүүн
          элсүүлэхдээ тухайн хичээллэх төрлөөр нь аюулгүй ажиллагааны сургалтыг
          явуулж, аюулгүй буудагч бэлтгэн тэмцээн уралдаанд оролцуулдаг.
        </Typography>
      </Box>
      <Box className={classes.list}>{content}</Box>
    </>
  )
}

const useStyles = makeStyles(() => ({
  paper: {
    padding: 20,
  },
  content: {
    paddingTop: 40,
    paddingBottom: 40,
    maxWidth: 600,
    margin: '0 auto',
  },
  title: {
    color: Colors.black,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  list: {
    paddingBottom: 100,
  },
}))

export default CourseContainer
