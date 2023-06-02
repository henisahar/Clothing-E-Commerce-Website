import "./send.css";
function  Send () {
    return ( 
        <form  method="get">
            <h1 className="h111">SEND US A MESSAGE</h1>
            <div className="corps">
                <div className="gauche">
                    <input type="text" placeholder="type here ..." />
                </div>
                <div className="droite">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your email adress" />
                    <button>Send message</button>
                </div>
            </div>
        </form>
     );
}
 
export default Send;