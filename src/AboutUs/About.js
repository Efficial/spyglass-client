import './AboutStyle.css';


function About(){
    return(<>
    <head>
        <title> About Us Section</title>

    </head>
    <body>
        <div class="section">
        <div class="title">   
        <h1>About Us</h1>
        </div>
        <div class ="content">

            <h3> 
                Welcome to Vanguard </h3>
            <div class = "button">
                <a href = "">Read More</a>
                
                </div>
            </div>
            <div class = "social">

 	                <a href=""><i class="fab fa-facebook-f"></i></a>
					<a href=""><i class="fab fa-twitter"></i></a>
					<a href=""><i class="fab fa-instagram"></i></a>
        </div>
        </div>
        <div class = "image-section">
            <img src = "Screen Shot 2022-04-20 at 2.03.13 PM.png"/>
            </div>
    </body>
        <h1>About</h1>
    </>);
}

export default About;