import "./adminagent.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

function AdminAgent() {
    const [agents, setAgents] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const agentsPerPage = 4; // Adjust the number of agents per page as needed

    useEffect(() => {
        axios.get("http://localhost:8070/Agent/")
            .then((res) => {
                setAgents(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }, []);

    const deleteAgent = (id) => {
        var answer = window.confirm("Are you sure?");
        if (answer) {
            axios.delete("http://localhost:8070/Agent/delete/" + id).then((res) => {
                if (res.status === 200) {
                    alert("Agent deleted");
                    setAgents((prevAgents) => prevAgents.filter((agent) => agent._id !== id));
                }
            });
        }
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredAgents = agents.filter((agent) =>
        agent.fullname.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const pageCount = Math.ceil(filteredAgents.length / agentsPerPage);
    const pagesVisited = pageNumber * agentsPerPage;

    const displayAgents = filteredAgents.slice(pagesVisited, pagesVisited + agentsPerPage).map((Agent, index) => {
        return (
            <tr className="trstyle" key={index}>
                <td><img src={Agent.image} alt="" /></td>
                <td className="tds">{Agent.fullname}</td>
                <td className="tds">{Agent.address}</td>
                <td className="tds">{Agent.email}</td>
                <td className="tds">{Agent.phone}</td>
                <td className="tds">{Agent.district}</td>
                <td>
                    {Agent._id && (
                        <Link to={"update/" + Agent._id}>
                            <img className="icone" src="/image/edit.png" alt="Icon Image" />
                        </Link>
                    )}
                </td>
                <td><img onClick={() => { deleteAgent(Agent._id) }} className="icond" src="/image/delete.png" alt="Icon Image" /></td>
                <td><Link to={"aprof/" + Agent._id}><img className="iconp" src="/image/user.png" alt="Icon Image" /></Link></td>
            </tr>
        );
    });

    return (
        <div>
            {/* Header Part */}
            <section id="header1">
                <div className="header2 containerl">
                    <div className="nav-bar">
                        <div className="brand9">
                            <img src="/image/planet.png" alt="img" />
                        </div>
                        <div className="nl">
                            <a className="tab" href="/" data-after="Home">Home</a>
                            <a className="tab" href="#services" data-after="Service">Services</a>
                            <a className="tab" href="#projects" data-after="Projects">Projects</a>
                            <a className="tab" href="#about" data-after="About">About</a>
                            <a className="tab" href="#contact" data-after="Our Team">Contact</a>
                            <a className="tab" href="/allagent" data-after="Contact">Our Team</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Header Part */}

            <div className="bodyt">
                <main className="table">
                    <section className="table__header">
                        <h1>All Agents</h1>
                        <div className="input-group">
                            <input
                                type="search"
                                placeholder="Search agent..."
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                            <img className="searchbtn" src="image/search.png" alt="" />
                        </div>
                    </section>

                    <section className="table__body">
                        <table>
                            <thead>
                                <tr>
                                    <th className="ths">Image</th>
                                    <th className="ths">Name</th>
                                    <th className="ths">Address</th>
                                    <th className="ths">E-mail</th>
                                    <th className="ths">Phone</th>
                                    <th className="ths">District</th>
                                    <th className="ths">Edit</th>
                                    <th className="ths">Delete</th>
                                    <th className="ths">Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayAgents}
                            </tbody>
                        </table>
                        <ReactPaginate
                            previousLabel={"< Previous"}
                            nextLabel={"Next >"}
                            pageCount={pageCount}
                            onPageChange={({ selected }) => setPageNumber(selected)}
                            containerClassName={"pagination"}
                            previousLinkClassName={"previousButton"}
                            nextLinkClassName={"nextButton"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"activeButton"}
                        />
                    </section>
                </main>
            </div>

            {/* Footer Part */}
            <section id="footer">
                <div className="footer container">
                    <div className="brand">
                        <h1><span>G</span>reen <span>P</span>lanet</h1>
                    </div>
                    <h2>Find us on</h2>
                    <div className="social-icon">
                        <div className="social-item">
                            <a href="#"><img src="https://img.icons8.com/?size=512&id=118497&format=png" /></a>
                        </div>
                        <div className="social-item">
                            <a href="#"><img src="https://img.icons8.com/?size=512&id=48839&format=png" /></a>
                        </div>
                        <div className="social-item">
                            <a href="#"><img src="https://img.icons8.com/?size=512&id=16713&format=png" /></a>
                        </div>
                        <div className="social-item">
                            <a href="#"><img src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png" /></a>
                        </div>
                    </div>
                    <p>Copyright © 2023 GreenPlanet. All rights reserved</p>
                </div>
            </section>
        </div>
    );
}

export default AdminAgent;
