"use client"
import { Country, City }  from 'country-state-city';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Select from 'react-select'
import { GlobeIcon } from '@heroicons/react/solid'

type option ={
    value: {
        latitude: string;
        longitude: string;
        isoCode: string;
    };
    label: string;
} | null;

type cityOption ={
    value: {
        latitude: string;
        longitude: string;
        countryCode: string;
        name: string;
        stateCode: string;
    };
    label: string;
} | null;

const options = Country.getAllCountries().map(country => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode,
    },
    label: country.name
}))

const CityPicker = () => {
   const [selectedCountry, setSelectedCountry] = useState<option>(null)
   const [selectedCity, setSelectedCity] = useState<cityOption>(null)
   const router = useRouter()

   const handleSelectedCountry = (option: option) =>{
       setSelectedCountry(option);
       setSelectedCity(null);
    }
    const handleSelectedCity = (option: cityOption) =>{
        const { name, stateCode } = option?.value! 
        setSelectedCity(option);
        router.push(`/location/${name}/${option?.value.latitude}/${option?.value.longitude}`)
    }
    const cities = selectedCountry?.value.isoCode
    ? City.getCitiesOfCountry(selectedCountry?.value.isoCode)?.map(
        cityPicked => ({
          value: {
            latitude: cityPicked.latitude!, 
            longitude: cityPicked.longitude!,
            countryCode: cityPicked.countryCode,
            name: cityPicked.name,
            stateCode: cityPicked.stateCode
          },
          label: cityPicked.name
        })
     )
    : [];
  return (
    <div className='space-y-4'>
        <div className="space-y-2 ">
            <div className='flex items-center space-x-2 text-white/80'>
                <GlobeIcon className='h-5 w-5 text-white ' />
                <label htmlFor="country">Country</label>
            </div>
            <Select 
                className='text-black'
                value={selectedCountry}
                onChange={handleSelectedCountry}
                options={options} />
        </div>
        {selectedCountry && 
        <div className="space-y-2">
            <div className='flex items-center space-x-2 text-white/80'>
                <GlobeIcon className='h-5 w-5 text-white ' />
                <label htmlFor="country">City</label>
            </div>
            <Select 
                className='text-black'
                value={selectedCity}
                onChange={handleSelectedCity}
                options={cities} 
                getOptionLabel={(option) => {
                    if(option.value) {
                      return `${option.label}, ${option.value.stateCode}`
                    }
                      return option.label;
                  }}
                />
        </div>}
    </div>
  )
}

export default CityPicker