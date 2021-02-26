import React, { useEffect, useState, useRef } from "react";
import SimpleBar from "simplebar-react";
import UserPhoto from "icons/Photo.png";
import { SizeMe } from "react-sizeme";
import Select from "@material-ui/core/Select";
import moment from "moment";

const Button = ({ primary = true, ...rest }) => {
  return (
    <div
      {...rest}
      className={`py-.05 px-4 rounded font-bold bg-${
        primary ? "blue" : "red"
      }-500 transition cursor-pointer select-none hover:bg-${
        primary ? "blue" : "red"
      }-501 active:bg-${primary ? "blue" : "red"}-502`}
    ></div>
  );
};

const Discord = () => {
  const [users, setUsers] = useState([
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
  ]);

  const [channels, setChannels] = useState([
    {
      category: "text",
      title: "General",
      messages: [
        {
          user_photo: UserPhoto,
          message: "Hello everyone, do you see messages?",
          date: new Date(),
        },
        { user_photo: UserPhoto, message: "Yes, I see.", date: new Date() },
        { user_photo: UserPhoto, message: "Okay, great.", date: new Date() },
      ],
    },
    {
      category: "text",
      title: "Football",
      messages: [
        {
          user_photo: UserPhoto,
          message: "Hello, John, whats up?",
          date: new Date(),
        },
        {
          user_photo: UserPhoto,
          message: "All good! Have you seen how psg made barce 4 - 1???",
          date: new Date(),
        },
        { user_photo: UserPhoto, message: "Yeah, lol. Xavi for a couch.", date: new Date() },
        {
          user_photo: UserPhoto,
          message: "Hello, John, whats up?",
          date: new Date(),
        },
        {
          user_photo: UserPhoto,
          message: "All good! Have you seen how psg made barce 4 - 1???",
          date: new Date(),
        },
        { user_photo: UserPhoto, message: "Yeah, lol. Xavi for a couch.", date: new Date() },
        {
          user_photo: UserPhoto,
          message: "Hello, John, whats up?",
          date: new Date(),
        },
        {
          user_photo: UserPhoto,
          message: "All good! Have you seen how psg made barce 4 - 1???",
          date: new Date(),
        },
        { user_photo: UserPhoto, message: "Yeah, lol. Xavi for a couch.", date: new Date() },
      ],
    },
    {
      category: "voice",
      title: "Voice",
      messages: [
        {
          user_photo: UserPhoto,
          message: "Hello, are monkeys smart?",
          date: new Date(),
        },
        {
          user_photo: UserPhoto,
          message: "I don't know, but I surely know they are smarter than you...",
          date: new Date(),
        },
        {
          user_photo: UserPhoto,
          message: "Hahaha. And than you too... ",
          date: new Date(),
        },
      ],
    },
  ]);

  const [currentChannel, setCurrentChannel] = useState({
    category: "text",
    title: "General",
  });

  const chatRef = useRef(null);

  useEffect(() => {
    let prevScrollTop = 0;
    const scrollChatToBottom = () => {
      setTimeout(() => {
        if (chatRef.current) {
          const chat = chatRef.current.getScrollElement();
          chat.scrollTop = 1000;
        } else {
          scrollChatToBottom();
        }
      }, 100);
    };

    scrollChatToBottom();
  }, [currentChannel]);

  return (
    <div className="w-full h-full flex flex-col text-white font-bold">
      <div className="text-center mb-2 font-bold">Discord</div>
      <div className="flex-grow h-0 bg-blue-700 mx-6 mb-6 rounded overflow-hidden">
        <div className="flex h-full">
          <SimpleBar className="w-24 flex-shrink-0 lg:mr-4">
            <div className="bg-blue-900 px-2.5 py-4">
              {users.map((u, i) => (
                <div
                  className="bg-center bg-cover w-16 h-16 mx-auto mb-2"
                  style={{ backgroundImage: `url(${u.user_photo})` }}
                ></div>
              ))}
            </div>
          </SimpleBar>
          <SimpleBar className="w-48 bg-blue-900 flex-shrink-0 py-3 hidden lg:block">
            <div className="mb-2 text-gray-300">- Text Channels</div>
            <div className="mb-4 pl-2">
              {channels
                .filter((x) => x.category === "text")
                .map((ch, i) => (
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      setCurrentChannel((prev) =>
                        Object.assign({}, prev, { category: ch.category, title: ch.title })
                      )
                    }
                    key={`text-channel-${i}`}
                  >
                    #{ch.title}
                  </div>
                ))}
            </div>
            <div className="mb-2 text-gray-300">- Voice Channels</div>
            <div className="mb-4 pl-2">
              {channels
                .filter((x) => x.category === "voice")
                .map((ch, i) => (
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      setCurrentChannel((prev) =>
                        Object.assign({}, prev, { category: "voice", title: ch.title })
                      )
                    }
                    key={`voice-channel-${i}`}
                  >
                    #{ch.title}
                  </div>
                ))}
            </div>
          </SimpleBar>
          <div className="flex-grow flex flex-col px-3 pt-2">
            <div className="justify-between flex mb-2">
              <div>
                <Select
                  className="inline-flex lg:hidden"
                  renderValue={(val) => console.log("Val", val)}
                  disableUnderline
                  native
                  id="grouped-native-select"
                  classes={{
                    root:
                      "py-0.5 bg-blue-500 px-3 rounded text-white font-jost capitalize font-semibold",
                  }}
                  onChange={(e) => {
                    setCurrentChannel(JSON.parse(e.target.value));
                  }}
                >
                  <optgroup label="Text Channels" className="text-black text-sm">
                    {channels
                      .filter((x) => x.category === "text")
                      .map((ch, i) => (
                        <option
                          key={`text-ch-${i}`}
                          value={JSON.stringify({ category: "text", title: ch.title })}
                        >
                          #{ch.title}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Voice Channels" className="text-black text-sm">
                    {channels
                      .filter((x) => x.category === "voice")
                      .map((ch, i) => (
                        <option
                          key={`voice-ch-${i}`}
                          value={JSON.stringify({ category: "voice", title: ch.title })}
                        >
                          #{ch.title}
                        </option>
                      ))}
                  </optgroup>
                </Select>
              </div>
              <div className="flex">
                <div className="mr-2">
                  <Button>Clear</Button>
                </div>
                <Button primary={false}>Close</Button>
              </div>
            </div>
            <SizeMe monitorHeight>
              {({ size }) => {
                return (
                  <SimpleBar ref={chatRef} className="flex-grow h-0 bg-blue-900 rounded mb-3">
                    <div style={{ height: size.height }} className="flex items-end flex-wrap pt-3">
                      <div className="px-3 w-full">
                        {channels
                          .find(
                            (x) =>
                              x.category === currentChannel.category &&
                              x.title === currentChannel.title
                          )
                          .messages.map((m, i) => (
                            <div
                              className="flex items-center justify-between mb-3"
                              key={`message-${i}`}
                            >
                              <div className="flex items-center mr-3">
                                <div
                                  className="bg-center bg-cover w-16 h-16 mr-2 flex-none"
                                  style={{ backgroundImage: `url(${m.user_photo})` }}
                                ></div>
                                <div>
                                  <div>{m.message}</div>
                                  <div className="text-xs font-semibold text-gray-400 block xl:hidden whitespace-nowrap">
                                    {moment(m.date).format("DD/MM/YYYY, hh:mm:ss")}
                                  </div>
                                </div>
                              </div>
                              <div className="text-gray-400 hidden xl:block whitespace-nowrap">
                                {moment(m.date).format("DD/MM/YYYY, hh:mm:ss")}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </SimpleBar>
                );
              }}
            </SizeMe>

            <div className="bg-blue-900 rounded-t p-3">
              <div className="flex justify-between mb-3">
                <div>#{currentChannel.title}</div>
                <Button>Create</Button>
              </div>
              <div className="flex">
                <div className="w-2/5 flex-shrink">#{currentChannel.title}</div>
                <div className="w-2/5 flex-shrink">+keyword</div>
                <div className="flex-grow flex justify-end">
                  <div className="mr-2">
                    <Button>Edit</Button>
                  </div>
                  <Button primary={false}>Stop</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discord;
