'use client'

import React, { useState } from 'react'

import P5 from "p5";
import Sketch from 'p5-react';

const canvas = () => {
  

    const make2DArray = (cols, rows) =>{
        let arr = new Array(cols);
        for(let i = 0; i < arr.length; i++){
            arr[i] = new Array(rows);
        }

        return arr;
    }


    let grid,cols,rows,resolution=10, width=600, height=400;



    const setup = (p5, canvasRef) => {
        p5.createCanvas(width, height).parent(canvasRef);
        cols = p5.floor(p5.width/resolution);
        rows = p5.floor(p5.height/resolution);

        grid = make2DArray(cols,rows);
        
        for(let i=0; i < cols; i++){
            for(let j=0; j<rows; j++){
                //put a random number 1 or 0 in grid[
                grid[i][j] = 0;
            }
        }
      };
    const sketch = (p5) =>{
        const [play,setPlay] = useState(false);
            const changePlay = () =>{
                setPlay(true);
                console.log(play)
            }
       

        p5.draw = () =>{
            

                    if(!play){
                        let x = p5.floor(p5.mouseX/resolution);
                        let y = p5.floor(p5.mouseY/resolution);
                        //convert x and y to correponding grid cell
                        let col = p5.floor(p5.mouseX/resolution);
                        let row = p5.floor(p5.mouseY/resolution);
                        //if mouse is pressed, and grid[col][row] == 0 then set grid[col][row] = 1
                        if(p5.mouseIsPressed && grid[col][row] == 0){
                            console.log(col,row)
                            grid[col][row] = 1;
                        }else if(p5.mouseIsPressed && grid[col][row] == 1){
                            grid[col][row] = 0;
                            console.log(col,row)
                        }
                        //put a time wait of 15 seconds
                        p5.background(0);
                        for(let i=0; i < cols; i++){
                            for(let j=0; j<rows; j++){
                                let x = i*resolution;
                                let y = j*resolution;
                                if(grid[i][j] == 1){
                                    p5.fill(255);
                                    p5.stroke(0);
                                    p5.rect(x,y,resolution-1,resolution-1);
                                }
                            }
                        }
                        p5.background(0);
                    for(let i=0; i < cols; i++){
                        for(let j=0; j<rows; j++){
                            let x = i*resolution;
                            let y = j*resolution;
                            if(grid[i][j] == 1){
                                p5.fill(255);
                                p5.stroke(0);
                                p5.rect(x,y,resolution-1,resolution-1);
                            }
                        }
                    }
                    

                    }else if (play){
                        console.log("after")
                        let next = make2DArray(cols, rows)
                //compute next based on grid
                for(let i=0; i < cols; i++){
                    for(let j=0; j<rows; j++){
                        let state= grid[i][j]
                        //count live neighbors
                        let sum = 0;
                        let neighbors = countNeighbors(grid, i, j)
                        if (state == 0 && neighbors == 3) {
                            next[i][j] = 1;
                          } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                            next[i][j] = 0;
                          } else {
                            next[i][j] = state;
                          }
                    }
                }
                grid = next;

                    }


                    
               

              
                
            }
            //get x and y pos of mouse
           
           

            
        }

   


    const countNeighbors = (grid, x, y) =>{
        let sum=0;
        for(let i = -1; i<2; i++){
            for(let j=-1; j<2;j++){
                let col= (x+i+cols) % cols;
                let row = (y+j+rows) % rows;
                sum += grid[col][row];
            }
        }
        sum -= grid[x][y];
        return sum;
    }

  return (
    <div className="container">
        <Sketch setup={setup} sketch={sketch}/>
        <button onClick={changePlay}>Lesgo</button>
    </div>
)
}

export default canvas