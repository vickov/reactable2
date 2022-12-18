import Link from 'next/link'

export default function Home({ allPostsData }) {
    return (
        
    <><h2>TableTest</h2><br></br><>
    <Link href="/TableTest">
        <a>TableTest</a>
    </Link>
    </>
    <h2>about page</h2><br></br><>
        <Link href="/about">
            <a>About</a>
        </Link>
    </>
    </>
    )
  }