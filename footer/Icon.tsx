const Icon = ({icons}) => {
    return (
        <div className='grid w-10/12 grid-cols-3 justify-items-center'>
            {icons.map((icon)=>(
                <img src={icon.img} className='w-10 h-10https://github.com/Ho-Thanh/tiki.gity'/>
            ))}
        </div>
    )
}

export default Icon
