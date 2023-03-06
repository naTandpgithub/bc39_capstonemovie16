import React from 'react'

export default function ComplexItem(props) {
    const { item, tenHeThongRap, complex } = props;

    console.log(tenHeThongRap);

    const renderTenCumRap = (tenCumRap) => {
        let tenRap;
        if (tenHeThongRap ==="CineStar"){
         tenRap = "CNS";
        } else if (tenHeThongRap === "Galaxy Cinema"){
        tenRap = "GLX";
        } else if (tenHeThongRap === "Lotte Cinema")    {
        tenRap ="Lotte"
        } else{
        tenRap=tenHeThongRap;
        }

        const length = tenRap.length;
        return tenCumRap.slice(length);
    }
    const renderColortenHeThongRap = (tenHeThongRap) => {
        switch (tenHeThongRap) {
            case "BHD Star Cineplex":
                return "#70b741"

            case "cgv":
                return "#ee2d24"

            case "CineStar":
                return "#3372e2"

            case "Galaxy Cinema":
                return "#ff8600"

            case "Lotte Cinema":
                return "#ec2a5a"

            case "MegaGS":
                return "#ebbb1f"
        }
    }
    return (
        <div className='d-flex' style={complex.maCumRap === item.maCumRap?{opacity:"1"}:{}}>
            <img src={item.hinhAnh} />
            <div style={complex.maCumRap === item.maCumRap ? { opacity: "1" } : {}}>
                <p><span style={{ color: renderColortenHeThongRap(tenHeThongRap) }}>{tenHeThongRap}</span>{renderTenCumRap(item.tenCumRap)}</p>
                <a>{item.diaChi}</a>
            </div>
        </div>
    )
}
