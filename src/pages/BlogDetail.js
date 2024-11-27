import React from "react";
import newsImg from "../assets/images/blog-img-1.png";
import { useParams } from "react-router-dom";
import sing1 from "../assets/images/sing-1.jpg";
import trendBLog1 from "../assets/images/trend-blog-1.png";
import singMalay from "../assets/images/singapore-kuala-lumpur.jpg";
import cangSing from "../assets/images/cang-singapore.jpg";
import sgx from "../assets/images/SGX.webp";
import sing20 from "../assets/images/sing20.webp";
import stage from "../assets/images/stage.webp";
import taylor from "../assets/images/taylor.jpg";
import taylor2 from "../assets/images/taylor2.webp";
import { twMerge } from "tailwind-merge";
import sing2 from "../assets/images/sing-political.jpg";
import chinhTri from "../assets/images/chinh-tri-sing.jpg";
import chinhTri2 from "../assets/images/chinh-tri-2.jpg";
import newCentre from "../assets/images/new-centre.jpeg";
import mediaCorp from "../assets/images/mediaCrop.jpg";
import sing3 from "../assets/images/sing-3.jpg";
import peopleSing from "../assets/images/people-sing.webp";
import mechanic from "../assets/images/mechanic.webp";
import children from "../assets/images/children.jpg";
import infoIncreasing from "../assets/images/Mau-thong-bao-tang-gia-san-pham-Tai-xuong-mau-moi-nhat-nam-2022.jpg";
import truyenThong1 from "../assets/images/truyen-thong-xa-hoi.jpg";
import truyenThong2 from "../assets/images/truyen-thong-xa-hoi-2.jpg";
import sing4 from "../assets/images/sing-4.jpeg";
import maxWell from "../assets/images/maxwell.jpg";
import leHoi from "../assets/images/le-hoi-sing.jpg";
import hotel from "../assets/images/raffles.jpg";
import education from "../assets/images/education.avif";
import researchSing from "../assets/images/reseach-sing.webp";
import media from "../assets/images/mediaSwinBurne.jpg";
import mediaOutdoor from "../assets/images/media-outdoor.jpg";
import socialMediaIcon from "../assets/images/social-media-icon.avif";

