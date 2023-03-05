import {Row, Col} from 'react-bootstrap';
import QuoteArea from "../../../components/quote/Quote"
import PricingCardUI from "../../../components/pricing_card_ui/PricingCardUi"
import Styles from './QuoteSection.module.scss'


const QuoteSection = () => {
  return(
    <section className={Styles.Container}>
 <Row className={Styles.row}>
<Col className={Styles.col}>
 <h1 className={Styles.Title}>
 Request A Quote
 </h1>
    <p className={Styles.subtext}>Please complete the form below, to request a quote, and we'll be in touch. Or you can call us 07032226012 and our specialists will provide the necessary help!</p>
    
<QuoteArea/>
</Col>

<Col className={Styles.col}>
<PricingCardUI />
</Col>
</Row>
</section>
  )
}

export default QuoteSection