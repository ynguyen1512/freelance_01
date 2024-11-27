import React from "react";
import { useParams } from "react-router-dom";
import sing1 from "../assets/images/sing-1.jpg";
import trendBLog1 from "../assets/images/trend-blog-1.png";
import singMalay from "../assets/images/singapore-kuala-lumpur.jpg";
import chinhTri from "../assets/images/chinh-tri-sing.jpg";
import chinhTri2 from "../assets/images/chinh-tri-2.jpg";
import sing3 from "../assets/images/sing-3.jpg";
import sing4 from "../assets/images/sing-4.jpeg";
import { Card } from "antd";
import sing8 from "../assets/images/sing-8.webp";
import infocom from "../assets/images/infocom.png";
import passionMade from "../assets/images/passion-made.webp";
import policy from "../assets/images/policy.jpg";
import boVanHoa from "../assets/images/bo-van-hoa.jpg";
import khungHoang from "../assets/images/khung-hoang.jpg";
import groupPeople from "../assets/images/group-people.webp";
import groupPeople2 from "../assets/images/group-people-2.jpeg";
import khungHoang2 from "../assets/images/khung-hoang-2.jpg";
import research3 from "../assets/images/research-3.png";
import iOneTech from "../assets/images/ionetech.webp";
import sing11 from "../assets/images/sing11.jpg";
import sing12 from "../assets/images/sing12.jpg";
import singPolitical from "../assets/images/sing-political.jpg";

