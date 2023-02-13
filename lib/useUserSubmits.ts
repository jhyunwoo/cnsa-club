import axios from 'axios'
import useSWR from 'swr'

export default function useUserSubmits() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const { data, error } = useSWR('/api/submits', fetcher)
  return {
    userSubmits: data,
    userSubmitsError: error,
  }
}
