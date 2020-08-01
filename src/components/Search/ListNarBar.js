import React from 'react'

const ListNarBar = (props) => {
    const {changeStatusBKX}= props;
    const {changeStatusTL}= props;
    const {changeStatusCN}= props;

    return (
        <div className="col-3 list_form--search">
            <div className="card " style={{ width: '18rem' }}>
                <ul className="nav flex-column ">
                    <li className="nav-item">
                        <h4>
                        <a  className="nav-link active" href="#"> <i className="fas fa-map-marker-alt "></i> ĐỊA ĐIỂM NHANH</a></h4>
                    </li>
                    <li className="nav-item">
                        <a onClick={changeStatusBKX} className="nav-link active" href="#"><i className="fas fa-school"></i>  Đại Học Bách Kinh Xây</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={changeStatusTL} className="nav-link" href="#"><i className="fas fa-school"></i>  Đại Học Thăng Long</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={changeStatusCN} className="nav-link" href="#"><i className="fas fa-school"></i>  Đại học Công Nghiệp</a>
                    </li>
                </ul>
            </div>
            <div className="row slide_form--search">
                <div id="carouselExampleInterval" className="carousel slide slide_form--search--carousel" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval={1000}>
                            <a href="https://shopee.vn/">
                            <img src="https://happy.live/wp-content/uploads/2018/12/quang-cao-cua-shopee-bi-cam-tai-indonesia-happy-live-1-530x358.jpg" className="d-block w-100" alt="..." />
                            </a>
                        </div>
                        <div className="carousel-item" data-interval={1000}>
                            <a href="https://tiki.vn/">
                            <img src="https://i.ytimg.com/vi/lTTDfNY_AMs/maxresdefault.jpg" className="d-block w-100" alt="..." />
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="https://www.lazada.vn/">
                            <img src="https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1544957663159-8ERDL1W8ZJS9YRUTLR1F/ke17ZwdGBToddI8pDm48kI2qRkg-0q3G45PV89WLa4d7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT36OZ7az3zCDcEfkzx6jyfjhzgnXkqhbYjEPbvXGon_qdLEBu-2DNU3MEyxLWdSkg/chup-anh-quang-cao-lazada-2.jpg?format=2500w" className="d-block w-100" alt="..." />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ListNarBar
