import React, { Component } from "react";
class Discount extends Component {
  state = {
    pause: false,
    code_err: false,
  };
  render() {
    return (
      <>
        <div className="discount-code">
          <input
            type="text"
            className="discount-code-input"
            name="discount-input"
            placeholder="کد تخفیف خود را وارد کنید"
          />
          <span className="submit-discount-code">ثبت کد</span>
        </div>
        {this.state.code_err ? (
          <span className="dicount-code-problem">مشکل برای کد تخفیف</span>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Discount;
