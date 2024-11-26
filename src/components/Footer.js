import React from "react";
import { Button } from "antd";
import { FacebookOutlined, YoutubeOutlined } from "@ant-design/icons";
import logo from "../assets/images/logo-hoc-vien-ngoai-giao.png";

const Footer = () => {
  return (
    <footer className="bg-primary-700 text-white py-10 px-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-7 gap-8">
        {/* Column 1: Logo */}
        <div>
          <div className="mb-0">
            <img src={logo} alt="ConNest Logo" className="w-20" />
          </div>
          <p className="text-sm opacity-80 mt-6 font-bold">
            Diplomatic Academy of Vietnam
          </p>
        </div>

        {/* Column 2: About */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Giới thiệu</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://www.dav.edu.vn/loi-chao-mung/" className="hover:text-green-300">
                Lời Chào mừng Lịch sử và Dấu ấn
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/su-mang-tam-nhin-gia-tri-cot-loi-triet-ly-giao-duc/" className="hover:text-green-300">
              Sứ mạng - Tầm nhìn - Giá trị cốt lõi - Triết lý giáo dục
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Services and Projects */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Tin tức</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://www.dav.edu.vn/tuyen-dung-2022/" className="hover:text-green-300">
              Tuyển dụng 2022
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/tuyen-dung-2024/" className="hover:text-green-300">
              Tuyển dụng 2024
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/tin-tuc-hoi-thao-toa-dam/" className="hover:text-green-300">
              Hội thảo – Toạ đàm
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/tin-tuc-goc-sinh-vien/" className="hover:text-green-300">
              Góc sinh viên
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/tin-tuc-ba-cong-khai/" className="hover:text-green-300">
              Ba Công Khai
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/tuyen-dung-2021/" className="hover:text-green-300">
              Tuyển dụng
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Cơ cấu tổ chức</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://www.dav.edu.vn/dang-uy/" className="hover:text-green-300">
              Đảng uỷ
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/hoi-dong-hoc-vien/" className="hover:text-green-300">
              Hội đồng Học viện
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/ban-giam-docAll/" className="hover:text-green-300">
              Ban Giám dốc
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/hoi-dong-khoa-hoc-va-dao-tao/" className="hover:text-green-300">
              Hội đồng khoa học và Đào tào
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/cong-doan/" className="hover:text-green-300">
              Công đoàn
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/cac-don-vi/" className="hover:text-green-300">
              Các đơn vị
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/doan-thanh-nien/" className="hover:text-green-300">
              Đoàn thanh niên
              </a>
            </li>
          </ul>
        </div>
        {/* Column 5: Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Nghiên cứu</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://www.dav.edu.vn/nghien-cuu-hop-tac-quoc-te/" className="hover:text-green-300">
              Hợp tác quốc tế
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/gioi-thieu-chung-nghien-cu/" className="hover:text-green-300">
              Giới thiệu chung
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/su-kien-hoi-thao-toa-dam/" className="hover:text-green-300">
              Sự kiện - Hội thảo - Toạ đàm
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/quan-ly-khoa-hoc/" className="hover:text-green-300">
              Quản lý khoa học
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/an-pham-nghien-cuu/" className="hover:text-green-300">
              Ấn phẩm
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/cac-don-vi/" className="hover:text-green-300">
              Các đơn vị
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/doan-thanh-nien/" className="hover:text-green-300">
              Đoàn thanh niên
              </a>
            </li>
          </ul>
        </div>
        {/* Column 6: Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Bồi dưỡng</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://www.dav.edu.vn/gioi-thieu-chung-bd/" className="hover:text-green-300">
              Giới thiệu chung
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/khoa-boi-duong-bd/" className="hover:text-green-300">
              Khoá bồi dưỡng
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/su-kien-hoi-thao-toa-dam/" className="hover:text-green-300">
              Sự kiện - Hội thảo - Toạ đàm
              </a>
            </li>
          </ul>
        </div>
        {/* Column 7: Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Hợp tác quốc tế</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://www.dav.edu.vn/hop-tac-quoc-te-ve-dao-tao/" className="hover:text-green-300">
              Hợp tác quốc tế về Đào tạo
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/hop-tac-quoc-te-boi-duong/" className="hover:text-green-300">
              Hợp tác quốc tế Bồi dưỡng
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/hop-tac-quoc-te-nghien-cuu/" className="hover:text-green-300">
              Hợp tác quốc tế nghiên cứu
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/mang-luoi-ngoai-giao-kenh-2/" className="hover:text-green-300">
              Mạng lưới Ngoại giao Kênh 2
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/hoat-dong-ngoai-giao-doan/" className="hover:text-green-300">
              Hoạt động Ngoại giao Đoàn
              </a>
            </li>
            <li>
              <a href="https://www.dav.edu.vn/giao-luu-sinh-vien-quoc-te/" className="hover:text-green-300">
              Giao lưu sinh viên
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-green-800 mt-10 pt-6 text-center text-sm opacity-80">
      Copyright ® 2024 Học viện Ngoại giao - Diplomatic Academy of Vietnam | Điều kiện | Bảo mật
      </div>
    </footer>
  );
};

export default Footer;
