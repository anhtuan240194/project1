import React from 'react'
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import './index.css'
import "./bootstrap.css"
//Import image
import View from "./assets/view.svg"
import IconSearch from "./assets/search.svg"

const blogs = [
  {
    title: "Trải nghiệm Tham quan kiến tập tại EWAY (IT TOUR RECAP)",
    description:
      "Hè tới rồi, đi Tour thôi. Mùa hè là mùa du lịch, người người đi tour nhà nhà ...",
    view: 9,
    image:
      "https://media.techmaster.vn/api/static/c2m5ou451cob24f6skeg/UQ8vXply",
    timepost: "20-6-2023",
  },
  {
    title:
      "Ký kết hợp tác tuyển dụng NCC ASIA và TechMaster - Cùng gặp gỡ Head of PM hiền nhất Vịnh Bắc Bộ !",
    description:
      "  Tiếp đón đoàn TechMaster, người đã trao đổi và trò chuyện trực tiếp với từ...",
    view: 23,
    image:
      "https://media.techmaster.vn/api/static/brbgh4451coepbqoch60/fuHhTVlb",
    timepost: "20-5-2023",
  },
  {
    title:
      "6 lợi ích của việc sở hữu chứng chỉ FE và cơ hội làm việc tại Nhật Bản",
    description: " Javascript tips and tricks to Optimize Performance",
    view: 49,
    image: "https://media.techmaster.vn/api/static/OH6Sopmw/FlNkxp3b",
    timepost: "15-6-2023",
  },
  {
    title: "7 thủ thuật JavaScript bạn nên biết",
    description: " Javascript tips and tricks to Optimize Performance",
    view: 49,
    image: "https://media.techmaster.vn/api/static/OH6Sopmw/FlNkxp3b",
    timepost: "15-6-2023",
  }
];
export const Search = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="search-main position-relative">
            <input type="text" placeholder="Nhập từ khóa của bạn" />
            <img className="position-absolute" src={IconSearch} alt="Tìm kiếm" />
          </div>
          <ul className="list-keysearch ps-0 mt-3">
            <li>Xem tất cả</li>
            <li>Big Data</li>
            <li>React Js</li>
            <li>Javascript</li>
            <li>Vue Js</li>
            <li>Angular</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Articles = () => {
  return (
    <div className="container">
      <div className="row">
        {blogs.map((blog, index) =>  (
          <div key={index} className="col-6 col-lg-3 col-xl-3 col-md-4 col-sm-6">
            <div className="card-article rounded-2">
              <img src={blog.image} alt={blog.title} />
              <div className="article-infor pt-3 pb-3">
                <div className="article-title mb-2 text-center ps-2 pe-2">
                  {blog.title}
                </div>
                <div className="article-des text-center mb-2 ps-2 pe-2">
                  {blog.description}
                </div>
                <div className="article-viewTime pt-2 d-flex justify-content-between align-items-center">
                  <div className="article-view ps-2">
                    <img src={View} alt="Lượt xem" /> <span>{blog.view}</span>
                  </div>
                  <div className="article-time pe-2">{blog.timepost}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



ReactDOM.createRoot(document.getElementById("main")).render(
  <React.StrictMode>
    <Search />
    <Articles />
  </React.StrictMode>
);
