import FeatureItem from "./FeatureItem"
import type { FeatureItemProps } from "./FeatureItem"
import chatIcon from "../../assets/icon-chat.png"
import moneyIcon from "../../assets/icon-money.png"
import securityIcon from "../../assets/icon-security.png"
import '../../styles/Features.css'

const features: FeatureItemProps[] = [
    {
        iconSource: chatIcon,
        iconAlt: "Chat Icon",
        title: "You are our #1 priority",
        description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
        iconSource: moneyIcon,
        iconAlt: "Money Icon",
        title: "More savings means higher rates",
        description: "The more you save with us, the higher your interest rate will be!"
    },
    {
        iconSource: securityIcon,
        iconAlt: "Security Icon",
        title: "Security you can trust",
        description: "We use top of the line encryption to make sure your data and money is always safe."
    }
]

function Features(){
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {features.map((feature, index) => (
                <FeatureItem
                    key={`feature-${index}`}
                    iconSource={feature.iconSource}
                    iconAlt={feature.iconAlt}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </section>
    )
}

export default Features