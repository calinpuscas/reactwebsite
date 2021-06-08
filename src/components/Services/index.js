import React from "react";
import Icon1 from "../../images/img2.jpg";
import Icon2 from "../../images/img3.jpg";
import Icon3 from "../../images/img4.jpg";

import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            animi rerum quidem rem minima qui, commodi magni aperiam ab veniam.
            Voluptate quos quas vitae quae est eos sed, quasi, quibusdam iste
            corrupti fugiat nobis mollitia adipisci a accusantium dolore
            veritatis distinctio quo.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual Teller</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            animi rerum quidem rem minima qui, commodi magni aperiam ab veniam.
            Voluptate quos quas vitae quae est eos sed, quasi, quibusdam iste
            corrupti fugiat nobis mollitia adipisci a accusantium dolore
            veritatis distinctio quo.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Online Satisfaction</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            animi rerum quidem rem minima qui, commodi magni aperiam ab veniam.
            Voluptate quos quas vitae quae est eos sed, quasi, quibusdam iste
            corrupti fugiat nobis mollitia adipisci a accusantium dolore
            veritatis distinctio quo.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
