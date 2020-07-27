import { NextApiRequest, NextApiResponse } from 'next';

export const cities = [
  { 
    name: 'Bangkok',
    desc: 'The capital and most populous city of Thailand'
  },
  { 
    name: 'London',
    desc: 'The capital and largest city of England and the United Kingdom'
  },
  { 
    name: 'Paris',
    desc: 'The capital and most populous city of France'
  },
  { 
    name: 'Washington',
    desc: 'The capital city of the United States of America'
  },
  { 
    name: 'Ekaterinburg',
    desc: 'The fourth-largest city in Russia and the administrative centre of Sverdlovsk Oblast'
  }
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  setTimeout(() => {
    res.status(200).json(cities);
  }, 1000);
}