import React from 'react'
import ServicePage from '@/components/ServicePage'
import { couplesTherapy } from '@/data'

const CouplesTherapy = () => {
  return (
    <ServicePage {...couplesTherapy} />
  )
}

export default CouplesTherapy