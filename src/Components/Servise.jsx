


import { FaShippingFast } from "react-icons/fa";
import { GiAnticlockwiseRotation } from "react-icons/gi";


import { TfiSupport } from "react-icons/tfi";
import Container from './Container';
import Flex from './Flex';


const Servise = () => {
  return (
    <section className=" py-[30px] border border-[#F0F0F0]">
      <Container>
        <Flex className={` items-center justify-between`}>
          <div className=" flex gap-[17px] items-center">
          <TfiSupport />
            <p className="font-dmSans text-[16px] ">Life Time Support</p>
          </div>
          <div className=" flex gap-[17px] items-center">
            <FaShippingFast />

            <p className="font-dmSans text-[16px] ">Free Shipping</p>
          </div>
          <div className=" flex gap-[17px] items-center">
            <GiAnticlockwiseRotation />
            <p className="font-dmSans text-[16px] ">Return Policy in 3 Days</p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Servise;
