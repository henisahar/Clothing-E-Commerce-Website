import './Header.css'
function Header(){
  return (
    <div className="section">
      <div className='pn'><h3>Popular now</h3></div>
      <div> <a className='va'href='/Articles'>View All</a></div>
    </div>
  )
}
export default Header;