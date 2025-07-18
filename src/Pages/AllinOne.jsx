import React from 'react'
import AnimatedLink from '../components/AnimatedLink';

function AllinOne() {
    return (
        <section className='category_section'>
            <h1 style={{ textAlign: "center" }}>Categories</h1>
            <div className="category-tags">
                <AnimatedLink to="/youtube"><button>Youtube</button></AnimatedLink>
                <AnimatedLink to="/youtubevlogs"><button>Youtube Vlogs</button></AnimatedLink>
                <AnimatedLink to="/coursesandtutorials"><button>Courses and Tutorials</button></AnimatedLink>
                <AnimatedLink to="/podcasts"><button>Podcasts</button></AnimatedLink>
                <AnimatedLink to="/sportsandmovement"><button>Sports</button></AnimatedLink>
                <AnimatedLink to="/corporate"><button>Corporate</button></AnimatedLink>
                <AnimatedLink to="/food"><button>Food and Coffee Shops</button></AnimatedLink>
                <AnimatedLink to="/dance"><button>Dance</button></AnimatedLink>
                <AnimatedLink to="/docummentary"><button>Documentary</button></AnimatedLink>
                <AnimatedLink to="/reels"><button>Reels</button></AnimatedLink>
                <AnimatedLink to="/wedding"><button>Weddings</button></AnimatedLink>
            </div>
            <h1 style={{ textAlign: "center" }}>Filmmaking</h1>
            <div className="category-tags">
                <AnimatedLink to="/filmmaking/Handball"><button>Handball</button></AnimatedLink>
                <AnimatedLink to="/filmmaking/Rio"><button>Rio</button></AnimatedLink>
                <AnimatedLink to="/filmmaking/Danza_vertical_2"><button>Danza vertical 2</button></AnimatedLink>
                <AnimatedLink to="/filmmaking/EmiliaCafe"><button>EmiliaCafe</button></AnimatedLink>
                <AnimatedLink to="/filmmaking/FPM"><button>FPM</button></AnimatedLink>
                <AnimatedLink to="/filmmaking/Danza_vertical_3"><button>Danza vertical 3</button></AnimatedLink>
                <AnimatedLink to="/filmmaking/Pasta"><button>Pasta</button></AnimatedLink>
                <AnimatedLink to="/filmmaking/Pancho"><button>Pancho</button></AnimatedLink>
                <AnimatedLink to="/filmmaking/ClaseMADA"><button>ClaseMADA</button></AnimatedLink>
                <AnimatedLink to="/filmmaking/Danza_vertical_1"><button>Danza vertical 1</button></AnimatedLink>
                <AnimatedLink to="/filmmaking/SEBA"><button>SEBA</button></AnimatedLink>
                <AnimatedLink to="/filmmaking/AGUS"><button>AGUS</button></AnimatedLink>
            </div>
            <h1 style={{ textAlign: "center" }}>Videoediting</h1>
            <div className="category-tags">
                <AnimatedLink to="/videoediting/docummentary"><button>Docummentary</button></AnimatedLink>
                <AnimatedLink to="/videoediting/wedding"><button>Wedding</button></AnimatedLink>
                <AnimatedLink to="/videoediting/socialmedia"><button>Social media</button></AnimatedLink>
                <AnimatedLink to="/videoediting/commercial"><button>Commercial</button></AnimatedLink>
                <AnimatedLink to="/videoediting/corporate"><button>Corporate</button></AnimatedLink>
                <AnimatedLink to="/videoediting/youtube"><button>Youtube</button></AnimatedLink>
            </div>
            <h1 style={{ textAlign: "center" }}>Animation</h1>
            <div className="category-tags">
                <AnimatedLink to="/animation/thirdhome"><button>Thirdhome</button></AnimatedLink>
                <AnimatedLink to="/animation/Kisscam"><button>Kisscam</button></AnimatedLink>
                <AnimatedLink to="/animation/Xledger"><button>Xledger</button></AnimatedLink>
            </div>
            <h1 style={{ textAlign: "center" }}>Colorgrading</h1>
            <div className="category-tags">
                <AnimatedLink to="/colorgrading/ClaseMADA"><button>ClaseMADA</button></AnimatedLink>
                <AnimatedLink to="/colorgrading/Rio"><button>Rio</button></AnimatedLink>
                <AnimatedLink to="/colorgrading/EmiliaCafe"><button>EmiliaCafe</button></AnimatedLink>
                <AnimatedLink to="/colorgrading/Handball"><button>Handball</button></AnimatedLink>
                <AnimatedLink to="/colorgrading/Pancho"><button>Pancho</button></AnimatedLink>
                <AnimatedLink to="/colorgrading/Pasta"><button>Pasta</button></AnimatedLink>
            </div>
        </section>
    )
}

export default AllinOne