import individual from './public/images/individual.jpg'
import couples from './public/images/couples.jpg'
import family from './public/images/family.jpg'
import assessments from './public/images/assessments.jpg'
import consultation from './public/images/consultation.jpg'

export const navItems = [
  { link: 'Home', path: '/#hero' },
  { link: 'About Me', path: '/about' },
  {
    link: 'Services',
    sublinks: [
      { link: 'Individual Therapy', path: '/individual-therapy' },
      { link: 'Couples Therapy', path: '/couples-therapy' },
      { link: 'Family Therapy', path: '/family-therapy' },
      {
        link: 'Psychological Assessments and Evaluations',
        path: '/psychological-assessments',
      },
      { link: 'Consultation', path: '/consultation' },
      { link: 'Supervision', path: '/supervision' },
    ],
  },
  { link: 'Contact', path: '/contact' },
]

export const footerLinks = [
  {
    link: 'About Me',
    path: '/about',
  },
  {
    link: 'Individual Therapy',
    path: '/individual-therapy',
  },
  {
    link: 'Couples Therapy',
    path: '/couples-therapy',
  },
  {
    link: 'Family Therapy',
    path: '/family-therapy',
  },

  {
    link: 'Consultation',
    path: '/consultation',
  },
  {
    link: 'Supervision',
    path: '/supervision',
  },
  {
    link: 'Psychological Assessments and Evaluations',
    path: '/psychological-assessments',
  },
  {
    link: 'Contact',
    path: '/contact',
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

export const individualTherapy = {
  name: 'Individual Therapy',
  slogan: 'A Happier, Healthier You',
  description:
    "Individual therapy is a one-on-one comfortable, supportive, and non-judgmental space. Here I offer a highly personalized approach tailored to each clients' individual needs to help them attain the personal growth they’re striving for, utilizing the best evidence-based treatment practices. At ReNEWed Psychological and Consultation Services, I do not believe in a standard approach to treatment. I do not approach each individual the same, as no individual has the same journey that has them to our door. I treat my clients using the best clinical based practices which include CBT, DBT, motivational interviewing, solution-focused psychotherapy and psycho-education. All of these techniques are supported with holistic therapy. I believe in exploring all avenues of treatment to aid in the complete experience of cultivating skills to thrive and be whole.",
  image: individual,
}

export const couplesTherapy = {
  name: 'Couples Therapy',
  slogan: 'Quality Care',
  description:
    'In my therapy sessions, we’ll work to solve current problems and improve positive thinking and behavior. I will help you “re-frame” your reactions and provide you with valuable tools to cope with life’s obstacles. I’m confident you’ll find my personalized Couples Therapy beneficial and inspirational. Get in touch to book an appointment.',
  image: couples,
}

export const psychologicalAssessments = {
  name: 'Psychological Assessments and Evaluations',
  slogan: 'Here For You',
  description:
    'Assessments are used for a more in-depth view of a person and how to better help them. They are used to determine the exact nature and extent of a person’s mental illness. A variety of tools are used to help gain insight into a person’s personality without judgment, which are then used to help understand and manage issues or symptoms impacting a person’s life, and determine the course of treatment.',
  image: assessments,
}

export const familyTherapy = {
  name: 'Family Therapy',
  slogan: 'Maintain a Happy Home',
  description:
    'Family therapy is designed to address specific issues that affect the cohesion of the family, such as major life transitions or mental health conditions. Families can benefit from therapy when they experience any stressful event by aiming to promote understanding and collaboration among family members.',
  image: assessments,
}