import React from 'react';
import Footer from '../CommonComp/Footer/Footer';
import Header from '../CommonComp/Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div className='pl-4'>
                <h1 className='text-4xl text-slate-800 font-serif font-medium my-16'>Some Common QnA</h1>
                <div className='text-left mt-10 mb-16 mx-24 font-serif text-slate-800'>
                    <h4 className='text-lg font-semibold'><span className='text-2xl text-slate-500 font-bold'>Q: </span>Difference between Authentication & Authorization</h4>
                    <br />
                    <div>
                        <span className='text-2xl text-slate-500 font-bold'>Ans: </span>
                        <table className='text-center mx-auto border-2 border-gray-400'>
                            <thead>
                                <tr className='border-2 border-gray-400'>
                                    <th className='border-2 border-gray-400 p-6'>
                                        Authentication</th>
                                    <th className='border-2 border-gray-400 p-6'>Authorization</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-2 border-gray-400'>
                                    <td className='border-2 border-gray-400 p-6'>Determines whether users are who they claim to be</td>
                                    <td className='border-2 border-gray-400 p-6'>Determines what users can and cannot access</td>
                                </tr>
                                <tr className='border-2 border-gray-400'>
                                    <td className='border-2 border-gray-400 p-6'>Challenges the user to validate credentials</td>
                                    <td className='border-2 border-gray-400 p-6'>Verifies whether access is allowed through policies and rules</td>
                                </tr>
                                <tr>
                                    <td className='border-2 border-gray-400 p-6'>Usually done before authorization</td>
                                    <td className='border-2 border-gray-400 p-6'>Usually done after successful authentication</td>
                                </tr>
                                <tr>
                                    <td className='border-2 border-gray-400 p-6'>Generally, transmits info through an ID Token</td>
                                    <td className='border-2 border-gray-400 p-6'>Generally, transmits info through an Access Token</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='text-left mt-10 mb-16 mx-24 font-serif text-slate-800'>
                    <h4 className='text-lg font-semibold'><span className='text-2xl text-slate-500 font-bold'>Q: </span>What is Context API?</h4>
                    <br />
                    <p>
                        <span className='text-2xl text-slate-500 font-bold'>Ans: </span>
                        Normally in React, We passe data from parent element to down element by all level via props. It is inconvenient method for certain props that are required many components in react app. Here we can use Context. It pass values between components without passing props to every level of child components. Context has ability to communicate and share data at different level.
                    </p>
                </div>
                <div className='text-left mt-10 mb-16 mx-24 font-serif text-slate-800'>
                    <h4 className='text-lg font-semibold'><span className='text-2xl text-slate-500 font-bold'>Q: </span>What is Semantic Tag?</h4>
                    <br />
                    <p>
                        <span className='text-2xl text-slate-500 font-bold'>Ans: </span>
                        Semantic Tag is basically some HTML element that clearly describe their meaning. It can accurately describe the purpose of  the element and type of content inside it. Semantic elements makes code easy to read and understand to human. It increases accessibility of code. So it offers a better user experience than old HTML elements.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;