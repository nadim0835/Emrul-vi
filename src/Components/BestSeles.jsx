import Container from "./Container";

import Flex from "./Flex";
import bimg1 from "../assets/ib1.png";
import bimg2 from "../assets/ib2.png";
import bimg3 from "../assets/ib3.png";
import bimg4 from "../assets/ib4.png";
import Produck from './Product';
import Single1 from "./Single1";
import { Link } from 'react-router-dom';

export const BestSeles = () => {
  return (
    <section className="mt-[30px]  overflow-x-hidden">
      <Container>
        <h2   className=" mb-[30px] ml-9 lg:ml-0 lg:mb-[48px] font-dmSans font-bold text-[39px] text-primary ">
          Our Products
        </h2>
        <Flex
        
          className={` flex-col  md:flex-row md:justify-between  md:flex-wrap `}
        >
          <Produck src={bimg1} newP={true}  data={`/singlaProuct1`}   />
          <Produck src={bimg2} data={`/singlaProuct2`} />
          <Produck src={bimg3} data={`/singlaProuct3`} />
          <Produck src={bimg4} data={`/singlaProuct4`} />
          <Produck src={bimg1} newP={true}  data={`/singlaProuct5`}   />
          <Produck src={bimg2} data={`/singlaProuct6`} />
          <Produck src={bimg3} data={`/singlaProuct7`} />
          <Produck src={bimg4} data={`/singlaProuct8`} />
         
        </Flex>
        
      </Container>
    </section>
  );
};
