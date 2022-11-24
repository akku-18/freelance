import { Search } from "@material-ui/icons";
import React from "react";
import "./topbar.css";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Labourzilla</span>
        <div className="howiItWorks">How It Works</div>
        <div className="browseJobs">Browse Jobs</div>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon"/>
          <input placeholder="Search anything you want" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="logIn">Log In</div>
        <div className="signUp">Sign Up</div>
        <button className="postProject">Post a Project</button>
      </div>
    </div>
  );
}
