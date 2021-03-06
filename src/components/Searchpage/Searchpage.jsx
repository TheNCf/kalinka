import React, { useEffect, useState } from 'react';

import css from './Searchpage.module.css';

import Filterbar from "./Filterbar/Filterbar";
import Itemcard from "../UI Elements/Itemcard/Itemcard";
import Circlebutton from "../UI Elements/Circlebutton/Circlebutton";

import { connect } from 'react-redux';
import { getAllModels } from '../../Redux/action';

function Searchpage(props) {
    let itemsPerPage = 4;
    const [allItems, setAllItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        setAllItems(props.modelsdata.models);
    }, [props.modelsdata]);

    useEffect(() => {
        setAllItems([]);
    }, [props.kind]);

    useEffect(() => {
        props.getAllModels('WHERE models.kind = \'' + props.kind + '\' ' + filter);
        setCurrentPage(1);
    }, [filter, props.kind]);

    let pagesAr = [];
    let items = [];
    let itemElements;
    let pageElements;

    const updateCurrentPage = (value) => {
        setCurrentPage(value);
    }

    const getFilter = (newfilter) => {
        setFilter(newfilter);
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
        itemElements = items.map(i => <Itemcard id={i.id_model} itemname={i.name} price={i.price + " руб."} discount={i.discount} img={'data:image/jpg;base64,' + btoa(Array.from(new Uint8Array(i.image.data)).map(b => String.fromCharCode(b)).join(''))} margin="0 0 10px 0" key={i.name + i.price + i.discount} />);
        pageElements = pagesAr.map(p => <Circlebutton caption={p} value={p} onClick={updateCurrentPage} key={p} />);
    }

    return(
        <div className={css.content + " container"}>
            <div>
                <Filterbar getFilter={getFilter} kind={props.kind} />
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
const mapDispatchToProps = {getAllModels}

export default connect(mapStateToProps, mapDispatchToProps)(Searchpage);