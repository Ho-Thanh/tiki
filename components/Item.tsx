

const Item = ({items}) => {
    return (
        <div className=''>
            {items.map((item) =>(
            <a className="mx-2 text-white" key={item.id}
                href={item.link}>
                {item.title}
            </a>
            ))}
        </div>
    )
}

export default Item
