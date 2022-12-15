import style from './tags.module.scss'

function tag(props) {
    return (
        <>
            {props.tag.map((element, index) => <p key={index} className={style.tag__element}>{element}</p>)}
        </>
    )
}

export default tag