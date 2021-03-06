import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <React.Fragment>
           <div className="footer">
            <hr />
                <h3><u>Project Links</u></h3>
                <div className="projectLinks">
                <Link to="/blackcodher-bootcamp">Contents</Link>
                <Link to="/blackcodher-bootcamp/html/portfolio/index.html">Personal Profile</Link>
                <Link to="/blackcodher-bootcamp/html/bookshop/index.html">Book Shop</Link>
                <Link to="/blackcodher-bootcamp/javascript/quiz-along/index.html">Simple Quiz</Link>
                <Link to="/blackcodher-bootcamp/react-and-react-native/mybookcase2/public/index.html">My Bookcase</Link>
                </div>
                <p className="copyright"><Link to="mailto:iam@charlenegrant.co.uk">Charlene Grant</Link> 2020</p>
                </div>
        </React.Fragment>
    )
}

export default Footer