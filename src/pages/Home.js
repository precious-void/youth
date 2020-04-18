import React from 'react';
import Header from 'components/Header';
import AdditionalContent from 'components/AdditionalContent';

export default class Home extends React.Component {
    render() {
        return (
            <div className="main-wrapper red-bg theme-light">
                <div className="main-wrapper__column">
                    <Header />
                    <div className="main-wrapper__content">
                        <h2>Когда возник профсоюз?</h2>
                        <p>
                            Идея Профсоюза появилась у членов Инициативной группы ВШЭ ПРОТИВ ЦЕНЗУРЫ после принятия Ученым советом новых поправок к Правилам
                            внутреннего распорядка и Порядку поддержки студенческих организаций и студенческих инициатив.{' '}
                        </p>
                    </div>
                    <AdditionalContent />
                </div>
            </div>
        );
    }
}
