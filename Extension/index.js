const prepareComment = (comment) => {
  return comment.replace(/\?/g, "%3F").replace(/\//g, "").replace(/\%/g, "%25");
};

let head = document.querySelector("head");
let meta = document.createElement("meta");
meta.setAttribute("http-equiv", "Content-Security-Policy");
meta.setAttribute("content", "upgrade-insecure-requests");
//head.appendChild(meta);
setInterval(() => {
  let comment = document.querySelectorAll("#content-text");
  comment.forEach(async (value) => {
    value.setAttribute("id", "censored_content-text");
    value.innerHTML = "뭘봐요";

    fetch(`http://43.201.146.63:5000/predict/${prepareComment("시발")}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
}, 1000);
