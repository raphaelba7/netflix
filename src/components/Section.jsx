function Section(props) {
  return (
    <>
      {props.datas.map((elem) => {
        return (
          <>
            <div className="each-line">
              <h2 className="roboto-regular">{elem.category}</h2>
              <div className="cat_pictures">
                {elem.images.map((imgs) => {
                  {
                    return (
                      <>
                        <img src={imgs} alt="" />
                      </>
                    );
                  }
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Section;
