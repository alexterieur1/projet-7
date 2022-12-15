import style from './rating.module.scss'

function Rating(props){
    let tableauEtoiles = []
    let i=0
    while(i<props.rating){
        tableauEtoiles.push('1')
        i++
    }
    while(i<5){
        tableauEtoiles.push('0')
        i++
    }
    return(
        <div>
            {
            tableauEtoiles.map((element,index) =>{
                if(element === '1'){
                    return <svg className={style.svg} key={index} ><path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/></svg>
                }
                else{
                    return <svg className={style.svg} key={index}><path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/></svg>
                }
            })
            }
        </div>
    )
}

export default Rating