const BlogDetail = () => {
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

  const blog4 = [
    {
      id: 4,
      title: "Tình hình văn hoá",
      description:
        "Nền kinh tế Singapore được đánh giá là một trong những nền kinh tế mở và cạnh tranh nhất thế giới, nhờ vị trí chiến lược giúp quốc gia này trở thành trung tâm thương mại quan trọng trong khu vực",
      date: "21 Nov, 2024",
      content:
        "Nền kinh tế Singapore được đánh giá là một trong những nền kinh tế mở và cạnh tranh nhất thế giới, nhờ vị trí chiến lược giúp quốc gia này trở thành trung tâm thương mại quan trọng trong khu vực. Theo số liệu mới nhất từ Bộ Thương mại và Công nghiệp Singapore (MTI), GDP của nước này trong quý III/2024 đã tăng trưởng 4,1% so với cùng kỳ năm trước, vượt xa mức tăng 2,9% của quý II. Sự phục hồi mạnh mẽ trong lĩnh vực sản xuất là động lực chính thúc đẩy tăng trưởng, đặc biệt ở các ngành công nghiệp chủ lực, ngoại trừ sản xuất y sinh. Các lĩnh vực dịch vụ như thông tin và truyền thông, tài chính và bảo hiểm cũng ghi nhận mức tăng trưởng ấn tượng, góp phần quan trọng vào sự phát triển chung của nền kinh tế.",
      author: "Amanda",
      image: sing4 || "",
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
  const blog4Content = blog4.find((blog) => blog.id === blogId);

  return (
    <>
      {/* Blog 1 */}
      {blog && !blog2Content && !blog3Content && (
        <div
          className={twMerge(
            "bg-pink-50 font-sans text-gray-700 pb-20",
            !blog && "hidden"
          )}
        >
          {/* Header Section */}
          <div className="relative">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-[#F8E1D2] text-[70px] font-extrabold tracking-widest mt-96 uppercase">
                {blog.title}
              </h1>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="container mx-auto px-10 md:px-32 mt-20 grid grid-cols-1 w-full">
            <div className="flex justify-center">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[500px] rounded-lg object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-10 mt-10">
              {/* Content */}
              <div>
                <p className="leading-8 mb-6 text-justify">{blog.content}</p>
                {/* Content Image with Caption */}
                <div className="flex flex-col gap-5 items-center">
                  <img
                    src={blog.imageContent}
                    alt={blog.title}
                    className="rounded-lg shadow-md w-2/3"
                  />
                  <p className="text-sm text-gray-500">{blog.imageCaption}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 mt-10">
              {/* Content */}
              <div>
                {/* Content Image with Caption */}
                <div className="flex flex-col gap-5 items-center">
                  <img
                    src={blog.image2}
                    alt={blog.title}
                    className="rounded-lg shadow-md w-1/2"
                  />
                </div>
                <p className="leading-8 my-6 text-justify">{blog.content2}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 -mt-5">
              {/* Content */}
              <div>
                <p className="leading-8 my-6 text-primary-700 font-bold text-[18px] uppercase">
                  {blog.title2}
                </p>
                <p className="leading-8 -mt-5 my-0 text-primary-700 font-normal text-[16px]">
                  Logistics: Mạch máu của nền kinh tế Singapore
                </p>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Với vị trí chiến lược trên tuyến giao thương quốc tế kết nối
                  châu Á, châu Âu và Bắc Mỹ, Singapore đã xây dựng ngành
                  logistics như một xương sống cho nền kinh tế. Theo Cơ quan
                  Phát triển Truyền thông Infocomm (IMDA), ngành này đóng góp
                  đều đặn khoảng 7,4% GDP hàng năm, là động lực quan trọng thúc
                  đẩy sự tăng trưởng bền vững.
                </p>
                {/* Content Image with Caption */}
                <div className="flex flex-col gap-5 items-center">
                  <img
                    src={cangSing}
                    alt={blog.title}
                    className="rounded-lg shadow-md w-1/2"
                  />
                </div>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Cảng Singapore, một trong những cảng bận rộn nhất thế giới, xử
                  lý hàng triệu TEUs container mỗi năm, đảm bảo sự liền mạch của
                  chuỗi cung ứng toàn cầu. Không chỉ vậy, sân bay Changi – biểu
                  tượng của sự hiện đại – không chỉ nổi tiếng với dịch vụ hành
                  khách xuất sắc mà còn là trung tâm vận chuyển hàng hóa giá trị
                  cao như dược phẩm và các sản phẩm nhạy cảm với nhiệt độ. Ngành
                  logistics đã và đang củng cố vị thế của Singapore như một
                  trung tâm thương mại toàn cầu, duy trì sự phát triển bền vững
                  cho nền kinh tế quốc gia.
                </p>
                <p className="leading-8 mt-5 my-0 text-primary-700 font-normal text-[16px]">
                  Tài chính: Trụ cột của thịnh vượng
                </p>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Nếu logistics là mạch máu thì ngành tài chính chính là trái
                  tim của nền kinh tế Singapore. Quốc gia này từ lâu đã nổi danh
                  là trung tâm tài chính hàng đầu thế giới, thu hút hàng trăm
                  ngân hàng quốc tế, công ty bảo hiểm và quỹ đầu tư. Hệ thống
                  tài chính của Singapore nổi bật bởi sự ổn định, minh bạch và
                  được quản lý chặt chẽ, trở thành nơi lý tưởng cho các giao
                  dịch tài chính toàn cầu.
                </p>
                <div className="flex flex-col gap-5 items-center mt-5">
                  <img
                    src={sgx}
                    alt={blog.title}
                    className="rounded-lg shadow-md w-1/2"
                  />
                </div>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Không dừng lại ở đó, Singapore còn tập trung vào đổi mới trong
                  lĩnh vực tài chính, đặc biệt là công nghệ tài chính (FinTech).
                  Những startup sáng tạo được chính phủ hỗ trợ mạnh mẽ, tạo nên
                  một hệ sinh thái hiện đại và cạnh tranh, góp phần đưa
                  Singapore trở thành biểu tượng cho sự phát triển bền vững
                  trong lĩnh vực tài chính.
                </p>
                {/* --- */}
                <p className="leading-8 mt-5 my-0 text-primary-700 font-normal text-[16px]">
                  Kinh tế số: Bệ phóng của tương lai
                </p>
                <div className="flex flex-col gap-5 items-center mt-5">
                  <img
                    src={sing20}
                    alt={blog.title}
                    className="rounded-lg shadow-md w-1/2"
                  />
                </div>

                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Trong kỷ nguyên số hóa, Singapore tiếp tục dẫn đầu với chiến
                  lược phát triển kinh tế số. Từ năm 2018 đến 2022, quy mô kinh
                  tế số của Singapore đã tăng gần gấp đôi, đạt 77,7 tỷ USD,
                  chiếm hơn 17% GDP. Những chính sách khuyến khích đầu tư vào
                  nghiên cứu và phát triển (R&D) đã giúp quốc gia này nhanh
                  chóng trở thành trung tâm công nghệ cao.
                </p>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Các lĩnh vực như trí tuệ nhân tạo (AI), blockchain, dữ liệu
                  lớn (Big Data) và công nghệ tài chính (FinTech) đều nhận được
                  sự quan tâm đặc biệt. Chính phủ Singapore không chỉ định hướng
                  quốc gia đi đầu trong đổi mới mà còn xây dựng một nền tảng
                  vững chắc để thu hút nhân tài và vốn đầu tư toàn cầu.
                </p>
                {/* ---- */}
                <p className="leading-8 mt-5 my-0 text-primary-700 font-normal text-[16px]">
                  Du lịch: Giao thoa giữa văn hóa và hiện đại
                </p>

                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Bên cạnh những ngành kinh tế mũi nhọn, du lịch cũng đóng vai
                  trò quan trọng, góp phần đưa Singapore trở thành một điểm đến
                  hấp dẫn hàng đầu thế giới. Với những biểu tượng như Marina Bay
                  Sands, Gardens by the Bay và Sentosa Island, cùng những khu
                  vực văn hóa đặc sắc như Chinatown, Little India, và Kampong
                  Glam, ngành du lịch đóng góp 4-5% GDP quốc gia hàng năm.
                </p>
                {/* change */}
                <div className="flex gap-5 items-center mt-5">
                  <img
                    src={stage}
                    alt={blog.title}
                    className="rounded-lg shadow-md w-1/2 h-[300px]"
                  />
                  <img
                    src={taylor}
                    alt={blog.title}
                    className="rounded-lg shadow-md w-1/2 h-[300px]"
                  />
                </div>

                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Không chỉ vậy, Singapore còn là trung tâm tổ chức sự kiện quốc
                  tế và du lịch MICE, với những chương trình đình đám như
                  Singapore Grand Prix (F1) hay tour diễn "The Eras Tour" của
                  Taylor Swift. Những sự kiện này không chỉ thu hút hàng chục
                  nghìn du khách mà còn thúc đẩy mạnh mẽ doanh thu từ khách sạn,
                  dịch vụ và bán lẻ, đóng góp tích cực vào sự phát triển kinh tế
                  chung.
                </p>
                <div className="flex flex-col gap-5 items-center mt-5">
                  <img
                    src={taylor2}
                    alt={blog.title}
                    className="rounded-lg shadow-md w-1/2"
                  />
                </div>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Từ một quốc gia nhỏ bé không có nhiều lợi thế tự nhiên,
                  Singapore đã chứng minh rằng: nguồn lực quan trọng nhất chính
                  là con người và sự nhạy bén trong chiến lược phát triển. Với
                  tầm nhìn xa và khả năng triển khai hiệu quả, Singapore đã vươn
                  lên trở thành một kỳ tích kinh tế toàn cầu, là minh chứng sống
                  động cho sự kiên trì và sáng tạo.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Blog 2 */}
      {blog2Content && !blog && !blog3Content && (
        <div className="bg-pink-50 font-sans text-gray-700 pb-20">
          {/* Header Section */}
          <div className="relative">
            <img
              src={blog2Content.image}
              alt={blog2Content.title}
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-[#F8E1D2] text-[70px] font-extrabold tracking-widest mt-96 uppercase">
                {blog2Content.title}
              </h1>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="container mx-auto px-10 md:px-32 grid grid-cols-1 w-full">
            <div className="grid grid-cols-1 gap-10 mt-10">
              {/* Content */}
              <div>
                <p className="leading-8 mb-6 text-justify">{blog2Content.content}</p>
                {/* Content Image with Caption */}
                <div className="flex gap-5 items-center">
                  <img
                    src={blog2Content.image}
                    alt={blog2Content.title}
                    className="rounded-lg shadow-md w-2/3 object-cover h-[300px]"
                  />
                  <img
                    src={blog2Content.imageContent}
                    alt={blog2Content.title}
                    className="rounded-lg shadow-md w-1/2 h-[300px]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 -mt-5">
              {/* Content */}
              <div>
                <p className="leading-8 mt-8 mb-4 text-primary-700 font-bold text-[18px]">
                  Hệ Thống Chính Trị Singapore: Kết Hợp Dân Chủ và Kiểm Soát
                  Chặt Chẽ
                </p>
                <p className="-mt-4 leading-8 text-sm text-gray-700 text-justify">
                  Singapore theo chế độ cộng hòa nghị viện, với các cuộc bầu cử
                  được tổ chức thường xuyên và quốc hội do người dân bầu chọn.
                  Tuy nhiên, hệ thống chính trị của quốc gia này cũng mang nhiều
                  đặc điểm của một nhà nước kiểm soát chặt chẽ. PAP – đảng cầm
                  quyền và lực lượng chính trị chi phối tại Singapore – không
                  chỉ đảm bảo sự ổn định trong quản lý mà còn đóng vai trò trung
                  tâm trong chiến lược phát triển kinh tế của đất nước. Dưới sự
                  lãnh đạo của PAP, Singapore đã nhanh chóng chuyển mình từ một
                  nền kinh tế non trẻ thành một trong những trung tâm kinh tế
                  hàng đầu thế giới.
                </p>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Chính quyền PAP tập trung vào việc duy trì môi trường chính
                  trị ổn định, quản lý xã hội chặt chẽ và triển khai những chính
                  sách kinh tế mang tính chiến lược. Điều này không chỉ giúp
                  Singapore đạt được tăng trưởng vượt bậc mà còn đảm bảo trật tự
                  xã hội – yếu tố then chốt trong thành công của một quốc gia
                  nhỏ bé nhưng đầy tham vọng.
                </p>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Dù PAP chiếm ưu thế áp đảo trong chính trường, Singapore vẫn
                  duy trì các cuộc bầu cử thường xuyên, với quốc hội được bầu
                  chọn bởi người dân. Điều này đảm bảo tính dân chủ trong hệ
                  thống chính trị, dù trên thực tế, quốc gia này mang nhiều đặc
                  điểm của một nhà nước kiểm soát mạnh mẽ. PAP luôn nỗ lực để
                  duy trì sự ổn định và tránh những xáo trộn có thể cản trở sự
                  phát triển.
                </p>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Mặc dù PAP là đảng cầm quyền, các đảng đối lập vẫn đóng vai
                  trò quan trọng trong việc thúc đẩy sự minh bạch và cân bằng
                  trong hệ thống chính trị Singapore.
                </p>
                <ul className="list-disc ml-8">
                  <li className="my-2 leading-8 text-sm text-gray-700 text-justify">
                    Đảng Công Nhân (Workers' Party - WP): Đây là đảng đối lập
                    lớn nhất tại Singapore, tập trung vào các vấn đề như phúc
                    lợi xã hội và cải cách dân chủ. WP không ngừng nỗ lực để
                    mang lại tiếng nói cho người dân, đồng thời giám sát hoạt
                    động của chính phủ.
                  </li>
                  <li className="my-2 leading-8 text-sm text-gray-700 text-justify">
                    Đảng Tiến Bộ Singapore (Progress Singapore Party - PSP):
                    Được thành lập sau này, PSP là đảng đối lập lớn thứ hai với
                    tư tưởng trung tả. Đảng này nhấn mạnh tầm quan trọng của quyền lực Quốc hội và trách nhiệm giải trình của chính phủ.
                  </li>
                </ul>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Ngoài hai đảng lớn trên, Singapore còn có sự hiện diện của
                  nhiều đảng đối lập khác như Đảng Cải Cách (Reform Party), Đảng
                  Nhân Dân Singapore (Singapore People’s Party - SPP), Đảng Dân
                  Chủ Singapore (Singapore Democratic Party - SDP), và các đảng
                  nhỏ khác. Những đảng này, dù không có sức ảnh hưởng lớn như
                  PAP, vẫn tạo ra sự đa dạng trong chính trường và mang đến các
                  góc nhìn khác biệt về phát triển kinh tế, văn hóa và xã hội.
                </p>
                <p className="leading-8 mt-5 my-0 text-primary-700 font-normal text-[16px]">
                  Truyền Thông Ở Singapore: Công Cụ Định Hình Chính Sách Và Tư
                  Tưởng Công Chúng
                </p>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Tại Singapore, truyền thông không chỉ đơn thuần là kênh cung
                  cấp thông tin mà còn đóng vai trò quan trọng trong việc định
                  hướng dư luận và tạo đồng thuận xã hội. Chính phủ Singapore
                  thực hiện kiểm soát chặt chẽ lĩnh vực này, biến truyền thông
                  thành công cụ hỗ trợ đắc lực cho việc quản lý quốc gia và thúc
                  đẩy sự phát triển bền vững.
                </p>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Hệ thống truyền thông tại Singapore được chi phối bởi hai tập
                  đoàn lớn là Mediacorp và SPH Media Trust (SMT). SMT sở hữu một
                  loạt các tờ báo xuất bản bằng bốn ngôn ngữ chính, bao gồm
                  tiếng Anh, tiếng Trung, tiếng Malaysia, và tiếng Tamil. Trong
                  số đó, các tờ báo như The Straits Times, The Business Times,
                  và The New Paper nổi bật với những nội dung tập trung vào tài
                  chính, kinh tế, chính trị và các vấn đề toàn cầu. Chính phủ
                  yêu cầu các cơ quan báo chí đảm bảo tính chính xác, khách
                  quan, đồng thời phản ánh đúng định hướng chính sách. Theo quan
                  điểm của chính quyền Singapore, truyền thông không được xem
                  như "quyền lực thứ tư" độc lập mà là một phần của hệ thống hỗ
                  trợ quản lý đất nước.
                </p>
                <div className="flex gap-5 items-center mt-5">
                  <img
                    src={newCentre}
                    alt={blog2Content.title}
                    className="rounded-lg shadow-md w-1/2 h-[300px]"
                  />
                  <img
                    src={mediaCorp}
                    alt={blog2Content.title}
                    className="rounded-lg shadow-md w-1/2 h-[300px]"
                  />
                </div>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Sự kiểm soát này được thực hiện thông qua khung pháp lý rõ
                  ràng, đặc biệt là Luật Báo In và Các Ấn Phẩm In (NPPA) cùng
                  Luật Phát Thanh Truyền Hình (BA). Theo NPPA, mọi tờ báo muốn
                  phát hành tại Singapore phải xin giấy phép nếu số lượng in
                  vượt 300 bản và nội dung liên quan đến chính trị hoặc khu vực
                  Đông Nam Á. Ngoài ra, các công ty truyền thông bị cấm nhận tài
                  trợ từ nước ngoài, trừ những trường hợp vì mục đích thương
                  mại. Các quy định này không chỉ đảm bảo tính kiểm soát mà còn
                  ngăn chặn các ảnh hưởng từ bên ngoài có thể gây bất ổn cho
                  quốc gia.
                </p>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Trong thời đại kỹ thuật số, Singapore tiếp tục đẩy mạnh quản
                  lý thông tin trực tuyến bằng việc ban hành Luật Bảo Vệ Khỏi Sự
                  Thao Túng và Lừa Dối Trực Tuyến (POFMA). Đạo luật này nhằm đối
                  phó với vấn nạn tin giả trên mạng, yêu cầu các nền tảng trực
                  tuyến và công ty công nghệ tuân thủ các quy định nghiêm ngặt.
                  POFMA áp dụng các hình phạt mạnh tay: các công ty vi phạm có
                  thể bị phạt tới 1 triệu SGD (hơn 19 tỷ VND), còn cá nhân vi
                  phạm đối mặt với mức phạt 100.000 SGD (gần 2 tỷ VND) hoặc án
                  tù lên tới 10 năm. Luật này không chỉ giúp chính phủ kiểm soát
                  thông tin mà còn định hình nhận thức của người dân, tạo ra
                  hình ảnh một Singapore an toàn, ổn định và thịnh vượng.
                </p>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Sự kiểm soát không chỉ giới hạn ở truyền thông trong nước.
                  Chính phủ Singapore còn đặt ra quy định nghiêm ngặt đối với
                  các tổ chức truyền thông quốc tế hoạt động tại đây, yêu cầu họ
                  tuân thủ luật pháp địa phương và không can thiệp vào chính trị
                  nội bộ. Điều này đảm bảo mọi thông tin được truyền tải đều phù
                  hợp với lợi ích quốc gia và không làm tổn hại đến sự ổn định
                  chính trị.
                </p>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Nhờ chiến lược quản lý truyền thông hiệu quả, chính phủ
                  Singapore đã thành công trong việc duy trì niềm tin và sự đồng
                  thuận xã hội. Một khảo sát của Viện Gallup vào năm 2010 cho
                  thấy 69% người dân Singapore tin tưởng vào truyền thông trong
                  nước, con số đáng kể so với nhiều quốc gia khác. Điều này minh
                  chứng cho sức mạnh của hệ thống truyền thông được định hướng
                  rõ ràng trong việc củng cố hình ảnh quốc gia và tạo niềm tin
                  vào các chính sách.
                </p>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Singapore đã cho thấy cách truyền thông có thể trở thành công
                  cụ hiệu quả trong việc thúc đẩy phát triển xã hội, định hình
                  tư tưởng công chúng và đảm bảo sự ổn định chính trị. Mô hình
                  này không chỉ phản ánh sự quản lý hiệu quả của chính phủ mà
                  còn là một bài học giá trị về vai trò của truyền thông trong
                  việc xây dựng một quốc gia thịnh vượng.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Blog 3 */}
      {blog3Content && !blog && !blog2Content && (
        <div className="bg-pink-50 font-sans text-gray-700 pb-20">
          {/* Header Section */}
          <div className="relative">
            <img
              src={blog3Content.image}
              alt={blog3Content.title}
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-[#F8E1D2] text-[70px] font-extrabold tracking-widest mt-96 uppercase">
                {blog3Content.title}
              </h1>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="container mx-auto px-10 md:px-32 grid grid-cols-1 w-full">
            <div className="grid grid-cols-1 gap-10 mt-10">
              {/* Content */}
              <div>
                <p className="leading-8 mb-4 text-primary-700 font-bold text-[18px]">
                  Tổng quan
                </p>
                {/* Content Image with Caption */}
                <div className="flex flex-col gap-5 items-center">
                  <img
                    src={peopleSing}
                    className="rounded-lg shadow-md w-2/3 object-cover"
                  />
                </div>
                <p className="mt-4 leading-8 text-sm text-gray-700 text-justify">
                  Tính đến ngày 22/10/2024, dân số Singapore đạt 6.064.162 người
                  theo số liệu mới nhất từ Liên Hợp Quốc. Mặc dù chỉ là một quốc
                  đảo nhỏ với mật độ dân số rất cao, Singapore lại nổi tiếng với
                  chất lượng cuộc sống vượt trội với tuổi thọ trung bình tại đây
                  lên đến 83,9 tuổi – một con số ấn tượng không chỉ trong khu
                  vực Đông Nam Á mà còn trên toàn thế giới. Điều này minh chứng
                  cho sự thành công của Singapore trong việc xây dựng một xã hội
                  phát triển bền vững, nơi người dân có thể tận hưởng cuộc sống
                  khỏe mạnh và chất lượng nhờ vào hệ thống y tế công cộng hiện
                  đại, các chương trình bảo vệ sức khỏe toàn dân và môi trường
                  sống trong lành, an toàn.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 mt-5">
              {/* Content */}
              <div>
                {/* Content Image with Caption */}
                <div className="flex flex-col gap-5 items-center">
                  <img src={mechanic} className="rounded-lg shadow-md w-1/2" />
                </div>
                <p className="leading-8 text-sm text-gray-700 text-justify mt-4">
                  Không những thế, lực lượng lao động của Singapore cũng phản
                  ánh một quốc gia trẻ trung và năng động với độ tuổi trung bình
                  là 35,7 tuổi. Đội ngũ lao động trẻ, đầy năng lượng và được đào
                  tạo bài bản trong các lĩnh vực công nghệ cao, nhờ hệ thống
                  giáo dục tiên tiến, là động lực quan trọng thúc đẩy tăng
                  trưởng kinh tế đất nước. Chính phủ Singapore đặc biệt chú
                  trọng vào việc đầu tư vào giáo dục và phát triển nguồn nhân
                  lực, giúp quốc gia này duy trì khả năng cạnh tranh mạnh mẽ
                  trên thị trường quốc tế.
                </p>
                <p className="leading-8 text-sm text-gray-700 text-justify">
                  Sự kết hợp giữa tuổi thọ cao và dân số trẻ đã tạo nên một cấu
                  trúc dân số lý tưởng tại Singapore, nơi mà kinh nghiệm phong
                  phú của thế hệ đi trước được truyền lại cho thế hệ trẻ đầy
                  năng lượng, góp phần thúc đẩy sự phát triển bền vững và hài
                  hòa của xã hội. Không chỉ dựa vào nguồn lực nội tại, chính phủ
                  Singapore còn triển khai các chính sách thu hút nhân tài quốc
                  tế, mang đến sự đa dạng hóa về dân số và văn hóa, từ đó tạo ra
                  một xã hội đa dạng, sáng tạo và cởi mở.
                </p>
                <p className="leading-8 text-sm text-gray-700 text-justify mt-2">
                  Một điểm đặc biệt ở Singapore là tiếng Anh được sử dụng như
                  ngôn ngữ chính thức và là phương tiện giảng dạy trong tất cả
                  các trường học, giúp quốc gia này kết nối mạnh mẽ với nền kinh
                  tế toàn cầu. Tuy nhiên, các ngôn ngữ khác như tiếng Quan
                  Thoại, tiếng Mã Lai và tiếng Tamil vẫn được duy trì như "tiếng
                  mẹ đẻ" của các cộng đồng người Hoa, Mã Lai và Ấn Độ, thể hiện
                  sự tôn trọng và bảo tồn di sản văn hóa. Đồng thời, một dạng
                  tiếng Anh địa phương đặc biệt được gọi là Singlish, hòa trộn
                  các yếu tố từ nhiều ngôn ngữ và phương ngữ, phản ánh sự giao
                  thoa văn hóa độc đáo của đất nước này.
                </p>
                <div className="flex flex-col gap-5 items-center mt-4">
                  <img src={children} className="rounded-lg shadow-md w-1/2" />
                </div>
                <p className="leading-8 text-sm text-gray-700 text-justify mt-4">
                  Singapore là một quốc gia đa sắc tộc với tỷ lệ dân số gồm:
                  người gốc Hoa chiếm 76%, người Mã Lai chiếm 15%, người Ấn Độ
                  chiếm 7%, và các nhóm dân tộc khác, bao gồm người Âu – Á,
                  chiếm khoảng 2%. Xu hướng nhập cư vào Singapore đã phát triển
                  mạnh mẽ trong nhiều thập kỷ, đóng góp lớn vào mức tăng dân số.
                  Năm 2024, Singapore dự kiến có khoảng 20.011 người di cư ròng,
                  với một phần lớn là các chuyên gia nước ngoài bị thu hút bởi
                  cơ hội việc làm và điều kiện sống lý tưởng tại đây. Tuy nhiên,
                  làn sóng nhập cư cũng mang đến những thách thức như áp lực về
                  nhà ở, dịch vụ công, và sự cạnh tranh trên thị trường lao
                  động.
                </p>
                <div className="flex flex-col gap-5 items-center mt-2">
                  <img
                    src={infoIncreasing}
                    className="rounded-lg shadow-md w-1/2"
                  />
                </div>
                <p className="leading-8 text-sm text-gray-700 text-justify mt-4">
                  Dù Singapore nổi tiếng với sự thịnh vượng và chất lượng cuộc
                  sống cao, đất nước này cũng đối mặt với những vấn đề như sự
                  chênh lệch giàu nghèo ngày càng gia tăng. Một số ít người sở
                  hữu khối tài sản lớn trong khi phần lớn dân số vẫn có mức thu
                  nhập trung bình hoặc thấp. Tuy nhiên, khoảng cách thu nhập
                  đang dần được thu hẹp khi mức tăng trưởng thu nhập thực tế
                  hàng năm đối với lao động toàn thời gian đạt 3,5% từ năm 2012
                  đến năm 2022, cao hơn mức trung bình 2,6% trong thập kỷ trước.
                </p>
                <p className="leading-8 text-sm text-gray-700 text-justify mt-2">
                  Một thách thức lớn khác tại Singapore là giá nhà ở, hiện nằm
                  trong nhóm đắt đỏ nhất thế giới. Điều này đã khiến nhiều người
                  trẻ gặp khó khăn trong việc sở hữu nhà, biến giấc mơ an cư trở
                  nên xa vời, đặc biệt là đối với các gia đình có thu nhập thấp.
                  Áp lực tài chính ngày càng tăng đã khiến họ phải đối mặt với
                  nhiều lựa chọn khó khăn giữa việc mua nhà hay đảm bảo các nhu
                  cầu thiết yếu khác.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 -mt-5">
              {/* Content */}
              <div>
                <p className="leading-8 mt-8 mb-4 text-primary-700 font-bold text-[18px]">
                  Vai trò của truyền thông trong việc phản ánh các vấn đề xã hội
                </p>
                <div className="flex gap-5 items-center mt-2">
                  <img
                    src={truyenThong1}
                    className="rounded-lg shadow-md w-1/2 h-[300px]"
                  />
                  <img
                    src={truyenThong2}
                    className="rounded-lg shadow-md w-1/2 h-[300px]"
                  />
                </div>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Với một quốc gia đông dân và đa dạng chủng tộc như Singapore,
                  truyền thông đóng vai trò quan trọng trong việc phản ánh các
                  vấn đề xã hội, là kênh cung cấp thông tin và là cầu nối giữa
                  chính phủ, tổ chức xã hội, và công chúng. Trong bối cảnh công
                  nghệ thông tin phát triển, cách người dân Singapore tiếp cận
                  thông tin cũng đã thay đổi đáng kể. Các nền tảng trực tuyến
                  như Facebook, Twitter không chỉ mang đến tin tức nhanh chóng
                  mà còn tạo ra không gian để người dân tương tác trực tiếp với
                  các tổ chức và quan chức chính phủ. Nhờ đó, một kênh giao tiếp
                  hai chiều được hình thành, giúp người dân có cơ hội bày tỏ ý
                  kiến, đặt câu hỏi và chia sẻ mối quan tâm về những vấn đề xã
                  hội giúp chính phủ có thể nhận phản hồi trực tiếp từ công
                  chúng, từ đó điều chỉnh và cải thiện chính sách một cách hiệu
                  quả hơn.
                </p>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Truyền thông còn có vai trò định hình và phản ánh dư luận xã
                  hội. Cách truyền thông đưa tin về những vấn đề như bất bình
                  đẳng thu nhập, giá nhà cao, hay chính sách nhập cư có tác động
                  mạnh mẽ đến quan điểm của công chúng. Những thông điệp về bảo
                  vệ môi trường, chống bạo lực gia đình hay phân biệt đối xử
                  không chỉ nâng cao nhận thức mà còn khuyến khích người dân
                  tham gia vào các phong trào xã hội, tạo ra một cộng đồng gắn
                  kết, tích cực và có trách nhiệm hơn.
                </p>
                <p className="my-2 leading-8 text-sm text-gray-700 text-justify">
                  Tầm ảnh hưởng của truyền thông đòi hỏi sự cân nhắc kỹ lưỡng
                  trong việc lựa chọn câu chuyện, góc nhìn và cách trình bày
                  thông tin. Tính khách quan, trung thực và đa chiều là yếu tố
                  cốt lõi để truyền thông tạo ra một diễn đàn công khai, nơi mọi
                  người có thể bày tỏ ý kiến, tranh luận và chia sẻ thông tin.
                  Chính sự đa dạng về quan điểm này sẽ hỗ trợ sự phát triển bền
                  vững của cộng đồng, đồng thời góp phần thúc đẩy sự minh bạch
                  và tiến bộ xã hội.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Blog 4 */}
      {blog4Content && !blog && !blog2Content && !blog3Content && (
        <div className="bg-pink-50 font-sans text-gray-700 pb-20">
          {/* Header Section */}
          <div className="relative">
            <img
              src={blog4Content.image}
              alt={blog4Content.title}
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-[#F8E1D2] text-[70px] font-extrabold tracking-widest mt-96 uppercase">
                {blog4Content.title}
              </h1>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="container mx-auto px-10 md:px-32 grid grid-cols-1 w-full">
            <div className="grid grid-cols-1 gap-10 mt-10">
              {/* Content */}
              <div>
                <p className="leading-8 mb-4 text-primary-700 font-bold text-[18px]">
                  Singapore: Bức Tranh Văn Hóa Đa Dạng và Độc Đáo
                </p>
                <p className="mt-2 leading-8 text-sm text-gray-700 text-justify">
                  Singapore, quốc đảo sư tử, không chỉ nổi tiếng là một trung
                  tâm kinh tế toàn cầu mà còn là nơi giao thoa của nhiều nền văn
                  hóa phong phú. Lịch sử hình thành, vị thế địa lý và sự đa dạng
                  dân tộc đã tạo nên một nền văn hóa độc đáo, thu hút sự chú ý
                  của du khách từ khắp nơi trên thế giới.
                </p>
                <p className="mt-2 leading-8 text-sm text-gray-700 text-justify mb-4">
                  Ẩm thực Singapore là minh chứng sống động cho sự giao thoa văn
                  hóa Á-Âu, nơi các hương vị truyền thống và hiện đại hòa quyện
                  với nhau một cách tinh tế. Từ những món ăn đường phố bình dị
                  đến những nhà hàng cao cấp, mỗi món ăn ở Singapore đều kể câu
                  chuyện riêng về bản sắc của từng cộng đồng dân tộc.
                </p>
                <div className="flex flex-col gap-5 items-center">
                  <img src={maxWell} className="rounded-lg shadow-md w-1/2" />
                </div>
                <p className="leading-8 text-sm text-gray-700 text-justify mt-4">
                  Các món ăn nổi tiếng như mì xào của người Hoa, cà ri đậm đà
                  của người Ấn Độ, hay satay thơm lừng của người Mã Lai đều mang
                  đến trải nghiệm vị giác khó quên. Những khu chợ ẩm thực như
                  Maxwell Food Centre hay Lau Pa Sat trở thành điểm đến không
                  thể bỏ qua, nơi bạn có thể thưởng thức nền ẩm thực đa dạng
                  trong không gian đầy năng động.
                </p>
                <div className="flex flex-col gap-5 items-center mt-2">
                  <img src={leHoi} className="rounded-lg shadow-md w-1/2" />
                </div>
                <p className="leading-8 text-sm text-gray-700 text-justify mt-4">
                  Các lễ hội truyền thống tại Singapore phản ánh sâu sắc bản sắc
                  văn hóa của từng cộng đồng dân tộc. Tết Nguyên Đán của người
                  Hoa, Hari Raya Aidilfitri của người Mã Lai, và Deepavali của
                  người Ấn Độ không chỉ là dịp để gia đình sum họp mà còn là cơ
                  hội để quảng bá những nét đẹp văn hóa đặc trưng. Trong những
                  ngày này, cả thành phố như khoác lên mình một diện mạo mới với
                  những ánh đèn rực rỡ, các hoạt động nghệ thuật và ẩm thực
                  phong phú, thu hút đông đảo du khách quốc tế.
                </p>
                <div className="flex flex-col gap-5 items-center">
                  <img src={hotel} className="rounded-lg shadow-md w-1/2" />
                </div>
                <p className="leading-8 text-sm text-gray-700 text-justify mt-4">
                  Một trong những nét đặc sắc nhất của Singapore chính là sự đa
                  dạng trong kiến trúc, phản ánh lịch sử và văn hóa độc đáo của
                  quốc đảo này. Tại đây, bạn có thể chiêm ngưỡng những ngôi chùa
                  Phật giáo như chùa Răng Phật, những nhà thờ Hồi giáo như
                  Sultan Mosque, các đền Hindu rực rỡ như Sri Mariamman Temple,
                  hay những tòa nhà chọc trời hiện đại như Marina Bay Sands. Sự
                  kết hợp giữa truyền thống và hiện đại này đã tạo nên một diện
                  mạo đô thị độc đáo, là biểu tượng cho sự phát triển không
                  ngừng của Singapore.
                </p>
                <p className="leading-8 text-sm text-gray-700 text-justify mb-4">
                  Người Singapore rất coi trọng các giá trị truyền thống, đặc
                  biệt là gia đình. Gia đình không chỉ là nền tảng xã hội mà còn
                  là nơi mỗi cá nhân tìm thấy sự gắn bó, sẻ chia và hỗ trợ lẫn
                  nhau. Trong nhịp sống hiện đại, những giá trị này vẫn được duy
                  trì, góp phần tạo nên sự ổn định và gắn kết trong xã hội.
                </p>
                {/* tiep */}
                <div className="flex flex-col gap-5 items-center">
                  <img src={education} className="rounded-lg shadow-md w-1/2" />
                </div>
                <p className="leading-8 text-sm text-gray-700 text-justify mt-4">
                  Giáo dục là một ưu tiên hàng đầu của cả phụ huynh lẫn chính
                  phủ Singapore. Cha mẹ không ngần ngại đầu tư vào việc học tập
                  của con cái, trong khi chính phủ đã tăng mạnh chi tiêu cho
                  giáo dục, từ 61 triệu SGD năm 1960 lên 13,2 tỷ SGD năm 2022.
                  Hệ thống giáo dục chất lượng cao này không chỉ tạo ra những
                  công dân ưu tú mà còn là động lực thúc đẩy sự phát triển kinh
                  tế của quốc gia.
                </p>
                <p className="leading-8 text-sm text-gray-700 text-justify">
                  Người Singapore còn nổi tiếng với tinh thần làm việc chăm chỉ,
                  kỷ luật cao và sự cống hiến hết mình để đạt được hiệu quả tốt
                  nhất. Những đức tính này không chỉ giúp xây dựng một xã hội
                  năng động mà còn góp phần đưa Singapore trở thành một trong
                  những nền kinh tế hàng đầu thế giới.
                </p>
                <p className="leading-8 text-sm text-gray-700 text-justify">
                  Singapore là nơi hội tụ của nhiều tôn giáo khác nhau, từ Phật
                  giáo, Hồi giáo, Ấn Độ giáo đến Cơ đốc giáo và cả các tín
                  ngưỡng bản địa. Điều đặc biệt là tất cả các tín ngưỡng này
                  chung sống hòa bình, tôn trọng lẫn nhau, tạo nên một cộng đồng
                  đa sắc màu nhưng đầy gắn kết. Đây chính là minh chứng cho tinh
                  thần đoàn kết và khả năng hòa nhập, một trong những giá trị
                  cốt lõi làm nên thành công của Singapore.
                </p>
                <div className="flex flex-col gap-2 items-center mt-4">
                  <img
                    src={researchSing}
                    className="rounded-lg shadow-md w-2/3"
                  />
                  <p className="text-sm text-gray-500">
                    Tôn giáo tại Singapore
                  </p>
                  <p className="text-sm text-gray-500">
                    (Nguồn: Asean population)
                  </p>
                </div>
                <p className="leading-8 mt-8 mb-4 text-primary-700 font-bold text-[18px]">
                  Ảnh hưởng của văn hóa tới truyền thông và tiếp nhận thông tin
                  trong xã hội
                </p>
                <div className="flex gap-5 items-center mb-5 justify-center">
                  <img src={media} className="rounded-lg shadow-md h-[300px] w-[330px] object-cover" />
                  <img
                    src={socialMediaIcon}
                    className="rounded-lg shadow-md h-[300px] w-[330px] object-cover"
                  />
                  <img
                    src={mediaOutdoor}
                    className="rounded-lg shadow-md h-[300px] w-[330px] object-cover"
                  />
                </div>
                {/* <div className="flex flex-col gap-5 items-center">
                  <img
                    src={socialMediaIcon}
                    className="rounded-lg shadow-md w-1/2"
                  />
                </div> */}
                <p className="leading-8 text-sm text-gray-700 text-justify mt-2">
                  Với sự đa dạng văn hóa độc đáo, Singapore đã tạo nên một môi
                  trường truyền thông phong phú, nơi văn hóa không chỉ định hình
                  cách sản xuất thông tin mà còn ảnh hưởng sâu sắc đến cách
                  người dân tiếp nhận và tương tác với thông tin.
                </p>
                <p className="leading-8 mt-2 mb-2 text-primary-700 font-bold text-[18px]">
                  Đa Dạng Văn Hóa, Đa Dạng Phương Tiện Truyền Thông
                </p>
                <p className="leading-8 text-sm text-gray-700 text-justify">
                  Từ tin tức, chương trình giáo dục đến giải trí, nội dung
                  truyền thông tại Singapore luôn phản ánh sự phong phú về sở
                  thích và nhu cầu. Hệ thống truyền thông đa ngôn ngữ không chỉ
                  là phương tiện cung cấp thông tin mà còn là cầu nối văn hóa
                  giữa các cộng đồng dân tộc.
                </p>
                <p className="leading-8 mt-2 mb-2 text-primary-700 font-bold text-[18px]">
                  Giá Trị Truyền Thống Ảnh Hưởng Đến Cách Tiếp Nhận Thông Tin
                </p>
                <p className="leading-8 text-sm text-gray-700 text-justify">
                  Gia đình đóng vai trò trung tâm trong văn hóa Singapore, không
                  chỉ là nền tảng gắn kết mà còn ảnh hưởng đến cách người dân
                  tiếp nhận thông tin. Việc chia sẻ thông tin qua truyền miệng,
                  đặc biệt trong cộng đồng người cao tuổi, không chỉ giúp duy
                  trì tình cảm gia đình mà còn là kênh quan trọng để xử lý các
                  vấn đề hàng ngày. Giáo dục là một giá trị cốt lõi, thúc đẩy
                  người Singapore tìm kiếm thông tin từ những nguồn đáng tin cậy
                  như sách, báo và các trang web chính thống. Thói quen đọc sách
                  không chỉ mở rộng hiểu biết mà còn rèn luyện khả năng tư duy
                  phản biện và đánh giá thông tin chính xác.
                </p>
                <p className="leading-8 mt-2 mb-2 text-primary-700 font-bold text-[18px]">
                  Văn Hóa Giao Tiếp và Tương Tác Với Thông Tin
                </p>
                <p className="leading-8 text-sm text-gray-700 text-justify">
                  Người Singapore nổi tiếng với phong cách giao tiếp lịch sự,
                  tôn trọng ý kiến người khác, ngay cả trong các cuộc thảo luận
                  trực tuyến. Họ thường tránh tranh cãi gay gắt trên mạng xã
                  hội, thay vào đó lựa chọn cách bày tỏ quan điểm một cách tế
                  nhị, nhằm giữ sự hòa hợp. Cùng với khả năng sử dụng nhiều ngôn
                  ngữ cũng giúp người Singapore tiếp cận thông tin từ nhiều
                  nguồn khác nhau, tăng cường khả năng thích nghi với các loại
                  hình truyền thông đa ngôn ngữ. Điều này làm cho không gian
                  truyền thông tại Singapore thêm phần phong phú và đa chiều.
                </p>
                <p className="leading-8 mt-2 mb-2 text-primary-700 font-bold text-[18px]">
                  Văn Hóa Ảnh Hưởng Đến Sản Xuất Nội Dung Truyền Thông
                </p>
                <p className="leading-8 text-sm text-gray-700 text-justify">
                  Sự đa dạng văn hóa không chỉ tác động đến cách tiếp nhận thông
                  tin mà còn định hình cách sản xuất nội dung truyền thông. Các
                  nhà sản xuất nội dung tại Singapore thường địa phương hóa sản
                  phẩm để phù hợp với văn hóa và sở thích của khán giả. Ngôn ngữ
                  địa phương, các yếu tố văn hóa truyền thống được lồng ghép một
                  cách khéo léo, tạo ra sự gần gũi và thu hút. Đồng thời, họ chú
                  trọng đến tính đa văn hóa, phản ánh sự phong phú của xã hội
                  Singapore. Các sản phẩm truyền thông không chỉ phục vụ một
                  nhóm đối tượng mà hướng đến mọi cộng đồng dân cư, góp phần gắn
                  kết xã hội và khẳng định bản sắc quốc gia.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetail;
