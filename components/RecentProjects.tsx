import React from 'react'
import { projects } from '../data/index'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of {''}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[30rem] h-[25rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[22rem] h-[15rem] mb-15">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img
                    src={
                      (process.env.NEXT_PUBLIC_ASSET_PREFIX || '') + '/bg.png'
                    }
                    alt="bg-img"
                  />
                </div>
                <img
                  src={(process.env.NEXT_PUBLIC_ASSET_PREFIX || '') + img}
                  alt={title}
                  className="z-10 absolute bottom-0 w-11/12 rounded-lg"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`
                      }}
                    >
                      <img
                        src={
                          (process.env.NEXT_PUBLIC_ASSET_PREFIX || '') + icon
                        }
                        alt={icon}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>
                <Link href={link}>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
