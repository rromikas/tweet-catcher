import React from "react";
import SimpleBar from "simplebar-react";
import ImageIcon from "icons/Image.png";
import TrashIcon from "icons/Trash.png";
import PasswordIcon from "icons/Password.png";
import Clock from "components/Clock";

const posts = [
  {
    title: "Succesfully Checked Out! Check your email!",
    values: {
      website: "https://dashboard.tweet-catcher.com",
      email: "youemail@gmail.com",
      key: "7NVX-AWE1-BNA1-98BX",
    },
    source: "admin",
  },
  {
    title: "Instagram Post Detected (@username)",
    values: {
      "OCR Result from post": "Announcement: We’re stocking soon. Stay tuned!",
    },
    source: "instagram",
  },

  {
    title: "Staff Message Received",
    values: {
      message: "Hello Users! @username is restocking soon! Check the channel guide in the Discord",
    },
    source: "admin",
  },
  {
    title: "@lushythedev via  Twitter",
    values: {
      url: "https://dashboard.tweet-catcher.com/purchase?password=",
      password: "RESTOCK2021!!!",
    },
    source: "twitter",
  },
];

const Home = () => {
  const generalActions = [
    { icon: PasswordIcon, title: "Password", onClick: (index) => {} },
    { icon: ImageIcon, title: "Image Viewer", onClick: (index) => {} },
    { icon: TrashIcon, title: "Clear", onClick: (index) => {} },
  ];
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-center text-white font-bold">Post Feed</div>
      <SimpleBar className="flex-grow h-0 ml-5 mr-1 mb-4 pr-4">
        {posts.map((post, i) => (
          <div key={`post-${i}`} className="bg-blue-700 rounded-xl mb-2 p-4">
            <div className="text-green font-bold mb-3">{post.title}</div>
            {Object.keys(post.values).map((key, y) => (
              <div key={`post-${i}-val-${y}`} className="flex">
                <div className="mr-2 text-white capitalize">{key}:</div>
                <div className="text-green">{post.values[key]}</div>
              </div>
            ))}
          </div>
        ))}
      </SimpleBar>
      <SimpleBar className="pb-4">
        <div style={{ minWidth: 740 }} className="flex items-center px-5 text-white">
          <div className="flex select-none font-semibold text-sm">
            {generalActions.map((action, i) => (
              <div
                key={`bottom-panel-btn-${i}`}
                className="active:bg-blue-700 mr-2 bg-blue-700 hover:bg-blue-600 rounded-2xl px-4 py-3 transition cursor-pointer flex items-center"
              >
                <img src={action.icon} className="mr-3 max-w-4 max-h-4 h-auto w-auto"></img>
                <div className="whitespace-nowrap">{action.title}</div>
              </div>
            ))}
          </div>
          <div className="flex-grow">
            <Clock></Clock>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
};

export default Home;
