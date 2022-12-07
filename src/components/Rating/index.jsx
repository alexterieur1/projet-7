import './Rating.scss'

function Rating(props){
    let tableauEtoiles = []
    let i=0
    while(i<props.rating){
        tableauEtoiles.push(`true`)
        i++
    }
    while(i<5){
        tableauEtoiles.push(`false`)
        i++
    }
    console.log(tableauEtoiles)
    return(
        <div>
            {
            tableauEtoiles.map((element) =>{
                if(element === 'true'){
                    return <svg className='true'><path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/></svg>
                }
                else{
                    return <svg><path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/></svg>
                }
            })
            }
        </div>
    )
}

export default Rating