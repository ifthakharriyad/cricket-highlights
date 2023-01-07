export default function fmtToHTML(cont) {
  const htmlBlocks = cont.map((elem, i) => {
    if (elem.nodeType === "embedded-asset-block") {
      console.log(elem);
    }
    let block = elem.content.map((txt, j) => {
      return <span key={j}>{fmtTxt(txt)}</span>;
    });
    if (elem.nodeType === "heading-4") {
      return (
        <>
          <h4 key={i}>{block}</h4>
          <br></br>
        </>
      );
    } else if (elem.nodeType === "heading-3") {
      return (
        <>
          <h3 key={i}>{block}</h3>
          <br></br>
        </>
      );
    } else if (elem.nodeType === "heading-2") {
      return (
        <>
          <h2 key={i}>{block}</h2>
          <br></br>
        </>
      );
    } else if (elem.nodeType === "heading-1") {
      return (
        <>
          <h1 key={i}>{block}</h1>
          <br></br>
        </>
      );
    } else if (elem.nodeType === "embedded-asset-block") {
      if (
        elem.data.target.fields.file.contentType === "image/png" ||
        elem.data.target.fields.file.contentType === "image/jpeg" ||
        elem.data.target.fields.file.contentType === "image/svg+xml"
      ) {
        return (
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "450px",
              margin: "7px 0px 15px 0px",
            }}
            src={elem.data.target.fields.file.url}
            alt={elem.data.target.fields.file.title}
          />
        );
      } else return null;
    } else {
      return (
        <>
          <p key={i}>{block}</p>
          <br></br>
        </>
      );
    }
  });
  return htmlBlocks;
}

function fmtTxt(txtObj) {
  if (txtObj.marks && txtObj.marks[0] && txtObj.marks[0].type === "bold") {
    return <b>{txtObj.value}</b>;
  } else {
    return txtObj.value;
  }
}
