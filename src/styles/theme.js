const fonts = {
    primary: 'Poppins, sans-serif',
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    extraBold: 800,
}
const sizes = {
    textPrimary: '16px',
    textTitle: '24px',
    textSubTitle: '20px',
    buttonNormal: '6px 20px',
    buttonSmall: '2px 8px',
    buttonLarge: '10px 20px',
    borderRadius: '20px',
    badgeNormal: '4px 16px 4px 16px',
    cardNormal: {
        'max-width': '400px',
        'min-height': '540px'
    },
    cardBig: {
        'max-width': '460px',
        'min-height': '540px'
    }
}
const accent_blue = {
    basic: '#0095f9',
    gradient: `linear-gradient(to right, #00a9ce, #00a6d5, #00a2dc, #009ee1, #0099e6, #0093eb, 
                #008cf0, #0085f3, #007bf8, #0070fc, #0065fe, #0057ff);`,
    gradientInverted: `linear-gradient(to left, #00a9ce, #00a6d5, #00a2dc, #009ee1, #0099e6, #0093eb, 
                    #008cf0, #0085f3, #007bf8, #0070fc, #0065fe, #0057ff);`,
}

const accent_orange = {
    basic: '#ff8d30',
    gradient: `linear-gradient(to right, #f2a800, #ed9e03, #e89407, #e28b0b, #dc810e, #db7b13,
                #da7517, #d86f1b, #db6a22, #de6528, #e1602f, #e35b35);`,
    gradientInverted: `linear-gradient(to left, #f2a800, #ed9e03, #e89407, #e28b0b, #dc810e, #db7b13,
                #da7517, #d86f1b, #db6a22, #de6528, #e1602f, #e35b35);`
}

const DarkTheme = {  
    fonts: fonts,
    sizes: sizes,  
    colors: {
        accent: accent_blue,
        background: `linear-gradient(to bottom, #222222, #1e1e1e, #1a1a1a,
                    #161616, #121212);`,
        backgroundItem: "#222222",
        textPrimary: '#e4e4e4',
        textButton: '#ffffff'
    },
    effects: {
        shadow: '6px 6px 0.8em #00000082',
    }    
}

const LightTheme = {
    fonts: fonts,
    sizes: sizes,
    colors: {
        accent: accent_blue,        
        background: `linear-gradient(to bottom, #ffffff, #f3f3f3, #e8e8e8,
                    #dcdcdc, #d1d1d1);`,
        backgroundItem: "#ffffff",
        textPrimary: '#222222',
        textButton: '#ffffff'
    },
    effects: {
        shadow: '6px 6px 0.8em #0000003b',
    }    
}

export {DarkTheme, LightTheme};

