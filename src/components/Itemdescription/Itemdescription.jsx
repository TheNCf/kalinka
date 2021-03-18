import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

import css from './Itemdescription.module.css';

import Radiobutton from '../UI Elements/Radiobutton/Radiobutton';
import Circlebutton from '../UI Elements/Circlebutton/Circlebutton';
import Menubutton from '../UI Elements/Menubutton/Menubutton'

import plus from "./../../img/Plus.png";
import minus from "./../../img/Minus.png";
import cart from './../../img/cart.png';

import { connect } from 'react-redux';
import { getAllModels, getAllColors, getAllSizes, getItemCount } from '../../Redux/action';


function Itemdescription(props) {
    let href = window.location.href;
    let id = href.slice(href.indexOf('/item/id') + 8, href.length);
    const cookies = new Cookies();

    const [itemInfo, setItemInfo] = useState([]);
    const [allColors, setAllColors] = useState([]);
    const [allSizes, setAllSizes] = useState([]);
    const [activeColor, setActiveColor] = useState('');
    const [activeSize, setActiveSize] = useState('');
    const [disabled, setDisabled] = useState('disabled');
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(1);
    const [downloadFlag, setDownloadFlag] = useState(true);
    
    useEffect(() => {
        setItemInfo(props.modelsdata.models);
        setAllColors(props.itemsdata.colors);
        setAllSizes(props.itemsdata.sizes);
        setCount(props.itemsdata.count);
    }, [props.modelsdata, props.itemsdata]);

    useEffect(() => {
        if (count.length > 0) {
            setDisabled('');
        } else setDisabled('disabled');
    }, [count]);

    useEffect(() => {
        if (downloadFlag == true) {
            props.getAllModels('WHERE models.id_model = \'' + id + '\' ');
            props.getAllColors('WHERE models.id_model = \'' + id + '\' ');
            props.getAllSizes('WHERE models.id_model = \'' + id + '\' ');
        }
        setDownloadFlag(false);
    }, [downloadFlag]);

    useEffect(() => {
        if (activeColor != '' && activeSize != ''){
            props.getItemCount('WHERE items.color = \'' + activeColor + '\' AND items.size = \'' + activeSize + '\'');
        } else setDisabled('disabled');
    }, [activeColor, activeSize]);

    const updateActiveColor = (value) => {
        setActiveColor(value)
    }
    const updateActiveSize = (value) => {
        setActiveSize(value)
    }

    const plusCounter = () => {
        let temp = counter + 1;
        if (temp > parseInt(count[0].quantity)) temp = parseInt(count[0].quantity);
        setCounter(temp);
    }
    const minusCounter = () => {
        let temp = counter - 1;
        if (temp < 1) temp = 1;
        setCounter(temp);
    }

    let item = itemInfo[0];
    let colorElements = allColors.map(c => <Radiobutton color={c.color} name="color" key={c.color} onChange={updateActiveColor} />);
    let sizeElements = allSizes.map(s => <Radiobutton name="size" caption={s.size} fontcolor="#444444" onChange={updateActiveSize} />);

    const addCookie = () => {
        let itemPrice = parseFloat(item.price).toFixed(2);
        if (item.discount > "0") {
            itemPrice = (itemPrice - itemPrice * parseFloat(item.discount) / 100).toFixed(2);
        }
        itemPrice = itemPrice * counter;
        let itemObject = {
            id: id,
            name: item.name,
            price: itemPrice,
            quantity: counter,
            color: activeColor,
            size: activeSize,
        }
        cookies.set(id, itemObject, { path: '/' });
        alert('Товар добавлен в корзину.');
    }

    if (itemInfo.length > 0){
        let discountText = parseFloat(item.price).toFixed(2) + ' руб.';
        if (item.discount > "0"){
            let price = parseFloat(item.price).toFixed(2);
            let newPrice = (price - price * parseFloat(item.discount) / 100).toFixed(2);
            discountText = (
                <div>
                    <strike>{price}</strike> {newPrice} руб.
                </div>);
        }
        return(
        <div className="container">
            <h1>{item.name}</h1>
            <div className={css.information}>
                <div className={css.images}>
                    <div className={css.imagecontainer}>
                        <img className={css.image} src={'data:image/jpg;base64,' + btoa(Array.from(new Uint8Array(item.image.data)).map(b => String.fromCharCode(b)).join(''))} alt={item.name} />
                    </div>
                    {/*<div className={css.imagegroup}>            //additional images//
                        <div className={css.smallimage} style={{margin: '0px'}}><img className={css.image} src={props.img} alt={props.alt} /></div>
                        <div className={css.smallimage}><img className={css.image} src={props.img} alt={props.alt} /></div>
                        <div className={css.smallimage}><img className={css.image} src={props.img} alt={props.alt} /></div>
                    </div>*/}
                </div>
                <div className={css.description}>
                    <div className={css.price}>
                        <h1 style={{marginLeft: 'auto'}}>{discountText}</h1>
                    </div>
                    <h1 className={css.maintext}>Выберите цвет: </h1>
                    <div className={css.group}>{colorElements}</div>

                    <h1 className={css.maintext}>Выберите размер: </h1>
                    <div className={css.group}>{sizeElements}</div>

                    <h1 className={css.maintext}>Количество: </h1>
                    <div className={css.group}>
                        <Circlebutton img={minus} margin="0px" size="36px" imgsize="50%" disabled={disabled} onClick={minusCounter} />
                        <h1 className={css.maintext} style={{margin: '0px 15px'}}>{counter}</h1>
                        <Circlebutton img={plus} margin="0px" size="36px" imgsize="50%" disabled={disabled} onClick={plusCounter} />
                    </div>
                    <div className={css.space}></div>
                    <div className={css.button}><Menubutton caption="Добавить в корзину" fontsize="26px" img={cart} disabled={disabled} onClick={addCookie} /></div>
                </div>
            </div>
        </div>);
    } else return (<h1>Загрузка...</h1>);
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {getAllModels, getAllColors, getAllSizes, getItemCount}

export default connect(mapStateToProps, mapDispatchToProps)(Itemdescription);