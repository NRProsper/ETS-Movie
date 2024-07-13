
const AirCard = (props) => {
    return(
        <div className="flex-center gap-[24px]">
            <img
                src={props.img}
                alt={props.title}
                style={{
                    width: "64px",
                    height: "103px",
                    borderRadius: "5px"
                }}
            />
            <div className="right">
                <span className="block">{props.title}</span>
                <span className="block">Series/S 2/EP 9</span>
                <span className="block">11/05/23</span>
            </div>
        </div>
    )
}

export default AirCard;