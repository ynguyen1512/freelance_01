import React from "react";
import { Card } from "antd";
import security from "../assets/images/security.jpg";
import groupPeople from "../assets/images/group-people.webp";
import groupPeople2 from "../assets/images/group-people-2.jpeg";
import blog1Chuong4 from "../assets/images/chuong4-blog1.webp";
import brain from "../assets/images/brain-1.jpeg";
import media from "../assets/images/media.jpg";
import vietSing from "../assets/images/viets-ing.jpg";
import suTuBien from "../assets/images/su-tu-bien.webp";
import digitalHeadline from "../assets/images/digitalHeadline.jpeg";
import ministry from "../assets/images/ministry.avif";
const BLogDetailSection4 = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 mt-20 rounded-md">
      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        <div>
          {/* Header */}
          <div className="bg-gray-50 py-4 border-b border-gray-300">
            <div className="flex-grow mx-4 border-t-4 border-gray-400"></div>
            <div className="flex justify-between items-center  mx-auto py-4">
              <span className="text-gray-700 font-semibold text-sm px-4">
                FASHION NEWS
              </span>
              <span className="text-gray-700 font-semibold text-sm">
                LICERIA & CO.
              </span>
              <span className="text-gray-700 font-semibold text-sm px-4">
                2024
              </span>
            </div>
            <div className="flex-grow mx-4 border-t-4 border-gray-400"></div>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <div className="w-2/3">
              <p className="leading-16 mt-8 mb-4 text-primary-700 font-serif font-bold text-[60px]">
                Tổng Kết Hành Trình Khám Phá Hệ Thống Truyền Thông Singapore
              </p>
            </div>
            <img
              src={blog1Chuong4}
              alt="Fashion"
              className="w-[300px] rounded-md object-cover h-[200px]"
            />
          </div>

          <img
            src={blog1Chuong4}
            alt="Fashion"
            className="w-full rounded-md object-cover h-[400px] mb-5"
          />
          <div className="grid grid-cols-3 gap-44">
            <div>
              <p className="leading-8 mb-5 text-sm text-gray-700 w-[450px] text-justify">
                Qua từng chương trước của bài viết, chúng ta đã khám phá nhiều
                khía cạnh về hệ thống truyền thông quốc tế của Singapore. Quốc
                đảo này không chỉ nổi bật với nền kinh tế phát triển vượt bậc,
                mà còn với cách quản lý truyền thông chặt chẽ để duy trì sự ổn
                định chính trị và xã hội. Hệ thống truyền thông của Singapore
                đóng vai trò quan trọng trong việc giám sát chính phủ, thúc đẩy
                nhận thức cộng đồng, và phản ánh sự giao thoa giữa nhiều nền văn
                hóa. Đặc biệt, truyền thông quốc tế ở Singapore không chỉ là
                công cụ xây dựng hình ảnh quốc gia mà còn là phương tiện định
                hình chính sách đối ngoại và khơi nguồn dư luận xã hội.
              </p>
              <p className="leading-18 mb-2 text-primary-700 font-serif font-bold text-[18px] w-[450px]">
                Mặt Tốt và Chưa Tốt Trong Mô Hình Truyền Thông Singapore
              </p>
              <p className="leading-18 mb-4 text-primary-700 font-serif font-bold text-[15px] w-[450px]">
                Những Điểm Sáng:
              </p>
              <p className="leading-8 mb-4 text-sm text-gray-700 w-[450px] text-justify">
                Tính ổn định và hiệu quả: Hệ thống truyền thông được kiểm soát
                chặt chẽ, đảm bảo thông tin chính xác, hạn chế tối đa tin giả và
                góp phần duy trì sự hòa hợp xã hội.
              </p>
              <img
                src={security}
                alt="Fashion"
                className="rounded-md object-cover h-[300px] w-full mb-4"
              />
              <p className="leading-8 text-sm text-gray-700 w-[450px] text-justify">
                Tính hệ thống và toàn diện: Mô hình này kết hợp giữa sự tự điều
                chỉnh của nhà báo và các giá trị đạo đức, giảm bớt sự can thiệp
                của nhà nước nhưng vẫn giữ được tính ổn định cần thiết.
              </p>
            </div>
            <div>
              <p className="leading-18 mb-4 text-primary-700 font-serif font-bold text-[15px] w-[450px]">
                Những Mặt Cần Cải Thiện:
              </p>
              <p className="leading-8 text-sm text-gray-700 w-[450px] text-justify">
                Hạn chế tiếng nói đa chiều: Mô hình truyền thông Singapore, với
                sự kiểm soát chặt chẽ của nhà nước, đã mang lại sự ổn định cho
                xã hội. Tuy nhiên, mô hình này cũng đặt ra những hạn chế đáng
                kể. Việc kiểm duyệt nghiêm ngặt và thiếu tính đa nguyên trong
                truyền thông đã hạn chế sự đa dạng ý kiến, dẫn đến việc hạn chế
                không gian cho các quan điểm đối lập, đồng thời khiến người dân
                khó tiếp cận với thông tin đa chiều. Điều này có thể dẫn đến sự
                thiếu hụt về thông tin, giảm tính minh bạch của chính phủ và hạn
                chế sự phát triển của xã hội dân sự.
              </p>
              <img
                src={brain}
                alt="Fashion"
                className="rounded-md object-cover h-[200px] w-full my-4"
              />
              <p className="leading-8 text-sm text-gray-700 w-[450px] text-justify">
                Rủi ro thao túng dư luận: Các chiến lược truyền thông hiện đại
                có thể ảnh hưởng gián tiếp đến nhận thức. Việc kiểm soát chặt
                chẽ của nhà nước đối với truyền thông đã tạo điều kiện thuận lợi
                cho sự phát triển của các chiến lược này, khiến người dân khó
                phân biệt giữa thông tin và tuyên truyền hậu quả là làm suy giảm
                tư duy độc lập của người dân.
              </p>
              <img
                src={media}
                alt="Fashion"
                className="rounded-md object-cover h-[300px] w-full"
              />
            </div>
            <div>
              <p className="leading-18 text-primary-700 font-serif font-bold text-[15px] w-[350px]">
                Singapore có thể làm gì để trở thành một phiên bản tốt hơn?
              </p>
              <p className="leading-8 text-sm text-gray-700 w-[350px] text-justify my-2">
                Singapore có nhiều bước tiến lớn trong quản lý truyền thông,
                nhưng vẫn còn những điều cần cải thiện để đáp ứng kỳ vọng của
                công chúng, đặc biệt là giới trẻ. Một trong những vấn đề nổi bật
                là sự hoài nghi xung quanh Luật Tin Giả POFMA và Ủy ban Đặc biệt
                về Thông tin Sai Lệch Trực Tuyến. Dù được tạo ra để chống lại
                vấn nạn tin giả, nhưng định nghĩa về "tin giả" và cách thực thi
                luật này vẫn khiến nhiều người cảm thấy mơ hồ, dẫn đến thiếu
                niềm tin.
              </p>
              <p className="leading-8 text-sm text-gray-700 w-[350px] text-justify my-2">
                Vậy Singapore nên làm gì? Chính phủ có thể minh bạch hơn bằng
                cách công khai tiêu chí đánh giá, báo cáo tác động và những vụ
                việc đã xử lý. Điều này không chỉ giúp người dân hiểu rõ hơn về
                vai trò của POFMA mà còn tăng cường sự tin tưởng thông qua những
                con số cụ thể.
              </p>
              <p className="leading-8 text-sm text-gray-700 w-[350px] text-justify my-2">
                Bên cạnh đó, lắng nghe ý kiến công dân là yếu tố không thể
                thiếu. Một cách thú vị để thực hiện điều này là tạo ra một ứng
                dụng chuyên dụng, nơi mọi người có thể phản hồi về chính sách
                truyền thông, góp ý về dự thảo hoặc thậm chí báo cáo thông tin
                sai sự thật. Khi người dân được tham gia trực tiếp vào các quyết
                định liên quan đến truyền thông, họ sẽ cảm thấy được tôn trọng
                và gắn bó hơn với hệ thống.
              </p>
              <p className="leading-8 text-sm text-gray-700 w-[350px] text-justify my-2">
                Sự minh bạch và hợp tác chính là chìa khóa để truyền thông
                Singapore không chỉ cải thiện mà còn trở thành hình mẫu cho thế
                giới.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-700 mt-10 text-white py-4">
        <p className="text-[40px] text-center">
          Việt Nam có thể học tập được gì?
        </p>
        <div className="flex-grow mx-4 border-t-4 border-white-400 my-3"></div>
        <div className="grid grid-cols-3 px-4 gap-6">
          <div>
            <p className="leading-8 mb-5 text-sm w-[450px] text-justify">
              Mô hình truyền thông quốc tế của Singapore mang lại nhiều bài học
              quý giá cho Việt Nam trong việc xây dựng và phát triển hình ảnh
              quốc gia. Một trong những yếu tố quan trọng trong chiến lược
              truyền thông của Singapore là xây dựng thương hiệu quốc gia mạnh
              mẽ. Singapore đã tập trung vào các giá trị như hiện đại, ổn định,
              và thân thiện với môi trường kinh doanh, từ đó xây dựng hình ảnh
              quốc gia hấp dẫn và đáng tin cậy.
            </p>
            <p className="leading-8 mb-5 text-sm w-[450px] text-justify">
              Việt Nam có thể học hỏi bằng cách làm nổi bật bản sắc văn hóa đặc
              trưng, vẻ đẹp thiên nhiên và tiềm năng phát triển của mình để thu
              hút đầu tư và du lịch.
            </p>
            <p className="leading-8 mb-5 text-sm w-[450px] text-justify">
              Thứ hai, Singapore cũng rất chú trọng việc sử dụng công nghệ số và
              các nền tảng mạng xã hội để lan tỏa thông điệp quốc gia. Các chiến
              dịch truyền thông của Singapore rất mạnh mẽ trên các nền tảng như
              Facebook, Instagram, YouTube, giúp kết nối với đối tượng khán giả
              quốc tế. Việt Nam nên tăng cường nội dung số đa dạng và sáng tạo,
              truyền tải thông điệp về đất nước một cách hấp dẫn và dễ tiếp cận,
              nhằm nâng cao sự hiện diện trên các nền tảng toàn cầu.
            </p>
          </div>
          <div className="flex flex-col gap-4">
          <img src={vietSing} className="rounded-md" />
            <img src={suTuBien} className="rounded-md" />
            <img src={digitalHeadline} className="rounded-md" />
          </div>
          <div>
            <img src={ministry} className="rounded-md" />
            <p className="leading-8 mb-5 text-sm w-[450px] text-justify">
              Thứ ba, trong việc quản lý thông tin trên không gian mạng, Việt
              Nam đã có những quy định như Luật An toàn thông tin mạng 2015,
              Luật An ninh mạng 2018, và Bộ Quy tắc ứng xử trên mạng xã hội
              2021. Tuy nhiên, Việt Nam hiện chưa có luật chuyên biệt để xử lý
              tin giả trên không gian mạng. Việt Nam có thể tham khảo luật POFMA
              của Singapore để xây dựng luật chống tin giả, định nghĩa cụ thể
              tin giả và các biện pháp xử lý, nhằm góp phần làm trong sạch không
              gian mạng và bảo vệ người dùng.
            </p>
            <p className="leading-18 mb-4 font-serif font-bold text-[15px] w-[450px]">
              Hướng Đi Tiếp Theo Cho Những Ai Quan Tâm Đến Chủ Đề Này!
            </p>
            <p className="leading-8 mb-5 text-sm w-[450px] text-justify">
              Dù đã đạt được những kết quả đáng kể, nghiên cứu vẫn còn hạn chế
              về phạm vi và phương pháp. Trong thời gian tới, cần có các khảo
              sát trực tiếp để hiểu rõ hơn tác động của truyền thông, đồng thời
              so sánh mô hình của Singapore với các quốc gia khác, từ Thái Lan
              đến Hoa Kỳ. Đồng thời, chúng tôi cũng sẽ nghiên cứu sâu hơn về
              cách truyền thông tại Singapore tác động đến đời sống người dân và
              chính sách quốc gia. Hãy theo dõi để không bỏ lỡ những thông tin
              hấp dẫn!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BLogDetailSection4;
