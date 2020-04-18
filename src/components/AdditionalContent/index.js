import React from 'react';
import { ReactComponent as Fire } from 'img/fire.svg';
import './additionalContent.scss';

const AdditionalContent = () => (
    <div className="additional-content-wrapper">
        <div className="additional-content__button-group">
            <button>ВСТУПИТЬ</button>
            <button>ПОДДЕРЖАТЬ</button>
        </div>
        <div className="additional-content__icon-button">
            <Fire />
        </div>
    </div>
);

export default AdditionalContent;
