import React from 'react'
import ServicePage from '@/components/ServicePage'
import { psychologicalAssessments } from '@/data'

const PsychologicalAssessments = () => {
  return <ServicePage {...psychologicalAssessments} />
}

export default PsychologicalAssessments