const BlogDetailSection3 = () => {
  const blogs = [
    {
      id: 1,
      title: "Tình hình kinh tế",
      description:
        "Nền kinh tế Singapore được đánh giá là một trong những nền kinh tế mở và cạnh tranh nhất thế giới, nhờ vị trí chiến lược giúp quốc gia này trở thành trung tâm thương mại quan trọng trong khu vực",
      date: "21 Nov, 2024",
      content:
        "Nền kinh tế Singapore được đánh giá là một trong những nền kinh tế mở và cạnh tranh nhất thế giới, nhờ vị trí chiến lược giúp quốc gia này trở thành trung tâm thương mại quan trọng trong khu vực. Theo số liệu mới nhất từ Bộ Thương mại và Công nghiệp Singapore (MTI), GDP của nước này trong quý III/2024 đã tăng trưởng 4,1% so với cùng kỳ năm trước, vượt xa mức tăng 2,9% của quý II. Sự phục hồi mạnh mẽ trong lĩnh vực sản xuất là động lực chính thúc đẩy tăng trưởng, đặc biệt ở các ngành công nghiệp chủ lực, ngoại trừ sản xuất y sinh. Các lĩnh vực dịch vụ như thông tin và truyền thông, tài chính và bảo hiểm cũng ghi nhận mức tăng trưởng ấn tượng, góp phần quan trọng vào sự phát triển chung của nền kinh tế.",
      author: "Amanda",
      image: sing1 || "",
      imageContent: trendBLog1 || "",
      imageCaption: "Tốc độ tăng trưởng GDP của Singapore (đơn vị: %)",
      image2: singMalay || "",
      content2:
        "Từ một quốc gia nhỏ bé với diện tích chỉ hơn 700 km² và nguồn tài nguyên thiên nhiên gần như không đáng kể, Singapore đã vươn lên trở thành một trong những nền kinh tế hàng đầu thế giới. Thành công của quốc đảo này không phải là kết quả của sự may mắn, mà là sự tổng hòa giữa tầm nhìn chiến lược, khả năng quản lý hiệu quả và sự tập trung phát triển vào các ngành kinh tế mũi nhọn. Singapore chính là minh chứng sống động rằng: một quốc gia dù nhỏ bé về địa lý vẫn có thể chinh phục đỉnh cao kinh tế toàn cầu.",
      title2: "Các ngành kinh tế mũi nhọn của Singapore",
      subTitle2: "Logistics: Mạch máu của nền kinh tế Singapore",
      description2:
        "Với vị trí chiến lược trên tuyến giao thương quốc tế kết nối châu Á, châu Âu và Bắc Mỹ, Singapore đã xây dựng ngành logistics như một xương sống cho nền kinh tế. Theo Cơ quan Phát triển Truyền thông Infocomm (IMDA), ngành này đóng góp đều đặn khoảng 7,4% GDP hàng năm, là động lực quan trọng thúc đẩy sự tăng trưởng bền vững.",
    },
  ];

  const blog2 = [
    {
      id: 2,
      title: "Tình hình chính trị",
      description:
        "Nền kinh tế Singapore được đánh giá là một trong những nền kinh tế mở và cạnh tranh nhất thế giới, nhờ vị trí chiến lược giúp quốc gia này trở thành trung tâm thương mại quan trọng trong khu vực",
      date: "21 Nov, 2024",
      content:
        "Singapore là một quốc gia nhỏ bé nhưng mang trong mình một hệ thống chính trị đặc thù, vừa kế thừa những nguyên tắc của mô hình nghị viện Westminster từ Anh Quốc, vừa có những nét đặc trưng riêng biệt. Dưới sự lãnh đạo của Đảng Hành động Nhân dân (People's Action Party - PAP), hệ thống chính trị Singapore đã góp phần to lớn trong việc xây dựng một quốc gia ổn định, phát triển mạnh mẽ về kinh tế và xã hội.",
      author: "Amanda",
      image: chinhTri,
      imageContent: chinhTri2,
      imageCaption: "Tốc độ tăng trưởng GDP của Singapore (đơn vị: %)",
      image2: singMalay,
      content2:
        "Từ một quốc gia nhỏ bé với diện tích chỉ hơn 700 km² và nguồn tài nguyên thiên nhiên gần như không đáng kể, Singapore đã vươn lên trở thành một trong những nền kinh tế hàng đầu thế giới. Thành công của quốc đảo này không phải là kết quả của sự may mắn, mà là sự tổng hòa giữa tầm nhìn chiến lược, khả năng quản lý hiệu quả và sự tập trung phát triển vào các ngành kinh tế mũi nhọn. Singapore chính là minh chứng sống động rằng: một quốc gia dù nhỏ bé về địa lý vẫn có thể chinh phục đỉnh cao kinh tế toàn cầu.",
      title2: "Các ngành kinh tế mũi nhọn của Singapore",
      subTitle2: "Logistics: Mạch máu của nền kinh tế Singapore",
      description2:
        "Với vị trí chiến lược trên tuyến giao thương quốc tế kết nối châu Á, châu Âu và Bắc Mỹ, Singapore đã xây dựng ngành logistics như một xương sống cho nền kinh tế. Theo Cơ quan Phát triển Truyền thông Infocomm (IMDA), ngành này đóng góp đều đặn khoảng 7,4% GDP hàng năm, là động lực quan trọng thúc đẩy sự tăng trưởng bền vững.",
    },
  ];

  const blog3 = [
    {
      id: 3,
      title: "Tình hình xã hội",
      description:
        "Nền kinh tế Singapore được đánh giá là một trong những nền kinh tế mở và cạnh tranh nhất thế giới, nhờ vị trí chiến lược giúp quốc gia này trở thành trung tâm thương mại quan trọng trong khu vực",
      date: "21 Nov, 2024",
      content:
        "Nền kinh tế Singapore được đánh giá là một trong những nền kinh tế mở và cạnh tranh nhất thế giới, nhờ vị trí chiến lược giúp quốc gia này trở thành trung tâm thương mại quan trọng trong khu vực. Theo số liệu mới nhất từ Bộ Thương mại và Công nghiệp Singapore (MTI), GDP của nước này trong quý III/2024 đã tăng trưởng 4,1% so với cùng kỳ năm trước, vượt xa mức tăng 2,9% của quý II. Sự phục hồi mạnh mẽ trong lĩnh vực sản xuất là động lực chính thúc đẩy tăng trưởng, đặc biệt ở các ngành công nghiệp chủ lực, ngoại trừ sản xuất y sinh. Các lĩnh vực dịch vụ như thông tin và truyền thông, tài chính và bảo hiểm cũng ghi nhận mức tăng trưởng ấn tượng, góp phần quan trọng vào sự phát triển chung của nền kinh tế.",
      author: "Amanda",
      image: sing3 || "",
      imageContent: trendBLog1 || "",
      imageCaption: "Tốc độ tăng trưởng GDP của Singapore (đơn vị: %)",
      image2: singMalay || "",
      content2:
        "Từ một quốc gia nhỏ bé với diện tích chỉ hơn 700 km² và nguồn tài nguyên thiên nhiên gần như không đáng kể, Singapore đã vươn lên trở thành một trong những nền kinh tế hàng đầu thế giới. Thành công của quốc đảo này không phải là kết quả của sự may mắn, mà là sự tổng hòa giữa tầm nhìn chiến lược, khả năng quản lý hiệu quả và sự tập trung phát triển vào các ngành kinh tế mũi nhọn. Singapore chính là minh chứng sống động rằng: một quốc gia dù nhỏ bé về địa lý vẫn có thể chinh phục đỉnh cao kinh tế toàn cầu.",
      title2: "Các ngành kinh tế mũi nhọn của Singapore",
      subTitle2: "Logistics: Mạch máu của nền kinh tế Singapore",
      description2:
        "Với vị trí chiến lược trên tuyến giao thương quốc tế kết nối châu Á, châu Âu và Bắc Mỹ, Singapore đã xây dựng ngành logistics như một xương sống cho nền kinh tế. Theo Cơ quan Phát triển Truyền thông Infocomm (IMDA), ngành này đóng góp đều đặn khoảng 7,4% GDP hàng năm, là động lực quan trọng thúc đẩy sự tăng trưởng bền vững.",
    },
  ];

  const { id } = useParams();
  const blogId = parseInt(id, 10);
  const blog = blogs.find((blog) => blog.id === blogId);
  const blog2Content = blog2.find((blog) => blog.id === blogId);
  const blog3Content = blog3.find((blog) => blog.id === blogId);

  return (
    <>
      {blog && !blog2Content && !blog3Content && (
        <div className="bg-gray-100 min-h-screen mt-20">
          <div className="relative">
            <img src={sing11} className="w-full h-[780px] object-cover" />
            <p className="leading-18 mt-8 mb-4 text-primary-700 bg-white font-normal text-[40px] absolute top-0 w-2/3 pl-8 py-4 uppercase">
              Truyền thông trong việc định hình chính sách đối ngoại
            </p>
          </div>
          {/* Main Section */}
          <div className="gap-8 px-8">
            <div>
              <div className="grid grid-cols-1 gap-24">
                {/* First Block */}
                <div className="col-span-2">
                  {/* <div className="mt-10 relative mb-16"> */}
                   
                    <p className="leading-18 mt-5 -ml-8 bg-primary-700 p-6 font-normal text-[25px] -bottom-10 text-white">
                      Cách đưa tin của các hãng truyền thông quốc gia
                    </p>
                  {/* </div> */}
                  <div>
                  <img
                      src={infocom}
                      alt="Fashion"
                      className="rounded-md object-cover h-[200px] w-[800px] my-5 mx-auto"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <p className="leading-8 mb-2 text-sm text-gray-700 w-full text-justify">
                        Truyền thông Singapore đóng vai trò then chốt trong việc
                        định hình cách quốc gia này được nhìn nhận cả trong và
                        ngoài nước. Dưới sự quản lý chặt chẽ của Infocomm Media
                        Development Authority (IMDA), các phương tiện truyền
                        thông quốc gia tập trung vào việc thúc đẩy nội dung phù
                        hợp với giá trị xã hội và lợi ích quốc gia. Điều này đảm
                        bảo rằng thông tin đưa ra thường ủng hộ các chính sách
                        của chính phủ, đồng thời thúc đẩy một xã hội ổn định,
                        gắn kết.
                      </p>
                      <p className="leading-8 text-sm text-gray-700 w-full text-justify">
                        Các hãng truyền thông lớn như Mediacorp và SPH Media
                        Trust cam kết cung cấp thông tin chính xác, tránh các
                        nội dung kích động hoặc gây bất ổn. Điều này giúp xây
                        dựng hình ảnh một Singapore an toàn và đáng tin cậy
                        trong mắt quốc tế. Khi đưa tin về xung đột toàn cầu,
                        truyền thông Singapore thường giữ lập trường trung lập,
                        tập trung vào hợp tác khu vực và lợi ích quốc gia. Cách
                        tiếp cận này giúp Singapore tăng cường uy tín trong quan
                        hệ ngoại giao, đặc biệt với các cường quốc như Mỹ, Trung
                        Quốc, và EU, đồng thời bảo vệ sự ổn định nội bộ khỏi
                        những luồng thông tin quốc tế tiêu cực.
                      </p>
                    </div>
                    <div>
                      <p className="leading-8 text-sm text-gray-700 w-full text-justify">
                        Bên cạnh việc phản ánh chính sách đối ngoại, truyền
                        thông còn góp phần xây dựng hình ảnh quốc gia và thúc
                        đẩy giao lưu văn hóa quốc tế. Một ví dụ tiêu biểu là
                        chiến dịch Passion Made Possible, sáng kiến truyền thông
                        của Tổng cục Du lịch Singapore (STB). Chiến dịch không
                        chỉ quảng bá du lịch mà còn kể câu chuyện đa chiều về
                        Singapore, nhấn mạnh sự sáng tạo và tiềm năng của quốc
                        gia này. Ông Lionel Yeo, Tổng giám đốc STB, nhấn mạnh
                        rằng chiến dịch tạo sự kết nối sâu sắc với công chúng
                        toàn cầu, kể cả những người chưa từng đến Singapore.
                      </p>
                      <img
                        src={passionMade}
                        alt="Fashion"
                        className="rounded-md object-cover h-[300px] w-1/2 mt-5 mx-auto"
                      />
                      <p className="leading-8 text-sm text-gray-700 w-full text-justify mt-5">
                        Để triển khai, STB sử dụng các kênh truyền thông đa dạng
                        như Visitsingapore.com, YouTube và Facebook. Tại Ấn Độ,
                        họ hợp tác với các nghệ sĩ nổi tiếng như KJ Yesudas và
                        SP Bala để sản xuất video khám phá Singapore, thu hút
                        hơn 1,2 triệu lượt xem trên YouTube. Những video này
                        không chỉ chia sẻ thông tin văn hóa mà còn khơi gợi
                        những câu chuyện và trải nghiệm cá nhân, tạo cầu nối
                        giữa cộng đồng trong nước và quốc tế.
                      </p>
                      <p className="leading-8 text-sm text-gray-700 w-full text-justify">
                        Từ khi ra mắt, chiến dịch Passion Made Possible đã lan
                        tỏa mạnh mẽ qua các sự kiện toàn cầu và chiến dịch tiếp
                        thị quốc tế, thu hút hơn 555 triệu khán giả và gần 300
                        triệu lượt xem video tính đến cuối năm 2018. Đây là minh
                        chứng rõ ràng cho sự thành công của truyền thông
                        Singapore trong việc xây dựng hình ảnh tích cực và gắn
                        kết trên trường quốc tế.
                      </p>
                      <div>
                        <p className="leading-8 text-sm text-gray-700 w-full text-justify mt-5">
                          Chính phủ Singapore cũng kiểm soát truyền thông một
                          cách chặt chẽ nhằm định hướng dư luận, đảm bảo sự ổn
                          định xã hội và duy trì quan điểm đồng thuận với lợi
                          ích quốc gia. Điều này giúp hạn chế ảnh hưởng từ các
                          nguồn thông tin quốc tế có quan điểm trái ngược, đồng
                          thời bảo vệ sự đoàn kết xã hội trong bối cảnh cạnh
                          tranh quyền lực khu vực.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              {/* title 2 */}
              {/* <div className="mt-10 relative mb-16"> */}
                {/* <img
                  src={policy}
                  alt="Fashion"
                  className="rounded-md object-cover h-[400px] w-full"
                /> */}
                <p className="leading-18 mt-5 -ml-8 bg-primary-700 p-6 font-normal text-[25px] -bottom-10 text-white">
                  Vai trò của truyền thông trong định hình chính sách đối ngoại
                </p>
              {/* </div> */}
              <div>
                <p className="leading-8 mb-5 text-sm text-gray-700 w-full mt-5 text-justify">
                  Truyền thông không chỉ là một công cụ thông tin mà còn là yếu
                  tố quan trọng trong việc xây dựng hình ảnh quốc gia và điều
                  hướng dư luận, đặc biệt là ở các quốc gia có vai trò chiến
                  lược như Singapore.
                </p>
              </div>
              {/* 3 */}
              <div className="mt-10 mb-16">
                <img
                  src={boVanHoa}
                  alt="Fashion"
                  className="rounded-md object-cover h-[500px] w-2/3 mx-auto"
                />
               
              </div>
              <div className="grid grid-cols-1 mb-10">
                <div>
                <p className="leading-18 text-primary-700 font-bold text-[15px] w-full -mt-10 mb-4">
                  Vai Trò của Truyền Thông trong Việc Xây Dựng Vị Thế Quốc Gia
                  tại Singapore
                </p>
                  <p className="leading-8 mb-2 text-sm text-gray-700 w-full text-justify">
                    Tại Singapore, truyền thông không chỉ là cầu nối thông tin
                    mà còn là công cụ chiến lược giúp xây dựng đồng thuận xã hội
                    và thúc đẩy vị thế quốc gia trên trường quốc tế. Truyền
                    thông được sử dụng để cung cấp thông tin rõ ràng, chính xác
                    về các chính sách đối ngoại, giải thích bối cảnh và lý do
                    cho các quyết định quan trọng. Điều này không chỉ giúp công
                    chúng hiểu rõ hơn về mối quan hệ hợp tác quốc phòng, kinh tế
                    và an ninh với các đối tác toàn cầu mà còn khẳng định vai
                    trò tích cực của Singapore trong khu vực ASEAN và trên thế
                    giới.
                  </p>
                  <p className="leading-8 text-sm text-gray-700 w-full text-justify">
                    Chính phủ Singapore cũng kiểm soát truyền thông một cách
                    chặt chẽ nhằm định hướng dư luận, đảm bảo sự ổn định xã hội
                    và duy trì quan điểm đồng thuận với lợi ích quốc gia. Điều
                    này giúp hạn chế ảnh hưởng từ các nguồn thông tin quốc tế có
                    quan điểm trái ngược, đồng thời bảo vệ sự đoàn kết xã hội
                    trong bối cảnh cạnh tranh quyền lực khu vực.
                  </p>
                </div>
                <div>
                  <p className="leading-8 text-sm text-gray-700 w-full text-justify">
                    Không chỉ dừng lại ở việc kiểm soát thông tin, Singapore còn
                    tận dụng truyền thông để xây dựng quyền lực mềm thông qua
                    ngoại giao văn hóa. Các chương trình giao lưu văn hóa và
                    giáo dục được quảng bá rộng rãi, giúp quốc gia trở thành cầu
                    nối văn hóa trong khu vực châu Á - Thái Bình Dương. Đây là
                    một phần trong chiến lược tổng thể nhằm định hình hình ảnh
                    Singapore như một quốc gia hiện đại, ổn định và đáng tin
                    cậy, luôn sẵn sàng hợp tác quốc tế.
                  </p>
                  <p className="leading-8 text-sm text-gray-700 w-full text-justify">
                    Với vai trò đa diện, truyền thông tại Singapore không chỉ
                    đóng góp vào sự phát triển quốc gia mà còn khẳng định vị thế
                    của đảo quốc sư tử như một trung tâm hòa bình, hợp tác và
                    thịnh vượng trong khu vực và trên thế giới.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* blog detail 2 */}
      {blog2Content && !blog && !blog3Content && (
        <div className="bg-gray-100 min-h-screen mt-20">
          <div className="relative">
            <img
              src={singPolitical}
              className="w-full h-[780px] object-cover"
            />
            <p className="leading-18 mt-8 mb-4 text-primary-700 bg-white font-normal text-[40px] absolute top-0 w-2/3 pl-8 py-4 uppercase">
              Truyền thông quốc tế trong việc tạo lập và định hướng dư luận xã
              hội
            </p>
          </div>
          {/* Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <div className="px-8">
              <p className="leading-8 mb-5 mt-5 text-sm text-gray-700 w-full text-justify">
                PGS. TS. Nguyễn Tuấn Anh cho rằng dư luận xã hội phản ánh thái
                độ, suy nghĩ, niềm tin của công chúng trước các sự kiện có tính
                thời sự, đặc biệt khi liên quan đến lợi ích cộng đồng. Dư luận
                có thể tích cực hoặc tiêu cực, tùy thuộc vào góc nhìn của từng
                nhóm người.
              </p>
              <p className="leading-8 text-sm text-gray-700 w-full text-justify">
                Tại Singapore, một quốc gia với nền tảng "dân tộc tưởng tượng"
                từ thời thuộc địa, truyền thông quốc tế đóng vai trò quan trọng
                trong việc khơi nguồn và định hình dư luận xã hội bởi không chỉ
                cung cấp thông tin mà còn ảnh hưởng đến nhận thức, hành vi của
                công chúng, đặc biệt trong các vấn đề như khủng hoảng, xung đột
                và ngoại giao văn hóa, giúp Singapore duy trì sự kết nối và
                thích nghi với những thay đổi trong bối cảnh quốc tế.
              </p>
              <div className="mt-10 relative mb-16">
                <img
                  src={khungHoang}
                  alt="Fashion"
                  className="rounded-md object-cover h-[400px] w-full"
                />
                <p className="leading-18 mt-5 -ml-8 bg-primary-700 p-6 font-normal text-[25px] absolute -bottom-10 text-white">
                  Khủng hoảng: Vai trò của Truyền thông trong Đại dịch COVID-19
                </p>
              </div>
              <div className="grid grid-cols-1 gap-16">
                <div>
                  <p className="leading-8 text-sm text-gray-700 w-full text-justify">
                    Trong thời kỳ đại dịch COVID-19, truyền thông quốc tế đóng
                    vai trò then chốt giúp công chúng hiểu rõ hơn về loại virus
                    mới. Tại Singapore, báo chí như Channel News Asia nhanh
                    chóng cập nhật tình hình dịch bệnh và các biện pháp y tế
                    công cộng. Chiến dịch "SG Clean" của Cục Môi trường Quốc gia
                    (NEA) tập trung nâng cao ý thức vệ sinh, mở rộng từ các khu
                    ăn uống đến trường học, trung tâm thương mại và địa điểm du
                    lịch. Sự phối hợp chặt chẽ giữa các cơ quan chính phủ đã
                    giúp đảm bảo an toàn sức khỏe cho cộng đồng trong giai đoạn
                    đầy thách thức này.
                  </p>
                  <p className="leading-8 text-sm text-gray-700 w-full text-justify">
                    Truyền thông quốc tế như Bloomberg và The Straits Times cũng
                    nêu bật tác động kinh tế nghiêm trọng, khiến nhiều gia đình
                    Singapore đối mặt với khó khăn tài chính. Hành vi tiêu dùng
                    thay đổi rõ rệt khi người dân ưu tiên tiết kiệm hơn chi
                    tiêu. Các tổ chức hỗ trợ, điển hình là Beyond Social
                    Services, đã trở thành cứu cánh cho những hoàn cảnh khó
                    khăn.
                  </p>

                  <div className="mt-10 relative">
                    <img
                      src={groupPeople}
                      alt="Fashion"
                      className="rounded-md object-cover h-[400px] w-full"
                    />
                    <p className="leading-18 mt-5 -ml-8 bg-primary-700 p-6 font-normal text-[25px] absolute -bottom-10 text-white">
                      Ngoại giao Văn hóa: Biến Đổi từ “Sa Mạc Văn Hóa” thành
                      Biểu Tượng Toàn Cầu
                    </p>
                  </div>
                </div>
                <div>
                  <p className="leading-8 text-sm text-gray-700 w-full text-justify mb-5">
                    Từng bị xem là “sa mạc văn hóa” trong thập niên 1970-1980,
                    Singapore ngày nay đã vươn lên như một hình mẫu sáng tạo
                    trong chính sách kinh tế văn hóa. Các cơ quan như Cơ quan
                    Nghệ thuật Quốc gia và Tổng cục Du lịch Singapore (STB) đã
                    không ngừng thúc đẩy các sáng kiến nhằm đưa văn hóa trở
                    thành cầu nối trong ngoại giao quốc tế.
                  </p>
                  <img
                    src={groupPeople2}
                    className="rounded-md object-cover h-[500px] w-full"
                  />
                  <p className="leading-8 text-sm text-gray-700 w-full text-justify mt-5">
                    Quỹ Quốc tế Singapore (SIF) đóng vai trò quan trọng trong
                    việc xây dựng lòng tin và sự tôn trọng giữa các quốc gia
                    thông qua các chương trình hợp tác nhân dân trong lĩnh vực y
                    tế, giáo dục và kinh doanh xã hội. Với các dự án như Our
                    Better World, SIF đã tận dụng truyền thông kỹ thuật số để
                    kết nối cộng đồng toàn cầu, thúc đẩy hành động xã hội tích
                    cực.
                  </p>
                  <p className="leading-8 text-sm text-gray-700 w-full text-justify mb-5">
                    Ngoại giao công chúng của Singapore minh chứng cho sự chuyển
                    mình vượt bậc, từ một đảo quốc nhỏ thành một biểu tượng toàn
                    cầu về sự thấu hiểu và khả năng quản trị hiệu quả, ngay cả
                    trong bối cảnh thế giới đầy xung đột.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* blog detail 3 */}
      {blog3Content && !blog && !blog2Content && (
        <div className="bg-gray-100 min-h-screen p-8 mt-20">
          <div className="relative">
            <img src={sing11} className="w-full h-[780px] object-cover" />
            <p className="leading-18 mt-8 mb-4 text-primary-700 bg-white font-normal text-[40px] absolute top-0 w-2/3 pl-8 py-4 uppercase">
              Thách thức và cơ hội trong truyền thông quốc tế
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <div>
              <div className="grid grid-cols-3 gap-24">
                {/* First Block */}
                <div className="col-span-2">
                  <div className="mt-10 relative mb-16">
                    <img
                      src={khungHoang2}
                      alt="Fashion"
                      className="rounded-md object-cover h-[400px] w-full"
                    />
                    <p className="leading-18 mt-5 -ml-8 bg-primary-700 p-6 font-normal text-[25px] absolute -bottom-10 text-white">
                      Thách thức trong truyền thông quốc tế
                    </p>
                  </div>
                </div>

                {/* Second Block */}
              </div>

              <div className="grid grid-cols-1">
                <div>
                  <div>
                    <p className="leading-8 text-sm w-full text-justify my-5">
                      Thách thức đầu tiên là cân bằng giữa kiểm soát nội dung và
                      tự do ngôn luận ở Singapore. Nhóm tác giả nhận thấy rằng
                      vấn đề kiểm soát lan truyền những thông tin giả mạo, sai
                      sự thật đang là một trong những mối quan tâm hàng đầu của
                      Singapore. Điều này không chỉ gây khó khăn cho truyền
                      thông chính thống mà còn ảnh hưởng đến sự tin tưởng của
                      công chúng đối với các nguồn tin. Dẫn chứng cho điều đó là
                      niềm tin vào tin tức ở Singapore đã giảm nhẹ trong năm
                      2022 xuống còn 43%, sau khi tăng lên do COVID vào năm
                      2021.
                    </p>
                    <div className="flex items-center gap-2 flex-col">
                      <img
                        src={research3}
                        className="rounded-md object-cover h-[320px] w-1/2 mx-auto"
                      />
                      <p className="text-sm">
                        Niềm tin vào tin tức ở Singapore (Đơn vị: %)
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="leading-8 text-sm w-full text-justify my-5">
                    Tiếp theo là thách thức thứ hai - thích ứng với chuyển đổi
                    kỹ thuật số. Singapore phải đối mặt với thách thức lớn trong
                    việc kiểm soát thông tin trên các nền tảng truyền thông xã
                    hội, nơi tin tức lan truyền nhanh chóng và có khả năng gây
                    nhiễu. Dù các phương tiện truyền thông truyền thống như The
                    Straits Times vẫn giữ vị thế quan trọng, sự xuất hiện của
                    các nền tảng trực tuyến thay thế đang thử thách cách tiếp
                    cận truyền thống của Singapore trong việc xây dựng lòng tin
                    với công chúng​.
                  </p>
                  <p className="leading-8 text-sm w-full text-justify">
                    Thách thức cuối cùng là nhạy cảm văn hóa trong sản xuất
                    truyền thông quốc tế. Singapore phải đối mặt với thách thức
                    lớn trong việc quản lý và tôn trọng sự nhạy cảm văn hóa. Với
                    bản sắc đa văn hóa, bao gồm các cộng đồng người Hoa, Mã Lai,
                    Ấn Độ và Âu châu, Singapore cần cân nhắc kỹ lưỡng để tránh
                    nội dung truyền thông gây hiểu nhầm hoặc phản cảm cho bất kỳ
                    nhóm văn hóa nào. Ví dụ, khi tiếp cận các thị trường đa dạng
                    văn hóa, có nguy cơ gặp phản ứng tiêu cực nếu nội dung đó
                    không phản ánh đúng chuẩn mực văn hóa hoặc có yếu tố nhạy
                    cảm với một số quốc gia như các bộ phim hay chương trình
                    phát sóng quốc tế có thể chứa nội dung hoặc quan điểm không
                    phù hợp với văn hóa của một số khu vực.
                  </p>
                </div>
                <div>
                  <div className="mt-10 relative mb-4">
                    <img
                      src={iOneTech}
                      alt="Fashion"
                      className="rounded-md object-cover h-[400px] w-full"
                    />
                    <p className="leading-18 mt-5 bg-primary-700 p-6 w-full font-normal text-[25px] absolute -top-12 text-white text-center">
                    Cơ hội trong truyền thông quốc tế
                    </p>
                  </div>
                  <p className="leading-8 text-sm w-full text-justify mb-5">
                    Một trong những cơ hội mà Singapore có thể tận dụng chính là
                    sự bùng nổ của công nghệ thông tin và truyền thông. Theo
                    thống kê của We Are Social và Meltwater năm 2024, Singapore
                    có khoảng 96% dân số sử dụng Internet và 85% người dân dùng
                    mạng xã hội. Độ phủ sóng gần như hoàn toàn của Internet và
                    tỷ lệ người dùng mạng xã hội cao của Singapore là một lợi
                    thế giúp truyền thông quốc tế tạo ra các chiến dịch truyền
                    thông hiệu quả thông qua các nền tảng trực tuyến.
                  </p>
                  <p className="leading-8 text-sm w-full text-justify mb-5">
                    Bên cạnh đó, bối cảnh toàn cầu và xu thế toàn cầu hoá hiện
                    nay cũng là cơ hội để Singapore ứng dụng vào truyền thông.
                    Thông qua các kênh truyền thông, Singapore vừa là cầu nối
                    giữa các quốc gia trong khu vực, vừa là nguồn cung cấp các
                    chương trình, bản tin văn hóa đa dạng, đưa hình ảnh văn hóa
                    toàn cầu đến với người dân. Bên cạnh đó, mối quan hệ văn hóa
                    - du lịch trong bối cảnh toàn cầu hóa và hội nhập quốc tế có
                    ảnh hưởng, tác động qua lại lẫn nhau và nhờ vào xu hướng
                    toàn cầu hoá, du lịch quốc tế trở nên dễ dàng hơn bao giờ
                    hết.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetailSection3;
