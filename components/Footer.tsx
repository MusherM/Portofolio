import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[80vw] w-full">
          Ready to <span className="text-purple">contact</span> me for further
          information?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos; talk about how we can work
          together.
        </p>
        <a href="mailto:musher@foxmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Musher
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(profile => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link}>
                <img
                  src={
                    (process.env.NEXT_PUBLIC_ASSET_PREFIX || '') + profile.img
                  }
                  alt={profile.id.toString()}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
