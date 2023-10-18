import CityPicker from '@/components/CityPicker'
import { Card, Divider, Subtitle, Text } from '@tremor/react'

export default function Home() {
  return (
    <div className= "flex min-h-screen flex-col items-center justify-center p-10 bg-gradient-to-tr from-[#394F68] to-[rgb(24,59,126)]">
      <Card className='max-w-3xl mx-auto'>
        <Text className='text-xl font-bold text-center mb-5'>Weather App </Text>
       <Divider className='my-5' />
       <Card className='text-lg bg-gradient-to-tr from-[#394F68] to-[#183B7E]'>
         <CityPicker />
       </Card>
          <Subtitle className='text-sm text-center mt-5'>
              Powered by NextJS13, Graphql, Tremor, Tailwind, and TypeScript.
          </Subtitle>
      </Card>
    </div>
  )
}
