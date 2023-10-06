import request from "superagent";

export async function getJobListAPI() {
  const jobList = await request.get('/api/v1/joblists')
}