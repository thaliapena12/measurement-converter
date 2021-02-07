import React, { useState } from "react";
import Select from "react-select";
//have 2 dropdown menus (to and from units) for now (grams to cups and cups to grams)
//have input - takes the number and call handle submit depending on the units selected
//have helper function that calculated cups to grams
//helper function that calculates grams to cups
//cups to -grams -ounces -teaspoon tblespoon pints qts gallon

const dropDownOptions =[
    {label: 'Cups', value: 'Cups'},
    {label: 'Grams', value: 'Grams'},
    {label: 'Ounces', value: 'Ounces'},
    {label: 'Tablespoons', value: 'Tablespoons'}
    // {label: 'Liters', value: 'Liters'}
];

function Calculator(props) {
    const [value, setValue] = useState('');
    const [convertUnitFrom,setConvertUnitFrom] = useState('');
    const [convertUnitTo, setConvertUnitTo] = useState('');
    const [conversion, setConversion] = useState([]);

  


    const handleSubmit = (e) => {
        e.preventDefault();
        conversionCalculator(value)  
    }

    const conversionCalculator = (value) => {
         //returns the same value if converting from unit to same unit
        if (convertUnitFrom === convertUnitTo) {
            setConversion(value)
        }
        //coverts from cups to grams
        if (convertUnitFrom === "Cups" && convertUnitTo === "Grams") {
            let conversion = convertFromCupsToGrams(value);
            setConversion(conversion)
        }
        //coverts from grams to cups
        if (convertUnitFrom === "Grams" && convertUnitTo === "Cups") {
            let conversion = convertFromGramsToCups(value);
            setConversion(conversion)
        }
        //converst cups to ounces
        if (convertUnitFrom === "Cups" && convertUnitTo === "Ounces") {
            let conversion = convertFromCupsToOunces(value);
            setConversion(conversion)
        }
        //converts from ounces to cups
        if (convertUnitFrom === "Ounces" && convertUnitTo === "Cups") {
            let conversion = convertFromOuncesToCups(value);
            setConversion(conversion)
        }
        //converts from cups to tablespoons
        if (convertUnitFrom === "Cups" && convertUnitTo === "Tablespoons") {
            let conversion = convertFromCupsToTablespoons(value);
            setConversion(conversion)
        }
        //convert from tablespoons to cups
        if (convertUnitFrom === "Tablespoons" && convertUnitTo === "Cups") {
            let conversion = convertFromTablespoonsToCups(value);
            setConversion(conversion)
        }
        //convert from ounces to grams
        if (convertUnitFrom === "Ounces" && convertUnitTo === "Grams") {
            let conversion = convertFromOuncesToGrams(value);
            setConversion(conversion)
        }
        //convert from grams to ounces
        if (convertUnitFrom === "Grams" && convertUnitTo === "Ounces") {
            let conversion = convertFromGramsToOunces(value);
            setConversion(conversion)
        }
        //convert from ounces to tablespoons
        if (convertUnitFrom === "Ounces" && convertUnitTo === "Tablespoons") {
            let conversion = convertFromOuncesToTablespoons(value);
            setConversion(conversion)
        }
        //convert from tablespoons to ounces
        if (convertUnitFrom === "Tablespoons" && convertUnitTo === "Ounces") {
            let conversion = convertFromTablespoonsToOunces(value);
            setConversion(conversion)
        }
    }

    const convertFromCupsToGrams = (cups) => {
        let calculation = (cups * 200).toFixed(2)
        return calculation
    }

    const convertFromGramsToCups = (grams) => {
        let calculation = (grams / 200).toFixed(2)
        return calculation
    }

    const convertFromCupsToOunces = (cups) => {
        let calculation = (cups * 8).toFixed(2)
        return calculation
    }

    const convertFromOuncesToCups = (ounces) => {
        let calculation = (ounces / 8).toFixed(2)
        return calculation
    }

    const convertFromCupsToTablespoons = (cups) => {
        return (cups * 16).toFixed(2)
    }

    const convertFromTablespoonsToCups = (tablespoons) => {
        return (tablespoons / 16).toFixed(2)
    }

    const convertFromOuncesToGrams = (ounces) => {
        return (ounces * 28.3495).toFixed(2)
    }

    const convertFromGramsToOunces = (grams) => {
        return (grams / 28.3495).toFixed(2)
    }

    const convertFromOuncesToTablespoons = (ounces) => {
        return (ounces * 2).toFixed(2)
    }

    const convertFromTablespoonsToOunces = (tablespoons) => {
        return (tablespoons / 2).toFixed(2)
    }

    const convertFromGramsToTablespoons = (grams) => {
        return (grams / 15).toFixed(2)
    }

    const convertFromTablespoonsToGrams = (tablespoons) => {
        return (tablespoons * 15).toFixed(2)
    }


    return (
        <div>
            <h1>Liquid Convesions</h1>
            <div className="drop-down-menus">
                <div className="dropdown-menu">
                    <label className="label"> From: </label>
                    <Select 
                    options={dropDownOptions} 
                    onChange={opts => setConvertUnitFrom(opts.label)}
                    />
                </div>
                <div className="dropdown-menu">
                    <label className="label"> To: </label>
                    <Select 
                    options={dropDownOptions} 
                    onChange={opts => setConvertUnitTo(opts.label)}
                    />
                </div>
            </div>
            
            <form onSubmit={handleSubmit}>
                <input 
                type="number"
                id='search'
                name="seach-input"
                placeholder={convertUnitFrom}
                value={value}
                onChange={e => setValue(e.target.value)}>
                </input>
                <button>Convert</button>
            </form>
            {conversion &&
                <div>{conversion} {convertUnitTo} </div>
            }
            </div>
      
        
    )
};

export default Calculator;