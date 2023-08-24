"use client";

import members from "@/Data/members";
import projects from "@/Data/projects";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { BsCheckLg } from "react-icons/bs";
import clients from "@/Data/client";
import ScrollTrigger from "react-scroll-trigger";

const Member = () => {
  const [count, setCount] = useState(false);
  const [member, setMember] = useState(null);
  const [project, setproject] = useState(null);
  const [client, setclient] = useState(null);

  useEffect(() => {
    members.map((item, i) => {
      setMember(i);
    });
  });

  useEffect(() => {
    projects.map((item, i) => {
      setproject(i);
    });
  });

  useEffect(() => {
    clients.map((item, i) => {
      setclient(i);
    });
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="member-left">
              <Image
                alt="member"
                height={569}
                width={496}
                src="/img/member.webp"
              />
              <div className="member-left-info">
                <h3>5+ </h3>
                <h3> Year</h3>
                <p>Experience</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="member-right">
              <h2>
                We <span>Run</span> Agency <span>Smartly</span> With Our
                <span> Team </span>
                Member.
              </h2>
              <p className="mt-4 mb-4">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look.
              </p>
              <div className="member-list ">
                <p>
                  <BsCheckLg />
                  There are many variations of passages of.
                </p>
              </div>
              <div className="member-list ">
                <p>
                  <BsCheckLg />
                  There are many variations of passages of.
                </p>
              </div>
              <div className="member-list ">
                <p>
                  <BsCheckLg />
                  There are many variations of passages of.
                </p>
              </div>
              <div className="member-list ">
                <p>
                  <BsCheckLg />
                  There are many variations of passages of.
                </p>
              </div>

              <button className="mt-4 mb-4">Explore More</button>
              <div className="member-counter mt-4">
                <ScrollTrigger
                  onEnter={() => setCount(true)}
                  onExit={() => setCount(false)}
                >
                  {count && (
                    <div className="row">
                      <div className="col-md-4 member-counter-item">
                        <h4>
                          <CountUp
                            duration={3}
                            start={0}
                            end={member}
                            suffix="+"
                          />
                        </h4>
                        <p>Team Members</p>
                      </div>
                      <div className="col-md-4 member-counter-item">
                        <h4>
                          <CountUp duration={3} start={0} end={project} />
                        </h4>
                        <p>Completed Projects</p>
                      </div>
                      <div className="col-md-4 member-counter-item">
                        <h4>
                          <CountUp
                            duration={3}
                            start={0}
                            end={client}
                            suffix="+"
                          />
                        </h4>
                        <p>Satisfied Clients</p>
                      </div>
                    </div>
                  )}
                </ScrollTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
