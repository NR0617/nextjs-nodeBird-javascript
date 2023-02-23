import React, { useState } from "react";
import propTypes from "prop-types";
import Slick from "react-slick";
import * as Style from "./styles";

const ImagesZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <Style.Overlay>
            <Style.Global />
            <Style.Header>
                <h1>상세이미지</h1>
                <Style.CloseBtn onClick={onClose}>X</Style.CloseBtn>
            </Style.Header>
            <Style.SlickWrapper>
                <div>
                    <Slick
                        initialSlide={0}
                        beforeChange={(slide) => setCurrentSlide(slide)}
                        infinite
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {images.map((el) => (
                            <Style.ImageWrapper key={el.src}>
                                <img src={el.src} alt={el.src} />
                            </Style.ImageWrapper>
                        ))}
                    </Slick>
                    <Style.Indicator>
                        <div>
                            {currentSlide + 1} /{images.length}
                        </div>
                    </Style.Indicator>
                </div>
            </Style.SlickWrapper>
        </Style.Overlay>
    );
};

ImagesZoom.propTypes = {
    images: propTypes.arrayOf(propTypes.object).isRequired,
    onClose: propTypes.func.isRequired,
};

export default ImagesZoom;
