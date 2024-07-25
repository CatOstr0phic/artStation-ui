import ChannelImageDes from "../../components/ChannelImageDes";
import AddaComment from "../../components/AddaComment";
import Tags from "../../components/Tags";
import MoreProjects from "../../components/MoreProjects";
import React, { useState } from "react";
import Comment from "../../components/Comment";
import { useStateValue } from "../../redux/StateProvider";
import Card from "../../layouts/Card";

export default function DescSection() {
  const [textareaList, setTextareaList] = useState([]);
  const [textareaValue, setTextareaValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [{ commentsAdded }, dispatch] = useStateValue();

  const commentHandler = () => {
    let Comments = textareaList;
    if (textareaValue !== "") {
      Comments.unshift(textareaValue);
      setTextareaList(Comments);
      setTextareaValue("");
      dispatch({
        type: "COMMENTS",
      });
    }
  };

  return (
    <>
      <ChannelImageDes />
      <MoreProjects />
      <Tags />
      <div
        className="text-base text-zinc-600 
       m-1 font-bold"
      >
        Sign in to comment!
      </div>
      <Card>
        <AddaComment
          commentHandler={commentHandler}
          textareaValue={textareaValue}
          setTextareaValue={setTextareaValue}
        />
        <Comment textareaList={textareaList} />
      </Card>
    </>
  );
}
