import React, {Component} from 'react';
import './Sidebar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const routes = [
    {
        path:"/",
        exact: true,
        sidebar: () => <div>Home</div>,
        main: () => <h2>Home</h2>
    },
    {
        path: "/login",
        sidebar : () => <div>Please enter your details</div>,
        main: () => <img className="Images" src ="https://tinyurl.com/yck8a57t"  alt="alistark91"/>

    },
    {
        path: "/projects",
        sidebar: () => <div>Here are some of my projects</div>,
        main: () => <div>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 2</li>
                    </div>
    },
    {
        path: "/bio",
        sidebar: () => <div>This is my bio</div>,
        main: () => <div>
                    <h2>Smarter than your average bear</h2>
                    <p>老实说这个人是一个天才，而天才出自勤奋</p>

                    </div>
    },
    {
        path: "/interests",
        sidebar: () => <div>Here are some of my interests</div>,
        main: () => <div>
                    <h2>Technology</h2>
                    <p>"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."</p>
                    <h2>Chinese</h2>
                    <p>"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."</p>
                    <h2>Podcasts</h2>
                    <p>"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."</p>
                    </div>
    }

];

export function Sidebar() {
    return (
        <Router>
            <div style={{display: "flex"}}>
                <div style={{
                    padding: "10px",
                    width: "10%",
                    background: "#858c95"    
                }}
                >
                    <ul style={{listStyleType: "none", padding: "0"}}>
                        <li>
                        <Link to= "/">Home</Link>
                        </li>
                        <li>
                        <Link to= "/login">Login</Link>
                        </li>
                        <li>
                        <Link to= "/projects">Projects</Link>
                        </li>
                        <li>
                        <Link to= "/bio">Bio</Link>
                        </li>
                        <li>
                        <Link to= "/interests">Interests</Link>
                        </li>
                    </ul>

                    {routes.map ((route, index) =>(
                        <Route
                            key ={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.sidebar}
                        />
                    ))}
                </div>

                <div>
                        {routes.map((route,index) =>(
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}    
                            />

                        ))}
                </div>
                </div>    

        </Router>
    )
}

