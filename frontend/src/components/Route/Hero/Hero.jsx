import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat bg-right ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/arrangement-yellow-tools-with-copy-space_23-2148393065.jpg?t=st=1716752270~exp=1716755870~hmac=36c87e415bef334a102b188db547ac6a2b7846937bf693e60b5b90abbbc47c6a&w=826)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
      Hardware Heaven  <br></br> The complete hardware shopiee
          
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Welcome to Hardware Heaven, your one-stop destination for quality hardware tools! From power drills to precision measuring instruments, we've got everything you need to tackle your projects with confidence.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
