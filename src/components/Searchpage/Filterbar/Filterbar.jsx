import React, { useEffect, useState } from 'react';

import css from './Filterbar.module.css';

import Groupheader from "./Groupheader/Groupheader";
import Groupposition from "./Groupposition/Groupposition"
import Checkbox from "../../UI Elements/Checkbox/Checkbox";
import Colorprobe from "../../UI Elements/Colorprobe/Colorprobe";

import { connect } from 'react-redux';
import { getAllTypes, getAllColors, getAllSizes } from '../../../Redux/action';

function Filterbar(props) {
    const [downloadData, setDownloadData] = useState(true);
    const [allTypes, setAllTypes] = useState([]);
    const [allColors, setAllColors] = useState([]);
    const [allSizes, setAllSizes] = useState([]);
    const [typeFilter, setTypeFilter] = useState('');
    const [sizeFilter, setSizeFilter] = useState('');
    const [colorFilter, setColorFilter] = useState('');
    const [activeType, setActiveType] = useState('');
    const [sizeArrayState, setSizeArrayState] = useState([]);
    const [colorArrayState, setColorArrayState] = useState([]);

    let typeElements;
    let sizeElements;
    let colorElements;
    let sizeArray = [];
    let colorArray = [];

    useEffect(() => {
        setAllTypes(props.modelsdata.types);
        setAllColors(props.itemsdata.colors);
        setAllSizes(props.itemsdata.sizes);
    }, [props.modelsdata, props.itemsdata]);

    useEffect(() => {
        let tempType = typeFilter;
        let tempSize = sizeFilter;
        let tempColor = colorFilter;
        if (tempSize.length > 0) {
            tempSize = 'AND (' + tempSize + ') ';
        }
        if (tempColor.length > 0) {
            tempColor = 'AND (' + tempColor + ') ';
        }
        props.getFilter(tempType + tempSize + tempColor);
    }, [typeFilter, sizeFilter, colorFilter, props.kind]);

    useEffect(() => {
        updateTypeFilter('');
        setSizeFilter('');
        setColorFilter('');
        setActiveType('');
    }, [props.kind]);

    useEffect(() => {
        //if (downloadData){
            let kind = 'WHERE models.kind = \'' + props.kind + '\' ';
            props.getAllTypes(kind);
            props.getAllColors(kind);
            props.getAllSizes(kind);
        //}
    }, [downloadData, props.kind]);

    const updateTypeFilter = (value) => {
        setActiveType(value);
        if (value != '') {
            setTypeFilter('AND models.type = \'' + value + '\' ');
        } else {
            setTypeFilter('');
        }
    }

    const updateSizeFilter = (e) => {
        let tempFilter = '';
        sizeArray = sizeArrayState;
        if (e.target.checked){
            sizeArray.push(e.target.value);
        }else{
            sizeArray.splice(sizeArray.indexOf(e.target.value), 1)
        }
        setSizeArrayState(sizeArray);
        for(let i = 0; i < sizeArray.length; i++){
            if (i == 0) {
                tempFilter += 'items.size = \''+ sizeArray[i] +'\' '
            }else{
                tempFilter += 'OR items.size = \''+ sizeArray[i] +'\' '
            }
        }
        setSizeFilter(tempFilter);
    }

    const updateColorFilter = (e) => {
        let tempFilter = '';
        colorArray = colorArrayState;
        if (e.target.checked){
            colorArray.push(e.target.value);
        }else{
            colorArray.splice(colorArray.indexOf(e.target.value), 1)
        }
        setColorArrayState(colorArray);
        for(let i = 0; i < colorArray.length; i++){
            if (i == 0) {
                tempFilter += 'items.color = \''+ colorArray[i] +'\' '
            }else{
                tempFilter += 'OR items.color = \''+ colorArray[i] +'\' '
            }
        }
        setColorFilter(tempFilter);
    }

    typeElements = allTypes.map(t => <Groupposition caption={t.type} active={activeType} onClick={updateTypeFilter} />);
    sizeElements = allSizes.map(s => <Checkbox name="size" caption={s.size} value={s.size} onChange={updateSizeFilter} />);
    colorElements = allColors.map(c => <Colorprobe color={c.color} name="color" key={c.color} onChange={updateColorFilter} />);

    return(
        <div className={css.searchbar}>
            <Groupheader caption={props.kind} active={activeType} onClick={updateTypeFilter} />
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
    );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {getAllTypes, getAllColors, getAllSizes}

export default connect(mapStateToProps, mapDispatchToProps)(Filterbar);