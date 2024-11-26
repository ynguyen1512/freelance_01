import React from "react";
import singbg from "../assets/images/singapore-bg.webp";
import sing14 from '../assets/images/sing14.webp'
import sing15 from '../assets/images/sing15.jpg'

const AboutUs = () => {
  return (
    <section class="pt-10 overflow-hidden text-primary-700 md:pt-0 sm:pt-16 2xl:pt-16 mt-32 mb-20">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1">
          <div>
            <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Singapore và Truyền thông quốc tế của Đảo quốc Sư Tử
            </h2>
            <img
            src={singbg}
            className="h-[600px] w-full object-cover rounded-md mt-8"
            />
            <p class="max-w-lg mt-3 text-xl leading-relaxed md:mt-4">
              GIỚI THIỆU
            </p>
            <div className="flex justify-between gap-10">
            <div>
            <p className="leading-8 mb-5 text-sm text-justify w-[550px]">
              Trong bối cảnh toàn cầu hóa, truyền thông quốc tế đóng vai trò
              quan trọng trong việc xây dựng hình ảnh và thương hiệu quốc gia.
              Không chỉ dừng lại ở việc phát sóng tin tức, truyền thông quốc tế
              là một phần quan trọng trong chiến lược "sức mạnh mềm," giúp các
              quốc gia nâng cao nhận thức và tạo dựng lòng tin từ cộng đồng quốc
              tế. Đặc biệt, trong môi trường cạnh tranh toàn cầu, truyền thông
              góp phần thúc đẩy phát triển kinh tế và chính trị, đồng thời kết
              nối các nền văn hóa, tạo không gian giao lưu đa dạng.
            </p>
            <p className="leading-8 mb-5 text-sm text-justify w-[550px]">
              Singapore, một quốc gia phát triển về kinh tế và là trung tâm
              truyền thông của Đông Nam Á, là ví dụ tiêu biểu về sự hội nhập
              toàn cầu. Với vai trò cầu nối thông tin, truyền thông quốc tế tại
              Singapore không chỉ phản ánh các vấn đề toàn cầu mà còn hỗ trợ các
              chiến lược đối ngoại của quốc gia này. Nhờ vị trí địa lý thuận
              lợi, Singapore thu hút nhiều cơ quan và công ty truyền thông quốc
              tế lớn như BBC, Reuters và Bloomberg.
            </p>
            </div>
            <img src={sing14} className="w-1/2 rounded-md h-[300px] object-cover"/>
            </div>
           <div className="flex justify-between gap-10">
           <img src={sing15} className="w-1/2 rounded-md h-[300px] object-cover"/>
            <p className="leading-8 mb-5 text-sm text-justify w-[600px]">
              Với những lý do trên, blog của chúng mình mang đến cho các bạn một
              đề tài hết sức hấp dẫn: "Singapore và Truyền thông quốc tế của Đảo
              quốc Sư Tử" nhằm nghiên cứu vai trò của truyền thông trong sự phát
              triển kinh tế, chính trị, xã hội. Hơn thế nữa, từ đây nhóm tác giả
              còn cung cấp những khuyến nghị cho hệ thông truyền thông của Việt
              Nam.
            </p>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
