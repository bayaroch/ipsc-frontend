import ContentWrapper from '@components/layout/ContentWrapper'
import MainLayout from '@components/layout/MainLayout'
import PageWithLayoutType from '@constants/page'
import RulesContainer from '@containers/Pages/RulesContainer'
import ContentHeader from '@components/elements/ContentHeader'

const MatchRatings: PageWithLayoutType = () => {
  return (
    <MainLayout isBanner={true} regular={true}>
      <ContentHeader title={'Тэмцээний түвшин'} />
      <ContentWrapper topSpace={true}>
        <>
          <RulesContainer>
            <div className="page-content">
              <p>Практик буудлагын тэмцээн нь 5 түвшинд эрэмбэлэгддэг. Үүнд:</p>
              <ol>
                <li>Түвшин I – Клуб доторх тэмцээн</li>
                <li>Түвшин II – Дотоодын, клуб хоорондох тэмцээн</li>
                <li>Түвшин III – Олон улсын тэмцээн</li>
                <li>Түвшин IV – Бүс нутгийн аварга шалгаруулах тэмцээн</li>
                <li>Түвшин V&nbsp;–&nbsp;Дэлхийн аварга шалгаруулах тэмцээн</li>
              </ol>
              <div className="table-container">
                <table className="table is-fullwidth is-striped is-bordered is-reponsive">
                  <colgroup>
                    <col width={348} />
                    <col width={51} />
                    <col width={56} />
                    <col width={50} />
                    <col width={61} />
                    <col width={57} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td />
                      <td>
                        <div>
                          <div style={{ textAlign: 'center' }}>1-р түвшин</div>
                        </div>
                      </td>
                      <td style={{ textAlign: 'center' }}>2-р түвшин</td>
                      <td style={{ textAlign: 'center' }}>3-р түвшин</td>
                      <td style={{ textAlign: 'center' }}>4-р түвшин</td>
                      <td style={{ textAlign: 'center' }}>
                        <div>
                          <div>5-р түвшин</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>01. IPSC дүрмийг баримтлах</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td>02. Оролцогчид нь тухайн орны IPSC гишүүн байх</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td>03. Match Director – Зохион байгуулагч</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td>04. Range Master – Дасгалыг зохиогч</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: 'left' }}>
                        05. Өөрийн улсаас томилогдсон Range Master
                      </td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                    </tr>
                    <tr>
                      <td>06. Олон улсаас томилогдсон Range Master</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td>07. Chief Range Officer – Ахлах талбайн шүүгч</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td>08. Дасгал бүрт NROI шүүгч байх</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td>08. Дасгал бүрт IROA шүүгч байх</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td>10. IROA онооны шүүгч ажиллах</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td>11. 6 буудалт тутамд 1 туслах шүүгч ажиллах</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                    </tr>
                    <tr>
                      <td>
                        12. COF – Дасгалын зохиомжийг өөрийн улсад батлуулах
                      </td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                    </tr>
                    <tr>
                      <td>
                        13. COF – Дасгалын зохиомжийг олон улсад батлуулах
                      </td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td>14. IPSC шийтгэл *</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td>15. Chronograph – Сумны нисэлтийн хурд шалгагч</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>R</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td>16. 3 сарын өмнө олон улсад бүртгүүлэх</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                    </tr>
                    <tr>
                      <td>
                        17. 3 жил тутамд болдог IPSC хурлаар зөвшөөрөл олгох
                      </td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td>18. IPSC-ын календарт тэмдэглэгдэх</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td>19. Тэмцээний дүнг IROA-д давхар тэмдэглэх</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>N/A</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                      <td style={{ textAlign: 'center' }}>M</td>
                    </tr>
                    <tr>
                      <td>
                        20. Тэмцээнд ашиглах онооны буудалтын доод хязгаар
                      </td>
                      <td style={{ textAlign: 'center' }}>40</td>
                      <td style={{ textAlign: 'center' }}>80</td>
                      <td style={{ textAlign: 'center' }}>150</td>
                      <td style={{ textAlign: 'center' }}>300</td>
                      <td style={{ textAlign: 'center' }}>450</td>
                    </tr>
                    <tr>
                      <td>21. Тэмцээниий дасгалын доод хязгаар</td>
                      <td style={{ textAlign: 'center' }}>3</td>
                      <td style={{ textAlign: 'center' }}>6</td>
                      <td style={{ textAlign: 'center' }}>12</td>
                      <td style={{ textAlign: 'center' }}>24</td>
                      <td style={{ textAlign: 'center' }}>30</td>
                    </tr>
                    <tr>
                      <td>22. Тэмцээнд оролцох тамирчдын доод хязгаар</td>
                      <td style={{ textAlign: 'center' }}>10</td>
                      <td style={{ textAlign: 'center' }}>50</td>
                      <td style={{ textAlign: 'center' }}>120</td>
                      <td style={{ textAlign: 'center' }}>200</td>
                      <td style={{ textAlign: 'center' }}>300</td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <p style={{ textAlign: 'left' }}>
                          23. Тэмцээний үнэлгээ (Оноо)
                        </p>
                      </td>
                      <td style={{ textAlign: 'center' }}>1</td>
                      <td style={{ textAlign: 'center' }}>2</td>
                      <td style={{ textAlign: 'center' }}>3</td>
                      <td style={{ textAlign: 'center' }}>4</td>
                      <td style={{ textAlign: 'center' }}>5</td>
                    </tr>
                  </tbody>
                </table>
                <p>Түлхүүр үгс:</p>
              </div>
              <ul>
                <li className="cushycms">
                  <strong>N/A</strong> = Not Applicable (Шаардлагагүй)
                </li>
                <li className="cushycms">
                  <strong>R</strong> = Recommended (Зөвлөхүйц)
                </li>
                <li className="cushycms">
                  <strong>M</strong> = Mandatory (Шаардлагатай)
                </li>
              </ul>
              <p>Товчилсон үгс:</p>
              <ul>
                <li>
                  <strong>IPSC</strong> = International Practical Shooting
                  Confederation (ОУ-ын практик буудлагын холбоо, мөн практик
                  буудлагын спортыг товчилж илэрхийлнэ)
                </li>
                <li>
                  <strong>IROA</strong> = International Range Officers
                  Association (ОУ-ын талбайн шүүгчдийн холбоо, мөн ОУ-ын тэмцээн
                  шүүх эрхтэй талбайн шүүгчдийг товчилж илэрхийлнэ)
                </li>
                <li>
                  <strong>NROI</strong> = National Range Officers Institute
                  (Үндэсний талбайн шүүгчдийн байгууллага, өөрийн улсад явагдаж
                  байгаа практик буудлагын холбооны шүүгчийг илэрхийлнэ)
                </li>
                <li>
                  <strong>Match Director</strong> = Тэмцээний ерөнхий зохион
                  байгуулагч
                </li>
                <li>
                  <strong>Range Master</strong> = Тэмцээний дасгалын зохиомжийг
                  гаргаж, шүүгчдийг болон тэмцээний үеээр гарсан асуудлыг
                  шийдвэрлэнэ
                </li>
                <li>
                  <strong>COF</strong> = Course of fire (Дасгалын зохиомж)
                </li>
              </ul>
              <p>
                * тэмдэгтэй 14-р хэсэг: N/A нь шаардлагагүй гэх утгыг илэрхийлэх
                боловч 1 болон 2-р түвшний тэмцээний үед тухайн орны бүсийн
                захирал нь өөрийн дүрэм, журмыг тогтоох эрхтэй.
              </p>
              <p>
                Жич: Тухайн&nbsp;ангилалд 10-аас цөөнгүй тамирчин бүрдэхгүй бол
                тухайн ангиллыг үүссэнд тооцохгүй. Түүнчлэн тухайн ангилалд
                5-аас цөөнгүй баг бүрдээгүй бол тухайн ангилалд багийн дүнг
                шалгаруулахгүй. Практик буудлагын спортод нэг баг нь 4 хүний
                бүрэлдэхүүнтэй байх ба тухайн багийн хамгийн өндөр оноо авсан 3
                тамирчны нийлбэр дүнгээр багийн дүнг тооцдог.
              </p>
            </div>
          </RulesContainer>
        </>
      </ContentWrapper>
    </MainLayout>
  )
}

export default MatchRatings
