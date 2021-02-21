import React, { useEffect, useState } from 'react';

import css from './Searchpage.module.css';

import Checkbox from "../UI Elements/Checkbox/Checkbox";
import Colorprobe from "../UI Elements/Colorprobe/Colorprobe";
import Itemcard from "../UI Elements/Itemcard/Itemcard";
import Circlebutton from "../UI Elements/Circlebutton/Circlebutton";

import { connect, useDispatch, useSelector } from 'react-redux';
import { getAllModels, getAllColors, getAllSizes } from '../../Redux/action';

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
function Searchpage({getAllModels, modelsdata, getAllColors, getAllSizes, itemsdata}) {
    let itemsPerPage = 4;
    const [reloader, setReloader] = useState(0);
    const [allItems, setAllItems] = useState([]);
    const [allColors, setAllColors] = useState([]);
    const [allSizes, setAllSizes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        getAllModels();
        getAllColors();
        getAllSizes();
        setAllItems(modelsdata.models);
        setAllColors(itemsdata.colors);
        setAllSizes(itemsdata.sizes);
        if (reloader < 10){
            setTimeout(() => {
                setReloader(reloader + 1);
            }, 200);
        }
    }, [reloader]);

    let pagesAr = [];
    let items = [];
    let itemElements;
    let pageElements;
    let positionElements;
    let sizeElements;
    let colorElements;

    const updateCurrentPage = (value) => {
        setCurrentPage(value);
    }

    if (allItems.length > 0){
        let pages = Math.ceil(allItems.length/itemsPerPage);

        for (let i = 0; i < pages; i++) {
            pagesAr[i] = i + 1;
        }
        
        for (let i = currentPage * itemsPerPage - itemsPerPage; i < currentPage * itemsPerPage; i++) {
            if (allItems[i] != null){
                items.push(allItems[i]);
            }
        }
        itemElements = items.map(i => <Itemcard itemname={i.name} price={i.price + " руб."} discount={i.discount} img={'data:image/jpg;base64,' + btoa(Array.from(new Uint8Array(i.image.data)).map(b => String.fromCharCode(b)).join(''))} margin="0 0 10px 0" key={i.name + i.price + i.discount} />);
        pageElements = pagesAr.map(p => <Circlebutton caption={p} value={p} onClick={updateCurrentPage} key={p} />);
        positionElements = positions.map(p => <p className={css.groupposition}>{p}</p>);
        sizeElements = allSizes.map(s => <Checkbox name="size" caption={s.size} value={s.size}/>);
        colorElements = allColors.map(c => <Colorprobe color={c.color} name="color" key={c.color} />);
    }

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
                <div className={css.listofcontentscontainer}>
                    {itemElements}
                </div>
                <div className={css.listofcontentscontainer}>
                    <div className={css.pagebuttonscontainer}>{pageElements}</div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {getAllModels, getAllColors, getAllSizes}

export default connect(mapStateToProps, mapDispatchToProps)(Searchpage);