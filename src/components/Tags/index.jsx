import './Tags.scss'

function tag(props) {
    return (
        <>
            {props.tag.map((e) => <p className='tag__element'>{e}</p>)}
        </>
    )
}

export default tag