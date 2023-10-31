import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

export default function SearchScreen() {
    const [searchApi,results] = useResults()
    console.log(results)
    const  filterPrice = (price)=>{
        return results.filter((result)=>{
            return result.price === price 
        })
    }
  return (
    <View>
      <SearchBar/>
      <ResultsList title="Ucuz" results={filterPrice("₺")} />
      <ResultsList title="Orta" results={filterPrice("₺₺")} />
      <ResultsList title="Pahalı" results={filterPrice("₺₺₺")} />
    </View>
  )
}

const styles = StyleSheet.create({})