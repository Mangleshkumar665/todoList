
const Navbar = () => {
  return (
    <div className=" row my-2 py-2 px-2 ">
        
        <header className="col"> 
            <div className="display-4"> To-Do-List</div>
        </header>

        <section className="d-flex justify-content-end align-items-center  col">
            <div> <button className="btn btn-dark px-3 py-2 mx-2 my-2"> Sign-Up</button> </div>

            <div> <button className="btn btn-dark px-3 py-2 mx-2 my-2"> Log-In</button> </div>
            
        </section>
        <hr />
    </div>
  )
}

export default Navbar
