import React, { useEffect, useState } from 'react';

import css from './Searchpage.module.css';

import Checkbox from "../UI Elements/Checkbox/Checkbox";
import Colorprobe from "../UI Elements/Colorprobe/Colorprobe";
import Itemcard from "../UI Elements/Itemcard/Itemcard";
import Circlebutton from "../UI Elements/Circlebutton/Circlebutton";

import { connect } from 'react-redux';
import { getAllModels, getAllTypes, getAllColors, getAllSizes } from '../../Redux/action';

function Searchpage(props) {
    let itemsPerPage = 4;
    const [reloader, setReloader] = useState(0);
    const [allItems, setAllItems] = useState([]);
    const [allTypes, setAllTypes] = useState([]);
    const [allColors, setAllColors] = useState([]);
    const [allSizes, setAllSizes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('');
    
    useEffect(() => {
        props.getAllModels(filter);
        props.getAllTypes();
        props.getAllColors();
        props.getAllSizes();
        setAllItems(props.modelsdata.models);
        setAllTypes(props.modelsdata.types);
        setAllColors(props.itemsdata.colors);
        setAllSizes(props.itemsdata.sizes);
        if (reloader < 5){
            setTimeout(() => {
                setReloader(reloader + 1);
            }, 500);
        }
        
    }, [reloader, filter]);

    let pagesAr = [];
    let items = [];
    let itemElements;
    let pageElements;
    let typeElements;
    let sizeElements;
    let colorElements;

    const updateCurrentPage = (value) => {
        setCurrentPage(value);
    }

    const updateColorFilter = (value) => {
        let res;
        if (filter == ''){
            res = filter + 'WHERE items.color = \''+ value +'\' '
        }else{
            res = filter + 'OR items.color = \''+ value +'\' '
        }
        setFilter(res);
        setReloader(0);
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
        typeElements = allTypes.map(t => <p className={css.groupposition}>{t.type}</p>);
        sizeElements = allSizes.map(s => <Checkbox name="size" caption={s.size} value={s.size}/>);
        colorElements = allColors.map(c => <Colorprobe color={c.color} name="color" key={c.color} onChange={updateColorFilter} />);
    }

    return(
        <div className={css.content + " container"}>
            <div>
            <div className={css.searchbar}>
                <h1 className={css.groupname}>Женская одежда</h1>
                <div className={css.group}>
                    {typeElements}
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
const mapDispatchToProps = {getAllModels, getAllTypes, getAllColors, getAllSizes}

export default connect(mapStateToProps, mapDispatchToProps)(Searchpage);