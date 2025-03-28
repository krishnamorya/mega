import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'


function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      appwriteService.getPosts().then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
      })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    
  return (
    <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                            
                        </div>
                    ))}
                </div>
                <amp-ad width="100vw" height="320"
                             type="adsense"
                             data-ad-client="ca-pub-7149159543552980"
                             data-ad-slot="1157898914"
                             data-auto-format="mcrspv"
                             data-full-width="">
                          <div overflow=""></div>
                        </amp-ad>
                            <amp-ad width="100vw" height="320"
                             type="adsense"
                             data-ad-client="ca-pub-7149159543552980"
                             data-ad-slot="1157898914"
                             data-auto-format="mcrspv"
                             data-full-width="">
                          <div overflow=""></div>
                        </amp-ad>
            </Container>
        </div>
  )
}

export default Home
