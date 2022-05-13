import React, { memo, useEffect, useCallback, useState} from "react";
// aquivo react
import Api from '../../Api'
import Board from './Components/Board'
import Panel from './components/Panel'
import { containerStyled} from './style'



function Main() {
    const [data, setData] = useState({})
    const [country, setCountry] = useState ('brasil')
    const upadateAt = new Date().toLocaleString()

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    const handleChange = ( {target}) => {
        const country = target.value
        setCountry(country)
    }

    return(
       <containerStyled>
           <div className="mb-2">
            <Panel
                data={data}
                upadateAt={upadateAt}
                onChange={handleChange}
                country={country}
                getCovidData={getCovidData}
            />
           </div>
           <Board data={data} />

        </containerStyled>
    )
}

export default memo (Main)