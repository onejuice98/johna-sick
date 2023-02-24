const prepareComment = (comment) => {
  return comment.replace(/\?/g, "%3F").replace(/\//g, "").replace(/\%/g, "%25");
};

setTimeout(() => {
  setInterval(() => {
    let comment = document.querySelectorAll("#content-text");
    comment.forEach(async (value) => {
      value.setAttribute("id", "censored_content-text");
      let commentValue = "";

      value.querySelectorAll(".style-scope.yt-formatted-string").length !== 0
        ? value
            .querySelectorAll(".style-scope.yt-formatted-string")
            .forEach((moreTagValue) => (commentValue += moreTagValue.innerHTML))
        : (commentValue += value.innerHTML);
      console.log(commentValue);
      fetch(`http://43.201.146.63:5000/predict/${prepareComment(commentValue)}`)
        .then((res) => res.json())
        .then(
          (data) =>
            (value.innerHTML =
              parseInt(data.predict) < -60
                ? "랭푸파가 작동되었습니다."
                : commentValue)
        );
    });
  }, 1000);
}, 2000);
