import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './servicesElement'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src='https://svgshare.com/i/R4m.svg' />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='https://svgshare.com/i/R4n.svg' />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform online anywhere in the world . </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='https://svgshare.com/i/R4Q.svg' />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that return 5% cash back. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
