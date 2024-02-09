import Head from "next/head";
import {FC} from "react";

type Props = {
    title: string;
    description: string;
}

export const Meta: FC<Props> = ({ title, description }) => {
    return <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
    </Head>
}