"use client";

import Image from "next/image";

const Agency = () => {
  return (
    <>
      <div className="container agency">
        <div className="row">
          <div className="col-lg-6">
            <div className="agency-left">
              <h2>
                I <span>Run</span> Agency <span>Smartly</span> With My
                <span> Team </span> Member.
              </h2>
              <p className="mt-4 mb-4">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look.
              </p>
              <button>Say Hello</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="agency-right">
              <div className="row ">
                <div className="col-lg-10 agency-card">
                  <div className="agency-card-logo ms-3 me-4">
                    <Image
                      width={64}
                      height={64}
                      src="/img/Group1.png"
                      alt="agency"
                    />
                  </div>
                  <div>
                    <h3>Web Development</h3>
                    <p className="pe-5">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority.
                    </p>
                  </div>
                </div>
              </div>

              {/* row 2 */}
              <div className="row mt-5">
                <div className="col-lg-10 agency-card">
                  <div className="agency-card-logo ms-3 me-4">
                    <Image
                      width={64}
                      height={64}
                      src="/img/Group2.png"
                      alt="agency"
                    />
                  </div>
                  <div>
                    <h3>Product Design & Development</h3>
                    <p className="pe-5">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority.
                    </p>
                  </div>
                </div>
              </div>
              {/* row 3 */}
              <div className="row mt-5">
                <div className="col-lg-10 agency-card">
                  <div className="agency-card-logo ms-3 me-4">
                    <Image
                      width={64}
                      height={64}
                      src="/img/Group3.png"
                      alt="agency"
                    />
                  </div>
                  <div>
                    <h3>Graphic Design</h3>
                    <p className="pe-5">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agency;
