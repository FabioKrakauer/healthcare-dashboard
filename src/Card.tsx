interface ICardProps {
    value: string;
    icon: string;
    featureName: string;
    unit: string;
    color: string;
}
const Card = (props: ICardProps) => {

    const classCard = "card text-white m-3 w-2 " + props.color;
    const iconClass = "fa-4x " + props.icon;
    return (
        <div className={classCard}>
            <h3 className="text-center mt-2 w-700px">{props.featureName}</h3>
            <div className="d-flex justify-content-around align-items-center">
            <i className={iconClass}></i>
            <p className="text-white text-end"><span className="display-3">{props.value}</span>{props.unit}</p>
        </div>
    </div>
    )
}
export default Card;