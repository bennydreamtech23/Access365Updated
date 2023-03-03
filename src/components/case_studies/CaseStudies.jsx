import { Link } from 'react-router-dom'
import './CaseStudies.scss'
import { Container, Row, Col } from 'react-bootstrap'

//IMAGES
import hikivison from '../../assets/company_logo/Hikvision Logo.png'
import cplus from '../../assets/company_logo/PngItem_291917.png'
import dahua from '../../assets/company_logo/PngItem_815508.png'
import anviz from '../../assets/company_logo/anviz-logo-global.svg'
import microsoft from '../../assets/company_logo/microsoft.svg'
import tuya from '../../assets/company_logo/tuya-seeklogo.com-1.png'
import ubiquiti from '../../assets/company_logo/Ubiquiti_Networks-Logo.wine.svg'
import tplink from '../../assets/company_logo/TP-Link-Logo.wine.svg'
import dlink from '../../assets/company_logo/D-Link-Logo.wine.svg'

const caseStudies = () => {
  const zkteco =
    'https://logos-download.com/wp-content/uploads/2020/06/ZKTeco_Logo.png'

  const honeywell =
    'https://logos-world.net/wp-content/uploads/2021/02/Honeywell-Logo.png'

  const cisco =
    'https://download.logo.wine/logo/Cisco_Systems/Cisco_Systems-Logo.wine.png'

  const panasonic =
    'https://download.logo.wine/logo/Panasonic/Panasonic-Logo.wine.png'

  return (
    <Container fluid 
    className='CaseStudiesContainer'>
      <Row 
      className='row'>
      
        <Col className= 'col-md'>
          <h1 
          className='Title'>
            Explore Our Studies & Latest Success Stories.
          </h1>
        </Col>

        <Col
      className='col-md'>
          <p 
          className='subtext'>
            For the Security and IT directors ensuring our places of work and
            leisure are safe. For the Chief Technology Officers shaping the
            smart businesses lf tomorrow. We delivers powerful and insight ful
            security solutions that enable protectors to drive forward.
          </p>
        </Col>
      </Row>

      <Row 
      className='Row mt-5 gap-5'>
      
        <Col 
        className='col-md'>
          <div className='bg_1'>
            <button className='bg_1_button'>
              Detection, Fire Alarm
            </button>
          </div>

          <div className='small'>
            <h2>Getting The Right Fire Alarm Detection System Online</h2>

            <p>
              The systems feature manual call and sounder devices wirelessly
              linked to main panel. Whilst wireless systems are more expensive
              than hard wired standard versions.
            </p>
            <div className='my-5'>
              <Link 
              to='/casestudies'
              className='overlay_btn'>
                Explore More &rarr;
              </Link>
            </div>
          </div>
        </Col>

        <Col 
        className='col-md'>
          <div 
          className='bg_2'>
            <button 
            className='bg_1_button'>
              Security, Cctv
            </button>
          </div>

          <div 
          className='small'>
            <h2>Helping Manufacturers With Workplace Essential Safety</h2>
            <p>
              The systems feature manual call and sounder devices wirelessly
              linked to main panel. Whilst wireless systems are more expensive
              than hard wired standard versions.
            </p>
            <div className='my-5'>
              <Link 
              to='/casestudies' 
              className='overlay_btn'>
                Explore More &rarr;
              </Link>
            </div>
          </div>
        </Col>

        <Col 
        className= 'col-md'>
          <div 
          className= 'bg_3'>
            <button 
            className='bg_1_button'>
              Resources, Security
            </button>
          </div>

          <div 
          className='small'>
            <h2>Vendors With Resources Safety & Security</h2>
            <p>
              The systems feature manual call and sounder devices wirelessly
              linked to main panel. Whilst wireless systems ate more expensive
              than hard wired standard versions.
            </p>

            <div className='my-5'>
              <Link to='/casestudies' 
              className='overlay_btn'>
                Explore More &rarr;
              </Link>
            </div>
          </div>
        </Col>

        <Col 
        className='col-md'>
          <div 
          className='bg_4'>
            <button 
            className='bg_1_button'>
              Detection, Fire Alarm
            </button>
          </div>

          <div 
          className='small'>
            <h2>Home Security For The Front And Back Of Your House</h2>
            <p>
              The systems feature manual call and sounder devices wirelessly
              linked to main panel. Whilst wireless systems ate more expensive
              than hard wired standard versions.
            </p>
            <div className='my-5'>
              <Link to='/casestudies' 
              className='overlay_btn'>
                Explore More &rarr;
              </Link>
            </div>
          </div>
        </Col>

        <Col 
        className='col-md'>
          <div 
          className='bg_5'>
            <button 
            className='bg_1_button'>
              CCTV Security Camera
            </button>
          </div>

          <div 
          className='small'>
            <h2>Expert's Guild To Security For Rental Properties</h2>
            <p>
              The systems feature manual call and sounder devices wirelessly
              linked to main panel. Whilst wireless systems ate more expensive
              than hard wired standard versions.
            </p>
            <div>
              <div className='my-5'>
                <Link
                  to='/casestudies'
                  className='overlay_btn'
                >
                  Explore More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row 
      className='rollerBox'>
        <Col>
          <h3 className='mediumtext'>
            Provide better security and control for residential and business
            customers using product from these company
          </h3>

          <div 
          className='scrolling'>
            <div id='col'
            style={{ whiteSpace: 'nowrap' }}>
              <div 
              className='scrolling_col_cplus'>
                <img
                  src={cplus}
                  alt='cplus'
                  className='companyLogo'
                />
              </div>

              <div 
              className='scrolling_col_hikivision'>
                <img
                  src={hikivison}
                  alt='hikvision'
                  className='companyLogo'
                />
              </div>

              <div className='scrolling_col_dahua'>
                <img
                  src={dahua}
                  alt='dahua'
                  className='companyLogo'
                />
              </div>

              <div className='scrolling_col_anviz'>
                <img
                  src={anviz}
                  alt='anviz'
                  className="companyLogo"
                />
              </div>

              <div 
              className='scrolling_col_zkteco'>
                <img
                  src={zkteco}
                  alt='zkteco'
                  className='companyLogo'
                />
              </div>

              <div 
              className='scrolling_col_honeywell'>
                <img
                  src={honeywell}
                  alt='honeywell'
                  className="companyLogo"
                />
              </div>

              <div 
              className="scrolling_col_microsoft">
                <img
                  src={microsoft}
                  alt='microsoft'
                  className='companyLogo'
                />
              </div>

              <div className='scrolling_col_tuya'>
                <img
                  src={tuya}
                  alt='tuya'
                  className='companyLogo'
                />
              </div>

              <div 
              className = 'scrolling_col_panasonic'>
                <img
                  src={panasonic}
                  alt='Panasonic'
                  className="companyLogo"
                />
              </div>

              <div
              className="scrolling_col_ubiquiti">
                <img
                  src={ubiquiti}
                  alt='ubiquiti'
                  className="companyLogo"
                />
              </div>

              <div 
              className="scrolling_col_tplink">
                <img
                  src={tplink}
                  alt='tplink'
                  className="companyLogo"
                />
              </div>

              <div 
              className="scrolling_col_dlink">
                <img
                  src={dlink}
                  alt='dlink'
                  className="companyLogo"
                />
              </div>

              <div 
              className="scrolling_col_cisco">
                <img
                  src={cisco}
                  alt='cisco'
                  className="companyLogo"
                />
              </div>

              <div className="scrolling_col_cplus">
                <img
                  src={cplus}
                  alt='cplus'
                  className="companyLogo"
                />
              </div>

              <div
              className="scrolling_col_hikivision">
                <img
                  src={hikivison}
                  alt='hikvision'
                  className="companyLogo"
                />
              </div>

              <div 
              className="scrolling_col_dahua">
                <img
                  src={dahua}
                  alt='dahua'
                  className="companyLogo"
                />
              </div>

              <div className="scrolling_col_anviz">
                <img
                  src={anviz}
                  alt='anviz'
                  className="companyLogo"
                />
              </div>

              <div
              className="scrolling_col_zkteco">
                <img
                  src={zkteco}
                  alt='zkteco'
                  className="companyLogo"
                />
              </div>

              <div
              className="scrolling_col_honeywell">
                <img
                  src={honeywell}
                  alt='honeywell'
                  className="companyLogo"
                />
              </div>

              <div className="scrolling_col_microsoft">
                <img
                  src={microsoft}
                  alt='microsoft'
                  className="companyLogo"
                />
              </div>

              <div className="scrolling_col_tuya">
                <img
                  src={tuya}
                  alt='tuya'
                  className="companyLogo"
                />
              </div>

              <div className="scrolling_col_panasonic">
                <img
                  src={panasonic}
                  alt='Panasonic'
                  className="companyLogo"
                />
              </div>

              <div 
              className="scrolling_col_ubiquiti">
                <img
                  src={ubiquiti}
                  alt='ubiquiti'
                  className="companyLogo"
                />
              </div>

              <div className="scrolling_col_tplink">
                <img
                  src={tplink}
                  alt='tplink'
                  className='companyLogo'
                />
              </div>

              <div className='scrolling_col_dlink'>
                <img
                  src={dlink}
                  alt='dlink'
                  className='companyLogo'
                />
              </div>

              <div className='scrolling_col_cisco'>
                <img
                  src={cisco}
                  alt='cisco'
                  className='companyLogo'
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default caseStudies 
