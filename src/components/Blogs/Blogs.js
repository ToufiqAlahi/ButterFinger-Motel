import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (

        <div>
            <div className="w-full md:w-3/5 mx-auto p-8">
            <div className="tab w-full overflow-hidden border-t">
            <input className="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs"/>
            <label className="font-bold text-5xl text-fuchsia-800  block p-5 leading-normal cursor-pointer" for="tab-multi-one">What is Context API ?</label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto,
                    explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta
                    molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
            </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
                    <input className="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs"/>
                    <label className="  text-fuchsia-800  text-5xl font-bold block p-5 leading-normal cursor-pointer" for="tab-multi-two">What Is Semantic Tag ?</label>
                    <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto,
                            explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta
                            molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                    </div>
                </div>
                <div className="tab w-full overflow-hidden border-t">
                    <input className="absolute opacity-0" id="tab-multi-three" type="checkbox" name="tabs"/>
                    <label className="  text-5xl text-fuchsia-800 font-bold block p-5 leading-normal cursor-pointer" for="tab-multi-three">Difference among Inline, Block, Inlibne block  </label>
                    <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                        <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto,
                            explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta
                            molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                    </div>
                    <hr />
                </div>

            </div>
        </div>

    );
};

export default Blogs;