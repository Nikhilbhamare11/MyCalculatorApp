import React, { useState } from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [result, setResult] = useState('0');

    const colors = {
        dark: '#22252D',
        dark1: '#292B36',
        dark2: '#272B33',
        light: '#FFF',
        light1: '#F1F1F1',
        light2: 'green',
    };

    const getColor = (light, dark) => darkTheme ? dark : light;

    const calculate = (title) => {
        if (title === 'CE') {
            setResult('0');
        }
        else if (title === 'DL') {
            setResult(result.substring(0, result.length - 1));
        }
        else if (title === '=') {
            try {
                const ans = Number(eval(result).toFixed(3)).toString();
                setResult(ans);
            } catch (error) {
                setResult('Error');
            }
        }
        else {
            setResult(result === '0' ? title : result + title);
        }
    }

    const Btn = ({ title, type }) => (
        <TouchableOpacity onPress={() => calculate(title)} style={{ padding: 10, borderRadius: 10, elevation: 2, backgroundColor: getColor(colors.light2, colors.dark), height: 70, width: 70, margin: 16 }}>
            <Text style={{ fontSize: 37, color: getColor(colors.dark, colors.light), textAlign: 'center', textAlignVertical: 'center', color: getBtnColor(type) }}>{title}</Text>
        </TouchableOpacity>
    )

    const getBtnColor = (type) => {
        if (type == 'top') {
            return '#35FBD6'
        }
        else if (type == 'right') {
            return '#EB6363'
        } else {
            return getColor(colors.dark, colors.light)
        }
    }

    return (
        <View style={{ height: '100%', width: '100%', paddingVertical: 20, backgroundColor: getColor(colors.light, colors.dark), alignItems: 'center' }}>
            <Text style={{ fontSize: 15, color: getColor(colors.dark, colors.light), width: "100%", textAlign: 'center' }}>{darkTheme ? 'Light mode' : 'Dark mode'}</Text>
            <Switch value={darkTheme} onValueChange={() => setDarkTheme(!darkTheme)} thumbColor={getColor(colors.dark, colors.light)} trackColor={{ true: colors.light2, false: colors.dark2 }}></Switch>
            <Text style={{ fontSize: 40, color: getColor(colors.dark, colors.light), width: "100%", textAlign: "right", paddingRight: 20, marginTop: 140, marginBottom: 20 }}>{result}</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', backgroundColor: getColor(colors.light1, colors.dark1), borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                <Btn title="CE" type="top" />
                <Btn title="DL" type="top" />
                <Btn title="/" type="top" />
                <Btn title="%" type="top" />
                <Btn title="7" type="number" />
                <Btn title="8" type="number" />
                <Btn title="9" type="number" />
                <Btn title="*" type="right" />
                <Btn title="4" type="number" />
                <Btn title="5" type="number" />
                <Btn title="6" type="number" />
                <Btn title="-" type="right" />
                <Btn title="1" type="number" />
                <Btn title="2" type="number" />
                <Btn title="3" type="number" />
                <Btn title="+" type="right" />
                <Btn title="00" type="number" />
                <Btn title="0" type="number" />
                <Btn title="." type="number" />
                <Btn title="=" type="right" style={{ backgroundColor: 'green' }} />
            </View>
            <Text style={{ position: 'absolute', bottom: 20, fontSize: 15, color: getColor(colors.dark, colors.light) }}>Calc by Nikhil</Text>
        </View >
    );
};

export default App;