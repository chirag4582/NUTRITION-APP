import React, { Component } from "react";
import data from "./foodData";
export default class FoodBox extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      img: "",
      title: "",
      cal:0
    };
  }

  add() {
    console.log("hi");
    this.setState({ count: this.state.count + 1 });
  }

  search() {
    let search = document.getElementsByClassName("search")[0].value;
    // let tab = document.getElementsByClassName("tab");
    data.filter((e) => {
      if (search === e.name) {
        this.setState({ img: e.img ,cal:e.cal});
        // console.log(tab);
      }
    });
  }

  reset(){
    this.setState({count:0,img:0,cal:0})
  }

  render() {
    return (
      <div>
        <h1>NUTRITION APP</h1>
        <div style={{marginBottom:"20px",backgroundColor:'rgb(213, 236, 119)',marginLeft:'30vh',marginRight:'30vh',borderRadius:'10px',padding:'20px'}}>
          {
            data.map((e)=>{
              return<div className="tab">
                <img src={e.img} alt="" />
                <h4>{e.name}</h4>
                <p>calories:{e.cal}</p>
              </div>
            })
          }
        </div>
        <br />
        <input type="text" placeholder="search" className="search" />
        <button
          onClick={() => {
            this.search();
          }}
        >
          search
        </button>
        <div>
          <input style={{marginTop:'2em'}} type="text" value={this.state.count} />
          <button onClick={()=>this.add()} >ADD</button>
          <button onClick={()=>this.reset()} >RESET</button>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <p>quantity:{this.state.count}</p>
          <p style={{color:'rgb(216, 255, 205)'}}>#nsbp</p>
          <p>Calories:{(this.state.count)*(this.state.cal)}</p>
        </div>
        <div>
        <img src={this.state.img} alt="" />
        </div>
        
      </div>
    );
  }
}
