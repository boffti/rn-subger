import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context as UnitContext } from '../context/UnitContext';

// const hexToRgb = (hex) => {
//     // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
//     var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//     hex = hex.replace(shorthandRegex, function (m, r, g, b) {
//         return r + r + g + g + b + b;
//     });

//     var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//     return result
//         ? {
//             r: parseInt(result[1], 16),
//             g: parseInt(result[2], 16),
//             b: parseInt(result[3], 16)
//         }
//         : null;
// };

const SubItem = ({ id, title, prices, bgColor, sub }) => {
    const { state: unitState, getUnit } = useContext(UnitContext);
    const [cardBg, setBgColor] = useState('#fff');
    const [textColor, setTextColor] = useState('#000');
    const navigation = useNavigation();
    const [price, setPrice] = useState('0');
    const [unit, setUnit] = useState('month');
    useEffect(() => {
        setBgColor(bgColor);
        // let { r, g, b } = hexToRgb(cardBg);
        // let targetColor = `rgb(${r},${g},${b})`;
        // var colors = targetColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        // var brightness = 1;

        // var R = colors[1];
        // var G = colors[2];
        // var B = colors[3];

        // var ir = Math.floor((255 - R) * brightness);
        // var ig = Math.floor((255 - G) * brightness);
        // var ib = Math.floor((255 - B) * brightness);
        // setTextColor(`rgb(${ir}, ${ig}, ${ib})`);
        // setTextColor(`rgb(${ir}, ${ig}, ${ib})`);
    }, [bgColor]);

    useEffect(() => {
        switch (unitState) {
            case '/mo':
                setPrice(prices.priceMonth);
                setUnit('month');
                break;
            case '/yr':
                setPrice(prices.priceYear);
                setUnit('year');
                break;
            case '/day':
                setPrice(prices.priceDay);
                setUnit('day');
                break;
            case '/wk':
                setPrice(prices.priceWeek);
                setUnit('week');
                break;
        }
    }, [unitState])

    return (
        <TouchableOpacity 
        style={{ ...styles.card, backgroundColor: cardBg }} 
        onPress={() => navigation.navigate('Detail', { id })}>
            <View style={styles.cardTitleWrapper}>
                <Text style={{ ...styles.cardTitle, color: textColor  }}>{title}</Text>
                { sub != '' ? <Text style={{ ...styles.cardSubTitle, color: textColor }}>{sub}</Text> : null }
            </View>
            <View style={styles.cardPriceWrapper}>
                <Text style={{ ...styles.cardPrice, color: textColor  }}>{
                    price.indexOf(".") !==-1 ? '$' + price : '$' + price + '.00'
                    // price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }</Text>
                <Text style={{ ...styles.cardUnit, color: textColor  }}>per {unit}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        paddingVertical: 25,
        marginBottom: 12,
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 20,
    },
    cardSub: {
        fontSize: 14,
        fontWeight: '100',
    },
    cardTitleWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },  
    cardPriceWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignItems: 'flex-end',
    },
    cardPrice: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardUnit: {
        fontSize: 12,
        fontWeight: '100',
        marginTop: 5,
    }
});

export default SubItem;