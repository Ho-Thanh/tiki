const Link = ({childs}) => {
    return (
        <div className='flex flex-col'>
            {childs.map((child)=>(
                <a rel="noreferrer" href={child.link} className='my-2 text-xs' target="_blank" key={child.id}>{child.text}</a>
            ))}
            
        </div>
    )
}

export default Link
