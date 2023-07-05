import React, { Component } from "react";
class ShopPopUp extends Component {
  state = {};
  render() {
    const { handle_shop_pop_up } = this.props;
    return (
      <>
        <div
          className="shop-pu-bgc"
          onClick={(e) => {
            handle_shop_pop_up(e);
          }}>
          <div className="shop-pu-content">
            <h3 className="shop-pu-title">مشاوره ثبت نام</h3>
            <p className="shop-pop-up-desc">
              توضیحات : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم استفاده از
              طراحان گرافیک است...
            </p>
            <span className="spu-input-wrapper">
              <span className="si-title">نام و نام خانوادگی</span>
              <input type="text" placeholder="نام و نام خانوادگی" />
            </span>
            <span className="spu-input-wrapper">
              <span className="si-title">تلفن همراه</span>
              <input type="number" placeholder="تلفن همراه" />
            </span>
            <span className="spu-submit-form">تایید</span>
          </div>
        </div>
      </>
    );
  }
}

export default ShopPopUp;
