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
import paper1 from "../assets/images/paper1.jpg";
import paper2 from "../assets/images/paper2.png";
import paper3 from "../assets/images/paper3.jpeg";
import hammer from "../assets/images/harmer.jpg";
import law2 from "../assets/images/law2.jpg";
import manage from "../assets/images/quan-ly-truyen-thong.jpg";
import divider from "../assets/images/divider.png";
import theory from "../assets/images/theory.jpg";
import theory2 from "../assets/images/theory-2.jpeg";
import yeuTo1 from "../assets/images/yeu-to-1.avif";
import yeuTo2 from "../assets/images/yeu-to-2.jpg";
import oldMan from "../assets/images/old-man.webp";
import duHoc from "../assets/images/du-hoc.png";
import tuanTai from "../assets/images/tuan-tai.webp";
import tuanTai2 from "../assets/images/tuan-tai-3.webp";
import blackLives from "../assets/images/back-lives.png";
import blackLives2 from "../assets/images/black-lives-2.webp";
import blackLives3 from "../assets/images/black-lives-3.jpg";

const BlogDetailSection2 = () => {
  const blogs = [
    {
      id: 1,
    },
  ];

  const blog2 = [
    {
      id: 2,
      title: "Tình hình chính trị",
    },
  ];

  const blog3 = [
    {
      id: 3,
      title: "Tình hình xã hội",
    },
  ];

  const blog4 = [
    {
      id: 4,
      title: "Tình hình văn hoá",
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
      {blog && (
        <div className="my-28">
          <h2 className="text-center text-[40px] text-primary-700 font-normal">
            Lịch sử hình thành và phát triển của truyền thông
          </h2>
          <img src={divider} className="px-20 py-5" />
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8">
            Truyền thông tại Singapore bắt đầu hình thành từ thời kỳ thuộc địa
            Anh với sự xuất hiện của các tòa soạn báo tiếng Anh. Năm 1824, tờ
            “Singapore Chronicle” được thành lập và kế tiếp là “The Straits
            Times” vào năm 1845. Đến năm 1914, báo “Malaya Tribune” được ra mắt
            và vượt qua “The Straits Times” về lượng phát hành. Đài phát thanh
            British Malaya Broadcasting Corporation ra đời vào năm 1936, phát
            sóng toàn bộ vùng Mã Lai.
          </p>
          <div className="flex justify-center mt-20">
            <div className="z-30 px-2 pt-2 pb-8 bg-primary-100 object-cover origin-bottom -rotate-12 shadow-md">
              <img src={paper1} className="w-[400px] h-[500px]" />
            </div>
            <div className="z-20 px-2 pt-2 pb-8 bg-primary-100 -ml-20 mt-10">
              <img src={paper2} className="w-[400px] h-[500px] object-cover" />
            </div>
          </div>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-20">
            Đến thập niên 1950, báo chí Singapore phát triển mạnh mẽ với các
            động cơ tôn giáo, chính trị, và kinh tế. Cụ thể vào năm 1959, Lý
            Quang Diệu chỉ trích “The Straits Times” khiến tờ báo này phải
            chuyển sang hoạt động tại Malaysia. Năm 1963, đài truyền hình đầu
            tiên của Singapore ra mắt, sau đó sát nhập với đài phát thanh thành
            Radio and Television Singapore (RTS). Mãi chỉ sau khi Singapore độc
            lập năm 1965, chính phủ can thiệp mạnh vào truyền thông, đóng cửa
            nhiều tờ báo do nhận tài trợ từ nước ngoài.
          </p>
          <div className="pl-10 pr-5 py-5 bg-primary-100 w-fit mx-auto mt-5 rounded-xl">
            <img
              src={paper3}
              className="w-[400px] h-[500px] object-cover mx-auto mt-12"
            />
          </div>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-10">
            Sự phát triển của truyền hình màu bắt đầu diễn ra vào năm 1974 đến
            năm 1980, RTS trở thành Singapore Broadcasting Corporation (SBC).
            Chính phủ tiếp tục sáp nhập các tờ báo tiếng Trung và Anh, dẫn đến
            sự ra đời của Singapore Press Holdings (SPH) vào năm 1984. Đến thập
            niên 1990, Singapore đặt mục tiêu trở thành "quốc đảo thông minh"
            với 99% hộ gia đình và doanh nghiệp kết nối mạng băng thông rộng.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-4">
            Vào năm 1994, truyền thông trực tuyến bắt đầu nở rộ với các diễn đàn
            và trang web như Sintercom. Cùng năm đó, SBC được tư nhân hóa thành
            MediaCorp, giữ vị trí độc quyền với SPH. Đến năm 2000, truyền thông
            Singapore chứng kiến sự phát triển mạnh mẽ với sự ra đời của nhiều
            tờ báo trực tuyến và các công ty truyền thông kỹ thuật số. Hệ thống
            truyền thông hiện nay chịu ảnh hưởng lớn từ hai tập đoàn SPH và
            MediaCorp, đều do chính phủ kiểm soát.
          </p>
        </div>
      )}
      {blog2Content && !blog && (
        <div className="p-24">
          <h2 className="text-center text-[40px] text-primary-700 font-normal">
            Quản Lý Truyền Thông Singapore: Pháp Luật và Đạo Đức Cần Biết
          </h2>
          <img src={divider} className="px-20 py-5" />
          <p className="px-20 font-serif font-normal text-[20px] text-primary-700">
            Pháp luật trong truyền thông
          </p>
          <div className="flex justify-center mt-20">
            <div className="z-30 px-2 pt-2 pb-8 bg-primary-100 object-cover origin-bottom -rotate-12 shadow-md">
              <img src={hammer} className="w-[400px] h-[500px]" />
            </div>
            <div className="z-20 px-2 pt-2 pb-8 bg-primary-100 -ml-20 mt-10">
              <img src={law2} className="w-[400px] h-[500px] object-cover" />
            </div>
          </div>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-24">
            Singapore luôn được biết đến như một quốc gia có cách quản lý truyền
            thông vô cùng bài bản và chặt chẽ. Hành trình này có thể được chia
            làm ba giai đoạn rõ rệt, phản ánh những bước đi chiến lược của chính
            phủ trong việc kiểm soát và định hướng thông tin.
          </p>
          <p className="px-20 font-serif font-normal text-[20px] text-primary-700 mt-4">
            Giai đoạn một: Những ngày đầu sau khi độc lập (1965):
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8  mt-2">
            Singapore kiểm soát chặt chẽ báo chí qua các luật nghiêm ngặt như
            Đạo luật An ninh Nội bộ (Kuo&Chen, 1983).
          </p>
          <p className="px-20 font-serif font-normal text-[20px] text-primary-700">
            Giai đoạn hai: Tăng cường quản lý (từ giữa thế kỷ 20):
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Singapore áp dụng các luật bổ sung như Luật báo in và các ấn phẩm
            (NPPA), Luật phát thanh truyền hình (BA) để quản lý báo chí.
          </p>
          <p className="px-20 font-serif font-normal text-[20px] text-primary-700">
            Giai đoạn ba: Kỷ nguyên kỹ thuật số (từ 2000):
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Với sự bùng nổ của internet, Singapore yêu cầu các trang tin tức
            trực tuyến phải đăng ký giấy phép hoạt động để quản lý thông tin
            chặt chẽ hơn. Năm 2021, Đạo luật Chống Can thiệp Nước ngoài (FICA)
            được thông qua, cho phép chính phủ kiểm soát nội dung trực tuyến,
            chặn hoặc gỡ bỏ những thông tin được coi là thù địch. Đến 9/11/2022,
            Singapore tiếp tục ban hành luật tăng cường an toàn trực tuyến, yêu
            cầu các nền tảng mạng xã hội xóa các bài đăng độc hại, không phù
            hợp, bảo vệ không gian mạng và đảm bảo sự ổn định xã hội.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Như vậy, ba giai đoạn quản lý truyền thông này là minh chứng rõ nét
            cho cách Singapore không ngừng điều chỉnh và thích nghi để đảm bảo
            rằng truyền thông phục vụ lợi ích quốc gia. Nhóm tác giả cho rằng từ
            những năm đầu đầy thách thức sau độc lập, đến việc đối mặt với sự
            thay đổi chóng mặt của kỷ nguyên số, Singapore vẫn luôn duy trì một
            cách tiếp cận quyết đoán và chiến lược trong việc định hình thông
            tin.
          </p>
          <img src={divider} className="px-20 py-5" />
          <p className="px-20 font-serif font-normal text-[20px] text-primary-700">
            Quy chuẩn đạo đức trong truyền thông
          </p>
          <div className="pl-10 pr-5 py-5 bg-primary-100 w-fit mx-auto mt-5 rounded-xl">
            <img
              src={manage}
              className="w-[400px] h-[500px] object-cover mx-auto mt-12"
            />
          </div>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Yếu tố đầu tiên là tính trung thực, chính xác trong thông tin.
            Singapore có Luật Phòng chống Tin giả và Thao túng trên Mạng
            (POFMA), được áp dụng để xử lý các trường hợp tung tin giả gây ảnh
            hưởng đến xã hội.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Yếu tố thứ hai là tính minh bạch và công bằng. Nguyên tắc không
            thiên vị, đưa tin khách quan là một phần cốt lõi trong quy chuẩn đạo
            đức truyền thông.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Yếu tố thứ ba là tôn trọng văn hóa và sự đa dạng quốc tế. Truyền
            thông cần lưu ý đến các yếu tố nhạy cảm và tránh những nội dung có
            thể gây chia rẽ, xung đột giữa các quốc gia.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Yếu tố thứ tư là trách nhiệm xã hội và an toàn công cộng. Hiện tại,
            các lĩnh vực, phương tiện truyền thông vẫn được quản lý bởi các
            khuôn khổ quản lý riêng biệt.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Yếu tố thứ năm là bảo vệ quyền riêng tư và quyền lợi cá nhân. Luật
            bảo vệ dữ liệu cá nhân (PDPA) tại Singapore quy định rõ về việc thu
            thập và sử dụng dữ liệu cá nhân trong truyền thông, đặc biệt khi
            tiếp cận các thông tin nhạy cảm.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Yếu tố thứ sáu là tuân thủ quy định pháp lý quốc tế giúp truyền
            thông Singapore luôn duy trì vị thế trung lập và xây dựng hình ảnh
            tích cực của Singapore trên trường quốc tế.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Yếu tố thứ bảy là ngăn chặn và xử lý các thông tin sai lệch hoặc thù
            địch. Luật mới cho phép IMDA yêu cầu các nền tảng mạng xã hội gỡ bỏ
            nội dung “cực kỳ tồi tệ”, đồng thời có thể yêu cầu chặn quyền truy
            cập của người dùng ở Singapore, trong trường hợp một dịch vụ truyền
            thông trực tuyến từ chối gỡ bỏ nội dung trực tuyến có hại.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Những quy chuẩn này góp phần xây dựng môi trường truyền thông
            Singapore công bằng, minh bạch và có được sự tôn trọng quốc tế.
          </p>
        </div>
      )}

      {blog3Content && !blog && !blog2Content && (
        <div className="p-24">
          <h2 className="text-center text-[40px] text-primary-700 font-normal">
            Mô hình truyền thông
          </h2>
          <img src={divider} className="px-20 py-5" />
          <p className="px-20 font-serif font-normal text-[20px] text-primary-700">
            Bốn học thuyết cơ bản trong truyền thông
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-4">
            Truyền thông là một phần không thể thiếu trong cuộc sống hiện đại.
            Tuy nhiên, không phải ai cũng hiểu rõ cách mà truyền thông vận hành
            và sự ảnh hưởng của các học thuyết khác nhau lên ngành này. Hãy cùng
            khám phá bốn học thuyết lớn về báo chí và truyền thông, từ quá khứ
            cho đến hiện tại, để hiểu rõ hơn về những gì đang diễn ra trong thế
            giới truyền thông ngày nay. Bốn học thuyết đầu tiên về báo chí và
            truyền thông gồm: thuyết Độc đoán, thuyết Tự do, thuyết Trách nhiệm
            xã hội và thuyết Toàn trị Xô Viết.
          </p>
          <div className="flex justify-center mt-20">
            <div className="z-30 px-2 pt-2 pb-8 bg-primary-100 object-cover origin-bottom -rotate-12 shadow-md">
              <img src={theory} className="w-[400px] h-[500px]" />
            </div>
            <div className="z-20 px-2 pt-2 pb-8 bg-primary-100 -ml-20 mt-10">
              <img src={theory2} className="w-[400px] h-[500px] object-cover" />
            </div>
          </div>
          <p className="px-20 font-serif font-normal text-[20px] text-primary-700 mt-4">
            Những học thuyết truyền thông và sự tương đồng trong mô hình của
            Singapore
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8  mt-2">
            Trong lịch sử, các học thuyết truyền thông đã phản ánh rõ nét cách
            truyền thông được sử dụng và kiểm soát ở từng giai đoạn và quốc gia.
            Những thuyết này vẫn để lại dấu ấn mạnh mẽ trong cách vận hành
            truyền thông hiện đại, bao gồm cả Singapore – nơi chính phủ duy trì
            sự kiểm soát và định hướng chặt chẽ.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            <b>Thuyết độc đoán</b> ra đời trong thế kỷ 16-17 tại Anh, là công cụ
            kiểm soát thông tin của chính phủ độc tài. Truyền thông khi đó được
            dùng để tuyên truyền chính sách, kiểm soát suy nghĩ và hành vi của
            công chúng.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            <b>Thuyết tự do</b> , trái ngược hoàn toàn, nở rộ trong thời kỳ Khai
            sáng và dân chủ. Theo thuyết này, truyền thông được quyền tự do hoạt
            động, độc lập với chính phủ và có thể đăng tải cả những thông tin
            bất lợi cho nhà nước.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            <b>Thuyết trách nhiệm xã hội,</b>xuất hiện vào thế kỷ 20 tại Mỹ, đặt
            ra yêu cầu rằng truyền thông không chỉ tự do mà còn phải có trách
            nhiệm phục vụ lợi ích cộng đồng. Quyền lực truyền thông cần được sử
            dụng để thúc đẩy sự phát triển xã hội, thay vì chỉ đáp ứng lợi ích
            cá nhân hay tổ chức.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            <b>Thuyết toàn trị Xô Viết,</b>gắn liền với Liên Xô, thể hiện cách
            Đảng Cộng sản kiểm soát truyền thông như một công cụ giáo dục và
            tuyên truyền cho hệ tư tưởng cộng sản, đồng thời kiểm soát hành vi
            và suy nghĩ của người dân.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Ngày nay, khi truyền thông ngày càng đa dạng và phức tạp, không nền
            truyền thông nào hoàn toàn tuân theo một học thuyết duy nhất. Tuy
            nhiên, ảnh hưởng của các thuyết này vẫn hiện hữu, đặc biệt trong mô
            hình truyền thông của Singapore.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Mô hình của Singapore thể hiện sự tương đồng với thuyết độc đoán,
            khi chính phủ kiểm soát chặt chẽ các cơ quan truyền thông thông qua
            các công cụ pháp lý, chẳng hạn như Đạo luật Báo chí và Đăng ký
            (Newspaper and Printing Presses Act), nhằm hạn chế nội dung đối lập
            hoặc chỉ trích. Đồng thời, yếu tố từ thuyết trách nhiệm xã hội cũng
            được kết hợp, khi truyền thông được định hướng để bảo vệ giá trị văn
            hóa, định hình dư luận và cung cấp thông tin quan trọng.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Tại Singapore, truyền thông không chỉ phục vụ công chúng mà còn được
            chính phủ sử dụng như một công cụ duy trì ổn định, phát triển kinh
            tế và đảm bảo lợi ích quốc gia. Điều này tạo nên một hệ thống truyền
            thông độc đáo, vừa mang tính kiểm soát chặt chẽ, vừa chịu ảnh hưởng
            của các giá trị xã hội.
          </p>
          <img src={divider} className="px-20 py-5" />
          <p className="px-20 font-serif font-normal text-[20px] text-primary-700">
            Mô hình truyền thông của Singapore hiện nay
          </p>
          <p className="px-20 font-serif font-normal text-[20px] text-primary-700">
            Các yếu tố truyền thông mới
          </p>
          <div className="flex justify-center mt-20">
            <div className="z-30 px-2 pt-2 pb-8 bg-primary-100 object-cover origin-bottom -rotate-12 shadow-md">
              <img src={yeuTo1} className="w-[400px] h-[300px]" />
            </div>
            <div className="z-20 px-2 pt-2 pb-8 bg-primary-100 -ml-20 mt-10">
              <img src={yeuTo2} className="w-[400px] h-[300px] object-cover" />
            </div>
          </div>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-16">
            Do bốn học thuyết truyền thông không thể miêu tả chính xác được mô
            hình truyền thông của Singapore, nhiều nhà phân tích đã tiếp tục
            phát triển các yếu tố truyền thông dựa trên những người đã đưa ra
            các mô hình mới phát triển rộng hơn ngoài 4 học thuyết cũ như Denis
            McQuail, William Hachten, Ralph Lowenstein,… giúp phù hợp hơn với
            truyền thông hiện nay.
          </p>

          <div className="pl-10 pr-5 py-5 bg-primary-100 w-fit mx-auto mt-5 rounded-xl">
            <img
              src={oldMan}
              className="w-[400px] h-[500px] object-cover mx-auto mt-12"
            />
          </div>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Theo Yin (2008), bốn học thuyết truyền thông không mang tính bất
            biến vì mỗi xã hội có một hệ thống truyền thông đặc thù. Điều này
            bác bỏ quan niệm rằng lý thuyết truyền thông có thể áp dụng đồng
            nhất cho mọi bối cảnh, từ đó nhấn mạnh tầm quan trọng của việc đánh
            giá quản trị truyền thông dựa trên bằng chứng. Đồng thời, các yếu tố
            kinh tế chính trị cũng đóng vai trò quan trọng trong việc hình thành
            mô hình truyền thông. Như Yin (2008) và Nerone & Berry (1995) đã chỉ
            ra, để đánh giá tự do truyền thông, không thể chỉ xét đến sự can
            thiệp của nhà nước mà cần quan tâm cả đến tác động của thị trường,
            quyền sở hữu và các ràng buộc vật chất khác.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Bên cạnh đó, tính chuyên nghiệp và giá trị bền vững là những yếu tố
            quan trọng nhưng thường bị bỏ qua trong các lý thuyết chuẩn mực
            truyền thống. Ngày nay, sự chuyên nghiệp trong ngành truyền thông
            không chỉ giúp thúc đẩy trách nhiệm xã hội mà còn tạo ra những giá
            trị lâu dài, phản ánh rõ sự chuyển biến trong ngành truyền thông
            hiện đại.
          </p>
          <img src={divider} className="px-20 py-5" />
          <p className="px-20 font-serif font-normal text-[20px] text-primary-700">
            Mô hình truyền thông hiện đại của Singapore
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Theo nghiên cứu của Tan và Preece (2022), Singapore thường được coi
            là một chế độ lai kiểu mẫu cho nên mô hình quản trị truyền thông ở
            Singapore chủ yếu xoay quanh việc bảo vệ sự ổn định nội bộ, đặt báo
            chí dưới quyền kiểm soát chung của cấu trúc chính trị. Hiến pháp
            Singapore thậm chí không đề cập đến báo chí hay khái niệm tự do báo
            chí. Tuy nhiên, các nhà báo ở Singapore đảm nhận một vai trò vừa bị
            giới hạn, vừa mang tính xây dựng, góp phần vào các mục tiêu lớn hơn
            trong các lĩnh vực chính trị, xã hội và kinh tế (Tey 2008).
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Hệ thống quan hệ này định hình cách thức thực thi các hành vi pháp
            lý giữa chính phủ Singapore và giới truyền thông, không phải như một
            dạng áp bức quyền lực, mà thay vào đó, "thẩm quyền hiện hữu" này
            xuất phát từ một hệ thống quan hệ phức tạp. Theo mô tả của Foucault,
            cơ chế quyền lực này thâm nhập sâu vào cấu trúc cá nhân, đến mức nó
            vận hành như một cơ chế thực thi quyền lực từ bên trong cấu trúc xã
            hội thay vì từ trên áp xuống (Foucault, 1980, tr. 39).
          </p>
          <div className="pl-10 pr-5 py-5 bg-primary-100 w-fit mx-auto mt-5 rounded-xl">
            <img
              src={duHoc}
              className="w-[600px] h-[400px] object-cover mx-auto mt-12"
            />
          </div>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-6">
            Sự tích cực nói trên đã mang lại hiệu quả to lớn cho hệ thống quản
            lý truyền thông tại Singapore, một hệ thống được xây dựng trên nền
            tảng của sự hợp tác dựa vào các giá trị mà truyền thông mặc định là
            đã có sẵn. Khi hệ thống này được thiết lập, tính hiệu quả và hiệu
            suất sẽ được đảm bảo, vì nó hoạt động nhờ vào sự tự điều chỉnh của
            các nhà báo. Trong quá trình này, cá nhân phải tự kiểm soát, cảnh
            giác với sự chệch hướng trong suy nghĩ và hành vi của bản thân; một
            mối quan hệ quyền lực phải hình thành ngay trong mối quan hệ của mỗi
            người với chính mình (Pickett, 2005, tr. 14). Hệ thống quản trị này
            giúp chính phủ giảm bớt việc kiểm soát chặt chẽ để các nhà báo tuân
            thủ pháp luật, bởi họ đã tự thấm nhuần một hệ thống giá trị dựa trên
            sự thỏa thuận và đồng thuận. Những gì được khắc sâu trong hệ thống
            này không phải là mối đe dọa về quyền lực, mà là một mạng lưới quyền
            lực được tổ chức và hợp lý hóa.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Vì vậy, hệ thống truyền thông tại Singapore không chỉ đơn thuần xoay
            quanh luật lệ, quy định và sự kiểm soát của nhà nước, mà còn gắn
            liền với sự tham gia và đàm phán của các tổ chức truyền thông, cũng
            như việc củng cố tính hợp pháp của trách nhiệm xã hội.
          </p>
        </div>
      )}
      {blog4Content && !blog && !blog2Content && !blog3Content && (
        <div className="p-24">
          <h2 className="text-center text-[40px] text-primary-700 font-normal">
            Ảnh hưởng của truyền thông quốc tế đến chính trị và xã hội
          </h2>
          <img src={divider} className="px-20 py-5" />
          <p className="px-20 font-serif font-normal text-[20px] text-primary-700">
            Ảnh hưởng về mặt chính trị
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-4">
            Truyền thông quốc tế không chỉ cung cấp thông tin về các sự kiện
            chính trị toàn cầu mà còn tác động mạnh mẽ đến cách thức các chính
            sách và quan điểm chính trị ở Singapore được hình thành, duy trì và
            điều chỉnh. Ngoài ra, truyền thông quốc tế giúp người dân Singapore
            tiếp cận những quan điểm đa chiều về các vấn đề chính trị, đồng thời
            ảnh hưởng đến các quyết định chính trị của chính phủ Singapore. Các
            kênh truyền thông quốc tế như BBC, CNN, Al Jazeera, và các tổ chức
            thông tấn lớn khác đóng vai trò quan trọng trong việc phản ánh sự
            quan tâm quốc tế đối với Singapore, đặc biệt trong những vấn đề như
            nhân quyền, tự do ngôn luận, và các cuộc bầu cử.
          </p>
          <div className="flex justify-center mt-20">
            <div className="z-30 px-2 pt-2 pb-8 bg-primary-100 object-cover origin-bottom -rotate-12 shadow-md">
              <img src={tuanTai} className="w-[400px] h-[400px]" />
            </div>
            <div className="z-20 px-2 pt-2 pb-8 bg-primary-100 -ml-20 mt-10">
              <img
                src={tuanTai2}
                className="w-[400px] h-[400px] object-cover"
              />
            </div>
          </div>
          <img src={divider} className="px-20 py-5 mt-10" />
          <p className="px-20 font-serif font-normal text-[20px] text-primary-700 mt-5">
            Singapore: Người “giữ nhịp” giữa Mỹ và Trung Quốc
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8  mt-2">
            Trong bối cảnh căng thẳng thương mại giữa Mỹ và Trung Quốc, truyền
            thông quốc tế đã làm nổi bật vai trò chiến lược của Singapore trong
            việc duy trì mối quan hệ tốt đẹp với cả hai siêu cường. Các kênh như
            BBC, CNN, Bloomberg, và Reuters không ngừng cung cấp thông tin cập
            nhật, phân tích sâu về chính sách và tác động kinh tế toàn cầu, đặc
            biệt là ở Đông Nam Á.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Những bài viết từ Bloomberg hay The Financial Times đã nhấn mạnh
            cách Singapore khéo léo biến thách thức thành cơ hội, củng cố vị thế
            trung tâm tài chính và đầu tư quốc tế. Truyền thông cũng ghi nhận
            các cuộc gặp quan trọng giữa lãnh đạo Singapore và Mỹ, cho thấy
            Singapore không chỉ tạo cầu nối đối thoại mà còn đóng vai trò là
            người điều phối thông minh giữa hai nền kinh tế lớn nhất thế giới.
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Với sự hỗ trợ của truyền thông quốc tế, Singapore không ngừng điều
            chỉnh chính sách đối ngoại để giữ vững thế cân bằng và khẳng định
            vai trò dẫn dắt tại khu vực châu Á. Một ví dụ hoàn hảo về cách
            truyền thông giúp quốc gia nhỏ bé này phát huy tối đa sức mạnh mềm
            của mình!
          </p>
          <img src={divider} className="px-20 py-5" />
          <p className="px-20 font-serif font-normal text-[20px] text-primary-700 mt-14">
            Ảnh hưởng về mặt đời sống, xã hội
          </p>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-2">
            Truyền thông quốc tế đóng vai trò quan trọng trong việc kết nối
            Singapore với thế giới, thông qua các kênh hỗ trợ như báo chí,
            truyền hình, internet, và các nền tảng truyền thông xã hội. Truyền
            thông không chỉ giúp người dân Singapore tiếp cận thông tin quốc tế
            mà còn ảnh hưởng đến nhận thức và hành vi xã hội của mọi người.
            Ngoài ra, truyền thông quốc tế còn có khả năng định hướng dư luận xã
            hội. Phương tiện truyền thông cung cấp kiến thức, tạo sự hiểu biết,
            nhận thức cho công chúng sau đó tác động đến hành vi của họ. Thông
            qua các kênh truyền thông, truyền thông quốc tế có thể định hình tư
            tưởng xã hội, ảnh hưởng mạnh mẽ đến nhận thức của con người ở
            Singapore, đặc biệt trong bối cảnh toàn cầu hóa và sự phát triển
            vượt bậc của công nghệ thông tin.
          </p>
          <div className="flex justify-center mt-20">
            <div className="z-30 px-2 pt-2 pb-8 bg-primary-100 object-cover origin-bottom -rotate-12 shadow-md">
              <img src={blackLives} className="w-[400px] h-[300px]" />
            </div>
            <div className="z-20 px-2 pt-2 pb-8 bg-primary-100 -ml-20 mt-10">
              <img src={blackLives2} className="w-[400px] h-[300px] object-cover" />
            </div>
          </div>
          <p className="text-justify mx-auto px-20 text-gray-700 text-[15px] leading-8 mt-20">
            Phong trào Black Lives Matter (BLM) bắt đầu vào năm 2013 tại Hoa Kỳ,
            do ba phụ nữ là Alicia Garza, Patrisse Cullors và Opal Tometi sáng
            lập, phản ứng với vụ ám sát Trayvon Martin, một thanh niên người Mỹ
            gốc Phi, bởi George Zimmerman, một bảo vệ khu phố. Bằng việc lan
            truyền thông tin của truyền thông quốc tế, phong trào này đã vươn
            tầm ảnh hưởng tới các quốc gia khác ngoài Hoa Kỳ và Singapore cũng
            không ngoại lệ. Singapore là một xã hội đa văn hóa với ba nhóm dân
            tộc chính: người Hoa, Malay và người Ấn Độ. Mặc dù không có lịch sử
            phân biệt chủng tộc sâu rộng như ở Mỹ, nhưng Singapore vẫn đối mặt
            với những thách thức về phân biệt sắc tộc, nhất là trong các vấn đề
            liên quan đến dân tộc thiểu số, người nhập cư, và những sự phân hóa
            về tầng lớp xã hội. Phong trào BLM, mặc dù bắt nguồn từ Mỹ nhưng đã
            có ảnh hưởng sâu rộng đến nhận thức về vấn đề chủng tộc và bình đẳng
            tại Singapore. Bộ trưởng Bộ giáo dục Singapore Ong Ye Kung đã phải
            lên tiếng khi xảy ra vụ việc một bức ảnh chụp học sinh tại Học viện
            Raffles đeo mặt nạ đen và vẽ mặt đen để ăn mừng sinh nhật của một
            bạn học người Ấn Độ đã xuất hiện trực tuyến sau phong trào BLM, gây
            nhiều ý kiến trái chiều trong dư luận. Ông đã nhấn mạnh sự khác nhau
            trong bối cảnh lịch sử giữa Hoa Kỳ và Singapore kêu gọi người dân
            tỉnh táo, không chạy theo các trào lưu quốc tế, trấn an sự căng
            thẳng trong làn sóng dư luận.
          </p>
          <div className="pl-10 pr-5 py-5 bg-primary-100 w-fit mx-auto mt-5 rounded-xl">
            <img
              src={blackLives3}
              className="w-[600px] h-[400px] object-cover mx-auto mt-12"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetailSection2;
