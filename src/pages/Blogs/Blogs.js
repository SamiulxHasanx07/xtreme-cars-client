import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='py-5'>
            <Container>
                <h2 className='title mb-4'>Questions & <span className='custom-title'>Answer</span></h2>

                <div>
                    <h3>1. Difference Between Javascript & NodeJS</h3>
                    <p>NodeJS: NodeJS হল একটি Cross Platform এবং JavaScript Runtime Environment যা Server Side এ  জাভাস্ক্রিপ্ট চালানোর অনুমতি দেয়। Nodejs JavaScript Code ব্রাউজারের বাইরে Run করতে সক্ষম।</p>
                    <p>JavaScript: JavaScript একটি scripting or Programming Language, যা মূলত website কে Dynamic ও Interactive তৈরী করতে ব্যবহার করা হয়।</p>
                    <Table>
                        <thead>
                            <tr>
                                <th>JavaScript</th>
                                <th>NodeJS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JavaScript মূলত Client Side এ ব্যবহৃত হয়ে থাকে</td>
                                <td>NodeJS মূলত Server Side এ ব্যবহৃত হয়ে থাকে</td>
                            </tr>
                            <tr>
                                <td>JavaScript শুধু ব্রাউজারে চলতে সক্ষম</td>
                                <td>NodeJS মূলত JavaScript কে ব্রাউজেরের বাইরে Run করিয়ে থাকে ।</td>
                            </tr>
                            <tr>
                                <td>JavaScript Front End Development এ ব্যাবহৃত হয়ে থাকে</td>
                                <td>JavaScript Front End Development এ ব্যাবহৃত হয়ে থাকে </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className='mt-5'>
                    <h3>2. When Should you Use Nodejs & When Should you Use MongoDB</h3>
                    <p>Node JS: মূলত যখন এমন একটি application প্রয়োজন হয় যেখানে সার্ভারের প্রয়োজন রয়েছে, সেক্ষেত্রে Node JS ব্যাবহার করতে হবে। Node JS মূলত Non-Blocking, Event Driven Server এর জন্য ব্যবহৃত হয়।</p>

                    <p>MongoDB: MongoDB মূলত NoSQL Database. যদি এমন একটি Application এর প্রয়োজন হয় যেখানে Data সমূহ Store করে রাখতে হবে, ডাটা সমূহ Application এ দেখাতে হবে, এবং ডাটা গুলোকে ম্যানুপুলেশন সম্পর্কিত কাজ করতে হবে সে ক্ষেত্রে MongoDB ব্যাবহার করতে হবে।</p>
                </div>
                <div className="mt-5">
                    <h3>3. Differences Between SQL and No-SQL Databases.</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>SQL</th>
                                <th>No SQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>এটি একটি Relational Database Management System (RDBMS)</td>
                                <td>এটি একটি Non-Relational Database Management System</td>
                            </tr>
                            <tr>
                                <td>SQL ডাটাবেজে একটি ফিক্সড স্কিমা আগে থেকে তৈরী করা হয়ে থাকে।</td>
                                <td>No SQL ডাটাবেজে একটি ফিক্সড স্কিমা থাকে না এটি Dynamic Data এর জন্য Perfect</td>
                            </tr>
                            <tr>
                                <td>SQL Databse সমূহ জটিল Query ক্ষেত্রে ভালো পার্ফমেন্স করে থাকে</td>
                                <td>No SQL Databse সমূহ জটিল Query ক্ষেত্রে ভালো পার্ফমেন্স করতে সক্ষম না</td>
                            </tr>
                            <tr>
                                <td>SQL Database Vertically Scalable</td>
                                <td>SQL Database Horizentally Scalable</td>
                            </tr>
                            <tr>
                                <td>SQL Database Fllows ACID (atomicity, consistency, isolation, and durability)</td>
                                <td>SQL Database Fllows CAP(Consistency, Availability, Partition tolerance)</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="mt-5">
                    <h3>4.  What is the purpose of jwt and how does it work</h3>
                    <p>JWT মূলত Authentication এর জন্য ব্যাবহার করা হয়ে থাকে, JWT এর মাধ্যমে একটি ইউজারকে Specific ভাবে verify করা সম্বব।</p>

                    <p>JWT মূলত RSA Algorithm ব্যাবহার করে থাকে, যখন User কোন Application এ Login করে তখন তার জন্য একটি JWT তৈরী করে দেওয়া হয় এর মাধ্যমে সেই User কে Specific ভাবে চিহ্নিত করে Routes, Services and Recources শেয়ার করা যায় ।</p>
                </div>
            </Container>
        </div>
    );
};

export default Blogs;