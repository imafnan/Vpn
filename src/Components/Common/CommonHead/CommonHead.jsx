import "./CommonHead.css";
const CommonHead = ({CommonHeadH1 , CommonHeadP}) => {
  return (
    <>
      <div className="container">
        <div className="Common_head">
            <h1>{CommonHeadH1}</h1>
            <p>{CommonHeadP}</p>
        </div>
      </div>
    </>
  );
};

export default CommonHead;
