import { useState } from "react";

export default function PizzaBlock({
    category,
    title,
    price,
    imageUrl,
    sizes,
    types,
}) {
    const typeNames = ["тонкое", "традиционное"];
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const setActiveFunc = (val) => {
        setActiveType(val);
    };

    return (
        <div className="pizza-block-wrapper">
            <div className="pizza-block">
                <h4 className="pizza-block__title">{title}</h4>
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
                <div className="pizza-block__selector">
                    <ul>
                        {types.map((val, i) => (
                            <li
                                key={val}
                                className={activeType === i ? "active" : ""}
                                onClick={() => setActiveFunc(val)}
                            >
                                {typeNames[val]}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {sizes.map((val, i) => (
                            <li
                                key={val}
                                className={activeSize === i ? "active" : ""}
                                onClick={() => setActiveSize(i)}
                            >
                                {val} см
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {price} ₽</div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>0</i>
                    </div>
                </div>
            </div>
        </div>
    );
}
