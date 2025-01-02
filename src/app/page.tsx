function Card({
    price,
    type,
    className,
    priceClsName,
    isMedium = false,
}: {
    type: string;
    price: number;
    className: string;
    priceClsName: string;
    isMedium?: boolean;
}) {
    return (
        <div className={`@module:pricingTableComponent::card ${className}`}>
            <h6 className="@module:pricingTableComponent::type">{type}</h6>
            <div
                className={`@module:pricingTableComponent::priceContainer ${priceClsName}`}
            >
                <span className="@module:pricingTableComponent::priceSpan">
                    $
                </span>
                {price}
            </div>
            <h5 className="@module:pricingTableComponent::plan">PLAN</h5>
            <ul>
                <li className="@module:pricingTableComponent::list">
                    FREE Stickers
                </li>
                <li className="@module:pricingTableComponent::list">
                    FREE Delivery
                </li>
                <li className="@module:pricingTableComponent::list">
                    24/7 support
                </li>
            </ul>
            <button
                className={`@module:pricingTableComponent::subscribeButton ${
                    isMedium ? "@module:pricingTableComponent::bigLabel" : ""
                }`}
            >
                SUBSCRIBE
            </button>
        </div>
    );
}

export default function Home() {
    return (
        <section className="@module:pricingTableComponent::pricingTable">
            <Card
                className="@module:pricingTableComponent::basic"
                priceClsName="@module:pricingTableComponent::priceBasic"
                price={20}
                type="BASIC"
            />
            <Card
                className="@module:pricingTableComponent::medium"
                priceClsName="@module:pricingTableComponent::priceMedium"
                price={50}
                type="MEDIUM"
                isMedium
            />
            <Card
                className="@module:pricingTableComponent::premium"
                priceClsName="@module:pricingTableComponent::pricePremium"
                price={100}
                type="PREMIUM"
            />
        </section>
    );
}
