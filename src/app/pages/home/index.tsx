
import { CardView, WidgetFront } from '../../components/interface'
import { Header, Footer, WithBottomNav } from "../../components/layout"

const terbaikData = [
    {
        IDR: "160.000",
        Name: "Playstation Network Card",
        Stok: "150",
        StokPercentage: "60%",
        HargaCoret: "Rp. 130.000",
        HargaPure: "Rp 106.000",
        Status: "Pengiriman Instan",
        Terjual: "1531 terjual",
        Image: "https://d1x91p7vw3vuq8.cloudfront.net/itemku-upload/202177/dokan0s4swa2sk9chljr0a_thumbnail.webp"
    },
    {
        IDR: "66 Shells",
        Name: "Seal Online Blades Of Destiny",
        Stok: "657",
        StokPercentage: "9%",
        HargaCoret: "Rp. 20.000",
        HargaPure: "Rp 18.300",
        Status: "Pengiriman Instan",
        Terjual: "13016 terjual",
        Image: "https://d1x91p7vw3vuq8.cloudfront.net/itemku-upload/2021412/qiddbmthiajc4c86dbhlog_thumbnail.webp"
    },
    {
        IDR: "66 Shells",
        Name: "Arena Of Valor",
        Stok: "657",
        StokPercentage: "9%",
        HargaCoret: "Rp. 20.000",
        HargaPure: "Rp 18.300",
        Status: "Pengiriman Instan",
        Terjual: "13016 terjual",
        Image: "https://d1x91p7vw3vuq8.cloudfront.net/web/20210118/ffa2339de07f8c4cf0eb24478e62ccb9b9f887c1b4138d1487fa24b3686156be_thumb.webp"
    },
    {
        IDR: "66 Shells",
        Name: "Ragnarok Enternal Love",
        Stok: "657",
        StokPercentage: "9%",
        HargaCoret: "Rp. 20.000",
        HargaPure: "Rp 18.300",
        Status: "Pengiriman Instan",
        Terjual: "13016 terjual",
        Image: "https://d1x91p7vw3vuq8.cloudfront.net/web/20200602/215cb5a8d40cc1a2cceeb7030d2786530555a4587cf0176b6179fa507fe04388_thumb.webp"
    },
    {
        IDR: "66 Shells",
        Name: "Voucher Garena",
        Stok: "657",
        StokPercentage: "9%",
        HargaCoret: "Rp. 20.000",
        HargaPure: "Rp 18.300",
        Status: "Pengiriman Instan",
        Terjual: "13016 terjual",
        Image: "https://d1x91p7vw3vuq8.cloudfront.net/web/20200805/2c7bc36bea710d34874458b9f4337678d7e4da5703b2243ca05d0d164ab31e18_thumb.webp"
    },
    {
        IDR: "66 Shells",
        Name: "Voucher Garena",
        Stok: "657",
        StokPercentage: "9%",
        HargaCoret: "Rp. 20.000",
        HargaPure: "Rp 18.300",
        Status: "Pengiriman Instan",
        Terjual: "13016 terjual",
        Image: "https://d1x91p7vw3vuq8.cloudfront.net/20190414/5cb3263175261_thumb.webp"
    },
]


export const PageHome = () => {
    return (
        <WithBottomNav>
            <Header />



            <div className="main">
                <WidgetFront />
                <CardView title="Termurah di Sumatera Barat" dataCard={terbaikData} />
            </div>
            <Footer />
        </WithBottomNav>
    )
}

