import React from 'react'
import ServicePage from '@/components/ServicePage'
import { individualTherapy } from '@/data'

const IndividualCounseling = () => {
  return (
    <ServicePage {...individualTherapy} />
  )
}

export default IndividualCounseling