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
                    <h4 className='text-lg font-semibold'><span className='text-2xl text-slate-500 font-bold'>Q: </span> What other services does firebase provide other than authentication?</h4>
                    <br />
                    <p>
                        <span className='text-2xl text-slate-500 font-bold'>Ans: </span>
                        There is a lots of features in firebase. some of them are: Cloud Messaging,
                        Test Lab,                        Hosting,
                        Remote Configuration,
                        Dynamic Links,
                        Crash Reporting,
                        Real-time Database,
                        Storage,
                        App Indexing etc.
                        Similar to authentication, there is a another popular feature in Firebase is Hosting. Firebase Hosting allows you to set-up a single-page, a mobile landing page, web page or progressive web page with ease. It also helps to deliver the content rapidly anywhere. The developers can deploy the web apps as well as static content at CDN (Content Delivery Network).
                    </p>
                </div>
                <div className='text-left mt-10 mb-16 mx-24 font-serif text-slate-800'>
                    <h4 className='text-lg font-semibold'><span className='text-2xl text-slate-500 font-bold'>Q: </span>Why are you using Firebase? What other options do you have to implement authentication?v</h4>
                    <br />
                    <p>
                        <span className='text-2xl text-slate-500 font-bold'>Ans: </span>
                        I'm using Firebase because it is one of the most popular authentication system. It is a product of Google. High security and easy to implement is the reason for using Firebase. some alternative of Firebase authentication is : Auth0, Passport, KeyCloak, Amazon Cognito, Okta etc.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;