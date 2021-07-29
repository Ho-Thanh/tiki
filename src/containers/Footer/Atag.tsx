const Atag = ({links}) => {
    return (
        <div className='grid grid-cols-2 py-3 justify-items-around'>
            {links.map((link)=>(
                <a href= {link.a} >
                    <img src={link.icon}  />
                </a>
            ))}
        </div>
    )
}

export default Atag
