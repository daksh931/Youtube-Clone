import Navbar from '../components/Navbar'
import Card from '../components/Card'


export default function Homepage() {
  // dummy data 
    const Datas = [
        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },
        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },
        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },
        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },
        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },
        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },
        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },
        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

        { title: "Is DSA worth it in 2024?" ,
        image: "pic.jpg",
        author: "Harkirat Singh",
        timestamp: "19K views * 4 hours ago", 
        },

]
return (
    <>
        <Navbar />
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 '>
            {Datas.map( data=> <div> 
                    <Card 
                        title={data.title}
                        image= {data.image}
                        author = {data.author}
                        timestamp = {data.timestamp}
                    />
            </div>)}

        </div>
    </>
)
}