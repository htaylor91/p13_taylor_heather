
export type FeatureItemProps = {
    /**
     * url or relative path to feature icon (e.g. "../assets/icon-chat.png")
     */
    iconSource: string,
    iconAlt: string,
    title: string,
    description: string
}

function FeatureItem({iconSource, iconAlt, title, description}: FeatureItemProps){
    return (
        <article className="feature-item">
            <img src={iconSource} alt={iconAlt} className="feature-icon" width={100} height={100}/>
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </article>
    )
}

export default FeatureItem