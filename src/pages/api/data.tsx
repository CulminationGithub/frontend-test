import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs';
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
//   const file = await fs.readFile(process.cwd() + '/src/app/data/coffee.json', 'utf8');
//   const data = JSON.parse(file)

    const csvFilePath=process.cwd() + '/src/app/data/coffee.csv'
    const csv=require('csvtojson')
    
    // Async / await usage
    const jsonArray=await csv().fromFile(csvFilePath);
  res.status(200).json(jsonArray)
}