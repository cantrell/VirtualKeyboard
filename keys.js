var SIZES = {
    LETTER:   18,
    DELETE:   27,
    RETURN:   32,
    SHIFT:    42,
    COMMAND:  22,
    OPTION:   17.0,
    CONTROL:  17.0,
    FN:       17.0,
    CAPS:     32,
    TAB:      27,
    SPACEBAR: 48,
    ARROW:    13  
};

var KEYBOARD = [
    [
        {labels:['~','`'], size:SIZES.LETTER},
        {labels:['!','1'], size:SIZES.LETTER},
        {labels:['@','2'], size:SIZES.LETTER},
        {labels:['#','3'], size:SIZES.LETTER},
        {labels:['$','4'], size:SIZES.LETTER},
        {labels:['%','5'], size:SIZES.LETTER},
        {labels:['^','6'], size:SIZES.LETTER},
        null,
        {labels:['&','7'], size:SIZES.LETTER},
        {labels:['*','8'], size:SIZES.LETTER},
        {labels:['(','9'], size:SIZES.LETTER},
        {labels:[')','0'], size:SIZES.LETTER},
        {labels:['_','-'], size:SIZES.LETTER},
        {labels:['+','='], size:SIZES.LETTER},
        {labels:['delete'],size:SIZES.DELETE, code:8}
    ],
    [
        {labels:['tab'],   size:SIZES.TAB, code:9},
        {labels:['Q'],     size:SIZES.LETTER},
        {labels:['W'],     size:SIZES.LETTER},
        {labels:['E'],     size:SIZES.LETTER},
        {labels:['R'],     size:SIZES.LETTER},
        {labels:['T'],     size:SIZES.LETTER},
        null,
        {labels:['Y'],     size:SIZES.LETTER, id:'key_y'},
        {labels:['U'],     size:SIZES.LETTER},
        {labels:['I'],     size:SIZES.LETTER},
        {labels:['O'],     size:SIZES.LETTER},
        {labels:['P'],     size:SIZES.LETTER},
        {labels:['{','['], size:SIZES.LETTER},
        {labels:['}',']'], size:SIZES.LETTER},
        {labels:['|','\\'],size:SIZES.LETTER}
    ],
    [
        {labels:['on'],size:SIZES.CAPS, code:20, id:'key_caps'},
        {labels:['A'],        size:SIZES.LETTER},
        {labels:['S'],        size:SIZES.LETTER},
        {labels:['D'],        size:SIZES.LETTER},
        {labels:['F'],        size:SIZES.LETTER},
        {labels:['G'],        size:SIZES.LETTER},
        null,
        {labels:['H'],        size:SIZES.LETTER},
        {labels:['J'],        size:SIZES.LETTER},
        {labels:['K'],        size:SIZES.LETTER},
        {labels:['L'],        size:SIZES.LETTER},
        {labels:[':',';'],    size:SIZES.LETTER},
        {labels:['"','\''],   size:SIZES.LETTER},
        {labels:['enter'],    size:SIZES.RETURN, code:13}
    ],
    [
        {labels:['shift'], size:SIZES.SHIFT, code:16},
        {labels:['Z'],     size:SIZES.LETTER},
        {labels:['X'],     size:SIZES.LETTER},
        {labels:['C'],     size:SIZES.LETTER},
        {labels:['V'],     size:SIZES.LETTER},
        {labels:['B'],     size:SIZES.LETTER, id:'key_b'},
        null,
        {labels:['N'],     size:SIZES.LETTER},
        {labels:['M'],     size:SIZES.LETTER},
        {labels:['<',','], size:SIZES.LETTER},
        {labels:['>','.'], size:SIZES.LETTER},
        {labels:['?','/'], size:SIZES.LETTER},
        {labels:null,      size:SIZES.ARROW},
        {labels:['&uarr;'],size:SIZES.ARROW, code:38}
        /*{labels:['shift'],size:SIZES.SHIFT}*/
    ],
    [
        {labels:['fn'],               size:SIZES.FN,       code:null},
        {labels:['control'],          size:SIZES.CONTROL,  code:17},
        {labels:['alt','option'],     size:SIZES.OPTION,   code:18},
        {labels:['&#8984;','command'],size:SIZES.COMMAND,  code:91},
        {labels:[],                   size:SIZES.SPACEBAR, code:32},
        null,
        {labels:[],                   size:SIZES.SPACEBAR, code:32},
        {labels:['&#8984;','command'],size:SIZES.COMMAND,  code:91},
        {labels:['alt','option'],     size:SIZES.OPTION,   code:18},
        {labels:['control'],          size:SIZES.CONTROL,  code:17},
        {labels:['&larr;'],           size:SIZES.ARROW,    code:37},
        {labels:['&darr;'],           size:SIZES.ARROW,    code:40},
        {labels:['&rarr;'],           size:SIZES.ARROW,    code:39}
    ]
];

/*
var RIGHT_SIDE = [
    [
        {labels:['&','7'],size:SIZES.LETTER},
        {labels:['*','8'],size:SIZES.LETTER},
        {labels:['(','9'],size:SIZES.LETTER},
        {labels:[')','0'],size:SIZES.LETTER},
        {labels:['_','-'],size:SIZES.LETTER},
        {labels:['+','='],size:SIZES.LETTER},
        {labels:['delete'],size:SIZES.DELETE}
    ],
    [
        {labels:['Y'],size:SIZES.LETTER},
        {labels:['U'],size:SIZES.LETTER},
        {labels:['I'],size:SIZES.LETTER},
        {labels:['O'],size:SIZES.LETTER},
        {labels:['P'],size:SIZES.LETTER},
        {labels:['{','['],size:SIZES.LETTER},
        {labels:['}',']'],size:SIZES.LETTER},
        {labels:['|','\\'],size:SIZES.LETTER}
    ],
    [
        {labels:['H'],size:SIZES.LETTER},
        {labels:['J'],size:SIZES.LETTER},
        {labels:['K'],size:SIZES.LETTER},
        {labels:['L'],size:SIZES.LETTER},
        {labels:[':',';'],size:SIZES.LETTER},
        {labels:['"','\''],size:SIZES.LETTER},
        {labels:['enter', 'return'],size:SIZES.RETURN}
    ],
    [
        {labels:['N'],size:SIZES.LETTER},
        {labels:['M'],size:SIZES.LETTER},
        {labels:['<',','],size:SIZES.LETTER},
        {labels:['>','.'],size:SIZES.LETTER},
        {labels:['?','/'],size:SIZES.LETTER},
        {labels:['shift'],size:SIZES.SHIFT}
    ],
    [
        {labels:[''],size:SIZES.SPACE},
        {labels:['&#8984;','command'],size:SIZES.COMMAND},
        {labels:['alt','option'],size:SIZES.OPTION}
    ]
];
*/
