import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });

        // Load Google AdSense script dynamically
        const adsScript = document.createElement("script");
        adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        adsScript.async = true;
        adsScript.crossOrigin = "anonymous";
        document.body.appendChild(adsScript);
    }, []);

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
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>

                {/* Google AdSense Ad */}
                <ins
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-7149159543552980"
                    data-ad-slot="1157898914"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                ></ins>

                <ins
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-7149159543552980"
                    data-ad-slot="4583473763"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                ></ins>

                <script>
                    {`(adsbygoogle = window.adsbygoogle || []).push({});`}
                </script>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7149159543552980"
                 crossorigin="anonymous"></script>
            </Container>
        </div>
    );
}

export default Home;
