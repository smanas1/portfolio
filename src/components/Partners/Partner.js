"use client";

import Image from "next/image";

const Partner = () => {
  return (
    <>
      <div className="container">
        <div className="partner">
          <div>
            <h2>Reputed Partners</h2>
          </div>
          <div>
            <div className="partner-wrapper">
              <div className=" partner-list " md={{ span: 4, offset: 4 }}>
                <Image
                  src="/Group 40.png"
                  height={65}
                  width={65}
                  alt="partner"
                />
                <h3>Happy Mart</h3>
              </div>
              <div className=" partner-list">
                <Image
                  src="/Group 9870.png"
                  height={65}
                  width={65}
                  alt="partner"
                />
                <h3>Lori Cracker</h3>
              </div>
              <div className=" partner-list">
                <Image
                  src="/Group 41.png"
                  height={65}
                  width={65}
                  alt="partner"
                />
                <h3>Emad Fashion</h3>
              </div>
              <div className=" partner-list">
                <Image
                  src="/Group 9872.png"
                  height={65}
                  width={65}
                  alt="partner"
                />
                <h3>Docco Semims</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
