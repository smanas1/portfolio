"use client";
import sucessData from "@/Data/sucessData";
import { useState } from "react";

const Sucess = () => {
  const [apState, changeState] = useState({
    activeObj: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    title: "Get So Many AwardsIn 5 years",
    des: " There are many variations of passages of Lorem Ipsum available, but the majority.",
  });

  const toggleActive = (item, index) => {
    changeState({
      ...apState,
      activeObj: apState.objects[index],
      title: item.title,
      des: item.des,
    });
  };

  function toggleActiveStyle(index) {
    if (apState.objects[index] == apState.activeObj) {
      return "active";
    } else {
      return "inactive";
    }
  }

  return (
    <>
      <div className="container sucess">
        <div className="row">
          <div className="col-lg-6">
            <div className="sucess-title ">
              <h3 className=" ">
                Failure is The Power that Gives <span>Success</span>
              </h3>
            </div>
            <div className="row gap-3 mt-5">
              {sucessData.map((item, i) => (
                <div
                  onClick={() => toggleActive(item, i)}
                  className={`col-lg-5  rounded-3 sucess-items px-3 py-4 ${toggleActiveStyle(
                    i
                  )}`}
                  key={i}
                >
                  <h3>{item.title}</h3>
                  <p>{item.des}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 sucess-left">
            <div className="sucess-left-p">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised.
              </p>
              <div className="mt-5">
                <button> Download Now</button>
              </div>
            </div>
            <div className="sucess-left-data ">
              <h1>{apState.title}</h1>
              <p className="mt-4">{apState.des}</p>
            </div>
            <button className="mt-4 mb-4">Visit Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sucess;
