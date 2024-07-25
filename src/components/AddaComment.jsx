import { Send } from "@mui/icons-material";

export default function AddaComment({
  setTextareaValue,
  textareaValue,
  commentHandler,
}) {
  return (
    <div className="relative flex justify-start">
      <textarea
        onChange={(e) => setTextareaValue(e.target.value)}
        value={textareaValue}
        type="textarea"
        className="h-9 w-[85%] p-1
        border-2 border-zinc-600 rounded-lg outline-none 
        bg-transparent hover:border-blue-600 cursor-pointer"
        placeholder="Add a comment"
      />
      <button
        onClick={commentHandler}
        className="absolute top-0 right-0 h-9 w-9
      rounded-md text-black text-center
      border-2 shadow-inner 
      border-blue-800 hover:border-blue-500 
      bg-blue-900 hover:bg-blue-800  
      "
      >
        <Send fontSize="sm" />
      </button>
    </div>
  );
}
