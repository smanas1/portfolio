import { copyright } from "./../Data/copyright";

const Copyright = () => {
  return (
    <>
      <div className="copyright">
        <div className="copyrightwrapper">
          <div className="copyItems">
            {copyright.map((item, i) => (
              <div key={i}>{item.title}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Copyright;
