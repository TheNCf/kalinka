import React from 'react';

import css from './Footer.module.css';

function Footer(){
    return(
    <footer className={css.footer}>
        <div className="container">
            <div className={css.menulist}>
                <div className={css.contactscol}>
                    <h2>Наши аккаунты в соцсетях</h2>
                    <h1><a className={css.link} href="https://vk.com/id332823201">Вконтакте</a></h1>
                    <h1><a className={css.link} href="https://web.facebook.com/zaokalinka">Facebook</a></h1>
                    <h1><a className={css.link} href="https://twitter.com/ZAO_Kalinka">Twitter</a></h1>
                    <h1><a className={css.link} href="https://ok.ru/profile/570266537372">Одноклассники</a></h1>
                    <h1><a className={css.link} href="https://www.instagram.com/zaokalinka/">Instagram</a></h1>
                </div>
                <div className={css.contactscol}>
                    <h2>Контактная информация</h2>
                    <h1>Пр. Мира, 32, г. Солигорск, 223710</h1>
                    <h1><a className={css.link} href="mailto:info_kalinka@mail.ru">info_kalinka@mail.ru</a>, <a className={css.link} href="mailto:kalinkamarketing@mail.ru">kalinkamarketing@mail.ru</a></h1>
                    <h1><a className={css.link} href="tel:+375174244860">+375(17)-424-48-60 (отдел продаж РБ)</a></h1>
                    <h1><a className={css.link} href="tel:+375174244211">+375(17)-424-42-11 (отдел продаж СНГ)</a></h1>
                    <h1><a className={css.link} href="http://www.kalinka.com.by/kontakti.html">Другие контакты</a></h1>
                </div>
                <div className={css.contactscolleft}>
                    <br/><br/><br/>
                    <h2><a className={css.link} href="http://www.kalinka.com.by/optovikam-------.html">Оптовым клиентам</a></h2>
                    <h2><a className={css.link} href="http://www.kalinka.com.by/akcioneram.html">Акционерам</a></h2>
                </div>
            </div>
        </div>
        <a name="footer"></a>
    </footer>
    );
}

export default Footer;