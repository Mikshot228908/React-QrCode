import { Scanner } from '@yudiel/react-qr-scanner';


export const QrCodeScanner = () => {
    
    const scanHandler = (result) =>{
        console.log(result)
    }
    
    const settings = {
        audio:false,
        finder: false,
    };

    const stylesSettings = {
        container:{width:350}
    }
    
    
    return (
    <div>
        <Scanner 
            onScan={scanHandler} 
            allowMultiple
            components={settings}
            styles={stylesSettings}
        />;
    </div>
    );
}