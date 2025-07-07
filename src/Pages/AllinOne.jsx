import React from 'react'
import { Link } from 'react-router-dom'

function AllinOne() {
    return (
        <section className='category_section'>
            <h1 style={{ textAlign: "center" }}>Categories</h1>
            <div className="category-tags">
                <Link to="/youtube"><button>Youtube</button></Link>
                <Link to="/youtubevlogs"><button>Youtube Vlogs</button></Link>
                <Link to="/coursesandtutorials"><button>Courses and Tutorials</button></Link>
                <Link to="/podcasts"><button>Podcasts</button></Link>
                <Link to="/sportsandmovement"><button>Sports</button></Link>
                <Link to="/corporate"><button>Corporate</button></Link>
                <Link to="/food"><button>Food and Coffee Shops</button></Link>
                <Link to="/dance"><button>Dance</button></Link>
                <Link to="/docummentary"><button>Documentary</button></Link>
                <Link to="/reels"><button>Reels</button></Link>
                <Link to="/wedding"><button>Weddings</button></Link>
            </div>
            <h1 style={{ textAlign: "center" }}>Filmmaking</h1>
            <div className="category-tags">
                <Link to="/filmmaking/Handball"><button>Handball</button></Link>
                <Link to="/filmmaking/Rio"><button>Rio</button></Link>
                <Link to="/filmmaking/Danza_vertical_2"><button>Danza vertical 2</button></Link>
                <Link to="/filmmaking/EmiliaCafe"><button>EmiliaCafe</button></Link>
                <Link to="/filmmaking/FPM"><button>FPM</button></Link>
                <Link to="/filmmaking/Danza_vertical_3"><button>Danza vertical 3</button></Link>
                <Link to="/filmmaking/Pasta"><button>Pasta</button></Link>
                <Link to="/filmmaking/Pancho"><button>Pancho</button></Link>
                <Link to="/filmmaking/ClaseMADA"><button>ClaseMADA</button></Link>
                <Link to="/filmmaking/Danza_vertical_1"><button>Danza vertical 1</button></Link>
                <Link to="/filmmaking/SEBA"><button>SEBA</button></Link>
                <Link to="/filmmaking/AGUS"><button>AGUS</button></Link>
            </div>
            <h1 style={{ textAlign: "center" }}>Videoediting</h1>
            <div className="category-tags">
                <Link to="/videoediting/docummentary"><button>Docummentary</button></Link>
                <Link to="/videoediting/wedding"><button>Wedding</button></Link>
                <Link to="/videoediting/socialmedia"><button>Social media</button></Link>
                <Link to="/videoediting/commercial"><button>Commercial</button></Link>
                <Link to="/videoediting/corporate"><button>Corporate</button></Link>
                <Link to="/videoediting/youtube"><button>Youtube</button></Link>
            </div>
            <h1 style={{ textAlign: "center" }}>Animation</h1>
            <div className="category-tags">
                <Link to="/animation/thirdhome"><button>Thirdhome</button></Link>
                <Link to="/animation/kisscam"><button>Kisscam</button></Link>
                <Link to="/animation/xledger"><button>Xledger</button></Link>
            </div>
            <h1 style={{ textAlign: "center" }}>Colorgrading</h1>
            <div className="category-tags">
                <Link to="/colorgrading/ClaseMADA"><button>ClaseMADA</button></Link>
                <Link to="/colorgrading/rio"><button>Rio</button></Link>
                <Link to="/colorgrading/EmiliaCafe"><button>EmiliaCafe</button></Link>
                <Link to="/colorgrading/handball"><button>Handball</button></Link>
                <Link to="/colorgrading/pancho"><button>Pancho</button></Link>
                <Link to="/colorgrading/pasta"><button>Pasta</button></Link>
            </div>
        </section>
    )
}

export default AllinOne