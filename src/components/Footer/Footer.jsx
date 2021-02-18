import React from 'react';

import css from './Footer.module.css';

function Footer(){
    return(
    <footer className={css.footer}>
        <div className="container">
            <div className={css.menulist}>
                <div className={css.contactscol}>
                    <h2>Наши аккаунты в соцсетях</h2>
                    <h1>Вконтакте</h1>
                    <h1>Facebook</h1>
                    <h1>Twitter</h1>
                    <h1>Одноклассники</h1>
                    <h1>Instagram</h1>
                </div>
                <div className={css.contactscol}>
                    <h2>Контактная информация</h2>
                    <h1>Пр. Мира, 32, г. Солигорск, 223710</h1>
                    <h1>info_kalinka@mail.ru, kalinkamarketing@mail.ru</h1>
                    <h1>+375 174 24 48 60 (отдел продаж РБ)</h1>
                    <h1>+375 174 24 42 11 (отдел продаж СНГ)</h1>
                    <h1>Другие контакты</h1>
                </div>
                <div className={css.contactscolleft}>
                    <br/><br/><br/>
                    <h2>Оптовым клиентам</h2>
                    <h2>Акционерам</h2>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;