import React from 'react'
import BgLineOurServices from '../../assets/images/line-our-services.svg'
import OurServicesBox from './OurServicesBox'
import ButtonTransparent from '../../assets/BtnFunctions/ButtonTransparent'

const OurServices = () => {
  return (
    <section className="our-services">
        <img className="design-line" src={BgLineOurServices} alt="Design line"/>

        <div className="container">

            <div className="caption">
                <h4>Our Services</h4>
                <h2>We Provide The Best<br/>Service For Consulting</h2>
            </div>

            <div className="all-boxes">

                <OurServicesBox 
                    title='Business Advice'
                />
                <OurServicesBox 
                    title='Business Advice'
                />
                <OurServicesBox 
                    title='Business Advice'
                />
                <OurServicesBox 
                    title='Business Advice'
                />
            </div>

            <div className="button">
                <ButtonTransparent text="Brows Services"/>
            </div>
        </div>
    </section>
  )
}

export default OurServices