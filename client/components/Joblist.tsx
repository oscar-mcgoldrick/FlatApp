import { useEffect, useState } from "react"
import { getJobListAPI } from "../apis/joblists"

export default function Finances() {
  const [activeJobList, setActiveJobList] = useState([] as string[])
  const jobList = await getJobListAPI()
  console.log(jobList)

  return (
    <h3>Job List TING</h3>
  )
}