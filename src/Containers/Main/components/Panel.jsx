import React, { memo } from 'react'
import RefreshIcon from '../../../Assets/Images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem} from '../../../Components'
import COUNTRIES from '../../../Commons/Constants/Countries'
import { CardPanelContentStyled, ItemStyled} from '../components/Style'

const navigatorHasShare = navigator.share

function Panel ({ updateAt, onChange, data, country, getCovidData}){
    const { cases, recovered, deaths, todayCases, todayDeaths} = data

    const renderCountries = (contry, index) => {
        <MenuItem key={`country-${index}`} value={country.value}>
            <Itemstyled>
            <div>{country.label}</div>
            <img src = {country.flag} alt={`País-${country.label}`} /> 
            </Itemstyled>
        </MenuItem>
    }

    const textCovid19 = `País: ${country}`

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo = () => {
        navigator.share({
            tigle: `Dados do Covid - ${country}`,
            text: textCovid19,
            url:'https://covid19dio.netlify.app/'
        })
    }



    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant ="container" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    )

    return(
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component = "span" color="primary">COVID</Typography>
                    <Typography variant="h5" component = "span" color="primary">Painel Coronavirus</Typography>
                    <Typography variant="h5" component = "span" color="primary">Atualizado em: {updateAt}</Typography>
                    <div className='pt-2'>
                        <select onChange={onchange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </select>
                    </div>
                </div>
                {navifatoHasShare ? renderShareButton : renderCopyButton}
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel)