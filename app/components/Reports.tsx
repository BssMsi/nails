"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3DCard";
import { HiOutlineDocumentText } from "react-icons/hi";
import Image from "next/image";
import { NAILS_DATA } from "../lib/utils";

export const Reports = () => {
  return (
    <div className="min-h-screen bg-[#0E0E10] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-16">
          Reports
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {NAILS_DATA.resources.reports.map((report, index) => (
            <CardContainer key={index} className="inter-var w-full" containerClassName="py-12">
              <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[420px] rounded-xl p-6 border">
                {report.image && (
                  <CardItem
                    translateZ="100"
                    className="w-full h-48 rounded-lg overflow-hidden mb-4"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={report.image}
                        alt={report.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardItem>
                )}
                
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-200 mb-4"
                >
                  {report.title}
                </CardItem>
                
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-400 text-sm line-clamp-3"
                >
                  {report.description}
                </CardItem>
                
                <CardItem translateZ="100" className="absolute bottom-6 left-6 right-6">
                  <a
                    href={report.link}
                    className="block rounded-lg h-10 w-full bg-black dark:bg-white dark:text-black text-white text-sm font-bold transition-colors hover:bg-black/[0.8] dark:hover:bg-white/[0.8] text-center leading-10"
                  >
                    Read Report
                  </a>
                </CardItem>
                
                <CardItem
                  translateZ="40"
                  className="absolute top-6 right-6 text-neutral-400"
                >
                  <HiOutlineDocumentText className="w-6 h-6" />
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}; 