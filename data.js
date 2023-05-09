import individual from './public/images/individual.jpg'
import couples from './public/images/couples.jpg'
import family from './public/images/family.jpg'
import assessments from './public/images/assessments.jpg'
import consultation from './public/images/consultation.jpg'

export const navItems = [
  { link: 'Home', path: '#' },
  { link: 'About Us', path: '#about-us' },
  { link: 'Services', path: '#services' },
  { link: 'Contact', path: '#contact' },
]

export const footerLinks = [
  {
    link: 'About Me',
    path: '/#about-me',
  },
  {
    link: 'Individual Counseling',
    path: '/#individual-counseling',
  },
  {
    link: 'Couples Therapy',
    path: '/#couples-therapy',
  },
  {
    link: 'Family Therapy',
    path: '/#family-therapy',
  },
  {
    link: 'Psychological Assessments and Evaluations',
    path: '/#psychologial-assessments',
  },
  {
    link: 'Consultation',
    path: '/#consultation',
  },
  {
    link: 'Supervision',
    path: '/#supervision',
  },
  {
    link: 'Contact',
    path: '/#contact',
  },
]

export const services = [
  {
    title: 'Individual Therapy',
    image: individual,
  },
  {
    title: 'Family Therapy',
    image: family,
  },
  {
    title: 'Couples Therapy',
    image: couples,
  },
  {
    title: 'Psychological Assessments and Evaluations',
    image: assessments,
  },
  {
    title: 'Consultations',
    image: consultation,
  },
]