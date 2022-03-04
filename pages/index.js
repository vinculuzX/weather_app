import Layout from '../components/layout'
import WheatherPage from './weather'

export default function Home() {
  return (
    <Layout>
      <h1 className='text-3xl'>Wheather App</h1>
      <div>
        <WheatherPage />
      </div>
    </Layout>
  )
}
