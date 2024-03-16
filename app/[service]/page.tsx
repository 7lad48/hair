import React from 'react';
// import {Metadata} from "next";
// import {API} from "@/api/api";

type PropsType = {
    params: {
        service: string // object key like [folderName]
    }
}

// export async function generateMetadata({params: {page}}: PropsType): Promise<Metadata> {
//     // const post = await API.getPost(id)
//     // return {
//     //     title: post.title,
//     // }
// }
const Service = async ({ params: {service} }: PropsType) => {
    // const post = await API.getPost(id)
    return (
        <>
            <h3>{service}</h3>
        </>
    );
}

export default Service;