import React, { useEffect, useState } from 'react';

import css from './Searchpage.module.css';

import Checkbox from "../UI Elements/Checkbox/Checkbox";
import Colorprobe from "../UI Elements/Colorprobe/Colorprobe";
import Itemcard from "../UI Elements/Itemcard/Itemcard";
import Circlebutton from "../UI Elements/Circlebutton/Circlebutton";

import itemplaceholder from './../../img/itemcards/Layout04Blouse.png';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getAllModels } from '../../Redux/action';

let positions = [
    'Блузки',
    'Жакеты',
    'Костюмы',
    'Юбки',
    'Брюки',
    'Платья',
    'Сарафаны',
    'Куртки',
    'Пальто'
];
let sizes = [
    '164-84-90',
    '164-84-92',
    '164-88-94',
    '164-88-96'
];
let colors = [
    '#DD2233',
    '#AA22DD',
    '#1111EE',
    '#666666',
    '#111111',
    '#AAAAAA',
    '#FFFFFF'
];

function Searchpage({getAllModels, modelsdata}) {
    let itemsPerPage = 2;

    useEffect(() => {getAllModels();
        setAllItems(modelsdata.models);
        setLoading(false);
    }, [getAllModels]);

    //const allItems = modelsdata.models;
    const [allItems, setAllItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    let pagesAr = [];
    let items = [];
    let itemElements;
    let pageElements;

    const updateCurrentPage = (value) => {
        setCurrentPage(value);
    }

    if (!loading){
        let pages = Math.ceil(allItems.length/itemsPerPage);

        for (let i = 0; i < pages; i++) {
            pagesAr[i] = i + 1;
        }
        
        for (let i = currentPage * itemsPerPage - itemsPerPage; i < currentPage * itemsPerPage; i++) {
            items.push(allItems[i]);
        }
        console.log(allItems);
        itemElements = items.map(i => <Itemcard itemname={i.name} price={i.price + " руб."} discount={i.discount} img={i.img} margin="0 0 10px auto" key={i.name + i.price + i.discount} />);
        pageElements = pagesAr.map(p => <Circlebutton caption={p} value={p} onClick={updateCurrentPage} key={p} />);
    }

    let positionElements = positions.map(p => <p className={css.groupposition}>{p}</p>);
    let sizeElements = sizes.map(s => <Checkbox name="size" caption={s} value={s}/>);
    let colorElements = colors.map(c => <Colorprobe color={c} name="color" key={c} />);
    

    return(
        <div className={css.content + " container"}>
            <div className={css.searchbarcontainer}>
                <div className={css.searchbar}>
                    <h1 className={css.groupname}>Женская одежда</h1>
                    <div className={css.group}>
                        {positionElements}
                    </div>
                    <h1 className={css.groupname}>Цена</h1>
                    <div className={css.group}>

                    </div>
                    <h1 className={css.groupname}>Размер</h1>
                    <div className={css.group}>
                        {sizeElements}
                    </div>
                    <h1 className={css.groupname}>Цвет</h1>
                    <div className={css.group}>
                        <div className={css.colorprobes}>
                            {colorElements}
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.listofcontents}>
                {itemElements}
                <div className={css.pagebuttons}>
                    <div className={css.pagebuttonscontainer}>{pageElements}</div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {getAllModels}

export default connect(mapStateToProps, mapDispatchToProps)(Searchpage);