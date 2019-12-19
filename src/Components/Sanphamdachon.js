import React from "react";
import "./Sanphamdachon.css";

class Sanphamdachon extends React.Component {
  render() {
    return (
      <section className="sanPhamDaChon">
        <div className="container">
          <h6>Sản phẩm đã chọn</h6>
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs img">
              <img src="images/products/an-may-di-vang.png" title="an may di vang" alt="true" />
              <p className="price">
                Giá : 67.000{" "}
                <span style={{ textDecoration: "underline" }}>đ</span>
              </p>
              <div className="soLuong">
                <p>Số Lượng : 1</p>
                <a href="true">
                  <i className="fas fa-sort" />
                </a>
              </div>
              <a href="true">
                <p>Xóa</p>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs img">
              <img src="images/products/block-chain.png" title="block-chain" alt="true" />
              <p className="price">
                Giá : 120.000{" "}
                <span style={{ textDecoration: "underline" }}>đ</span>
              </p>
              <div className="soLuong">
                <p>Số Lượng : 1</p>
                <a href="true">
                  <i className="fas fa-sort" />
                </a>
              </div>
              <a href="true">
                <p>Xóa</p>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs img">
              <img src="images/products/khcn-apple.png" title="inside-apple" alt="true" />
              <p className="price">
                Giá : 107.000{" "}
                <span style={{ textDecoration: "underline" }}>đ</span>
              </p>
              <div className="soLuong">
                <p>Số Lượng : 1</p>
                <a href="true">
                  <i className="fas fa-sort" />
                </a>
              </div>
              <a href="true">
                <p>Xóa</p>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs img">
              <img src="images/products/hary-poster.png" title="hary-poster" alt="true" />
              <p className="price">
                Giá : 210.000{" "}
                <span style={{ textDecoration: "underline" }}>đ</span>
              </p>
              <div className="soLuong">
                <p>Số Lượng : 1</p>
                <a href="true">
                  <i className="fas fa-sort" />
                </a>
              </div>
              <a href="true">
                <p>Xóa</p>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs img">
              <img src="images/products/trai-suc-vat.png" title="trai-suc-vat" alt="true" />
              <p className="price">
                Giá : 78.000{" "}
                <span style={{ textDecoration: "underline" }}>đ</span>
              </p>
              <div className="soLuong">
                <p>Số Lượng : 1</p>
                <a href="true">
                  <i className="fas fa-sort" />
                </a>
              </div>
              <a href="true">
                <p>Xóa</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Sanphamdachon;