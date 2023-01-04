import Iframe from "react-iframe";

export default function genIfrms(url) {
  let ifrmUrl;
  let arr = url?.split("//")[1].split("/");
  if (arr[0] === "ok.ru") {
    ifrmUrl = "//" + arr.join("/").replace("video", "videoembed");
  } else ifrmUrl = url;

  return (
    <Iframe
      width="100%"
      height="360"
      src={ifrmUrl}
      title="Cricket Highlights"
      allowFullscreen
      styles={{ border: "1px solid #aaa" }}
      loading="lazy"
      scrolling="no"
    ></Iframe>
  );
}
