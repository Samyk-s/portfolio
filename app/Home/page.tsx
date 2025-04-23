"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

// React Icons
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { FaReact, FaHtml5, FaGithub, FaHandshake } from "react-icons/fa";
import { MdOutlineBugReport, MdDashboardCustomize } from "react-icons/md";

import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "flowbite-react";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center md:items-start mt-[50px] p-6 w-full"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-black/60 z-0"
        style={{ backgroundImage: "url('/bgimg.png')" }}
      />
      <div className="relative z-10 flex flex-col md:flex-row items-center ml-[50px] md:items-start w-full px-[20px] md:px-[50px]">
        {/* Profile Image */}
        <div className="w-60 h-60 relative mb-4 mt-[150px] md:mb-0 md:mr-8 rounded-full overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="text-center md:text-left mt-[10px] ml-[150px] bg-opacity-0 p-6 rounded w-[950px]">
          <h1 className="text-4xl font-bold mb-7 ml-[150px] text-white">
            Samyak Bajracharya
          </h1>

          <p className="text-2xl font-semibold mb-4 text-white">
            FrontEnd Engineer | So what can I do for you?
          </p>

          <Timeline>
            <TimelineItem>
              <TimelinePoint icon={HiOutlineDeviceMobile} />
              <TimelineContent>
                <TimelineBody className="text-white">
                  UI/UX Specialist — Crafting clean, modern, mobile-first designs that just feel right.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelinePoint icon={FaReact} />
              <TimelineContent>
                <TimelineBody className="text-white">
                  React | Next.js Developer — Building blazing-fast, fully responsive websites that actually convert.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelinePoint icon={MdOutlineBugReport} />
              <TimelineContent>
                <TimelineBody className="text-white">
                  End-to-End Problem Solver — From design to code to debug — powered by caffeine and a killer playlist.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelinePoint icon={FaHtml5} />
              <TimelineContent>
                <TimelineBody className="text-white">
                  SEO-Conscious Frontend — Writing semantic HTML and optimized CSS with performance and discoverability in mind.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelinePoint icon={FaGithub} />
              <TimelineContent>
                <TimelineBody className="text-white">
                  Version Control Pro — Git, GitHub, API integrations — clean commits, smooth workflows, no drama.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelinePoint icon={FaHandshake} />
              <TimelineContent>
                <TimelineBody className="text-white">
                  Let’s Connect — Whether it’s tech talk, startup ideas, football banter, or a spontaneous collab — I’m in.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelinePoint icon={MdDashboardCustomize} />
              <TimelineContent>
                <TimelineBody className="text-white">
                  Versatile Builder — Landing pages, dashboards, e-commerce sites — I bring ideas to life with speed and style.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

          <div className="flex justify-center md:justify-start mt-6">
            <a
              href="/SamyakBajracharya_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-2 ml-[300px] text-white bg-blue-600 hover:bg-red-700 rounded transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faCloudArrowDown}
                bounce
                style={{ color: "white" }}
              />
              My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
