import {} from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'
import { EstatDiv } from '../css/estilo';

function Estatistica(){
    
    const data =[
        {produto:1, valor: 1000},
        {produto:2, valor: 900},
        {produto:3, valor: 800},
        {produto:4, valor: 700},
    ];
    
    return(
        <EstatDiv>
        <div className='estatistica'>
            <VictoryChart
            theme={VictoryTheme.material}
            
            //padding
            domainPadding={30}          
            >
            <VictoryAxis
                tickValues={[1,2,3,4]}
                tickFormat={["produto 1","produto 2","produto 3","produto 4"]}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x)=>(`R$ ${x/100}`)}
            
            />

                

                <VictoryBar
                data={data}
                x="produto"
                y="valor"

                />

            </VictoryChart>

        </div>
        </EstatDiv>
    )
}

export default Estatistica