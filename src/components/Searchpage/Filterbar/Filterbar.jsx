import React, { useEffect, useState } from 'react';

import css from './Filterbar.module.css';

import Checkbox from "../../UI Elements/Checkbox/Checkbox";
import Colorprobe from "../../UI Elements/Colorprobe/Colorprobe";

import { connect } from 'react-redux';
import { getAllTypes, getAllColors, getAllSizes } from '../../../Redux/action';

function Filterbar(props) {
    const [allTypes, setAllTypes] = useState([]);
    const [allColors, setAllColors] = useState([]);
    const [allSizes, setAllSizes] = useState([]);
    const [filter, setFilter] = useState('');
    const [reloader, setReloader] = useState(0);

    let typeElements;
    let sizeElements;
    let colorElements;

    useEffect(() => {
        props.getAllTypes();
        props.getAllColors();
        props.getAllSizes();
        setAllTypes(props.modelsdata.types);
        setAllColors(props.itemsdata.colors);
        setAllSizes(props.itemsdata.sizes);
        if (reloader < 5){
            setTimeout(() => {
                setReloader(reloader + 1);
            }, 200);
        }
    }, [reloader]);

    const updateFilter = (value) => {
        let res;
        if (filter == ''){
            res = filter + 'WHERE items.color = \''+ value +'\' '
        }else{
            res = filter + 'OR items.color = \''+ value +'\' '
        }
        setFilter(res);
    }

    typeElements = allTypes.map(t => <p className={css.groupposition}>{t.type}</p>);
    sizeElements = allSizes.map(s => <Checkbox name="size" caption={s.size} value={s.size}/>);
    colorElements = allColors.map(c => <Colorprobe color={c.color} name="color" key={c.color} onChange={updateFilter} />);

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