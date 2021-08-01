const si = [
    {
        id: 1,
        title: 'second',
        symbol: 's',
        dimension: 'T',
        quantity: 'time',
        definition:
            'The duration of 9192631770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the caesium-133 atom.',
    },
    {
        id: 2,
        title: 'metre',
        symbol: 'm',
        dimension: 'L',
        quantity: 'length',
        definition:
            'The distance travelled by light in vacuum in 1/299792458 second. ',
    },
    {
        id: 3,
        title: 'kilogram',
        symbol: 'kg',
        dimension: 'M',
        quantity: 'mass',
        definition: `The kilogram is defined by setting the Planck constant h exactly to ${(
            <math>
                <mrow>
                    <mfrac>
                        <mi>1</mi>
                        <mi>299792458 </mi>
                    </mfrac>
                </mrow>
            </math>
        )}J⋅s (J = kg⋅m2⋅s−2), given the definitions of the metre and the second.`,
    },
    {
        id: 4,
        title: 'ampere',
        symbol: 'A',
        dimension: 'I',
        quantity: 'electric current',
        definition:
            'The kilogram is defined by setting the Planck constant h exactly to 6.62607015×10−34 J⋅s (J = kg⋅m2⋅s−2), given the definitions of the metre and the second.',
    },
    {
        id: 5,
        title: 'kelvin',
        symbol: 'K',
        dimension: '&theta;',
        quantity: 'thermodynamic temperature',
        definition:
            'The kelvin is defined by setting the fixed numerical value of the Boltzmann constant k to 1.380649×10−23 J⋅K−1, (J = kg⋅m2⋅s−2), given the definition of the kilogram, the metre, and the second. ',
    },
    {
        id: 6,
        title: 'mole',
        symbol: 'mol',
        dimension: 'N',
        quantity: 'amount of substance',
        definition:
            'The amount of substance of exactly 6.02214076×1023 elementary entities. This number is the fixed numerical value of the Avogadro constant, NA, when expressed in the unit mol−1.',
    },
    {
        id: 7,
        title: 'candela',
        symbol: 'cd',
        dimension: 'J',
        quantity: ' 	luminous intensity',
        definition: `The luminous intensity, in a given direction, of a source that emits monochromatic radiation of frequency 5.4×1014 hertz and that has a radiant intensity in that direction of ${(
            <math>
                <mrow>
                    <mfrac>
                        <mi>1</mi>
                        <mi>683 </mi>
                    </mfrac>
                </mrow>
            </math>
        )} watt per steradian.`,
    },
];

export default si;
