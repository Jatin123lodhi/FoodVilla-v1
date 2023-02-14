const Contact = () => {
  const bgImgURL =
    "https://b.zmtcdn.com/webFrontend/8015dbe54fd3659cc0366c1cc77f664c1601890512.jpeg?output-format=webp";
  return (
    <>
      {/* <h1 className="m-2 p-2 text-2xl ">Contact us</h1> */}
      <div className="relative ">
        <div className="m-2 p-2  absolute w-full   top-16  text-4xl text-center flex items-center justify-center text-white">
          We would ❤️ to hear from you{" "}
        </div>
        <img className="h-64 w-full" src={bgImgURL} alt="some img" />
      </div>
      <p>
        <div className="m-2 p-2 text-xl text-gray-500">
          You can Mail us - FoodVilla@support.com.
        </div>
        <div className="m-2   p-2 text-md text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </p>
    </>
  );
};
export default Contact;
