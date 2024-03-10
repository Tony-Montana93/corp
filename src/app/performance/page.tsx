import React from 'react'
import performanceImg from '/public/performance.jpg'
import Hero from '@/components/hero'

const PerformancePage = () => {
  return (
    <Hero imgData={performanceImg} imgAlt='welding' title='We make high performance vehicles'/>
  )
}

export default PerformancePage