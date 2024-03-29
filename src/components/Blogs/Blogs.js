import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <p className="gradient-text font-bold md:text-4xl text-2xl mt-12 md:mt-24 md:mb-8 text-center">
        QnA Section
        <span className="text-lg"> Click the "plus" icon below</span>
      </p>
      <div className="border-b-4 border-slate-900 w-3/4 md:w-1/6  mx-auto  "></div>
      <div className="w-full md:w-4/5 mx-auto p-8">
        <div className="tab w-full overflow-hidden border-t">
          <input
            className="absolute opacity-0 "
            id="tab-multi-one"
            type="checkbox"
            name="tabs"
          />
          <label
            className="font-bold text-xl text-slate-800  block p-5 leading-normal cursor-pointer"
            htmlFor="tab-multi-one"
          >
            What is Context API ?
          </label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5 text-lg font-bold">
              The Context API truly shines when passing data from the parent
              nodes to child nodes. React applications can efficiently create
              global variables that can be given to other nodes using the
              context API. It is an alternative approach to passing props from
              grandparent to child to parent etc. Context API is a React feature
              that enables us to swap unique details. In short, Context API is
              used to share data with multiple components without passing data
              through props manually.
            </p>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input
            className="absolute opacity-0"
            id="tab-multi-two"
            type="checkbox"
            name="tabs"
          />
          <label
            className="  text-slate-800  text-xl font-bold block p-5 leading-normal cursor-pointer"
            htmlFor="tab-multi-two"
          >
            What Is Semantic Tag ?
          </label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5 text-lg font-bold">
              The main feature of semantic tags is to clearly articulate their
              meaning to both developers and browsers. These tags uniquely
              define their purpose. Such as:
              <i>form tag , table tag, article tag</i> . When the search engines
              or other user devices process the semantic tags, they can
              determine the importance and context of websites. Semantic tags
              make the code much easier to read. They also present a better user
              experience.
            </p>
          </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
          <input
            className="absolute opacity-0"
            id="tab-multi-three"
            type="checkbox"
            name="tabs"
          />
          <label
            className="  text-xl text-slate-800 font-bold block p-5 leading-normal cursor-pointer"
            htmlFor="tab-multi-three"
          >
            Difference among Inline, Block, Inline-block
          </label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5 text-lg font-bold">
              Inline, Block, and Inline-block are CSS display properties. <br />
              <br />
              1. Displaying items inline indicates that those items will show in
              the same line, and their individual Height and Width will not take
              effect.
              <br />
              <br />
              2. Displaying items inline-block indicates that those items will
              show in the same line, and their individual Height and Width will
              take effect. <br />
              <br />
              3. Displaying items block indicates that each item will take the
              whole width available and start from a new line.
            </p>
            <br />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
