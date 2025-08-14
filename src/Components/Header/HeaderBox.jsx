import "../Header/HeaderBox.css";

const logos = {
    MSI: "https://preview.redd.it/anyone-else-notice-the-msi-logo-is-basicly-gaben-v0-0udbdhvzunga1.jpeg?width=1024&format=pjpg&auto=webp&s=f1b7745392dc73b6512f118f7ea07537686ab4ad",
    Dell: "https://icon2.cleanpng.com/20180928/jxu/kisspng-dell-logo-brand-organization-design-partners-intrinium-5bae05f689ee93.542755371538131446565.jpg",
    HP: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
    Asus: "https://www.citypng.com/public/uploads/preview/asus-white-logo-701751694773672zaco7tuntk.png",
    MacBook: "https://t3.ftcdn.net/jpg/02/94/22/52/360_F_294225253_YiGjFQNJfEHvd8jpGAZJJSNGSfBnZxMy.jpg",
    Samsung: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    LG: "https://1000logos.net/wp-content/uploads/2017/03/LG-Logo.png",
    Sony: "https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2021/08/Sony-Logo-Font.jpg?resize=1100%2C800&ssl=1",
    Panasonic: "https://static.vecteezy.com/system/resources/previews/020/336/721/non_2x/panasonic-logo-panasonic-icon-free-free-vector.jpg",
    Philips: "https://standfirst-designweek-production.imgix.net/uploads/2013/11/Philips-Shield.jpg?fit=crop&crop=faces&q=80&auto=compress,format&w=364&h=404&dpr=2.625",
    Dewalt: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DeWalt_Logo.svg/2560px-DeWalt_Logo.svg.png",
    Total: "https://vectorseek.com/wp-content/uploads/2023/11/TOTAL-HERRAMIENTAS-Logo-Vector.svg-.png",
    Bosch: "https://img.favpng.com/15/6/6/logo-robert-bosch-gmbh-alternator-product-electric-battery-png-favpng-LdcMeccYaXnuLwNreVykK03jQ.jpg",
    Makita: "https://i.pinimg.com/736x/31/3a/9b/313a9b096a5fe3ebb0430f50aa8f6636.jpg",
    Hitachi: "https://img.favpng.com/10/24/7/hitachi-logo-power-tool-png-favpng-a5hRFuMvJJhqnRm35SnZb47HT.jpg",
};

export const HerderBox = () => {
    return (
        <div className="header-box">
            <h1 className="head-h1">ՀԻՄՆԱԿԱՆ ՄԵՆՅՈՒ</h1>
            <div className="header-div">
                <div className="heder-sect1">
                    <a href="/nsi" className="header-text">
                        <img src={logos.MSI} alt="NSI Logo" className="brand-logo" />
                        MSI
                    </a>
                    <a href="/dell" className="header-text">
                        <img src={logos.Dell} alt="Dell Logo" className="brand-logo" />
                        Dell
                    </a>
                    <a href="/hp" className="header-text">
                        <img src={logos.HP} alt="HP Logo" className="brand-logo" />
                        HP
                    </a>
                    <a href="/asus" className="header-text">
                        <img src={logos.Asus} alt="Asus Logo" className="brand-logo" />
                        Asus
                    </a>
                    <a href="/macbook" className="header-text">
                        <img src={logos.MacBook} alt="MacBook Logo" className="brand-logo" />
                        MacBook
                    </a>
                </div>

        
                <div className="header-sect2">
                    <a href="/samsung" className="header-text">
                        <img src={logos.Samsung} alt="SAMSUNG Logo" className="brand-logo" />
                        SAMSUNG
                    </a>
                    <a href="/lg" className="header-text">
                        <img src={logos.LG} alt="LG Logo" className="brand-logo" />
                        LG
                    </a>
                    <a href="/sony" className="header-text">
                        <img src={logos.Sony} alt="SONY Logo" className="brand-logo" />
                        SONY
                    </a>
                    <a href="/panasonic" className="header-text">
                        <img src={logos.Panasonic} alt="PANASONIC Logo" className="brand-logo" />
                        PANASONIC
                    </a>
                    <a href="/philips" className="header-text">
                        <img src={logos.Philips} alt="PHILIPS Logo" className="brand-logo" />
                        PHILIPS
                    </a>
                </div>

            
            </div>
            <div className="header-sect3">
                <a href="/dewalt" className="header-text">
                    <img src={logos.Dewalt} alt="Dewalt Logo" className="brand-logo" />
                    Dewalt
                </a>
                <a href="/total" className="header-text">
                    <img src={logos.Total} alt="Total Logo" className="brand-logo" />
                    Total
                </a>
                <a href="/bosch" className="header-text">
                    <img src={logos.Bosch} alt="Bosch Logo" className="brand-logo" />
                    Bosch
                </a>
                <a href="/makita" className="header-text">
                    <img src={logos.Makita} alt="Makita Logo" className="brand-logo" />
                    Makita
                </a>
                <a href="/hitachi" className="header-text">
                    <img src={logos.Hitachi} alt="Hitachi Logo" className="brand-logo" />
                    Hitachi
                </a>
            </div>
        </div>
    );
};