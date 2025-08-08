import { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [res, setRes] = useState("");
  const [heading , setHeading]=useState([]);

  const setChange = (e) => {
    setUrl(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/test/analyze", {
        url: url,
      });

      if (res.data.success) {
        setRes(res.data.title);
        setHeading(res.data.headings)
        console.log(res.data.headings)

      } else {
        console.log("Something went wrong ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[100vw] h-[100vh] flex bg-amber-100">
      <div className="w-[70%] h-[70%] bg-amber-200 m-auto ">
        <input
          type="url"
          value={url}
          onChange={setChange}
          placeholder="Enter URL"
          className="block bg-amber-50 border rounded-sm w-[50%] text-center m-auto"
        />

        <button
          onClick={(e) => submitHandler(e)}
          className="bg-green-500 text-white p-1 rounded block m-auto hover:cursor-pointer mt-1.5"
        >
          Submit
        </button>

        <div className="w-[80%] h-[80%] bg-violet-50 m-auto">{heading.map((item)=>(
          <div>
          <div>{item.text}</div>
          </div>
        ))}</div>
      </div>
    </div>
  );
}

export default App;
