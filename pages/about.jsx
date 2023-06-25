import React from 'react'
import headshot from '../public/images/headshot.webp'
import Image from 'next/image'

const about = () => {
  return (
    <section id="about" className="bg-[#044C44] pt-[250px] items-center py-24">
      <div className="flex w-full flex-col lg:flex-row justify-center items-center max-w-[1400px] mx-auto">
        <div className="lg:w-1/2">
          <Image priority src={headshot} className="object-cover w-full h-full" />
        </div>
        <div className="w-full lg:w-5/12 px-14 py-12 lg:-ml-24 text-white lg:text-black lg:bg-white h-[800px]">
          <h2 className="text-5xl font-bold mb-12 tracking-tighter text-[#BF8EE8] text-center">
            About Me
          </h2>
          <p className="text-2xl text-center font-light leading-12">Dr. Tiffany Godwin</p>
          <p className="text-xl font-light mb-12 text-center leading-12">Founder/CEO</p>
          <p className="leading-8">
            Welcome! I am a Licensed Psychologist who earned a PhD in Clinical
            Psychology in 2014. I have over 15 years experience working in an
            array of settings, including community mental health, school
            settings, group homes, residential treatment, outpatient settings,
            correctional facilities, and private practice. I work with children,
            adolescents and adults providing individual, group, family and
            couple’s therapy, as well as psychological assessments. I have
            experience working with a variety of clientele. My clinical training
            includes, Eye Movement Desensitization and Reprocessing (EMDR), play
            therapy, Applied Behavior Analysis (ABA), Motivational Interviewing,
            Dialectical Behavioral Therapy (DBT), and working with Military
            families. I am a Board Certified Tele-Mental Health provider,
            trained in providing virtual services to meet your needs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default about