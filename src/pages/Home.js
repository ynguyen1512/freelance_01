import React, { useEffect, useState } from "react";
import newsImg from "../assets/images/blog-img-1.png";
import { Carousel, Image, Spin, Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import singaporeBg from "../assets/images/singapore-bg.jpeg";
import singaporeAds from "../assets/images/sing-ads.jpg";
import sing1 from "../assets/images/sing-1.jpg";
import sing3 from "../assets/images/sing-3.jpg";
import sing2 from "../assets/images/sing-political.jpg";
import sing4 from "../assets/images/sing-4.jpeg";
import sing5 from "../assets/images/quan-ly-truyen-thong.jpg";
import sing6 from "../assets/images/old-man.webp";
import sing7 from "../assets/images/sing-7.webp";
import sing8 from "../assets/images/sing-8.webp";
import sing9 from "../assets/images/sing-10.png";
import sing10 from "../assets/images/sing-9.jpg";
import newsHeader from "../assets/images/news-header.png";
import blog1Chuong4 from '../assets/images/chuong4-blog1.webp'

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const blogs = [
    {
      key: 1,
      category: "Singapore",
      title: "Tình hình kinh tế",
      desc: "Nền kinh tế Singapore được đánh giá là một trong những nền kinh tế mở và cạnh tranh nhất thế giới, nhờ vị trí chiến lược giúp quốc gia này trở thành trung tâm thương mại quan trọng trong khu vực",
      date: "21 Nov, 2024",
      author: "Amanda",
      image: sing1,
    },
    {
      key: 2,
      category: "Singapore",
      title: "Tình hình chính trị",
      desc: "Singapore là một quốc gia nhỏ bé nhưng mang trong mình một hệ thống chính trị đặc thù, vừa kế thừa những nguyên tắc của mô hình nghị viện Westminster từ Anh Quốc, vừa có những nét đặc trưng riêng biệt.",
      date: "19 July, 2017",
      author: "Amanda",
      image: sing2,
    },
    {
      key: 3,
      category: "Singapore",
      title: "Tình hình xã hội",
      desc: "Tính đến ngày 22/10/2024, dân số Singapore đạt 6.064.162 người theo số liệu mới nhất từ Liên Hợp Quốc. Mặc dù chỉ là một quốc đảo nhỏ với mật độ dân số rất cao, Singapore lại nổi tiếng với chất lượng cuộc sống vượt trội với tuổi thọ trung bình tại đây lên đến 83,9 tuổi – một con số ấn tượng không chỉ trong khu vực Đông Nam Á mà còn trên toàn thế giới.",
      date: "03 July, 2024",
      author: "Jessica",
      image: sing3,
    },
    {
      key: 4,
      category: "Singapore",
      title: "Tình hình văn hóa",
      desc: "Singapore, quốc đảo sư tử, không chỉ nổi tiếng là một trung tâm kinh tế toàn cầu mà còn là nơi giao thoa của nhiều nền văn hóa phong phú. Lịch sử hình thành, vị thế địa lý và sự đa dạng dân tộc đã tạo nên một nền văn hóa độc đáo, thu hút sự chú ý của du khách từ khắp nơi trên thế giới.",
      date: "19 July, 2024",
      author: "Amanda",
      image: sing4,
    },
  ];

  const blogsData2 = [
    {
      key: 1,
      category: "Singapore",
      title: "Lịch sử hình thành và phát triển của truyền thông",
      desc: "Truyền thông tại Singapore bắt đầu hình thành từ thời kỳ thuộc địa Anh với sự xuất hiện của các tòa soạn báo tiếng Anh. Năm 1824, tờ “Singapore Chronicle” được thành lập và kế tiếp là “The Straits Times” vào năm 1845. Đến năm 1914, báo “Malaya Tribune” được ra mắt và vượt qua “The Straits Times”",
      date: "21 Nov, 2024",
      author: "Amanda",
      image: sing5,
    },
    {
      key: 2,
      category: "Singapore",
      title: "Quản Lý Truyền Thông Singapore: Pháp Luật và Đạo Đức Cần Biết",
      desc: "Singapore luôn được biết đến như một quốc gia có cách quản lý truyền thông vô cùng bài bản và chặt chẽ. Hành trình này có thể được chia làm ba giai đoạn rõ rệt, phản ánh những bước đi chiến lược của chính phủ trong việc kiểm soát và định hướng thông tin.",
      date: "19 July, 2017",
      author: "Amanda",
      image: sing2,
    },
    {
      key: 3,
      category: "Singapore",
      title: "Mô hình truyền thông",
      desc: "Truyền thông là một phần không thể thiếu trong cuộc sống hiện đại. Tuy nhiên, không phải ai cũng hiểu rõ cách mà truyền thông vận hành và sự ảnh hưởng của các học thuyết khác nhau lên ngành này. Hãy cùng khám phá bốn học thuyết lớn về báo chí và truyền thông, từ quá khứ cho đến hiện tại, để hiểu rõ hơn về những gì đang diễn ra trong thế giới truyền thông ngày nay. ",
      date: "03 July, 2024",
      author: "Jessica",
      image: sing6,
    },
    {
      key: 4,
      category: "Singapore",
      title: "Ảnh hưởng của truyền thông quốc tế đến chính trị và xã hội",
      desc: "Singapore, quốc đảo sư tử, không chỉ nổi tiếng là một trung tâm kinh tế toàn cầu mà còn là nơi giao thoa của nhiều nền văn hóa phong phú. Lịch sử hình thành, vị thế địa lý và sự đa dạng dân tộc đã tạo nên một nền văn hóa độc đáo, thu hút sự chú ý của du khách từ khắp nơi trên thế giới.",
      date: "19 July, 2024",
      author: "Amanda",
      image: sing7,
    },
  ];

  const blogsData3 = [
    {
      key: 1,
      category: "Singapore",
      title: "Truyền thông trong việc định hình chính sách đối ngoại",
      desc: "Truyền thông tại Singapore bắt đầu hình thành từ thời kỳ thuộc địa Anh với sự xuất hiện của các tòa soạn báo tiếng Anh. Năm 1824, tờ “Singapore Chronicle” được thành lập và kế tiếp là “The Straits Times” vào năm 1845. Đến năm 1914, báo “Malaya Tribune” được ra mắt và vượt qua “The Straits Times”",
      date: "21 Nov, 2024",
      author: "Amanda",
      image: sing8,
    },
    {
      key: 2,
      category: "Singapore",
      title:
        "Truyền thông quốc tế trong việc tạo lập và định hướng dư luận xã hội",
      desc: "PGS. TS. Nguyễn Tuấn Anh cho rằng dư luận xã hội phản ánh thái độ, suy nghĩ, niềm tin của công chúng trước các sự kiện có tính thời sự, đặc biệt khi liên quan đến lợi ích cộng đồng. Dư luận có thể tích cực hoặc tiêu cực, tùy thuộc vào góc nhìn của từng nhóm người.",
      date: "19 July, 2024",
      author: "Amanda",
      image: sing2,
    },
    {
      key: 3,
      category: "Singapore",
      title: "Thách thức và cơ hội trong truyền thông quốc tế",
      desc: "Thách thức đầu tiên là cân bằng giữa kiểm soát nội dung và tự do ngôn luận ở Singapore. Nhóm tác giả nhận thấy rằng vấn đề kiểm soát lan truyền những thông tin giả mạo, sai sự thật đang là một trong những mối quan tâm hàng đầu của Singapore.",
      date: "03 July, 2024",
      author: "Jessica",
      image: sing9,
    },
  ];

  const blogsData4 = [
    {
      key: 1,
      category: "Singapore",
      title: "Tổng Kết Hành Trình Khám Phá Hệ Thống Truyền Thông Singapore",
      desc: "Qua từng chương trước của bài viết, chúng ta đã khám phá nhiều khía cạnh về hệ thống truyền thông quốc tế của Singapore. Quốc đảo này không chỉ nổi bật với nền kinh tế phát triển vượt bậc",
      date: "21 Nov, 2024",
      author: "Amanda",
      image: blog1Chuong4,
    },
  ];

  const recentPosts = [
    {
      title: "5 Beautiful buildings you need to before dying",
      date: "12 Jan, 2016",
      image: newsImg,
    },
    {
      title: "Let's make an introduction for creative life",
      date: "11 Jan, 2016",
      image: newsImg,
    },
    {
      title: "Did you see the most beautiful sea in the world?",
      date: "07 Jan, 2016",
      image: newsImg,
    },
  ];

  const tabItems = [
    {
      key: "1",
      label: "TỔNG QUAN VỀ SINGAPORE",
      children: (
        <div className="col-span-1 lg:col-span-3 space-y-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex space-x-4"
              onClick={() => navigate(`/blog/section-1/${blog.key}`)}
            >
              <div className="w-1/3">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-lg shadow-lg h-[200px] w-[350px] object-cover"
                />
              </div>
              <div className="w-2/3">
                <span className="text-green-600 font-semibold text-sm uppercase">
                  {blog.category}
                </span>
                <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
                <p className="text-sm font-normal text-gray-400 mt-2 tracking-wide leading-[22px]">
                  {blog.desc}
                </p>
                <p className="text-sm text-gray-700 mt-2">{blog.content}</p>
                <p className="text-sm text-gray-500 mt-4">
                  <i className="fa fa-eye mr-1"></i>
                  {blog.views} <span className="mx-2">/</span> {blog.date}{" "}
                  <span className="mx-2">/</span> By {blog.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: "KHẢO SÁT HỆ THỐNG BÁO CHÍ TRUYỀN THÔNG CỦA SINGAPORE",
      children: (
        <div className="col-span-1 lg:col-span-3 space-y-8">
          {blogsData2.map((blog, index) => (
            <div key={index} className="flex space-x-4" onClick={() => navigate(`/blog/section-2/${blog.key}`)}>
              <div className="w-1/3">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-lg shadow-lg h-[200px] w-[350px] object-cover"
                />
              </div>
              <div className="w-2/3">
                <span className="text-green-600 font-semibold text-sm uppercase">
                  {blog.category}
                </span>
                <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
                <p className="text-sm font-normal text-gray-400 mt-2 tracking-wide leading-[22px]">
                  {blog.desc}
                </p>
                <p className="text-sm text-gray-700 mt-2">{blog.content}</p>
                <p className="text-sm text-gray-500 mt-4">
                  <i className="fa fa-eye mr-1"></i>
                  {blog.views} <span className="mx-2">/</span> {blog.date}{" "}
                  <span className="mx-2">/</span> By {blog.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: "3",
      label: "ĐÁNH GIÁ VAI TRÒ VÀ VỊ TRÍ CỦA HỆ THỐNG TRUYỀN THÔNG SINGAPORE",
      children: (
        <div className="col-span-1 lg:col-span-3 space-y-8">
          {blogsData3.map((blog, index) => (
            <div key={index} className="flex space-x-4" onClick={() => navigate(`/blog/section-3/${blog.key}`)}>
              <div className="w-1/3">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-lg shadow-lg h-[200px] w-[350px] object-cover"
                />
              </div>
              <div className="w-2/3">
                <span className="text-green-600 font-semibold text-sm uppercase">
                  {blog.category}
                </span>
                <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
                <p className="text-sm font-normal text-gray-400 mt-2 tracking-wide leading-[22px]">
                  {blog.desc}
                </p>
                <p className="text-sm text-gray-700 mt-2">{blog.content}</p>
                <p className="text-sm text-gray-500 mt-4">
                  <i className="fa fa-eye mr-1"></i>
                  {blog.views} <span className="mx-2">/</span> {blog.date}{" "}
                  <span className="mx-2">/</span> By {blog.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: "4",
      label: "Singapore và Truyền thông Quốc tế: Những Góc Nhìn Đáng Suy Ngẫm",
      children: (
        <div className="col-span-1 lg:col-span-3 space-y-8">
          {blogsData4.map((blog, index) => (
            <div key={index} className="flex space-x-4" onClick={() => navigate(`/blog/section-4/${blog.key}`)}>
              <div className="w-1/3">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-lg shadow-lg h-[200px] w-[350px] object-cover"
                />
              </div>
              <div className="w-2/3">
                <span className="text-green-600 font-semibold text-sm uppercase">
                  {blog.category}
                </span>
                <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
                <p className="text-sm font-normal text-gray-400 mt-2 tracking-wide leading-[22px]">
                  {blog.desc}
                </p>
                <p className="text-sm text-gray-700 mt-2">{blog.content}</p>
                <p className="text-sm text-gray-500 mt-4">
                  <i className="fa fa-eye mr-1"></i>
                  {blog.views} <span className="mx-2">/</span> {blog.date}{" "}
                  <span className="mx-2">/</span> By {blog.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Spin size="large" style={{ color: "#0D355C" }} />
        </div>
      ) : (
        <div id="wrapper" className="bg-primary-50 mt-20">
          <div className="relative px-10">
            <div className="relative h-[200px] w-full rounded-[20px] overflow-hidden z-20">
              <img
                src={newsHeader}
                className="h-full w-full object-cover"
                alt="Singapore Background"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 rounded-[20px]"></div>
            </div>
            <p className="absolute bottom-1/3 left-36 text-white text-[40px] uppercase font-normal shadow-lg z-20">
              Singapore và Truyền thông quốc tế của Đảo quốc Sư Tử
            </p>
            <div className="absolute inset-0 bg-primary-700 h-[100px] z-10"></div>
          </div>
          <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
              <Carousel arrows easin="linear">
                {blogs.map((blog, index) => (
                  <div
                    key={index}
                    className="relative rounded overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => navigate(`/blog/section-1/${blog.key}`)}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-[450px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
                      <span className="inline-block px-3 py-1 bg-green-500 text-sm font-semibold uppercase rounded mb-2">
                        {blog.category}
                      </span>
                      <h3 className="text-lg font-bold">{blog.title}</h3>
                      <p className="text-sm mt-2">
                        {blog.date} <span className="mx-2">/</span> By{" "}
                        {blog.author}
                      </p>
                    </div>
                  </div>
                ))}
              </Carousel>
              {/* <div>
                <img src={singaporeBg} className="h-full w-full rounded-lg" />
              </div> */}
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-10">
            <div className="flex justify-center gap-8">
              {/* Blog List */}
              <div className="w-2/3">
                <Tabs defaultActiveKey="1" items={tabItems} centered />
              </div>
              {/* Sidebar */}
              <div className="col-span-1 space-y-4 w-1/2">
                {/* Recent Posts */}
                <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <li key={index} className="flex space-x-4">
                        <Image
                          src={post.image}
                          alt={post.title}
                          className="!w-32 h-16 rounded-lg"
                        />
                        <div>
                          <h4 className="text-sm font-bold">{post.title}</h4>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Advertising */}
                <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Advertising</h3>
                  <Image src={singaporeAds} alt="Ad" className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
