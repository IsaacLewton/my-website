import React from 'react'
import Project from './Project'

import calc from './images/calc.jpg'
import book from './images/book.jpg'

function Body() {
    console.log(calc)
    return(
        <div className = 'Body'>
            <h2>About</h2>
            <p>Hi, welcome to my first website! I am an <a href = 'https://www.mst.edu/'>MST</a> graduate. 
                In my free time, I am learning about web development because it is by far the most interesting field of 
                computer science to me. This website was built using the skills I learned in school as well as those I 
                learned on my own. It's actually my first website! Lets look at what I used to get here.
            </p>

            <h2>Things I've Been A Part Of</h2>
            <div className = 'Projects'>
                <Project 
                    img = {calc} 
                    name = {'Calculator Squad'} 
                    desc = {'Me and four other students created two calculators in a semester, one using Qt Creator and C++, the other using React.'}
                />
                <Project 
                    img = {book} 
                    name = {'Li-Spy'} 
                    desc = {'In a group of eight, we collected data from the school library to keep a live count of the amount of people there. I worked on the website that displayed the data.'}
                />
            </div>

            <h2>Contact Me</h2>
            <p>Thanks for having a look. If you think I could help you, feel free to <a href="mailto:isaacwlewis@gmail.com">email me</a></p>
        </div>
    )
}

export default Body