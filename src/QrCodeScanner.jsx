import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';


export const QrCodeScanner = () => {
    
    const [text,setText] = useState(null);


    const scanHandler = (result) => {
        setText(result[0].rawValue)
    }

    console.log('hwhduwh',text)
    
    const settings = {
        audio:false,
        finder: false,
    };

    const stylesSettings = {
        container:{width:350, height:250}
    }

    
    
    return (
    <div style={{width:'500px'}}>
        <Scanner 
            onScan={scanHandler} 
            allowMultiple
            components={settings}
            styles={stylesSettings}
        />;
    </div>
    );
}