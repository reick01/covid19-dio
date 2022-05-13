import React, { memo} from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../Components'
import Card from './Card'

function Board({data}){
    const{ cases,todayDeath, recovered, deaths ,todaycases} = data

    const getValue = (value) => value ? value : <skeleton variant = "text" width={182} heigth={60} />


    return(
        <Grid container spacing = {4}>
            <Gri item xs={ 12} md={3}>
                <card value={getByDisplayValue(cases)} label= "Total de casos " color='#5d78ff' />
            </Gri>
            <Gri item xs={ 12} md={3}>
                <card value={getByDisplayValue(todayDeath)} label= "óbitos hoje " color='#F7b829' />
            </Gri>
            <Gri item xs={ 12} md={3}>
                <card value={getByDisplayValue(todaycases)} label= "Casos Hoje " color='#000' />
            </Gri>
            <Gri item xs={ 12} md={3}>
                <card value={getByDisplayValue(deaths)} label= "total de mortos " color='#E95078' />
            </Gri>
            <Gri item xs={ 12} md={3}>
                <card value={getByDisplayValue(recovered)} label= "total de Recuperados " color='#67C887' />
            </Gri>

        </Grid>
    )
} 

export default memo(Board)