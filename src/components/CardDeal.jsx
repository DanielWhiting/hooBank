import {card} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum molestias suscipit exercitationem vitae laudantium. Asperiores laborum laboriosam eius amet iusto ab voluptatum, libero porro velit aut pariatur non, vitae minima?</p>
      <Button styles='mt-10' />
      </div>
  <div className={layout.sectionImg}>
    <img src={card} />

  </div>

    </section>
  )


export default CardDeal