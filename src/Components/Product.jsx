
import { FaHeart } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Image from './Image';
import Flex from './Flex';


const Produck = ({ src,newP,data }) => {
  let navigate =useNavigate();

  

  return (
    <Link to={data}>
    <div
   
    
     className=" mx-auto w-[270px] md:w-[240px] lg:m-0 lg:w-[240px] xl:w-[300px]  2xl:w-[370px] group cursor-pointer ">
      <div className="  relative  ">
        {newP&&
        <div className=" bg-[#262626] inline-block py-[9px] px-8 absolute top-5 left-5">
          <h4 className=" text-white font-dmSans font-bold  ">New</h4>
        </div>
        }
        <Image className={` object-cover  h-[270px] md:h-[240px]  lg:h-[240px]
        xl:h-[300px]  2xl:h-[370px]`} src={src} />
        <div
          className=" absolute  bottom-0 left-0  duration-500 invisible opacity-0 group-hover:visible group-hover:opacity-100 w-[270px] md:w-[240px]  lg:w-[240px]
        xl:w-[300px]  2xl:w-[370px]  bg-white"
        >
          <Flex
            className={` gap-[15px] justify-end items-center mr-[15px] lg:mr-[30px] pt-[26px] lg:pb-5 pb-2`}
          >
            <p className="  font-dmSans text-[16px] text-secondary hover:text-primary hover:font-bold duration-300  ">
              Add to Wish List
            </p>
            <FaHeart />
          </Flex>
          <Flex
            className={` gap-[15px] justify-end items-center lg:mr-[30px] mr-[15px] lg:pb-5 pb-2`}
          >
            <p className="  font-dmSans text-[16px] text-secondary hover:text-primary hover:font-bold duration-300  ">
              { 'Compare' }
              
            </p>
            <FaRotate />
          </Flex>

          <div
            className={` flex gap-[15px] justify-end items-center mr-[15px] lg:mr-[30px] mr[15px] lg:pb-5 pb-2`}
           
          >
            <Link className="  font-dmSans text-[16px] text-secondary hover:text-primary hover:font-bold duration-300  "
            //  onClick={handleCart}
             >
              Add to Wish List
            </Link>
            <HiShoppingCart />
          </div>
        </div>
      </div>

      <Flex className={` mt-6 justify-between`}>
        <h5 className=" text-primary font-dmSans text-[20px] font-bold ">
          {"Basic Crew Neck Tee"}
          
        </h5>
        <h6 className=" font-dmSans font-[16px] leading-[30px] text-secondary  ">
        {" $44.00"}
         
        </h6>
      </Flex>
      <h6 className=" mt-[15px] font-dmSans font-[16px] leading-[30px] text-secondary  ">
      { 'Black' }
      </h6>
    </div>
    </Link>
  );
};

export default Produck