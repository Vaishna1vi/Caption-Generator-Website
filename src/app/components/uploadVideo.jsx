'use client'
import CloudUploadIcon from "./cloudUploadIcon";
import axios from "axios";

export default function uploadVideo() {
    async function upload(e) {
        e.preventDefault();
        console.log(e);
        const files = e.target.files;
        if(files.length>0) {
            const file = files[0];
           const res = await axios.postForm('/api/upload', {
                file,
            });
            console.log(res.data);
        }
      }
    return(
        <label className="bg-green-400 py-2 px-5 rounded-full inline-flex gap-3 cursor-pointer">
          <CloudUploadIcon />
          <span>Choose file</span>
          <input  onChange={upload} type="file" className="hidden" />
        </label>
    );
}