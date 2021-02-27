import React, { useEffect, useState } from 'react';

import css from './Filterbar.module.css';

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
    const [sizeArrayState, setSizeArrayState] = useState([]);
    const [colorArrayState, setColorArrayState] = useState([]);

    let typeElements;
    let sizeElements;
    let colorElements;
    let sizeArray = [];
    let colorArray = [];

    useEffect(() => {
        if (downloadData){
            props.getAllTypes();
            props.getAllColors();
            props.getAllSizes();
        }
    }, [downloadData]);

    useEffect(() => {
        setAllTypes(props.modelsdata.types);
        setAllColors(props.itemsdata.colors);
        setAllSizes(props.itemsdata.sizes);
    }, [props.modelsdata, props.itemsdata]);

    useEffect(() => {
        let tempSize = sizeFilter;
        let tempColor = colorFilter;
        if (tempSize.length > 6 && tempColor.slice(0, 5) == 'WHERE') {
            tempSize = tempSize.slice(0, 6) + '(' + tempSize.slice(6, tempSize.length - 1) + ')';
            tempColor = 'AND (' + tempColor.slice(6, tempColor.length - 1) + ')';
        }
        props.getFilter(tempSize + tempColor);
        console.log(tempSize + tempColor);
    }, [sizeFilter, colorFilter]);

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
                tempFilter += 'WHERE items.size = \''+ sizeArray[i] +'\' '
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
                tempFilter += 'WHERE items.color = \''+ colorArray[i] +'\' '
            }else{
                tempFilter += 'OR items.color = \''+ colorArray[i] +'\' '
            }
        }
        setColorFilter(tempFilter);
    }

    typeElements = allTypes.map(t => <p className={css.groupposition}>{t.type}</p>);
    sizeElements = allSizes.map(s => <Checkbox name="size" caption={s.size} value={s.size} updateSizeFilter={updateSizeFilter} />);
    colorElements = allColors.map(c => <Colorprobe color={c.color} name="color" key={c.color} updateColorFilter={updateColorFilter} />);

    return(
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
    );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {getAllTypes, getAllColors, getAllSizes}

export default connect(mapStateToProps, mapDispatchToProps)(Filterbar);