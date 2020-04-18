import React from 'react';
import Header from 'components/Header';
import AdditionalContent from 'components/AdditionalContent';

export default class News extends React.Component {
    render() {
        return (
            <div className="main-wrapper gray-bg theme-dark">
                <div className="main-wrapper__column">
                    <Header minified />
                    <div className="main-wrapper__content">
                        <p>
                            Российская университетская среда оставляет всё меньше возможностей для свободной академической деятельности, высказывания
                            независимых суждений и беспристрастного поиска истины. Вместо поддержания своих подлинных ценностей, университет превращается в
                            институт, выполняющий придворные функции. Оазисы свободной дискуссии сохранились лишь в тех областях, которые государство не считает
                            необходимым контролировать. Академические свободы студентов сокращаются. Нас склоняют к молчанию по волнующим общество вопросам.
                            Любые формы совместной студенческой деятельности, которые мешают укреплению статуса-кво, воспринимаются как угроза.
                        </p>
                    </div>
                    <AdditionalContent />
                </div>
            </div>
        );
    }
}
