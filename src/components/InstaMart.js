import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  //   const [isVisible, setIsVisible] = useState(false);
  return (
    <div style={{ border: "1px solid black", margin: "2px", padding: "5px" }}>
      <h3>{title}</h3>
      {isVisible == false ? (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      ) : (
        <>
          <button
            onClick={() => {
              setIsVisible(false);
              console.log("hide btn");
            }}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      )}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <>
      <h1>This is InstaMart. It has 100's of components </h1>
      <Section
        title={"About"}
        description={
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={(val) => {
          val ? setVisibleSection("about") : setVisibleSection('');
        }}
      />
      <Section
        title={"Team"}
        description={
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={(val) => {
          val ? setVisibleSection("team") : setVisibleSection('');
        }}
      />
      <Section
        title={"Product"}
        description={
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "product"}
        setIsVisible={(val) => {
          val ? setVisibleSection("product") : setVisibleSection('');
        }}
      />
    </>
  );
};

export default InstaMart;
